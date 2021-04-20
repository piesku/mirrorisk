import {Mesh} from "../../common/material.js";
import {Vec3, Vec4} from "../../common/math.js";
import {children} from "../components/com_children.js";
import {collide} from "../components/com_collide.js";
import {control_player} from "../components/com_control_player.js";
import {disable} from "../components/com_disable.js";
import {draw_selection} from "../components/com_draw.js";
import {move} from "../components/com_move.js";
import {nav_agent} from "../components/com_nav_agent.js";
import {pickable_unit} from "../components/com_pickable.js";
import {render_textured_mapped} from "../components/com_render1.js";
import {selectable} from "../components/com_selectable.js";
import {team} from "../components/com_team.js";
import {transform} from "../components/com_transform.js";
import {Game, Layer, Player} from "../game.js";
import {Has} from "../world.js";

export function blueprint_unit(
    game: Game,
    translation: Vec3,
    color: Vec4, // TODO: add diffuse & specular?
    territory_id: number,
    mesh: Mesh = game.MeshSoldier,
    team_id: number
) {
    let blueprint = [
        transform(translation),
        collide(true, Layer.None, Layer.None, [2, 6, 2]),
        nav_agent(territory_id),
        move(10, 5),
        control_player(false, false, false, false),
        children(
            [transform(), draw_selection("#ff0"), disable(Has.Draw)],
            [
                transform(),
                render_textured_mapped(
                    game.MaterialTexturedMapped,
                    mesh,
                    game.Textures["plastic_diffuse"],
                    game.Textures["plastic_normal"],
                    game.Textures["plastic_roughness"],
                    color
                ),
                render_textured_mapped(
                    game.MaterialTexturedMapped,
                    mesh,
                    game.Textures["wood_diffuse"],
                    game.Textures["wood_normal"],
                    game.Textures["wood_roughness"],
                    color
                ),
            ]
        ),
        team(team_id),
    ];

    if (game.Players[team_id] === Player.Human) {
        blueprint.push(
            pickable_unit(color, [1, 0.5, 0, 1], [1, 0, 0, 1]),
            selectable(),
            disable(Has.ControlPlayer)
        );
    }

    return blueprint;
}
