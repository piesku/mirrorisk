import {from_euler} from "../../common/quat.js";
import {camera_display_perspective} from "../components/com_camera.js";
import {children} from "../components/com_children.js";
import {control_player} from "../components/com_control_player.js";
import {move} from "../components/com_move.js";
import {pick} from "../components/com_pick.js";
import {transform} from "../components/com_transform.js";
import {Blueprint} from "../entity.js";
import {Game} from "../game.js";

export function blueprint_camera(game: Game): Blueprint {
    return [
        control_player(true, 0.1, 0.1),
        move(20, 1),
        children([
            transform([0, 50, -15], from_euler([0, 0, 0, 0], -60, 180, 0)),
            camera_display_perspective(1, 0.1, 1000),
            pick(),
        ]),
    ];
}
