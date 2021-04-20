import {float} from "../../common/random.js";
import {pickable_territory} from "../components/com_pickable.js";
import {render_textured_specular} from "../components/com_render1.js";
import {Continent, territory} from "../components/com_territory.js";
import {transform} from "../components/com_transform.js";
import {Blueprint} from "../entity.js";
import {Game} from "../game.js";

export function blueprint_territory(game: Game, continent: Continent, index: number): Blueprint {
    let mesh = game.TerritoryMeshes[continent][index - 1];
    return [
        transform([0, float(-1, 0), 0]),
        pickable_territory(
            mesh,
            [0.8, 0.8, 0.3, 1],
            [1, 1, 0.3, 1],
            [0.5, 0.8, 0.3, 1],
            [1, 0.5, 0.5, 1]
        ),
        render_textured_specular(
            game.MaterialTexturedSpecular,
            mesh,
            game.Textures["paper.jpg"],
            32,
            [0.8, 0.8, 0.3, 1]
        ),
        territory(continent, index),
    ];
}
