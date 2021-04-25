import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Move | Has.ControlCamera;
const MOUSE_SENSITIVITY = 0.1;
const ZOOM_FACTOR = 1.1;

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

    if (control.Move && game.InputState["MousePressedTraveled"] > 10) {
        move.MoveSpeed = control.Move * game.CameraZoom ** ZOOM_FACTOR;
        if (game.InputDelta["MouseX"]) {
            let amount = game.InputDelta["MouseX"] * MOUSE_SENSITIVITY;
            move.Directions.push([amount, 0, 0]);
        }

        if (game.InputDelta["MouseY"]) {
            let amount = game.InputDelta["MouseY"] * MOUSE_SENSITIVITY;
            move.Directions.push([0, 0, amount]);
        }
    }

    if (control.Zoom && game.InputDelta["WheelY"]) {
        move.MoveSpeed = control.Zoom * game.CameraZoom ** ZOOM_FACTOR;
        move.Directions.push([0, 0, game.InputDelta["WheelY"]]);
    }
}
