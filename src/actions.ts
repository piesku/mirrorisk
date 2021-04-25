import {get_coord_by_territory_id} from "./blueprints/blu_territory.js";
import {blueprint_unit} from "./blueprints/blu_unit.js";
import {territories_controlled_by_team, units_entity_ids} from "./components/com_team.js";
import {instantiate} from "./entity.js";
import {Game, PlayerType, TurnPhase} from "./game.js";
import {Alert} from "./ui/App.js";
import {Has} from "./world.js";

export const enum Action {
    StartDeployment,
    EndDeployment,
    DeployUnit,
    EndTurn,
    ShowTooltipText,
    ClearTooltipText,
}

export function dispatch(game: Game, action: Action, payload: unknown) {
    switch (action) {
        case Action.StartDeployment: {
            console.log("Deployment, player ", game.CurrentPlayer);
            game.CurrentPlayerTerritories = Object.keys(
                territories_controlled_by_team(game, game.CurrentPlayer)
            ).map((e) => parseInt(e, 10));

            // XXX: Add continent bonus here
            let units_to_deploy = Math.max(~~(game.CurrentPlayerTerritories.length / 3), 3);
            Alert(`Select territories to deploy ${units_to_deploy} units.`);

            game.TurnPhase = TurnPhase.Deploy;
            game.UnitsDeployed = 0;
            game.UnitsToDeploy = units_to_deploy;
            break;
        }

        case Action.DeployUnit: {
            if (game.UnitsDeployed === game.UnitsToDeploy) {
                return;
            }

            let {territory_id} = payload as {territory_id: number};
            let translation = get_coord_by_territory_id(game, territory_id);

            if (translation) {
                let territory_name =
                    game.World.Territory[game.TerritoryEntities[territory_id]].Name;
                console.log(
                    `Deploying one unit to ${territory_name} (Player ${game.CurrentPlayer})`
                );

                instantiate(
                    game,
                    blueprint_unit(
                        game,
                        translation,
                        territory_id,
                        game.MeshSoldier,
                        game.CurrentPlayer
                    )
                );
            }

            game.UnitsDeployed++;

            break;
        }

        case Action.EndDeployment: {
            game.TurnPhase = TurnPhase.Move;
            game.UnitsDeployed = 0;
            break;
        }

        case Action.EndTurn: {
            game.World.Signature[game.SunEntity] |= Has.ControlAlways;

            setTimeout(() => {
                let players_count = game.Players.length;
                let next_player = (players_count + game.CurrentPlayer + 1) % players_count;

                let next_player_units = units_entity_ids(game, next_player);

                for (let i = 0; i < next_player_units.length; i++) {
                    game.World.NavAgent[next_player_units[i]].Actions = 1;
                }

                game.IsAiTurn = game.Players[next_player].Type === PlayerType.AI;

                if (game.IsAiTurn) {
                    game.AiActiveUnits = next_player_units.slice();
                }

                game.World.Signature[game.SunEntity] &= ~Has.ControlAlways;
                game.CurrentPlayer = next_player;
                dispatch(game, Action.StartDeployment, {});
            }, 2000);
            break;
        }

        case Action.ShowTooltipText: {
            game.TooltipText = payload as string;
            // console.log(payload);
            break;
        }

        case Action.ClearTooltipText: {
            game.TooltipText = null;
            break;
        }
    }
}
