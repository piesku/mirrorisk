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
    -8.88273, 0.999795, -26.2863,
    -10.6007, 0.999795, -28.286,
    -13.4409, 0.999795, -27.7708,
    -13.8174, 0.999795, -26.9525,
    -16.7965, 0.999795, -26.4645,
    -17.7342, 0.999795, -26.9176,
    -17.3959, 0.999795, -27.5354,
    -18.946, 0.999795, -28.3062,
    -25.0616, 0.999795, -26.9176,
    -26.7315, 0.999795, -27.0705,
    -29.0893, 0.999795, -26.7936,
    -29.7139, 0.999795, -25.7006,
    -29.301, 0.999795, -24.1544,
    -27.9435, 0.999795, -26.2132,
    -27.7449, 0.999795, -25.8391,
    -31.3695, 0.999795, -19.0882,
    -21.428, 0.999795, -19.2144,
    -21.3793, 0.999795, -17.3679,
    -20.5377, 0.999795, -17.3842,
    -20.5366, 0.999795, -17.1031,
    -14.275, 0.999795, -20.4483,
    -10.9205, 0.999795, -20.52,
    -29.0893, -0.000205, -26.7936,
    -29.7139, -0.000205, -25.7006,
    -29.7139, 0.999795, -25.7006,
    -29.0893, 0.999795, -26.7936,
    -13.4409, -0.000205, -27.7708,
    -13.8174, -0.000205, -26.9525,
    -13.8174, 0.999795, -26.9525,
    -13.4409, 0.999795, -27.7708,
    -26.7315, -0.000205, -27.0705,
    -29.0893, -0.000205, -26.7936,
    -29.0893, 0.999795, -26.7936,
    -26.7315, 0.999795, -27.0705,
    -10.9205, -0.000205, -20.52,
    -8.88273, -0.000205, -26.2863,
    -8.88273, 0.999795, -26.2863,
    -10.9205, 0.999795, -20.52,
    -21.3793, -0.000205, -17.3679,
    -20.5377, -0.000205, -17.3842,
    -20.5377, 0.999795, -17.3842,
    -21.3793, 0.999795, -17.3679,
    -25.0616, -0.000205, -26.9176,
    -26.7315, -0.000205, -27.0705,
    -26.7315, 0.999795, -27.0705,
    -25.0616, 0.999795, -26.9176,
    -14.275, -0.000205, -20.4483,
    -10.9205, -0.000205, -20.52,
    -10.9205, 0.999795, -20.52,
    -14.275, 0.999795, -20.4483,
    -21.428, -0.000205, -19.2144,
    -21.3793, -0.000205, -17.3679,
    -21.3793, 0.999795, -17.3679,
    -21.428, 0.999795, -19.2144,
    -18.946, -0.000205, -28.3062,
    -25.0616, -0.000205, -26.9176,
    -25.0616, 0.999795, -26.9176,
    -18.946, 0.999795, -28.3062,
    -20.5366, -0.000205, -17.1031,
    -14.275, -0.000205, -20.4483,
    -14.275, 0.999795, -20.4483,
    -20.5366, 0.999795, -17.1031,
    -31.3695, -0.000205, -19.0882,
    -21.428, -0.000205, -19.2144,
    -21.428, 0.999795, -19.2144,
    -31.3695, 0.999795, -19.0882,
    -17.3959, -0.000205, -27.5354,
    -18.946, -0.000205, -28.3062,
    -18.946, 0.999795, -28.3062,
    -17.3959, 0.999795, -27.5354,
    -8.88273, -0.000205, -26.2863,
    -10.6007, -0.000205, -28.286,
    -10.6007, 0.999795, -28.286,
    -8.88273, 0.999795, -26.2863,
    -27.7449, -0.000205, -25.8391,
    -31.3695, -0.000205, -19.0882,
    -31.3695, 0.999795, -19.0882,
    -27.7449, 0.999795, -25.8391,
    -17.7342, -0.000205, -26.9176,
    -17.3959, -0.000205, -27.5354,
    -17.3959, 0.999795, -27.5354,
    -17.7342, 0.999795, -26.9176,
    -10.6007, -0.000205, -28.286,
    -13.4409, -0.000205, -27.7708,
    -13.4409, 0.999795, -27.7708,
    -10.6007, 0.999795, -28.286,
    -27.9435, -0.000205, -26.2132,
    -27.7449, -0.000205, -25.8391,
    -27.7449, 0.999795, -25.8391,
    -27.9435, 0.999795, -26.2132,
    -16.7965, -0.000205, -26.4645,
    -17.7342, -0.000205, -26.9176,
    -17.7342, 0.999795, -26.9176,
    -16.7965, 0.999795, -26.4645,
    -20.5377, -0.000205, -17.3842,
    -20.5366, -0.000205, -17.1031,
    -20.5366, 0.999795, -17.1031,
    -20.5377, 0.999795, -17.3842,
    -29.301, -0.000205, -24.1544,
    -27.9435, -0.000205, -26.2132,
    -27.9435, 0.999795, -26.2132,
    -29.301, 0.999795, -24.1544,
    -13.8174, -0.000205, -26.9525,
    -16.7965, -0.000205, -26.4645,
    -16.7965, 0.999795, -26.4645,
    -13.8174, 0.999795, -26.9525,
    -29.7139, -0.000205, -25.7006,
    -29.301, -0.000205, -24.1544,
    -29.301, 0.999795, -24.1544,
    -29.7139, 0.999795, -25.7006
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
    -0.9085, 0, -0.4179,
    -0.9085, 0, -0.4179,
    -0.9085, 0, -0.4179,
    -0.9085, 0, -0.4179,
    -0.1167, 0, -0.9932,
    -0.1167, 0, -0.9932,
    -0.1167, 0, -0.9932,
    -0.1167, 0, -0.9932,
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
    -0.881, 0, -0.473,
    -0.881, 0, -0.473,
    -0.881, 0, -0.473,
    -0.881, 0, -0.473,
    0.8771, 0, 0.4802,
    0.8771, 0, 0.4802,
    0.8771, 0, 0.4802,
    0.8771, 0, 0.4802,
    -0.1785, 0, -0.9839,
    -0.1785, 0, -0.9839,
    -0.1785, 0, -0.9839,
    -0.1785, 0, -0.9839,
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
    -0.1617, 0, -0.9868,
    -0.9662, 0, 0.258,
    -0.9662, 0, 0.258,
    -0.9662, 0, 0.258,
    -0.9662, 0, 0.258
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.712733, 0.826557,
    0.703278, 0.867827,
    0.659061, 0.881753,
    0.64759, 0.87294,
    0.601603, 0.888292,
    0.591667, 0.901747,
    0.601095, 0.907996,
    0.584833, 0.930546,
    0.487536, 0.956564,
    0.46495, 0.97123,
    0.42937, 0.984933,
    0.412318, 0.974073,
    0.406617, 0.94901,
    0.441311, 0.968114,
    0.441335, 0.961312,
    0.339322, 0.892488,
    0.481546, 0.81991,
    0.468423, 0.793304,
    0.480505, 0.78724,
    0.478419, 0.783237,
    0.592429, 0.783932,
    0.640635, 0.759856,
    0.893498, 0.019502,
    0.880678, 0.019502,
    0.880678, 0.031231,
    0.893498, 0.031231,
    0.90496, 0.019502,
    0.895361, 0.019502,
    0.895361, 0.031231,
    0.90496, 0.031231,
    0.265688, 0.019502,
    0.238032, 0.019502,
    0.238032, 0.031231,
    0.265688, 0.031231,
    0.819913, 0.019502,
    0.887548, 0.019502,
    0.887548, 0.031231,
    0.819913, 0.031231,
    0.328465, 0.019502,
    0.338336, 0.019502,
    0.338336, 0.031231,
    0.328465, 0.031231,
    0.285275, 0.019502,
    0.265688, 0.019502,
    0.265688, 0.031231,
    0.285275, 0.031231,
    0.411794, 0.019502,
    0.451139, 0.019502,
    0.451139, 0.031231,
    0.411794, 0.031231,
    0.8046, 0.019502,
    0.782941, 0.019502,
    0.782941, 0.031231,
    0.8046, 0.031231,
    0.357006, 0.019502,
    0.285275, 0.019502,
    0.285275, 0.031231,
    0.357006, 0.031231,
    0.33835, 0.019502,
    0.411794, 0.019502,
    0.411794, 0.031231,
    0.33835, 0.031231,
    0.211288, 0.019502,
    0.327894, 0.019502,
    0.327894, 0.031231,
    0.211288, 0.031231,
    0.375187, 0.019502,
    0.357006, 0.019502,
    0.357006, 0.031231,
    0.375187, 0.031231,
    0.887548, 0.019502,
    0.911003, 0.019502,
    0.911003, 0.031231,
    0.887548, 0.031231,
    0.882303, 0.019502,
    0.803119, 0.019502,
    0.803119, 0.031231,
    0.882303, 0.031231,
    0.894953, 0.019502,
    0.902198, 0.019502,
    0.902198, 0.031231,
    0.894953, 0.031231,
    0.45489, 0.019502,
    0.421576, 0.019502,
    0.421576, 0.031231,
    0.45489, 0.031231,
    0.88669, 0.019502,
    0.882303, 0.019502,
    0.882303, 0.031231,
    0.88669, 0.031231,
    0.382219, 0.019502,
    0.37122, 0.019502,
    0.37122, 0.031231,
    0.382219, 0.031231,
    0.783132, 0.019502,
    0.779836, 0.019502,
    0.779836, 0.031231,
    0.783132, 0.031231,
    0.862542, 0.019502,
    0.88669, 0.019502,
    0.88669, 0.031231,
    0.862542, 0.031231,
    0.417161, 0.019502,
    0.382219, 0.019502,
    0.382219, 0.031231,
    0.417161, 0.031231,
    0.880678, 0.019502,
    0.862542, 0.019502,
    0.862542, 0.031231,
    0.880678, 0.031231
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
    20, 19, 18,
    20, 18, 16,
    18, 17, 16,
    16, 14, 20,
    16, 15, 14,
    14, 13, 20,
    13, 10, 20,
    13, 12, 10,
    12, 11, 10,
    10, 8, 20,
    10, 9, 8,
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
