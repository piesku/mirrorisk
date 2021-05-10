import {play_buffer} from "../common/audio.js";
import {hex_to_vec4} from "../common/color.js";
import {Vec4} from "../common/math.js";
import {element, float, integer} from "../common/random.js";
import {Game, Player, PlayerType, PlayState, TurnPhase} from "./game.js";
import {destroy_entity} from "./impl.js";
import {scene_stage} from "./scenes/sce_stage.js";
import {Logger} from "./ui/App.js";
import * as msg from "./ui/messages.js";
import {Has} from "./world.js";

export const enum Action {
    ChangeNumberOfTeams,
    ChangeTeamDetails,
    StartGame,
    EndDeployment,
    SetupBattles,
    ResolveBattles,
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
            let current_player_name = game.Players[game.CurrentPlayer].Name;
            let current_team_units = game.UnitsByTeamTerritory[game.CurrentPlayer];
            let current_team_territory_ids = [...current_team_units.keys()];

            for (let i = 0; i < game.Players.length; i++) {
                if (i === game.CurrentPlayer) {
                    continue;
                }

                let enemy_team_units = game.UnitsByTeamTerritory[i];
                let enemy_team_territory_ids = [...enemy_team_units.keys()];

                for (let j = 0; j < enemy_team_territory_ids.length; j++) {
                    if (current_team_territory_ids.includes(enemy_team_territory_ids[j])) {
                        let territory_id = enemy_team_territory_ids[j];
                        let territory_entity = game.TerritoryEntities[territory_id];
                        game.Battles.push({
                            TerritoryEntity: territory_entity,
                            Run: () => {
                                let sfx = [
                                    "battle1.mp3",
                                    "battle2.mp3",
                                    "battle3.mp3",
                                    "battle4.mp3",
                                    "battle5.mp3",
                                    "battle6.mp3",
                                ];
                                play_buffer(game.Audio, undefined, game.Sounds[element(sfx)]);
                                let territory_name = game.World.Territory[territory_entity].Name;
                                let enemy_territory_id = enemy_team_territory_ids[j];
                                Logger(
                                    game,
                                    msg.LOG_TEAM_ATTACKS(
                                        territory_name,
                                        current_player_name,
                                        current_team_units.get(enemy_territory_id)!.length,
                                        game.Players[i].Name,
                                        enemy_team_units.get(enemy_territory_id)!.length
                                    )
                                );

                                let battle_result = fight(
                                    game,
                                    current_team_units.get(enemy_territory_id)!.length,
                                    enemy_team_units.get(enemy_territory_id)!.length,
                                    !game.IsAiTurn,
                                    game.Players[i].Type === PlayerType.Human
                                );

                                let loser, winner;
                                let winner_units_lost: number | undefined;
                                if (battle_result.result === BattleResult.AttackWon) {
                                    winner_units_lost =
                                        current_team_units.get(enemy_territory_id)!.length -
                                        battle_result.attacking_units;
                                    Logger(
                                        game,
                                        winner_units_lost === 0
                                            ? msg.LOG_BATTLE_RESULT_NO_LOSSES(current_player_name)
                                            : msg.LOG_BATTLE_RESULT_SOME_LOSSES(
                                                  current_player_name,
                                                  winner_units_lost
                                              )
                                    );
                                    loser = i;
                                    winner = game.CurrentPlayer;
                                } else {
                                    winner_units_lost =
                                        enemy_team_units.get(enemy_territory_id)!.length -
                                        battle_result.defending_units;
                                    Logger(
                                        game,
                                        winner_units_lost === 0
                                            ? msg.LOG_BATTLE_RESULT_NO_LOSSES(game.Players[i].Name)
                                            : msg.LOG_BATTLE_RESULT_SOME_LOSSES(
                                                  current_player_name,
                                                  winner_units_lost
                                              )
                                    );

                                    loser = game.CurrentPlayer;
                                    winner = i;
                                }

                                if (typeof loser !== undefined) {
                                    remove_defeated_units(game, enemy_territory_id, loser);
                                }

                                if (typeof winner !== undefined) {
                                    console.log({winner, winner_units_lost});
                                    remove_defeated_units(
                                        game,
                                        enemy_territory_id,
                                        winner,
                                        winner_units_lost
                                    );
                                }
                            },
                        });
                    }
                }
            }

            dispatch(game, Action.ResolveBattles, {});
            break;
        }

        case Action.ResolveBattles: {
            if (game.Battles.length === 0) {
                // TODO Replace this with battle tasks.
                game.CurrentlyFoughtOverTerritory = null;
                return;
            }

            let battle = game.Battles.pop()!;

            game.CurrentlyFoughtOverTerritory = battle.TerritoryEntity;
            let scheduled_battle = battle;
            // Wait for the camera to move over the territory.
            setTimeout(() => {
                scheduled_battle.Run();
                setTimeout(() => {
                    dispatch(game, Action.ResolveBattles, {});
                }, 1000);
            }, 1000);
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

export const enum BattleResult {
    AttackWon,
    DefenceWon,
}

export function fight(
    game: Game,
    attacking_units: number,
    defending_units: number,
    human_player_attacking: boolean,
    human_player_defending: boolean
) {
    while (attacking_units && defending_units) {
        let attackers = [];
        let defenders = [];
        for (let i = 0; i < attacking_units; i++) {
            attackers.push(integer(1, 6));
        }

        for (let i = 0; i < defending_units; i++) {
            defenders.push(integer(1, 6));
        }

        let n_attackers = attackers.sort((a, b) => b - a).slice(0, Math.min(attacking_units, 3));
        let n_defenders = defenders.sort((a, b) => b - a).slice(0, Math.min(attacking_units, 2));

        for (let i = 0; i < Math.min(n_defenders.length, n_attackers.length); i++) {
            if (n_attackers[i] > n_defenders[i]) {
                defending_units--;
            } else if (n_attackers[i] < n_defenders[i]) {
                attacking_units--;
            } else {
                if (human_player_attacking) {
                    defending_units--;
                } else {
                    attacking_units--;
                }
            }
        }
    }

    if (attacking_units) {
        return {
            result: BattleResult.AttackWon,
            attacking_units,
            defending_units,
        };
    } else {
        return {
            result: BattleResult.DefenceWon,
            attacking_units,
            defending_units,
        };
    }
}

export function remove_defeated_units(
    game: Game,
    territory_id: number,
    team_id: number,
    qty?: number
) {
    let QUERY = Has.Team | Has.NavAgent;
    for (let i = 0; i < game.World.Signature.length; i++) {
        if (
            (game.World.Signature[i] & QUERY) === QUERY &&
            game.World.NavAgent[i].TerritoryId === territory_id &&
            game.World.Team[i].Id === team_id
        ) {
            if (qty === 0) {
                return;
            }

            if (qty) {
                qty--;
            }

            let translation = game.World.Transform[i].Translation;
            game.World.Move[i].MoveSpeed += float(-5, 5);

            game.World.Signature[i] &= ~Has.Team;
            delete game.World.Team[i];
            game.World.NavAgent[i].TerritoryId = 0;
            game.World.NavAgent[i].Destination = [
                translation[0],
                translation[1] - 7,
                translation[2],
            ];
            setTimeout(() => {
                destroy_entity(game.World, i);
            }, 1000);
        }
    }
}
