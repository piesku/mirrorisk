import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game} from "../game.js";
import {Button} from "./Button.js";

let alertWidth = 400;

export function PopupWindow(game: Game) {
    if (!game.PopupText) {
        return "";
    }
    return html`<div
        class="window"
        style="z-index:100; width: ${alertWidth}px;position: absolute; left: ${(window.innerWidth -
            alertWidth) /
        2}px"
    >
        <div class="title-bar">
            <div class="title-bar-text">${game.PopupTitle || "Mirrorisk"}</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            <p>${game.PopupText}</p>
            ${Button("OK", Action.ClearPopup)}
        </div>
    </div>`;
}
