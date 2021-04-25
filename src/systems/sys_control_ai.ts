import {element} from "../../common/random.js";
import {Action, dispatch} from "../actions.js";
import {get_coord_by_territory_id} from "../blueprints/blu_territory.js";
import {territories_controlled_by_team} from "../components/com_team.js";
import {Entity, Game, PlayerType, TurnPhase} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.NavAgent | Has.Team;

export function sys_control_ai(game: Game, delta: number) {
    if (!game.IsAiTurn) {
        return;
    }

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
    if (game.TurnPhase === TurnPhase.Move) {
        if (!game.CurrentlyMovingAiUnit && game.AiActiveUnits.includes(entity)) {
            game.CurrentlyMovingAiUnit = entity;
            let agent = game.World.NavAgent[entity];
            let territories = territories_controlled_by_team(game, game.CurrentPlayer);
            let units_on_territory = territories[agent.TerritoryId];
            if (units_on_territory < 2) {
                game.AiActiveUnits = game.AiActiveUnits.filter((id) => id !== entity);
                game.CurrentlyMovingAiUnit = null;
                if (game.AiActiveUnits.length === 0) {
                    dispatch(game, Action.EndTurn, {});
                }
                return;
            }
            if (agent.Actions > 0) {
                // TODO: those are random moves right now
                let current_territory_neighbors = game.TerritoryGraph[agent.TerritoryId];
                let destination_territory_id = element(current_territory_neighbors);
                let destination_territory_entity = game.TerritoryEntities[destination_territory_id];
                let territory = game.World.Territory[destination_territory_entity];

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
}
