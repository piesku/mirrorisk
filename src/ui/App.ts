import {html} from "../../common/html.js";
import {Game} from "../game.js";
import {AlertWindow} from "./AlertWindow.js";
import {LogWindow} from "./LogWindow.js";
import {PopupWindow} from "./PopupWindow.js";
import {Toolbar} from "./Toolbar.js";
import {Tooltip} from "./Tooltip.js";

export function App(game: Game) {
    return html` ${Toolbar(game)} ${Tooltip(game)} ${LogWindow(game)} ${AlertWindow(game)}
    ${PopupWindow(game)}`;
}

export function Logger(game: Game, text: string) {
    // alert(text);
    game.Logs += `${text}<br/>`;
}

export function Alert(game: Game, text: string) {
    game.AlertText = text;
}

export function Popup(game: Game, text: string, title: string) {
    game.PopupText = text;
    game.PopupTitle = title;
}
