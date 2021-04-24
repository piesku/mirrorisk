import {html} from "../../common/html.js";
import {Game} from "../game.js";
import {Toolbar} from "./Toolbar.js";
import {Tooltip} from "./Tooltip.js";

export function App(game: Game) {
    return html` ${Toolbar(game)} ${Tooltip(game)} `;
}

export function Alert(text: string) {
    // alert(text);
    console.log(text);
}
