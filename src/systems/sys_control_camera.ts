import {Entity, Game, PlayerType, TurnPhase} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.ControlCamera;
const INITIAL_CAMERA_Y = 40;

export function sys_control_camera(game: Game, delta: number) {
    if (game.CurrentPlayer < 0) {
        return;
    }

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
        switch (game.TurnPhase) {
            case TurnPhase.Deploy:
                mimic.Target = null;
            case TurnPhase.Move:
                if (current_team_type === PlayerType.AI) {
                    mimic.Target = game.CurrentlyMovingAiUnit;
                } else {
                    mimic.Target = null;
                }
                break;
            case TurnPhase.Battle:
                let territory_entity = game.CurrentlyFoughtOverTerritory;
                if (territory_entity) {
                    let territory_children = game.World.Children[territory_entity];
                    mimic.Target = territory_children.Children[0];
                } else {
                    mimic.Target = null;
                }
        }
    }

    if (control.Zoom) {
        game.CameraZoom = transform.Translation[1] / INITIAL_CAMERA_Y;
    }
}
