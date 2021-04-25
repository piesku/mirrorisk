import {Mesh} from "../../common/material.js";
import {Vec3, Vec4} from "../../common/math.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {disable} from "../components/com_disable.js";
import {draw_selection} from "../components/com_draw.js";
import {move} from "../components/com_move.js";
import {nav_agent} from "../components/com_nav_agent.js";
import {pickable_unit} from "../components/com_pickable.js";
import {render_textured_mapped} from "../components/com_render1.js";
import {selectable} from "../components/com_selectable.js";
import {team} from "../components/com_team.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer, PlayerType} from "../game.js";
import {Has} from "../world.js";

export function blueprint_unit(
    game: Game,
    translation: Vec3,
    territory_id: number,
    mesh: Mesh = game.MeshSoldier,
    team_id: number
) {
    let color = <Vec4>game.Players[team_id].Color.slice();
    let is_human_controlled = game.Players[team_id].Type === PlayerType.Human;

    let blueprint = [
        transform(translation),
        collide(true, Layer.None, Layer.None, [2, 6, 2]),
        nav_agent(territory_id),
        is_human_controlled ? move(10, 5) : move(20, 50),
        children(
            [transform([0, 1, 0]), draw_selection("#ff0"), disable(Has.Draw)],
            [
                transform(),
                render_textured_mapped(
                    game.MaterialTexturedMapped,
                    mesh,
                    game.Textures["Wood063_1K_Color.jpg"],
                    game.Textures["Wood063_1K_Normal.jpg"],
                    game.Textures["Wood063_1K_Roughness.jpg"],
                    is_human_controlled ? undefined : color
                ),
            ]
        ),
        team(team_id),
    ];

    if (is_human_controlled) {
        blueprint.push(pickable_unit(color), selectable());
    }

    return blueprint;
}
