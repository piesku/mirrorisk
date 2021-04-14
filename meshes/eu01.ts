import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_eu01(gl: WebGLRenderingContext): Mesh {
    let vertex_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
    gl.bufferData(GL_ARRAY_BUFFER, vertex_arr, GL_STATIC_DRAW);

    let normal_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
    gl.bufferData(GL_ARRAY_BUFFER, normal_arr, GL_STATIC_DRAW);

    let texcoord_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
    gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr, GL_STATIC_DRAW);

    let index_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
    gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr, GL_STATIC_DRAW);

    return {
        VertexBuffer: vertex_buf,
        VertexArray: vertex_arr,
        NormalBuffer: normal_buf,
        TexCoordBuffer: texcoord_buf,
        IndexBuffer: index_buf,
        IndexArray: index_arr,
        IndexCount: index_arr.length,
    };
}

// prettier-ignore
let vertex_arr = Float32Array.from([
    -1.47115, 0, -53.6676,
    1.38644, 0, -54.1731,
    -0.610337, 0, -55.5448,
    -1.33926, 0, -51.4255,
    -2.10507, 0, -54.6435,
    -4.17133, 0, -50.4539,
    -4.03944, 0, -52.8542,
    -7.8642, 0, -52.0629,
    -7.77628, 0, -50.0274,
    -2.26334, 0, -48.5239,
    -4.62414, 0, -56.468,
    -2.51393, 0, -56.1778,
    -3.30526, 0, -58.9739,
    -5.01981, 0, -59.0002,
    -2.01275, 0, -58.9475,
    -2.61944, 0, -60.4774,
    -4.01746, 0, -60.4774,
    1.71616, 0, -50.7221,
    -2.16662, 0, -50.9814
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([]);

// prettier-ignore
let index_arr = Uint16Array.from([
    16, 15, 12,
    15, 14, 12,
    14, 11, 12,
    13, 12, 10,
    12, 11, 10,
    11, 6, 10,
    10, 6, 7,
    8, 7, 5,
    6, 18, 5,
    9, 8, 5,
    7, 6, 5,
    1, 17, 3,
    4, 2, 0,
    0, 1, 3,
    2, 1, 0
]);
