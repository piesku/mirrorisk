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
        is_human_controlled ? move(10, 5) : move(100, 50),
        control_player(false, false, false, false),
        children(
            [transform(), draw_selection("#ff0"), disable(Has.Draw)],
            [
                transform(),
                render_textured_mapped(
                    game.MaterialTexturedMapped,
                    mesh,
                    game.Textures["Wood063_1K_Color.jpg"],
                    game.Textures["Wood063_1K_Normal.jpg"],
                    game.Textures["Wood063_1K_Roughness.jpg"],
                    color
                ),
            ]
        ),
        team(team_id),
    ];

    if (is_human_controlled) {
        blueprint.push(
            pickable_unit(color, [1, 0.5, 0, 1], [1, 0, 0, 1]),
            selectable(),
            disable(Has.ControlPlayer)
        );
    }

    return blueprint;
}

export function get_all_teritorries_by_team_id(game: Game, team_id: number) {
    let territories: Record<number, number> = {};
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & Has.Team) == Has.Team && game.World.Team[i].Id === team_id) {
            let territory_id = game.World.NavAgent[i].TerritoryId;
            territories[territory_id] = territories[territory_id] || 0;
            territories[territory_id]++;
        }
    }

    return territories;
}
