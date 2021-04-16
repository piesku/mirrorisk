import {from_euler} from "../../common/quat.js";
import {camera_display_perspective} from "../components/com_camera.js";
import {children} from "../components/com_children.js";
import {control_player} from "../components/com_control_player.js";
import {move} from "../components/com_move.js";
import {transform} from "../components/com_transform.js";
import {Blueprint} from "../entity.js";
import {Game} from "../game.js";

export function blueprint_camera(game: Game): Blueprint {
    return [
        control_player(true, true, false, false),
        move(100, 1),
        children([
            transform(),
            control_player(false, false, true, false),
            move(100, 1),
            children([
                transform([0, 50, -29], from_euler([0, 0, 0, 0], -60, 180, 0)),
                control_player(false, false, false, true),
                move(200, 0),
                camera_display_perspective(1, 0.1, 1000),
            ]),
        ]),
    ];
}
