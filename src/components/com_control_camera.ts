0;
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface ControlCamera {
    Move: boolean;
    Yaw: boolean;
    Pitch: boolean;
    Zoom: boolean;
}

export function control_camera(move: boolean, yaw: boolean, pitch: boolean, zoom: boolean) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.ControlCamera;
        game.World.ControlCamera[entity] = {
            Move: move,
            Yaw: yaw,
            Pitch: pitch,
            Zoom: zoom,
        };
    };
}
