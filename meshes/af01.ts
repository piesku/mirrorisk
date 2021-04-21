import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_af01(gl: WebGLRenderingContext): Mesh {
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
        NormalArray: normal_arr,
        TexCoordBuffer: texcoord_buf,
        TexCoordArray: texcoord_arr,
        IndexBuffer: index_buf,
        IndexArray: index_arr,
        IndexCount: index_arr.length,
    };
}

// prettier-ignore
let vertex_arr = Float32Array.from([
    -14.4835, 0.999795, -1.55236,
    -13.2071, 0.999795, -4.52866,
    -13.8454, 0.999795, -6.20576,
    -16.3598, 0.999795, -6.76637,
    -19.7281, 0.999795, -8.9912,
    -20.2487, 0.999795, -7.43874,
    -23.3761, 0.999795, -4.40909,
    -26.2006, 0.999795, -2.95411,
    -26.4679, 0.999795, -2.03598,
    -25.3673, 0.999795, -0.736912,
    -24.6882, 0.999795, 1.60471,
    -26.1696, 0.999795, 6.38405,
    -24.3689, 0.999795, 6.75669,
    -24.1885, 0.999795, 9.34332,
    -25.3896, 0.999795, 9.79725,
    -25.3224, 0.999795, 10.4167,
    -19.7193, 0.999795, 8.58684,
    -19.363, 0.999795, 5.31256,
    -17.5051, 0.999795, 4.97315,
    -16.8149, 0.999795, 5.95222,
    -15.6743, 0.999795, 6.12178,
    -15.0079, 0.999795, 4.28207,
    -11.2275, 0.999795, 4.24331,
    -8.58804, 0.999795, 0.613062,
    -9.10207, 0.999795, -2.07877,
    -19.363, -0.000205, 5.31256,
    -17.5051, -0.000205, 4.97315,
    -17.5051, 0.999795, 4.97315,
    -19.363, 0.999795, 5.31256,
    -26.1696, -0.000205, 6.38405,
    -24.3689, -0.000205, 6.75669,
    -24.3689, 0.999795, 6.75669,
    -26.1696, 0.999795, 6.38405,
    -19.7281, -0.000205, -8.9912,
    -20.2487, -0.000205, -7.43874,
    -20.2487, 0.999795, -7.43874,
    -19.7281, 0.999795, -8.9912,
    -19.7193, -0.000205, 8.58684,
    -19.363, -0.000205, 5.31256,
    -19.363, 0.999795, 5.31256,
    -19.7193, 0.999795, 8.58684,
    -20.2487, -0.000205, -7.43874,
    -23.3761, -0.000205, -4.40909,
    -23.3761, 0.999795, -4.40909,
    -20.2487, 0.999795, -7.43874,
    -25.3224, -0.000205, 10.4167,
    -19.7193, -0.000205, 8.58684,
    -19.7193, 0.999795, 8.58684,
    -25.3224, 0.999795, 10.4167,
    -11.2275, -0.000205, 4.24331,
    -8.58804, -0.000205, 0.613062,
    -8.58804, 0.999795, 0.613062,
    -11.2275, 0.999795, 4.24331,
    -23.3761, -0.000205, -4.40909,
    -26.2006, -0.000205, -2.95411,
    -26.2006, 0.999795, -2.95411,
    -23.3761, 0.999795, -4.40909,
    -24.3689, -0.000205, 6.75669,
    -24.1885, -0.000205, 9.34332,
    -24.1885, 0.999795, 9.34332,
    -24.3689, 0.999795, 6.75669,
    -14.4835, -0.000205, -1.55236,
    -13.2071, -0.000205, -4.52866,
    -13.2071, 0.999795, -4.52866,
    -14.4835, 0.999795, -1.55236,
    -15.0079, -0.000205, 4.28207,
    -11.2275, -0.000205, 4.24331,
    -11.2275, 0.999795, 4.24331,
    -15.0079, 0.999795, 4.28207,
    -26.2006, -0.000205, -2.95411,
    -26.4679, -0.000205, -2.03598,
    -26.4679, 0.999795, -2.03598,
    -26.2006, 0.999795, -2.95411,
    -25.3896, -0.000205, 9.79725,
    -25.3224, -0.000205, 10.4167,
    -25.3224, 0.999795, 10.4167,
    -25.3896, 0.999795, 9.79725,
    -15.6743, -0.000205, 6.12178,
    -15.0079, -0.000205, 4.28207,
    -15.0079, 0.999795, 4.28207,
    -15.6743, 0.999795, 6.12178,
    -26.4679, -0.000205, -2.03598,
    -25.3673, -0.000205, -0.736912,
    -25.3673, 0.999795, -0.736912,
    -26.4679, 0.999795, -2.03598,
    -24.1885, -0.000205, 9.34332,
    -25.3896, -0.000205, 9.79725,
    -25.3896, 0.999795, 9.79725,
    -24.1885, 0.999795, 9.34332,
    -16.3598, -0.000205, -6.76637,
    -19.7281, -0.000205, -8.9912,
    -19.7281, 0.999795, -8.9912,
    -16.3598, 0.999795, -6.76637,
    -16.8149, -0.000205, 5.95222,
    -15.6743, -0.000205, 6.12178,
    -15.6743, 0.999795, 6.12178,
    -16.8149, 0.999795, 5.95222,
    -25.3673, -0.000205, -0.736912,
    -24.6882, -0.000205, 1.60471,
    -24.6882, 0.999795, 1.60471,
    -25.3673, 0.999795, -0.736912,
    -13.2071, -0.000205, -4.52866,
    -13.8454, -0.000205, -6.20576,
    -13.8454, 0.999795, -6.20576,
    -13.2071, 0.999795, -4.52866,
    -17.5051, -0.000205, 4.97315,
    -16.8149, -0.000205, 5.95222,
    -16.8149, 0.999795, 5.95222,
    -17.5051, 0.999795, 4.97315,
    -24.6882, -0.000205, 1.60471,
    -26.1696, -0.000205, 6.38405,
    -26.1696, 0.999795, 6.38405,
    -24.6882, 0.999795, 1.60471,
    -8.58804, -0.000205, 0.613062,
    -9.10207, -0.000205, -2.07877,
    -9.10207, 0.999795, -2.07877,
    -8.58804, 0.999795, 0.613062,
    -9.10207, -0.000205, -2.07877,
    -14.4835, -0.000205, -1.55236,
    -14.4835, 0.999795, -1.55236,
    -9.10207, 0.999795, -2.07877,
    -13.8454, -0.000205, -6.20576,
    -16.3598, -0.000205, -6.76637,
    -16.3598, 0.999795, -6.76637,
    -13.8454, 0.999795, -6.20576
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
    0.1797, 0, 0.9837,
    0.1797, 0, 0.9837,
    0.1797, 0, 0.9837,
    0.1797, 0, 0.9837,
    -0.2027, 0, 0.9793,
    -0.2027, 0, 0.9793,
    -0.2027, 0, 0.9793,
    -0.2027, 0, 0.9793,
    -0.9481, 0, -0.3179,
    -0.9481, 0, -0.3179,
    -0.9481, 0, -0.3179,
    -0.9481, 0, -0.3179,
    0.9941, 0, 0.1082,
    0.9941, 0, 0.1082,
    0.9941, 0, 0.1082,
    0.9941, 0, 0.1082,
    -0.6958, 0, -0.7182,
    -0.6958, 0, -0.7182,
    -0.6958, 0, -0.7182,
    -0.6958, 0, -0.7182,
    0.3104, 0, 0.9506,
    0.3104, 0, 0.9506,
    0.3104, 0, 0.9506,
    0.3104, 0, 0.9506,
    0.8088, 0, 0.5881,
    0.8088, 0, 0.5881,
    0.8088, 0, 0.5881,
    0.8088, 0, 0.5881,
    -0.4579, 0, -0.889,
    -0.4579, 0, -0.889,
    -0.4579, 0, -0.889,
    -0.4579, 0, -0.889,
    -0.9976, 0, 0.0696,
    -0.9976, 0, 0.0696,
    -0.9976, 0, 0.0696,
    -0.9976, 0, 0.0696,
    0.9191, 0, 0.3941,
    0.9191, 0, 0.3941,
    0.9191, 0, 0.3941,
    0.9191, 0, 0.3941,
    0.0103, 0, 0.9999,
    0.0103, 0, 0.9999,
    0.0103, 0, 0.9999,
    0.0103, 0, 0.9999,
    -0.9601, 0, -0.2796,
    -0.9601, 0, -0.2796,
    -0.9601, 0, -0.2796,
    -0.9601, 0, -0.2796,
    -0.9942, 0, 0.1078,
    -0.9942, 0, 0.1078,
    -0.9942, 0, 0.1078,
    -0.9942, 0, 0.1078,
    0.9402, 0, 0.3406,
    0.9402, 0, 0.3406,
    0.9402, 0, 0.3406,
    0.9402, 0, 0.3406,
    -0.763, 0, 0.6464,
    -0.763, 0, 0.6464,
    -0.763, 0, 0.6464,
    -0.763, 0, 0.6464,
    -0.3535, 0, -0.9354,
    -0.3535, 0, -0.9354,
    -0.3535, 0, -0.9354,
    -0.3535, 0, -0.9354,
    0.5511, 0, -0.8344,
    0.5511, 0, -0.8344,
    0.5511, 0, -0.8344,
    0.5511, 0, -0.8344,
    -0.147, 0, 0.9891,
    -0.147, 0, 0.9891,
    -0.147, 0, 0.9891,
    -0.147, 0, 0.9891,
    -0.9604, 0, 0.2785,
    -0.9604, 0, 0.2785,
    -0.9604, 0, 0.2785,
    -0.9604, 0, 0.2785,
    0.9346, 0, -0.3557,
    0.9346, 0, -0.3557,
    0.9346, 0, -0.3557,
    0.9346, 0, -0.3557,
    -0.8173, 0, 0.5762,
    -0.8173, 0, 0.5762,
    -0.8173, 0, 0.5762,
    -0.8173, 0, 0.5762,
    -0.9552, 0, -0.2961,
    -0.9552, 0, -0.2961,
    -0.9552, 0, -0.2961,
    -0.9552, 0, -0.2961,
    0.9823, 0, -0.1876,
    0.9823, 0, -0.1876,
    0.9823, 0, -0.1876,
    0.9823, 0, -0.1876,
    -0.0974, 0, -0.9952,
    -0.0974, 0, -0.9952,
    -0.0974, 0, -0.9952,
    -0.0974, 0, -0.9952,
    0.2176, 0, -0.976,
    0.2176, 0, -0.976,
    0.2176, 0, -0.976,
    0.2176, 0, -0.976
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.448103, 0.51696,
    0.488508, 0.549708,
    0.491984, 0.578316,
    0.460446, 0.605093,
    0.429223, 0.661909,
    0.41021, 0.643742,
    0.343101, 0.624084,
    0.292077, 0.624537,
    0.281409, 0.613489,
    0.287332, 0.586794,
    0.279465, 0.548437,
    0.222658, 0.491599,
    0.24546, 0.472833,
    0.228673, 0.434725,
    0.208208, 0.437259,
    0.204529, 0.427954,
    0.297845, 0.41204,
    0.327404, 0.455906,
    0.356345, 0.44683,
    0.358829, 0.427753,
    0.37377, 0.416811,
    0.397004, 0.437969,
    0.451017, 0.410239,
    0.515684, 0.442083,
    0.528517, 0.484182,
    0.352115, 0.019502,
    0.373907, 0.019502,
    0.373907, 0.031231,
    0.352115, 0.031231,
    0.272279, 0.019502,
    0.2934, 0.019502,
    0.2934, 0.031231,
    0.272279, 0.031231,
    0.684689, 0.019502,
    0.66648, 0.019502,
    0.66648, 0.031231,
    0.684689, 0.031231,
    0.478511, 0.019502,
    0.516916, 0.019502,
    0.516916, 0.031231,
    0.478511, 0.031231,
    0.341727, 0.019502,
    0.305044, 0.019502,
    0.305044, 0.031231,
    0.341727, 0.031231,
    0.282216, 0.019502,
    0.347936, 0.019502,
    0.347936, 0.031231,
    0.282216, 0.031231,
    0.529458, 0.019502,
    0.572038, 0.019502,
    0.572038, 0.031231,
    0.529458, 0.031231,
    0.305044, 0.019502,
    0.271915, 0.019502,
    0.271915, 0.031231,
    0.305044, 0.031231,
    0.499978, 0.019502,
    0.469638, 0.019502,
    0.469638, 0.031231,
    0.499978, 0.031231,
    0.597437, 0.019502,
    0.632347, 0.019502,
    0.632347, 0.031231,
    0.597437, 0.031231,
    0.403198, 0.019502,
    0.447539, 0.019502,
    0.447539, 0.031231,
    0.403198, 0.031231,
    0.613878, 0.019502,
    0.603109, 0.019502,
    0.603109, 0.031231,
    0.613878, 0.031231,
    0.464314, 0.019502,
    0.457049, 0.019502,
    0.457049, 0.031231,
    0.464314, 0.031231,
    0.507425, 0.019502,
    0.529003, 0.019502,
    0.529003, 0.031231,
    0.507425, 0.031231,
    0.603109, 0.019502,
    0.587872, 0.019502,
    0.587872, 0.031231,
    0.603109, 0.031231,
    0.295515, 0.019502,
    0.281428, 0.019502,
    0.281428, 0.031231,
    0.295515, 0.031231,
    0.387341, 0.019502,
    0.347833, 0.019502,
    0.347833, 0.031231,
    0.387341, 0.031231,
    0.382002, 0.019502,
    0.395381, 0.019502,
    0.395381, 0.031231,
    0.382002, 0.031231,
    0.587872, 0.019502,
    0.560407, 0.019502,
    0.560407, 0.031231,
    0.587872, 0.031231,
    0.632347, 0.019502,
    0.652018, 0.019502,
    0.652018, 0.031231,
    0.632347, 0.031231,
    0.520897, 0.019502,
    0.509414, 0.019502,
    0.509414, 0.031231,
    0.520897, 0.031231,
    0.560407, 0.019502,
    0.504349, 0.019502,
    0.504349, 0.031231,
    0.560407, 0.031231,
    0.572038, 0.019502,
    0.603611, 0.019502,
    0.603611, 0.031231,
    0.572038, 0.031231,
    0.472468, 0.019502,
    0.409348, 0.019502,
    0.409348, 0.031231,
    0.472468, 0.031231,
    0.416833, 0.019502,
    0.387341, 0.019502,
    0.387341, 0.031231,
    0.416833, 0.031231
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    124, 123, 121,
    123, 122, 121,
    120, 119, 117,
    119, 118, 117,
    116, 115, 113,
    115, 114, 113,
    112, 111, 109,
    111, 110, 109,
    108, 107, 105,
    107, 106, 105,
    104, 103, 101,
    103, 102, 101,
    100, 99, 97,
    99, 98, 97,
    96, 95, 93,
    95, 94, 93,
    92, 91, 89,
    91, 90, 89,
    88, 87, 85,
    87, 86, 85,
    84, 83, 81,
    83, 82, 81,
    80, 79, 77,
    79, 78, 77,
    76, 75, 73,
    75, 74, 73,
    72, 71, 69,
    71, 70, 69,
    68, 67, 65,
    67, 66, 65,
    64, 63, 61,
    63, 62, 61,
    60, 59, 57,
    59, 58, 57,
    56, 55, 53,
    55, 54, 53,
    52, 51, 49,
    51, 50, 49,
    48, 47, 45,
    47, 46, 45,
    44, 43, 41,
    43, 42, 41,
    40, 39, 37,
    39, 38, 37,
    36, 35, 33,
    35, 34, 33,
    32, 31, 29,
    31, 30, 29,
    28, 27, 25,
    27, 26, 25,
    20, 19, 18,
    24, 23, 21,
    23, 22, 21,
    21, 20, 18,
    17, 16, 13,
    16, 15, 13,
    15, 14, 13,
    21, 18, 0,
    18, 17, 0,
    17, 13, 0,
    0, 24, 21,
    13, 12, 0,
    12, 11, 0,
    11, 10, 0,
    10, 9, 0,
    9, 8, 0,
    8, 7, 0,
    7, 6, 0,
    6, 5, 0,
    5, 4, 0,
    4, 3, 0,
    3, 2, 0,
    2, 1, 0
]);
