import {from_euler} from "../../common/quat.js";
import {audio_listener} from "../components/com_audio_listener.js";
import {camera_display_perspective} from "../components/com_camera.js";
import {children} from "../components/com_children.js";
import {control_camera} from "../components/com_control_camera.js";
import {mimic} from "../components/com_mimic.js";
import {move} from "../components/com_move.js";
import {transform} from "../components/com_transform.js";
import {Game} from "../game.js";
import {Blueprint} from "../impl.js";

export function blueprint_camera(game: Game): Blueprint {
    return [
        control_camera(100, 0, 1, 0),
        mimic(null, 0.1, true, false),
        move(100, 0.2),
        children([
            transform(undefined, from_euler([0, 0, 0, 0], -30, 0, 0)),
            control_camera(0, 0, 0, 1),
            move(0, 0.2),
            children([
                transform([0, 40, 0], from_euler([0, 0, 0, 0], -90, 180, 0)),
                control_camera(0, 100, 0, 0),
                move(200, 0),
                camera_display_perspective(1, 1, 10000),
                audio_listener(),
            ]),
        ]),
    ];
}
