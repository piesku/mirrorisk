import {copy} from "../../common/vec4.js";
import {PickableKind} from "../components/com_pickable.js";
import {RenderColoredDiffuse} from "../components/com_render1.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Pickable;

export function sys_highlight(game: Game, delta: number) {
    for (let i = 0; i < game.World.Signature.length; i++) {
        if ((game.World.Signature[i] & QUERY) == QUERY) {
            let pickable = game.World.Pickable[i];
            switch (pickable.Kind) {
                case PickableKind.Territory: {
                    update_territory(game, i);
                    break;
                }
                case PickableKind.Unit: {
                    update_unit(game, i);
                    break;
                }
            }
        }
    }
}

function update_territory(game: Game, entity: Entity) {
    let pickable = game.World.Pickable[entity];
    let render = game.World.Render[entity] as RenderColoredDiffuse;

    if (game.Selected) {
        let nav_agent = game.World.NavAgent[game.Selected];
        let territory = game.World.Territory[entity];

        if (nav_agent.TerritoryId === territory.Id) {
            // The selected unit is on this terrain tile.
            copy(render.Color, pickable.ColorSelected);
        } else if (
            nav_agent.Actions > 0 &&
            game.TerritoryGraph[territory.Id].includes(nav_agent.TerritoryId)
        ) {
            // The selected unit is on a neighboring tile. The current tile is a
            // possible movement and attach target.
            copy(render.Color, pickable.ColorReady);
            if (pickable.Hover) {
                render.Color[1] += 0.2;
            }
        } else {
            copy(render.Color, pickable.ColorIdle);
        }
    } else if (pickable.Hover) {
        copy(render.Color, pickable.ColorHover);
    } else {
        copy(render.Color, pickable.ColorIdle);
    }
}

function update_unit(game: Game, entity: Entity) {
    let pickable = game.World.Pickable[entity];
    let selectable = game.World.Selectable[entity];
    let mesh_entity = game.World.Children[entity].Children[1];
    let render = game.World.Render[mesh_entity] as RenderColoredDiffuse;

    if (selectable.Selected) {
        copy(render.Color, pickable.ColorSelected);
        if (pickable.Hover) {
            render.Color[1] += 0.3;
        }
    } else if (pickable.Hover) {
        copy(render.Color, pickable.ColorHover);
    } else {
        copy(render.Color, pickable.ColorIdle);
    }
}
