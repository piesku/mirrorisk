import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game, TurnPhase} from "../game.js";

export function Toolbar(game: Game) {
    switch (game.TurnPhase) {
        case TurnPhase.Deploy: {
            return html`<div>Deployed ${game.UnitsDeployed} out of ${game.UnitsToDeploy} units</div>
            <button onclick="$(${Action.EndDeployment})" ${
                game.UnitsDeployed !== game.UnitsToDeploy && "disabled=disabled"
            }">
                End Deployment
            </button>`;
        }

        case TurnPhase.Move: {
            return html`<div>Current Player: ${game.CurrentPlayer} (${
                game.IsAiTurn ? "AI" : "Human"
            })</div>
            <button onclick="$(${Action.EndTurn})" ${game.IsAiTurn && "disabled=disabled"}">
                End Turn
            </button>`;
        }
    }
}
