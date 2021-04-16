import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Team {
    Id: number;
}

export function team(id: number) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Team;
        game.World.Team[entity] = {
            Id: id,
        };
    };
}
