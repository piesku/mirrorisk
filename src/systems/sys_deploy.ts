import {element} from "../../common/random.js";
import {Action, dispatch} from "../actions.js";
import {get_coord_by_territory_id} from "../blueprints/blu_territory.js";
import {Game, TurnPhase} from "../game.js";
import {input_clicked} from "../input.js";
import {Has} from "../world.js";

export function sys_deploy(game: Game, delta: number) {
    if (game.TurnPhase !== TurnPhase.Deploy || game.AlertText) {
        return;
    }

    if (game.IsAiTurn) {
        for (let i = 0; i < game.UnitsToDeploy; i++) {
            let deploy_to = element(game.CurrentPlayerTerritories);
            if (deploy_to) {
                let position = get_coord_by_territory_id(game, deploy_to);
                dispatch(game, Action.DeployUnit, {territory_id: deploy_to, position});
            }
        }

        setTimeout(() => {
            dispatch(game, Action.EndDeployment, {});
        }, 1500);
    } else {
        if (
            input_clicked(game, 0, 0) &&
            game.Picked &&
            game.World.Signature[game.Picked.Entity] & Has.Territory
        ) {
            let territory = game.World.Territory[game.Picked.Entity];
            if (game.CurrentPlayerTerritories.includes(territory.Id)) {
                dispatch(game, Action.DeployUnit, {
                    territory_id: territory.Id,
                    position: game.Picked.Point.slice(),
                });
            }
        }
    }
}
