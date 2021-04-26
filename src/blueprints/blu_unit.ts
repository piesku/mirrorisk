import {Vec3, Vec4} from "../../common/math.js";
import {element} from "../../common/random.js";
import {audio_source} from "../components/com_audio_source.js";
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

declare global {
    interface Document {
        monetization: {state: "pending" | "started"};
    }
}

export function blueprint_unit(
    game: Game,
    translation: Vec3,
    territory_id: number,
    team_id: number
) {
    let color = <Vec4>game.Players[team_id].Color.slice();
    let is_human_controlled = game.Players[team_id].Type === PlayerType.Human;

    let meshes = [game.MeshSoldier, game.MeshSoldier, game.MeshSoldier];
    if (document.monetization && document.monetization.state == "started") {
        meshes.push(game.MeshDragoon, game.MeshDragoon, game.MeshCannon);
    }

    let blueprint = [
        transform(translation),
        collide(true, Layer.None, Layer.None, [2, 6, 2]),
        nav_agent(territory_id),
        is_human_controlled ? move(10, 5) : move(20, 5),
        team(team_id),
        children(
            [transform([0, 1, 0]), draw_selection("#ff0"), disable(Has.Draw)],
            [
                transform(),
                render_textured_mapped(
                    game.MaterialTexturedMapped,
                    element(meshes),
                    game.Textures["Wood063_1K_Color.jpg"],
                    game.Textures["Wood063_1K_Normal.jpg"],
                    game.Textures["Wood063_1K_Roughness.jpg"],
                    is_human_controlled ? undefined : color
                ),
            ]
        ),
    ];

    if (is_human_controlled) {
        blueprint.push(pickable_unit(color), selectable(), audio_source(true));
    }

    return blueprint;
}
