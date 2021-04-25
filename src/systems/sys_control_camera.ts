import {Entity, Game, PlayerType} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.ControlPlayer | Has.Mimic;

export function sys_control_camera(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity) {
    let control = game.World.ControlPlayer[entity];
    let mimic = game.World.Mimic[entity];

    let current_team_type = game.Players[game.CurrentPlayer].Type;
    if (control.Move && current_team_type === PlayerType.AI) {
        mimic.Target = game.CurrentlyMovingAiUnit;
    }
}
