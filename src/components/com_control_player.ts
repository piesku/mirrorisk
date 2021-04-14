0;
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface ControlPlayer {
    Move: boolean;
    Yaw: boolean;
    Pitch: boolean;
    Zoom: boolean;
}

export function control_player(move: boolean, yaw: boolean, pitch: boolean, zoom: boolean) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.ControlPlayer;
        game.World.ControlPlayer[entity] = {
            Move: move,
            Yaw: yaw,
            Pitch: pitch,
            Zoom: zoom,
        };
    };
}
