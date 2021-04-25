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

export function territories_controlled_by_team(game: Game, team_id: number) {
    let QUERY = Has.Team | Has.NavAgent;
    let territories: Record<number, number> = {};

    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY && game.World.Team[i].Id === team_id) {
            let territory_id = game.World.NavAgent[i].TerritoryId;
            territories[territory_id] = territories[territory_id] || 0;
            territories[territory_id]++;
        }
    }

    return territories;
}
