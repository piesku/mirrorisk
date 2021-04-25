import {from_euler} from "../../common/quat.js";
import {camera_display_perspective} from "../components/com_camera.js";
import {children} from "../components/com_children.js";
import {control_camera} from "../components/com_control_camera.js";
import {mimic} from "../components/com_mimic.js";
import {move} from "../components/com_move.js";
import {transform} from "../components/com_transform.js";
import {Blueprint} from "../entity.js";
import {Game} from "../game.js";

export function blueprint_camera(game: Game): Blueprint {
    return [
        control_camera(100, 0, true, false),
        mimic(null, 0.1, true, false),
        move(100, 0.5),
        children([
            transform(undefined, from_euler([0, 0, 0, 0], -30, 0, 0)),
            control_camera(0, 0, false, true),
            move(0, 0.5),
            children([
                transform([0, 40, 0], from_euler([0, 0, 0, 0], -90, 180, 0)),
                control_camera(0, 200, false, false),
                move(200, 0),
                camera_display_perspective(1, 1, 10000),
            ]),
        ]),
    ];
}
