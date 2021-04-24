import {Mat4, Vec3} from "./math.js";
import {element, float} from "./random.js";
import {cross, dot, normalize, subtract, transform_point} from "./vec3.js";
import {GL_COMPILE_STATUS, GL_FRAGMENT_SHADER, GL_LINK_STATUS, GL_VERTEX_SHADER} from "./webgl.js";

export interface Mesh {
    VertexBuffer: WebGLBuffer;
    VertexArray: Float32Array;
    NormalBuffer: WebGLBuffer;
    NormalArray: Float32Array;
    TexCoordBuffer: WebGLBuffer;
    TexCoordArray: Float32Array;
    IndexBuffer: WebGLBuffer;
    IndexArray: Uint16Array;
    IndexCount: number;
}

export interface Material<L> {
    Mode: GLenum;
    Program: WebGLProgram;
    Locations: L;
}

export function link(gl: WebGLRenderingContext, vertex: string, fragment: string) {
    let program = gl.createProgram()!;
    gl.attachShader(program, compile(gl, GL_VERTEX_SHADER, vertex));
    gl.attachShader(program, compile(gl, GL_FRAGMENT_SHADER, fragment));
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, GL_LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program)!);
    }

    return program;
}

function compile(gl: WebGLRenderingContext, type: GLenum, source: string) {
    let shader = gl.createShader(type)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, GL_COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader)!);
    }

    return shader;
}

const up: Vec3 = [0, 1, 0];

export function random_point_up_worldspace(mesh: Mesh, world_space: Mat4): Vec3 | null {
    let point_localspace = random_point_up(mesh);
    if (point_localspace === null) {
        return null;
    }

    return transform_point(point_localspace, point_localspace, world_space);
}

export function random_point_up(mesh: Mesh): Vec3 | null {
    let up_face_indices: Array<number> = [];

    let face_count = mesh.IndexCount / 3;
    for (let f = 0; f < face_count; f++) {
        let v0 = mesh.IndexArray[f * 3 + 0];
        let v1 = mesh.IndexArray[f * 3 + 1];
        let v2 = mesh.IndexArray[f * 3 + 2];

        let n = normal(mesh.VertexArray, v0, v1, v2);
        if (dot(n, up) === 1) {
            up_face_indices.push(f);
        }
    }

    if (up_face_indices.length === 0) {
        // No faces facing up.
        return null;
    }

    let f = element(up_face_indices);
    let v0 = mesh.IndexArray[f * 3 + 0];
    let v1 = mesh.IndexArray[f * 3 + 1];
    let v2 = mesh.IndexArray[f * 3 + 2];

    let p0: Vec3 = [
        mesh.VertexArray[v0 * 3 + 0],
        mesh.VertexArray[v0 * 3 + 1],
        mesh.VertexArray[v0 * 3 + 2],
    ];
    let p1: Vec3 = [
        mesh.VertexArray[v1 * 3 + 0],
        mesh.VertexArray[v1 * 3 + 1],
        mesh.VertexArray[v1 * 3 + 2],
    ];
    let p2: Vec3 = [
        mesh.VertexArray[v2 * 3 + 0],
        mesh.VertexArray[v2 * 3 + 1],
        mesh.VertexArray[v2 * 3 + 2],
    ];

    // Random barycentric coords.
    let t0 = float(0, 1);
    let t1 = float(0, 1);
    if (t0 + t1 > 1) {
        t0 = 1 - t0;
        t1 = 1 - t1;
    }
    let t2 = 1 - t0 - t1;

    // Convert barycentric to cartesian.
    return [
        t0 * p0[0] + t1 * p1[0] + t2 * p2[0],
        t0 * p0[1] + t1 * p1[1] + t2 * p2[1],
        t0 * p0[2] + t1 * p1[2] + t2 * p2[2],
    ];
}

function normal(vertices: Float32Array, a: number, b: number, c: number): Vec3 {
    let edge1: Vec3 = [0, 0, 0];
    let edge2: Vec3 = [0, 0, 0];

    subtract(
        edge1,
        [vertices[b * 3 + 0], vertices[b * 3 + 1], vertices[b * 3 + 2]],
        [vertices[a * 3 + 0], vertices[a * 3 + 1], vertices[a * 3 + 2]]
    );

    subtract(
        edge2,
        [vertices[c * 3 + 0], vertices[c * 3 + 1], vertices[c * 3 + 2]],
        [vertices[b * 3 + 0], vertices[b * 3 + 1], vertices[b * 3 + 2]]
    );

    let product = cross([0, 0, 0], edge2, edge1);
    return normalize(product, product);
}
