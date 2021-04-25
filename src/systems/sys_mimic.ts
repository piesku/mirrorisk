import {get_rotation, get_translation} from "../../common/mat4.js";
import {slerp} from "../../common/quat.js";
import {lerp} from "../../common/vec3.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Transform | Has.Mimic;

export function sys_mimic(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let follower_transform = game.World.Transform[entity];
    let follower_mimic = game.World.Mimic[entity];

    if (follower_mimic.Target) {
        // XXX Follower must be a top-level transform for this to work.
        let target_transform = game.World.Transform[follower_mimic.Target];

        if (follower_mimic.Position) {
            let target_world_position = get_translation([0, 0, 0], target_transform.World);
            lerp(
                follower_transform.Translation,
                follower_transform.Translation,
                target_world_position,
                follower_mimic.Stiffness
            );
            follower_transform.Dirty = true;
        }

        if (follower_mimic.Rotation) {
            let target_world_rotation = get_rotation([0, 0, 0, 0], target_transform.World);

            slerp(
                follower_transform.Rotation,
                follower_transform.Rotation,
                target_world_rotation,
                follower_mimic.Stiffness
            );
            follower_transform.Dirty = true;
        }
    }
}
