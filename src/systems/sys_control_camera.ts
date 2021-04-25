import {Entity, Game, PlayerType} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.ControlCamera;
const INITIAL_CAMERA_Y = 40;

export function sys_control_camera(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let control = game.World.ControlCamera[entity];
    let transform = game.World.Transform[entity];

    if (game.World.Signature[entity] & Has.Mimic) {
        let mimic = game.World.Mimic[entity];

        let current_team_type = game.Players[game.CurrentPlayer].Type;
        if (current_team_type === PlayerType.AI) {
            mimic.Target = game.CurrentlyMovingAiUnit;
        }
    }

    if (control.Zoom) {
        game.CameraZoom = transform.Translation[1] / INITIAL_CAMERA_Y;
    }
}
