import {create_depth_target, DepthTarget} from "../common/framebuffer.js";
import {Mesh} from "../common/material.js";
import {Vec4} from "../common/math.js";
import {GL_CULL_FACE, GL_DEPTH_TEST} from "../common/webgl.js";
import {mat1_colored_specular_phong} from "../materials/mat1_colored_specular_phong.js";
import {mat1_depth} from "../materials/mat1_depth.js";
import {mat1_textured_mapped} from "../materials/mat1_textured_mapped.js";
import {mat1_textured_specular_phong} from "../materials/mat1_textured_specular_phong.js";
import {mesh_cannon} from "../meshes/cannon.js";
import {mesh_cube} from "../meshes/cube.js";
import {mesh_dragoon} from "../meshes/dragoon.js";
import {mesh_plane} from "../meshes/plane.js";
import {mesh_soldier} from "../meshes/soldier.js";
import {mesh_table_round} from "../meshes/table_round.js";
import {loop_start, loop_stop} from "./loop.js";
import {sys_camera} from "./systems/sys_camera.js";
import {sys_collide} from "./systems/sys_collide.js";
import {sys_control_ai} from "./systems/sys_control_ai.js";
import {sys_control_always} from "./systems/sys_control_always.js";
import {sys_control_camera} from "./systems/sys_control_camera.js";
import {sys_control_keyboard} from "./systems/sys_control_keyboard.js";
import {sys_control_mouse} from "./systems/sys_control_mouse.js";
import {sys_control_player} from "./systems/sys_control_player.js";
import {sys_deploy} from "./systems/sys_deploy.js";
import {sys_draw} from "./systems/sys_draw.js";
import {sys_framerate} from "./systems/sys_framerate.js";
import {sys_highlight} from "./systems/sys_highlight.js";
import {sys_light} from "./systems/sys_light.js";
import {sys_mimic} from "./systems/sys_mimic.js";
import {sys_move} from "./systems/sys_move.js";
import {sys_nav} from "./systems/sys_nav.js";
import {Picked, sys_pick} from "./systems/sys_pick.js";
import {sys_render_depth} from "./systems/sys_render1_depth.js";
import {sys_render_forward} from "./systems/sys_render1_forward.js";
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
    Type: PlayerType;
    Color: Vec4;
}

export const enum TurnPhase {
    Deploy,
    Move,
    Battle,
    Regroup,
}
export class Game {
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

    CurrentPlayer = 0;
    Players: Player[] = [];
    CurrentPlayerTerritories: Entity[] = [];

    AiActiveUnits: Entity[] = [];
    CurrentlyMovingAiUnit: Entity | null = null;
    // TODO: EndTurn Actions sets this, so it will break if AI moves first
    IsAiTurn: boolean = false;

    Battles: Function[] = [];

    TurnPhase: TurnPhase = TurnPhase.Deploy;
    UnitsToDeploy: number = 0;
    UnitsDeployed: number = 0;

    TooltipText: string | null = null;
    SunEntity: Entity = 0;

    Ui = document.querySelector("main")!;

    CanvasScene = document.querySelector("canvas#scene")! as HTMLCanvasElement;
    Gl = this.CanvasScene.getContext("webgl")!;
    ExtVao = this.Gl.getExtension("OES_vertex_array_object")!;

    CanvasBillboard = document.querySelector("canvas#billboard")! as HTMLCanvasElement;
    Context2D = this.CanvasBillboard.getContext("2d")!;

    MaterialDepth = mat1_depth(this.Gl);
    MaterialColoredSpecular = mat1_colored_specular_phong(this.Gl);
    MaterialTexturedSpecular = mat1_textured_specular_phong(this.Gl);
    MaterialTexturedMapped = mat1_textured_mapped(this.Gl);
    MeshCube = mesh_cube(this.Gl);
    MeshPlane = mesh_plane(this.Gl);
    MeshTable = mesh_table_round(this.Gl);
    MeshSoldier = mesh_soldier(this.Gl);
    MeshDragoon = mesh_dragoon(this.Gl);
    MeshCannon = mesh_cannon(this.Gl);

    Textures: Record<string, WebGLTexture> = {};

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
    Picked?: Picked;
    Selected?: Entity;

    constructor() {
        document.addEventListener("visibilitychange", () =>
            document.hidden ? loop_stop() : loop_start(this)
        );

        this.Ui.addEventListener("contextmenu", (evt) => evt.preventDefault());
        this.Ui.addEventListener("mousedown", (evt) => {
            this.InputState[`Mouse${evt.button}`] = 1;
            this.InputDelta[`Mouse${evt.button}`] = 1;
        });
        this.Ui.addEventListener("mouseup", (evt) => {
            this.InputState[`Mouse${evt.button}`] = 0;
            this.InputDelta[`Mouse${evt.button}`] = -1;
        });
        this.Ui.addEventListener("mousemove", (evt) => {
            this.InputState.MouseX = evt.offsetX;
            this.InputState.MouseY = evt.offsetY;
            this.InputDelta.MouseX = evt.movementX;
            this.InputDelta.MouseY = evt.movementY;
        });
        this.Ui.addEventListener("wheel", (evt) => {
            this.InputDelta.WheelY = evt.deltaY;
        });
        window.addEventListener("keydown", (evt) => {
            if (!evt.repeat) {
                this.InputState[evt.code] = 1;
                this.InputDelta[evt.code] = 1;
            }
        });
        window.addEventListener("keyup", (evt) => {
            this.InputState[evt.code] = 0;
            this.InputDelta[evt.code] = -1;
        });

        this.Gl.getExtension("WEBGL_depth_texture");

        this.Targets = {
            Sun: create_depth_target(this.Gl, 2048, 2048),
        };

        this.Gl.enable(GL_DEPTH_TEST);
        this.Gl.enable(GL_CULL_FACE);
    }

    FrameReset() {
        this.ViewportResized = false;
        for (let name in this.InputDelta) {
            this.InputDelta[name] = 0;
        }
    }

    FrameUpdate(delta: number) {
        let now = performance.now();

        // User input.
        sys_pick(this, delta);
        sys_select(this, delta);
        sys_highlight(this, delta);

        sys_control_ai(this, delta);
        sys_control_camera(this, delta);
        sys_control_player(this, delta);
        sys_control_keyboard(this, delta);
        sys_control_mouse(this, delta);
        sys_deploy(this, delta);

        // AI.
        sys_control_always(this, delta);

        // Game logic.
        sys_nav(this, delta);
        sys_mimic(this, delta);
        sys_move(this, delta);
        sys_transform(this, delta);
        sys_collide(this, delta);

        // Rendering.
        sys_camera(this, delta);
        sys_light(this, delta);
        sys_render_depth(this, delta);
        sys_render_forward(this, delta);
        sys_draw(this, delta);

        sys_ui(this, delta);
        sys_framerate(this, delta, performance.now() - now);
    }
}

export const enum Layer {
    None = 0,
}
