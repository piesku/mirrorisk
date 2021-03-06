import {get_forward, get_translation, get_up} from "../../common/mat4.js";
import {Vec3} from "../../common/math.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.AudioListener | Has.Transform;

export function sys_audio_listener(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

const distance_factor = 15;
const position: Vec3 = [0, 0, 0];
const forward: Vec3 = [0, 0, 0];
const up: Vec3 = [0, 0, 0];

function update(game: Game, entity: Entity) {
    let transform = game.World.Transform[entity];
    get_translation(position, transform.World);
    get_forward(forward, transform.World);
    get_up(up, transform.World);

    let listener = game.Audio.listener;
    if (listener.positionX) {
        // The new AudioListener API.
        listener.positionX.value = position[0] / distance_factor;
        listener.positionY.value = position[1] / distance_factor;
        listener.positionZ.value = position[2] / distance_factor;
        listener.forwardX.value = forward[0];
        listener.forwardY.value = forward[1];
        listener.forwardZ.value = forward[2];
        listener.upX.value = up[0];
        listener.upY.value = up[1];
        listener.upZ.value = up[2];
    } else {
        // Firefox & Safari.
        listener.setPosition(...position);
        listener.setOrientation(...forward, ...up);
    }
}
