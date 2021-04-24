import {random_point_up_worldspace} from "../../common/material.js";
import {Vec3} from "../../common/math.js";
import {pickable_territory} from "../components/com_pickable.js";
import {render_textured_mapped} from "../components/com_render1.js";
import {Continent, territory} from "../components/com_territory.js";
import {transform} from "../components/com_transform.js";
import {Blueprint} from "../entity.js";
import {Game} from "../game.js";

const textures_by_continent: Record<Continent, string> = {
    [Continent.Europe]: "euau.webp",
    [Continent.Africa]: "afsa.webp",
    [Continent.Australia]: "euau.webp",
    [Continent.SouthAmerica]: "afsa.webp",
    [Continent.NorthAmerica]: "na.webp",
    [Continent.Asia]: "as.webp",
};

export function blueprint_territory(
    game: Game,
    continent: Continent,
    index: number,
    name: string = ""
): Blueprint {
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
            game.Textures[textures_by_continent[continent]],
            game.Textures["Cardboard004_1K_Normal.jpg"],
            game.Textures["Cardboard004_1K_Roughness.jpg"]
        ),
        territory(continent, index, name),
    ];
}

export function get_coord_by_territory_id(game: Game, territory_id: number): Vec3 | null {
    let destination_territory_entity = game.TerritoryEntities[territory_id];
    let territory = game.World.Territory[destination_territory_entity];
    let territory_mesh = game.TerritoryMeshes[territory.Continent][territory.Index - 1];
    let territory_transform = game.World.Transform[destination_territory_entity];

    return random_point_up_worldspace(territory_mesh, territory_transform.World);
}
