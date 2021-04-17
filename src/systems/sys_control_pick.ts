import {ControlledBy} from "../components/com_team.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.ControlPlayer | Has.NavAgent;

export function sys_control_pick(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if (
            (game.World.Signature[i] & QUERY) == QUERY &&
            game.World.Team[i].Id === game.CurrentPlayer &&
            game.World.Team[i].ControlledBy === ControlledBy.Human
        ) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let agent = game.World.NavAgent[entity];

    if (game.InputDelta["Mouse2"] === 1 && game.Picked && agent.Actions > 0) {
        let territory_entity = game.Picked.Entity;
        let territory = game.World.Territory[territory_entity];
        console.log(territory.Id);

        if (agent.TerritoryId !== territory.Id) {
            // Use the action up only when moving to another territory.
            agent.Actions -= 1;
        }
        agent.TerritoryId = territory.Id;
        agent.Destination = game.Picked.Point;
    }
}
