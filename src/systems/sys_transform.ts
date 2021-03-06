import {from_rotation_translation_scale, invert, multiply} from "../../common/mat4.js";
import {Transform} from "../components/com_transform.js";
import {Entity, Game} from "../game.js";
import {Has, World} from "../world.js";

const QUERY = Has.Transform;

export function sys_transform(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            let transform = game.World.Transform[i];
            if (transform.Dirty) {
                update_transform(game.World, i, transform);
            }
        }
    }
}

function update_transform(world: World, entity: Entity, transform: Transform) {
    transform.Dirty = false;

    from_rotation_translation_scale(
        transform.World,
        transform.Rotation,
        transform.Translation,
        transform.Scale
    );

    if (transform.Parent !== undefined) {
        let parent_transform = world.Transform[transform.Parent];
        multiply(transform.World, parent_transform.World, transform.World);
    }

    invert(transform.Self, transform.World);

    if (world.Signature[entity] & Has.Children) {
        let children = world.Children[entity];
        for (let child of children.Children) {
            if (world.Signature[child] & Has.Transform) {
                let child_transform = world.Transform[child];
                child_transform.Parent = entity;
                update_transform(world, child, child_transform);
            }
        }
    }
}
