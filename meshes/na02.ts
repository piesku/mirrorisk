import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_na02(gl: WebGLRenderingContext): Mesh {
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
    85.799, 0.999795, -56.3285,
    84.1921, 0.999796, -44.8286,
    101.426, 0.999796, -44.8754,
    103.197, 0.999796, -46.3521,
    104.637, 0.999796, -46.6228,
    105.442, 0.999795, -47.8488,
    105.342, 0.999795, -48.8611,
    107.381, 0.999795, -50.9397,
    106.927, 0.999795, -53.0507,
    108.922, 0.999795, -53.0507,
    110.004, 0.999795, -54.3018,
    111.435, 0.999795, -55.7247,
    113.183, 0.999795, -55.3386,
    115.146, 0.999796, -56.3166,
    103.197, -0.000204, -46.3521,
    104.637, -0.000204, -46.6228,
    104.637, 0.999796, -46.6228,
    103.197, 0.999796, -46.3521,
    111.435, -0.000205, -55.7247,
    113.183, -0.000205, -55.3386,
    113.183, 0.999795, -55.3386,
    111.435, 0.999795, -55.7247,
    101.426, -0.000204, -44.8754,
    103.197, -0.000204, -46.3521,
    103.197, 0.999796, -46.3521,
    101.426, 0.999796, -44.8754,
    113.183, -0.000205, -55.3386,
    115.146, -0.000204, -56.3166,
    115.146, 0.999796, -56.3166,
    113.183, 0.999795, -55.3386,
    84.1921, -0.000204, -44.8286,
    101.426, -0.000204, -44.8754,
    101.426, 0.999796, -44.8754,
    84.1921, 0.999796, -44.8286,
    107.381, -0.000205, -50.9397,
    106.927, -0.000205, -53.0507,
    106.927, 0.999795, -53.0507,
    107.381, 0.999795, -50.9397,
    115.146, -0.000204, -56.3166,
    85.799, -0.000205, -56.3285,
    85.799, 0.999795, -56.3285,
    115.146, 0.999796, -56.3166,
    85.799, -0.000205, -56.3285,
    84.1921, -0.000204, -44.8286,
    84.1921, 0.999796, -44.8286,
    85.799, 0.999795, -56.3285,
    105.342, -0.000205, -48.8611,
    107.381, -0.000205, -50.9397,
    107.381, 0.999795, -50.9397,
    105.342, 0.999795, -48.8611,
    105.442, -0.000205, -47.8488,
    105.342, -0.000205, -48.8611,
    105.342, 0.999795, -48.8611,
    105.442, 0.999795, -47.8488,
    110.004, -0.000205, -54.3018,
    111.435, -0.000205, -55.7247,
    111.435, 0.999795, -55.7247,
    110.004, 0.999795, -54.3018,
    104.637, -0.000204, -46.6228,
    105.442, -0.000205, -47.8488,
    105.442, 0.999795, -47.8488,
    104.637, 0.999796, -46.6228,
    106.927, -0.000205, -53.0507,
    108.922, -0.000205, -53.0507,
    108.922, 0.999795, -53.0507,
    106.927, 0.999795, -53.0507,
    108.922, -0.000205, -53.0507,
    110.004, -0.000205, -54.3018,
    110.004, 0.999795, -54.3018,
    108.922, 0.999795, -53.0507
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
    0.1847, 0, 0.9828,
    0.1847, 0, 0.9828,
    0.1847, 0, 0.9828,
    0.1847, 0, 0.9828,
    -0.2157, 0, 0.9765,
    -0.2157, 0, 0.9765,
    -0.2157, 0, 0.9765,
    -0.2157, 0, 0.9765,
    0.6402, 0, 0.7682,
    0.6402, 0, 0.7682,
    0.6402, 0, 0.7682,
    0.6402, 0, 0.7682,
    0.446, 0, 0.895,
    0.446, 0, 0.895,
    0.446, 0, 0.895,
    0.446, 0, 0.895,
    0.0027, 0, 1,
    0.0027, 0, 1,
    0.0027, 0, 1,
    0.0027, 0, 1,
    0.9776, 0, -0.2104,
    0.9776, 0, -0.2104,
    0.9776, 0, -0.2104,
    0.9776, 0, -0.2104,
    0.0004, 0, -1,
    0.0004, 0, -1,
    0.0004, 0, -1,
    0.0004, 0, -1,
    -0.9904, 0, -0.1384,
    -0.9904, 0, -0.1384,
    -0.9904, 0, -0.1384,
    -0.9904, 0, -0.1384,
    0.7139, 0, 0.7003,
    0.7139, 0, 0.7003,
    0.7139, 0, 0.7003,
    0.7139, 0, 0.7003,
    0.9952, 0, -0.0982,
    0.9952, 0, -0.0982,
    0.9952, 0, -0.0982,
    0.9952, 0, -0.0982,
    0.7052, 0, 0.709,
    0.7052, 0, 0.709,
    0.7052, 0, 0.709,
    0.7052, 0, 0.709,
    0.836, 0, 0.5488,
    0.836, 0, 0.5488,
    0.836, 0, 0.5488,
    0.836, 0, 0.5488,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0.7561, 0, 0.6545,
    0.7561, 0, 0.6545,
    0.7561, 0, 0.6545,
    0.7561, 0, 0.6545
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.520078, 0.39577,
    0.463156, 0.309168,
    0.60232, 0.243664,
    0.622256, 0.2488,
    0.634905, 0.245477,
    0.646082, 0.252289,
    0.649146, 0.260834,
    0.673536, 0.269803,
    0.677942, 0.288565,
    0.694028, 0.28094,
    0.707545, 0.28689,
    0.724522, 0.292897,
    0.737142, 0.283101,
    0.756712, 0.283485,
    0.55304, 0.012015,
    0.574688, 0.012015,
    0.574688, 0.027047,
    0.55304, 0.027047,
    0.67687, 0.012015,
    0.703144, 0.012015,
    0.703144, 0.027047,
    0.67687, 0.027047,
    0.526405, 0.012015,
    0.55304, 0.012015,
    0.55304, 0.027047,
    0.526405, 0.027047,
    0.703144, 0.012015,
    0.732651, 0.012015,
    0.732651, 0.027047,
    0.703144, 0.027047,
    0.267349, 0.012015,
    0.526405, 0.012015,
    0.526405, 0.027047,
    0.267349, 0.027047,
    0.505429, 0.012015,
    0.537162, 0.012015,
    0.537162, 0.027047,
    0.505429, 0.027047,
    0.732651, 0.012015,
    0.291503, 0.012015,
    0.291503, 0.027047,
    0.732651, 0.027047,
    0.586434, 0.012015,
    0.413566, 0.012015,
    0.413566, 0.027047,
    0.586434, 0.027047,
    0.474183, 0.012015,
    0.505429, 0.012015,
    0.505429, 0.027047,
    0.474183, 0.027047,
    0.458966, 0.012015,
    0.474183, 0.012015,
    0.474183, 0.027047,
    0.458966, 0.027047,
    0.655365, 0.012015,
    0.67687, 0.012015,
    0.67687, 0.027047,
    0.655365, 0.027047,
    0.440537, 0.012015,
    0.458966, 0.012015,
    0.458966, 0.027047,
    0.440537, 0.027047,
    0.609103, 0.012015,
    0.639086, 0.012015,
    0.639086, 0.027047,
    0.609103, 0.027047,
    0.537162, 0.012015,
    0.555969, 0.012015,
    0.555969, 0.027047,
    0.537162, 0.027047
]);

// prettier-ignore
let index_arr = Uint16Array.from([
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
    21, 20, 18,
    20, 19, 18,
    17, 16, 14,
    16, 15, 14,
    13, 12, 11,
    13, 11, 0,
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
