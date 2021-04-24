import {Vec3} from "../../common/math.js";
import {float} from "../../common/random.js";
import {pickable_territory} from "../components/com_pickable.js";
import {render_textured_mapped, render_textured_specular} from "../components/com_render1.js";
import {Continent, territory} from "../components/com_territory.js";
import {transform} from "../components/com_transform.js";
import {Blueprint} from "../entity.js";
import {Game} from "../game.js";

export function blueprint_territory(
    game: Game,
    continent: Continent,
    index: number,
    name: string = ""
): Blueprint {
    let mesh = game.TerritoryMeshes[continent][index - 1];
    return [
        transform(),
        pickable_territory(mesh, [1, 1, 1, 1], [2, 2, 2, 1], [1.2, 1.5, 1.2, 1], [2, 1.2, 1.2, 1]),
        render_textured_mapped(
            game.MaterialTexturedMapped,
            mesh,
            game.Textures["eu.png"],
            game.Textures["Cardboard004_1K_Normal.jpg"],
            game.Textures["Cardboard004_1K_Roughness.jpg"]
        ),
        false &&
            render_textured_specular(
                game.MaterialTexturedSpecular,
                mesh,
                game.Textures["eu.png"],
                32,
                [1, 1, 1, 1]
            ),
        territory(continent, index, name),
    ];
}

export function get_coord_by_territory_id(territory_id: number): Vec3 {
    const terrs_temp_map: Record<number, Vec3> = {
        1: [2, 1, -49],
        2: [15.39, 1, -62.91],
        3: [-15, 1, -48],
        4: [-16, 1, -65],
        5: [-19.02, 1, -37.99],
        6: [-37.2, 1, -54.54],
        7: [-0.25, 1, -37.93],
        51: [-56.33, 1, -42.17],
        52: [-85.58, 1, -30.51],
        53: [-67.9, 1, -19.65],
        54: [-92.21, 1, -53.27],
        55: [-116.79, 1, -31.8],
        56: [-138.05, 1, -62.96],
        57: [-37.6, 1, -23.73],
        58: [-101.9, 1, -42.29],
        59: [-86.79, 1, -13.0],
        60: [-80.3, 1, -68.27],
        61: [-60.65, 1, -61.6],
        62: [-109.33, 1, -69.12],
    };

    const coord: Vec3 = terrs_temp_map[territory_id];
    return coord
        ? [coord[0] + float(-4, 4), 1, coord[2] + float(-4, 4)]
        : [float(-4, 4), 1, float(-4, 4)];
}
