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
    -24.9903, 0.999796, -66.078,
    -26.1493, 0.999796, -62.2349,
    -24.3493, 0.999796, -57.0579,
    -19.5493, 0.999795, -55.9612,
    -18.7012, 0.999796, -59.7416,
    -22.0924, 0.999796, -63.1264,
    -21.4866, 0.999796, -64.37,
    -19.6055, 0.999796, -64.6209,
    -18.1525, 0.999796, -61.6639,
    -15.254, 0.999796, -59.1701,
    -15.3118, 0.999796, -57.0959,
    -16.6104, 0.999795, -55.5217,
    -14.9197, 0.999795, -54.431,
    -14.745, 0.999795, -52.8402,
    -14.0794, 0.999795, -52.8007,
    -12.8164, 0.999795, -52.8007,
    -12.541, 0.999795, -52.5976,
    -11.6802, 0.999795, -52.7306,
    -10.2238, 0.999795, -54.9942,
    -9.79843, 0.999795, -55.3079,
    -7.26194, 0.999795, -53.6706,
    -5.49005, 0.999795, -54.416,
    -4.96903, 0.999796, -58.9514,
    -8.98064, 0.999796, -61.1483,
    -13.163, 0.999796, -67.7032,
    -17.1753, 0.999796, -71.4783,
    -23.1661, 0.999796, -73.6762,
    -27.3555, 0.999796, -71.5088,
    -19.5493, -0.000205, -55.9612,
    -18.7012, -0.000204, -59.7416,
    -18.7012, 0.999796, -59.7416,
    -19.5493, 0.999795, -55.9612,
    -23.1661, -0.000204, -73.6762,
    -27.3555, -0.000204, -71.5088,
    -27.3555, 0.999796, -71.5088,
    -23.1661, 0.999796, -73.6762,
    -22.0924, -0.000204, -63.1264,
    -21.4866, -0.000204, -64.37,
    -21.4866, 0.999796, -64.37,
    -22.0924, 0.999796, -63.1264,
    -18.1525, -0.000204, -61.6639,
    -15.254, -0.000204, -59.1701,
    -15.254, 0.999796, -59.1701,
    -18.1525, 0.999796, -61.6639,
    -17.1753, -0.000204, -71.4783,
    -23.1661, -0.000204, -73.6762,
    -23.1661, 0.999796, -73.6762,
    -17.1753, 0.999796, -71.4783,
    -13.163, -0.000204, -67.7032,
    -17.1753, -0.000204, -71.4783,
    -17.1753, 0.999796, -71.4783,
    -13.163, 0.999796, -67.7032,
    -8.98064, -0.000204, -61.1483,
    -13.163, -0.000204, -67.7032,
    -13.163, 0.999796, -67.7032,
    -8.98064, 0.999796, -61.1483,
    -11.6802, -0.000205, -52.7306,
    -10.2238, -0.000205, -54.9942,
    -10.2238, 0.999795, -54.9942,
    -11.6802, 0.999795, -52.7306,
    -19.6055, -0.000204, -64.6209,
    -18.1525, -0.000204, -61.6639,
    -18.1525, 0.999796, -61.6639,
    -19.6055, 0.999796, -64.6209,
    -7.26194, -0.000205, -53.6706,
    -5.49005, -0.000205, -54.416,
    -5.49005, 0.999795, -54.416,
    -7.26194, 0.999795, -53.6706,
    -4.96903, -0.000204, -58.9514,
    -8.98064, -0.000204, -61.1483,
    -8.98064, 0.999796, -61.1483,
    -4.96903, 0.999796, -58.9514,
    -5.49005, -0.000205, -54.416,
    -4.96903, -0.000204, -58.9514,
    -4.96903, 0.999796, -58.9514,
    -5.49005, 0.999795, -54.416,
    -10.2238, -0.000205, -54.9942,
    -9.79843, -0.000205, -55.3079,
    -9.79843, 0.999795, -55.3079,
    -10.2238, 0.999795, -54.9942,
    -21.4866, -0.000204, -64.37,
    -19.6055, -0.000204, -64.6209,
    -19.6055, 0.999796, -64.6209,
    -21.4866, 0.999796, -64.37,
    -9.79843, -0.000205, -55.3079,
    -7.26194, -0.000205, -53.6706,
    -7.26194, 0.999795, -53.6706,
    -9.79843, 0.999795, -55.3079,
    -14.9197, -0.000205, -54.431,
    -14.745, -0.000205, -52.8402,
    -14.745, 0.999795, -52.8402,
    -14.9197, 0.999795, -54.431,
    -12.541, -0.000205, -52.5976,
    -11.6802, -0.000205, -52.7306,
    -11.6802, 0.999795, -52.7306,
    -12.541, 0.999795, -52.5976,
    -14.0794, -0.000205, -52.8007,
    -12.8164, -0.000205, -52.8007,
    -12.8164, 0.999795, -52.8007,
    -14.0794, 0.999795, -52.8007,
    -15.254, -0.000204, -59.1701,
    -15.3118, -0.000204, -57.0959,
    -15.3118, 0.999796, -57.0959,
    -15.254, 0.999796, -59.1701,
    -14.745, -0.000205, -52.8402,
    -14.0794, -0.000205, -52.8007,
    -14.0794, 0.999795, -52.8007,
    -14.745, 0.999795, -52.8402,
    -16.6104, -0.000205, -55.5217,
    -14.9197, -0.000205, -54.431,
    -14.9197, 0.999795, -54.431,
    -16.6104, 0.999795, -55.5217,
    -12.8164, -0.000205, -52.8007,
    -12.541, -0.000205, -52.5976,
    -12.541, 0.999795, -52.5976,
    -12.8164, 0.999795, -52.8007,
    -26.1493, -0.000204, -62.2349,
    -24.3493, -0.000204, -57.0579,
    -24.3493, 0.999796, -57.0579,
    -26.1493, 0.999796, -62.2349,
    -27.3555, -0.000204, -71.5088,
    -24.9903, -0.000204, -66.078,
    -24.9903, 0.999796, -66.078,
    -27.3555, 0.999796, -71.5088,
    -15.3118, -0.000204, -57.0959,
    -16.6104, -0.000205, -55.5217,
    -16.6104, 0.999795, -55.5217,
    -15.3118, 0.999796, -57.0959,
    -24.9903, -0.000204, -66.078,
    -26.1493, -0.000204, -62.2349,
    -26.1493, 0.999796, -62.2349,
    -24.9903, 0.999796, -66.078,
    -18.7012, -0.000204, -59.7416,
    -22.0924, -0.000204, -63.1264,
    -22.0924, 0.999796, -63.1264,
    -18.7012, 0.999796, -59.7416,
    -24.3493, -0.000204, -57.0579,
    -19.5493, -0.000205, -55.9612,
    -19.5493, 0.999795, -55.9612,
    -24.3493, 0.999796, -57.0579
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
    0.9758, 0, 0.2189,
    0.9758, 0, 0.2189,
    0.9758, 0, 0.2189,
    0.9758, 0, 0.2189,
    -0.4595, 0, -0.8882,
    -0.4595, 0, -0.8882,
    -0.4595, 0, -0.8882,
    -0.4595, 0, -0.8882,
    0.899, 0, 0.4379,
    0.899, 0, 0.4379,
    0.899, 0, 0.4379,
    0.899, 0, 0.4379,
    -0.6522, 0, 0.758,
    -0.6522, 0, 0.758,
    -0.6522, 0, 0.758,
    -0.6522, 0, 0.758,
    0.3444, 0, -0.9388,
    0.3444, 0, -0.9388,
    0.3444, 0, -0.9388,
    0.3444, 0, -0.9388,
    0.6852, 0, -0.7283,
    0.6852, 0, -0.7283,
    0.6852, 0, -0.7283,
    0.6852, 0, -0.7283,
    0.843, 0, -0.5379,
    0.843, 0, -0.5379,
    0.843, 0, -0.5379,
    0.843, 0, -0.5379,
    0.841, 0, 0.5411,
    0.841, 0, 0.5411,
    0.841, 0, 0.5411,
    0.841, 0, 0.5411,
    -0.8975, 0, 0.441,
    -0.8975, 0, 0.441,
    -0.8975, 0, 0.441,
    -0.8975, 0, 0.441,
    0.3878, 0, 0.9218,
    0.3878, 0, 0.9218,
    0.3878, 0, 0.9218,
    0.3878, 0, 0.9218,
    0.4803, 0, -0.8771,
    0.4803, 0, -0.8771,
    0.4803, 0, -0.8771,
    0.4803, 0, -0.8771,
    0.9935, 0, 0.1141,
    0.9935, 0, 0.1141,
    0.9935, 0, 0.1141,
    0.9935, 0, 0.1141,
    0.5935, 0, 0.8049,
    0.5935, 0, 0.8049,
    0.5935, 0, 0.8049,
    0.5935, 0, 0.8049,
    0.1322, 0, 0.9912,
    0.1322, 0, 0.9912,
    0.1322, 0, 0.9912,
    0.1322, 0, 0.9912,
    -0.5423, 0, 0.8402,
    -0.5423, 0, 0.8402,
    -0.5423, 0, 0.8402,
    -0.5423, 0, 0.8402,
    -0.994, 0, 0.1091,
    -0.994, 0, 0.1091,
    -0.994, 0, 0.1091,
    -0.994, 0, 0.1091,
    0.1528, 0, 0.9883,
    0.1528, 0, 0.9883,
    0.1528, 0, 0.9883,
    0.1528, 0, 0.9883,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    -0.9996, 0, -0.0279,
    -0.9996, 0, -0.0279,
    -0.9996, 0, -0.0279,
    -0.9996, 0, -0.0279,
    -0.0593, 0, 0.9982,
    -0.0593, 0, 0.9982,
    -0.0593, 0, 0.9982,
    -0.0593, 0, 0.9982,
    -0.5421, 0, 0.8403,
    -0.5421, 0, 0.8403,
    -0.5421, 0, 0.8403,
    -0.5421, 0, 0.8403,
    -0.5935, 0, 0.8048,
    -0.5935, 0, 0.8048,
    -0.5935, 0, 0.8048,
    -0.5935, 0, 0.8048,
    -0.9445, 0, 0.3284,
    -0.9445, 0, 0.3284,
    -0.9445, 0, 0.3284,
    -0.9445, 0, 0.3284,
    -0.9168, 0, 0.3993,
    -0.9168, 0, 0.3993,
    -0.9168, 0, 0.3993,
    -0.9168, 0, 0.3993,
    -0.7714, 0, -0.6363,
    -0.7714, 0, -0.6363,
    -0.7714, 0, -0.6363,
    -0.7714, 0, -0.6363,
    -0.9574, 0, -0.2887,
    -0.9574, 0, -0.2887,
    -0.9574, 0, -0.2887,
    -0.9574, 0, -0.2887,
    0.7064, 0, -0.7078,
    0.7064, 0, -0.7078,
    0.7064, 0, -0.7078,
    0.7064, 0, -0.7078,
    -0.2227, 0, 0.9749,
    -0.2227, 0, 0.9749,
    -0.2227, 0, 0.9749,
    -0.2227, 0, 0.9749
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.54194, 0.287483,
    0.520987, 0.288529,
    0.496989, 0.272887,
    0.497463, 0.247158,
    0.517706, 0.24761,
    0.530611, 0.26907,
    0.537682, 0.267561,
    0.541321, 0.258334,
    0.528148, 0.247245,
    0.519143, 0.229405,
    0.508548, 0.227089,
    0.498929, 0.231697,
    0.495523, 0.221748,
    0.487673, 0.218862,
    0.488309, 0.215435,
    0.489898, 0.209028,
    0.489214, 0.207376,
    0.490971, 0.203177,
    0.504286, 0.198635,
    0.506412, 0.196872,
    0.501296, 0.181946,
    0.507306, 0.173895,
    0.530968, 0.176956,
    0.537068, 0.200069,
    0.565059, 0.229529,
    0.579163, 0.254631,
    0.582778, 0.287785,
    0.566514, 0.306311,
    0.497463, 0.247158,
    0.517706, 0.24761,
    0.517706, 0.24761,
    0.497463, 0.247158,
    0.582778, 0.287785,
    0.566514, 0.306311,
    0.566514, 0.306311,
    0.582778, 0.287785,
    0.530611, 0.26907,
    0.537682, 0.267561,
    0.537682, 0.267561,
    0.530611, 0.26907,
    0.528148, 0.247245,
    0.519143, 0.229405,
    0.519143, 0.229405,
    0.528148, 0.247245,
    0.579163, 0.254631,
    0.582778, 0.287785,
    0.582778, 0.287785,
    0.579163, 0.254631,
    0.565059, 0.229529,
    0.579163, 0.254631,
    0.579163, 0.254631,
    0.565059, 0.229529,
    0.537068, 0.200069,
    0.565059, 0.229529,
    0.565059, 0.229529,
    0.537068, 0.200069,
    0.490971, 0.203177,
    0.504286, 0.198635,
    0.504286, 0.198635,
    0.490971, 0.203177,
    0.541321, 0.258334,
    0.528148, 0.247245,
    0.528148, 0.247245,
    0.541321, 0.258334,
    0.501296, 0.181946,
    0.507306, 0.173895,
    0.507306, 0.173895,
    0.501296, 0.181946,
    0.530968, 0.176956,
    0.537068, 0.200069,
    0.537068, 0.200069,
    0.530968, 0.176956,
    0.507306, 0.173895,
    0.530968, 0.176956,
    0.530968, 0.176956,
    0.507306, 0.173895,
    0.504286, 0.198635,
    0.506412, 0.196872,
    0.506412, 0.196872,
    0.504286, 0.198635,
    0.537682, 0.267561,
    0.541321, 0.258334,
    0.541321, 0.258334,
    0.537682, 0.267561,
    0.506412, 0.196872,
    0.501296, 0.181946,
    0.501296, 0.181946,
    0.506412, 0.196872,
    0.495523, 0.221748,
    0.487673, 0.218862,
    0.487673, 0.218862,
    0.495523, 0.221748,
    0.489214, 0.207376,
    0.490971, 0.203177,
    0.490971, 0.203177,
    0.489214, 0.207376,
    0.488309, 0.215435,
    0.489898, 0.209028,
    0.489898, 0.209028,
    0.488309, 0.215435,
    0.519143, 0.229405,
    0.508548, 0.227089,
    0.508548, 0.227089,
    0.519143, 0.229405,
    0.487673, 0.218862,
    0.488309, 0.215435,
    0.488309, 0.215435,
    0.487673, 0.218862,
    0.498929, 0.231697,
    0.495523, 0.221748,
    0.495523, 0.221748,
    0.498929, 0.231697,
    0.489898, 0.209028,
    0.489214, 0.207376,
    0.489214, 0.207376,
    0.489898, 0.209028,
    0.520987, 0.288529,
    0.496989, 0.272887,
    0.496989, 0.272887,
    0.520987, 0.288529,
    0.566514, 0.306311,
    0.54194, 0.287483,
    0.54194, 0.287483,
    0.566514, 0.306311,
    0.508548, 0.227089,
    0.498929, 0.231697,
    0.498929, 0.231697,
    0.508548, 0.227089,
    0.54194, 0.287483,
    0.520987, 0.288529,
    0.520987, 0.288529,
    0.54194, 0.287483,
    0.517706, 0.24761,
    0.530611, 0.26907,
    0.530611, 0.26907,
    0.517706, 0.24761,
    0.496989, 0.272887,
    0.497463, 0.247158,
    0.497463, 0.247158,
    0.496989, 0.272887
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    139, 138, 136,
    138, 137, 136,
    135, 134, 132,
    134, 133, 132,
    131, 130, 128,
    130, 129, 128,
    127, 126, 124,
    126, 125, 124,
    123, 122, 120,
    122, 121, 120,
    119, 118, 116,
    118, 117, 116,
    115, 114, 112,
    114, 113, 112,
    111, 110, 108,
    110, 109, 108,
    107, 106, 104,
    106, 105, 104,
    103, 102, 100,
    102, 101, 100,
    99, 98, 96,
    98, 97, 96,
    95, 94, 92,
    94, 93, 92,
    91, 90, 88,
    90, 89, 88,
    87, 86, 84,
    86, 85, 84,
    83, 82, 80,
    82, 81, 80,
    79, 78, 76,
    78, 77, 76,
    75, 74, 72,
    74, 73, 72,
    71, 70, 68,
    70, 69, 68,
    67, 66, 64,
    66, 65, 64,
    63, 62, 60,
    62, 61, 60,
    59, 58, 56,
    58, 57, 56,
    55, 54, 52,
    54, 53, 52,
    51, 50, 48,
    50, 49, 48,
    47, 46, 44,
    46, 45, 44,
    43, 42, 40,
    42, 41, 40,
    39, 38, 36,
    38, 37, 36,
    35, 34, 32,
    34, 33, 32,
    31, 30, 28,
    30, 29, 28,
    25, 24, 19,
    24, 23, 19,
    23, 22, 19,
    22, 21, 19,
    21, 20, 19,
    19, 18, 12,
    18, 17, 12,
    17, 16, 12,
    16, 15, 12,
    15, 14, 12,
    14, 13, 12,
    12, 11, 10,
    19, 12, 9,
    12, 10, 9,
    26, 19, 9,
    26, 25, 19,
    26, 9, 7,
    9, 8, 7,
    5, 4, 3,
    7, 0, 26,
    7, 6, 0,
    6, 5, 0,
    5, 3, 0,
    0, 27, 26,
    3, 2, 0,
    2, 1, 0
]);
