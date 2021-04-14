import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Selectable {
    Selected: boolean;
}

export function selectable() {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Selectable;
        game.World.Selectable[entity] = {
            Selected: false,
        };
    };
}
