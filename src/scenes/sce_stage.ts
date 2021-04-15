import {blueprint_camera} from "../blueprints/blu_camera.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {control_player} from "../components/com_control_player.js";
import {disable} from "../components/com_disable.js";
import {draw_selection} from "../components/com_draw.js";
import {highlightable, HighlightableKind} from "../components/com_highlightable.js";
import {light_directional} from "../components/com_light.js";
import {move} from "../components/com_move.js";
import {nav_agent} from "../components/com_nav_agent.js";
import {pickable} from "../components/com_pickable.js";
import {render_colored_diffuse, render_colored_unlit} from "../components/com_render1.js";
import {selectable} from "../components/com_selectable.js";
import {transform} from "../components/com_transform.js";
import {instantiate} from "../entity.js";
import {Game, Layer} from "../game.js";
import {Has, World} from "../world.js";

function blueprint_region(game: Game, idx: number) {
    return [
        transform(),
        pickable(game.Regions.Europe[idx]),
        highlightable(HighlightableKind.Region),
        render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.Regions.Europe[idx], [
            0.3,
            0.3,
            0.8,
            1,
        ]),
        children([
            transform([0, 0.1, 0]),
            false &&
                render_colored_unlit(game.MaterialColoredUnlitLine, game.Regions.Europe[idx], [
                    0.4,
                    0.4,
                    0.8,
                    1,
                ]),
        ]),
    ];
}

export function scene_stage(game: Game) {
    game.World = new World();
    game.ViewportResized = true;
    game.Gl.clearColor(0.9, 0.9, 0.9, 1);

    // Camera.
    instantiate(game, [...blueprint_camera(game), transform([-25, 0, -50], [0, 1, 0, 0])]);

    // Directional light.
    instantiate(game, [transform([-1, 1, 1]), light_directional([1, 1, 1], 1)]);

    // Europe
    instantiate(game, [
        transform(),
        collide(false, Layer.None, Layer.None, [1000, 1, 1000]),
        pickable(),
        children(
            blueprint_region(game, 0),
            blueprint_region(game, 1),
            blueprint_region(game, 2),
            blueprint_region(game, 3),
            blueprint_region(game, 4),
            blueprint_region(game, 5),
            blueprint_region(game, 6)
        ),
    ]);

    // Unit 1.
    instantiate(game, [
        transform([-21, 0, -52]),
        control_player(false, false, false, false),
        disable(Has.ControlPlayer),
        collide(true, Layer.None, Layer.None, [2, 2, 2]),
        pickable(),
        highlightable(HighlightableKind.Unit),
        selectable(),
        nav_agent(),
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
