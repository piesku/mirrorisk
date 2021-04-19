import {Game} from "./game.js";

export const enum Action {
    EndTurn,
}

export function dispatch(game: Game, action: Action, payload: unknown) {
    switch (action) {
        case Action.EndTurn: {
            console.log("next turn");
            break;
        }
    }
}
