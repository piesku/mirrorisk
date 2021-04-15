import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.ControlPlayer | Has.NavAgent;

export function sys_control_pick(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let agent = game.World.NavAgent[entity];

    if (game.InputDelta["Mouse2"] === 1 && game.Picked && agent.Actions > 0) {
        let territory_entity = game.Picked.Entity;
        let territory = game.World.Territory[territory_entity];
        agent.TerritoryId = territory.Id;
        agent.Destination = game.Picked.Point;
        agent.Destination[1] += 0.5;
        agent.Actions -= 1;
    }
}
