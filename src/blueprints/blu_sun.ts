import {from_euler} from "../../common/quat.js";
import {callback} from "../components/com_callback.js";
import {camera_framebuffer_ortho} from "../components/com_camera.js";
import {children} from "../components/com_children.js";
import {control_always} from "../components/com_control_always.js";
import {disable} from "../components/com_disable.js";
import {light_directional} from "../components/com_light.js";
import {move} from "../components/com_move.js";
import {transform} from "../components/com_transform.js";
import {Blueprint} from "../entity.js";
import {Game} from "../game.js";
import {Has} from "../world.js";

export function blueprint_sun(game: Game): Blueprint {
    return [
        transform(undefined, from_euler([0, 0, 0, 0], -30, 0, 0)),
        children([
            callback((game, entity) => (game.SunEntity = entity)),
            transform(undefined, from_euler([0, 0, 0, 0], 0, 35, 0)),
            control_always(null, [0, -1, 0, 0]),
            disable(Has.ControlAlways),
            move(0, 3.1),
            children(
                // The Sun.
                [
                    transform([0, 0, 500]),
                    light_directional([1, 1, 1], 0.8),
                    camera_framebuffer_ortho(game.Targets.Sun, 250, 1, 1000, [0, 0, 0, 1]),
                ],
                // The Moon.
                [transform([0, 0, -50]), light_directional([0.8, 0.5, 0.5], 0.8)]
            ),
        ]),
    ];
}
