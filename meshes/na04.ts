import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_na04(gl: WebGLRenderingContext): Mesh {
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
    62.7023, 0.999795, -32.4816,
    63.1071, 0.999795, -32.3194,
    62.3546, 0.999795, -31.3565,
    63.0673, 0.999795, -30.1758,
    64.8344, 0.999795, -28.7038,
    66.7511, 0.999795, -27.2629,
    66.4559, 0.999795, -25.0596,
    65.8196, 0.999795, -23.4601,
    65.9504, 0.999795, -22.0097,
    66.4023, 0.999795, -21.7446,
    67.8809, 0.999795, -23.8151,
    67.8876, 0.999795, -25.2009,
    69.0036, 0.999795, -26.2398,
    72.0166, 0.999795, -26.5728,
    73.8057, 0.999795, -26.4215,
    73.9553, 0.999795, -25.785,
    75.089, 0.999795, -25.7274,
    77.726, 0.999795, -26.0206,
    79.6357, 0.999795, -24.674,
    80.3001, 0.999795, -23.724,
    79.9881, 0.999795, -22.6954,
    81.3946, 0.999795, -23.1153,
    81.8391, 0.999795, -24.1423,
    83.7911, 0.999795, -26.6006,
    85.097, 0.999795, -25.6023,
    86.0443, 0.999795, -26.0772,
    87.1677, 0.999795, -27.0564,
    85.923, 0.999795, -27.2835,
    83.857, 0.999795, -30.8373,
    80.2955, 0.999795, -31.617,
    78.5814, 0.999795, -34.2891,
    80.0524, 0.999796, -37.2655,
    80.3994, 0.999796, -39.9982,
    82.2671, 0.999796, -42.4116,
    81.6294, 0.999796, -44.2789,
    77.9282, 0.999796, -44.2512,
    75.4769, 0.999796, -43.2755,
    72.7865, 0.999796, -43.4583,
    68.2329, 0.999796, -40.6841,
    68.2473, 0.999796, -36.1539,
    61.401, 0.999796, -39.8744,
    58.3624, 0.999796, -40.0694,
    56.5063, 0.999796, -42.5474,
    55.8106, 0.999796, -42.298,
    55.5075, 0.999796, -40.0616,
    56.5321, 0.999796, -39.3584,
    57.7366, 0.999796, -38.362,
    58.0393, 0.999796, -36.8039,
    61.1025, 0.999796, -34.7137,
    62.3291, 0.999795, -32.3091,
    62.7056, 0.999796, -33.938,
    63.406, 0.999795, -33.4878,
    85.923, -0.000205, -27.2835,
    83.857, -0.000205, -30.8373,
    83.857, 0.999795, -30.8373,
    85.923, 0.999795, -27.2835,
    73.9553, -0.000205, -25.785,
    75.089, -0.000205, -25.7274,
    75.089, 0.999795, -25.7274,
    73.9553, 0.999795, -25.785,
    58.0393, -0.000204, -36.8039,
    61.1025, -0.000204, -34.7137,
    61.1025, 0.999796, -34.7137,
    58.0393, 0.999796, -36.8039,
    83.857, -0.000205, -30.8373,
    80.2955, -0.000205, -31.617,
    80.2955, 0.999795, -31.617,
    83.857, 0.999795, -30.8373,
    83.7911, -0.000205, -26.6006,
    85.097, -0.000205, -25.6023,
    85.097, 0.999795, -25.6023,
    83.7911, 0.999795, -26.6006,
    78.5814, -0.000205, -34.2891,
    80.0524, -0.000204, -37.2655,
    80.0524, 0.999796, -37.2655,
    78.5814, 0.999795, -34.2891,
    85.097, -0.000205, -25.6023,
    86.0443, -0.000205, -26.0772,
    86.0443, 0.999795, -26.0772,
    85.097, 0.999795, -25.6023,
    81.8391, -0.000205, -24.1423,
    83.7911, -0.000205, -26.6006,
    83.7911, 0.999795, -26.6006,
    81.8391, 0.999795, -24.1423,
    58.3624, -0.000204, -40.0694,
    56.5063, -0.000204, -42.5474,
    56.5063, 0.999796, -42.5474,
    58.3624, 0.999796, -40.0694,
    81.3946, -0.000205, -23.1153,
    81.8391, -0.000205, -24.1423,
    81.8391, 0.999795, -24.1423,
    81.3946, 0.999795, -23.1153,
    80.3001, -0.000205, -23.724,
    79.9881, -0.000205, -22.6954,
    79.9881, 0.999795, -22.6954,
    80.3001, 0.999795, -23.724,
    55.8106, -0.000204, -42.298,
    55.5075, -0.000204, -40.0616,
    55.5075, 0.999796, -40.0616,
    55.8106, 0.999796, -42.298,
    55.5075, -0.000204, -40.0616,
    56.5321, -0.000204, -39.3584,
    56.5321, 0.999796, -39.3584,
    55.5075, 0.999796, -40.0616,
    72.7865, -0.000204, -43.4583,
    68.2329, -0.000204, -40.6841,
    68.2329, 0.999796, -40.6841,
    72.7865, 0.999796, -43.4583,
    67.8809, -0.000205, -23.8151,
    67.8876, -0.000205, -25.2009,
    67.8876, 0.999795, -25.2009,
    67.8809, 0.999795, -23.8151,
    61.401, -0.000204, -39.8744,
    58.3624, -0.000204, -40.0694,
    58.3624, 0.999796, -40.0694,
    61.401, 0.999796, -39.8744,
    77.726, -0.000205, -26.0206,
    79.6357, -0.000205, -24.674,
    79.6357, 0.999795, -24.674,
    77.726, 0.999795, -26.0206,
    81.6294, -0.000204, -44.2789,
    77.9282, -0.000204, -44.2512,
    77.9282, 0.999796, -44.2512,
    81.6294, 0.999796, -44.2789,
    75.089, -0.000205, -25.7274,
    77.726, -0.000205, -26.0206,
    77.726, 0.999795, -26.0206,
    75.089, 0.999795, -25.7274,
    75.4769, -0.000204, -43.2755,
    72.7865, -0.000204, -43.4583,
    72.7865, 0.999796, -43.4583,
    75.4769, 0.999796, -43.2755,
    56.5321, -0.000204, -39.3584,
    57.7366, -0.000204, -38.362,
    57.7366, 0.999796, -38.362,
    56.5321, 0.999796, -39.3584,
    68.2473, -0.000204, -36.1539,
    61.401, -0.000204, -39.8744,
    61.401, 0.999796, -39.8744,
    68.2473, 0.999796, -36.1539,
    73.8057, -0.000205, -26.4215,
    73.9553, -0.000205, -25.785,
    73.9553, 0.999795, -25.785,
    73.8057, 0.999795, -26.4215,
    56.5063, -0.000204, -42.5474,
    55.8106, -0.000204, -42.298,
    55.8106, 0.999796, -42.298,
    56.5063, 0.999796, -42.5474,
    61.1025, -0.000204, -34.7137,
    62.3291, -0.000205, -32.3091,
    62.3291, 0.999795, -32.3091,
    61.1025, 0.999796, -34.7137,
    62.7056, -0.000204, -33.938,
    63.406, -0.000205, -33.4878,
    63.406, 0.999795, -33.4878,
    62.7056, 0.999796, -33.938,
    62.3291, -0.000205, -32.3091,
    62.7056, -0.000204, -33.938,
    62.7056, 0.999796, -33.938,
    62.3291, 0.999795, -32.3091,
    66.4559, -0.000205, -25.0596,
    65.8196, -0.000205, -23.4601,
    65.8196, 0.999795, -23.4601,
    66.4559, 0.999795, -25.0596,
    62.7023, -0.000205, -32.4816,
    63.1071, -0.000205, -32.3194,
    63.1071, 0.999795, -32.3194,
    62.7023, 0.999795, -32.4816,
    86.0443, -0.000205, -26.0772,
    87.1677, -0.000205, -27.0564,
    87.1677, 0.999795, -27.0564,
    86.0443, 0.999795, -26.0772,
    66.4023, -0.000205, -21.7446,
    67.8809, -0.000205, -23.8151,
    67.8809, 0.999795, -23.8151,
    66.4023, 0.999795, -21.7446,
    79.6357, -0.000205, -24.674,
    80.3001, -0.000205, -23.724,
    80.3001, 0.999795, -23.724,
    79.6357, 0.999795, -24.674,
    63.1071, -0.000205, -32.3194,
    62.3546, -0.000205, -31.3565,
    62.3546, 0.999795, -31.3565,
    63.1071, 0.999795, -32.3194,
    64.8344, -0.000205, -28.7038,
    66.7511, -0.000205, -27.2629,
    66.7511, 0.999795, -27.2629,
    64.8344, 0.999795, -28.7038,
    57.7366, -0.000204, -38.362,
    58.0393, -0.000204, -36.8039,
    58.0393, 0.999796, -36.8039,
    57.7366, 0.999796, -38.362,
    63.0673, -0.000205, -30.1758,
    64.8344, -0.000205, -28.7038,
    64.8344, 0.999795, -28.7038,
    63.0673, 0.999795, -30.1758,
    67.8876, -0.000205, -25.2009,
    69.0036, -0.000205, -26.2398,
    69.0036, 0.999795, -26.2398,
    67.8876, 0.999795, -25.2009,
    82.2671, -0.000204, -42.4116,
    81.6294, -0.000204, -44.2789,
    81.6294, 0.999796, -44.2789,
    82.2671, 0.999796, -42.4116,
    66.7511, -0.000205, -27.2629,
    66.4559, -0.000205, -25.0596,
    66.4559, 0.999795, -25.0596,
    66.7511, 0.999795, -27.2629,
    77.9282, -0.000204, -44.2512,
    75.4769, -0.000204, -43.2755,
    75.4769, 0.999796, -43.2755,
    77.9282, 0.999796, -44.2512,
    80.2955, -0.000205, -31.617,
    78.5814, -0.000205, -34.2891,
    78.5814, 0.999795, -34.2891,
    80.2955, 0.999795, -31.617,
    63.406, -0.000205, -33.4878,
    62.7023, -0.000205, -32.4816,
    62.7023, 0.999795, -32.4816,
    63.406, 0.999795, -33.4878,
    80.3994, -0.000204, -39.9982,
    82.2671, -0.000204, -42.4116,
    82.2671, 0.999796, -42.4116,
    80.3994, 0.999796, -39.9982,
    87.1677, -0.000205, -27.0564,
    85.923, -0.000205, -27.2835,
    85.923, 0.999795, -27.2835,
    87.1677, 0.999795, -27.0564,
    65.8196, -0.000205, -23.4601,
    65.9504, -0.000205, -22.0097,
    65.9504, 0.999795, -22.0097,
    65.8196, 0.999795, -23.4601,
    68.2329, -0.000204, -40.6841,
    68.2473, -0.000204, -36.1539,
    68.2473, 0.999796, -36.1539,
    68.2329, 0.999796, -40.6841,
    65.9504, -0.000205, -22.0097,
    66.4023, -0.000205, -21.7446,
    66.4023, 0.999795, -21.7446,
    65.9504, 0.999795, -22.0097,
    72.0166, -0.000205, -26.5728,
    73.8057, -0.000205, -26.4215,
    73.8057, 0.999795, -26.4215,
    72.0166, 0.999795, -26.5728,
    62.3546, -0.000205, -31.3565,
    63.0673, -0.000205, -30.1758,
    63.0673, 0.999795, -30.1758,
    62.3546, 0.999795, -31.3565,
    69.0036, -0.000205, -26.2398,
    72.0166, -0.000205, -26.5728,
    72.0166, 0.999795, -26.5728,
    69.0036, 0.999795, -26.2398,
    79.9881, -0.000205, -22.6954,
    81.3946, -0.000205, -23.1153,
    81.3946, 0.999795, -23.1153,
    79.9881, 0.999795, -22.6954,
    80.0524, -0.000204, -37.2655,
    80.3994, -0.000204, -39.9982,
    80.3994, 0.999796, -39.9982,
    80.0524, 0.999796, -37.2655
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
    0.8645, 0, -0.5026,
    0.8645, 0, -0.5026,
    0.8645, 0, -0.5026,
    0.8645, 0, -0.5026,
    -0.0507, 0, 0.9987,
    -0.0507, 0, 0.9987,
    -0.0507, 0, 0.9987,
    -0.0507, 0, 0.9987,
    -0.5636, 0, 0.826,
    -0.5636, 0, 0.826,
    -0.5636, 0, 0.826,
    -0.5636, 0, 0.826,
    0.2139, 0, -0.9769,
    0.2139, 0, -0.9769,
    0.2139, 0, -0.9769,
    0.2139, 0, -0.9769,
    -0.6074, 0, 0.7944,
    -0.6074, 0, 0.7944,
    -0.6074, 0, 0.7944,
    -0.6074, 0, 0.7944,
    0.8965, 0, 0.4431,
    0.8965, 0, 0.4431,
    0.8965, 0, 0.4431,
    0.8965, 0, 0.4431,
    0.4481, 0, 0.894,
    0.4481, 0, 0.894,
    0.4481, 0, 0.894,
    0.4481, 0, 0.894,
    0.7831, 0, 0.6219,
    0.7831, 0, 0.6219,
    0.7831, 0, 0.6219,
    0.7831, 0, 0.6219,
    0.8004, 0, -0.5995,
    0.8004, 0, -0.5995,
    0.8004, 0, -0.5995,
    0.8004, 0, -0.5995,
    0.9178, 0, 0.3972,
    0.9178, 0, 0.3972,
    0.9178, 0, 0.3972,
    0.9178, 0, 0.3972,
    -0.9569, 0, -0.2903,
    -0.9569, 0, -0.2903,
    -0.9569, 0, -0.2903,
    -0.9569, 0, -0.2903,
    -0.9909, 0, -0.1343,
    -0.9909, 0, -0.1343,
    -0.9909, 0, -0.1343,
    -0.9909, 0, -0.1343,
    -0.5659, 0, 0.8245,
    -0.5659, 0, 0.8245,
    -0.5659, 0, 0.8245,
    -0.5659, 0, 0.8245,
    -0.5203, 0, -0.854,
    -0.5203, 0, -0.854,
    -0.5203, 0, -0.854,
    -0.5203, 0, -0.854,
    1, 0, 0.0048,
    1, 0, 0.0048,
    1, 0, 0.0048,
    1, 0, 0.0048,
    0.064, 0, -0.9979,
    0.064, 0, -0.9979,
    0.064, 0, -0.9979,
    0.064, 0, -0.9979,
    -0.5763, 0, 0.8173,
    -0.5763, 0, 0.8173,
    -0.5763, 0, 0.8173,
    -0.5763, 0, 0.8173,
    -0.0075, 0, -1,
    -0.0075, 0, -1,
    -0.0075, 0, -1,
    -0.0075, 0, -1,
    0.1105, 0, 0.9939,
    0.1105, 0, 0.9939,
    0.1105, 0, 0.9939,
    0.1105, 0, 0.9939,
    0.0678, 0, -0.9977,
    0.0678, 0, -0.9977,
    0.0678, 0, -0.9977,
    0.0678, 0, -0.9977,
    -0.6374, 0, 0.7705,
    -0.6374, 0, 0.7705,
    -0.6374, 0, 0.7705,
    -0.6374, 0, 0.7705,
    0.4775, 0, -0.8786,
    0.4775, 0, -0.8786,
    0.4775, 0, -0.8786,
    0.4775, 0, -0.8786,
    -0.9735, 0, 0.2287,
    -0.9735, 0, 0.2287,
    -0.9735, 0, 0.2287,
    -0.9735, 0, 0.2287,
    -0.3375, 0, -0.9413,
    -0.3375, 0, -0.9413,
    -0.3375, 0, -0.9413,
    -0.3375, 0, -0.9413,
    -0.8908, 0, 0.4544,
    -0.8908, 0, 0.4544,
    -0.8908, 0, 0.4544,
    -0.8908, 0, 0.4544,
    -0.5408, 0, 0.8412,
    -0.5408, 0, 0.8412,
    -0.5408, 0, 0.8412,
    -0.5408, 0, 0.8412,
    0.9743, 0, 0.2252,
    0.9743, 0, 0.2252,
    0.9743, 0, 0.2252,
    0.9743, 0, 0.2252,
    -0.9292, 0, -0.3696,
    -0.9292, 0, -0.3696,
    -0.9292, 0, -0.3696,
    -0.9292, 0, -0.3696,
    -0.3719, 0, 0.9283,
    -0.3719, 0, 0.9283,
    -0.3719, 0, 0.9283,
    -0.3719, 0, 0.9283,
    0.6571, 0, 0.7538,
    0.6571, 0, 0.7538,
    0.6571, 0, 0.7538,
    0.6571, 0, 0.7538,
    0.8138, 0, 0.5812,
    0.8138, 0, 0.5812,
    0.8138, 0, 0.5812,
    0.8138, 0, 0.5812,
    -0.8195, 0, 0.5731,
    -0.8195, 0, 0.5731,
    -0.8195, 0, 0.5731,
    -0.8195, 0, 0.5731,
    -0.7879, 0, -0.6158,
    -0.7879, 0, -0.6158,
    -0.7879, 0, -0.6158,
    -0.7879, 0, -0.6158,
    -0.6009, 0, 0.7993,
    -0.6009, 0, 0.7993,
    -0.6009, 0, 0.7993,
    -0.6009, 0, 0.7993,
    -0.9816, 0, 0.1907,
    -0.9816, 0, 0.1907,
    -0.9816, 0, 0.1907,
    -0.9816, 0, 0.1907,
    -0.64, 0, 0.7683,
    -0.64, 0, 0.7683,
    -0.64, 0, 0.7683,
    -0.64, 0, 0.7683,
    0.6814, 0, 0.7319,
    0.6814, 0, 0.7319,
    0.6814, 0, 0.7319,
    0.6814, 0, 0.7319,
    0.9463, 0, -0.3232,
    0.9463, 0, -0.3232,
    0.9463, 0, -0.3232,
    0.9463, 0, -0.3232,
    -0.9911, 0, -0.1328,
    -0.9911, 0, -0.1328,
    -0.9911, 0, -0.1328,
    -0.9911, 0, -0.1328,
    -0.3698, 0, -0.9291,
    -0.3698, 0, -0.9291,
    -0.3698, 0, -0.9291,
    -0.3698, 0, -0.9291,
    0.8417, 0, -0.5399,
    0.8417, 0, -0.5399,
    0.8417, 0, -0.5399,
    0.8417, 0, -0.5399,
    -0.8195, 0, -0.5731,
    -0.8195, 0, -0.5731,
    -0.8195, 0, -0.5731,
    -0.8195, 0, -0.5731,
    0.7909, 0, 0.612,
    0.7909, 0, 0.612,
    0.7909, 0, 0.612,
    0.7909, 0, 0.612,
    0.1795, 0, -0.9838,
    0.1795, 0, -0.9838,
    0.1795, 0, -0.9838,
    0.1795, 0, -0.9838,
    -0.996, 0, 0.0898,
    -0.996, 0, 0.0898,
    -0.996, 0, 0.0898,
    -0.996, 0, 0.0898,
    -1, 0, 0.0032,
    -1, 0, 0.0032,
    -1, 0, 0.0032,
    -1, 0, 0.0032,
    -0.506, 0, 0.8625,
    -0.506, 0, 0.8625,
    -0.506, 0, 0.8625,
    -0.506, 0, 0.8625,
    -0.0843, 0, 0.9964,
    -0.0843, 0, 0.9964,
    -0.0843, 0, 0.9964,
    -0.0843, 0, 0.9964,
    -0.8561, 0, 0.5168,
    -0.8561, 0, 0.5168,
    -0.8561, 0, 0.5168,
    -0.8561, 0, 0.5168,
    0.1099, 0, 0.9939,
    0.1099, 0, 0.9939,
    0.1099, 0, 0.9939,
    0.1099, 0, 0.9939,
    0.286, 0, 0.9582,
    0.286, 0, 0.9582,
    0.286, 0, 0.9582,
    0.286, 0, 0.9582,
    0.992, 0, 0.126,
    0.992, 0, 0.126,
    0.992, 0, 0.126,
    0.992, 0, 0.126
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.242642, 0.291743,
    0.245286, 0.288888,
    0.235537, 0.284,
    0.236771, 0.271753,
    0.245395, 0.253126,
    0.255345, 0.234178,
    0.244541, 0.217537,
    0.233295, 0.20707,
    0.228804, 0.194872,
    0.231435, 0.191006,
    0.251276, 0.202052,
    0.256628, 0.213203,
    0.2696, 0.217315,
    0.295172, 0.208483,
    0.309023, 0.200422,
    0.307795, 0.194718,
    0.316719, 0.189919,
    0.339107, 0.182202,
    0.349361, 0.164042,
    0.351087, 0.15384,
    0.344638, 0.146738,
    0.357587, 0.144747,
    0.365098, 0.151331,
    0.390239, 0.163694,
    0.396954, 0.15065,
    0.406409, 0.150859,
    0.419212, 0.154462,
    0.410043, 0.161052,
    0.406966, 0.19761,
    0.381224, 0.217514,
    0.377615, 0.245617,
    0.400856, 0.263998,
    0.414102, 0.28471,
    0.438391, 0.297035,
    0.440386, 0.314531,
    0.410431, 0.328457,
    0.386932, 0.32996,
    0.365933, 0.341719,
    0.318603, 0.336753,
    0.301401, 0.300163,
    0.260409, 0.35634,
    0.236648, 0.369529,
    0.231152, 0.39661,
    0.224588, 0.397258,
    0.213594, 0.380381,
    0.219169, 0.370792,
    0.225074, 0.358151,
    0.221559, 0.344429,
    0.238273, 0.315861,
    0.238973, 0.291779,
    0.248236, 0.303477,
    0.252164, 0.297168,
    0.413892, 0.012015,
    0.467313, 0.012015,
    0.467313, 0.027047,
    0.413892, 0.027047,
    0.53935, 0.012015,
    0.556392, 0.012015,
    0.556392, 0.027047,
    0.53935, 0.027047,
    0.300099, 0.012015,
    0.346145, 0.012015,
    0.346145, 0.027047,
    0.300099, 0.027047,
    0.688195, 0.012015,
    0.634658, 0.012015,
    0.634658, 0.027047,
    0.688195, 0.027047,
    0.687205, 0.012015,
    0.706834, 0.012015,
    0.706834, 0.027047,
    0.687205, 0.027047,
    0.519201, 0.012015,
    0.563943, 0.012015,
    0.563943, 0.027047,
    0.519201, 0.027047,
    0.706834, 0.012015,
    0.721074, 0.012015,
    0.721074, 0.027047,
    0.706834, 0.027047,
    0.366674, 0.012015,
    0.403626, 0.012015,
    0.403626, 0.027047,
    0.366674, 0.027047,
    0.606092, 0.012015,
    0.643342, 0.012015,
    0.643342, 0.027047,
    0.606092, 0.027047,
    0.351235, 0.012015,
    0.366674, 0.012015,
    0.366674, 0.027047,
    0.351235, 0.027047,
    0.360385, 0.012015,
    0.344923, 0.012015,
    0.344923, 0.027047,
    0.360385, 0.027047,
    0.639592, 0.012015,
    0.605976, 0.012015,
    0.605976, 0.027047,
    0.639592, 0.027047,
    0.262039, 0.012015,
    0.277442, 0.012015,
    0.277442, 0.027047,
    0.262039, 0.027047,
    0.521781, 0.012015,
    0.453331, 0.012015,
    0.453331, 0.027047,
    0.521781, 0.027047,
    0.361755, 0.012015,
    0.382587, 0.012015,
    0.382587, 0.027047,
    0.361755, 0.027047,
    0.350632, 0.012015,
    0.304955, 0.012015,
    0.304955, 0.027047,
    0.350632, 0.027047,
    0.596032, 0.012015,
    0.62474, 0.012015,
    0.62474, 0.027047,
    0.596032, 0.027047,
    0.654708, 0.012015,
    0.599072, 0.012015,
    0.599072, 0.027047,
    0.654708, 0.027047,
    0.556392, 0.012015,
    0.596032, 0.012015,
    0.596032, 0.027047,
    0.556392, 0.027047,
    0.562223, 0.012015,
    0.521781, 0.012015,
    0.521781, 0.027047,
    0.562223, 0.027047,
    0.277442, 0.012015,
    0.295548, 0.012015,
    0.295548, 0.027047,
    0.277442, 0.027047,
    0.453547, 0.012015,
    0.350632, 0.012015,
    0.350632, 0.027047,
    0.453547, 0.027047,
    0.400934, 0.012015,
    0.391367, 0.012015,
    0.391367, 0.027047,
    0.400934, 0.027047,
    0.277054, 0.012015,
    0.266595, 0.012015,
    0.266595, 0.027047,
    0.277054, 0.027047,
    0.525585, 0.012015,
    0.489438, 0.012015,
    0.489438, 0.027047,
    0.525585, 0.027047,
    0.370243, 0.012015,
    0.380772, 0.012015,
    0.380772, 0.027047,
    0.370243, 0.027047,
    0.489438, 0.012015,
    0.513924, 0.012015,
    0.513924, 0.027047,
    0.489438, 0.027047,
    0.380462, 0.012015,
    0.356419, 0.012015,
    0.356419, 0.027047,
    0.380462, 0.027047,
    0.370193, 0.012015,
    0.376278, 0.012015,
    0.376278, 0.027047,
    0.370193, 0.027047,
    0.721074, 0.012015,
    0.737961, 0.012015,
    0.737961, 0.027047,
    0.721074, 0.027047,
    0.33063, 0.012015,
    0.361755, 0.012015,
    0.361755, 0.027047,
    0.33063, 0.027047,
    0.374666, 0.012015,
    0.360385, 0.012015,
    0.360385, 0.027047,
    0.374666, 0.027047,
    0.489592, 0.012015,
    0.475119, 0.012015,
    0.475119, 0.027047,
    0.489592, 0.027047,
    0.402243, 0.012015,
    0.431056, 0.012015,
    0.431056, 0.027047,
    0.402243, 0.027047,
    0.580426, 0.012015,
    0.557005, 0.012015,
    0.557005, 0.027047,
    0.580426, 0.027047,
    0.37568, 0.012015,
    0.402243, 0.012015,
    0.402243, 0.027047,
    0.37568, 0.027047,
    0.44814, 0.012015,
    0.464916, 0.012015,
    0.464916, 0.027047,
    0.44814, 0.027047,
    0.641301, 0.012015,
    0.66937, 0.012015,
    0.66937, 0.027047,
    0.641301, 0.027047,
    0.413583, 0.012015,
    0.380462, 0.012015,
    0.380462, 0.027047,
    0.413583, 0.027047,
    0.599072, 0.012015,
    0.562223, 0.012015,
    0.562223, 0.027047,
    0.599072, 0.027047,
    0.479033, 0.012015,
    0.519201, 0.012015,
    0.519201, 0.027047,
    0.479033, 0.027047,
    0.507156, 0.012015,
    0.49203, 0.012015,
    0.49203, 0.027047,
    0.507156, 0.027047,
    0.605021, 0.012015,
    0.641301, 0.012015,
    0.641301, 0.027047,
    0.605021, 0.027047,
    0.737961, 0.012015,
    0.719251, 0.012015,
    0.719251, 0.027047,
    0.737961, 0.027047,
    0.356419, 0.012015,
    0.334615, 0.012015,
    0.334615, 0.027047,
    0.356419, 0.027047,
    0.615333, 0.012015,
    0.547234, 0.012015,
    0.547234, 0.027047,
    0.615333, 0.027047,
    0.419019, 0.012015,
    0.425812, 0.012015,
    0.425812, 0.027047,
    0.419019, 0.027047,
    0.510207, 0.012015,
    0.537102, 0.012015,
    0.537102, 0.027047,
    0.510207, 0.027047,
    0.475119, 0.012015,
    0.45737, 0.012015,
    0.45737, 0.027047,
    0.475119, 0.027047,
    0.464916, 0.012015,
    0.510207, 0.012015,
    0.510207, 0.027047,
    0.464916, 0.027047,
    0.630036, 0.012015,
    0.651179, 0.012015,
    0.651179, 0.027047,
    0.630036, 0.027047,
    0.563943, 0.012015,
    0.605021, 0.012015,
    0.605021, 0.027047,
    0.563943, 0.027047
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    259, 258, 256,
    258, 257, 256,
    255, 254, 252,
    254, 253, 252,
    251, 250, 248,
    250, 249, 248,
    247, 246, 244,
    246, 245, 244,
    243, 242, 240,
    242, 241, 240,
    239, 238, 236,
    238, 237, 236,
    235, 234, 232,
    234, 233, 232,
    231, 230, 228,
    230, 229, 228,
    227, 226, 224,
    226, 225, 224,
    223, 222, 220,
    222, 221, 220,
    219, 218, 216,
    218, 217, 216,
    215, 214, 212,
    214, 213, 212,
    211, 210, 208,
    210, 209, 208,
    207, 206, 204,
    206, 205, 204,
    203, 202, 200,
    202, 201, 200,
    199, 198, 196,
    198, 197, 196,
    195, 194, 192,
    194, 193, 192,
    191, 190, 188,
    190, 189, 188,
    187, 186, 184,
    186, 185, 184,
    183, 182, 180,
    182, 181, 180,
    179, 178, 176,
    178, 177, 176,
    175, 174, 172,
    174, 173, 172,
    171, 170, 168,
    170, 169, 168,
    167, 166, 164,
    166, 165, 164,
    163, 162, 160,
    162, 161, 160,
    159, 158, 156,
    158, 157, 156,
    155, 154, 152,
    154, 153, 152,
    151, 150, 148,
    150, 149, 148,
    147, 146, 144,
    146, 145, 144,
    143, 142, 140,
    142, 141, 140,
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
    46, 45, 41,
    45, 44, 41,
    44, 43, 41,
    43, 42, 41,
    47, 46, 41,
    48, 47, 41,
    50, 49, 48,
    32, 31, 30,
    34, 33, 32,
    35, 34, 32,
    36, 35, 32,
    37, 36, 32,
    38, 37, 32,
    50, 48, 39,
    48, 41, 39,
    39, 32, 30,
    41, 40, 39,
    39, 38, 32,
    29, 28, 23,
    28, 27, 23,
    27, 26, 23,
    26, 25, 23,
    25, 24, 23,
    23, 22, 19,
    22, 21, 19,
    21, 20, 19,
    39, 30, 18,
    30, 29, 18,
    29, 23, 18,
    23, 19, 18,
    16, 15, 14,
    18, 17, 39,
    17, 16, 14,
    9, 8, 6,
    8, 7, 6,
    10, 9, 6,
    11, 10, 6,
    12, 11, 6,
    17, 5, 39,
    17, 14, 5,
    14, 13, 5,
    13, 12, 5,
    12, 6, 5,
    5, 4, 1,
    4, 3, 1,
    3, 2, 1,
    5, 51, 39,
    51, 50, 39,
    5, 1, 51,
    1, 0, 51
]);