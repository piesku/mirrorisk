import {copy, scale} from "../../common/vec4.js";
import {DrawSelection} from "../components/com_draw.js";
import {PickableKind} from "../components/com_pickable.js";
import {RenderTexturedMapped} from "../components/com_render1.js";
import {Entity, Game, PlayerType, TurnPhase} from "../game.js";
import {Has} from "../world.js";

const QUERY = Has.Pickable;

export function sys_highlight(game: Game, delta: number) {
    if (game.CurrentPlayer < 0) {
        return;
    }

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
    let render = game.World.Render[entity] as RenderTexturedMapped;

    // Reset the color.
    copy(render.ColorDiffuse, pickable.Color);

    if (game.TurnPhase === TurnPhase.Battle) {
        update_territory_battle(game, entity);
    } else if (game.Players[game.CurrentPlayer].Type === PlayerType.Human) {
        if (game.TurnPhase === TurnPhase.Deploy) {
            update_territory_deploy(game, entity);
        } else if (game.TurnPhase === TurnPhase.Move) {
            update_territory_move(game, entity);
        }
    }
}

function update_territory_deploy(game: Game, entity: Entity) {
    let territory = game.World.Territory[entity];
    let render = game.World.Render[entity] as RenderTexturedMapped;

    if (game.Picked?.Entity === entity && game.CurrentPlayerTerritoryIds.includes(territory.Id)) {
        // Mouse over this territory.
        scale(render.ColorDiffuse, render.ColorDiffuse, 1.8);
    }
}

function update_territory_move(game: Game, entity: Entity) {
    let territory = game.World.Territory[entity];
    let render = game.World.Render[entity] as RenderTexturedMapped;

    if (game.Selected) {
        let nav_agent = game.World.NavAgent[game.Selected];
        let team = game.World.Team[game.Selected];

        if (nav_agent.TerritoryId === territory.Id) {
            // The selected unit is on this terrain tile.
            scale(render.ColorDiffuse, render.ColorDiffuse, 1.8);
        } else if (
            team.Actions > 0 &&
            game.TerritoryGraph[territory.Id].includes(nav_agent.TerritoryId)
        ) {
            // The selected unit is on a neighboring tile. The current tile is a
            // possible movement and attack target. Keep the default color,
            // unless the cursor in over this territory.
            if (game.Picked?.Entity === entity) {
                // Mouse over this territory.
                scale(render.ColorDiffuse, render.ColorDiffuse, 1.8);
            }
        } else {
            // The selected unit is on a distant territory.
            scale(render.ColorDiffuse, render.ColorDiffuse, 0.5);
        }
    } else if (game.Picked?.Entity === entity) {
        // Mouse over this territory.
        scale(render.ColorDiffuse, render.ColorDiffuse, 1.8);
    }
}

function update_territory_battle(game: Game, entity: Entity) {
    let render = game.World.Render[entity] as RenderTexturedMapped;

    if (game.CurrentlyFoughtOverTerritory === entity) {
        // A battle is taking place on this territory.
        scale(render.ColorDiffuse, render.ColorDiffuse, 1.8);
    }
}

function update_unit(game: Game, entity: Entity) {
    let pickable = game.World.Pickable[entity];
    let selectable = game.World.Selectable[entity];
    let children = game.World.Children[entity];

    let box_entity = children.Children[0];
    let box_draw = game.World.Draw[box_entity] as DrawSelection;

    let mesh_entity = children.Children[1];
    let mesh_render = game.World.Render[mesh_entity] as RenderTexturedMapped;

    if (game.Picked?.Entity === entity) {
        copy(mesh_render.ColorDiffuse, pickable.Color);
        scale(mesh_render.ColorDiffuse, mesh_render.ColorDiffuse, 1.5);
    } else {
        copy(mesh_render.ColorDiffuse, pickable.Color);
    }

    if (selectable.Selected) {
        game.World.Signature[box_entity] |= Has.Draw;
        box_draw.Size = 80 / game.CameraZoom;
    } else {
        game.World.Signature[box_entity] &= ~Has.Draw;
    }
}
