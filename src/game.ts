import {create_depth_target, DepthTarget} from "../common/framebuffer.js";
import {Mesh} from "../common/material.js";
import {Vec4} from "../common/math.js";
import {GL_CULL_FACE, GL_DEPTH_TEST} from "../common/webgl.js";
import {mat1_colored_unlit_triangles} from "../materials/mat1_colored_unlit_triangles.js";
import {mat1_depth} from "../materials/mat1_depth.js";
import {mat1_textured_mapped} from "../materials/mat1_textured_mapped.js";
import {mesh_cannon} from "../meshes/cannon.js";
import {mesh_dragoon} from "../meshes/dragoon.js";
import {mesh_plane} from "../meshes/plane.js";
import {mesh_room07} from "../meshes/room07.js";
import {mesh_soldier} from "../meshes/soldier.js";
import {loop_start, loop_stop} from "./impl.js";
import {input_frame_reset, input_frame_setup, input_init} from "./input.js";
import {sys_audio_listener} from "./systems/sys_audio_listener.js";
import {sys_audio_source} from "./systems/sys_audio_source.js";
import {sys_camera} from "./systems/sys_camera.js";
import {sys_collide} from "./systems/sys_collide.js";
import {sys_control_ai} from "./systems/sys_control_ai.js";
import {sys_control_always} from "./systems/sys_control_always.js";
import {sys_control_camera} from "./systems/sys_control_camera.js";
import {sys_control_keyboard} from "./systems/sys_control_keyboard.js";
import {sys_control_mouse} from "./systems/sys_control_mouse.js";
import {sys_control_player} from "./systems/sys_control_player.js";
import {sys_control_touch} from "./systems/sys_control_touch.js";
import {sys_deploy} from "./systems/sys_deploy.js";
import {sys_draw} from "./systems/sys_draw.js";
import {sys_framerate} from "./systems/sys_framerate.js";
import {sys_highlight} from "./systems/sys_highlight.js";
import {sys_light} from "./systems/sys_light.js";
import {sys_mimic} from "./systems/sys_mimic.js";
import {sys_move} from "./systems/sys_move.js";
import {sys_nav} from "./systems/sys_nav.js";
import {Picked, sys_pick} from "./systems/sys_pick.js";
import {sys_poll} from "./systems/sys_poll.js";
import {sys_render_depth} from "./systems/sys_render1_depth.js";
import {sys_render_forward} from "./systems/sys_render1_forward.js";
import {sys_rules_battle} from "./systems/sys_rules_battle.js";
import {sys_rules_phase} from "./systems/sys_rules_phase.js";
import {RulesTally, sys_rules_tally} from "./systems/sys_rules_tally.js";
import {sys_select} from "./systems/sys_select.js";
import {sys_transform} from "./systems/sys_transform.js";
import {sys_ui} from "./systems/sys_ui.js";
import {World} from "./world.js";

export type Entity = number;

export const enum PlayerType {
    Human,
    AI,
}

export interface Player {
    Name: string;
    Type: PlayerType;
    Color: Vec4;
}

export const enum PlayState {
    Setup,
    Playing,
}

export const enum TurnPhase {
    Deploy,
    Move,
    Battle,
    EndTurn,
    Endgame,
}

interface BattleCallback {
    TerritoryEntity: number;
    Run: Function;
}

export interface ContinentBonus {
    Territories: number[];
    Bonus: number;
    Name: string;
}

export class Game implements RulesTally {
    World = new World();

    ViewportWidth = 0;
    ViewportHeight = 0;
    ViewportResized = false;

    InputState: Record<string, number> = {
        MouseX: 0,
        MouseY: 0,
    };
    InputDelta: Record<string, number> = {
        MouseX: 0,
        MouseY: 0,
    };
    InputDistance: Record<string, number> = {
        Mouse: 0,
        Mouse0: 0,
        Mouse1: 0,
        Mouse2: 0,
        Touch0: 0,
        Touch1: 0,
    };
    // Map of touch ids to touch indices. In particular, Firefox assigns high
    // ints as ids. Chrome usually starts at 0, so id === index.
    InputTouches: Record<number, number> = {};

    PlayState: PlayState = PlayState.Setup;
    Logs: string = "";
    AlertText: string | null = null;
    Popup?: {Title: string; Content: string};
    // We start in the EndTurn phase which makes sys_rules_phase increment this to 0.
    CurrentPlayer = -1;
    Players: Player[] = [
        {Name: "Yellow", Color: [1, 1, 0, 1], Type: PlayerType.Human},
        {Name: "Red", Color: [1, 0, 0, 1], Type: PlayerType.AI},
        {Name: "Green", Color: [0, 1, 0, 1], Type: PlayerType.AI},
        {Name: "Magenta", Color: [1, 0, 1, 1], Type: PlayerType.AI},
        {Name: "Cyan", Color: [0, 1, 1, 1], Type: PlayerType.AI},
    ];
    CurrentPlayerTerritoryIds: Array<number> = [];

