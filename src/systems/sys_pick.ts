import {get_translation} from "../../common/mat4.js";
import {Vec3} from "../../common/math.js";
import {ray_intersect_aabb, ray_intersect_mesh} from "../../common/raycast.js";
import {normalize, subtract, transform_direction, transform_point} from "../../common/vec3.js";
import {query_all} from "../components/com_children.js";
import {Collide} from "../components/com_collide.js";
import {Entity, Game} from "../game.js";
import {input_pointer_position} from "../input.js";
import {Has} from "../world.js";

const QUERY = Has.Transform | Has.Collide;

export function sys_pick(game: Game, delta: number) {
    let pickables: Array<Collide> = [];
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            pickables.push(game.World.Collide[i]);
        }
    }

    game.Picked = undefined;
    if (game.Cameras.length > 0) {
        update(game, game.Cameras[0], pickables);
    }
}

function update(game: Game, entity: Entity, pickables: Array<Collide>) {
    let transform = game.World.Transform[entity];
    let camera = game.World.Camera[entity];

    let pointer_position = input_pointer_position(game);
    if (pointer_position === null) {
        // No mouse, no touch.
        return;
    }

    let x = (pointer_position[0] / game.ViewportWidth) * 2 - 1;
    // In the browser, +Y is down. Invert it, so that in NDC it's up.
    let y = -(pointer_position[1] / game.ViewportHeight) * 2 + 1;

    // The ray's origin is at the camera's world position.
    let origin = get_translation([0, 0, 0], transform.World);

    // The target is the point on the far plane where the mouse click happens;
    // first transform it to the eye space, and then to the world space.
    let target: Vec3 = [x, y, -1];
    transform_point(target, target, camera.Unprojection);
    transform_point(target, target, transform.World);

    // The ray's direction.
    let direction: Vec3 = [0, 0, 0];
    subtract(direction, target, origin);
    normalize(direction, direction);

    let hit_aabb = ray_intersect_aabb(pickables, origin, direction);
    if (hit_aabb) {
        let collider = hit_aabb.Collider as Collide;
        let entity = collider.Entity;

        for (let child of query_all(game.World, entity, Has.Pickable)) {
            let pickable = game.World.Pickable[child];
            if (pickable.Mesh) {
                // The ray in the pickable's self space.
                let origin_self: Vec3 = [0, 0, 0];
                let direction_self: Vec3 = [0, 0, 0];

                let transform = game.World.Transform[entity];
                // Transform the ray to the pickable's space, which is cheaper than
                // transforming all vertices of the pickable to the world space.
                transform_point(origin_self, origin, transform.Self);
                transform_direction(direction_self, direction, transform.Self);

                let hit_mesh = ray_intersect_mesh(pickable.Mesh, origin, direction);
                if (hit_mesh) {
                    // Transform the intersection point back to the world space.
                    transform_point(hit_mesh.Point, hit_mesh.Point, transform.World);
                    game.Picked = {
                        Entity: child,
                        Point: hit_mesh.Point,
                    };
                    return;
                }
            } else {
                game.Picked = {
                    Entity: child,
                    Point: hit_aabb.Point,
                };
                return;
            }
        }
    }
}

export interface Picked {
    Entity: Entity;
    Point: Vec3;
}
