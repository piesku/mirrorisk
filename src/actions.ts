import {Vec3} from "../common/math.js";
import {float} from "../common/random.js";
import {blueprint_unit} from "./blueprints/blu_unit.js";
import {territories_controlled_by_team, units_entity_ids} from "./components/com_team.js";
import {destroy_entity, instantiate} from "./entity.js";
import {ContinentBonus, Game, PlayerType, TurnPhase} from "./game.js";
import {Alert, Logger} from "./ui/App.js";
import {Has} from "./world.js";
export const enum Action {
    StartDeployment,
    EndDeployment,
    DeployUnit,
    SetupBattles,
    ResolveBattles,
    EndTurn,
    ShowTooltipText,
    ClearTooltipText,
    ClearAlert,
}

export function dispatch(game: Game, action: Action, payload: unknown) {
    let current_player_name = game.Players[game.CurrentPlayer].Name;
    switch (action) {
        case Action.StartDeployment: {
            game.Battles = [];
            for (let i = 0; i < game.Players.length; i++) {
                Logger(
                    game,
                    `${game.Players[i].Name} controlls ${
                        Object.keys(territories_controlled_by_team(game, i)).length
                    } territories`
                );
            }

            Logger(game, `C:&#92;> ${current_player_name}'s turn`);
            game.CurrentPlayerTerritories = Object.keys(
                territories_controlled_by_team(game, game.CurrentPlayer)
            ).map((e) => parseInt(e, 10));

            // XXX: Add continent bonus here
            let units_to_deploy = Math.max(~~(game.CurrentPlayerTerritories.length / 3), 3);
            let bonus = 0;
            let continents_controlled = [];

            for (let j = 0; j < (game.ContinentBonus as Array<ContinentBonus>).length; j++) {
                let continent = game.ContinentBonus[j];
                let territories = continent.Territories.slice().filter(
                    (ter_id) => !game.CurrentPlayerTerritories.includes(ter_id)
                );

                if (territories.length === 0) {
                    bonus += continent.Bonus;
                    units_to_deploy += continent.Bonus;
                    continents_controlled.push(continent.Name);
                }
            }
            if (!game.IsAiTurn) {
                Alert(
                    game,
                    `Select territories to deploy ${units_to_deploy} units${
                        bonus > 0
                            ? `, including ${bonus} for controlling continents: ${continents_controlled.join(
                                  ", "
                              )}.`
                            : "."
                    }`
                );
            }

            game.TurnPhase = TurnPhase.Deploy;
            game.UnitsDeployed = 0;
            game.UnitsToDeploy = units_to_deploy;
            break;
        }

        case Action.DeployUnit: {
            if (game.UnitsDeployed === game.UnitsToDeploy) {
                return;
            }

            let {territory_id, position} = payload as {territory_id: number; position: Vec3};
            if (position) {
                let territory_entity_id = game.TerritoryEntities[territory_id];
                let territory_name = game.World.Territory[territory_entity_id].Name;
                Logger(game, `${current_player_name} deploys a unit to ${territory_name}`);

                let deployed_unit_entity = instantiate(
                    game,
                    blueprint_unit(
                        game,
                        [position[0], -5, position[2]],
                        territory_id,
                        game.CurrentPlayer
                    )
                );

                game.World.NavAgent[deployed_unit_entity].Destination = [
                    position[0],
                    position[1] + 1,
                    position[2],
                ];
            }

            game.UnitsDeployed++;

            break;
        }

        case Action.EndDeployment: {
            game.TurnPhase = TurnPhase.Move;
            game.UnitsDeployed = 0;
            break;
        }

        case Action.SetupBattles: {
            game.TurnPhase = TurnPhase.Battle;
            let current_player_territories = territories_controlled_by_team(
                game,
                game.CurrentPlayer
            );
            let current_player_territory_ids = Object.keys(current_player_territories).map((e) =>
                parseInt(e, 10)
            );
            for (let i = 0; i < game.Players.length; i++) {
                if (i === game.CurrentPlayer) {
                    continue;
                }
                let enemy_territories = territories_controlled_by_team(game, i);
                let enemy_territory_ids = Object.keys(enemy_territories).map((e) =>
                    parseInt(e, 10)
                );

                for (let j = 0; j < enemy_territory_ids.length; j++) {
                    if (current_player_territory_ids.includes(enemy_territory_ids[j])) {
                        let territory_id = enemy_territory_ids[j];
                        let territory_entity = game.TerritoryEntities[territory_id];
                        game.Battles.push({
                            TerritoryEntity: territory_entity,
                            Run: () => {
                                let territory_name = game.World.Territory[territory_entity].Name;
                                let enemy_territory_id = enemy_territory_ids[j];
                                Logger(
                                    game,
                                    `${current_player_name} attacks ${game.Players[i].Name} in ${territory_name} woth ${current_player_territories[enemy_territory_id]} unit(s) agains ${enemy_territories[enemy_territory_id]} unit(s).`
                                );

                                let battle_result = fight(
                                    game,
                                    current_player_territories[enemy_territory_id],
                                    enemy_territories[enemy_territory_id]
                                );

                                let looser;
                                if (battle_result === BattleResult.AttackWon) {
                                    Logger(game, `${current_player_name} won!`);
                                    looser = i;
                                } else {
                                    Logger(game, `${game.Players[i].Name} won!`);
                                    looser = game.CurrentPlayer;
                                }

                                if (typeof looser !== undefined) {
                                    remove_defeated_units(game, enemy_territory_id, looser);
                                }
                            },
                        });
                    }
                }
            }

            dispatch(game, Action.ResolveBattles, {});
            break;
        }

        case Action.ResolveBattles: {
            if (game.Battles.length === 0) {
                dispatch(game, Action.EndTurn, {});
                return;
            }

            let battle = game.Battles.pop()!;

            // XXX This isn't currently reset anywhere. Instead,
            // sys_control_camera resets mimic.Target in the deploy
            // phase.
            game.CurrentlyFoughtOverTerritory = battle.TerritoryEntity;
            let scheduled_battle = battle;
            // Wait for the camera to move over the territory.
            setTimeout(() => {
                scheduled_battle.Run();
                setTimeout(() => {
                    dispatch(game, Action.ResolveBattles, {});
                }, 1000);
            }, 1000);
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
            break;
        }

        case Action.ClearTooltipText: {
            game.TooltipText = null;
            break;
        }

        case Action.ClearAlert: {
            game.Audio.resume();
            game.AlertText = null;
            break;
        }
    }
}

export const enum BattleResult {
    AttackWon,
    DefenceWon,
}

export function fight(game: Game, attacking_units: number, defending_units: number) {
    // XXX Add battle logic here
    // if (float(0, 1) < 0.5) {
    return BattleResult.AttackWon;
    // } else {
    //     return BattleResult.DefenceWon;
    // }
}

export function remove_defeated_units(game: Game, territory_id: number, team_id: number) {
    let QUERY = Has.Team | Has.NavAgent;
    for (let i = 0; i < game.World.Signature.length; i++) {
        if (
            (game.World.Signature[i] & QUERY) === QUERY &&
            game.World.NavAgent[i].TerritoryId === territory_id &&
            game.World.Team[i].Id === team_id
        ) {
            let translation = game.World.Transform[i].Translation;
            game.World.Move[i].MoveSpeed += float(-5, 5);

            game.World.Signature[i] &= ~Has.Team;
            delete game.World.Team[i];
            game.World.NavAgent[i].TerritoryId = 0;
            game.World.NavAgent[i].Destination = [
                translation[0],
                translation[1] - 7,
                translation[2],
            ];
            setTimeout(() => {
                destroy_entity(game.World, i);
            }, 1000);
        }
    }
}
