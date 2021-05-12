import {play_buffer} from "../../common/audio.js";
import {element, float, integer} from "../../common/random.js";
import {task_timeout} from "../components/com_task.js";
import {Entity, Game, PlayerType, TurnPhase} from "../game.js";
import {destroy_entity, instantiate} from "../impl.js";
import {Logger} from "../ui/App.js";
import * as msg from "../ui/messages.js";
import {Has} from "../world.js";

const QUERY = Has.Territory;

export function sys_rules_battle(game: Game, delta: number) {
    if (game.TurnPhase !== TurnPhase.Battle) {
        return;
    }

    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update(game, i);
        }
    }
}

const sfx = [
    "battle1.mp3",
    "battle2.mp3",
    "battle3.mp3",
    "battle4.mp3",
    "battle5.mp3",
    "battle6.mp3",
];

function update(game: Game, entity: Entity) {
    if (game.CurrentlyFoughtOverTerritory) {
        // There's already a battle taking place.
        return;
    }

    let territory = game.World.Territory[entity];

    let current_team_name = game.Players[game.CurrentPlayer].Name;
    let current_team_units = game.UnitsByTeamTerritory[game.CurrentPlayer];
    let current_team_territory_ids = [...current_team_units.keys()];
    if (!current_team_territory_ids.includes(territory.Id)) {
        // There are no current team's units present on this territory.
        return;
    }

    for (let i = 0; i < game.Players.length; i++) {
        if (i === game.CurrentPlayer) {
            continue;
        }

        let enemy_team_name = game.Players[i].Name;
        let enemy_team_units = game.UnitsByTeamTerritory[i];
        let enemy_team_territory_ids = [...enemy_team_units.keys()];

        if (enemy_team_territory_ids.includes(territory.Id)) {
            // It's a battle!

            game.CurrentlyFoughtOverTerritory = entity;

            Logger(
                game,
                msg.LOG_TEAM_ATTACKS(
                    territory.Name,
                    current_team_name,
                    current_team_units.get(territory.Id)!.length,
                    enemy_team_name,
                    enemy_team_units.get(territory.Id)!.length
                )
            );

            let battle_result = fight(
                game,
                current_team_units.get(territory.Id)!.length,
                enemy_team_units.get(territory.Id)!.length,
                !game.IsAiTurn,
                game.Players[i].Type === PlayerType.Human
            );

            instantiate(game, [
                // Wait for the camera to move over the territory.
                // TOOD Replace this with task_proximity?
                task_timeout(1, () => {
                    // TODO Use spatial audio_source on the territory?
                    play_buffer(game.Audio, undefined, game.Sounds[element(sfx)]);

                    let loser, winner;
                    let winner_units_lost: number | undefined;
                    if (battle_result.result === BattleResult.AttackWon) {
                        winner_units_lost =
                            current_team_units.get(territory.Id)!.length -
                            battle_result.attacking_units;
                        Logger(
                            game,
                            winner_units_lost === 0
                                ? msg.LOG_BATTLE_RESULT_NO_LOSSES(current_team_name)
                                : msg.LOG_BATTLE_RESULT_SOME_LOSSES(
                                      current_team_name,
                                      winner_units_lost
                                  )
                        );
                        loser = i;
                        winner = game.CurrentPlayer;
                    } else {
                        winner_units_lost =
                            enemy_team_units.get(territory.Id)!.length -
                            battle_result.defending_units;
                        Logger(
                            game,
                            winner_units_lost === 0
                                ? msg.LOG_BATTLE_RESULT_NO_LOSSES(enemy_team_name)
                                : msg.LOG_BATTLE_RESULT_SOME_LOSSES(
                                      current_team_name,
                                      winner_units_lost
                                  )
                        );

                        loser = game.CurrentPlayer;
                        winner = i;
                    }

                    if (typeof loser !== undefined) {
                        remove_defeated_units(game, territory.Id, loser);
                    }

                    if (typeof winner !== undefined) {
                        console.log({winner, winner_units_lost});
                        remove_defeated_units(game, territory.Id, winner, winner_units_lost);
                    }

                    // Wait for the defeated units to sink.
                    instantiate(game, [
                        task_timeout(1, () => {
                            game.CurrentlyFoughtOverTerritory = null;
                        }),
                    ]);
                }),
            ]);
        }
    }
}

const enum BattleResult {
    AttackWon,
    DefenceWon,
}

function fight(
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
