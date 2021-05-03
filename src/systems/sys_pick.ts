import {get_translation} from "../../common/mat4.js";
import {Vec3} from "../../common/math.js";
import {ray_intersect_aabb, ray_intersect_mesh} from "../../common/raycast.js";
import {normalize, subtract, transform_direction, transform_point} from "../../common/vec3.js";
import {query_all} from "../components/com_children.js";
import {Collide} from "../components/com_collide.js";
import {PickableKind} from "../components/com_pickable.js";
import {territories_controlled_by_team} from "../components/com_team.js";
import {Entity, Game, TurnPhase} from "../game.js";
import {input_pointer_position} from "../input.js";
import {Logger} from "../ui/App.js";
import {LOG_ERROR_UNIT_CANNOT_LEAVE} from "../ui/messages.js";
import {Has} from "../world.js";

const QUERY = Has.Pickable;
const TARGET = Has.Transform | Has.Collide;

export function sys_pick(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            let pickable = game.World.Pickable[i];
            pickable.Hover = false;
        }
    }

    let pickables: Array<Collide> = [];
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & TARGET) == TARGET) {
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

        // Player can only move if there's at least one unit left on the territory
        let territories = territories_controlled_by_team(game, game.CurrentPlayer);

        for (let child of query_all(game.World, entity, Has.Pickable)) {
            let pickable = game.World.Pickable[child];
            if (pickable.Kind === PickableKind.Unit) {
                let current_territory_id = game.World.NavAgent[child].TerritoryId;
                let units_on_territory = territories[current_territory_id];
                if (units_on_territory < 2) {
                    if (game.InputDelta["Mouse0"] === 1 && game.TurnPhase === TurnPhase.Move) {
                        Logger(game, LOG_ERROR_UNIT_CANNOT_LEAVE());
                    }
                    return;
                }
            }

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
                    pickable.Hover = true;
                    // Transform the intersection point back to the world space.
                    transform_point(hit_mesh.Point, hit_mesh.Point, transform.World);
                    game.Picked = {
                        Entity: child,
                        Point: hit_mesh.Point,
                    };
                    return;
                }
            } else {
                pickable.Hover = true;
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
