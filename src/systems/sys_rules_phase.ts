import {Action, dispatch} from "../actions.js";
import {Game, TurnPhase} from "../game.js";
import {Has} from "../world.js";

export function sys_rules_phase(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if (game.World.Signature[i] & Has.Task) {
            // Wait for the pending tasks to complete.
            return;
        }
    }

    if (game.IsAiTurn) {
        switch (game.TurnPhase) {
            case TurnPhase.Deploy: {
                game.TurnPhase = TurnPhase.Move;
                break;
            }
            case TurnPhase.Move: {
                requestAnimationFrame(() => {
                    dispatch(game, Action.SetupBattles, null);
                });
                break;
            }
        }
    }
}
