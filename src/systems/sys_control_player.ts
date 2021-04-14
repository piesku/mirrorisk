import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.ControlPlayer | Has.NavAgent;

export function sys_control_player(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let agent = game.World.NavAgent[entity];

    if (game.InputDelta["Mouse2"] === 1 && game.Pick) {
        agent.Destination = game.Pick.Point;
        agent.Destination[1] += 0.5;
    }
}
