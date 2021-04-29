import {vec4_to_hex} from "../../common/color.js";
import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game, PlayerType} from "../game.js";
import {PopupWindow} from "./PopupWindow.js";

export function GameSetup(game: Game) {
    return PopupWindow(
        "Game Setup",
        html`
            <fieldset style="background: transparent;">
                <legend>Number of players</legend>
                <div class="field-row">
                    <label>Fewer</label>
                    <input
                        id="team_count"
                        type="range"
                        min="1"
                        max="6"
                        value="${game.Players.length}"
                        onchange="$(${Action.ChangeNumberOfTeams}, this.value)"
                    />
                    <label>More</label>
                </div>
                <div class="field-row" style="justify-content: center;">
                    <label>${game.Players.length} players</label>
                </div>
            </fieldset>
            <fieldset style="background: transparent;">
                <legend>Player details</legend>
                ${game.Players.map(
                    (team, idx) => html`
                        <div class="field-row">
                            <input
                                id="team${idx}_color"
                                type="color"
                                value="${vec4_to_hex(team.Color)}"
                                onchange="$(${Action.ChangeTeamDetails}, [${idx}, this.parentElement])"
                            />
                            <input
                                id="team${idx}_name"
                                type="text"
                                value="${team.Name}"
                                onchange="$(${Action.ChangeTeamDetails}, [${idx}, this.parentElement])"
                            />
                            <select
                                onchange="$(${Action.ChangeTeamDetails}, [${idx}, this.parentElement])"
                            >
                                <option
                                    value="${PlayerType.Human}"
                                    ${team.Type === PlayerType.Human && "selected"}
                                >
                                    Human
                                </option>
                                <option
                                    value="${PlayerType.AI}"
                                    ${team.Type === PlayerType.AI && "selected"}
                                >
                                    Computer
                                </option>
                            </select>
                        </div>
                    `
                )}
            </fieldset>
            <div style="text-align: center;">
                <button onclick="$(${Action.StartGame});">Play</button>
            </div>
        `
    );
}
