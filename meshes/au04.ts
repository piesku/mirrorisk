import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_au04(gl: WebGLRenderingContext): Mesh {
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
    -98.3344, 0.999795, 16.9619,
    -100.814, 0.999795, 16.2908,
    -102.789, 0.999795, 14.014,
    -103.902, 0.999795, 13.4694,
    -104.643, 0.999795, 12.428,
    -105.83, 0.999795, 11.3137,
    -107.366, 0.999795, 11.9076,
    -105.718, 0.999795, 21.9529,
    -119.756, 0.999795, 21.9214,
    -116.981, 0.999795, 31.6403,
    -116.689, 0.999795, 30.2171,
    -116.688, 0.999795, 29.7984,
    -115.937, 0.999795, 29.6063,
    -115.208, 0.999795, 29.5014,
    -115.505, 0.999795, 27.8387,
    -113.707, 0.999795, 29.1884,
    -112.4, 0.999795, 27.0912,
    -109.686, 0.999795, 26.8282,
    -104.891, 0.999795, 27.3008,
    -103.351, 0.999795, 28.5333,
    -100.487, 0.999795, 28.5968,
    -98.3174, 0.999795, 29.6186,
    -96.7023, 0.999795, 28.5703,
    -97.1819, 0.999795, 26.9424,
    -95.3772, 0.999795, 22.3262,
    -95.1479, 0.999795, 20.1834,
    -95.7472, 0.999795, 18.4486,
    -96.7023, -0.000205, 28.5703,
    -97.1819, -0.000205, 26.9424,
    -97.1819, 0.999795, 26.9424,
    -96.7023, 0.999795, 28.5703,
    -102.789, -0.000205, 14.014,
    -103.902, -0.000205, 13.4694,
    -103.902, 0.999795, 13.4694,
    -102.789, 0.999795, 14.014,
    -98.3344, -0.000205, 16.9619,
    -100.814, -0.000205, 16.2908,
    -100.814, 0.999795, 16.2908,
    -98.3344, 0.999795, 16.9619,
    -98.3174, -0.000205, 29.6186,
    -96.7023, -0.000205, 28.5703,
    -96.7023, 0.999795, 28.5703,
    -98.3174, 0.999795, 29.6186,
    -116.981, -0.000205, 31.6403,
    -116.689, -0.000205, 30.2171,
    -116.689, 0.999795, 30.2171,
    -116.981, 0.999795, 31.6403,
    -107.366, -0.000205, 11.9076,
    -105.718, -0.000205, 21.9529,
    -105.718, 0.999795, 21.9529,
    -107.366, 0.999795, 11.9076,
    -116.688, -0.000205, 29.7984,
    -115.937, -0.000205, 29.6063,
    -115.937, 0.999795, 29.6063,
    -116.688, 0.999795, 29.7984,
    -104.643, -0.000205, 12.428,
    -105.83, -0.000205, 11.3137,
    -105.83, 0.999795, 11.3137,
    -104.643, 0.999795, 12.428,
    -116.689, -0.000205, 30.2171,
    -116.688, -0.000205, 29.7984,
    -116.688, 0.999795, 29.7984,
    -116.689, 0.999795, 30.2171,
    -105.718, -0.000205, 21.9529,
    -119.756, -0.000205, 21.9214,
    -119.756, 0.999795, 21.9214,
    -105.718, 0.999795, 21.9529,
    -103.351, -0.000205, 28.5333,
    -100.487, -0.000205, 28.5968,
    -100.487, 0.999795, 28.5968,
    -103.351, 0.999795, 28.5333,
    -103.902, -0.000205, 13.4694,
    -104.643, -0.000205, 12.428,
    -104.643, 0.999795, 12.428,
    -103.902, 0.999795, 13.4694,
    -115.937, -0.000205, 29.6063,
    -115.208, -0.000205, 29.5014,
    -115.208, 0.999795, 29.5014,
    -115.937, 0.999795, 29.6063,
    -119.756, -0.000205, 21.9214,
    -116.981, -0.000205, 31.6403,
    -116.981, 0.999795, 31.6403,
    -119.756, 0.999795, 21.9214,
    -115.505, -0.000205, 27.8387,
    -113.707, -0.000205, 29.1884,
    -113.707, 0.999795, 29.1884,
    -115.505, 0.999795, 27.8387,
    -97.1819, -0.000205, 26.9424,
    -95.3772, -0.000205, 22.3262,
    -95.3772, 0.999795, 22.3262,
    -97.1819, 0.999795, 26.9424,
    -112.4, -0.000205, 27.0912,
    -109.686, -0.000205, 26.8282,
    -109.686, 0.999795, 26.8282,
    -112.4, 0.999795, 27.0912,
    -115.208, -0.000205, 29.5014,
    -115.505, -0.000205, 27.8387,
    -115.505, 0.999795, 27.8387,
    -115.208, 0.999795, 29.5014,
    -95.3772, -0.000205, 22.3262,
    -95.1479, -0.000205, 20.1834,
    -95.1479, 0.999795, 20.1834,
    -95.3772, 0.999795, 22.3262,
    -109.686, -0.000205, 26.8282,
    -104.891, -0.000205, 27.3008,
    -104.891, 0.999795, 27.3008,
    -109.686, 0.999795, 26.8282,
    -100.814, -0.000205, 16.2908,
    -102.789, -0.000205, 14.014,
    -102.789, 0.999795, 14.014,
    -100.814, 0.999795, 16.2908,
    -95.1479, -0.000205, 20.1834,
    -95.7472, -0.000205, 18.4486,
    -95.7472, 0.999795, 18.4486,
    -95.1479, 0.999795, 20.1834,
    -105.83, -0.000205, 11.3137,
    -107.366, -0.000205, 11.9076,
    -107.366, 0.999795, 11.9076,
    -105.83, 0.999795, 11.3137,
    -113.707, -0.000205, 29.1884,
    -112.4, -0.000205, 27.0912,
    -112.4, 0.999795, 27.0912,
    -113.707, 0.999795, 29.1884,
    -95.7472, -0.000205, 18.4486,
    -98.3344, -0.000205, 16.9619,
    -98.3344, 0.999795, 16.9619,
    -95.7472, 0.999795, 18.4486,
    -104.891, -0.000205, 27.3008,
    -103.351, -0.000205, 28.5333,
    -103.351, 0.999795, 28.5333,
    -104.891, 0.999795, 27.3008,
    -100.487, -0.000205, 28.5968,
    -98.3174, -0.000205, 29.6186,
    -98.3174, 0.999795, 29.6186,
    -100.487, 0.999795, 28.5968
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
    0.9593, 0, -0.2826,
    0.9593, 0, -0.2826,
    0.9593, 0, -0.2826,
    0.9593, 0, -0.2826,
    0.4395, 0, -0.8983,
    0.4395, 0, -0.8983,
    0.4395, 0, -0.8983,
    0.4395, 0, -0.8983,
    0.2613, 0, -0.9653,
    0.2613, 0, -0.9653,
    0.2613, 0, -0.9653,
    0.2613, 0, -0.9653,
    0.5445, 0, 0.8388,
    0.5445, 0, 0.8388,
    0.5445, 0, 0.8388,
    0.5445, 0, 0.8388,
    0.9796, 0, 0.2011,
    0.9796, 0, 0.2011,
    0.9796, 0, 0.2011,
    0.9796, 0, 0.2011,
    -0.9868, 0, 0.1619,
    -0.9868, 0, 0.1619,
    -0.9868, 0, 0.1619,
    -0.9868, 0, 0.1619,
    0.2476, 0, 0.9689,
    0.2476, 0, 0.9689,
    0.2476, 0, 0.9689,
    0.2476, 0, 0.9689,
    0.6846, 0, -0.7289,
    0.6846, 0, -0.7289,
    0.6846, 0, -0.7289,
    0.6846, 0, -0.7289,
    1, 0, 0.0003,
    1, 0, 0.0003,
    1, 0, 0.0003,
    1, 0, 0.0003,
    0.0022, 0, -1,
    0.0022, 0, -1,
    0.0022, 0, -1,
    0.0022, 0, -1,
    -0.0221, 0, 0.9998,
    -0.0221, 0, 0.9998,
    -0.0221, 0, 0.9998,
    -0.0221, 0, 0.9998,
    0.8147, 0, -0.5799,
    0.8147, 0, -0.5799,
    0.8147, 0, -0.5799,
    0.8147, 0, -0.5799,
    0.1424, 0, 0.9898,
    0.1424, 0, 0.9898,
    0.1424, 0, 0.9898,
    0.1424, 0, 0.9898,
    -0.9616, 0, 0.2746,
    -0.9616, 0, 0.2746,
    -0.9616, 0, 0.2746,
    -0.9616, 0, 0.2746,
    -0.6003, 0, 0.7998,
    -0.6003, 0, 0.7998,
    -0.6003, 0, 0.7998,
    -0.6003, 0, 0.7998,
    0.9314, 0, 0.3641,
    0.9314, 0, 0.3641,
    0.9314, 0, 0.3641,
    0.9314, 0, 0.3641,
    0.0965, 0, 0.9953,
    0.0965, 0, 0.9953,
    0.0965, 0, 0.9953,
    0.0965, 0, 0.9953,
    0.9844, 0, -0.1758,
    0.9844, 0, -0.1758,
    0.9844, 0, -0.1758,
    0.9844, 0, -0.1758,
    0.9943, 0, 0.1064,
    0.9943, 0, 0.1064,
    0.9943, 0, 0.1064,
    0.9943, 0, 0.1064,
    -0.0981, 0, 0.9952,
    -0.0981, 0, 0.9952,
    -0.0981, 0, 0.9952,
    -0.0981, 0, 0.9952,
    0.7554, 0, -0.6553,
    0.7554, 0, -0.6553,
    0.7554, 0, -0.6553,
    0.7554, 0, -0.6553,
    0.9452, 0, -0.3265,
    0.9452, 0, -0.3265,
    0.9452, 0, -0.3265,
    0.9452, 0, -0.3265,
    -0.3606, 0, -0.9327,
    -0.3606, 0, -0.9327,
    -0.3606, 0, -0.9327,
    -0.3606, 0, -0.9327,
    0.8487, 0, 0.5289,
    0.8487, 0, 0.5289,
    0.8487, 0, 0.5289,
    0.8487, 0, 0.5289,
    0.4982, 0, -0.867,
    0.4982, 0, -0.867,
    0.4982, 0, -0.867,
    0.4982, 0, -0.867,
    -0.6248, 0, 0.7807,
    -0.6248, 0, 0.7807,
    -0.6248, 0, 0.7807,
    -0.6248, 0, 0.7807,
    -0.4261, 0, 0.9047,
    -0.4261, 0, 0.9047,
    -0.4261, 0, 0.9047,
    -0.4261, 0, 0.9047
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.588778, 0.426385,
    0.551848, 0.447982,
    0.530025, 0.493195,
    0.514507, 0.506803,
    0.507131, 0.526775,
    0.492918, 0.549861,
    0.465632, 0.547011,
    0.448325, 0.378345,
    0.22279, 0.44006,
    0.225031, 0.271723,
    0.235934, 0.293328,
    0.237762, 0.300059,
    0.250683, 0.299869,
    0.262859, 0.298376,
    0.265334, 0.326401,
    0.288358, 0.296863,
    0.31851, 0.324877,
    0.363275, 0.317274,
    0.438301, 0.28877,
    0.457684, 0.262242,
    0.503453, 0.248733,
    0.533868, 0.222849,
    0.564401, 0.232659,
    0.56379, 0.260919,
    0.612927, 0.327257,
    0.625957, 0.360704,
    0.623887, 0.391205,
    0.272018, 0.028582,
    0.294488, 0.028582,
    0.294488, 0.042385,
    0.272018, 0.042385,
    0.66611, 0.054706,
    0.650747, 0.054706,
    0.650747, 0.068509,
    0.66611, 0.068509,
    0.727594, 0.054706,
    0.693372, 0.054706,
    0.693372, 0.068509,
    0.727594, 0.068509,
    0.727829, 0.054706,
    0.750121, 0.054706,
    0.750121, 0.068509,
    0.727829, 0.068509,
    0.229643, 0.028582,
    0.249288, 0.028582,
    0.249288, 0.042385,
    0.229643, 0.042385,
    0.502011, 0.028582,
    0.363357, 0.028582,
    0.363357, 0.042385,
    0.502011, 0.042385,
    0.474255, 0.054706,
    0.484631, 0.054706,
    0.484631, 0.068509,
    0.474255, 0.068509,
    0.640515, 0.054706,
    0.624139, 0.054706,
    0.624139, 0.068509,
    0.640515, 0.068509,
    0.249288, 0.028582,
    0.255068, 0.028582,
    0.255068, 0.042385,
    0.249288, 0.042385,
    0.625681, 0.054706,
    0.43191, 0.054706,
    0.43191, 0.068509,
    0.625681, 0.068509,
    0.658352, 0.054706,
    0.697888, 0.054706,
    0.697888, 0.068509,
    0.658352, 0.068509,
    0.480454, 0.028582,
    0.494828, 0.028582,
    0.494828, 0.042385,
    0.480454, 0.042385,
    0.484631, 0.054706,
    0.494692, 0.054706,
    0.494692, 0.068509,
    0.484631, 0.068509,
    0.363792, 0.028582,
    0.229643, 0.028582,
    0.229643, 0.042385,
    0.363792, 0.042385,
    0.490593, 0.054706,
    0.515415, 0.054706,
    0.515415, 0.068509,
    0.490593, 0.068509,
    0.294488, 0.028582,
    0.358204, 0.028582,
    0.358204, 0.042385,
    0.294488, 0.042385,
    0.533453, 0.054706,
    0.570906, 0.054706,
    0.570906, 0.068509,
    0.533453, 0.068509,
    0.259166, 0.028582,
    0.282117, 0.028582,
    0.282117, 0.042385,
    0.259166, 0.042385,
    0.358204, 0.028582,
    0.387782, 0.028582,
    0.387782, 0.042385,
    0.358204, 0.042385,
    0.570906, 0.054706,
    0.637094, 0.054706,
    0.637094, 0.068509,
    0.570906, 0.068509,
    0.44151, 0.028582,
    0.472938, 0.028582,
    0.472938, 0.042385,
    0.44151, 0.042385,
    0.387782, 0.028582,
    0.411727, 0.028582,
    0.411727, 0.042385,
    0.387782, 0.042385,
    0.624139, 0.054706,
    0.602934, 0.054706,
    0.602934, 0.068509,
    0.624139, 0.068509,
    0.263487, 0.028582,
    0.292433, 0.028582,
    0.292433, 0.042385,
    0.263487, 0.042385,
    0.763305, 0.054706,
    0.727594, 0.054706,
    0.727594, 0.068509,
    0.763305, 0.068509,
    0.637094, 0.054706,
    0.658352, 0.054706,
    0.658352, 0.068509,
    0.637094, 0.068509,
    0.697888, 0.054706,
    0.727829, 0.054706,
    0.727829, 0.068509,
    0.697888, 0.068509
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    134, 133, 131,
    133, 132, 131,
    130, 129, 127,
    129, 128, 127,
    126, 125, 123,
    125, 124, 123,
    122, 121, 119,
    121, 120, 119,
    118, 117, 115,
    117, 116, 115,
    114, 113, 111,
    113, 112, 111,
    110, 109, 107,
    109, 108, 107,
    106, 105, 103,
    105, 104, 103,
    102, 101, 99,
    101, 100, 99,
    98, 97, 95,
    97, 96, 95,
    94, 93, 91,
    93, 92, 91,
    90, 89, 87,
    89, 88, 87,
    86, 85, 83,
    85, 84, 83,
    82, 81, 79,
    81, 80, 79,
    78, 77, 75,
    77, 76, 75,
    74, 73, 71,
    73, 72, 71,
    70, 69, 67,
    69, 68, 67,
    66, 65, 63,
    65, 64, 63,
    62, 61, 59,
    61, 60, 59,
    58, 57, 55,
    57, 56, 55,
    54, 53, 51,
    53, 52, 51,
    50, 49, 47,
    49, 48, 47,
    46, 45, 43,
    45, 44, 43,
    42, 41, 39,
    41, 40, 39,
    38, 37, 35,
    37, 36, 35,
    34, 33, 31,
    33, 32, 31,
    30, 29, 27,
    29, 28, 27,
    13, 12, 8,
    12, 11, 8,
    11, 10, 8,
    10, 9, 8,
    14, 13, 8,
    15, 14, 8,
    16, 15, 8,
    17, 16, 8,
    18, 17, 8,
    20, 18, 8,
    25, 24, 20,
    24, 23, 20,
    23, 22, 20,
    22, 21, 20,
    20, 19, 18,
    8, 7, 20,
    7, 3, 20,
    7, 6, 3,
    6, 5, 3,
    5, 4, 3,
    3, 1, 20,
    3, 2, 1,
    1, 26, 20,
    26, 25, 20,
    1, 0, 26
]);
