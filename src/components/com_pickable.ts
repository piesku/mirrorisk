import {Mesh} from "../../common/material.js";
import {Vec4} from "../../common/math.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Pickable {
    Kind: PickableKind;
    Mesh?: Mesh;
    Hover: boolean;
    ColorIdle: Vec4;
    ColorHover: Vec4;
    ColorReady: Vec4;
    ColorSelected: Vec4;
}

export const enum PickableKind {
    Territory,
    Unit,
}

export function pickable_territory(
    mesh: Mesh,
    color_idle: Vec4,
    color_hover: Vec4,
    color_ready: Vec4,
    color_selected: Vec4
) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Pickable;
        game.World.Pickable[entity] = {
            Kind: PickableKind.Territory,
            Mesh: mesh,
            Hover: false,
            ColorIdle: color_idle,
            ColorHover: color_hover,
            ColorReady: color_ready,
            ColorSelected: color_selected,
        };
    };
}

export function pickable_unit(color_idle: Vec4, color_hover: Vec4, color_selected: Vec4) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Pickable;
        game.World.Pickable[entity] = {
            Kind: PickableKind.Unit,
            Hover: false,
            ColorIdle: color_idle,
            ColorHover: color_hover,
            ColorReady: color_selected,
            ColorSelected: color_selected,
        };
    };
}
