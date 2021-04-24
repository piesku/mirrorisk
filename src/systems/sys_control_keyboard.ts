import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Move | Has.ControlPlayer;

export function sys_control_keyboard(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let control = game.World.ControlPlayer[entity];

    if (control.Yaw) {
        // Yaw is applied relative to the entity's local space; the Y axis is
        // not affected by its current orientation.
        let move = game.World.Move[entity];
        if (game.InputState["ArrowLeft"] || game.InputState["KeyA"]) {
            // Look left.
            move.LocalRotations.push([0, -1, 0, 0]);
        }
        if (game.InputState["ArrowRight"] || game.InputState["KeyD"]) {
            // Look right.
            move.LocalRotations.push([0, 1, 0, 0]);
        }
    }

    if (control.Pitch) {
        // Pitch is applied relative to the entity's self space; the X axis is
        // always aligned with its left and right sides.
        let move = game.World.Move[entity];
        if (game.InputState["ArrowUp"] || game.InputState["KeyW"]) {
            // Look up.
            move.SelfRotations.push([-1, 0, 0, 0]);
        }
        if (game.InputState["ArrowDown"] || game.InputState["KeyS"]) {
            // Look down.
            move.SelfRotations.push([1, 0, 0, 0]);
        }
    }
}