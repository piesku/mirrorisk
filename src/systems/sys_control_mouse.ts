import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Move | Has.ControlCamera;
const SENSITIVITY = 0.1;

export function sys_control_mouse(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let control = game.World.ControlCamera[entity];
    let move = game.World.Move[entity];

    if (control.Move && game.InputState.Mouse0) {
        if (game.InputDelta.MouseX) {
            let amount = game.InputDelta.MouseX * SENSITIVITY;
            move.Directions.push([amount, 0, 0]);
        }

        if (game.InputDelta.MouseY) {
            let amount = game.InputDelta.MouseY * SENSITIVITY;
            move.Directions.push([0, 0, amount]);
        }
    }

    if (control.Zoom && game.InputDelta.WheelY) {
        move.Directions.push([0, 0, game.InputDelta.WheelY]);
    }
}
