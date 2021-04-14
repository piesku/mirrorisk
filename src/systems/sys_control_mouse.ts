import {Quat, Vec3} from "../../common/math.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Transform | Has.Move | Has.ControlPlayer;
const AXIS_X: Vec3 = [1, 0, 0];
const AXIS_Y: Vec3 = [0, 1, 0];

export function sys_control_mouse(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

let rotation: Quat = [0, 0, 0, 0];

function update(game: Game, entity: Entity) {
    let control = game.World.ControlPlayer[entity];
    if (!control.Move || !game.InputState.Mouse0) {
        return;
    }

    if (game.InputDelta.MouseX) {
        // Scale the mouse input by the sensitivity.
        let amount = game.InputDelta.MouseX * control.Yaw;

        let transform = game.World.Transform[entity];
        transform.Translation[0] -= amount;
        transform.Dirty = true;
    }

    if (game.InputDelta.MouseY) {
        let amount = game.InputDelta.MouseY * control.Pitch;

        let transform = game.World.Transform[entity];
        transform.Translation[2] -= amount;
        transform.Dirty = true;
    }
}
