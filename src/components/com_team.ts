import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export enum ControlledBy {
    Human,
    AI,
}
export interface Team {
    Id: number;
    ControlledBy: ControlledBy;
}

export function team(Id: number, ControlledBy: ControlledBy) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Team;
        game.World.Team[entity] = {
            Id,
            ControlledBy,
        };
    };
}
