import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Highlightable {
    Kind: HighlightableKind;
    Highlighted: boolean;
}

export const enum HighlightableKind {
    Region,
    Unit,
}

export function highlightable(kind: HighlightableKind) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Highlightable;
        game.World.Highlightable[entity] = {
            Kind: kind,
            Highlighted: false,
        };
    };
}
