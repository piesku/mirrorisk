import {pickable_territory} from "../components/com_pickable.js";
import {render_textured_mapped} from "../components/com_render1.js";
import {Continent, territory} from "../components/com_territory.js";
import {transform} from "../components/com_transform.js";
import {Blueprint} from "../entity.js";
import {Game} from "../game.js";

export function blueprint_territory(game: Game, continent: Continent, index: number): Blueprint {
    let mesh = game.TerritoryMeshes[continent][index - 1];
    return [
        transform(),
        pickable_territory(
            mesh,
            [1.2, 1.2, 1.2, 1],
            [2, 2, 2, 1],
            [1.2, 1.5, 1.2, 1],
            [2, 1.2, 1.2, 1]
        ),
        render_textured_mapped(
            game.MaterialTexturedMapped,
            mesh,
            game.Textures["euau.png"],
            game.Textures["Cardboard004_1K_Normal.jpg"],
            game.Textures["Cardboard004_1K_Roughness.jpg"]
        ),
        territory(continent, index),
    ];
}
