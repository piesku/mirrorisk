import {copy} from "../../common/vec4.js";
import {Action, dispatch} from "../actions.js";
import {PickableKind} from "../components/com_pickable.js";
import {RenderColoredSpecular} from "../components/com_render1.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Pickable;

export function sys_highlight(game: Game, delta: number) {
    dispatch(game, Action.ClearTooltipText, {});
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
    let territory = game.World.Territory[entity];

    let render = game.World.Render[entity] as RenderColoredSpecular;

    if (game.Selected) {
        let nav_agent = game.World.NavAgent[game.Selected];

        if (nav_agent.TerritoryId === territory.Id) {
            // The selected unit is on this terrain tile.
            copy(render.ColorDiffuse, pickable.ColorSelected);
        } else if (
            nav_agent.Actions > 0 &&
            game.TerritoryGraph[territory.Id].includes(nav_agent.TerritoryId)
        ) {
            // The selected unit is on a neighboring tile. The current tile is a
            // possible movement and attach target.
            copy(render.ColorDiffuse, pickable.ColorReady);
            if (pickable.Hover) {
                render.ColorDiffuse[1] += 0.2;
            }
        } else {
            copy(render.ColorDiffuse, pickable.ColorIdle);
        }
    } else if (pickable.Hover) {
        copy(render.ColorDiffuse, pickable.ColorHover);
        dispatch(game, Action.ShowTooltipText, territory.Name || `Territory Id: ${territory.Id}`);
    } else {
        copy(render.ColorDiffuse, pickable.ColorIdle);
    }
}

function update_unit(game: Game, entity: Entity) {
    let pickable = game.World.Pickable[entity];
    let selectable = game.World.Selectable[entity];
    let mesh_entity = game.World.Children[entity].Children[1];
    let render = game.World.Render[mesh_entity] as RenderColoredSpecular;

    if (selectable.Selected) {
        copy(render.ColorDiffuse, pickable.ColorSelected);
        if (pickable.Hover) {
            render.ColorDiffuse[1] += 0.3;
        }
    } else if (pickable.Hover) {
        copy(render.ColorDiffuse, pickable.ColorHover);
    } else {
        copy(render.ColorDiffuse, pickable.ColorIdle);
    }
}
