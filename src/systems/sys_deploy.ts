import {Action, dispatch} from "../actions.js";
import {Game, TurnPhase} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Territory;

export function sys_deploy(game: Game, delta: number) {
    if (game.TurnPhase !== TurnPhase.Deploy) {
        return;
    }
    if (game.IsAiTurn) {
    } else {
        if (game.InputDelta["Mouse0"] === 1 && game.Picked) {
            let territory = game.World.Territory[game.Picked.Entity];
            if (game.CurrentPlayerTerritories.includes(territory.Id)) {
                dispatch(game, Action.DeployUnit, {territory_id: territory.Id});
            }
        }
    }
}
