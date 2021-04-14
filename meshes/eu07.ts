import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_eu07(gl: WebGLRenderingContext): Mesh {
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
    -5.46668, 0, -44.0589,
    -8.64182, 0, -49.4922,
    -11.449, 0, -44.1489,
    -5.46668, 0, -44.0589,
    -2.63293, 0, -46.4879,
    -8.64182, 0, -49.4922,
    -11.449, 0, -44.1489,
    -8.88517, 0, -39.6059,
    -5.46668, 0, -44.0589,
    0.740571, 0, -40.6854,
    -5.01688, 0, -40.5955,
    0.515671, 0, -34.0734,
    -8.88517, 0, -39.6059,
    -4.747, 0, -33.7135,
    -11.449, 0, -44.1489,
    -11.7639, 0, -41.0903,
    -8.88517, 0, -39.6059,
    0.515671, 0, -34.0734,
    -5.01688, 0, -40.5955,
    -4.747, 0, -33.7135,
    -5.46668, 0, -44.0589,
    -5.01688, 0, -40.5955,
    -11.449, 0, -44.1489,
    -8.64182, 0, -49.4922,
    -12.6538, 0, -46.8716
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
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0, 0,
    0, 1,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 1,
    0, 0
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    24, 23, 22,
    19, 18, 17,
    16, 15, 14,
    21, 12, 20,
    13, 12, 10,
    11, 10, 9,
    8, 7, 6,
    5, 4, 3,
    2, 1, 0
]);
