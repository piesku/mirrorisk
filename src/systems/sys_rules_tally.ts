import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface RulesTally {
    UnitsByTeamTerritory: Record<number, Map<number, Array<Entity>>>;
}

const QUERY = Has.Team;

export function sys_rules_tally(game: Game, delta: number) {
    for (let team_id = 0; team_id < game.Players.length; team_id++) {
        // Clear the data about this team's units and occupied territories.
        let team_units = game.UnitsByTeamTerritory[team_id];
        team_units.clear();
    }

    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let team = game.World.Team[entity];
    let nav_agent = game.World.NavAgent[entity];

    let team_units = game.UnitsByTeamTerritory[team.Id];
    let territory_units = team_units.get(nav_agent.TerritoryId);
    if (territory_units) {
        territory_units.push(entity);
    } else {
        team_units.set(nav_agent.TerritoryId, [entity]);
    }
}
