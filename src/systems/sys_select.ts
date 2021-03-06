import {element} from "../../common/random.js";
import {SelectedState} from "../components/com_selectable.js";
import {Entity, Game, TurnPhase} from "../game.js";
import {input_clicked} from "../input.js";
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

//
const select_sfx = ["huh1.mp3", "huh2.mp3", "huh3.mp3", "huh4.mp3", "huh5.mp3"];

function update(game: Game, entity: Entity) {
    let selectable = game.World.Selectable[entity];
    let audio_source = game.World.AudioSource[entity];

    if (game.TurnPhase !== TurnPhase.Move) {
        selectable.Selected = SelectedState.None;
        return;
    }

    if (selectable.Selected === SelectedState.ThisFrame) {
        selectable.Selected = SelectedState.Currently;
    }

    if (input_clicked(game, 0, 0)) {
        // When the user left-clicks…

        if (game.Picked?.Entity === entity) {
            audio_source.Trigger = game.Sounds[element(select_sfx)];

            if (selectable.Selected === SelectedState.None) {
                // …select.
                selectable.Selected = SelectedState.ThisFrame;
            }
        } else if (selectable.Selected > SelectedState.None) {
            // …deselect.
            selectable.Selected = SelectedState.None;
        }
    } else if (input_clicked(game, 2, 1)) {
        // When the user right-clicks…

        if (selectable.Selected > SelectedState.None) {
            // …deselect.
            selectable.Selected = SelectedState.None;
        }
    }
}
