import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game, PlayState} from "../game.js";
import {AlertWindow} from "./AlertWindow.js";
import {GameSetup} from "./GameSetup.js";
import {LogWindow} from "./LogWindow.js";
import {PopupWindow} from "./PopupWindow.js";
import {Toolbar} from "./Toolbar.js";

export function App(game: Game) {
    return html`
        ${Toolbar(game)} ${LogWindow(game)} ${AlertWindow(game)}
        ${game.PlayState === PlayState.Setup && GameSetup(game)}
        ${game.Popup &&
        PopupWindow(
            game.Popup.Title,
            html`
                ${game.Popup.Content}
                <div style="text-align: center;">
                    <button onclick="$(${Action.ClearPopup});">OK</button>
                </div>
            `
        )}
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
