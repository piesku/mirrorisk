import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game} from "../game.js";
import {Button} from "./Button.js";

let alertWidth = 300;

export function AlertWindow(game: Game) {
    if (!game.AlertText) {
        return "";
    }
    return html`<div
        class="window"
        style="width: ${alertWidth}px;position: absolute; left: ${(window.innerWidth - alertWidth) /
        2}px"
    >
        <div class="title-bar">
            <div class="title-bar-text">Alert</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            <p>${game.AlertText}</p>
            ${Button("OK", Action.ClearAlert)}
        </div>
    </div>`;
}
