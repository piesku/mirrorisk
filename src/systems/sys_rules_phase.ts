import {Quat} from "../../common/math.js";
import {initial_sun_rotation} from "../blueprints/blu_sun.js";
import {task_timeout} from "../components/com_task.js";
import {ContinentBonus, Game, PlayerType, TurnPhase} from "../game.js";
import {instantiate} from "../impl.js";
import {Alert, Logger, Popup} from "../ui/App.js";
import * as msg from "../ui/messages.js";
import {Has} from "../world.js";

export function sys_rules_phase(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if (game.World.Signature[i] & Has.Task) {
            // Wait for the pending tasks to complete.
            return;
        }
    }

    switch (game.TurnPhase) {
        case TurnPhase.Deploy: {
            if (game.IsAiTurn) {
                game.TurnPhase = TurnPhase.Move;
            }
            break;
        }
        case TurnPhase.Move: {
            if (game.IsAiTurn) {
                game.TurnPhase = TurnPhase.Battle;
            }
            break;
        }
        case TurnPhase.Battle: {
            game.TurnPhase = TurnPhase.EndTurn;

            // Rotate the sun.
            game.World.Signature[game.SunEntity] |= Has.ControlAlways;
            instantiate(game, [task_timeout(1)]);
            break;
        }
        case TurnPhase.EndTurn: {
            // Stop the sun.
            game.World.Signature[game.SunEntity] &= ~Has.ControlAlways;
            let sun_transform = game.World.Transform[game.SunEntity];
            sun_transform.Rotation = initial_sun_rotation.slice() as Quat;
            sun_transform.Dirty = true;

            // Start the next team's turn.
            let next_player = (game.Players.length + game.CurrentPlayer + 1) % game.Players.length;
            game.CurrentPlayer = next_player;

            let game_over = false;
            let most_territories = 0;
            let best_player = 0;

            game.IsAiTurn = game.Players[game.CurrentPlayer].Type === PlayerType.AI;

            for (let i = 0; i < game.Players.length; i++) {
                let territories = game.UnitsByTeamTerritory[i];
                Logger(game, msg.LOG_TEAM_CONTROL_SUMMARY(game.Players[i].Name, territories.size));

                if (most_territories < territories.size) {
                    most_territories = territories.size;
                    best_player = i;
                }

                if (territories.size === 0) {
                    game_over = true;
                }
            }

            if (game_over) {
                Popup(
                    game,
                    msg.DIALOG_GAME_OVER_BODY(game.Players[best_player].Name),
                    msg.DIALOG_GAME_OVER_TITLE()
                );
                game.TurnPhase = TurnPhase.Endgame;
            }

            let current_player_name = game.Players[game.CurrentPlayer].Name;
            Logger(game, msg.LOG_TEAM_TURN_START(current_player_name));

            let current_team_units = game.UnitsByTeamTerritory[game.CurrentPlayer];
            game.CurrentPlayerTerritoryIds = [...current_team_units.keys()];

            let units_to_deploy = Math.max(~~(game.CurrentPlayerTerritoryIds.length / 3), 3);
            let bonus = 0;
            let continents_controlled = [];

            for (let j = 0; j < (game.ContinentBonus as Array<ContinentBonus>).length; j++) {
                let continent = game.ContinentBonus[j];
                let territories = continent.Territories.slice().filter(
                    (ter_id) => !game.CurrentPlayerTerritoryIds.includes(ter_id)
                );

                if (territories.length === 0 && continent.Territories.length > 0) {
                    bonus += continent.Bonus;
                    units_to_deploy += continent.Bonus;
                    continents_controlled.push(continent.Name);
                }
            }

            if (!game.IsAiTurn) {
                console.log("no elo cotam");
                Alert(
                    game,
                    bonus > 0
                        ? msg.DIALOG_NEW_TURN_WITH_BONUS(
                              current_player_name,
                              units_to_deploy,
                              bonus,
                              continents_controlled
                          )
                        : msg.DIALOG_NEW_TURN(current_player_name, units_to_deploy)
                );
            }

            game.TurnPhase = TurnPhase.Deploy;
            game.UnitsDeployed = 0;
            game.UnitsToDeploy = units_to_deploy;

            // Replenish the current team's actions for all units.
            for (let units of current_team_units.values()) {
                for (let unit of units) {
                    let team = game.World.Team[unit];
                    team.Actions = 1;
                }
            }

            break;
        }
    }
}
