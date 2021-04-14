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
    1.47115, 0, -53.6676,
    0.610336, 0, -55.5448,
    -1.38643, 0, -54.1731,
    1.33926, 0, -51.4255,
    2.10507, 0, -54.6435,
    4.17132, 0, -50.4539,
    7.8642, 0, -52.0629,
    4.03943, 0, -52.8542,
    2.26334, 0, -48.5239,
    7.77627, 0, -50.0274,
    4.62414, 0, -56.468,
    2.51393, 0, -56.1778,
    3.30526, 0, -58.9739,
    5.0198, 0, -59.0002,
    2.01275, 0, -58.9475,
    2.61944, 0, -60.4774,
    4.01745, 0, -60.4774,
    -1.71616, 0, -50.7221,
    2.16662, 0, -50.9814
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
    15, 16, 12,
    14, 15, 12,
    11, 14, 12,
    12, 13, 10,
    11, 12, 10,
    7, 11, 10,
    7, 10, 6,
    6, 9, 5,
    18, 7, 5,
    9, 8, 5,
    7, 6, 5,
    17, 2, 3,
    1, 4, 0,
    2, 0, 3,
    2, 1, 0
]);
