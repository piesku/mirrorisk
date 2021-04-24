import {element} from "../../common/random.js";
import {get_coord_by_territory_id} from "../blueprints/blu_territory.js";
import {Entity, Game, PlayerType} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.NavAgent | Has.Team;

export function sys_control_ai(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if (
            (game.World.Signature[i] & QUERY) == QUERY &&
            game.World.Team[i].Id === game.CurrentPlayer &&
            game.Players[game.World.Team[i].Id].Type === PlayerType.AI
        ) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    if (!game.CurrentlyMovingAiUnit && game.AiActiveUnits.includes(entity)) {
        game.CurrentlyMovingAiUnit = entity;
        let agent = game.World.NavAgent[entity];
        if (agent.Actions > 0) {
            // TODO: those are random moves right now
            let current_territory_neighbors = game.TerritoryGraph[agent.TerritoryId];
            let destination_territory_id = element(current_territory_neighbors);
            let destination_territory_entity = game.TerritoryEntities[destination_territory_id];
            let territory = game.World.Territory[destination_territory_entity];
            console.log(current_territory_neighbors, destination_territory_id, territory);

            if (agent.TerritoryId !== territory.Id) {
                // Use the action up only when moving to another territory.
                agent.Actions -= 1;
            }

            let destination_worldspace = get_coord_by_territory_id(game, territory.Id);

            agent.TerritoryId = territory.Id;
            agent.Destination = destination_worldspace;
        }
    }
}
