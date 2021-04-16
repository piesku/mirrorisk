import {DepthTarget} from "../../common/framebuffer.js";
import {create} from "../../common/mat4.js";
import {Mat4, Vec3, Vec4} from "../../common/math.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export type Camera = CameraDisplay | CameraFramebuffer;
export const enum CameraKind {
    Display,
    Framebuffer,
}

export interface CameraEye {
    Pv: Mat4;
    Position: Vec3;
}

export interface CameraDisplay extends CameraEye {
    Kind: CameraKind.Display;
    FovY: number;
    Near: number;
    Far: number;
    View: Mat4;
    Projection: Mat4;
    Unprojection: Mat4;
    ClearColor: Vec4;
}

export function camera_display_perspective(
    fovy: number,
    near: number,
    far: number,
    clear_color: Vec4 = [0.9, 0.9, 0.9, 1]
) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Camera;
        game.World.Camera[entity] = {
            Pv: create(),
            Position: [0, 0, 0],
            Kind: CameraKind.Display,
            FovY: fovy,
            Near: near,
            Far: far,
            View: create(),
            Projection: create(),
            Unprojection: create(),
            ClearColor: clear_color,
        };
    };
}

export interface CameraFramebuffer extends CameraEye {
    Kind: CameraKind.Framebuffer;
    Target: DepthTarget;
    Radius: number;
    Near: number;
    Far: number;
    View: Mat4;
    Projection: Mat4;
    Unprojection: Mat4;
    ClearColor: Vec4;
}
export function camera_framebuffer_ortho(
    target: DepthTarget,
    radius: number,
    near: number,
    far: number,
    clear_color: Vec4
) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Camera;
        game.World.Camera[entity] = {
            Pv: create(),
            Position: [0, 0, 0],
            Kind: CameraKind.Framebuffer,
            Target: target,
            Radius: radius,
            Near: near,
            Far: far,
            View: create(),
            Projection: create(),
            Unprojection: create(),
            ClearColor: clear_color,
        };
    };
}
