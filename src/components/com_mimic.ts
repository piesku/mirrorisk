import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Mimic {
    /** Entity whose transform to mimic. */
    Target: Entity | null;
    /** How laggy vs. precise is the mimicking [0-1]. */
    Stiffness: number;
    Position: boolean;
    Rotation: boolean;
}

export function mimic(
    target: Entity | null,
    stiffness: number,
    position: boolean,
    rotation: boolean
) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Mimic;
        game.World.Mimic[entity] = {
            Target: target,
            Stiffness: stiffness,
            Position: position,
            Rotation: rotation,
        };
    };
}
