import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_sa01(gl: WebGLRenderingContext): Mesh {
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
    44.2841, 0.999795, 21.3225,
    44.1848, 0.999795, 22.9374,
    45.6415, 0.999795, 23.9153,
    46.8668, 0.999795, 25.5859,
    45.3868, 0.999795, 26.4308,
    43.1637, 0.999795, 27.5265,
    44.465, 0.999795, 29.3054,
    47.7387, 0.999795, 28.7307,
    46.3503, 0.999795, 31.1664,
    47.4723, 0.999795, 32.6716,
    50.9253, 0.999795, 33.3558,
    51.2105, 0.999796, 35.1894,
    53.1095, 0.999796, 34.9431,
    52.7481, 0.999796, 36.8424,
    55.6741, 0.999796, 40.7668,
    53.9381, 0.999796, 42.064,
    56.6248, 0.999796, 45.7695,
    56.2648, 0.999795, 48.9905,
    52.7967, 0.999795, 51.0075,
    56.8245, 0.999795, 51.9516,
    60.2545, 0.999795, 49.9402,
    61.9475, 0.999796, 41.0962,
    60.4129, 0.999795, 32.0333,
    57.8219, 0.999795, 22.0093,
    57.8604, 0.999795, 14.8368,
    56.9755, 0.999795, 14.222,
    55.4335, 0.999795, 18.7458,
    54.1336, 0.999795, 17.9598,
    51.4151, 0.999795, 18.2357,
    47.1752, 0.999795, 21.0809,
    47.8707, 0.999795, 22.8199,
    46.1446, 0.999795, 23.1201,
    45.4221, 0.999795, 22.9407,
    50.9253, -0.000205, 33.3558,
    51.2105, -0.000204, 35.1894,
    51.2105, 0.999796, 35.1894,
    50.9253, 0.999795, 33.3558,
    47.8707, -0.000205, 22.8199,
    46.1446, -0.000205, 23.1201,
    46.1446, 0.999795, 23.1201,
    47.8707, 0.999795, 22.8199,
    51.2105, -0.000204, 35.1894,
    53.1095, -0.000204, 34.9431,
    53.1095, 0.999796, 34.9431,
    51.2105, 0.999796, 35.1894,
    46.1446, -0.000205, 23.1201,
    45.4221, -0.000205, 22.9407,
    45.4221, 0.999795, 22.9407,
    46.1446, 0.999795, 23.1201,
    56.2648, -0.000205, 48.9905,
    52.7967, -0.000205, 51.0075,
    52.7967, 0.999795, 51.0075,
    56.2648, 0.999795, 48.9905,
    47.1752, -0.000205, 21.0809,
    47.8707, -0.000205, 22.8199,
    47.8707, 0.999795, 22.8199,
    47.1752, 0.999795, 21.0809,
    44.2841, -0.000205, 21.3225,
    44.1848, -0.000205, 22.9374,
    44.1848, 0.999795, 22.9374,
    44.2841, 0.999795, 21.3225,
    53.1095, -0.000204, 34.9431,
    52.7481, -0.000204, 36.8424,
    52.7481, 0.999796, 36.8424,
    53.1095, 0.999796, 34.9431,
    57.8219, -0.000205, 22.0093,
    57.8604, -0.000205, 14.8368,
    57.8604, 0.999795, 14.8368,
    57.8219, 0.999795, 22.0093,
    46.8668, -0.000205, 25.5859,
    45.3868, -0.000205, 26.4308,
    45.3868, 0.999795, 26.4308,
    46.8668, 0.999795, 25.5859,
    52.7481, -0.000204, 36.8424,
    55.6741, -0.000204, 40.7668,
    55.6741, 0.999796, 40.7668,
    52.7481, 0.999796, 36.8424,
    56.8245, -0.000205, 51.9516,
    60.2545, -0.000205, 49.9402,
    60.2545, 0.999795, 49.9402,
    56.8245, 0.999795, 51.9516,
    45.4221, -0.000205, 22.9407,
    44.2841, -0.000205, 21.3225,
    44.2841, 0.999795, 21.3225,
    45.4221, 0.999795, 22.9407,
    55.6741, -0.000204, 40.7668,
    53.9381, -0.000204, 42.064,
    53.9381, 0.999796, 42.064,
    55.6741, 0.999796, 40.7668,
    61.9475, -0.000204, 41.0962,
    60.4129, -0.000205, 32.0333,
    60.4129, 0.999795, 32.0333,
    61.9475, 0.999796, 41.0962,
    44.1848, -0.000205, 22.9374,
    45.6415, -0.000205, 23.9153,
    45.6415, 0.999795, 23.9153,
    44.1848, 0.999795, 22.9374,
    53.9381, -0.000204, 42.064,
    56.6248, -0.000204, 45.7695,
    56.6248, 0.999796, 45.7695,
    53.9381, 0.999796, 42.064,
    60.4129, -0.000205, 32.0333,
    57.8219, -0.000205, 22.0093,
    57.8219, 0.999795, 22.0093,
    60.4129, 0.999795, 32.0333,
    45.6415, -0.000205, 23.9153,
    46.8668, -0.000205, 25.5859,
    46.8668, 0.999795, 25.5859,
    45.6415, 0.999795, 23.9153,
    56.6248, -0.000204, 45.7695,
    56.2648, -0.000205, 48.9905,
    56.2648, 0.999795, 48.9905,
    56.6248, 0.999796, 45.7695,
    60.2545, -0.000205, 49.9402,
    61.9475, -0.000204, 41.0962,
    61.9475, 0.999796, 41.0962,
    60.2545, 0.999795, 49.9402,
    45.3868, -0.000205, 26.4308,
    43.1637, -0.000205, 27.5265,
    43.1637, 0.999795, 27.5265,
    45.3868, 0.999795, 26.4308,
    52.7967, -0.000205, 51.0075,
    56.8245, -0.000205, 51.9516,
    56.8245, 0.999795, 51.9516,
    52.7967, 0.999795, 51.0075,
    43.1637, -0.000205, 27.5265,
    44.465, -0.000205, 29.3054,
    44.465, 0.999795, 29.3054,
    43.1637, 0.999795, 27.5265,
    56.9755, -0.000205, 14.222,
    55.4335, -0.000205, 18.7458,
    55.4335, 0.999795, 18.7458,
    56.9755, 0.999795, 14.222,
    44.465, -0.000205, 29.3054,
    47.7387, -0.000205, 28.7307,
    47.7387, 0.999795, 28.7307,
    44.465, 0.999795, 29.3054,
    54.1336, -0.000205, 17.9598,
    51.4151, -0.000205, 18.2357,
    51.4151, 0.999795, 18.2357,
    54.1336, 0.999795, 17.9598,
    47.7387, -0.000205, 28.7307,
    46.3503, -0.000205, 31.1664,
    46.3503, 0.999795, 31.1664,
    47.7387, 0.999795, 28.7307,
    51.4151, -0.000205, 18.2357,
    47.1752, -0.000205, 21.0809,
    47.1752, 0.999795, 21.0809,
    51.4151, 0.999795, 18.2357,
    46.3503, -0.000205, 31.1664,
    47.4723, -0.000205, 32.6716,
    47.4723, 0.999795, 32.6716,
    46.3503, 0.999795, 31.1664,
    57.8604, -0.000205, 14.8368,
    56.9755, -0.000205, 14.222,
    56.9755, 0.999795, 14.222,
    57.8604, 0.999795, 14.8368,
    47.4723, -0.000205, 32.6716,
    50.9253, -0.000205, 33.3558,
    50.9253, 0.999795, 33.3558,
    47.4723, 0.999795, 32.6716,
    55.4335, -0.000205, 18.7458,
    54.1336, -0.000205, 17.9598,
    54.1336, 0.999795, 17.9598,
    55.4335, 0.999795, 18.7458
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
    -0.9881, 0, 0.1537,
    -0.9881, 0, 0.1537,
    -0.9881, 0, 0.1537,
    -0.9881, 0, 0.1537,
    -0.1713, 0, -0.9852,
    -0.1713, 0, -0.9852,
    -0.1713, 0, -0.9852,
    -0.1713, 0, -0.9852,
    0.1286, 0, 0.9917,
    0.1286, 0, 0.9917,
    0.1286, 0, 0.9917,
    0.1286, 0, 0.9917,
    0.241, 0, -0.9705,
    0.241, 0, -0.9705,
    0.241, 0, -0.9705,
    0.241, 0, -0.9705,
    -0.5027, 0, -0.8644,
    -0.5027, 0, -0.8644,
    -0.5027, 0, -0.8644,
    -0.5027, 0, -0.8644,
    -0.9285, 0, 0.3713,
    -0.9285, 0, 0.3713,
    -0.9285, 0, 0.3713,
    -0.9285, 0, 0.3713,
    -0.9981, 0, -0.0614,
    -0.9981, 0, -0.0614,
    -0.9981, 0, -0.0614,
    -0.9981, 0, -0.0614,
    -0.9824, 0, -0.1869,
    -0.9824, 0, -0.1869,
    -0.9824, 0, -0.1869,
    -0.9824, 0, -0.1869,
    1, 0, 0.0054,
    1, 0, 0.0054,
    1, 0, 0.0054,
    1, 0, 0.0054,
    -0.4958, 0, -0.8685,
    -0.4958, 0, -0.8685,
    -0.4958, 0, -0.8685,
    -0.4958, 0, -0.8685,
    -0.8017, 0, 0.5977,
    -0.8017, 0, 0.5977,
    -0.8017, 0, 0.5977,
    -0.8017, 0, 0.5977,
    0.5059, 0, 0.8626,
    0.5059, 0, 0.8626,
    0.5059, 0, 0.8626,
    0.5059, 0, 0.8626,
    0.818, 0, -0.5753,
    0.818, 0, -0.5753,
    0.818, 0, -0.5753,
    0.818, 0, -0.5753,
    -0.5986, 0, -0.8011,
    -0.5986, 0, -0.8011,
    -0.5986, 0, -0.8011,
    -0.5986, 0, -0.8011,
    0.986, 0, -0.167,
    0.986, 0, -0.167,
    0.986, 0, -0.167,
    0.986, 0, -0.167,
    -0.5574, 0, 0.8303,
    -0.5574, 0, 0.8303,
    -0.5574, 0, 0.8303,
    -0.5574, 0, 0.8303,
    -0.8096, 0, 0.587,
    -0.8096, 0, 0.587,
    -0.8096, 0, 0.587,
    -0.8096, 0, 0.587,
    0.9682, 0, -0.2503,
    0.9682, 0, -0.2503,
    0.9682, 0, -0.2503,
    0.9682, 0, -0.2503,
    -0.8064, 0, 0.5914,
    -0.8064, 0, 0.5914,
    -0.8064, 0, 0.5914,
    -0.8064, 0, 0.5914,
    -0.9938, 0, -0.1111,
    -0.9938, 0, -0.1111,
    -0.9938, 0, -0.1111,
    -0.9938, 0, -0.1111,
    0.9822, 0, 0.188,
    0.9822, 0, 0.188,
    0.9822, 0, 0.188,
    0.9822, 0, 0.188,
    -0.4421, 0, -0.897,
    -0.4421, 0, -0.897,
    -0.4421, 0, -0.897,
    -0.4421, 0, -0.897,
    -0.2282, 0, 0.9736,
    -0.2282, 0, 0.9736,
    -0.2282, 0, 0.9736,
    -0.2282, 0, 0.9736,
    -0.8071, 0, 0.5904,
    -0.8071, 0, 0.5904,
    -0.8071, 0, 0.5904,
    -0.8071, 0, 0.5904,
    -0.9465, 0, -0.3226,
    -0.9465, 0, -0.3226,
    -0.9465, 0, -0.3226,
    -0.9465, 0, -0.3226,
    0.1729, 0, 0.9849,
    0.1729, 0, 0.9849,
    0.1729, 0, 0.9849,
    0.1729, 0, 0.9849,
    -0.101, 0, -0.9949,
    -0.101, 0, -0.9949,
    -0.101, 0, -0.9949,
    -0.101, 0, -0.9949,
    -0.8688, 0, -0.4952,
    -0.8688, 0, -0.4952,
    -0.8688, 0, -0.4952,
    -0.8688, 0, -0.4952,
    -0.5572, 0, -0.8304,
    -0.5572, 0, -0.8304,
    -0.5572, 0, -0.8304,
    -0.5572, 0, -0.8304,
    -0.8018, 0, 0.5976,
    -0.8018, 0, 0.5976,
    -0.8018, 0, 0.5976,
    -0.8018, 0, 0.5976,
    0.5705, 0, -0.8213,
    0.5705, 0, -0.8213,
    0.5705, 0, -0.8213,
    0.5705, 0, -0.8213,
    -0.1944, 0, 0.9809,
    -0.1944, 0, 0.9809,
    -0.1944, 0, 0.9809,
    -0.1944, 0, 0.9809,
    0.5174, 0, -0.8557,
    0.5174, 0, -0.8557,
    0.5174, 0, -0.8557,
    0.5174, 0, -0.8557
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.806464, 0.181425,
    0.810778, 0.174153,
    0.819947, 0.174204,
    0.830152, 0.170581,
    0.826235, 0.162581,
    0.819843, 0.151315,
    0.830693, 0.147447,
    0.843158, 0.159547,
    0.844309, 0.14494,
    0.853581, 0.141728,
    0.870518, 0.148912,
    0.877136, 0.141823,
    0.884623, 0.148466,
    0.888639, 0.139194,
    0.912814, 0.130823,
    0.909119, 0.120116,
    0.931618, 0.111989,
    0.939522, 0.097007,
    0.930454, 0.078101,
    0.950639, 0.08585,
    0.959559, 0.10462,
    0.940902, 0.147825,
    0.907648, 0.182496,
    0.867005, 0.21822,
    0.846104, 0.249339,
    0.840473, 0.249397,
    0.847095, 0.225312,
    0.839166, 0.224892,
    0.828225, 0.215715,
    0.818253, 0.190962,
    0.826367, 0.185487,
    0.819787, 0.179119,
    0.816137, 0.177773,
    0.870518, 0.148912,
    0.877136, 0.141823,
    0.877136, 0.141823,
    0.870518, 0.148912,
    0.826367, 0.185487,
    0.819787, 0.179119,
    0.819787, 0.179119,
    0.826367, 0.185487,
    0.877136, 0.141823,
    0.884623, 0.148466,
    0.884623, 0.148466,
    0.877136, 0.141823,
    0.819787, 0.179119,
    0.816137, 0.177773,
    0.816137, 0.177773,
    0.819787, 0.179119,
    0.939522, 0.097007,
    0.930454, 0.078101,
    0.930454, 0.078101,
    0.939522, 0.097007,
    0.818253, 0.190962,
    0.826367, 0.185487,
    0.826367, 0.185487,
    0.818253, 0.190962,
    0.806464, 0.181425,
    0.810778, 0.174153,
    0.810778, 0.174153,
    0.806464, 0.181425,
    0.884623, 0.148466,
    0.888639, 0.139194,
    0.888639, 0.139194,
    0.884623, 0.148466,
    0.867005, 0.21822,
    0.846104, 0.249339,
    0.846104, 0.249339,
    0.867005, 0.21822,
    0.830152, 0.170581,
    0.826235, 0.162581,
    0.826235, 0.162581,
    0.830152, 0.170581,
    0.888639, 0.139194,
    0.912814, 0.130823,
    0.912814, 0.130823,
    0.888639, 0.139194,
    0.950639, 0.08585,
    0.959559, 0.10462,
    0.959559, 0.10462,
    0.950639, 0.08585,
    0.816137, 0.177773,
    0.806464, 0.181425,
    0.806464, 0.181425,
    0.816137, 0.177773,
    0.912814, 0.130823,
    0.909119, 0.120116,
    0.909119, 0.120116,
    0.912814, 0.130823,
    0.940902, 0.147825,
    0.907648, 0.182496,
    0.907648, 0.182496,
    0.940902, 0.147825,
    0.810778, 0.174153,
    0.819947, 0.174204,
    0.819947, 0.174204,
    0.810778, 0.174153,
    0.909119, 0.120116,
    0.931618, 0.111989,
    0.931618, 0.111989,
    0.909119, 0.120116,
    0.907648, 0.182496,
    0.867005, 0.21822,
    0.867005, 0.21822,
    0.907648, 0.182496,
    0.819947, 0.174204,
    0.830152, 0.170581,
    0.830152, 0.170581,
    0.819947, 0.174204,
    0.931618, 0.111989,
    0.939522, 0.097007,
    0.939522, 0.097007,
    0.931618, 0.111989,
    0.959559, 0.10462,
    0.940902, 0.147825,
    0.940902, 0.147825,
    0.959559, 0.10462,
    0.826235, 0.162581,
    0.819843, 0.151315,
    0.819843, 0.151315,
    0.826235, 0.162581,
    0.930454, 0.078101,
    0.950639, 0.08585,
    0.950639, 0.08585,
    0.930454, 0.078101,
    0.819843, 0.151315,
    0.830693, 0.147447,
    0.830693, 0.147447,
    0.819843, 0.151315,
    0.840473, 0.249397,
    0.847095, 0.225312,
    0.847095, 0.225312,
    0.840473, 0.249397,
    0.830693, 0.147447,
    0.843158, 0.159547,
    0.843158, 0.159547,
    0.830693, 0.147447,
    0.839166, 0.224892,
    0.828225, 0.215715,
    0.828225, 0.215715,
    0.839166, 0.224892,
    0.843158, 0.159547,
    0.844309, 0.14494,
    0.844309, 0.14494,
    0.843158, 0.159547,
    0.828225, 0.215715,
    0.818253, 0.190962,
    0.818253, 0.190962,
    0.828225, 0.215715,
    0.844309, 0.14494,
    0.853581, 0.141728,
    0.853581, 0.141728,
    0.844309, 0.14494,
    0.846104, 0.249339,
    0.840473, 0.249397,
    0.840473, 0.249397,
    0.846104, 0.249339,
    0.853581, 0.141728,
    0.870518, 0.148912,
    0.870518, 0.148912,
    0.853581, 0.141728,
    0.847095, 0.225312,
    0.839166, 0.224892,
    0.839166, 0.224892,
    0.847095, 0.225312
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    164, 163, 161,
    163, 162, 161,
    160, 159, 157,
    159, 158, 157,
    156, 155, 153,
    155, 154, 153,
    152, 151, 149,
    151, 150, 149,
    148, 147, 145,
    147, 146, 145,
    144, 143, 141,
    143, 142, 141,
    140, 139, 137,
    139, 138, 137,
    136, 135, 133,
    135, 134, 133,
    132, 131, 129,
    131, 130, 129,
    128, 127, 125,
    127, 126, 125,
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
    6, 5, 4,
    9, 8, 7,
    7, 6, 4,
    10, 9, 7,
    12, 11, 10,
    14, 13, 12,
    21, 20, 17,
    20, 19, 17,
    19, 18, 17,
    22, 21, 17,
    22, 17, 16,
    16, 15, 14,
    23, 16, 14,
    14, 12, 23,
    23, 22, 16,
    25, 24, 23,
    26, 25, 23,
    27, 26, 23,
    28, 27, 23,
    29, 28, 23,
    30, 29, 23,
    31, 30, 23,
    12, 3, 23,
    3, 31, 23,
    12, 10, 3,
    10, 7, 3,
    7, 4, 3,
    3, 32, 31,
    3, 2, 32,
    2, 1, 32,
    1, 0, 32
]);