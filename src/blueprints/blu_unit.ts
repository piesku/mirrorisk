import {Mesh} from "../../common/material.js";
import {Vec3, Vec4} from "../../common/math.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {control_player} from "../components/com_control_player.js";
import {disable} from "../components/com_disable.js";
import {draw_selection} from "../components/com_draw.js";
import {move} from "../components/com_move.js";
import {nav_agent} from "../components/com_nav_agent.js";
import {render_colored_specular} from "../components/com_render1.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer} from "../game.js";
import {Has} from "../world.js";

export function blueprint_unit(
    game: Game,
    translation: Vec3,
    color: Vec4, // TODO: add diffuse & specular?
    territory_id: number,
    mesh: Mesh = game.MeshSoldier
) {
    return [
        transform(translation),
        collide(true, Layer.None, Layer.None, [2, 6, 2]),
        nav_agent(territory_id),
        move(10, 5),
        control_player(false, false, false, false),
        children(
            [transform(), draw_selection("#ff0"), disable(Has.Draw)],
            [
                transform(),
                render_colored_specular(game.MaterialColoredSpecular, mesh, color, 128, [
                    1,
                    1,
                    1,
                    1,
                ]),
            ]
        ),
    ];
}
