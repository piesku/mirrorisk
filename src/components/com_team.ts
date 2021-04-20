import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Team {
    Id: number;
}

export function team(Id: number) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Team;

        game.PlayerUnits[Id] = game.PlayerUnits[Id] || [];
        game.PlayerUnits[Id].push(entity);

        game.World.Team[entity] = {
            Id,
        };
    };
}