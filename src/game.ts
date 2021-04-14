import {Mesh} from "../common/material.js";
import {GL_CULL_FACE, GL_DEPTH_TEST} from "../common/webgl.js";
import {mat1_colored_diffuse_gouraud} from "../materials/mat1_colored_diffuse_gouraud.js";
import {mat1_colored_unlit_line} from "../materials/mat1_colored_unlit_line.js";
import {mesh_cube} from "../meshes/cube.js";
import {Camera} from "./components/com_camera.js";
import {loop_start, loop_stop} from "./loop.js";
import {sys_camera} from "./systems/sys_camera.js";
import {sys_collide} from "./systems/sys_collide.js";
import {sys_control_keyboard} from "./systems/sys_control_keyboard.js";
import {sys_control_mouse} from "./systems/sys_control_mouse.js";
import {sys_control_pick} from "./systems/sys_control_pick.js";
import {sys_draw} from "./systems/sys_draw.js";
import {sys_framerate} from "./systems/sys_framerate.js";
import {sys_highlight} from "./systems/sys_highlight.js";
import {sys_light} from "./systems/sys_light.js";
import {sys_move} from "./systems/sys_move.js";
import {sys_nav} from "./systems/sys_nav.js";
import {Picked, sys_pick} from "./systems/sys_pick.js";
import {sys_render} from "./systems/sys_render1.js";
import {sys_select} from "./systems/sys_select.js";
import {sys_transform} from "./systems/sys_transform.js";
import {World} from "./world.js";

export type Entity = number;

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

    Ui = document.querySelector("main")!;
    CanvasScene = document.querySelector("canvas#scene")! as HTMLCanvasElement;
    Gl = this.CanvasScene.getContext("webgl")!;
    ExtVao = this.Gl.getExtension("OES_vertex_array_object")!;

    CanvasBillboard = document.querySelector("canvas#billboard")! as HTMLCanvasElement;
    Context2D = this.CanvasBillboard.getContext("2d")!;

    MaterialColoredUnlitLine = mat1_colored_unlit_line(this.Gl);
    MaterialColoredDiffuseGouraud = mat1_colored_diffuse_gouraud(this.Gl);
    MeshCube = mesh_cube(this.Gl);

    Regions: Regions = {
        Europe: [],
    };

    // The rendering pipeline supports 8 lights.
    LightPositions = new Float32Array(4 * 8);
    LightDetails = new Float32Array(4 * 8);
    Cameras: Array<Camera> = [];

    Pick?: Picked;

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
        sys_highlight(this, delta);
        sys_select(this, delta);
        sys_control_pick(this, delta);
        sys_control_keyboard(this, delta);
        sys_control_mouse(this, delta);

        // Game logic.
        sys_nav(this, delta);
        sys_move(this, delta);
        sys_transform(this, delta);
        sys_collide(this, delta);

        // Rendering.
        sys_camera(this, delta);
        sys_light(this, delta);
        sys_render(this, delta);
        sys_draw(this, delta);

        sys_framerate(this, delta, performance.now() - now);
    }
}

export const enum Layer {
    None = 0,
}

interface Regions {
    Europe: Array<Mesh>;
}
