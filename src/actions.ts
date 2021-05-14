import {hex_to_vec4} from "../common/color.js";
import {Vec4} from "../common/math.js";
import {Game, Player, PlayerType, PlayState, TurnPhase} from "./game.js";
import {scene_stage} from "./scenes/sce_stage.js";

export const enum Action {
    ChangeNumberOfTeams,
    ChangeTeamDetails,
    StartGame,
    EndDeployment,
    SetupBattles,
    ClearAlert,
    ClearPopup,
}

const default_teams: Array<Player> = [
    {Name: "Yellow", Color: [1, 1, 0, 1], Type: PlayerType.Human},
    {Name: "Red", Color: [1, 0, 0, 1], Type: PlayerType.AI},
    {Name: "Green", Color: [0, 1, 0, 1], Type: PlayerType.AI},
    {Name: "Magenta", Color: [1, 0, 1, 1], Type: PlayerType.AI},
    {Name: "Cyan", Color: [0, 1, 1, 1], Type: PlayerType.AI},
    {Name: "Blue", Color: [0, 0, 1, 1], Type: PlayerType.AI},
];

export function dispatch(game: Game, action: Action, payload: unknown) {
    switch (action) {
        case Action.ChangeNumberOfTeams: {
            let count = payload as number;
            if (count < game.Players.length) {
                game.Players.splice(count);
            } else if (count > game.Players.length) {
                for (let i = 0; game.Players.length < count; i++) {
                    let team = default_teams[game.Players.length];
                    game.Players.push({
                        Name: team.Name,
                        Color: team.Color.slice() as Vec4,
                        Type: team.Type,
                    });
                }
            }
            break;
        }
        case Action.ChangeTeamDetails: {
            let [idx, form] = payload as [number, Element];
            let team_color = (form.querySelector("input[type=color]") as HTMLInputElement).value;
            let team_name = (form.querySelector("input[type=text]") as HTMLInputElement).value;
            let team_type = (form.querySelector("select") as HTMLSelectElement).value;

            game.Players[idx].Name = team_name;
            game.Players[idx].Color = hex_to_vec4(team_color);
            game.Players[idx].Type = parseInt(team_type);
            break;
        }
        case Action.StartGame: {
            requestAnimationFrame(() => {
                game.CurrentPlayer = -1;
                game.PlayState = PlayState.Playing;
                dispatch(game, Action.ClearAlert, {});
                scene_stage(game);

                for (let i = 0; i < game.Players.length; i++) {
                    game.UnitsByTeamTerritory[i] = new Map();
                }
            });
            break;
        }

        case Action.EndDeployment: {
            game.TurnPhase = TurnPhase.Move;
            break;
        }

        case Action.SetupBattles: {
            game.TurnPhase = TurnPhase.Battle;
            break;
        }

        case Action.ClearAlert: {
            game.Audio.resume();
            game.AlertText = null;
            break;
        }

        case Action.ClearPopup: {
            game.Popup = undefined;
            break;
        }
    }
}
