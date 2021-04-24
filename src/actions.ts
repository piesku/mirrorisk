import {Game, PlayerType} from "./game.js";
import {Has} from "./world.js";

export const enum Action {
    EndTurn,
}

export function dispatch(game: Game, action: Action, payload: unknown) {
    switch (action) {
        case Action.EndTurn: {
            game.World.Signature[game.SunEntity] |= Has.ControlAlways;

            setTimeout(() => {
                let players_count = game.Players.length;
                let next_player = (players_count + game.CurrentPlayer + 1) % players_count;

                let next_player_units = game.PlayerUnits[next_player];

                for (let i = 0; i < next_player_units.length; i++) {
                    game.World.NavAgent[next_player_units[i]].Actions = 1;
                }

                game.IsAiTurn = game.Players[next_player].Type === PlayerType.AI;

                if (game.IsAiTurn) {
                    game.AiActiveUnits = next_player_units.slice();
                }

                game.World.Signature[game.SunEntity] &= ~Has.ControlAlways;
                game.CurrentPlayer = next_player;
            }, 2000);
            break;
        }
    }
}
