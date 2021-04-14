import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Transform | Has.Move | Has.ControlPlayer;
const SENSITIVITY = 0.1;

export function sys_control_mouse(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let control = game.World.ControlPlayer[entity];
    let transform = game.World.Transform[entity];

    if (control.Move && game.InputState.Mouse0) {
        if (game.InputDelta.MouseX) {
            transform.Translation[0] -= game.InputDelta.MouseX * SENSITIVITY;
            transform.Dirty = true;
        }

        if (game.InputDelta.MouseY) {
            transform.Translation[2] -= game.InputDelta.MouseY * SENSITIVITY;
            transform.Dirty = true;
        }
    }

    if (game.InputDelta.WheelY) {
        let move = game.World.Move[entity];
        move.Directions.push([0, 0, game.InputDelta.WheelY]);
    }
}
