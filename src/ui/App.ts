import {html} from "../../common/html.js";
import {Game} from "../game.js";
import {LogWindow} from "./LogWindow.js";
import {Toolbar} from "./Toolbar.js";
import {Tooltip} from "./Tooltip.js";

export function App(game: Game) {
    return html` ${Toolbar(game)} ${Tooltip(game)} ${LogWindow(game)}`;
}

export function Alert(game: Game, text: string) {
    // alert(text);
    game.Logs += `${text}<br/>`;
}
