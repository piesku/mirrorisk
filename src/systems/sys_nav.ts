import {get_translation} from "../../common/mat4.js";
import {Vec3} from "../../common/math.js";
import {copy, distance_squared, normalize, transform_point} from "../../common/vec3.js";
import {Action, dispatch} from "../actions.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Transform | Has.NavAgent | Has.Move;

export function sys_nav(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let agent = game.World.NavAgent[entity];

    if (agent.Destination) {
        let transform = game.World.Transform[entity];

        let destination: Vec3 = [0, 0, 0];
        copy(destination, agent.Destination);

        let position: Vec3 = [0, 0, 0];
        get_translation(position, transform.World);

        let distance_to_destination = distance_squared(position, agent.Destination);
        if (distance_to_destination < 1) {
            agent.Destination = null;

            // TODO: Should this check this unit's TEAM component?
            if (game.IsAiTurn) {
                game.AiActiveUnits = game.AiActiveUnits.filter((id) => id !== entity);
                game.CurrentlyMovingAiUnit = null;
                if (game.AiActiveUnits.length === 0) {
                    dispatch(game, Action.EndTurn, {});
                }
            }
        }

        // Transform the destination into the agent's self space for sys_move.
        transform_point(position, destination, transform.Self);
        normalize(position, position);

        let move = game.World.Move[entity];
        move.Directions.push(position);

        if (position[0] < 0) {
            // The target is on the right.
            move.LocalRotations.push([0, -1, 0, 0]);
        } else {
            // The target is on the left or directly behind.
            move.LocalRotations.push([0, 1, 0, 0]);
        }
    }
}
