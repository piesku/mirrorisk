import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_eu05(gl: WebGLRenderingContext): Mesh {
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
    21.2942, 0, -39.8211,
    24.8926, 0, -37.6256,
    29.578, 0, -40.9574,
    14.1478, 0, -41.765,
    17.5663, 0, -38.1216,
    18.3322, 0, -39.3635,
    11.7639, 0, -41.0903,
    11.449, 0, -44.1489,
    16.5776, 0, -42.8605,
    14.2794, 0, -45.525,
    17.6536, 0, -43.2642,
    20.1868, 0, -37.5912,
    12.6538, 0, -46.8716,
    28.2765, 0, -37.6516,
    23.3048, 0, -35.9857,
    25.1477, 0, -35.1579,
    26.2982, 0, -34.9965,
    25.1009, 0, -33.1744,
    23.8931, 0, -33.872,
    20.53, 0, -38.0681,
    21.4306, 0, -37.3236,
    21.3213, 0, -36.6989,
    19.4367, 0, -36.7353,
    20.3113, 0, -35.9232,
    19.4055, 0, -34.9549,
    23.7161, 0, -34.9549,
    17.6809, 0, -46.8639,
    20.1125, 0, -46.8516,
    25.1866, 0, -46.1534,
    32.2991, 0, -44.6774,
    16.9289, 0, -35.0662,
    18.6893, 0, -33.592,
    18.7773, 0, -35.0867,
    14.401, 0, -36.8027,
    13.1587, 0, -37.8742,
    13.5217, 0, -35.9674,
    16.5332, 0, -34.7804,
    14.0599, 0, -38.3139,
    23.0125, 0, -43.8609,
    19.9007, 0, -44.253
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
let texcoord_arr = Float32Array.from([]);

// prettier-ignore
let index_arr = Uint16Array.from([
    34, 37, 33,
    35, 34, 33,
    31, 36, 30,
    32, 31, 30,
    24, 22, 23,
    23, 22, 11,
    21, 11, 20,
    20, 11, 19,
    19, 11, 5,
    22, 4, 11,
    11, 4, 5,
    5, 3, 8,
    7, 3, 6,
    5, 4, 3,
    7, 12, 9,
    3, 7, 9,
    10, 8, 9,
    9, 8, 3,
    9, 26, 10,
    27, 10, 26,
    27, 39, 10,
    25, 15, 18,
    18, 15, 17,
    17, 15, 16,
    2, 38, 28,
    29, 2, 28,
    16, 15, 1,
    15, 14, 1,
    13, 1, 2,
    39, 38, 0,
    39, 0, 10,
    2, 0, 38,
    14, 0, 1,
    2, 1, 0
]);
