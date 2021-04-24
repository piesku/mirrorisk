import {float, integer} from "../../common/random.js";
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
            let territory_entity = game.TerritoryEntities[integer(1, 7)];
            let territory = game.World.Territory[territory_entity];

            if (agent.TerritoryId !== territory.Id) {
                // Use the action up only when moving to another territory.
                agent.Actions -= 1;
            }

            agent.TerritoryId = territory.Id;
            agent.Destination = [float(-40, 7), 0, float(-70, -50)];
        }
    }
}
