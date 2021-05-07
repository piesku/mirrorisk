import {Action, dispatch} from "../actions.js";
import {Game, TurnPhase} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Task;

export function sys_rules_phase(game: Game, delta: number) {
    let has_pending_tasks = false;
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            has_pending_tasks = true;
            break;
        }
    }

    if (has_pending_tasks) {
        // Wait for the tasks to complete.
        return;
    }

    if (game.IsAiTurn) {
        if (game.TurnPhase === TurnPhase.Move) {
            if (game.CurrentlyMovingAiUnit) {
                game.CurrentlyMovingAiUnit = null;
            } else {
                requestAnimationFrame(() => {
                    dispatch(game, Action.SetupBattles, null);
                });
            }
        }
    }
}
