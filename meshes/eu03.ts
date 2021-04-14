import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_eu03(gl: WebGLRenderingContext): Mesh {
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
    -16.6992, 0, -54.4468,
    -13.2069, 0, -53.6256,
    -13.2945, 0, -57.5705,
    -18.012, 0, -53.7302,
    -21.041, 0, -55.0091,
    -22.6473, 0, -54.3134,
    -12.6538, 0, -46.8716,
    -10.4207, 0, -52.479,
    -13.2069, 0, -53.6256,
    -16.6992, 0, -54.4468,
    -13.2945, 0, -57.5705,
    -14.7001, 0, -58.1015,
    -25.1866, 0, -46.1534,
    -20.1125, 0, -46.8516,
    -22.6473, 0, -54.3134,
    -8.64182, 0, -49.4922,
    -13.2069, 0, -53.6256,
    -18.012, 0, -53.7302,
    -12.6538, 0, -46.8716,
    -18.012, 0, -53.7302,
    -14.2794, 0, -45.525,
    -12.6538, 0, -46.8716,
    -23.0125, 0, -43.8609,
    -19.9007, 0, -44.253,
    -25.1866, 0, -46.1534,
    -18.012, 0, -53.7302,
    -13.2069, 0, -53.6256,
    -16.6992, 0, -54.4468,
    -17.6809, 0, -46.8639,
    -14.2794, 0, -45.525,
    -25.1866, 0, -46.1534,
    -22.6473, 0, -54.3134,
    -25.4827, 0, -54.0382,
    -22.6473, 0, -54.3134,
    -20.1125, 0, -46.8516,
    -19.9007, 0, -44.253,
    -20.1125, 0, -46.8516,
    -25.1866, 0, -46.1534,
    -20.1125, 0, -46.8516,
    -17.6809, 0, -46.8639
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
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0.53966, 1,
    1, 1,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 1,
    1, 1,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    1, 1,
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
    0, 0
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    37, 36, 35,
    32, 31, 30,
    27, 26, 25,
    24, 23, 22,
    39, 38, 19,
    19, 34, 33,
    21, 20, 19,
    17, 29, 28,
    18, 17, 16,
    14, 13, 12,
    11, 10, 9,
    7, 15, 6,
    8, 7, 6,
    5, 4, 3,
    2, 1, 0
]);
