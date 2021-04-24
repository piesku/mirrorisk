import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Highlightable {
    Kind: HighlightableKind;
    Highlighted: boolean;
    Text: string;
}

export const enum HighlightableKind {
    Region,
    Unit,
}

export function highlightable(kind: HighlightableKind, Text: string = "") {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Highlightable;
        game.World.Highlightable[entity] = {
            Kind: kind,
            Highlighted: false,
            Text,
        };
    };
}
