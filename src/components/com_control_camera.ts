0;
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface ControlCamera {
    Move: number;
    Zoom: number;
    Yaw: boolean;
    Pitch: boolean;
}

export function control_camera(move: number, zoom: number, yaw: boolean, pitch: boolean) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.ControlCamera;
        game.World.ControlCamera[entity] = {
            Move: move,
            Zoom: zoom,
            Yaw: yaw,
            Pitch: pitch,
        };
    };
}
