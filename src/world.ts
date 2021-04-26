import {AudioSource} from "./components/com_audio_source.js";
import {Camera} from "./components/com_camera.js";
import {Children} from "./components/com_children.js";
import {Collide} from "./components/com_collide.js";
import {ControlAlways} from "./components/com_control_always.js";
import {ControlCamera} from "./components/com_control_camera.js";
import {Draw} from "./components/com_draw.js";
import {Highlightable} from "./components/com_highlightable.js";
import {Light} from "./components/com_light.js";
import {Mimic} from "./components/com_mimic.js";
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
    AudioListener,
    AudioSource,
    Camera,
    Children,
    Collide,
    ControlAlways,
    ControlCamera,
    Draw,
    Highlightable,
    Light,
    Mimic,
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
    AudioListener = 1 << Component.AudioListener,
    AudioSource = 1 << Component.AudioSource,
    Camera = 1 << Component.Camera,
    Children = 1 << Component.Children,
    Collide = 1 << Component.Collide,
    ControlAlways = 1 << Component.ControlAlways,
    ControlCamera = 1 << Component.ControlCamera,
    Draw = 1 << Component.Draw,
    Highlightable = 1 << Component.Highlightable,
    Light = 1 << Component.Light,
    Mimic = 1 << Component.Mimic,
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
    AudioListener: Array<AudioListener> = [];
    AudioSource: Array<AudioSource> = [];
    Camera: Array<Camera> = [];
    Children: Array<Children> = [];
    Collide: Array<Collide> = [];
    ControlAlways: Array<ControlAlways> = [];
    ControlCamera: Array<ControlCamera> = [];
    Draw: Array<Draw> = [];
    Highlightable: Array<Highlightable> = [];
    Light: Array<Light> = [];
    Mimic: Array<Mimic> = [];
    Move: Array<Move> = [];
    NavAgent: Array<NavAgent> = [];
    Pickable: Array<Pickable> = [];
    Render: Array<Render> = [];
    Selectable: Array<Selectable> = [];
    Territory: Array<Territory> = [];
    Transform: Array<Transform> = [];
    Team: Array<Team> = [];
}
