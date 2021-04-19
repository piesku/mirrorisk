import {Game, Player} from "./game.js";

export const enum Action {
    EndTurn,
}

export function dispatch(game: Game, action: Action, payload: unknown) {
    switch (action) {
        case Action.EndTurn: {
            let players_count = game.Players.length;
            game.CurrentPlayer = (players_count + game.CurrentPlayer + 1) % players_count;

            let current_player_units = game.PlayerUnits[game.CurrentPlayer];

            for (let i = 0; i < current_player_units.length; i++) {
                game.World.NavAgent[current_player_units[i]].Actions = 1;
            }

            game.IsAITurn = game.Players[game.CurrentPlayer] === Player.AI;

            if (game.IsAITurn) {
                game.AIUnitsToMove = current_player_units.length;
            }

            break;
        }
    }
}
