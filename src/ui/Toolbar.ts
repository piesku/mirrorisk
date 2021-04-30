import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game, TurnPhase} from "../game.js";

export function Toolbar(game: Game) {
    switch (game.TurnPhase) {
        case TurnPhase.Deploy: {
            if (game.IsAiTurn) {
                return "";
            }

            return html`<div
                class="window"
                style="
                    width: 300px;
                    margin: 10px;
                "
                onmousedown="event.stopPropagation();"
                onmouseup="event.stopPropagation();"
            >
                <div class="title-bar">
                    <div class="title-bar-text">Deployment Phase</div>
                </div>
                <div class="window-body">
                    <p>
                        Click on a territory you control to deploy reinforcements. Armies left to
                        deploy: ${game.UnitsToDeploy - game.UnitsDeployed}.
                    </p>
                    <div class="field-row">
                        <progress value="${game.UnitsDeployed}" max="${game.UnitsToDeploy}" />
                    </div>
                    <div style="text-align: center; margin-top: 10px;">
                        <button
                            onclick="$(${Action.EndDeployment});"
                            ${game.IsAiTurn && "disabled"}
                        >
                            End Deployment
                        </button>
                    </div>
                </div>
            </div>`;
        }

        case TurnPhase.Move: {
            return html`<div
                class="window"
                style="
                    width: 300px;
                    margin: 10px;
                "
                onmousedown="event.stopPropagation();"
                onmouseup="event.stopPropagation();"
            >
                <div class="title-bar">
                    <div class="title-bar-text">Movement Phase</div>
                    <div class="title-bar-controls">
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <p>Current Player: ${game.Players[game.CurrentPlayer].Name}</p>
                    <p>Controlled by: ${game.IsAiTurn ? "AI" : "Human"}</p>
                    <div style="text-align: center;">
                        <button onclick="$(${Action.SetupBattles});" ${game.IsAiTurn && "disabled"}>
                            End Turn & Resolve Battles
                        </button>
                    </div>
                </div>
            </div>`;
        }
    }
}
