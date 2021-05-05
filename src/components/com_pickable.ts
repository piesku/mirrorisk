import {Mesh} from "../../common/material.js";
import {Vec4} from "../../common/math.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface Pickable {
    Kind: PickableKind;
    Mesh?: Mesh;
    Color: Vec4;
}

export const enum PickableKind {
    Territory,
    Unit,
}

export function pickable_territory(mesh: Mesh, color: Vec4) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Pickable;
        game.World.Pickable[entity] = {
            Kind: PickableKind.Territory,
            Mesh: mesh,
            Color: color,
        };
    };
}

export function pickable_unit(color: Vec4) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Pickable;
        game.World.Pickable[entity] = {
            Kind: PickableKind.Unit,
            Color: color,
        };
    };
}
