import {Vec3} from "../../common/math.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface NavAgent {
    TerritoryId: number;
    Destination: Vec3 | null;
    Actions: number;
}

export function nav_agent(territory_id: number) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.NavAgent;
        game.World.NavAgent[entity] = {
            TerritoryId: territory_id,
            Destination: null,
            // TODO Move to a dedicated component?
            Actions: 1,
        };
    };
}
