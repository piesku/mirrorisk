import {play_buffer} from "../../common/audio.js";
import {element, set_seed} from "../../common/random.js";
import {Action, dispatch} from "../actions.js";
import {get_coord_by_territory_id} from "../blueprints/blu_territory.js";
import {blueprint_unit} from "../blueprints/blu_unit.js";
import {Game} from "../game.js";
import {instantiate} from "../impl.js";
import {World} from "../world.js";
import {map_earth} from "./map_earth.js";

export function scene_stage(game: Game) {
    set_seed(25);
    game.World = new World();
    game.ViewportResized = true;
    game.Gl.clearColor(0.9, 0.9, 0.9, 1);

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

    dispatch(game, Action.StartDeployment, {});

    play_buffer(game.Audio, undefined, game.Sounds[element(["music1.mp3", "music2.mp3"])]);

    setInterval(() => {
        play_buffer(game.Audio, undefined, game.Sounds[element(["music1.mp3", "music2.mp3"])]);
    }, 30000);
}
