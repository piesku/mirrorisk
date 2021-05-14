import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Team {
    Id: number;
    /** Number of this unit's actions left this turn. When negative, the unit
     * hasn't moved this turn yet but cannot move due to other constraints. */
    Actions: number;
}

export function team(Id: number) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Team;
        game.World.Team[entity] = {
            Id,
            Actions: 1,
        };
    };
}
