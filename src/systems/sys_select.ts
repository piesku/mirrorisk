import {Entity, Game, TurnPhase} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Transform | Has.Pickable | Has.Selectable | Has.Children;

export function sys_select(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update(game, i);
        }
    }

    game.Selected = undefined;
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            let selectable = game.World.Selectable[i];
            if (selectable.Selected) {
                game.Selected = i;
            }
        }
    }
}

function update(game: Game, entity: Entity) {
    let selectable = game.World.Selectable[entity];
    let audio_source = game.World.AudioSource[entity];

    if (game.TurnPhase !== TurnPhase.Move) {
        selectable.Selected = false;
    } else if (game.InputDelta["Mouse0"] === -1 && game.InputState["Mouse0DownTraveled"] < 10) {
        // When the user clicks…

        // …select.
        if (!selectable.Selected && game.Picked?.Entity === entity) {
            selectable.Selected = true;
            audio_source.Trigger = game.Sounds["huh1.mp3"];
        }

        // …deselect.
        if (selectable.Selected && game.Picked?.Entity !== entity) {
            selectable.Selected = false;
        }
    }
}
