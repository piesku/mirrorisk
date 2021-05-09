import {Quat} from "../../common/math.js";
import {Action, dispatch} from "../actions.js";
import {task_timeout} from "../components/com_task.js";
import {Game, TurnPhase} from "../game.js";
import {instantiate} from "../impl.js";
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

    switch (game.TurnPhase) {
        case TurnPhase.Battle: {
            if (game.CurrentlyFoughtOverTerritory === null) {
                // We're done with battles.
                // TODO Use tasks for battles.
                game.TurnPhase = TurnPhase.EndTurn;

                // Rotate the sun.
                game.World.Signature[game.SunEntity] |= Has.ControlAlways;
                instantiate(game, [task_timeout(1)]);
            }
            break;
        }
        case TurnPhase.EndTurn: {
            // Stop the sun.
            game.World.Signature[game.SunEntity] &= ~Has.ControlAlways;
            let sun_transform = game.World.Transform[game.SunEntity];
            sun_transform.Rotation = game.InitialSunPosition.slice() as Quat;
            sun_transform.Dirty = true;

            // Start the next team's turn.
            let next_player = (game.Players.length + game.CurrentPlayer + 1) % game.Players.length;
            game.CurrentPlayer = next_player;
            dispatch(game, Action.StartDeployment, null);
            break;
        }
    }
}
