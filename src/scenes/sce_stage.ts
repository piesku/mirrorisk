import {set_seed} from "../../common/random.js";
import {get_coord_by_territory_id} from "../blueprints/blu_territory.js";
import {blueprint_unit} from "../blueprints/blu_unit.js";
import {Game, TurnPhase} from "../game.js";
import {instantiate} from "../impl.js";
import {sys_rules_tally} from "../systems/sys_rules_tally.js";
import {World} from "../world.js";
import {map_earth} from "./map_earth.js";

export function scene_stage(game: Game) {
    set_seed(Date.now());
    game.World = new World();
    game.ViewportResized = true;
    game.Gl.clearColor(0.9, 0.9, 0.9, 1);
    game.Logs = "";

    map_earth(game);

    // Evenly distribute player units around the map
    let number_of_players = game.Players.length;
    let territory_entities = Object.keys(game.TerritoryEntities)
        .sort(() => 0.5 - Math.random())
        .map((e) => parseInt(e, 10));

    for (let i = 0; i < territory_entities.length; i++) {
        let team = (number_of_players + i) % number_of_players;
        let territory_entity_id = game.TerritoryEntities[territory_entities[i]];
        let territory = game.World.Territory[territory_entity_id];
        let translation = get_coord_by_territory_id(game, territory.Id);

        if (translation) {
            instantiate(game, blueprint_unit(game, translation, territory.Id, team));
        } else {
            console.error(
                `Cannot find random point on territory ${JSON.stringify(territory, null, 2)}!`
            );
        }
    }

    sys_rules_tally(game, 0);
    game.TurnPhase = TurnPhase.EndTurn;
}
