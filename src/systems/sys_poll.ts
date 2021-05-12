import {TaskKind} from "../components/com_task.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Task;
const CLOSE_ENOUGH_SQUARED = 1;

export function sys_poll(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    // Does this task have dependencies that block it?
    if (game.World.Signature[entity] & Has.Children) {
        let children = game.World.Children[entity];
        for (let child of children.Children) {
            if (game.World.Signature[child] & Has.Task) {
                // A pending child means that the task cannot proceed right now.
                return;
            }
        }
    }

    let task = game.World.Task[entity];
    switch (task.Kind) {
        case TaskKind.Until: {
            if (task.Predicate()) {
                // The task has completed.
                game.World.Signature[entity] &= ~Has.Task;
                if (task.OnDone) {
                    task.OnDone();
                }
            }
            break;
        }
        case TaskKind.Timeout: {
            task.Remaining -= delta;
            if (task.Remaining < 0) {
                // The task has completed.
                game.World.Signature[entity] &= ~Has.Task;
                if (task.OnDone) {
                    task.OnDone();
                }
            }

            break;
        }
    }
}
