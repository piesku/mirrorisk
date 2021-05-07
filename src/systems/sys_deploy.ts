import {Vec3} from "../../common/math.js";
import {element} from "../../common/random.js";
import {get_coord_by_territory_id} from "../blueprints/blu_territory.js";
import {blueprint_unit} from "../blueprints/blu_unit.js";
import {task_timeout} from "../components/com_task.js";
import {Game, TurnPhase} from "../game.js";
import {instantiate} from "../impl.js";
import {input_clicked} from "../input.js";
import {Logger} from "../ui/App.js";
import {LOG_TEAM_DEPLOYS} from "../ui/messages.js";
import {Has} from "../world.js";

export function sys_deploy(game: Game, delta: number) {
    if (game.TurnPhase !== TurnPhase.Deploy || game.AlertText) {
        return;
    }

    if (game.UnitsDeployed === game.UnitsToDeploy) {
        return;
    }

    if (game.IsAiTurn) {
        for (let i = 0; i < game.UnitsToDeploy; i++) {
            let deploy_to = element(game.CurrentPlayerTerritoryIds);
            if (deploy_to) {
                let position = get_coord_by_territory_id(game, deploy_to);
                if (position) {
                    deploy_unit(game, deploy_to, position);
                }
            }
        }
    } else {
        if (
            input_clicked(game, 0, 0) &&
            game.Picked &&
            game.World.Signature[game.Picked.Entity] & Has.Territory
        ) {
            let territory = game.World.Territory[game.Picked.Entity];
            if (game.CurrentPlayerTerritoryIds.includes(territory.Id)) {
                let position = game.Picked.Point.slice() as Vec3;
                deploy_unit(game, territory.Id, position);
            }
        }
    }
}

function deploy_unit(game: Game, territory_id: number, position: Vec3) {
    let current_player_name = game.Players[game.CurrentPlayer].Name;
    let territory_entity = game.TerritoryEntities[territory_id];
    let territory_name = game.World.Territory[territory_entity].Name;
    Logger(game, LOG_TEAM_DEPLOYS(current_player_name, territory_name));

    let deployed_unit_entity = instantiate(game, [
        ...blueprint_unit(game, [position[0], -5, position[2]], territory_id, game.CurrentPlayer),
        task_timeout(1.5),
    ]);

    game.World.NavAgent[deployed_unit_entity].Destination = [
        position[0],
        position[1] + 1,
        position[2],
    ];

    game.UnitsDeployed++;
}
