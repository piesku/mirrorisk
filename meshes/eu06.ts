import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_eu06(gl: WebGLRenderingContext): Mesh {
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
    30.8508, 0, -62.4925,
    36.504, 0, -69.0769,
    29.2854, 0, -63.7444,
    34.89, 0, -44.4615,
    38.1735, 0, -45.0102,
    32.2991, 0, -44.6774,
    34.2422, 0, -42.2485,
    55.7127, 0, -53.8704,
    55.0138, 0, -73.6952,
    23.6629, 0, -55.6885,
    26.0919, 0, -57.9015,
    24.4186, 0, -58.9811,
    25.4827, 0, -54.0382,
    25.4681, 0, -61.473,
    44.6386, 0, -48.9526,
    25.1866, 0, -46.1534,
    36.7536, 0, -42.214,
    40.0394, 0, -38.8016,
    45.8891, 0, -35.4791,
    46.9709, 0, -37.3744,
    44.2293, 0, -42.1934,
    46.1207, 0, -44.1336,
    32.1949, 0, -81.7257,
    32.1793, 0, -75.6617,
    39.491, 0, -76.597,
    29.9061, 0, -74.9682,
    55.9124, 0, -81.679,
    43.3387, 0, -78.5167,
    48.0465, 0, -50.922,
    56.1322, 0, -49.5628,
    59.1186, 0, -79.733,
    62.5683, 0, -55.5664,
    22.6473, 0, -54.3134,
    31.0277, 0, -70.1862,
    37.9869, 0, -73.2696
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
    0, 1, 0
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([]);

// prettier-ignore
let index_arr = Uint16Array.from([
    6, 5, 3,
    11, 10, 9,
    12, 32, 9,
    12, 3, 5,
    5, 15, 12,
    10, 12, 9,
    19, 18, 17,
    17, 16, 4,
    20, 17, 4,
    20, 19, 17,
    14, 20, 4,
    14, 21, 20,
    8, 26, 30,
    8, 27, 26,
    8, 31, 7,
    7, 29, 28,
    7, 28, 1,
    8, 1, 27,
    1, 8, 7,
    34, 23, 24,
    24, 23, 22,
    23, 1, 25,
    25, 22, 23,
    33, 25, 1,
    33, 1, 2,
    1, 28, 0,
    28, 14, 0,
    12, 0, 3,
    12, 10, 0,
    0, 14, 4,
    13, 0, 10,
    0, 4, 3,
    2, 1, 0
]);
