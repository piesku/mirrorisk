import {element} from "../../common/random.js";
import {get_coord_by_territory_id} from "../blueprints/blu_territory.js";
import {task_proximity} from "../components/com_task.js";
import {Entity, Game, TurnPhase} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.NavAgent | Has.Team;

export function sys_control_ai(game: Game, delta: number) {
    if (game.IsAiTurn && game.TurnPhase === TurnPhase.Move) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY) == QUERY) {
                let team = game.World.Team[i];
                if (team.Id === game.CurrentPlayer) {
                    update(game, i);
                }
            }
        }
    }
}

function update(game: Game, entity: Entity) {
    if (game.CurrentlyMovingAiUnit) {
        // There's already another unit moving.
        return;
    }

    let agent = game.World.NavAgent[entity];
    let team = game.World.Team[entity];

    if (team.Actions > 0) {
        team.Actions -= 1;

        game.CurrentlyMovingAiUnit = entity;

        // TODO: those are random moves right now
        let current_territory_neighbors = game.TerritoryGraph[agent.TerritoryId];
        let destination_territory_id = element(current_territory_neighbors);
        let destination_territory_entity = game.TerritoryEntities[destination_territory_id];
        let territory = game.World.Territory[destination_territory_entity];

        let Alaska = 31;
        let Kamchatka = 56;
        let transform = game.World.Transform[entity];
        // Kamchatka -> Alaska & Alaska -> Kamchatka
        if (agent.TerritoryId === Kamchatka && territory.Id === Alaska) {
            transform.Translation[0] = 140;
            transform.Translation[2] = -64.29;
            transform.Dirty = true;
        } else if (agent.TerritoryId === Alaska && territory.Id === Kamchatka) {
            transform.Translation[0] = -160;
            transform.Translation[2] = -64.58;
            transform.Dirty = true;
        }

        let destination_worldspace = get_coord_by_territory_id(game, territory.Id);
        if (destination_worldspace) {
            agent.TerritoryId = territory.Id;
            agent.Destination = destination_worldspace;

            task_proximity(destination_worldspace)(game, entity);
        }
    }
}
