import {element} from "../../common/random.js";
import {SelectedState} from "../components/com_selectable.js";
import {Entity, Game, PlayerType} from "../game.js";
import {input_clicked} from "../input.js";
import {Logger} from "../ui/App.js";
import {LOG_ERROR_UNIT_ALREADY_MOVED, LOG_ERROR_UNIT_CANNOT_LEAVE} from "../ui/messages.js";
import {Has} from "../world.js";

const QUERY = Has.Selectable | Has.NavAgent | Has.Team;

export function sys_control_player(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        let team = game.World.Team[i];
        let selectable = game.World.Selectable[i];
        if (
            (game.World.Signature[i] & QUERY) == QUERY &&
            game.Players[team.Id].Type === PlayerType.Human &&
            team.Id === game.CurrentPlayer &&
            selectable.Selected
        ) {
            update(game, i);
        }
    }
}

const sfx = ["mhm1.mp3", "mhm2.mp3", "mhm3.mp3", "mhm4.mp3"];

function update(game: Game, entity: Entity) {
    let agent = game.World.NavAgent[entity];
    let team = game.World.Team[entity];
    let transform = game.World.Transform[entity];
    let audio_source = game.World.AudioSource[entity];
    let selectable = game.World.Selectable[entity];

    if (selectable.Selected === SelectedState.ThisFrame) {
        switch (team.Actions) {
            case 0:
                Logger(game, LOG_ERROR_UNIT_ALREADY_MOVED());
                break;
            case -1:
                Logger(game, LOG_ERROR_UNIT_CANNOT_LEAVE());
                break;
        }
    }

    if (
        // If the user left-clicks…
        input_clicked(game, 0, 0) &&
        // …over a territory.
        game.Picked &&
        game.World.Signature[game.Picked.Entity] & Has.Territory
    ) {
        let territory_entity = game.Picked.Entity;
        let territory = game.World.Territory[territory_entity];

        if (agent.TerritoryId === territory.Id) {
            // Allow free movement inside the current territory.
            agent.TerritoryId = territory.Id;
            agent.Destination = game.Picked.Point;

            return;
        }

        if (
            // If the user clicked on a neighboring territory…
            game.TerritoryGraph[agent.TerritoryId].includes(territory.Id) &&
            // …and the unit can move.
            team.Actions > 0
        ) {
            team.Actions -= 1;

            let Alaska = 31;
            let Kamchatka = 56;
            // Kamchatka -> Alaska & Alaska -> Kamchatka
            if (agent.TerritoryId === Kamchatka && territory.Id === Alaska) {
                transform.Translation[0] = 140;
                transform.Translation[2] = -64.29;
                transform.Dirty = true;
            } else if (agent.TerritoryId === Alaska && territory.Id === Kamchatka) {
                transform.Translation[0] = -160;
                transform.Translation[2] = -64.58;
                transform.Dirty = true;
            }
            agent.TerritoryId = territory.Id;
            agent.Destination = game.Picked.Point;
            audio_source.Trigger = game.Sounds[element(sfx)];
        }
    }
}
