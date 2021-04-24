import {html} from "../../common/html.js";
import {Game} from "../game.js";

export function Tooltip(game: Game) {
    return html`<div
        style="position:absolute; bottom:0; color: black; font-size: 20px; background: white"
    >
        ${game.TooltipText}
    </div>`;
}
