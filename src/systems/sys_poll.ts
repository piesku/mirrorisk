import {get_translation} from "../../common/mat4.js";
import {Vec3} from "../../common/math.js";
import {distance_squared} from "../../common/vec3.js";
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
    let task = game.World.Task[entity];

    switch (task.Kind) {
        case TaskKind.Proximity: {
            let transform = game.World.Transform[entity];
            let world_position: Vec3 = [0, 0, 0];
            get_translation(world_position, transform.World);

            if (distance_squared(world_position, task.Target) < CLOSE_ENOUGH_SQUARED) {
                // The task has completed.
                game.World.Signature[entity] &= ~Has.Task;
            }
            break;
        }
        case TaskKind.Timeout: {
            task.Remaining -= delta;
            if (task.Remaining < 0) {
                // The task has completed.
                game.World.Signature[entity] &= ~Has.Task;
            }

            break;
        }
    }
}
