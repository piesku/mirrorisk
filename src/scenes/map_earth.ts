import {from_euler} from "../../common/quat.js";
import {blueprint_camera} from "../blueprints/blu_camera.js";
import {blueprint_sun} from "../blueprints/blu_sun.js";
import {blueprint_territory} from "../blueprints/blu_territory.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {light_directional, light_point} from "../components/com_light.js";
import {render_colored_unlit, render_textured_mapped} from "../components/com_render1.js";
import {Continent} from "../components/com_territory.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";
import {instantiate} from "../impl.js";

export function map_earth(game: Game) {
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

    game.ContinentBonus[Continent.Australia] = {
        Territories: [],
        Bonus: 2,
        Name: "Australia",
    };
    game.ContinentBonus[Continent.SouthAmerica] = {
        Territories: [],
        Bonus: 2,
        Name: "South America",
    };
    game.ContinentBonus[Continent.Africa] = {
        Territories: [],
        Bonus: 3,
        Name: "Africa",
    };
    game.ContinentBonus[Continent.Europe] = {
        Territories: [],
        Bonus: 5,
        Name: "Europe",
    };
    game.ContinentBonus[Continent.NorthAmerica] = {
        Territories: [],
        Bonus: 5,
        Name: "North America",
    };
    game.ContinentBonus[Continent.Asia] = {
        Territories: [],
        Bonus: 7,
        Name: "Asia",
    };

    // Camera.
    game.CameraRig = instantiate(game, [
        ...blueprint_camera(game),
        transform([0, 0, 0], [0, 1, 0, 0]),
    ]);

    // The Sun and the Moon.
    instantiate(game, blueprint_sun(game));

    // Directional backlight.
    instantiate(game, [transform([-1, 1, -1]), light_directional([1, 1, 1], 0.2)]);

    // Lamp.
    instantiate(game, [transform([-100, 100, -100]), light_point([1, 1, 0.9], 40)]);

    // Board background.
    instantiate(game, [
        transform([0, 0, 0], undefined, [332, 1, 220]),
        render_textured_mapped(
            game.MaterialTexturedMapped,
            game.MeshPlane,
            game.Textures["Fabric023_1K_Color.jpg"],
            game.Textures["Fabric023_1K_Normal.jpg"],
            game.Textures["Fabric023_1K_Roughness.jpg"]
        ),
        children([
            transform(undefined, [1, 0, 0, 0]),
            render_colored_unlit(game.MaterialColoredUnlit, game.MeshPlane, [0, 0, 0, 1]),
        ]),
    ]);

    // The room.
    let room_scale = 500;
    instantiate(game, [
        transform([0, 0, 0], from_euler([0, 0, 0, 0], 0, -175, 0), [
            room_scale,
            room_scale,
            room_scale,
        ]),
        render_colored_unlit(game.MaterialColoredUnlit, game.MeshRoom, [1, 1, 1, 1]),
    ]);

    // World map.
    instantiate(game, [
        transform(),
        collide(false, Layer.None, Layer.None, [1000, 0.01, 1000]),
        children(
            // Europe
            blueprint_territory(game, Continent.Europe, 1, "Great Britain"),
            blueprint_territory(game, Continent.Europe, 2, "Iceland"),
            blueprint_territory(game, Continent.Europe, 3, "North Europe"),
            blueprint_territory(game, Continent.Europe, 4, "Scandinavia"),
            blueprint_territory(game, Continent.Europe, 5, "South Europe"),
            blueprint_territory(game, Continent.Europe, 6, "West Europe"),
            blueprint_territory(game, Continent.Europe, 7, "East Europe"),
            // Africa
            blueprint_territory(game, Continent.Africa, 1, "Congo"),
            blueprint_territory(game, Continent.Africa, 2, "West Africa"),
            blueprint_territory(game, Continent.Africa, 3, "Egypt"),
            blueprint_territory(game, Continent.Africa, 4, "Madagascar"),
            blueprint_territory(game, Continent.Africa, 5, "North Africa"),
            blueprint_territory(game, Continent.Africa, 6, "South Africa"),
            // Australia
            blueprint_territory(game, Continent.Australia, 1, "Western Australia"),
            blueprint_territory(game, Continent.Australia, 2, "Indonesia"),
            blueprint_territory(game, Continent.Australia, 3, "New Guinea"),
            blueprint_territory(game, Continent.Australia, 4, "Eastern Australia"),
            // North America
            blueprint_territory(game, Continent.NorthAmerica, 1, "Alaska"),
            blueprint_territory(game, Continent.NorthAmerica, 2, "Alberta"),
            blueprint_territory(game, Continent.NorthAmerica, 3, "Central America"),
            blueprint_territory(game, Continent.NorthAmerica, 4, "Western United States"),
            blueprint_territory(game, Continent.NorthAmerica, 5, "Greenland"),
            blueprint_territory(game, Continent.NorthAmerica, 6, "Northeast Territory"),
            blueprint_territory(game, Continent.NorthAmerica, 7, "Ontario"),
            blueprint_territory(game, Continent.NorthAmerica, 8, "Quebec"),
            blueprint_territory(game, Continent.NorthAmerica, 9, "Eastern United States"),
            // South America
            blueprint_territory(game, Continent.SouthAmerica, 1, "Argentina"),
            blueprint_territory(game, Continent.SouthAmerica, 2, "Brazil"),
            blueprint_territory(game, Continent.SouthAmerica, 3, "Peru"),
            blueprint_territory(game, Continent.SouthAmerica, 4, "Venezuela"),
            // Asia
            blueprint_territory(game, Continent.Asia, 1, "Afghanistan"),
            blueprint_territory(game, Continent.Asia, 2, "China"),
            blueprint_territory(game, Continent.Asia, 3, "India"),
            blueprint_territory(game, Continent.Asia, 4, "Irkuck"),
            blueprint_territory(game, Continent.Asia, 5, "Japan"),
            blueprint_territory(game, Continent.Asia, 6, "Kamchatka"),
            blueprint_territory(game, Continent.Asia, 7, "Middle West"),
            blueprint_territory(game, Continent.Asia, 8, "Mongolia"),
            blueprint_territory(game, Continent.Asia, 9, "Siam"),
            blueprint_territory(game, Continent.Asia, 10, "Siberia"),
            blueprint_territory(game, Continent.Asia, 11, "Ural"),
            blueprint_territory(game, Continent.Asia, 12, "Yakutsk")
        ),
    ]);
}
