import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_af02(gl: WebGLRenderingContext): Mesh {
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
    -31.3663, 0.999795, -18.8382,
    -31.7399, 0.999795, -18.1069,
    -32.0073, 0.999795, -16.0418,
    -32.9124, 0.999795, -15.3105,
    -33.8181, 0.999795, -13.0348,
    -36.9208, 0.999795, -10.5484,
    -37.6134, 0.999795, -8.97462,
    -43.3741, 0.999795, -10.2092,
    -43.3938, 0.999795, -8.81092,
    -40.8256, 0.999795, -4.04285,
    -36.4145, 0.999795, -0.363018,
    -33.5274, 0.999795, 3.44424,
    -34.4185, 0.999795, 8.25443,
    -29.7876, 0.999795, 9.08397,
    -29.4645, 0.999795, 9.62005,
    -29.64, 0.999795, 10.7204,
    -30.684, 0.999795, 11.863,
    -30.5609, 0.999795, 12.9494,
    -30.1377, 0.999795, 13.3725,
    -29.3448, 0.999795, 12.8506,
    -29.5041, 0.999795, 11.7646,
    -28.0256, 0.999795, 10.8438,
    -28.7446, 0.999795, 8.27306,
    -28.2373, 0.999795, 7.33483,
    -26.4899, 0.999795, 6.57306,
    -24.9492, 0.999795, 1.60232,
    -25.5925, 0.999795, -0.61602,
    -26.7455, 0.999795, -1.97688,
    -26.4106, 0.999795, -3.12715,
    -23.5235, 0.999795, -4.61439,
    -20.4664, 0.999795, -7.57595,
    -19.8617, 0.999795, -9.37906,
    -18.9672, 0.999795, -10.9828,
    -20.7545, 0.999795, -13.4341,
    -20.7848, 0.999795, -16.687,
    -20.7867, 0.999795, -17.1293,
    -21.6227, 0.999795, -17.1131,
    -21.6714, 0.999795, -18.9613,
    -19.8617, -0.000205, -9.37906,
    -18.9672, -0.000205, -10.9828,
    -18.9672, 0.999795, -10.9828,
    -19.8617, 0.999795, -9.37906,
    -28.7446, -0.000205, 8.27306,
    -28.2373, -0.000205, 7.33483,
    -28.2373, 0.999795, 7.33483,
    -28.7446, 0.999795, 8.27306,
    -34.4185, -0.000205, 8.25443,
    -29.7876, -0.000205, 9.08397,
    -29.7876, 0.999795, 9.08397,
    -34.4185, 0.999795, 8.25443,
    -18.9672, -0.000205, -10.9828,
    -20.7545, -0.000205, -13.4341,
    -20.7545, 0.999795, -13.4341,
    -18.9672, 0.999795, -10.9828,
    -28.0256, -0.000205, 10.8438,
    -28.7446, -0.000205, 8.27306,
    -28.7446, 0.999795, 8.27306,
    -28.0256, 0.999795, 10.8438,
    -33.5274, -0.000205, 3.44424,
    -34.4185, -0.000205, 8.25443,
    -34.4185, 0.999795, 8.25443,
    -33.5274, 0.999795, 3.44424,
    -20.7848, -0.000205, -16.687,
    -20.7867, -0.000205, -17.1293,
    -20.7867, 0.999795, -17.1293,
    -20.7848, 0.999795, -16.687,
    -29.5041, -0.000205, 11.7646,
    -28.0256, -0.000205, 10.8438,
    -28.0256, 0.999795, 10.8438,
    -29.5041, 0.999795, 11.7646,
    -36.4145, -0.000205, -0.363018,
    -33.5274, -0.000205, 3.44424,
    -33.5274, 0.999795, 3.44424,
    -36.4145, 0.999795, -0.363018,
    -20.7867, -0.000205, -17.1293,
    -21.6227, -0.000205, -17.1131,
    -21.6227, 0.999795, -17.1131,
    -20.7867, 0.999795, -17.1293,
    -29.3448, -0.000205, 12.8506,
    -29.5041, -0.000205, 11.7646,
    -29.5041, 0.999795, 11.7646,
    -29.3448, 0.999795, 12.8506,
    -40.8256, -0.000205, -4.04285,
    -36.4145, -0.000205, -0.363018,
    -36.4145, 0.999795, -0.363018,
    -40.8256, 0.999795, -4.04285,
    -21.6227, -0.000205, -17.1131,
    -21.6714, -0.000205, -18.9613,
    -21.6714, 0.999795, -18.9613,
    -21.6227, 0.999795, -17.1131,
    -30.1377, -0.000205, 13.3725,
    -29.3448, -0.000205, 12.8506,
    -29.3448, 0.999795, 12.8506,
    -30.1377, 0.999795, 13.3725,
    -43.3938, -0.000205, -8.81092,
    -40.8256, -0.000205, -4.04285,
    -40.8256, 0.999795, -4.04285,
    -43.3938, 0.999795, -8.81092,
    -21.6714, -0.000205, -18.9613,
    -31.3663, -0.000205, -18.8382,
    -31.3663, 0.999795, -18.8382,
    -21.6714, 0.999795, -18.9613,
    -30.5609, -0.000205, 12.9494,
    -30.1377, -0.000205, 13.3725,
    -30.1377, 0.999795, 13.3725,
    -30.5609, 0.999795, 12.9494,
    -43.3741, -0.000205, -10.2092,
    -43.3938, -0.000205, -8.81092,
    -43.3938, 0.999795, -8.81092,
    -43.3741, 0.999795, -10.2092,
    -20.4664, -0.000205, -7.57595,
    -19.8617, -0.000205, -9.37906,
    -19.8617, 0.999795, -9.37906,
    -20.4664, 0.999795, -7.57595,
    -30.684, -0.000205, 11.863,
    -30.5609, -0.000205, 12.9494,
    -30.5609, 0.999795, 12.9494,
    -30.684, 0.999795, 11.863,
    -37.6134, -0.000205, -8.97462,
    -43.3741, -0.000205, -10.2092,
    -43.3741, 0.999795, -10.2092,
    -37.6134, 0.999795, -8.97462,
    -23.5235, -0.000205, -4.61439,
    -20.4664, -0.000205, -7.57595,
    -20.4664, 0.999795, -7.57595,
    -23.5235, 0.999795, -4.61439,
    -29.64, -0.000205, 10.7204,
    -30.684, -0.000205, 11.863,
    -30.684, 0.999795, 11.863,
    -29.64, 0.999795, 10.7204,
    -36.9208, -0.000205, -10.5484,
    -37.6134, -0.000205, -8.97462,
    -37.6134, 0.999795, -8.97462,
    -36.9208, 0.999795, -10.5484,
    -26.4106, -0.000205, -3.12715,
    -23.5235, -0.000205, -4.61439,
    -23.5235, 0.999795, -4.61439,
    -26.4106, 0.999795, -3.12715,
    -29.4645, -0.000205, 9.62005,
    -29.64, -0.000205, 10.7204,
    -29.64, 0.999795, 10.7204,
    -29.4645, 0.999795, 9.62005,
    -33.8181, -0.000205, -13.0348,
    -36.9208, -0.000205, -10.5484,
    -36.9208, 0.999795, -10.5484,
    -33.8181, 0.999795, -13.0348,
    -26.7455, -0.000205, -1.97688,
    -26.4106, -0.000205, -3.12715,
    -26.4106, 0.999795, -3.12715,
    -26.7455, 0.999795, -1.97688,
    -32.9124, -0.000205, -15.3105,
    -33.8181, -0.000205, -13.0348,
    -33.8181, 0.999795, -13.0348,
    -32.9124, 0.999795, -15.3105,
    -25.5925, -0.000205, -0.61602,
    -26.7455, -0.000205, -1.97688,
    -26.7455, 0.999795, -1.97688,
    -25.5925, 0.999795, -0.61602,
    -32.0073, -0.000205, -16.0418,
    -32.9124, -0.000205, -15.3105,
    -32.9124, 0.999795, -15.3105,
    -32.0073, 0.999795, -16.0418,
    -24.9492, -0.000205, 1.60232,
    -25.5925, -0.000205, -0.61602,
    -25.5925, 0.999795, -0.61602,
    -24.9492, 0.999795, 1.60232,
    -31.3663, -0.000205, -18.8382,
    -31.7399, -0.000205, -18.1069,
    -31.7399, 0.999795, -18.1069,
    -31.3663, 0.999795, -18.8382,
    -31.7399, -0.000205, -18.1069,
    -32.0073, -0.000205, -16.0418,
    -32.0073, 0.999795, -16.0418,
    -31.7399, 0.999795, -18.1069,
    -26.4899, -0.000205, 6.57306,
    -24.9492, -0.000205, 1.60232,
    -24.9492, 0.999795, 1.60232,
    -26.4899, 0.999795, 6.57306,
    -20.7545, -0.000205, -13.4341,
    -20.7848, -0.000205, -16.687,
    -20.7848, 0.999795, -16.687,
    -20.7545, 0.999795, -13.4341,
    -28.2373, -0.000205, 7.33483,
    -26.4899, -0.000205, 6.57306,
    -26.4899, 0.999795, 6.57306,
    -28.2373, 0.999795, 7.33483,
    -29.7876, -0.000205, 9.08397,
    -29.4645, -0.000205, 9.62005,
    -29.4645, 0.999795, 9.62005,
    -29.7876, 0.999795, 9.08397
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
    0.8734, 0, 0.4871,
    0.8734, 0, 0.4871,
    0.8734, 0, 0.4871,
    0.8734, 0, 0.4871,
    0.8797, 0, 0.4756,
    0.8797, 0, 0.4756,
    0.8797, 0, 0.4756,
    0.8797, 0, 0.4756,
    -0.1763, 0, 0.9843,
    -0.1763, 0, 0.9843,
    -0.1763, 0, 0.9843,
    -0.1763, 0, 0.9843,
    0.808, 0, -0.5892,
    0.808, 0, -0.5892,
    0.808, 0, -0.5892,
    0.808, 0, -0.5892,
    0.963, 0, -0.2693,
    0.963, 0, -0.2693,
    0.963, 0, -0.2693,
    0.963, 0, -0.2693,
    -0.9833, 0, -0.1822,
    -0.9833, 0, -0.1822,
    -0.9833, 0, -0.1822,
    -0.9833, 0, -0.1822,
    1, 0, -0.0042,
    1, 0, -0.0042,
    1, 0, -0.0042,
    1, 0, -0.0042,
    0.5287, 0, 0.8488,
    0.5287, 0, 0.8488,
    0.5287, 0, 0.8488,
    0.5287, 0, 0.8488,
    -0.7968, 0, 0.6042,
    -0.7968, 0, 0.6042,
    -0.7968, 0, 0.6042,
    -0.7968, 0, 0.6042,
    -0.0194, 0, -0.9998,
    -0.0194, 0, -0.9998,
    -0.0194, 0, -0.9998,
    -0.0194, 0, -0.9998,
    0.9894, 0, -0.1452,
    0.9894, 0, -0.1452,
    0.9894, 0, -0.1452,
    0.9894, 0, -0.1452,
    -0.6406, 0, 0.7679,
    -0.6406, 0, 0.7679,
    -0.6406, 0, 0.7679,
    -0.6406, 0, 0.7679,
    0.9997, 0, -0.0263,
    0.9997, 0, -0.0263,
    0.9997, 0, -0.0263,
    0.9997, 0, -0.0263,
    0.5498, 0, 0.8353,
    0.5498, 0, 0.8353,
    0.5498, 0, 0.8353,
    0.5498, 0, 0.8353,
    -0.8804, 0, 0.4742,
    -0.8804, 0, 0.4742,
    -0.8804, 0, 0.4742,
    -0.8804, 0, 0.4742,
    -0.0127, 0, -0.9999,
    -0.0127, 0, -0.9999,
    -0.0127, 0, -0.9999,
    -0.0127, 0, -0.9999,
    -0.7071, 0, 0.7071,
    -0.7071, 0, 0.7071,
    -0.7071, 0, 0.7071,
    -0.7071, 0, 0.7071,
    -0.9999, 0, -0.0141,
    -0.9999, 0, -0.0141,
    -0.9999, 0, -0.0141,
    -0.9999, 0, -0.0141,
    0.9481, 0, 0.3179,
    0.9481, 0, 0.3179,
    0.9481, 0, 0.3179,
    0.9481, 0, 0.3179,
    -0.9936, 0, 0.1126,
    -0.9936, 0, 0.1126,
    -0.9936, 0, 0.1126,
    -0.9936, 0, 0.1126,
    0.2095, 0, -0.9778,
    0.2095, 0, -0.9778,
    0.2095, 0, -0.9778,
    0.2095, 0, -0.9778,
    0.6958, 0, 0.7182,
    0.6958, 0, 0.7182,
    0.6958, 0, 0.7182,
    0.6958, 0, 0.7182,
    -0.7382, 0, -0.6746,
    -0.7382, 0, -0.6746,
    -0.7382, 0, -0.6746,
    -0.7382, 0, -0.6746,
    -0.9153, 0, -0.4028,
    -0.9153, 0, -0.4028,
    -0.9153, 0, -0.4028,
    -0.9153, 0, -0.4028,
    0.4579, 0, 0.889,
    0.4579, 0, 0.889,
    0.4579, 0, 0.889,
    0.4579, 0, 0.889,
    -0.9875, 0, -0.1574,
    -0.9875, 0, -0.1574,
    -0.9875, 0, -0.1574,
    -0.9875, 0, -0.1574,
    -0.6254, 0, -0.7803,
    -0.6254, 0, -0.7803,
    -0.6254, 0, -0.7803,
    -0.6254, 0, -0.7803,
    0.9601, 0, 0.2796,
    0.9601, 0, 0.2796,
    0.9601, 0, 0.2796,
    0.9601, 0, 0.2796,
    -0.9291, 0, -0.3698,
    -0.9291, 0, -0.3698,
    -0.9291, 0, -0.3698,
    -0.9291, 0, -0.3698,
    0.763, 0, -0.6464,
    0.763, 0, -0.6464,
    0.763, 0, -0.6464,
    0.763, 0, -0.6464,
    -0.6284, 0, -0.7779,
    -0.6284, 0, -0.7779,
    -0.6284, 0, -0.7779,
    -0.6284, 0, -0.7779,
    0.9604, 0, -0.2785,
    0.9604, 0, -0.2785,
    0.9604, 0, -0.2785,
    0.9604, 0, -0.2785,
    -0.8905, 0, -0.455,
    -0.8905, 0, -0.455,
    -0.8905, 0, -0.455,
    -0.8905, 0, -0.455,
    -0.9917, 0, -0.1284,
    -0.9917, 0, -0.1284,
    -0.9917, 0, -0.1284,
    -0.9917, 0, -0.1284,
    0.9552, 0, 0.2961,
    0.9552, 0, 0.2961,
    0.9552, 0, 0.2961,
    0.9552, 0, 0.2961,
    1, 0, -0.0093,
    1, 0, -0.0093,
    1, 0, -0.0093,
    1, 0, -0.0093,
    0.3996, 0, 0.9167,
    0.3996, 0, 0.9167,
    0.3996, 0, 0.9167,
    0.3996, 0, 0.9167,
    -0.8565, 0, 0.5162,
    -0.8565, 0, 0.5162,
    -0.8565, 0, 0.5162,
    -0.8565, 0, 0.5162
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.294283, 0.260414,
    0.290103, 0.26139,
    0.279291, 0.260149,
    0.274443, 0.263821,
    0.261759, 0.265553,
    0.245244, 0.278165,
    0.23639, 0.279699,
    0.235407, 0.310475,
    0.228289, 0.308816,
    0.207332, 0.289792,
    0.194213, 0.262787,
    0.17853, 0.243353,
    0.153008, 0.241824,
    0.154624, 0.217289,
    0.152311, 0.214976,
    0.146509, 0.214482,
    0.139399, 0.218341,
    0.134043, 0.21635,
    0.132429, 0.213671,
    0.136074, 0.210305,
    0.141382, 0.212479,
    0.147913, 0.206137,
    0.16005, 0.213017,
    0.165447, 0.211624,
    0.171509, 0.203718,
    0.198663, 0.202154,
    0.209107, 0.208207,
    0.21456, 0.215768,
    0.220816, 0.215515,
    0.231992, 0.20274,
    0.25086, 0.190957,
    0.260767, 0.190157,
    0.270028, 0.187637,
    0.280215, 0.199786,
    0.296678, 0.204031,
    0.29892, 0.204597,
    0.297786, 0.208817,
    0.3071, 0.211389,
    0.260767, 0.190157,
    0.270028, 0.187637,
    0.270028, 0.187637,
    0.260767, 0.190157,
    0.16005, 0.213017,
    0.165447, 0.211624,
    0.165447, 0.211624,
    0.16005, 0.213017,
    0.153008, 0.241824,
    0.154624, 0.217289,
    0.154624, 0.217289,
    0.153008, 0.241824,
    0.270028, 0.187637,
    0.280215, 0.199786,
    0.280215, 0.199786,
    0.270028, 0.187637,
    0.147913, 0.206137,
    0.16005, 0.213017,
    0.16005, 0.213017,
    0.147913, 0.206137,
    0.17853, 0.243353,
    0.153008, 0.241824,
    0.153008, 0.241824,
    0.17853, 0.243353,
    0.296678, 0.204031,
    0.29892, 0.204597,
    0.29892, 0.204597,
    0.296678, 0.204031,
    0.141382, 0.212479,
    0.147913, 0.206137,
    0.147913, 0.206137,
    0.141382, 0.212479,
    0.194213, 0.262787,
    0.17853, 0.243353,
    0.17853, 0.243353,
    0.194213, 0.262787,
    0.29892, 0.204597,
    0.297786, 0.208817,
    0.297786, 0.208817,
    0.29892, 0.204597,
    0.136074, 0.210305,
    0.141382, 0.212479,
    0.141382, 0.212479,
    0.136074, 0.210305,
    0.207332, 0.289792,
    0.194213, 0.262787,
    0.194213, 0.262787,
    0.207332, 0.289792,
    0.297786, 0.208817,
    0.3071, 0.211389,
    0.3071, 0.211389,
    0.297786, 0.208817,
    0.132429, 0.213671,
    0.136074, 0.210305,
    0.136074, 0.210305,
    0.132429, 0.213671,
    0.228289, 0.308816,
    0.207332, 0.289792,
    0.207332, 0.289792,
    0.228289, 0.308816,
    0.3071, 0.211389,
    0.294283, 0.260414,
    0.294283, 0.260414,
    0.3071, 0.211389,
    0.134043, 0.21635,
    0.132429, 0.213671,
    0.132429, 0.213671,
    0.134043, 0.21635,
    0.235407, 0.310475,
    0.228289, 0.308816,
    0.228289, 0.308816,
    0.235407, 0.310475,
    0.25086, 0.190957,
    0.260767, 0.190157,
    0.260767, 0.190157,
    0.25086, 0.190957,
    0.139399, 0.218341,
    0.134043, 0.21635,
    0.134043, 0.21635,
    0.139399, 0.218341,
    0.23639, 0.279699,
    0.235407, 0.310475,
    0.235407, 0.310475,
    0.23639, 0.279699,
    0.231992, 0.20274,
    0.25086, 0.190957,
    0.25086, 0.190957,
    0.231992, 0.20274,
    0.146509, 0.214482,
    0.139399, 0.218341,
    0.139399, 0.218341,
    0.146509, 0.214482,
    0.245244, 0.278165,
    0.23639, 0.279699,
    0.23639, 0.279699,
    0.245244, 0.278165,
    0.220816, 0.215515,
    0.231992, 0.20274,
    0.231992, 0.20274,
    0.220816, 0.215515,
    0.152311, 0.214976,
    0.146509, 0.214482,
    0.146509, 0.214482,
    0.152311, 0.214976,
    0.261759, 0.265553,
    0.245244, 0.278165,
    0.245244, 0.278165,
    0.261759, 0.265553,
    0.21456, 0.215768,
    0.220816, 0.215515,
    0.220816, 0.215515,
    0.21456, 0.215768,
    0.274443, 0.263821,
    0.261759, 0.265553,
    0.261759, 0.265553,
    0.274443, 0.263821,
    0.209107, 0.208207,
    0.21456, 0.215768,
    0.21456, 0.215768,
    0.209107, 0.208207,
    0.279291, 0.260149,
    0.274443, 0.263821,
    0.274443, 0.263821,
    0.279291, 0.260149,
    0.198663, 0.202154,
    0.209107, 0.208207,
    0.209107, 0.208207,
    0.198663, 0.202154,
    0.294283, 0.260414,
    0.290103, 0.26139,
    0.290103, 0.26139,
    0.294283, 0.260414,
    0.290103, 0.26139,
    0.279291, 0.260149,
    0.279291, 0.260149,
    0.290103, 0.26139,
    0.171509, 0.203718,
    0.198663, 0.202154,
    0.198663, 0.202154,
    0.171509, 0.203718,
    0.280215, 0.199786,
    0.296678, 0.204031,
    0.296678, 0.204031,
    0.280215, 0.199786,
    0.165447, 0.211624,
    0.171509, 0.203718,
    0.171509, 0.203718,
    0.165447, 0.211624,
    0.154624, 0.217289,
    0.152311, 0.214976,
    0.152311, 0.214976,
    0.154624, 0.217289
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    189, 188, 186,
    188, 187, 186,
    185, 184, 182,
    184, 183, 182,
    181, 180, 178,
    180, 179, 178,
    177, 176, 174,
    176, 175, 174,
    173, 172, 170,
    172, 171, 170,
    169, 168, 166,
    168, 167, 166,
    165, 164, 162,
    164, 163, 162,
    161, 160, 158,
    160, 159, 158,
    157, 156, 154,
    156, 155, 154,
    153, 152, 150,
    152, 151, 150,
    149, 148, 146,
    148, 147, 146,
    145, 144, 142,
    144, 143, 142,
    141, 140, 138,
    140, 139, 138,
    137, 136, 134,
    136, 135, 134,
    133, 132, 130,
    132, 131, 130,
    129, 128, 126,
    128, 127, 126,
    125, 124, 122,
    124, 123, 122,
    121, 120, 118,
    120, 119, 118,
    117, 116, 114,
    116, 115, 114,
    113, 112, 110,
    112, 111, 110,
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
    26, 25, 23,
    25, 24, 23,
    27, 26, 23,
    27, 23, 22,
    22, 21, 20,
    20, 19, 18,
    27, 22, 15,
    22, 20, 15,
    20, 18, 15,
    18, 17, 15,
    17, 16, 15,
    15, 14, 27,
    14, 13, 27,
    9, 8, 6,
    8, 7, 6,
    10, 9, 6,
    13, 11, 27,
    13, 12, 11,
    11, 10, 6,
    11, 28, 27,
    11, 6, 28,
    30, 29, 28,
    31, 30, 28,
    32, 31, 28,
    33, 32, 28,
    34, 33, 28,
    35, 34, 28,
    36, 35, 28,
    6, 37, 28,
    37, 36, 28,
    6, 5, 37,
    5, 4, 37,
    4, 3, 37,
    3, 2, 37,
    2, 1, 37,
    1, 0, 37
]);
