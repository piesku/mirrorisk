import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Team {
    Id: number;
}

export function team(Id: number) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Team;

        game.World.Team[entity] = {
            Id,
        };
    };
}

export function territories_controlled_by_team(game: Game, team_id: number) {
    let territories: Record<number, number> = {};
    let team_units = units_entity_ids(game, team_id);
    for (let i = 0; i < team_units.length; i++) {
        let entity = team_units[i];
        let territory_id = game.World.NavAgent[entity].TerritoryId;
        territories[territory_id] = territories[territory_id] || 0;
        territories[territory_id]++;
    }

    return territories;
}

export function units_entity_ids(game: Game, team_id: number) {
    let QUERY = Has.Team | Has.NavAgent;
    let units_entity_ids: Entity[] = [];

    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY && game.World.Team[i].Id === team_id) {
            units_entity_ids.push(i);
        }
    }

    return units_entity_ids;
}
