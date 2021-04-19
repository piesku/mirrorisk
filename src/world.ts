import {Camera} from "./components/com_camera.js";
import {Children} from "./components/com_children.js";
import {Collide} from "./components/com_collide.js";
import {ControlAlways} from "./components/com_control_always.js";
import {ControlPlayer} from "./components/com_control_player.js";
import {Draw} from "./components/com_draw.js";
import {Highlightable} from "./components/com_highlightable.js";
import {Light} from "./components/com_light.js";
import {Move} from "./components/com_move.js";
import {NavAgent} from "./components/com_nav_agent.js";
import {Pickable} from "./components/com_pickable.js";
import {Render} from "./components/com_render1.js";
import {Selectable} from "./components/com_selectable.js";
import {Team} from "./components/com_team.js";
import {Territory} from "./components/com_territory.js";
import {Transform} from "./components/com_transform.js";
import {Entity} from "./game.js";

const enum Component {
    Camera,
    Children,
    Collide,
    ControlAlways,
    ControlPlayer,
    Draw,
    Highlightable,
    Light,
    Move,
    NavAgent,
    Pickable,
    Render,
    Selectable,
    Territory,
    Transform,
    Team,
}

export const enum Has {
    Camera = 1 << Component.Camera,
    Children = 1 << Component.Children,
    Collide = 1 << Component.Collide,
    ControlAlways = 1 << Component.ControlAlways,
    ControlPlayer = 1 << Component.ControlPlayer,
    Draw = 1 << Component.Draw,
    Highlightable = 1 << Component.Highlightable,
    Light = 1 << Component.Light,
    Move = 1 << Component.Move,
    NavAgent = 1 << Component.NavAgent,
    Pickable = 1 << Component.Pickable,
    Render = 1 << Component.Render,
    Selectable = 1 << Component.Selectable,
    Territory = 1 << Component.Territory,
    Transform = 1 << Component.Transform,
    Team = 1 << Component.Team,
}

export class World {
    Signature: Array<number> = [];
    Graveyard: Array<Entity> = [];

    // Component data
    Camera: Array<Camera> = [];
    Children: Array<Children> = [];
    Collide: Array<Collide> = [];
    ControlAlways: Array<ControlAlways> = [];
    ControlPlayer: Array<ControlPlayer> = [];
    Draw: Array<Draw> = [];
    Highlightable: Array<Highlightable> = [];
    Light: Array<Light> = [];
    Move: Array<Move> = [];
    NavAgent: Array<NavAgent> = [];
    Pickable: Array<Pickable> = [];
    Render: Array<Render> = [];
    Selectable: Array<Selectable> = [];
    Territory: Array<Territory> = [];
    Transform: Array<Transform> = [];
    Team: Array<Team> = [];
}
