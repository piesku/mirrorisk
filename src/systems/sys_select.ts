import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Transform | Has.Selectable | Has.Children;

export function sys_select(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let children = game.World.Children[entity];
    let selectable = game.World.Selectable[entity];

    if (game.Pick?.Entity === entity) {
        // When the cursor is over the entity…

        // …select it if the user clicks.
        if (!selectable.Selected && game.InputDelta["Mouse0"] === -1) {
            selectable.Selected = true;
            game.World.Signature[entity] |= Has.ControlPlayer;

            // Selection box is the first child.
            let selection = children.Children[0];
            game.World.Signature[selection] |= Has.Draw;
        }
    } else {
        // When the cursor is not over the entity…

        // …deselect it if the user clicks.
        if (selectable.Selected && game.InputDelta["Mouse0"] === -1) {
            selectable.Selected = false;
            game.World.Signature[entity] &= ~Has.ControlPlayer;

            // Selection box is the first child.
            let selection = children.Children[0];
            game.World.Signature[selection] &= ~Has.Draw;
        }
    }
}
