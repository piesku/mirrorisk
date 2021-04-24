import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_as02(gl: WebGLRenderingContext): Mesh {
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
    -101.846, 0.999795, -21.9294,
    -102.353, 0.999795, -21.4191,
    -101.327, 0.999795, -18.901,
    -100.742, 0.999795, -20.2409,
    -92.2637, 0.999795, -17.2165,
    -93.1779, 0.999795, -16.9427,
    -92.074, 0.999795, -15.5914,
    -91.186, 0.999795, -16.3319,
    -66.0493, 0.999796, -35.882,
    -67.7177, 0.999796, -37.0879,
    -69.8243, 0.999796, -40.3376,
    -70.0466, 0.999796, -41.9935,
    -72.2949, 0.999796, -42.2172,
    -72.3617, 0.999796, -43.4744,
    -73.3939, 0.999796, -44.586,
    -74.4259, 0.999796, -44.6154,
    -75.4953, 0.999796, -43.1621,
    -76.2493, 0.999796, -40.2391,
    -80.1026, 0.999796, -39.1967,
    -80.9143, 0.999796, -37.5626,
    -88.0922, 0.999796, -36.3589,
    -94.2333, 0.999796, -38.541,
    -94.3933, 0.999796, -39.9878,
    -96.7341, 0.999796, -40.2899,
    -100.356, 0.999796, -34.8288,
    -98.6178, 0.999795, -33.5535,
    -100.366, 0.999795, -32.2436,
    -102.829, 0.999795, -32.4527,
    -100.204, 0.999795, -30.0726,
    -102.178, 0.999795, -27.2437,
    -101.89, 0.999795, -24.7588,
    -99.1888, 0.999795, -20.8404,
    -93.1326, 0.999795, -18.3409,
    -92.5052, 0.999795, -17.5216,
    -92.2243, 0.999795, -18.4134,
    -90.6912, 0.999795, -18.5785,
    -88.4044, 0.999795, -20.3746,
    -85.1907, 0.999795, -19.6098,
    -85.2185, 0.999795, -18.5541,
    -83.711, 0.999795, -19.2716,
    -83.312, 0.999795, -20.8922,
    -82.4596, 0.999795, -20.9856,
    -83.1435, 0.999795, -22.3155,
    -83.0338, 0.999795, -24.0472,
    -82.0604, 0.999795, -24.702,
    -80.8184, 0.999795, -25.9429,
    -78.7496, 0.999795, -25.5848,
    -77.0809, 0.999795, -24.4908,
    -75.6626, 0.999795, -25.0415,
    -72.6196, 0.999795, -24.7153,
    -68.4785, 0.999795, -26.6707,
    -66.8111, 0.999795, -27.104,
    -66.9862, 0.999795, -28.4319,
    -66.0119, 0.999795, -30.7218,
    -64.2739, 0.999795, -31.328,
    -63.5089, 0.999795, -32.6555,
    -62.5261, 0.999796, -34.2873,
    -64.5151, 0.999796, -35.1724,
    -64.8776, 0.999796, -35.6403,
    -92.5052, -0.000205, -17.5216,
    -92.2243, -0.000205, -18.4134,
    -92.2243, 0.999795, -18.4134,
    -92.5052, 0.999795, -17.5216,
    -75.6626, -0.000205, -25.0415,
    -72.6196, -0.000205, -24.7153,
    -72.6196, 0.999795, -24.7153,
    -75.6626, 0.999795, -25.0415,
    -100.742, -0.000205, -20.2409,
    -101.846, -0.000205, -21.9294,
    -101.846, 0.999795, -21.9294,
    -100.742, 0.999795, -20.2409,
    -72.6196, -0.000205, -24.7153,
    -68.4785, -0.000205, -26.6707,
    -68.4785, 0.999795, -26.6707,
    -72.6196, 0.999795, -24.7153,
    -85.1907, -0.000205, -19.6098,
    -85.2185, -0.000205, -18.5541,
    -85.2185, 0.999795, -18.5541,
    -85.1907, 0.999795, -19.6098,
    -85.2185, -0.000205, -18.5541,
    -83.711, -0.000205, -19.2716,
    -83.711, 0.999795, -19.2716,
    -85.2185, 0.999795, -18.5541,
    -83.711, -0.000205, -19.2716,
    -83.312, -0.000205, -20.8922,
    -83.312, 0.999795, -20.8922,
    -83.711, 0.999795, -19.2716,
    -72.3617, -0.000204, -43.4744,
    -73.3939, -0.000204, -44.586,
    -73.3939, 0.999796, -44.586,
    -72.3617, 0.999796, -43.4744,
    -83.312, -0.000205, -20.8922,
    -82.4596, -0.000205, -20.9856,
    -82.4596, 0.999795, -20.9856,
    -83.312, 0.999795, -20.8922,
    -75.4953, -0.000204, -43.1621,
    -76.2493, -0.000204, -40.2391,
    -76.2493, 0.999796, -40.2391,
    -75.4953, 0.999796, -43.1621,
    -82.4596, -0.000205, -20.9856,
    -83.1435, -0.000205, -22.3155,
    -83.1435, 0.999795, -22.3155,
    -82.4596, 0.999795, -20.9856,
    -76.2493, -0.000204, -40.2391,
    -80.1026, -0.000204, -39.1967,
    -80.1026, 0.999796, -39.1967,
    -76.2493, 0.999796, -40.2391,
    -91.186, -0.000205, -16.3319,
    -92.2637, -0.000205, -17.2165,
    -92.2637, 0.999795, -17.2165,
    -91.186, 0.999795, -16.3319,
    -80.1026, -0.000204, -39.1967,
    -80.9143, -0.000204, -37.5626,
    -80.9143, 0.999796, -37.5626,
    -80.1026, 0.999796, -39.1967,
    -102.353, -0.000205, -21.4191,
    -101.327, -0.000205, -18.901,
    -101.327, 0.999795, -18.901,
    -102.353, 0.999795, -21.4191,
    -80.9143, -0.000204, -37.5626,
    -88.0922, -0.000204, -36.3589,
    -88.0922, 0.999796, -36.3589,
    -80.9143, 0.999796, -37.5626,
    -101.846, -0.000205, -21.9294,
    -102.353, -0.000205, -21.4191,
    -102.353, 0.999795, -21.4191,
    -101.846, 0.999795, -21.9294,
    -88.0922, -0.000204, -36.3589,
    -94.2333, -0.000204, -38.541,
    -94.2333, 0.999796, -38.541,
    -88.0922, 0.999796, -36.3589,
    -66.0493, -0.000204, -35.882,
    -67.7177, -0.000204, -37.0879,
    -67.7177, 0.999796, -37.0879,
    -66.0493, 0.999796, -35.882,
    -101.327, -0.000205, -18.901,
    -100.742, -0.000205, -20.2409,
    -100.742, 0.999795, -20.2409,
    -101.327, 0.999795, -18.901,
    -94.2333, -0.000204, -38.541,
    -94.3933, -0.000204, -39.9878,
    -94.3933, 0.999796, -39.9878,
    -94.2333, 0.999796, -38.541,
    -92.074, -0.000205, -15.5914,
    -91.186, -0.000205, -16.3319,
    -91.186, 0.999795, -16.3319,
    -92.074, 0.999795, -15.5914,
    -94.3933, -0.000204, -39.9878,
    -96.7341, -0.000204, -40.2899,
    -96.7341, 0.999796, -40.2899,
    -94.3933, 0.999796, -39.9878,
    -92.2637, -0.000205, -17.2165,
    -93.1779, -0.000205, -16.9427,
    -93.1779, 0.999795, -16.9427,
    -92.2637, 0.999795, -17.2165,
    -96.7341, -0.000204, -40.2899,
    -100.356, -0.000204, -34.8288,
    -100.356, 0.999796, -34.8288,
    -96.7341, 0.999796, -40.2899,
    -64.5151, -0.000204, -35.1724,
    -64.8776, -0.000204, -35.6403,
    -64.8776, 0.999796, -35.6403,
    -64.5151, 0.999796, -35.1724,
    -93.1779, -0.000205, -16.9427,
    -92.074, -0.000205, -15.5914,
    -92.074, 0.999795, -15.5914,
    -93.1779, 0.999795, -16.9427,
    -100.356, -0.000204, -34.8288,
    -98.6178, -0.000205, -33.5535,
    -98.6178, 0.999795, -33.5535,
    -100.356, 0.999796, -34.8288,
    -64.8776, -0.000204, -35.6403,
    -66.0493, -0.000204, -35.882,
    -66.0493, 0.999796, -35.882,
    -64.8776, 0.999796, -35.6403,
    -73.3939, -0.000204, -44.586,
    -74.4259, -0.000204, -44.6154,
    -74.4259, 0.999796, -44.6154,
    -73.3939, 0.999796, -44.586,
    -98.6178, -0.000205, -33.5535,
    -100.366, -0.000205, -32.2436,
    -100.366, 0.999795, -32.2436,
    -98.6178, 0.999795, -33.5535,
    -74.4259, -0.000204, -44.6154,
    -75.4953, -0.000204, -43.1621,
    -75.4953, 0.999796, -43.1621,
    -74.4259, 0.999796, -44.6154,
    -100.366, -0.000205, -32.2436,
    -102.829, -0.000205, -32.4527,
    -102.829, 0.999795, -32.4527,
    -100.366, 0.999795, -32.2436,
    -69.8243, -0.000204, -40.3376,
    -70.0466, -0.000204, -41.9935,
    -70.0466, 0.999796, -41.9935,
    -69.8243, 0.999796, -40.3376,
    -102.829, -0.000205, -32.4527,
    -100.204, -0.000205, -30.0726,
    -100.204, 0.999795, -30.0726,
    -102.829, 0.999795, -32.4527,
    -70.0466, -0.000204, -41.9935,
    -72.2949, -0.000204, -42.2172,
    -72.2949, 0.999796, -42.2172,
    -70.0466, 0.999796, -41.9935,
    -100.204, -0.000205, -30.0726,
    -102.178, -0.000205, -27.2437,
    -102.178, 0.999795, -27.2437,
    -100.204, 0.999795, -30.0726,
    -72.2949, -0.000204, -42.2172,
    -72.3617, -0.000204, -43.4744,
    -72.3617, 0.999796, -43.4744,
    -72.2949, 0.999796, -42.2172,
    -102.178, -0.000205, -27.2437,
    -101.89, -0.000205, -24.7588,
    -101.89, 0.999795, -24.7588,
    -102.178, 0.999795, -27.2437,
    -101.89, -0.000205, -24.7588,
    -99.1888, -0.000205, -20.8404,
    -99.1888, 0.999795, -20.8404,
    -101.89, 0.999795, -24.7588,
    -82.0604, -0.000205, -24.702,
    -80.8184, -0.000205, -25.9429,
    -80.8184, 0.999795, -25.9429,
    -82.0604, 0.999795, -24.702,
    -80.8184, -0.000205, -25.9429,
    -78.7496, -0.000205, -25.5848,
    -78.7496, 0.999795, -25.5848,
    -80.8184, 0.999795, -25.9429,
    -93.1326, -0.000205, -18.3409,
    -92.5052, -0.000205, -17.5216,
    -92.5052, 0.999795, -17.5216,
    -93.1326, 0.999795, -18.3409,
    -78.7496, -0.000205, -25.5848,
    -77.0809, -0.000205, -24.4908,
    -77.0809, 0.999795, -24.4908,
    -78.7496, 0.999795, -25.5848,
    -83.1435, -0.000205, -22.3155,
    -83.0338, -0.000205, -24.0472,
    -83.0338, 0.999795, -24.0472,
    -83.1435, 0.999795, -22.3155,
    -77.0809, -0.000205, -24.4908,
    -75.6626, -0.000205, -25.0415,
    -75.6626, 0.999795, -25.0415,
    -77.0809, 0.999795, -24.4908,
    -92.2243, -0.000205, -18.4134,
    -90.6912, -0.000205, -18.5785,
    -90.6912, 0.999795, -18.5785,
    -92.2243, 0.999795, -18.4134,
    -68.4785, -0.000205, -26.6707,
    -66.8111, -0.000205, -27.104,
    -66.8111, 0.999795, -27.104,
    -68.4785, 0.999795, -26.6707,
    -90.6912, -0.000205, -18.5785,
    -88.4044, -0.000205, -20.3746,
    -88.4044, 0.999795, -20.3746,
    -90.6912, 0.999795, -18.5785,
    -66.9862, -0.000205, -28.4319,
    -66.0119, -0.000205, -30.7218,
    -66.0119, 0.999795, -30.7218,
    -66.9862, 0.999795, -28.4319,
    -88.4044, -0.000205, -20.3746,
    -85.1907, -0.000205, -19.6098,
    -85.1907, 0.999795, -19.6098,
    -88.4044, 0.999795, -20.3746,
    -66.0119, -0.000205, -30.7218,
    -64.2739, -0.000205, -31.328,
    -64.2739, 0.999795, -31.328,
    -66.0119, 0.999795, -30.7218,
    -66.8111, -0.000205, -27.104,
    -66.9862, -0.000205, -28.4319,
    -66.9862, 0.999795, -28.4319,
    -66.8111, 0.999795, -27.104,
    -83.0338, -0.000205, -24.0472,
    -82.0604, -0.000205, -24.702,
    -82.0604, 0.999795, -24.702,
    -83.0338, 0.999795, -24.0472,
    -63.5089, -0.000205, -32.6555,
    -62.5261, -0.000204, -34.2873,
    -62.5261, 0.999796, -34.2873,
    -63.5089, 0.999795, -32.6555,
    -62.5261, -0.000204, -34.2873,
    -64.5151, -0.000204, -35.1724,
    -64.5151, 0.999796, -35.1724,
    -62.5261, 0.999796, -34.2873,
    -67.7177, -0.000204, -37.0879,
    -69.8243, -0.000204, -40.3376,
    -69.8243, 0.999796, -40.3376,
    -67.7177, 0.999796, -37.0879,
    -64.2739, -0.000205, -31.328,
    -63.5089, -0.000205, -32.6555,
    -63.5089, 0.999795, -32.6555,
    -64.2739, 0.999795, -31.328,
    -99.1888, -0.000205, -20.8404,
    -93.1326, -0.000205, -18.3409,
    -93.1326, 0.999795, -18.3409,
    -99.1888, 0.999795, -20.8404
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
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0.9538, 0, 0.3004,
    0.9538, 0, 0.3004,
    0.9538, 0, 0.3004,
    0.9538, 0, 0.3004,
    -0.1066, 0, 0.9943,
    -0.1066, 0, 0.9943,
    -0.1066, 0, 0.9943,
    -0.1066, 0, 0.9943,
    0.837, 0, -0.5472,
    0.837, 0, -0.5472,
    0.837, 0, -0.5472,
    0.837, 0, -0.5472,
    0.427, 0, 0.9043,
    0.427, 0, 0.9043,
    0.427, 0, 0.9043,
    0.427, 0, 0.9043,
    -0.9997, 0, -0.0264,
    -0.9997, 0, -0.0264,
    -0.9997, 0, -0.0264,
    -0.9997, 0, -0.0264,
    0.4298, 0, 0.9029,
    0.4298, 0, 0.9029,
    0.4298, 0, 0.9029,
    0.4298, 0, 0.9029,
    0.971, 0, 0.2391,
    0.971, 0, 0.2391,
    0.971, 0, 0.2391,
    0.971, 0, 0.2391,
    0.7328, 0, -0.6804,
    0.7328, 0, -0.6804,
    0.7328, 0, -0.6804,
    0.7328, 0, -0.6804,
    0.1089, 0, 0.9941,
    0.1089, 0, 0.9941,
    0.1089, 0, 0.9941,
    0.1089, 0, 0.9941,
    -0.9683, 0, -0.2498,
    -0.9683, 0, -0.2498,
    -0.9683, 0, -0.2498,
    -0.9683, 0, -0.2498,
    0.8893, 0, -0.4573,
    0.8893, 0, -0.4573,
    0.8893, 0, -0.4573,
    0.8893, 0, -0.4573,
    -0.2611, 0, -0.9653,
    -0.2611, 0, -0.9653,
    -0.2611, 0, -0.9653,
    -0.2611, 0, -0.9653,
    0.6345, 0, -0.7729,
    0.6345, 0, -0.7729,
    0.6345, 0, -0.7729,
    0.6345, 0, -0.7729,
    -0.8956, 0, -0.4449,
    -0.8956, 0, -0.4449,
    -0.8956, 0, -0.4449,
    -0.8956, 0, -0.4449,
    -0.9262, 0, 0.3771,
    -0.9262, 0, 0.3771,
    -0.9262, 0, 0.3771,
    -0.9262, 0, 0.3771,
    -0.1654, 0, -0.9862,
    -0.1654, 0, -0.9862,
    -0.1654, 0, -0.9862,
    -0.1654, 0, -0.9862,
    -0.7095, 0, -0.7047,
    -0.7095, 0, -0.7047,
    -0.7095, 0, -0.7047,
    -0.7095, 0, -0.7047,
    0.3348, 0, -0.9423,
    0.3348, 0, -0.9423,
    0.3348, 0, -0.9423,
    0.3348, 0, -0.9423,
    0.5858, 0, -0.8104,
    0.5858, 0, -0.8104,
    0.5858, 0, -0.8104,
    0.5858, 0, -0.8104,
    0.9163, 0, 0.4004,
    0.9163, 0, 0.4004,
    0.9163, 0, 0.4004,
    0.9163, 0, 0.4004,
    0.9939, 0, -0.11,
    0.9939, 0, -0.11,
    0.9939, 0, -0.11,
    0.9939, 0, -0.11,
    0.6405, 0, 0.768,
    0.6405, 0, 0.768,
    0.6405, 0, 0.768,
    0.6405, 0, 0.768,
    0.128, 0, -0.9918,
    0.128, 0, -0.9918,
    0.128, 0, -0.9918,
    0.128, 0, -0.9918,
    -0.2869, 0, -0.958,
    -0.2869, 0, -0.958,
    -0.2869, 0, -0.958,
    -0.2869, 0, -0.958,
    -0.8333, 0, -0.5528,
    -0.8333, 0, -0.5528,
    -0.8333, 0, -0.5528,
    -0.8333, 0, -0.5528,
    0.7905, 0, -0.6125,
    0.7905, 0, -0.6125,
    0.7905, 0, -0.6125,
    0.7905, 0, -0.6125,
    -0.7744, 0, 0.6326,
    -0.7744, 0, 0.6326,
    -0.7744, 0, 0.6326,
    -0.7744, 0, 0.6326,
    -0.5915, 0, 0.8063,
    -0.5915, 0, 0.8063,
    -0.5915, 0, 0.8063,
    -0.5915, 0, 0.8063,
    0.202, 0, -0.9794,
    0.202, 0, -0.9794,
    0.202, 0, -0.9794,
    0.202, 0, -0.9794,
    0.0285, 0, -0.9996,
    0.0285, 0, -0.9996,
    0.0285, 0, -0.9996,
    0.0285, 0, -0.9996,
    -0.5997, 0, -0.8002,
    -0.5997, 0, -0.8002,
    -0.5997, 0, -0.8002,
    -0.5997, 0, -0.8002,
    -0.8055, 0, -0.5927,
    -0.8055, 0, -0.5927,
    -0.8055, 0, -0.5927,
    -0.8055, 0, -0.5927,
    0.0846, 0, -0.9964,
    0.0846, 0, -0.9964,
    0.0846, 0, -0.9964,
    0.0846, 0, -0.9964,
    0.9911, 0, -0.133,
    0.9911, 0, -0.133,
    0.9911, 0, -0.133,
    0.9911, 0, -0.133,
    -0.6716, 0, 0.7409,
    -0.6716, 0, 0.7409,
    -0.6716, 0, 0.7409,
    -0.6716, 0, 0.7409,
    0.099, 0, -0.9951,
    0.099, 0, -0.9951,
    0.099, 0, -0.9951,
    0.099, 0, -0.9951,
    -0.8201, 0, -0.5722,
    -0.8201, 0, -0.5722,
    -0.8201, 0, -0.5722,
    -0.8201, 0, -0.5722,
    0.9986, 0, -0.0531,
    0.9986, 0, -0.0531,
    0.9986, 0, -0.0531,
    0.9986, 0, -0.0531,
    -0.9933, 0, 0.1152,
    -0.9933, 0, 0.1152,
    -0.9933, 0, 0.1152,
    -0.9933, 0, 0.1152,
    -0.8233, 0, 0.5675,
    -0.8233, 0, 0.5675,
    -0.8233, 0, 0.5675,
    -0.8233, 0, 0.5675,
    0.7068, 0, 0.7074,
    0.7068, 0, 0.7074,
    0.7068, 0, 0.7074,
    0.7068, 0, 0.7074,
    -0.1705, 0, 0.9853,
    -0.1705, 0, 0.9853,
    -0.1705, 0, 0.9853,
    -0.1705, 0, 0.9853,
    -0.7939, 0, 0.608,
    -0.7939, 0, 0.608,
    -0.7939, 0, 0.608,
    -0.7939, 0, 0.608,
    -0.5483, 0, 0.8363,
    -0.5483, 0, 0.8363,
    -0.5483, 0, 0.8363,
    -0.5483, 0, 0.8363,
    0.998, 0, 0.0632,
    0.998, 0, 0.0632,
    0.998, 0, 0.0632,
    0.998, 0, 0.0632,
    0.3619, 0, 0.9322,
    0.3619, 0, 0.9322,
    0.3619, 0, 0.9322,
    0.3619, 0, 0.9322,
    0.1071, 0, 0.9943,
    0.1071, 0, 0.9943,
    0.1071, 0, 0.9943,
    0.1071, 0, 0.9943,
    0.2515, 0, 0.9679,
    0.2515, 0, 0.9679,
    0.2515, 0, 0.9679,
    0.2515, 0, 0.9679,
    0.6177, 0, 0.7864,
    0.6177, 0, 0.7864,
    0.6177, 0, 0.7864,
    0.6177, 0, 0.7864,
    0.9202, 0, 0.3915,
    0.9202, 0, 0.3915,
    0.9202, 0, 0.3915,
    0.9202, 0, 0.3915,
    -0.2315, 0, 0.9728,
    -0.2315, 0, 0.9728,
    -0.2315, 0, 0.9728,
    -0.2315, 0, 0.9728,
    0.3294, 0, 0.9442,
    0.3294, 0, 0.9442,
    0.3294, 0, 0.9442,
    0.3294, 0, 0.9442,
    0.9914, 0, -0.1307,
    0.9914, 0, -0.1307,
    0.9914, 0, -0.1307,
    0.9914, 0, -0.1307,
    0.5582, 0, 0.8297,
    0.5582, 0, 0.8297,
    0.5582, 0, 0.8297,
    0.5582, 0, 0.8297,
    0.8566, 0, 0.5159,
    0.8566, 0, 0.5159,
    0.8566, 0, 0.5159,
    0.8566, 0, 0.5159,
    0.4065, 0, -0.9136,
    0.4065, 0, -0.9136,
    0.4065, 0, -0.9136,
    0.4065, 0, -0.9136,
    0.8391, 0, -0.544,
    0.8391, 0, -0.544,
    0.8391, 0, -0.544,
    0.8391, 0, -0.544,
    0.8664, 0, 0.4993,
    0.8664, 0, 0.4993,
    0.8664, 0, 0.4993,
    0.8664, 0, 0.4993,
    -0.3815, 0, 0.9244,
    -0.3815, 0, 0.9244,
    -0.3815, 0, 0.9244,
    -0.3815, 0, 0.9244
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.28746, 0.397007,
    0.281249, 0.395025,
    0.278954, 0.370484,
    0.289271, 0.378808,
    0.34479, 0.319004,
    0.336292, 0.320629,
    0.339514, 0.305142,
    0.349753, 0.30738,
    0.633713, 0.359389,
    0.625344, 0.376069,
    0.622005, 0.411018,
    0.627148, 0.425265,
    0.610004, 0.436473,
    0.614728, 0.446863,
    0.611081, 0.460121,
    0.602905, 0.464677,
    0.588223, 0.457466,
    0.569926, 0.437116,
    0.534577, 0.444861,
    0.52121, 0.435118,
    0.458451, 0.45548,
    0.4182, 0.498729,
    0.422969, 0.511034,
    0.40541, 0.52326,
    0.353424, 0.494505,
    0.362068, 0.476973,
    0.342531, 0.473753,
    0.323593, 0.485747,
    0.334745, 0.455619,
    0.307031, 0.441132,
    0.298948, 0.419944,
    0.304268, 0.37713,
    0.342508, 0.331683,
    0.344125, 0.322469,
    0.350116, 0.328464,
    0.363135, 0.323376,
    0.389042, 0.328248,
    0.411684, 0.308647,
    0.407042, 0.300275,
    0.422167, 0.299736,
    0.432159, 0.311098,
    0.439405, 0.308281,
    0.439471, 0.321838,
    0.447601, 0.335304,
    0.458169, 0.336496,
    0.47335, 0.341276,
    0.488487, 0.329738,
    0.497327, 0.313957,
    0.511037, 0.312449,
    0.534143, 0.29709,
    0.575628, 0.295483,
    0.59085, 0.291989,
    0.594999, 0.3034,
    0.612417, 0.317736,
    0.628931, 0.315338,
    0.640639, 0.322811,
    0.655372, 0.33182,
    0.643081, 0.347262,
    0.642124, 0.352541,
    0.27702, 0.004159,
    0.292964, 0.004159,
    0.292964, 0.022038,
    0.27702, 0.022038,
    0.627393, 0.004159,
    0.681799, 0.004159,
    0.681799, 0.022038,
    0.627393, 0.022038,
    0.325639, 0.004159,
    0.355827, 0.004159,
    0.355827, 0.022038,
    0.325639, 0.022038,
    0.681799, 0.004159,
    0.755837, 0.004159,
    0.755837, 0.022038,
    0.681799, 0.022038,
    0.314355, 0.004159,
    0.29548, 0.004159,
    0.29548, 0.022038,
    0.314355, 0.022038,
    0.456543, 0.004159,
    0.483495, 0.004159,
    0.483495, 0.022038,
    0.456543, 0.022038,
    0.308309, 0.004159,
    0.337284, 0.004159,
    0.337284, 0.022038,
    0.308309, 0.022038,
    0.741028, 0.004159,
    0.760902, 0.004159,
    0.760902, 0.022038,
    0.741028, 0.022038,
    0.49063, 0.004159,
    0.50587, 0.004159,
    0.50587, 0.022038,
    0.49063, 0.022038,
    0.735444, 0.004159,
    0.683184, 0.004159,
    0.683184, 0.022038,
    0.735444, 0.022038,
    0.338953, 0.004159,
    0.362731, 0.004159,
    0.362731, 0.022038,
    0.338953, 0.022038,
    0.616904, 0.004159,
    0.548011, 0.004159,
    0.548011, 0.022038,
    0.616904, 0.022038,
    0.349851, 0.004159,
    0.330583, 0.004159,
    0.330583, 0.022038,
    0.349851, 0.022038,
    0.664548, 0.004159,
    0.635332, 0.004159,
    0.635332, 0.022038,
    0.664548, 0.022038,
    0.346704, 0.004159,
    0.301682, 0.004159,
    0.301682, 0.022038,
    0.346704, 0.022038,
    0.533498, 0.004159,
    0.405166, 0.004159,
    0.405166, 0.022038,
    0.533498, 0.022038,
    0.355827, 0.004159,
    0.346704, 0.004159,
    0.346704, 0.022038,
    0.355827, 0.022038,
    0.405166, 0.004159,
    0.295369, 0.004159,
    0.295369, 0.022038,
    0.405166, 0.022038,
    0.799268, 0.004159,
    0.769439, 0.004159,
    0.769439, 0.022038,
    0.799268, 0.022038,
    0.301682, 0.004159,
    0.325639, 0.004159,
    0.325639, 0.022038,
    0.301682, 0.022038,
    0.652824, 0.004159,
    0.678692, 0.004159,
    0.678692, 0.022038,
    0.652824, 0.022038,
    0.333975, 0.004159,
    0.349851, 0.004159,
    0.349851, 0.022038,
    0.333975, 0.022038,
    0.292508, 0.004159,
    0.250658, 0.004159,
    0.250658, 0.022038,
    0.292508, 0.022038,
    0.330583, 0.004159,
    0.314238, 0.004159,
    0.314238, 0.022038,
    0.330583, 0.022038,
    0.684093, 0.004159,
    0.586455, 0.004159,
    0.586455, 0.022038,
    0.684093, 0.022038,
    0.592598, 0.004159,
    0.600962, 0.004159,
    0.600962, 0.022038,
    0.592598, 0.022038,
    0.26667, 0.004159,
    0.24251, 0.004159,
    0.24251, 0.022038,
    0.26667, 0.022038,
    0.185894, 0.004159,
    0.21698, 0.004159,
    0.21698, 0.022038,
    0.185894, 0.022038,
    0.820217, 0.004159,
    0.799268, 0.004159,
    0.799268, 0.022038,
    0.820217, 0.022038,
    0.667956, 0.004159,
    0.649503, 0.004159,
    0.649503, 0.022038,
    0.667956, 0.022038,
    0.21698, 0.004159,
    0.185732, 0.004159,
    0.185732, 0.022038,
    0.21698, 0.022038,
    0.761429, 0.004159,
    0.735444, 0.004159,
    0.735444, 0.022038,
    0.761429, 0.022038,
    0.185732, 0.004159,
    0.141679, 0.004159,
    0.141679, 0.022038,
    0.185732, 0.022038,
    0.684945, 0.004159,
    0.714551, 0.004159,
    0.714551, 0.022038,
    0.684945, 0.022038,
    0.141679, 0.004159,
    0.188621, 0.004159,
    0.188621, 0.022038,
    0.141679, 0.022038,
    0.727801, 0.004159,
    0.687604, 0.004159,
    0.687604, 0.022038,
    0.727801, 0.022038,
    0.501419, 0.004159,
    0.45084, 0.004159,
    0.45084, 0.022038,
    0.501419, 0.022038,
    0.718551, 0.004159,
    0.741028, 0.004159,
    0.741028, 0.022038,
    0.718551, 0.022038,
    0.45084, 0.004159,
    0.406413, 0.004159,
    0.406413, 0.022038,
    0.45084, 0.022038,
    0.406413, 0.004159,
    0.336357, 0.004159,
    0.336357, 0.022038,
    0.406413, 0.022038,
    0.513007, 0.004159,
    0.535213, 0.004159,
    0.535213, 0.022038,
    0.513007, 0.022038,
    0.535213, 0.004159,
    0.5722, 0.004159,
    0.5722, 0.022038,
    0.535213, 0.022038,
    0.291669, 0.004159,
    0.27702, 0.004159,
    0.27702, 0.022038,
    0.291669, 0.022038,
    0.5722, 0.004159,
    0.602034, 0.004159,
    0.602034, 0.022038,
    0.5722, 0.022038,
    0.362731, 0.004159,
    0.393692, 0.004159,
    0.393692, 0.022038,
    0.362731, 0.022038,
    0.602034, 0.004159,
    0.627393, 0.004159,
    0.627393, 0.022038,
    0.602034, 0.022038,
    0.331287, 0.004159,
    0.358698, 0.004159,
    0.358698, 0.022038,
    0.331287, 0.022038,
    0.755837, 0.004159,
    0.785649, 0.004159,
    0.785649, 0.022038,
    0.755837, 0.022038,
    0.358698, 0.004159,
    0.399583, 0.004159,
    0.399583, 0.022038,
    0.358698, 0.022038,
    0.472085, 0.004159,
    0.513025, 0.004159,
    0.513025, 0.022038,
    0.472085, 0.022038,
    0.399583, 0.004159,
    0.457042, 0.004159,
    0.457042, 0.022038,
    0.399583, 0.022038,
    0.799937, 0.004159,
    0.83101, 0.004159,
    0.83101, 0.022038,
    0.799937, 0.022038,
    0.448344, 0.004159,
    0.472085, 0.004159,
    0.472085, 0.022038,
    0.448344, 0.022038,
    0.495604, 0.004159,
    0.513007, 0.004159,
    0.513007, 0.022038,
    0.495604, 0.022038,
    0.547599, 0.004159,
    0.576774, 0.004159,
    0.576774, 0.022038,
    0.547599, 0.022038,
    0.86226, 0.004159,
    0.826698, 0.004159,
    0.826698, 0.022038,
    0.86226, 0.022038,
    0.626845, 0.004159,
    0.684945, 0.004159,
    0.684945, 0.022038,
    0.626845, 0.022038,
    0.523864, 0.004159,
    0.547599, 0.004159,
    0.547599, 0.022038,
    0.523864, 0.022038,
    0.206769, 0.004159,
    0.315047, 0.004159,
    0.315047, 0.022038,
    0.206769, 0.022038
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    294, 293, 291,
    293, 292, 291,
    290, 289, 287,
    289, 288, 287,
    286, 285, 283,
    285, 284, 283,
    282, 281, 279,
    281, 280, 279,
    278, 277, 275,
    277, 276, 275,
    274, 273, 271,
    273, 272, 271,
    270, 269, 267,
    269, 268, 267,
    266, 265, 263,
    265, 264, 263,
    262, 261, 259,
    261, 260, 259,
    258, 257, 255,
    257, 256, 255,
    254, 253, 251,
    253, 252, 251,
    250, 249, 247,
    249, 248, 247,
    246, 245, 243,
    245, 244, 243,
    242, 241, 239,
    241, 240, 239,
    238, 237, 235,
    237, 236, 235,
    234, 233, 231,
    233, 232, 231,
    230, 229, 227,
    229, 228, 227,
    226, 225, 223,
    225, 224, 223,
    222, 221, 219,
    221, 220, 219,
    218, 217, 215,
    217, 216, 215,
    214, 213, 211,
    213, 212, 211,
    210, 209, 207,
    209, 208, 207,
    206, 205, 203,
    205, 204, 203,
    202, 201, 199,
    201, 200, 199,
    198, 197, 195,
    197, 196, 195,
    194, 193, 191,
    193, 192, 191,
    190, 189, 187,
    189, 188, 187,
    186, 185, 183,
    185, 184, 183,
    182, 181, 179,
    181, 180, 179,
    178, 177, 175,
    177, 176, 175,
    174, 173, 171,
    173, 172, 171,
    170, 169, 167,
    169, 168, 167,
    166, 165, 163,
    165, 164, 163,
    162, 161, 159,
    161, 160, 159,
    158, 157, 155,
    157, 156, 155,
    154, 153, 151,
    153, 152, 151,
    150, 149, 147,
    149, 148, 147,
    146, 145, 143,
    145, 144, 143,
    142, 141, 139,
    141, 140, 139,
    138, 137, 135,
    137, 136, 135,
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
    16, 15, 12,
    15, 14, 12,
    14, 13, 12,
    12, 11, 10,
    17, 16, 12,
    19, 18, 17,
    36, 35, 28,
    35, 34, 28,
    34, 33, 28,
    33, 32, 28,
    32, 31, 28,
    31, 30, 28,
    30, 29, 28,
    28, 27, 26,
    25, 24, 21,
    24, 23, 21,
    23, 22, 21,
    28, 26, 20,
    26, 25, 20,
    25, 21, 20,
    37, 28, 20,
    39, 38, 37,
    37, 36, 28,
    40, 37, 20,
    42, 41, 40,
    40, 39, 37,
    43, 40, 20,
    43, 42, 40,
    45, 43, 20,
    45, 44, 43,
    46, 45, 20,
    48, 47, 46,
    49, 48, 46,
    50, 49, 46,
    51, 50, 46,
    52, 51, 46,
    53, 46, 20,
    20, 19, 53,
    19, 17, 53,
    17, 12, 53,
    12, 10, 53,
    10, 9, 53,
    53, 52, 46,
    55, 54, 53,
    56, 55, 53,
    57, 56, 53,
    58, 57, 53,
    9, 8, 53,
    8, 58, 53,
    7, 6, 4,
    6, 5, 4,
    3, 2, 0,
    2, 1, 0
]);