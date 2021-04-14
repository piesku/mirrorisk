import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_eu04(gl: WebGLRenderingContext): Mesh {
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
    29.9061, 0, -74.9682,
    32.1949, 0, -81.7257,
    24.6945, 0, -73.1551,
    27.1012, 0, -71.2954,
    31.0277, 0, -70.1862,
    28.1404, 0, -84.4227,
    22.3425, 0, -81.6878,
    29.2854, 0, -63.7444,
    23.8194, 0, -67.0838,
    24.6398, 0, -62.3799,
    14.4115, 0, -68.8341,
    20.4829, 0, -66.3727,
    15.6148, 0, -61.1765,
    10.1999, 0, -65.7711,
    11.9502, 0, -59.5903,
    19.9906, 0, -58.4964,
    17.8574, 0, -55.7069,
    21.7956, 0, -61.8329
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
    0, 1, 0
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([]);

// prettier-ignore
let index_arr = Uint16Array.from([
    9, 8, 7,
    4, 7, 3,
    8, 3, 7,
    16, 12, 15,
    14, 13, 12,
    17, 15, 11,
    15, 12, 11,
    13, 10, 12,
    12, 10, 11,
    2, 10, 6,
    11, 10, 2,
    6, 1, 2,
    6, 5, 1,
    0, 3, 2,
    4, 3, 0,
    2, 1, 0
]);
