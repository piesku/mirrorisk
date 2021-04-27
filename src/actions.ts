import {play_buffer} from "../common/audio.js";
import {Quat, Vec3} from "../common/math.js";
import {element, float, integer} from "../common/random.js";
import {blueprint_unit} from "./blueprints/blu_unit.js";
import {territories_controlled_by_team, units_entity_ids} from "./components/com_team.js";
import {destroy_entity, instantiate} from "./entity.js";
import {ContinentBonus, Game, PlayerType, TurnPhase} from "./game.js";
import {Alert, Logger, Popup} from "./ui/App.js";
import {Has} from "./world.js";
export const enum Action {
    StartDeployment,
    EndDeployment,
    DeployUnit,
    SetupBattles,
    ResolveBattles,
    EndTurn,
    ShowTooltipText,
    ClearTooltipText,
    ClearAlert,
    ClearPopup,
}

export function dispatch(game: Game, action: Action, payload: unknown) {
    let current_player_name = game.Players[game.CurrentPlayer].Name;
    switch (action) {
        case Action.StartDeployment: {
            let game_over = false;
            let most_territories = 0;
            let best_player = 0;

            game.Battles = [];
            for (let i = 0; i < game.Players.length; i++) {
                let territories = territories_controlled_by_team(game, i);
                let territories_qty = Object.keys(territories).length;

                Logger(game, `${game.Players[i].Name} controls ${territories_qty} territories`);

                if (most_territories < territories_qty) {
                    most_territories = territories_qty;
                    best_player = i;
                }

                if (territories_qty === 0) {
                    game_over = true;
                }
            }

            if (game_over) {
                Popup(game, `Game over! ${game.Players[best_player].Name} won!`, `Game over!`);
                game.TurnPhase = TurnPhase.Endgame;
            }

            Logger(game, `C:&#92;> ${current_player_name}'s turn`);
            game.CurrentPlayerTerritories = Object.keys(
                territories_controlled_by_team(game, game.CurrentPlayer)
            ).map((e) => parseInt(e, 10));

            // XXX: Add continent bonus here
            let units_to_deploy = Math.max(~~(game.CurrentPlayerTerritories.length / 3), 3);
            let bonus = 0;
            let continents_controlled = [];

            for (let j = 0; j < (game.ContinentBonus as Array<ContinentBonus>).length; j++) {
                let continent = game.ContinentBonus[j];
                let territories = continent.Territories.slice().filter(
                    (ter_id) => !game.CurrentPlayerTerritories.includes(ter_id)
                );

                if (territories.length === 0 && continent.Territories.length > 0) {
                    bonus += continent.Bonus;
                    units_to_deploy += continent.Bonus;
                    continents_controlled.push(continent.Name);
                }
            }
            if (!game.IsAiTurn) {
                Alert(
                    game,
                    `It's your turn now!${
                        bonus > 0
                            ? ` You receive ${bonus} extra armies for controling ${continents_controlled.join(
                                  ", "
                              )}. `
                            : " "
                    }Select territories to deploy ${units_to_deploy} new armies.`
                );
            }

            game.TurnPhase = TurnPhase.Deploy;
            game.UnitsDeployed = 0;
            game.UnitsToDeploy = units_to_deploy;
            break;
        }

        case Action.DeployUnit: {
            if (game.UnitsDeployed === game.UnitsToDeploy) {
                return;
            }

            let {territory_id, position} = payload as {territory_id: number; position: Vec3};
            if (position) {
                let territory_entity_id = game.TerritoryEntities[territory_id];
                let territory_name = game.World.Territory[territory_entity_id].Name;
                Logger(game, `${current_player_name} deploys an army to ${territory_name}`);

                let deployed_unit_entity = instantiate(
                    game,
                    blueprint_unit(
                        game,
                        [position[0], -5, position[2]],
                        territory_id,
                        game.CurrentPlayer
                    )
                );

                game.World.NavAgent[deployed_unit_entity].Destination = [
                    position[0],
                    position[1] + 1,
                    position[2],
                ];
            }

            game.UnitsDeployed++;

            break;
        }

        case Action.EndDeployment: {
            game.TurnPhase = TurnPhase.Move;
            game.UnitsDeployed = 0;
            break;
        }

        case Action.SetupBattles: {
            game.TurnPhase = TurnPhase.Battle;
            let current_player_territories = territories_controlled_by_team(
                game,
                game.CurrentPlayer
            );
            let current_player_territory_ids = Object.keys(current_player_territories).map((e) =>
                parseInt(e, 10)
            );
            for (let i = 0; i < game.Players.length; i++) {
                if (i === game.CurrentPlayer) {
                    continue;
                }
                let enemy_territories = territories_controlled_by_team(game, i);
                let enemy_territory_ids = Object.keys(enemy_territories).map((e) =>
                    parseInt(e, 10)
                );

                for (let j = 0; j < enemy_territory_ids.length; j++) {
                    if (current_player_territory_ids.includes(enemy_territory_ids[j])) {
                        let territory_id = enemy_territory_ids[j];
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
                                let enemy_territory_id = enemy_territory_ids[j];
                                Logger(
                                    game,
                                    `${current_player_name} attacks ${game.Players[i].Name} in ${territory_name} with ${current_player_territories[enemy_territory_id]} armies against ${enemy_territories[enemy_territory_id]} armies.`
                                );

                                let battle_result = fight(
                                    game,
                                    current_player_territories[enemy_territory_id],
                                    enemy_territories[enemy_territory_id],
                                    !game.IsAiTurn,
                                    game.Players[i].Type === PlayerType.Human
                                );

                                let loser, winner;
                                let winner_units_lost: number | undefined;
                                if (battle_result.result === BattleResult.AttackWon) {
                                    winner_units_lost =
                                        current_player_territories[enemy_territory_id] -
                                        battle_result.attacking_units;
                                    Logger(
                                        game,
                                        `${current_player_name} ${
                                            winner_units_lost === 0
                                                ? "wins"
                                                : `loses ${winner_units_lost} armies but still manages to win`
                                        } the battle!`
                                    );
                                    loser = i;
                                    winner = game.CurrentPlayer;
                                } else {
                                    winner_units_lost =
                                        enemy_territories[enemy_territory_id] -
                                        battle_result.defending_units;
                                    Logger(
                                        game,
                                        `${game.Players[i].Name} ${
                                            winner_units_lost === 0
                                                ? "wins"
                                                : `loses ${winner_units_lost} armies but still manages to win`
                                        } the battle!`
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
                dispatch(game, Action.EndTurn, {});
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
        case Action.EndTurn: {
            game.World.Signature[game.SunEntity] |= Has.ControlAlways;
            game.CurrentlyFoughtOverTerritory = null;

            setTimeout(() => {
                let players_count = game.Players.length;
                let next_player = (players_count + game.CurrentPlayer + 1) % players_count;

                let next_player_units = units_entity_ids(game, next_player);

                for (let i = 0; i < next_player_units.length; i++) {
                    game.World.NavAgent[next_player_units[i]].Actions = 1;
                }

                game.IsAiTurn = game.Players[next_player].Type === PlayerType.AI;

                if (game.IsAiTurn) {
                    game.AiActiveUnits = next_player_units.slice();
                }

                game.World.Signature[game.SunEntity] &= ~Has.ControlAlways;
                game.World.Transform[
                    game.SunEntity
                ].Rotation = game.InitialSunPosition.slice() as Quat;
                game.World.Transform[game.SunEntity].Dirty = true;
                game.CurrentPlayer = next_player;
                dispatch(game, Action.StartDeployment, {});
            }, 1000);
            break;
        }

        case Action.ShowTooltipText: {
            game.TooltipText = payload as string;
            break;
        }

        case Action.ClearTooltipText: {
            game.TooltipText = null;
            break;
        }

        case Action.ClearAlert: {
            game.Audio.resume();
            game.AlertText = null;
            break;
        }

        case Action.ClearPopup: {
            game.PopupText = undefined;
            game.PopupTitle = undefined;
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
