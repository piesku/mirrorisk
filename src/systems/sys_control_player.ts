import {element} from "../../common/random.js";
import {Entity, Game, PlayerType} from "../game.js";
import {input_clicked} from "../input.js";
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
    let transform = game.World.Transform[entity];
    let audio_source = game.World.AudioSource[entity];

    if (
        // If the user clicks…
        input_clicked(game, 2, 0) &&
        // …over a territory…
        game.Picked &&
        game.World.Signature[game.Picked.Entity] & Has.Territory &&
        // …and the army can move.
        agent.Actions > 0
    ) {
        let territory_entity = game.Picked.Entity;
        let territory = game.World.Territory[territory_entity];

        if (!game.TerritoryGraph[agent.TerritoryId].includes(territory.Id)) {
            // This aint adjacent territory
            return;
        }

        if (agent.TerritoryId !== territory.Id) {
            // Use the action up only when moving to another territory.
            agent.Actions -= 1;
        }

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
