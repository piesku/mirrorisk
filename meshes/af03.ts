import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_af03(gl: WebGLRenderingContext): Mesh {
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
    -8.5988, 0.999795, -26.3395,
    -10.4111, 0.999795, -28.4489,
    -13.4409, 0.999795, -27.7708,
    -13.8174, 0.999795, -26.9525,
    -16.7965, 0.999795, -26.4645,
    -17.7342, 0.999795, -26.9176,
    -17.3959, 0.999795, -27.5354,
    -18.946, 0.999795, -28.3062,
    -25.0616, 0.999795, -26.9176,
    -26.7315, 0.999795, -27.0705,
    -29.3064, 0.999795, -26.9176,
    -29.9309, 0.999795, -25.8247,
    -29.301, 0.999795, -24.1544,
    -27.9435, 0.999795, -26.2132,
    -27.7449, 0.999795, -25.8391,
    -31.3663, 0.999795, -18.8382,
    -21.6714, 0.999795, -18.9613,
    -21.6227, 0.999795, -17.1131,
    -20.7867, 0.999795, -17.1293,
    -20.7848, 0.999795, -16.687,
    -14.2099, 0.999795, -20.1996,
    -10.7424, 0.999795, -20.2737,
    -29.3064, -0.000205, -26.9176,
    -29.9309, -0.000205, -25.8247,
    -29.9309, 0.999795, -25.8247,
    -29.3064, 0.999795, -26.9176,
    -29.9309, -0.000205, -25.8247,
    -29.301, -0.000205, -24.1544,
    -29.301, 0.999795, -24.1544,
    -29.9309, 0.999795, -25.8247,
    -13.4409, -0.000205, -27.7708,
    -13.8174, -0.000205, -26.9525,
    -13.8174, 0.999795, -26.9525,
    -13.4409, 0.999795, -27.7708,
    -26.7315, -0.000205, -27.0705,
    -29.3064, -0.000205, -26.9176,
    -29.3064, 0.999795, -26.9176,
    -26.7315, 0.999795, -27.0705,
    -10.7424, -0.000205, -20.2737,
    -8.5988, -0.000205, -26.3395,
    -8.5988, 0.999795, -26.3395,
    -10.7424, 0.999795, -20.2737,
    -21.6227, -0.000205, -17.1131,
    -20.7867, -0.000205, -17.1293,
    -20.7867, 0.999795, -17.1293,
    -21.6227, 0.999795, -17.1131,
    -25.0616, -0.000205, -26.9176,
    -26.7315, -0.000205, -27.0705,
    -26.7315, 0.999795, -27.0705,
    -25.0616, 0.999795, -26.9176,
    -14.2099, -0.000205, -20.1996,
    -10.7424, -0.000205, -20.2737,
    -10.7424, 0.999795, -20.2737,
    -14.2099, 0.999795, -20.1996,
    -21.6714, -0.000205, -18.9613,
    -21.6227, -0.000205, -17.1131,
    -21.6227, 0.999795, -17.1131,
    -21.6714, 0.999795, -18.9613,
    -18.946, -0.000205, -28.3062,
    -25.0616, -0.000205, -26.9176,
    -25.0616, 0.999795, -26.9176,
    -18.946, 0.999795, -28.3062,
    -20.7848, -0.000205, -16.687,
    -14.2099, -0.000205, -20.1996,
    -14.2099, 0.999795, -20.1996,
    -20.7848, 0.999795, -16.687,
    -31.3663, -0.000205, -18.8382,
    -21.6714, -0.000205, -18.9613,
    -21.6714, 0.999795, -18.9613,
    -31.3663, 0.999795, -18.8382,
    -17.3959, -0.000205, -27.5354,
    -18.946, -0.000205, -28.3062,
    -18.946, 0.999795, -28.3062,
    -17.3959, 0.999795, -27.5354,
    -8.5988, -0.000205, -26.3395,
    -10.4111, -0.000205, -28.4489,
    -10.4111, 0.999795, -28.4489,
    -8.5988, 0.999795, -26.3395,
    -27.7449, -0.000205, -25.8391,
    -31.3663, -0.000205, -18.8382,
    -31.3663, 0.999795, -18.8382,
    -27.7449, 0.999795, -25.8391,
    -17.7342, -0.000205, -26.9176,
    -17.3959, -0.000205, -27.5354,
    -17.3959, 0.999795, -27.5354,
    -17.7342, 0.999795, -26.9176,
    -10.4111, -0.000205, -28.4489,
    -13.4409, -0.000205, -27.7708,
    -13.4409, 0.999795, -27.7708,
    -10.4111, 0.999795, -28.4489,
    -27.9435, -0.000205, -26.2132,
    -27.7449, -0.000205, -25.8391,
    -27.7449, 0.999795, -25.8391,
    -27.9435, 0.999795, -26.2132,
    -16.7965, -0.000205, -26.4645,
    -17.7342, -0.000205, -26.9176,
    -17.7342, 0.999795, -26.9176,
    -16.7965, 0.999795, -26.4645,
    -20.7867, -0.000205, -17.1293,
    -20.7848, -0.000205, -16.687,
    -20.7848, 0.999795, -16.687,
    -20.7867, 0.999795, -17.1293,
    -29.301, -0.000205, -24.1544,
    -27.9435, -0.000205, -26.2132,
    -27.9435, 0.999795, -26.2132,
    -29.301, 0.999795, -24.1544,
    -13.8174, -0.000205, -26.9525,
    -16.7965, -0.000205, -26.4645,
    -16.7965, 0.999795, -26.4645,
    -13.8174, 0.999795, -26.9525
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
    -0.8682, 0, -0.4961,
    -0.8682, 0, -0.4961,
    -0.8682, 0, -0.4961,
    -0.8682, 0, -0.4961,
    -0.9357, 0, 0.3529,
    -0.9357, 0, 0.3529,
    -0.9357, 0, 0.3529,
    -0.9357, 0, 0.3529,
    -0.9085, 0, -0.4179,
    -0.9085, 0, -0.4179,
    -0.9085, 0, -0.4179,
    -0.9085, 0, -0.4179,
    -0.0593, 0, -0.9982,
    -0.0593, 0, -0.9982,
    -0.0593, 0, -0.9982,
    -0.0593, 0, -0.9982,
    0.9429, 0, 0.3332,
    0.9429, 0, 0.3332,
    0.9429, 0, 0.3332,
    0.9429, 0, 0.3332,
    0.0194, 0, 0.9998,
    0.0194, 0, 0.9998,
    0.0194, 0, 0.9998,
    0.0194, 0, 0.9998,
    0.0912, 0, -0.9958,
    0.0912, 0, -0.9958,
    0.0912, 0, -0.9958,
    0.0912, 0, -0.9958,
    0.0214, 0, 0.9998,
    0.0214, 0, 0.9998,
    0.0214, 0, 0.9998,
    0.0214, 0, 0.9998,
    -0.9997, 0, 0.0263,
    -0.9997, 0, 0.0263,
    -0.9997, 0, 0.0263,
    -0.9997, 0, 0.0263,
    -0.2214, 0, -0.9752,
    -0.2214, 0, -0.9752,
    -0.2214, 0, -0.9752,
    -0.2214, 0, -0.9752,
    0.4712, 0, 0.882,
    0.4712, 0, 0.882,
    0.4712, 0, 0.882,
    0.4712, 0, 0.882,
    0.0127, 0, 0.9999,
    0.0127, 0, 0.9999,
    0.0127, 0, 0.9999,
    0.0127, 0, 0.9999,
    0.4452, 0, -0.8954,
    0.4452, 0, -0.8954,
    0.4452, 0, -0.8954,
    0.4452, 0, -0.8954,
    0.7585, 0, -0.6517,
    0.7585, 0, -0.6517,
    0.7585, 0, -0.6517,
    0.7585, 0, -0.6517,
    -0.8882, 0, -0.4594,
    -0.8882, 0, -0.4594,
    -0.8882, 0, -0.4594,
    -0.8882, 0, -0.4594,
    0.8771, 0, 0.4802,
    0.8771, 0, 0.4802,
    0.8771, 0, 0.4802,
    0.8771, 0, 0.4802,
    -0.2184, 0, -0.9759,
    -0.2184, 0, -0.9759,
    -0.2184, 0, -0.9759,
    -0.2184, 0, -0.9759,
    -0.8833, 0, 0.4689,
    -0.8833, 0, 0.4689,
    -0.8833, 0, 0.4689,
    -0.8833, 0, 0.4689,
    0.4351, 0, -0.9004,
    0.4351, 0, -0.9004,
    0.4351, 0, -0.9004,
    0.4351, 0, -0.9004,
    -1, 0, 0.0042,
    -1, 0, 0.0042,
    -1, 0, 0.0042,
    -1, 0, 0.0042,
    0.8349, 0, 0.5505,
    0.8349, 0, 0.5505,
    0.8349, 0, 0.5505,
    0.8349, 0, 0.5505,
    -0.1617, 0, -0.9868,
    -0.1617, 0, -0.9868,
    -0.1617, 0, -0.9868,
    -0.1617, 0, -0.9868
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.360969, 0.154353,
    0.369391, 0.1662,
    0.36214, 0.180717,
    0.357516, 0.181597,
    0.351293, 0.196096,
    0.352413, 0.201422,
    0.355972, 0.200484,
    0.357933, 0.209316,
    0.343197, 0.238593,
    0.341873, 0.247256,
    0.337859, 0.260126,
    0.331529, 0.26192,
    0.323848, 0.256624,
    0.335999, 0.252327,
    0.334352, 0.250849,
    0.294283, 0.260414,
    0.3071, 0.211389,
    0.297786, 0.208817,
    0.29892, 0.204597,
    0.296678, 0.204031,
    0.322766, 0.175095,
    0.327503, 0.157599,
    0.337859, 0.260126,
    0.331529, 0.26192,
    0.331529, 0.26192,
    0.337859, 0.260126,
    0.331529, 0.26192,
    0.323848, 0.256624,
    0.323848, 0.256624,
    0.331529, 0.26192,
    0.36214, 0.180717,
    0.357516, 0.181597,
    0.357516, 0.181597,
    0.36214, 0.180717,
    0.341873, 0.247256,
    0.337859, 0.260126,
    0.337859, 0.260126,
    0.341873, 0.247256,
    0.327503, 0.157599,
    0.360969, 0.154353,
    0.360969, 0.154353,
    0.327503, 0.157599,
    0.297786, 0.208817,
    0.29892, 0.204597,
    0.29892, 0.204597,
    0.297786, 0.208817,
    0.343197, 0.238593,
    0.341873, 0.247256,
    0.341873, 0.247256,
    0.343197, 0.238593,
    0.322766, 0.175095,
    0.327503, 0.157599,
    0.327503, 0.157599,
    0.322766, 0.175095,
    0.3071, 0.211389,
    0.297786, 0.208817,
    0.297786, 0.208817,
    0.3071, 0.211389,
    0.357933, 0.209316,
    0.343197, 0.238593,
    0.343197, 0.238593,
    0.357933, 0.209316,
    0.296678, 0.204031,
    0.322766, 0.175095,
    0.322766, 0.175095,
    0.296678, 0.204031,
    0.294283, 0.260414,
    0.3071, 0.211389,
    0.3071, 0.211389,
    0.294283, 0.260414,
    0.355972, 0.200484,
    0.357933, 0.209316,
    0.357933, 0.209316,
    0.355972, 0.200484,
    0.360969, 0.154353,
    0.369391, 0.1662,
    0.369391, 0.1662,
    0.360969, 0.154353,
    0.334352, 0.250849,
    0.294283, 0.260414,
    0.294283, 0.260414,
    0.334352, 0.250849,
    0.352413, 0.201422,
    0.355972, 0.200484,
    0.355972, 0.200484,
    0.352413, 0.201422,
    0.369391, 0.1662,
    0.36214, 0.180717,
    0.36214, 0.180717,
    0.369391, 0.1662,
    0.335999, 0.252327,
    0.334352, 0.250849,
    0.334352, 0.250849,
    0.335999, 0.252327,
    0.351293, 0.196096,
    0.352413, 0.201422,
    0.352413, 0.201422,
    0.351293, 0.196096,
    0.29892, 0.204597,
    0.296678, 0.204031,
    0.296678, 0.204031,
    0.29892, 0.204597,
    0.323848, 0.256624,
    0.335999, 0.252327,
    0.335999, 0.252327,
    0.323848, 0.256624,
    0.357516, 0.181597,
    0.351293, 0.196096,
    0.351293, 0.196096,
    0.357516, 0.181597
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    109, 108, 106,
    108, 107, 106,
    105, 104, 102,
    104, 103, 102,
    101, 100, 98,
    100, 99, 98,
    97, 96, 94,
    96, 95, 94,
    93, 92, 90,
    92, 91, 90,
    89, 88, 86,
    88, 87, 86,
    85, 84, 82,
    84, 83, 82,
    81, 80, 78,
    80, 79, 78,
    77, 76, 74,
    76, 75, 74,
    73, 72, 70,
    72, 71, 70,
    69, 68, 66,
    68, 67, 66,
    65, 64, 62,
    64, 63, 62,
    61, 60, 58,
    60, 59, 58,
    57, 56, 54,
    56, 55, 54,
    53, 52, 50,
    52, 51, 50,
    49, 48, 46,
    48, 47, 46,
    45, 44, 42,
    44, 43, 42,
    41, 40, 38,
    40, 39, 38,
    37, 36, 34,
    36, 35, 34,
    33, 32, 30,
    32, 31, 30,
    29, 28, 26,
    28, 27, 26,
    25, 24, 22,
    24, 23, 22,
    10, 9, 8,
    11, 10, 8,
    13, 11, 8,
    13, 12, 11,
    14, 13, 8,
    16, 14, 8,
    16, 15, 14,
    18, 16, 8,
    18, 17, 16,
    20, 18, 8,
    20, 19, 18,
    8, 5, 20,
    8, 7, 5,
    7, 6, 5,
    5, 21, 20,
    5, 4, 21,
    4, 3, 21,
    3, 2, 21,
    2, 1, 21,
    1, 0, 21
]);
