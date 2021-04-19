import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game} from "../game.js";

export function App(game: Game) {
    return html`
        <div>Current Player: ${game.CurrentPlayer} (${game.IsAiTurn ? "AI" : "Human"})</div>
        <button onclick="$(${Action.EndTurn})" ${game.IsAiTurn && "disabled=disabled"}">
            End Turn
        </button>
    `;
}
