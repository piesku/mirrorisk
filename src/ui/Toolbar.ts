import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game, TurnPhase} from "../game.js";
import {Button} from "./Button.js";

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
                    <p>Click on a territory you control to deploy reinforcements. Armies left to deploy: ${
                        game.UnitsToDeploy - game.UnitsDeployed
                    }.</p>
                    <p><div class="field-row">
                    <progress value="${game.UnitsDeployed}" max="${game.UnitsToDeploy}" />
                    </div></p>
                    ${Button(
                        "End Deployment",
                        Action.EndDeployment,
                        /*disabled?*/ game.IsAiTurn || game.UnitsDeployed !== game.UnitsToDeploy
                    )}
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
                    ${Button(
                        "End Turn & Resolve Battles",
                        Action.SetupBattles,
                        /*disabled?*/ game.IsAiTurn
                    )}
                </div>
            </div>`;
        }
    }
}
