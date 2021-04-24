import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game} from "../game.js";

export function App(game: Game) {
    // console.log(game.TooltipText);
    return html`
        <div>Current Player: ${game.CurrentPlayer} (${game.IsAiTurn ? "AI" : "Human"})</div>
        <button onclick="$(${Action.EndTurn})" ${game.IsAiTurn && "disabled=disabled"}">
            End Turn
        </button>

        <div style="position:absolute; bottom:0; color: black; font-size: 20px; background: white">${
            game.TooltipText
        }</div>
    `;
}
