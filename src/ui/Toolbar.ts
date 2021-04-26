import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game, TurnPhase} from "../game.js";

export function Toolbar(game: Game) {
    switch (game.TurnPhase) {
        case TurnPhase.Deploy: {
            if (game.IsAiTurn) {
                return "";
            }

            return html`<div class="window" style="width: 300px;margin: 10px;">
                <div class="title-bar">
                    <div class="title-bar-text">Deployment Phase</div>
                    <div class="title-bar-controls">
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <p>Click on a territory you control to deploy reinforcements</p>
                    <p><div class="field-row">
                    <label for="range25">Units left:</label>
                    <label for="range26">0</label>
                    <input id="range26" type="range" min="0" max="${game.UnitsToDeploy}" value="${
                game.UnitsDeployed
            }" style="pointer-events: none"/>
                    <label for="range27">${game.UnitsToDeploy}</label>
                    </div></p>
                    <button onclick="$(${Action.EndDeployment})" ${
                (game.IsAiTurn || game.UnitsDeployed !== game.UnitsToDeploy) && "disabled=disabled"
            }">
                        End Deployment
                    </button>
                </div>
            </div>`;
        }

        case TurnPhase.Move: {
            return html`<div class="window" style="width: 300px;margin: 10px;">
                <div class="title-bar">
                    <div class="title-bar-text">Movement Phase</div>
                    <div class="title-bar-controls">
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <p>Current Player: ${game.Players[game.CurrentPlayer].Name}</p>
                    <p>Controlled by: ${game.IsAiTurn ? "AI" : "Human"}</p>
                    <button onclick="$(${Action.SetupBattles})" ${
                game.IsAiTurn && "disabled=disabled"
            }">
                End Turn & Resolve Battles
            </button>
                </div>
            </div>`;
        }
    }
}
