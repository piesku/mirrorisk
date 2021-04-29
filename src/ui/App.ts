import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game} from "../game.js";
import {AlertWindow} from "./AlertWindow.js";
import {Button} from "./Button.js";
import {LogWindow} from "./LogWindow.js";
import {PopupWindow} from "./PopupWindow.js";
import {Toolbar} from "./Toolbar.js";
import {Tooltip} from "./Tooltip.js";

export function App(game: Game) {
    return html`
        ${Toolbar(game)} ${Tooltip(game)}${LogWindow(game)} ${AlertWindow(game)}
        ${game.Popup &&
        PopupWindow(game.Popup.Title, [
            game.Popup.Content,
            `<div>${Button("OK", Action.ClearPopup)}</div>`,
        ])}
    `;
}

export function Logger(game: Game, text: string) {
    // alert(text);
    game.Logs += `${text}<br/>`;
}

export function Alert(game: Game, text: string) {
    game.AlertText = text;
}

export function Popup(game: Game, text: string, title: string) {
    game.Popup = {Title: title, Content: text};
}
