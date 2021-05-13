import {Entity, Game, TurnPhase} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Team;

export function sys_rules_tally(game: Game, delta: number) {
    for (let team_id = 0; team_id < game.Players.length; team_id++) {
        // Clear the data about this team's units and occupied territories.
        let team_units = game.UnitsByTeamTerritory[team_id];
        team_units.clear();
    }

    // Count units per team per territory.
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update_unit_counts(game, i);
        }
    }

    // Count unit actions.
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            update_unit_actions(game, i);
        }
    }
}

function update_unit_counts(game: Game, entity: Entity) {
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

function update_unit_actions(game: Game, entity: Entity) {
    let team = game.World.Team[entity];
    let nav_agent = game.World.NavAgent[entity];

    switch (game.TurnPhase) {
        case TurnPhase.Move: {
            let team_units = game.UnitsByTeamTerritory[team.Id];
            let territory_units = team_units.get(nav_agent.TerritoryId)!;
            if (team.Actions !== 0) {
                if (territory_units.length < 2) {
                    // This unit cannot leave its territory right now.
                    team.Actions = -1;
                } else {
                    team.Actions = 1;
                }
            }
            break;
        }
    }
}
