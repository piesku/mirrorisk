import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_na05(gl: WebGLRenderingContext): Mesh {
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
    42.824, 0.999796, -65.9773,
    43.5316, 0.999796, -67.483,
    41.7071, 0.999796, -67.5315,
    42.2359, 0.999796, -68.0486,
    41.3318, 0.999796, -71.026,
    42.9938, 0.999796, -73.3465,
    43.318, 0.999796, -74.943,
    45.6915, 0.999796, -74.6607,
    44.6955, 0.999796, -76.6547,
    46.6474, 0.999796, -76.7313,
    51.7284, 0.999796, -79.6898,
    56.9491, 0.999796, -79.7087,
    59.9251, 0.999796, -84.4821,
    53.8185, 0.999796, -86.5379,
    51.5365, 0.999795, -92.4421,
    47.4564, 0.999797, -95.5438,
    40.7998, 0.999797, -96.6576,
    36.9815, 0.999797, -97.5628,
    30.0812, 0.999797, -97.5628,
    23.2817, 0.999797, -97.5628,
    16.8895, 0.999797, -97.2271,
    24.1135, 0.999797, -95.9078,
    22.751, 0.999797, -95.0606,
    16.6069, 0.999795, -94.7339,
    10.4881, 0.999795, -94.3377,
    8.64042, 0.999795, -93.3139,
    15.387, 0.999796, -88.332,
    15.9092, 0.999796, -81.9864,
    16.5806, 0.999796, -79.9836,
    16.0524, 0.999796, -76.8006,
    17.9657, 0.999796, -76.6547,
    21.1359, 0.999796, -76.6547,
    19.9881, 0.999796, -76.3437,
    17.9835, 0.999796, -73.5256,
    21.2401, 0.999796, -73.2727,
    18.9454, 0.999796, -70.9669,
    25.6739, 0.999796, -68.2528,
    29.4166, 0.999796, -64.4112,
    32.9431, 0.999796, -62.5288,
    34.1311, 0.999796, -59.6378,
    36.8722, 0.999796, -56.8379,
    40.4575, 0.999796, -58.9585,
    22.751, -0.000203, -95.0606,
    16.6069, -0.000205, -94.7339,
    16.6069, 0.999795, -94.7339,
    22.751, 0.999797, -95.0606,
    42.9938, -0.000204, -73.3465,
    43.318, -0.000204, -74.943,
    43.318, 0.999796, -74.943,
    42.9938, 0.999796, -73.3465,
    47.4564, -0.000203, -95.5438,
    40.7998, -0.000203, -96.6576,
    40.7998, 0.999797, -96.6576,
    47.4564, 0.999797, -95.5438,
    23.2817, -0.000203, -97.5628,
    16.8895, -0.000203, -97.2271,
    16.8895, 0.999797, -97.2271,
    23.2817, 0.999797, -97.5628,
    41.3318, -0.000204, -71.026,
    42.9938, -0.000204, -73.3465,
    42.9938, 0.999796, -73.3465,
    41.3318, 0.999796, -71.026,
    51.5365, -0.000205, -92.4421,
    47.4564, -0.000203, -95.5438,
    47.4564, 0.999797, -95.5438,
    51.5365, 0.999795, -92.4421,
    18.9454, -0.000204, -70.9669,
    25.6739, -0.000204, -68.2528,
    25.6739, 0.999796, -68.2528,
    18.9454, 0.999796, -70.9669,
    42.2359, -0.000204, -68.0486,
    41.3318, -0.000204, -71.026,
    41.3318, 0.999796, -71.026,
    42.2359, 0.999796, -68.0486,
    59.9251, -0.000204, -84.4821,
    53.8185, -0.000204, -86.5379,
    53.8185, 0.999796, -86.5379,
    59.9251, 0.999796, -84.4821,
    21.1359, -0.000204, -76.6547,
    19.9881, -0.000204, -76.3437,
    19.9881, 0.999796, -76.3437,
    21.1359, 0.999796, -76.6547,
    41.7071, -0.000204, -67.5315,
    42.2359, -0.000204, -68.0486,
    42.2359, 0.999796, -68.0486,
    41.7071, 0.999796, -67.5315,
    56.9491, -0.000204, -79.7087,
    59.9251, -0.000204, -84.4821,
    59.9251, 0.999796, -84.4821,
    56.9491, 0.999796, -79.7087,
    19.9881, -0.000204, -76.3437,
    17.9835, -0.000204, -73.5256,
    17.9835, 0.999796, -73.5256,
    19.9881, 0.999796, -76.3437,
    43.5316, -0.000204, -67.483,
    41.7071, -0.000204, -67.5315,
    41.7071, 0.999796, -67.5315,
    43.5316, 0.999796, -67.483,
    16.6069, -0.000205, -94.7339,
    10.4881, -0.000205, -94.3377,
    10.4881, 0.999795, -94.3377,
    16.6069, 0.999795, -94.7339,
    17.9657, -0.000204, -76.6547,
    21.1359, -0.000204, -76.6547,
    21.1359, 0.999796, -76.6547,
    17.9657, 0.999796, -76.6547,
    42.824, -0.000204, -65.9773,
    43.5316, -0.000204, -67.483,
    43.5316, 0.999796, -67.483,
    42.824, 0.999796, -65.9773,
    51.7284, -0.000204, -79.6898,
    56.9491, -0.000204, -79.7087,
    56.9491, 0.999796, -79.7087,
    51.7284, 0.999796, -79.6898,
    21.2401, -0.000204, -73.2727,
    18.9454, -0.000204, -70.9669,
    18.9454, 0.999796, -70.9669,
    21.2401, 0.999796, -73.2727,
    36.8722, -0.000204, -56.8379,
    40.4575, -0.000204, -58.9585,
    40.4575, 0.999796, -58.9585,
    36.8722, 0.999796, -56.8379,
    8.64042, -0.000205, -93.3139,
    15.387, -0.000204, -88.332,
    15.387, 0.999796, -88.332,
    8.64042, 0.999795, -93.3139,
    40.4575, -0.000204, -58.9585,
    42.824, -0.000204, -65.9773,
    42.824, 0.999796, -65.9773,
    40.4575, 0.999796, -58.9585,
    34.1311, -0.000204, -59.6378,
    36.8722, -0.000204, -56.8379,
    36.8722, 0.999796, -56.8379,
    34.1311, 0.999796, -59.6378,
    15.9092, -0.000204, -81.9864,
    16.5806, -0.000204, -79.9836,
    16.5806, 0.999796, -79.9836,
    15.9092, 0.999796, -81.9864,
    10.4881, -0.000205, -94.3377,
    8.64042, -0.000205, -93.3139,
    8.64042, 0.999795, -93.3139,
    10.4881, 0.999795, -94.3377,
    32.9431, -0.000204, -62.5288,
    34.1311, -0.000204, -59.6378,
    34.1311, 0.999796, -59.6378,
    32.9431, 0.999796, -62.5288,
    46.6474, -0.000204, -76.7313,
    51.7284, -0.000204, -79.6898,
    51.7284, 0.999796, -79.6898,
    46.6474, 0.999796, -76.7313,
    30.0812, -0.000203, -97.5628,
    23.2817, -0.000203, -97.5628,
    23.2817, 0.999797, -97.5628,
    30.0812, 0.999797, -97.5628,
    25.6739, -0.000204, -68.2528,
    29.4166, -0.000204, -64.4112,
    29.4166, 0.999796, -64.4112,
    25.6739, 0.999796, -68.2528,
    44.6955, -0.000204, -76.6547,
    46.6474, -0.000204, -76.7313,
    46.6474, 0.999796, -76.7313,
    44.6955, 0.999796, -76.6547,
    16.8895, -0.000203, -97.2271,
    24.1135, -0.000203, -95.9078,
    24.1135, 0.999797, -95.9078,
    16.8895, 0.999797, -97.2271,
    29.4166, -0.000204, -64.4112,
    32.9431, -0.000204, -62.5288,
    32.9431, 0.999796, -62.5288,
    29.4166, 0.999796, -64.4112,
    53.8185, -0.000204, -86.5379,
    51.5365, -0.000205, -92.4421,
    51.5365, 0.999795, -92.4421,
    53.8185, 0.999796, -86.5379,
    16.5806, -0.000204, -79.9836,
    16.0524, -0.000204, -76.8006,
    16.0524, 0.999796, -76.8006,
    16.5806, 0.999796, -79.9836,
    36.9815, -0.000203, -97.5628,
    36.9815, 0.999797, -97.5628,
    15.387, -0.000204, -88.332,
    15.9092, -0.000204, -81.9864,
    15.9092, 0.999796, -81.9864,
    15.387, 0.999796, -88.332,
    17.9835, -0.000204, -73.5256,
    21.2401, -0.000204, -73.2727,
    21.2401, 0.999796, -73.2727,
    17.9835, 0.999796, -73.5256,
    43.318, -0.000204, -74.943,
    45.6915, -0.000204, -74.6607,
    45.6915, 0.999796, -74.6607,
    43.318, 0.999796, -74.943,
    40.7998, -0.000203, -96.6576,
    36.9815, -0.000203, -97.5628,
    36.9815, 0.999797, -97.5628,
    40.7998, 0.999797, -96.6576,
    45.6915, -0.000204, -74.6607,
    44.6955, -0.000204, -76.6547,
    44.6955, 0.999796, -76.6547,
    45.6915, 0.999796, -74.6607,
    16.0524, -0.000204, -76.8006,
    17.9657, -0.000204, -76.6547,
    17.9657, 0.999796, -76.6547,
    16.0524, 0.999796, -76.8006,
    24.1135, -0.000203, -95.9078,
    22.751, -0.000203, -95.0606,
    22.751, 0.999797, -95.0606,
    24.1135, 0.999797, -95.9078
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
    -0.0531, 0, -0.9986,
    -0.0531, 0, -0.9986,
    -0.0531, 0, -0.9986,
    -0.0531, 0, -0.9986,
    0.98, 0, 0.199,
    0.98, 0, 0.199,
    0.98, 0, 0.199,
    0.98, 0, 0.199,
    0.165, 0, -0.9863,
    0.165, 0, -0.9863,
    0.165, 0, -0.9863,
    0.165, 0, -0.9863,
    -0.0524, 0, -0.9986,
    -0.0524, 0, -0.9986,
    -0.0524, 0, -0.9986,
    -0.0524, 0, -0.9986,
    0.813, 0, 0.5823,
    0.813, 0, 0.5823,
    0.813, 0, 0.5823,
    0.813, 0, 0.5823,
    0.6052, 0, -0.7961,
    0.6052, 0, -0.7961,
    0.6052, 0, -0.7961,
    0.6052, 0, -0.7961,
    -0.3741, 0, 0.9274,
    -0.3741, 0, 0.9274,
    -0.3741, 0, 0.9274,
    -0.3741, 0, 0.9274,
    0.9569, 0, -0.2905,
    0.9569, 0, -0.2905,
    0.9569, 0, -0.2905,
    0.9569, 0, -0.2905,
    0.3191, 0, -0.9477,
    0.3191, 0, -0.9477,
    0.3191, 0, -0.9477,
    0.3191, 0, -0.9477,
    -0.2615, 0, -0.9652,
    -0.2615, 0, -0.9652,
    -0.2615, 0, -0.9652,
    -0.2615, 0, -0.9652,
    0.6991, 0, 0.715,
    0.6991, 0, 0.715,
    0.6991, 0, 0.715,
    0.6991, 0, 0.715,
    0.8486, 0, 0.5291,
    0.8486, 0, 0.5291,
    0.8486, 0, 0.5291,
    0.8486, 0, 0.5291,
    -0.8149, 0, -0.5797,
    -0.8149, 0, -0.5797,
    -0.8149, 0, -0.5797,
    -0.8149, 0, -0.5797,
    0.0266, 0, -0.9996,
    0.0266, 0, -0.9996,
    0.0266, 0, -0.9996,
    0.0266, 0, -0.9996,
    -0.0646, 0, -0.9979,
    -0.0646, 0, -0.9979,
    -0.0646, 0, -0.9979,
    -0.0646, 0, -0.9979,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0.905, 0, 0.4253,
    0.905, 0, 0.4253,
    0.905, 0, 0.4253,
    0.905, 0, 0.4253,
    0.0036, 0, 1,
    0.0036, 0, 1,
    0.0036, 0, 1,
    0.0036, 0, 1,
    -0.7088, 0, -0.7054,
    -0.7088, 0, -0.7054,
    -0.7088, 0, -0.7054,
    -0.7088, 0, -0.7054,
    0.5091, 0, 0.8607,
    0.5091, 0, 0.8607,
    0.5091, 0, 0.8607,
    0.5091, 0, 0.8607,
    -0.594, 0, 0.8044,
    -0.594, 0, 0.8044,
    -0.594, 0, 0.8044,
    -0.594, 0, 0.8044,
    0.9476, 0, 0.3195,
    0.9476, 0, 0.3195,
    0.9476, 0, 0.3195,
    0.9476, 0, 0.3195,
    -0.7146, 0, 0.6996,
    -0.7146, 0, 0.6996,
    -0.7146, 0, 0.6996,
    -0.7146, 0, 0.6996,
    -0.9481, 0, 0.3178,
    -0.9481, 0, 0.3178,
    -0.9481, 0, 0.3178,
    -0.9481, 0, 0.3178,
    -0.4847, 0, -0.8747,
    -0.4847, 0, -0.8747,
    -0.4847, 0, -0.8747,
    -0.4847, 0, -0.8747,
    -0.9249, 0, 0.3801,
    -0.9249, 0, 0.3801,
    -0.9249, 0, 0.3801,
    -0.9249, 0, 0.3801,
    0.5032, 0, 0.8642,
    0.5032, 0, 0.8642,
    0.5032, 0, 0.8642,
    0.5032, 0, 0.8642,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    -0.7163, 0, 0.6978,
    -0.7163, 0, 0.6978,
    -0.7163, 0, 0.6978,
    -0.7163, 0, 0.6978,
    0.0392, 0, 0.9992,
    0.0392, 0, 0.9992,
    0.0392, 0, 0.9992,
    0.0392, 0, 0.9992,
    -0.1797, 0, 0.9837,
    -0.1797, 0, 0.9837,
    -0.1797, 0, 0.9837,
    -0.1797, 0, 0.9837,
    -0.4709, 0, 0.8822,
    -0.4709, 0, 0.8822,
    -0.4709, 0, 0.8822,
    -0.4709, 0, 0.8822,
    0.9328, 0, -0.3605,
    0.9328, 0, -0.3605,
    0.9328, 0, -0.3605,
    0.9328, 0, -0.3605,
    -0.9865, 0, -0.1637,
    -0.9865, 0, -0.1637,
    -0.9865, 0, -0.1637,
    -0.9865, 0, -0.1637,
    0, 0, -1,
    0, 0, -1,
    -0.9966, 0, 0.082,
    -0.9966, 0, 0.082,
    -0.9966, 0, 0.082,
    -0.9966, 0, 0.082,
    -0.0774, 0, 0.997,
    -0.0774, 0, 0.997,
    -0.0774, 0, 0.997,
    -0.0774, 0, 0.997,
    -0.1181, 0, 0.993,
    -0.1181, 0, 0.993,
    -0.1181, 0, 0.993,
    -0.1181, 0, 0.993,
    0.2307, 0, -0.973,
    0.2307, 0, -0.973,
    0.2307, 0, -0.973,
    0.2307, 0, -0.973,
    0.8946, 0, -0.4468,
    0.8946, 0, -0.4468,
    0.8946, 0, -0.4468,
    0.8946, 0, -0.4468,
    -0.076, 0, 0.9971,
    -0.076, 0, 0.9971,
    -0.076, 0, 0.9971,
    -0.076, 0, 0.9971,
    -0.528, 0, -0.8492,
    -0.528, 0, -0.8492,
    -0.528, 0, -0.8492,
    -0.528, 0, -0.8492
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.645755, 0.764101,
    0.652218, 0.769918,
    0.643528, 0.773853,
    0.647124, 0.775271,
    0.64881, 0.791446,
    0.661523, 0.799251,
    0.666323, 0.806283,
    0.677182, 0.800108,
    0.67643, 0.811733,
    0.685987, 0.808143,
    0.716462, 0.812085,
    0.741647, 0.801584,
    0.765664, 0.818538,
    0.740422, 0.840829,
    0.741409, 0.873896,
    0.728049, 0.897113,
    0.698246, 0.915982,
    0.681691, 0.928089,
    0.648456, 0.942087,
    0.615705, 0.955882,
    0.584236, 0.967232,
    0.616354, 0.946222,
    0.608073, 0.944906,
    0.577817, 0.955797,
    0.547541, 0.966302,
    0.536565, 0.965119,
    0.558954, 0.927436,
    0.548595, 0.895813,
    0.547766, 0.884804,
    0.538765, 0.870544,
    0.547684, 0.86596,
    0.562953, 0.859529,
    0.558595, 0.861364,
    0.541421, 0.850853,
    0.556594, 0.843028,
    0.540864, 0.836577,
    0.567766, 0.809854,
    0.578, 0.783758,
    0.591166, 0.767537,
    0.591024, 0.751202,
    0.598546, 0.732156,
    0.620117, 0.735096,
    0.608073, 0.944906,
    0.577817, 0.955797,
    0.577817, 0.955797,
    0.608073, 0.944906,
    0.661523, 0.799251,
    0.666323, 0.806283,
    0.666323, 0.806283,
    0.661523, 0.799251,
    0.728049, 0.897113,
    0.698246, 0.915982,
    0.698246, 0.915982,
    0.728049, 0.897113,
    0.615705, 0.955882,
    0.584236, 0.967232,
    0.584236, 0.967232,
    0.615705, 0.955882,
    0.64881, 0.791446,
    0.661523, 0.799251,
    0.661523, 0.799251,
    0.64881, 0.791446,
    0.741409, 0.873896,
    0.728049, 0.897113,
    0.728049, 0.897113,
    0.741409, 0.873896,
    0.540864, 0.836577,
    0.567766, 0.809854,
    0.567766, 0.809854,
    0.540864, 0.836577,
    0.647124, 0.775271,
    0.64881, 0.791446,
    0.64881, 0.791446,
    0.647124, 0.775271,
    0.765664, 0.818538,
    0.740422, 0.840829,
    0.740422, 0.840829,
    0.765664, 0.818538,
    0.562953, 0.859529,
    0.558595, 0.861364,
    0.558595, 0.861364,
    0.562953, 0.859529,
    0.643528, 0.773853,
    0.647124, 0.775271,
    0.647124, 0.775271,
    0.643528, 0.773853,
    0.741647, 0.801584,
    0.765664, 0.818538,
    0.765664, 0.818538,
    0.741647, 0.801584,
    0.558595, 0.861364,
    0.541421, 0.850853,
    0.541421, 0.850853,
    0.558595, 0.861364,
    0.652218, 0.769918,
    0.643528, 0.773853,
    0.643528, 0.773853,
    0.652218, 0.769918,
    0.577817, 0.955797,
    0.547541, 0.966302,
    0.547541, 0.966302,
    0.577817, 0.955797,
    0.547684, 0.86596,
    0.562953, 0.859529,
    0.562953, 0.859529,
    0.547684, 0.86596,
    0.645755, 0.764101,
    0.652218, 0.769918,
    0.652218, 0.769918,
    0.645755, 0.764101,
    0.716462, 0.812085,
    0.741647, 0.801584,
    0.741647, 0.801584,
    0.716462, 0.812085,
    0.556594, 0.843028,
    0.540864, 0.836577,
    0.540864, 0.836577,
    0.556594, 0.843028,
    0.598546, 0.732156,
    0.620117, 0.735096,
    0.620117, 0.735096,
    0.598546, 0.732156,
    0.536565, 0.965119,
    0.558954, 0.927436,
    0.558954, 0.927436,
    0.536565, 0.965119,
    0.620117, 0.735096,
    0.645755, 0.764101,
    0.645755, 0.764101,
    0.620117, 0.735096,
    0.591024, 0.751202,
    0.598546, 0.732156,
    0.598546, 0.732156,
    0.591024, 0.751202,
    0.548595, 0.895813,
    0.547766, 0.884804,
    0.547766, 0.884804,
    0.548595, 0.895813,
    0.547541, 0.966302,
    0.536565, 0.965119,
    0.536565, 0.965119,
    0.547541, 0.966302,
    0.591166, 0.767537,
    0.591024, 0.751202,
    0.591024, 0.751202,
    0.591166, 0.767537,
    0.685987, 0.808143,
    0.716462, 0.812085,
    0.716462, 0.812085,
    0.685987, 0.808143,
    0.648456, 0.942087,
    0.615705, 0.955882,
    0.615705, 0.955882,
    0.648456, 0.942087,
    0.567766, 0.809854,
    0.578, 0.783758,
    0.578, 0.783758,
    0.567766, 0.809854,
    0.67643, 0.811733,
    0.685987, 0.808143,
    0.685987, 0.808143,
    0.67643, 0.811733,
    0.584236, 0.967232,
    0.616354, 0.946222,
    0.616354, 0.946222,
    0.584236, 0.967232,
    0.578, 0.783758,
    0.591166, 0.767537,
    0.591166, 0.767537,
    0.578, 0.783758,
    0.740422, 0.840829,
    0.741409, 0.873896,
    0.741409, 0.873896,
    0.740422, 0.840829,
    0.547766, 0.884804,
    0.538765, 0.870544,
    0.538765, 0.870544,
    0.547766, 0.884804,
    0.681691, 0.928089,
    0.681691, 0.928089,
    0.558954, 0.927436,
    0.548595, 0.895813,
    0.548595, 0.895813,
    0.558954, 0.927436,
    0.541421, 0.850853,
    0.556594, 0.843028,
    0.556594, 0.843028,
    0.541421, 0.850853,
    0.666323, 0.806283,
    0.677182, 0.800108,
    0.677182, 0.800108,
    0.666323, 0.806283,
    0.698246, 0.915982,
    0.681691, 0.928089,
    0.681691, 0.928089,
    0.698246, 0.915982,
    0.677182, 0.800108,
    0.67643, 0.811733,
    0.67643, 0.811733,
    0.677182, 0.800108,
    0.538765, 0.870544,
    0.547684, 0.86596,
    0.547684, 0.86596,
    0.538765, 0.870544,
    0.616354, 0.946222,
    0.608073, 0.944906,
    0.608073, 0.944906,
    0.616354, 0.946222
]);

// prettier-ignore
let index_arr = Uint16Array.from([
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
    179, 153, 178,
    153, 150, 178,
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
    25, 24, 22,
    24, 23, 22,
    26, 25, 22,
    27, 26, 22,
    28, 27, 22,
    29, 28, 22,
    30, 29, 22,
    33, 32, 31,
    31, 30, 22,
    36, 35, 34,
    34, 33, 31,
    37, 36, 34,
    41, 40, 38,
    40, 39, 38,
    38, 37, 34,
    13, 12, 10,
    12, 11, 10,
    14, 13, 10,
    15, 14, 10,
    16, 15, 10,
    17, 16, 10,
    18, 17, 10,
    21, 20, 19,
    19, 18, 10,
    38, 34, 8,
    34, 31, 8,
    31, 22, 8,
    22, 21, 8,
    21, 19, 8,
    19, 10, 8,
    10, 9, 8,
    8, 6, 38,
    8, 7, 6,
    6, 4, 38,
    6, 5, 4,
    4, 2, 38,
    4, 3, 2,
    2, 0, 38,
    0, 41, 38,
    2, 1, 0
]);
