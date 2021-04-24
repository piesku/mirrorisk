import {from_euler} from "../../common/quat.js";
import {float, set_seed} from "../../common/random.js";
import {blueprint_camera} from "../blueprints/blu_camera.js";
import {blueprint_sun} from "../blueprints/blu_sun.js";
import {blueprint_territory} from "../blueprints/blu_territory.js";
import {blueprint_unit} from "../blueprints/blu_unit.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {light_directional, light_point} from "../components/com_light.js";
import {render_textured_mapped, render_textured_specular} from "../components/com_render1.js";
import {Continent} from "../components/com_territory.js";
import {transform} from "../components/com_transform.js";
import {instantiate} from "../entity.js";
import {Game, Layer} from "../game.js";
import {World} from "../world.js";

export function scene_stage(game: Game) {
    set_seed(25);
    game.World = new World();
    game.ViewportResized = true;
    game.Gl.clearColor(0.9, 0.9, 0.9, 1);

    game.TerritoryGraph = {
        // Europe
        1: [2, 3, 4, 7],
        2: [1, 4, 35],
        3: [1, 4, 5, 6, 7],
        4: [1, 2, 3, 6],
        5: [3, 6, 7, 13, 15, 57],
        6: [3, 4, 5, 51, 57, 61],
        7: [1, 3, 5, 15],
        // Africa
        11: [12, 15, 16],
        12: [11, 13, 14, 15, 16, 57],
        13: [12, 15, 5, 57],
        14: [12, 16],
        15: [11, 12, 13, 5, 7, 42],
        16: [11, 12, 14],
        // Australia
        21: [23, 24],
        22: [23, 24, 59],
        23: [21, 22, 24],
        24: [21, 22, 23],
        // North America
        31: [32, 36, 56],
        32: [31, 36, 37, 39],
        33: [34, 39, 44],
        34: [33, 37, 38, 39],
        35: [36, 37, 38, 2],
        36: [31, 32, 37, 35],
        37: [32, 34, 35, 36, 38, 39],
        38: [34, 35, 37],
        39: [32, 33, 34, 37],
        // South America
        41: [42, 43],
        42: [41, 43, 44, 15],
        43: [41, 42, 44],
        44: [42, 43, 33],
        // Asia
        51: [52, 53, 57, 61, 6],
        52: [51, 53, 58, 59, 60, 61],
        53: [51, 52, 57, 59],
        54: [56, 58, 60, 62],
        55: [56, 58],
        56: [54, 55, 58, 62, 31],
        57: [51, 53, 5, 6, 12, 13],
        58: [52, 54, 55, 56, 60],
        59: [52, 53, 22],
        60: [52, 54, 58, 61, 62],
        61: [51, 52, 60, 6],
        62: [54, 56, 60],
    };

    // Camera.
    instantiate(game, [...blueprint_camera(game), transform([-25, 0, -50], [0, 1, 0, 0])]);

    // The Sun and the Moon.
    instantiate(game, blueprint_sun(game));

    // Directional backlight.
    instantiate(game, [transform([-1, 1, -1]), light_directional([1, 1, 1], 0.2)]);

    // Lamp.
    false && instantiate(game, [transform([-100, 100, -100]), light_point([1, 1, 0.9], 60)]);

    // Table
    instantiate(game, [
        transform([0, -222, 0], from_euler([0, 0, 0, 0], 0, 15, 0), [300, 300, 300]),
        render_textured_mapped(
            game.MaterialTexturedMapped,
            game.MeshTable,
            game.Textures["Wood054_1K_Color.jpg"],
            game.Textures["Wood054_1K_Normal.jpg"],
            game.Textures["Wood054_1K_Roughness.jpg"]
        ),
    ]);

    // Board background.
    instantiate(game, [
        transform([0, 0, 0], undefined, [332, 1, 220]),
        render_textured_specular(
            game.MaterialTexturedSpecular,
            game.MeshPlane,
            game.Textures["background.jpg"],
            1,
            [1, 1, 1, 1]
        ),
    ]);

    // World map.
    instantiate(game, [
        transform(),
        collide(false, Layer.None, Layer.None, [1000, 0.01, 1000]),
        children(
            // Europe
            blueprint_territory(game, Continent.Europe, 1),
            blueprint_territory(game, Continent.Europe, 2),
            blueprint_territory(game, Continent.Europe, 3),
            blueprint_territory(game, Continent.Europe, 4),
            blueprint_territory(game, Continent.Europe, 5),
            blueprint_territory(game, Continent.Europe, 6),
            blueprint_territory(game, Continent.Europe, 7),
            // Africa
            blueprint_territory(game, Continent.Africa, 1),
            blueprint_territory(game, Continent.Africa, 2),
            blueprint_territory(game, Continent.Africa, 3),
            blueprint_territory(game, Continent.Africa, 4),
            blueprint_territory(game, Continent.Africa, 5),
            blueprint_territory(game, Continent.Africa, 6),
            // Australia
            blueprint_territory(game, Continent.Australia, 1),
            blueprint_territory(game, Continent.Australia, 2),
            blueprint_territory(game, Continent.Australia, 3),
            blueprint_territory(game, Continent.Australia, 4),
            // North America
            blueprint_territory(game, Continent.NorthAmerica, 1),
            blueprint_territory(game, Continent.NorthAmerica, 2),
            blueprint_territory(game, Continent.NorthAmerica, 3),
            blueprint_territory(game, Continent.NorthAmerica, 4),
            blueprint_territory(game, Continent.NorthAmerica, 5),
            blueprint_territory(game, Continent.NorthAmerica, 6),
            blueprint_territory(game, Continent.NorthAmerica, 7),
            blueprint_territory(game, Continent.NorthAmerica, 8),
            blueprint_territory(game, Continent.NorthAmerica, 9),
            // South America
            blueprint_territory(game, Continent.SouthAmerica, 1),
            blueprint_territory(game, Continent.SouthAmerica, 2),
            blueprint_territory(game, Continent.SouthAmerica, 3),
            blueprint_territory(game, Continent.SouthAmerica, 4),
            // Asia
            blueprint_territory(game, Continent.Asia, 1),
            blueprint_territory(game, Continent.Asia, 2),
            blueprint_territory(game, Continent.Asia, 3),
            blueprint_territory(game, Continent.Asia, 4),
            blueprint_territory(game, Continent.Asia, 5),
            blueprint_territory(game, Continent.Asia, 6),
            blueprint_territory(game, Continent.Asia, 7),
            blueprint_territory(game, Continent.Asia, 8),
            blueprint_territory(game, Continent.Asia, 9),
            blueprint_territory(game, Continent.Asia, 10),
            blueprint_territory(game, Continent.Asia, 11),
            blueprint_territory(game, Continent.Asia, 12)
        ),
    ]);

    // Units in Central Europe.
    for (let i = 0; i < 3; i++) {
        instantiate(
            game,
            blueprint_unit(
                game,
                [-15 + float(-4, 4), 1, -48 + float(-4, 4)],
                [1, 1, 0, 1],
                3,
                i < 1 ? game.MeshSoldier : game.MeshDragoon,
                0
            )
        );
    }

    // Units in Iceland.
    for (let i = 0; i < 2; i++) {
        instantiate(
            game,
            blueprint_unit(
                game,
                [15 + float(-3, 3), 1, -63 + float(-3, 3)],
                [1, 0, 0, 1],
                2,
                i < 1 ? game.MeshSoldier : game.MeshCannon,
                1
            )
        );
    }

    // Units in Russia.
    for (let i = 0; i < 3; i++) {
        instantiate(
            game,
            blueprint_unit(
                game,
                [-42 + float(-3, 3), 1, -60 + float(-3, 3)],
                [1, 0, 1, 1],
                6,
                i < 1 ? game.MeshSoldier : game.MeshCannon,
                2
            )
        );
    }
}
