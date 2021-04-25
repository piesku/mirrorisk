import {Entity, Game, PlayerType} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Selectable | Has.NavAgent | Has.Team;

export function sys_control_player(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        let team = game.World.Team[i];
        let selectable = game.World.Selectable[i];
        if (
            (game.World.Signature[i] & QUERY) == QUERY &&
            game.Players[team.Id].Type === PlayerType.Human &&
            team.Id === game.CurrentPlayer &&
            selectable.Selected
        ) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let agent = game.World.NavAgent[entity];

    if (
        game.InputDelta["Mouse2"] === -1 &&
        game.InputState["Mouse2DownTraveled"] < 10 &&
        game.Picked &&
        agent.Actions > 0
    ) {
        let territory_entity = game.Picked.Entity;
        let territory = game.World.Territory[territory_entity];

        if (!game.TerritoryGraph[agent.TerritoryId].includes(territory.Id)) {
            // This aint adjacent territory
            return;
        }
        if (agent.TerritoryId !== territory.Id) {
            // Use the action up only when moving to another territory.
            agent.Actions -= 1;
        }
        agent.TerritoryId = territory.Id;
        agent.Destination = game.Picked.Point;
    }
}
