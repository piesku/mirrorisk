import {Entity, Game, PlayerType} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.ControlPlayer | Has.NavAgent | Has.Team;

export function sys_control_pick(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if (
            (game.World.Signature[i] & QUERY) == QUERY &&
            game.World.Team[i].Id === game.CurrentPlayer &&
            game.Players[game.World.Team[i].Id].Type === PlayerType.Human
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
        console.log(
            `${territory.Id}: [${game.Picked.Point[0].toFixed(
                2
            )}, 1, ${game.Picked.Point[2].toFixed(2)}]`
        );
    }
}
