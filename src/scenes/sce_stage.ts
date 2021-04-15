import {float, set_seed} from "../../common/random.js";
import {blueprint_camera} from "../blueprints/blu_camera.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {control_player} from "../components/com_control_player.js";
import {disable} from "../components/com_disable.js";
import {draw_selection} from "../components/com_draw.js";
import {light_directional} from "../components/com_light.js";
import {move} from "../components/com_move.js";
import {nav_agent} from "../components/com_nav_agent.js";
import {pickable_territory, pickable_unit} from "../components/com_pickable.js";
import {render_colored_diffuse, render_colored_unlit} from "../components/com_render1.js";
import {selectable} from "../components/com_selectable.js";
import {Continent, territory} from "../components/com_territory.js";
import {transform} from "../components/com_transform.js";
import {instantiate} from "../entity.js";
import {Game, Layer} from "../game.js";
import {Has, World} from "../world.js";

function blueprint_region(game: Game, continent: Continent, index: number) {
    let mesh = game.TerritoryMeshes[continent][index - 1];
    return [
        transform(),
        pickable_territory(
            mesh,
            [0.3, 0.3, 0.8, 1],
            [0.3, 0.5, 0.8, 1],
            [0.3, 0.8, 0.3, 1],
            [0.3, 0.5, 0.8, 1]
        ),
        render_colored_diffuse(game.MaterialColoredDiffuseGouraud, mesh, [0.3, 0.3, 0.8, 1]),
        territory(continent, index),
        children([
            transform([0, 0.1, 0]),
            false && render_colored_unlit(game.MaterialColoredUnlitLine, mesh, [0.4, 0.4, 0.8, 1]),
        ]),
    ];
}

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
    };

    // Camera.
    instantiate(game, [...blueprint_camera(game), transform([-25, 0, -50], [0, 1, 0, 0])]);

    // Directional light.
    instantiate(game, [transform([-1, 1, 1]), light_directional([1, 1, 1], 1)]);

    // Europe
    instantiate(game, [
        transform(),
        collide(false, Layer.None, Layer.None, [1000, 0.01, 1000]),
        children(
            blueprint_region(game, Continent.Europe, 1),
            blueprint_region(game, Continent.Europe, 2),
            blueprint_region(game, Continent.Europe, 3),
            blueprint_region(game, Continent.Europe, 4),
            blueprint_region(game, Continent.Europe, 5),
            blueprint_region(game, Continent.Europe, 6),
            blueprint_region(game, Continent.Europe, 7)
        ),
    ]);

    // Units in Central Europe.
    for (let i = 0; i < 3; i++) {
        instantiate(game, [
            transform([-21 + float(-4, 4), 0, -52 + float(-4, 4)]),
            control_player(false, false, false, false),
            disable(Has.ControlPlayer),
            collide(true, Layer.None, Layer.None, [2, 6, 2]),
            pickable_unit([1, 1, 0, 1], [1, 0.5, 0, 1], [1, 0, 0, 1]),
            selectable(),
            nav_agent(3),
            move(10, 5),
            children(
                [transform(), draw_selection("#ff0"), disable(Has.Draw)],
                [
                    transform(),
                    render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshSoldier, [
                        1,
                        1,
                        0,
                        1,
                    ]),
                ]
            ),
        ]);
    }

    // Units in Iceland.
    for (let i = 0; i < 2; i++) {
        instantiate(game, [
            transform([7 + float(-3, 3), 0, -70 + float(-3, 3)]),
            control_player(false, false, false, false),
            disable(Has.ControlPlayer),
            collide(true, Layer.None, Layer.None, [2, 6, 2]),
            // pickable_unit([1, 1, 0, 1], [1, 0.5, 0, 1], [1, 0, 0, 1]),
            selectable(),
            nav_agent(2),
            move(10, 5),
            children(
                [transform(), draw_selection("#ff0"), disable(Has.Draw)],
                [
                    transform(),
                    render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshSoldier, [
                        1,
                        0,
                        1,
                        1,
                    ]),
                ]
            ),
        ]);
    }
}
