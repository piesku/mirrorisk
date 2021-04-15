import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Territory {
    Continent: Continent;
    Index: number;
    Id: number;
}

export const enum Continent {
    Europe,
    Africa,
    Australia,
    NorthAmerica,
    SouthAmerica,
    // Asia must be last because it has more than 10 regions.
    Asia,
}

export function territory(continent: Continent, index: number) {
    return (game: Game, entity: Entity) => {
        let id = continent * 10 + index;
        game.TerritoryEntities[id] = entity;
        game.World.Signature[entity] |= Has.Territory;
        game.World.Territory[entity] = {
            Continent: continent,
            Index: index,
            Id: id,
        };
    };
}
