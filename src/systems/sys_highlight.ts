import {HighlightableKind} from "../components/com_highlightable.js";
import {RenderColoredDiffuse} from "../components/com_render1.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Highlightable;

export function sys_highlight(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let highlightable = game.World.Highlightable[entity];

    if (game.Pick?.Entity === entity) {
        // When the cursor is over the entity…

        // …highlight it.
        if (!highlightable.Highlighted) {
            highlightable.Highlighted = true;

            switch (highlightable.Kind) {
                case HighlightableKind.Region: {
                    let render = game.World.Render[entity] as RenderColoredDiffuse;
                    render.Color[0] += 0.5;
                    break;
                }
                case HighlightableKind.Unit: {
                    let mesh = game.World.Children[entity].Children[1];
                    let render = game.World.Render[mesh] as RenderColoredDiffuse;
                    render.Color[0] += 1;
                    break;
                }
            }
        }
    } else {
        // When the cursor is not over the entity…

        // …remove the highlight.
        if (highlightable.Highlighted) {
            highlightable.Highlighted = false;
            switch (highlightable.Kind) {
                case HighlightableKind.Region: {
                    let render = game.World.Render[entity] as RenderColoredDiffuse;
                    render.Color[0] -= 0.5;
                    break;
                }
                case HighlightableKind.Unit: {
                    let mesh = game.World.Children[entity].Children[1];
                    let render = game.World.Render[mesh] as RenderColoredDiffuse;
                    render.Color[0] -= 1;
                    break;
                }
            }
        }
    }
}
