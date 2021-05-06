import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface RulesTally {
    UnitsByTeamId: Record<number, Array<Entity>>;
    UnitsByTeamTerritory: Map<number, Map<number, Array<Entity>>>;
}

const QUERY = Has.Team;

export function sys_rules_tally(game: Game, delta: number) {
    for (let team_id = 0; team_id < game.Players.length; team_id++) {
        game.UnitsByTeamId[team_id] = [];

        let team_units = game.UnitsByTeamTerritory.get(team_id);
        if (team_units) {
            // Clear the data about this team's units and occupied territories.
            team_units.clear();
        }
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

    game.UnitsByTeamId[team.Id].push(entity);

    let team_units = game.UnitsByTeamTerritory.get(team.Id);
    if (!team_units) {
        // The map should have been created by Action.StartGame.
        throw new Error(`Unit map for team ${team.Id} not found.`);
    }

    let territory_units = team_units.get(nav_agent.TerritoryId);
    if (territory_units) {
        territory_units.push(entity);
    } else {
        team_units.set(nav_agent.TerritoryId, [entity]);
    }
}