    ContinentBonus: Record<number, ContinentBonus> = [];

    AiActiveUnits: Entity[] = [];
    CurrentlyMovingAiUnit: Entity | null = null;
    CurrentlyFoughtOverTerritory: Entity | null = null;

    IsAiTurn: boolean = false;

    Battles: Array<BattleCallback> = [];

    TurnPhase: TurnPhase = TurnPhase.Deploy;
    UnitsToDeploy: number = 0;
    UnitsDeployed: number = 0;

    UnitsByTeamTerritory: Record<number, Map<number, Array<Entity>>> = {};

    SunEntity: Entity = 0;

    Ui = document.querySelector("main")!;

    CanvasScene = document.querySelector("canvas#scene")! as HTMLCanvasElement;
    Gl = this.CanvasScene.getContext("webgl")!;
    ExtVao = this.Gl.getExtension("OES_vertex_array_object")!;

    Audio = new (window["AudioContext"] || window.webkitAudioContext)();

    CanvasBillboard = document.querySelector("canvas#billboard")! as HTMLCanvasElement;
    Context2D = this.CanvasBillboard.getContext("2d")!;

    MaterialDepth = mat1_depth(this.Gl);
    MaterialColoredUnlit = mat1_colored_unlit_triangles(this.Gl);
    MaterialTexturedMapped = mat1_textured_mapped(this.Gl);
    MeshPlane = mesh_plane(this.Gl);
    MeshRoom = mesh_room07(this.Gl);
    MeshSoldier = mesh_soldier(this.Gl);
    MeshDragoon = mesh_dragoon(this.Gl);
    MeshCannon = mesh_cannon(this.Gl);

    Textures: Record<string, WebGLTexture> = {};
    Sounds: Record<string, AudioBuffer> = {};

    TerritoryMeshes: Array<Array<Mesh>> = [];
    TerritoryGraph: Record<number, Array<number>> = {};
    TerritoryEntities: Record<number, Entity> = {};

    // The rendering pipeline supports 8 lights.
    LightPositions = new Float32Array(4 * 8);
    LightDetails = new Float32Array(4 * 8);

    Targets: {
        Sun: DepthTarget;
    };

    Cameras: Array<Entity> = [];
    CameraZoom: number = 1;
    Picked?: Picked;
    Selected?: Entity;

    constructor() {
        document.addEventListener("visibilitychange", () =>
            document.hidden ? loop_stop() : loop_start(this)
        );

        input_init(this);

        this.Gl.getExtension("WEBGL_depth_texture");

        this.Targets = {
            Sun: create_depth_target(this.Gl, 2048, 2048),
        };

        this.Gl.enable(GL_DEPTH_TEST);
        this.Gl.enable(GL_CULL_FACE);

        for (let i = 0; i < this.Players.length; i++) {
            this.UnitsByTeamTerritory[i] = new Map();
        }
    }

    FrameSetup() {
        input_frame_setup(this);
    }

    FrameReset() {
        this.ViewportResized = false;
        input_frame_reset(this);
    }

    FrameUpdate(delta: number) {
        let now = performance.now();

        // Event loop.
        sys_poll(this, delta);

        // Camera controls and picking.
        sys_control_camera(this, delta);
        sys_control_keyboard(this, delta);
        sys_control_mouse(this, delta);
        sys_control_touch(this, delta);
        sys_pick(this, delta);

        // AI and player orders.
        sys_control_always(this, delta);
        sys_control_ai(this, delta);
        sys_control_player(this, delta);
        sys_deploy(this, delta);
        sys_select(this, delta);
        sys_highlight(this, delta);

        // Game rules.
        sys_rules_tally(this, delta);
        sys_rules_battle(this, delta);
        sys_rules_phase(this, delta);

        // Game logic.
        sys_nav(this, delta);
        sys_mimic(this, delta);
        sys_move(this, delta);
        sys_transform(this, delta);
        sys_collide(this, delta);

        // Rendering.
        sys_audio_listener(this, delta);
        sys_audio_source(this, delta);
        sys_camera(this, delta);
        sys_light(this, delta);
        sys_render_depth(this, delta);
        sys_render_forward(this, delta);
        sys_draw(this, delta);

        // UI.
        sys_ui(this, delta);
        sys_framerate(this, delta, performance.now() - now);
    }
}

export const enum Layer {
    None = 0,
}
