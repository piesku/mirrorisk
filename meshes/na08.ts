import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_na08(gl: WebGLRenderingContext): Mesh {
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
    44.2136, 0.999796, -43.2506,
    48.2749, 0.999796, -43.1362,
    47.5903, 0.999796, -44.9731,
    45.8827, 0.999795, -47.6263,
    46.077, 0.999796, -45.6417,
    43.8826, 0.999796, -44.9799,
    43.3478, 0.999796, -44.1174,
    43.3027, 0.999796, -41.9954,
    57.2432, 0.999796, -43.668,
    59.301, 0.999796, -41.6935,
    55.7297, 0.999796, -44.2586,
    52.8756, 0.999796, -44.9005,
    52.4298, 0.999796, -41.3028,
    50.0256, 0.999796, -40.5634,
    52.4006, 0.999796, -39.6029,
    53.8622, 0.999796, -38.644,
    53.9068, 0.999796, -39.7346,
    53.0939, 0.999796, -40.5823,
    55.012, 0.999796, -40.1288,
    55.3559, 0.999796, -42.6661,
    56.6851, 0.999796, -43.1427,
    58.6244, 0.999796, -40.5536,
    61.4514, 0.999796, -40.3722,
    64.6412, 0.999795, -41.1099,
    65.6908, 0.999795, -47.3616,
    64.7394, 0.999795, -47.9723,
    65.0469, 0.999795, -50.852,
    63.1706, 0.999795, -52.8007,
    64.1893, 0.999795, -54.6713,
    63.6439, 0.999795, -55.8221,
    63.981, 0.999796, -59.6354,
    61.7169, 0.999796, -59.1316,
    59.3966, 0.999796, -58.7171,
    57.235, 0.999796, -57.3645,
    57.0435, 0.999795, -54.8227,
    55.7924, 0.999795, -54.1457,
    53.7661, 0.999795, -55.0078,
    52.955, 0.999795, -56.2275,
    50.7618, 0.999795, -53.1217,
    50.3222, 0.999795, -52.8007,
    48.8975, 0.999795, -52.5496,
    47.2185, 0.999795, -51.5178,
    49.0743, 0.999795, -50.1665,
    47.2423, 0.999795, -50.9474,
    46.0735, 0.999795, -50.1998,
    45.7611, 0.999795, -48.7518,
    46.2938, 0.999795, -47.8456,
    49.5888, 0.999796, -45.8848,
    53.7078, 0.999796, -46.128,
    55.8214, 0.999796, -44.8841,
    47.5903, -0.000204, -44.9731,
    45.8827, -0.000205, -47.6263,
    45.8827, 0.999795, -47.6263,
    47.5903, 0.999796, -44.9731,
    43.8826, -0.000204, -44.9799,
    43.3478, -0.000204, -44.1174,
    43.3478, 0.999796, -44.1174,
    43.8826, 0.999796, -44.9799,
    55.7924, -0.000205, -54.1457,
    53.7661, -0.000205, -55.0078,
    53.7661, 0.999795, -55.0078,
    55.7924, 0.999795, -54.1457,
    43.3478, -0.000204, -44.1174,
    43.3027, -0.000204, -41.9954,
    43.3027, 0.999796, -41.9954,
    43.3478, 0.999796, -44.1174,
    47.2423, -0.000205, -50.9474,
    46.0735, -0.000205, -50.1998,
    46.0735, 0.999795, -50.1998,
    47.2423, 0.999795, -50.9474,
    53.7661, -0.000205, -55.0078,
    52.955, -0.000205, -56.2275,
    52.955, 0.999795, -56.2275,
    53.7661, 0.999795, -55.0078,
    49.5888, -0.000204, -45.8848,
    53.7078, -0.000204, -46.128,
    53.7078, 0.999796, -46.128,
    49.5888, 0.999796, -45.8848,
    48.2749, -0.000204, -43.1362,
    47.5903, -0.000204, -44.9731,
    47.5903, 0.999796, -44.9731,
    48.2749, 0.999796, -43.1362,
    52.955, -0.000205, -56.2275,
    50.7618, -0.000205, -53.1217,
    50.7618, 0.999795, -53.1217,
    52.955, 0.999795, -56.2275,
    53.0939, -0.000204, -40.5823,
    55.012, -0.000204, -40.1288,
    55.012, 0.999796, -40.1288,
    53.0939, 0.999796, -40.5823,
    44.2136, -0.000204, -43.2506,
    48.2749, -0.000204, -43.1362,
    48.2749, 0.999796, -43.1362,
    44.2136, 0.999796, -43.2506,
    59.301, -0.000204, -41.6935,
    55.7297, -0.000204, -44.2586,
    55.7297, 0.999796, -44.2586,
    59.301, 0.999796, -41.6935,
    50.7618, -0.000205, -53.1217,
    50.3222, -0.000205, -52.8007,
    50.3222, 0.999795, -52.8007,
    50.7618, 0.999795, -53.1217,
    58.6244, -0.000204, -40.5536,
    61.4514, -0.000204, -40.3722,
    61.4514, 0.999796, -40.3722,
    58.6244, 0.999796, -40.5536,
    43.3027, -0.000204, -41.9954,
    44.2136, -0.000204, -43.2506,
    44.2136, 0.999796, -43.2506,
    43.3027, 0.999796, -41.9954,
    65.6908, -0.000205, -47.3616,
    64.7394, -0.000205, -47.9723,
    64.7394, 0.999795, -47.9723,
    65.6908, 0.999795, -47.3616,
    50.3222, -0.000205, -52.8007,
    48.8975, -0.000205, -52.5496,
    48.8975, 0.999795, -52.5496,
    50.3222, 0.999795, -52.8007,
    64.7394, -0.000205, -47.9723,
    65.0469, -0.000205, -50.852,
    65.0469, 0.999795, -50.852,
    64.7394, 0.999795, -47.9723,
    55.7297, -0.000204, -44.2586,
    52.8756, -0.000204, -44.9005,
    52.8756, 0.999796, -44.9005,
    55.7297, 0.999796, -44.2586,
    48.8975, -0.000205, -52.5496,
    47.2185, -0.000205, -51.5178,
    47.2185, 0.999795, -51.5178,
    48.8975, 0.999795, -52.5496,
    65.0469, -0.000205, -50.852,
    63.1706, -0.000205, -52.8007,
    63.1706, 0.999795, -52.8007,
    65.0469, 0.999795, -50.852,
    52.8756, -0.000204, -44.9005,
    52.4298, -0.000204, -41.3028,
    52.4298, 0.999796, -41.3028,
    52.8756, 0.999796, -44.9005,
    55.8214, -0.000204, -44.8841,
    57.2432, -0.000204, -43.668,
    57.2432, 0.999796, -43.668,
    55.8214, 0.999796, -44.8841,
    45.7611, -0.000205, -48.7518,
    46.2938, -0.000205, -47.8456,
    46.2938, 0.999795, -47.8456,
    45.7611, 0.999795, -48.7518,
    63.1706, -0.000205, -52.8007,
    64.1893, -0.000205, -54.6713,
    64.1893, 0.999795, -54.6713,
    63.1706, 0.999795, -52.8007,
    50.0256, -0.000204, -40.5634,
    52.4006, -0.000204, -39.6029,
    52.4006, 0.999796, -39.6029,
    50.0256, 0.999796, -40.5634,
    52.4298, -0.000204, -41.3028,
    50.0256, -0.000204, -40.5634,
    50.0256, 0.999796, -40.5634,
    52.4298, 0.999796, -41.3028,
    46.2938, -0.000205, -47.8456,
    49.5888, -0.000204, -45.8848,
    49.5888, 0.999796, -45.8848,
    46.2938, 0.999795, -47.8456,
    53.8622, -0.000204, -38.644,
    53.9068, -0.000204, -39.7346,
    53.9068, 0.999796, -39.7346,
    53.8622, 0.999796, -38.644,
    59.3966, -0.000204, -58.7171,
    57.235, -0.000204, -57.3645,
    57.235, 0.999796, -57.3645,
    59.3966, 0.999796, -58.7171,
    63.6439, -0.000205, -55.8221,
    63.981, -0.000204, -59.6354,
    63.981, 0.999796, -59.6354,
    63.6439, 0.999795, -55.8221,
    64.6412, -0.000205, -41.1099,
    65.6908, -0.000205, -47.3616,
    65.6908, 0.999795, -47.3616,
    64.6412, 0.999795, -41.1099,
    55.012, -0.000204, -40.1288,
    55.3559, -0.000204, -42.6661,
    55.3559, 0.999796, -42.6661,
    55.012, 0.999796, -40.1288,
    57.2432, -0.000204, -43.668,
    59.301, -0.000204, -41.6935,
    59.301, 0.999796, -41.6935,
    57.2432, 0.999796, -43.668,
    63.981, -0.000204, -59.6354,
    61.7169, -0.000204, -59.1316,
    61.7169, 0.999796, -59.1316,
    63.981, 0.999796, -59.6354,
    61.4514, -0.000204, -40.3722,
    64.6412, -0.000205, -41.1099,
    64.6412, 0.999795, -41.1099,
    61.4514, 0.999796, -40.3722,
    47.2185, -0.000205, -51.5178,
    49.0743, -0.000205, -50.1665,
    49.0743, 0.999795, -50.1665,
    47.2185, 0.999795, -51.5178,
    53.7078, -0.000204, -46.128,
    55.8214, -0.000204, -44.8841,
    55.8214, 0.999796, -44.8841,
    53.7078, 0.999796, -46.128,
    61.7169, -0.000204, -59.1316,
    59.3966, -0.000204, -58.7171,
    59.3966, 0.999796, -58.7171,
    61.7169, 0.999796, -59.1316,
    52.4006, -0.000204, -39.6029,
    53.8622, -0.000204, -38.644,
    53.8622, 0.999796, -38.644,
    52.4006, 0.999796, -39.6029,
    57.235, -0.000204, -57.3645,
    57.0435, -0.000205, -54.8227,
    57.0435, 0.999795, -54.8227,
    57.235, 0.999796, -57.3645,
    49.0743, -0.000205, -50.1665,
    47.2423, -0.000205, -50.9474,
    47.2423, 0.999795, -50.9474,
    49.0743, 0.999795, -50.1665,
    46.077, -0.000204, -45.6417,
    43.8826, -0.000204, -44.9799,
    43.8826, 0.999796, -44.9799,
    46.077, 0.999796, -45.6417,
    57.0435, -0.000205, -54.8227,
    55.7924, -0.000205, -54.1457,
    55.7924, 0.999795, -54.1457,
    57.0435, 0.999795, -54.8227,
    53.9068, -0.000204, -39.7346,
    53.0939, -0.000204, -40.5823,
    53.0939, 0.999796, -40.5823,
    53.9068, 0.999796, -39.7346,
    56.6851, -0.000204, -43.1427,
    58.6244, -0.000204, -40.5536,
    58.6244, 0.999796, -40.5536,
    56.6851, 0.999796, -43.1427,
    46.0735, -0.000205, -50.1998,
    45.7611, -0.000205, -48.7518,
    45.7611, 0.999795, -48.7518,
    46.0735, 0.999795, -50.1998,
    64.1893, -0.000205, -54.6713,
    63.6439, -0.000205, -55.8221,
    63.6439, 0.999795, -55.8221,
    64.1893, 0.999795, -54.6713,
    55.3559, -0.000204, -42.6661,
    56.6851, -0.000204, -43.1427,
    56.6851, 0.999796, -43.1427,
    55.3559, 0.999796, -42.6661,
    45.8827, -0.000205, -47.6263,
    46.077, -0.000204, -45.6417,
    46.077, 0.999796, -45.6417,
    45.8827, 0.999795, -47.6263
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
    0.8409, 0, -0.5412,
    0.8409, 0, -0.5412,
    0.8409, 0, -0.5412,
    0.8409, 0, -0.5412,
    -0.8499, 0, -0.527,
    -0.8499, 0, -0.527,
    -0.8499, 0, -0.527,
    -0.8499, 0, -0.527,
    0.3915, 0, -0.9202,
    0.3915, 0, -0.9202,
    0.3915, 0, -0.9202,
    0.3915, 0, -0.9202,
    -0.9998, 0, -0.0212,
    -0.9998, 0, -0.0212,
    -0.9998, 0, -0.0212,
    -0.9998, 0, -0.0212,
    -0.5389, 0, -0.8424,
    -0.5389, 0, -0.8424,
    -0.5389, 0, -0.8424,
    -0.5389, 0, -0.8424,
    0.8327, 0, -0.5537,
    0.8327, 0, -0.5537,
    0.8327, 0, -0.5537,
    0.8327, 0, -0.5537,
    0.0589, 0, 0.9983,
    0.0589, 0, 0.9983,
    0.0589, 0, 0.9983,
    0.0589, 0, 0.9983,
    0.937, 0, -0.3492,
    0.937, 0, -0.3492,
    0.937, 0, -0.3492,
    0.937, 0, -0.3492,
    -0.8169, 0, -0.5768,
    -0.8169, 0, -0.5768,
    -0.8169, 0, -0.5768,
    -0.8169, 0, -0.5768,
    -0.2301, 0, 0.9732,
    -0.2301, 0, 0.9732,
    -0.2301, 0, 0.9732,
    -0.2301, 0, 0.9732,
    -0.0282, 0, 0.9996,
    -0.0282, 0, 0.9996,
    -0.0282, 0, 0.9996,
    -0.0282, 0, 0.9996,
    0.5834, 0, -0.8122,
    0.5834, 0, -0.8122,
    0.5834, 0, -0.8122,
    0.5834, 0, -0.8122,
    -0.5897, 0, -0.8076,
    -0.5897, 0, -0.8076,
    -0.5897, 0, -0.8076,
    -0.5897, 0, -0.8076,
    -0.064, 0, 0.9979,
    -0.064, 0, 0.9979,
    -0.064, 0, 0.9979,
    -0.064, 0, 0.9979,
    0.8093, 0, 0.5873,
    0.8093, 0, 0.5873,
    0.8093, 0, 0.5873,
    0.8093, 0, 0.5873,
    0.5402, 0, -0.8415,
    0.5402, 0, -0.8415,
    0.5402, 0, -0.8415,
    0.5402, 0, -0.8415,
    -0.1736, 0, -0.9848,
    -0.1736, 0, -0.9848,
    -0.1736, 0, -0.9848,
    -0.1736, 0, -0.9848,
    0.9943, 0, 0.1062,
    0.9943, 0, 0.1062,
    0.9943, 0, 0.1062,
    0.9943, 0, 0.1062,
    0.2194, 0, -0.9756,
    0.2194, 0, -0.9756,
    0.2194, 0, -0.9756,
    0.2194, 0, -0.9756,
    -0.5236, 0, -0.852,
    -0.5236, 0, -0.852,
    -0.5236, 0, -0.852,
    -0.5236, 0, -0.852,
    0.7204, 0, -0.6936,
    0.7204, 0, -0.6936,
    0.7204, 0, -0.6936,
    0.7204, 0, -0.6936,
    -0.9924, 0, -0.123,
    -0.9924, 0, -0.123,
    -0.9924, 0, -0.123,
    -0.9924, 0, -0.123,
    -0.65, 0, 0.7599,
    -0.65, 0, 0.7599,
    -0.65, 0, 0.7599,
    -0.65, 0, 0.7599,
    -0.8621, 0, 0.5068,
    -0.8621, 0, 0.5068,
    -0.8621, 0, 0.5068,
    -0.8621, 0, 0.5068,
    0.8782, 0, 0.4783,
    0.8782, 0, 0.4783,
    0.8782, 0, 0.4783,
    0.8782, 0, 0.4783,
    -0.3749, 0, 0.9271,
    -0.3749, 0, 0.9271,
    -0.3749, 0, 0.9271,
    -0.3749, 0, 0.9271,
    -0.294, 0, -0.9558,
    -0.294, 0, -0.9558,
    -0.294, 0, -0.9558,
    -0.294, 0, -0.9558,
    -0.5114, 0, 0.8593,
    -0.5114, 0, 0.8593,
    -0.5114, 0, 0.8593,
    -0.5114, 0, 0.8593,
    0.9992, 0, 0.0409,
    0.9992, 0, 0.0409,
    0.9992, 0, 0.0409,
    0.9992, 0, 0.0409,
    -0.5304, 0, -0.8477,
    -0.5304, 0, -0.8477,
    -0.5304, 0, -0.8477,
    -0.5304, 0, -0.8477,
    0.9961, 0, 0.0881,
    0.9961, 0, 0.0881,
    0.9961, 0, 0.0881,
    0.9961, 0, 0.0881,
    0.9862, 0, 0.1656,
    0.9862, 0, 0.1656,
    0.9862, 0, 0.1656,
    0.9862, 0, 0.1656,
    0.9909, 0, 0.1343,
    0.9909, 0, 0.1343,
    0.9909, 0, 0.1343,
    0.9909, 0, 0.1343,
    -0.6923, 0, 0.7216,
    -0.6923, 0, 0.7216,
    -0.6923, 0, 0.7216,
    -0.6923, 0, 0.7216,
    -0.2172, 0, -0.9761,
    -0.2172, 0, -0.9761,
    -0.2172, 0, -0.9761,
    -0.2172, 0, -0.9761,
    0.2253, 0, 0.9743,
    0.2253, 0, 0.9743,
    0.2253, 0, 0.9743,
    0.2253, 0, 0.9743,
    -0.5886, 0, 0.8084,
    -0.5886, 0, 0.8084,
    -0.5886, 0, 0.8084,
    -0.5886, 0, 0.8084,
    -0.5072, 0, 0.8618,
    -0.5072, 0, 0.8618,
    -0.5072, 0, 0.8618,
    -0.5072, 0, 0.8618,
    -0.1759, 0, -0.9844,
    -0.1759, 0, -0.9844,
    -0.1759, 0, -0.9844,
    -0.1759, 0, -0.9844,
    -0.5485, 0, 0.8361,
    -0.5485, 0, 0.8361,
    -0.5485, 0, 0.8361,
    -0.5485, 0, 0.8361,
    -0.9972, 0, -0.0751,
    -0.9972, 0, -0.0751,
    -0.9972, 0, -0.0751,
    -0.9972, 0, -0.0751,
    0.3921, 0, -0.9199,
    0.3921, 0, -0.9199,
    0.3921, 0, -0.9199,
    0.3921, 0, -0.9199,
    -0.2887, 0, -0.9574,
    -0.2887, 0, -0.9574,
    -0.2887, 0, -0.9574,
    -0.2887, 0, -0.9574,
    -0.4759, 0, -0.8795,
    -0.4759, 0, -0.8795,
    -0.4759, 0, -0.8795,
    -0.4759, 0, -0.8795,
    0.7218, 0, -0.6921,
    0.7218, 0, -0.6921,
    0.7218, 0, -0.6921,
    0.7218, 0, -0.6921,
    -0.8004, 0, 0.5995,
    -0.8004, 0, 0.5995,
    -0.8004, 0, 0.5995,
    -0.8004, 0, 0.5995,
    -0.9775, 0, -0.2109,
    -0.9775, 0, -0.2109,
    -0.9775, 0, -0.2109,
    -0.9775, 0, -0.2109,
    0.9037, 0, -0.4283,
    0.9037, 0, -0.4283,
    0.9037, 0, -0.4283,
    0.9037, 0, -0.4283,
    0.3375, 0, 0.9413,
    0.3375, 0, 0.9413,
    0.3375, 0, 0.9413,
    0.3375, 0, 0.9413,
    -0.9952, 0, 0.0974,
    -0.9952, 0, 0.0974,
    -0.9952, 0, 0.0974,
    -0.9952, 0, 0.0974
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.134702, 0.449275,
    0.167018, 0.432826,
    0.168519, 0.450257,
    0.164891, 0.478184,
    0.158871, 0.461435,
    0.138643, 0.464487,
    0.131032, 0.459575,
    0.122556, 0.442634,
    0.241379, 0.40283,
    0.250427, 0.37904,
    0.231431, 0.413379,
    0.210867, 0.429466,
    0.193518, 0.402156,
    0.171302, 0.405384,
    0.186784, 0.388559,
    0.194906, 0.375238,
    0.199435, 0.383862,
    0.196119, 0.393807,
    0.209855, 0.382817,
    0.222328, 0.401965,
    0.23487, 0.400727,
    0.240612, 0.372433,
    0.262718, 0.360162,
    0.291264, 0.353918,
    0.323629, 0.400324,
    0.31829, 0.408887,
    0.331779, 0.430936,
    0.324097, 0.453825,
    0.339463, 0.465016,
    0.339464, 0.476383,
    0.35676, 0.505848,
    0.336575, 0.51044,
    0.316277, 0.515967,
    0.293674, 0.513323,
    0.282412, 0.493555,
    0.269734, 0.492878,
    0.256687, 0.507577,
    0.254809, 0.520515,
    0.225248, 0.503851,
    0.220476, 0.502943,
    0.208026, 0.506364,
    0.19054, 0.504461,
    0.200341, 0.486469,
    0.188552, 0.49977,
    0.176268, 0.498209,
    0.168212, 0.487726,
    0.169044, 0.47838,
    0.188122, 0.44997,
    0.222271, 0.436185,
    0.234562, 0.418073,
    0.437366, 0.012015,
    0.477251, 0.012015,
    0.477251, 0.027047,
    0.437366, 0.027047,
    0.437469, 0.012015,
    0.424504, 0.012015,
    0.424504, 0.027047,
    0.437469, 0.027047,
    0.519476, 0.012015,
    0.489016, 0.012015,
    0.489016, 0.027047,
    0.519476, 0.027047,
    0.424504, 0.012015,
    0.392606, 0.012015,
    0.392606, 0.027047,
    0.424504, 0.027047,
    0.39095, 0.012015,
    0.373381, 0.012015,
    0.373381, 0.027047,
    0.39095, 0.027047,
    0.58821, 0.012015,
    0.606546, 0.012015,
    0.606546, 0.027047,
    0.58821, 0.027047,
    0.426222, 0.012015,
    0.48814, 0.012015,
    0.48814, 0.027047,
    0.426222, 0.027047,
    0.409755, 0.012015,
    0.437366, 0.012015,
    0.437366, 0.027047,
    0.409755, 0.027047,
    0.606546, 0.012015,
    0.559858, 0.012015,
    0.559858, 0.027047,
    0.606546, 0.027047,
    0.478912, 0.012015,
    0.507745, 0.012015,
    0.507745, 0.027047,
    0.478912, 0.027047,
    0.345422, 0.012015,
    0.406472, 0.012015,
    0.406472, 0.027047,
    0.345422, 0.027047,
    0.572218, 0.012015,
    0.518534, 0.012015,
    0.518534, 0.027047,
    0.572218, 0.027047,
    0.443856, 0.012015,
    0.437247, 0.012015,
    0.437247, 0.027047,
    0.443856, 0.027047,
    0.562047, 0.012015,
    0.604544, 0.012015,
    0.604544, 0.027047,
    0.562047, 0.027047,
    0.392606, 0.012015,
    0.411475, 0.012015,
    0.411475, 0.027047,
    0.392606, 0.027047,
    0.668271, 0.012015,
    0.653969, 0.012015,
    0.653969, 0.027047,
    0.668271, 0.027047,
    0.437247, 0.012015,
    0.415831, 0.012015,
    0.415831, 0.027047,
    0.437247, 0.027047,
    0.482452, 0.012015,
    0.52574, 0.012015,
    0.52574, 0.027047,
    0.482452, 0.027047,
    0.518534, 0.012015,
    0.475631, 0.012015,
    0.475631, 0.027047,
    0.518534, 0.027047,
    0.415831, 0.012015,
    0.390592, 0.012015,
    0.390592, 0.027047,
    0.415831, 0.027047,
    0.52574, 0.012015,
    0.555033, 0.012015,
    0.555033, 0.027047,
    0.52574, 0.027047,
    0.436275, 0.012015,
    0.382195, 0.012015,
    0.382195, 0.027047,
    0.436275, 0.027047,
    0.519913, 0.012015,
    0.541285, 0.012015,
    0.541285, 0.027047,
    0.519913, 0.027047,
    0.49417, 0.012015,
    0.480547, 0.012015,
    0.480547, 0.027047,
    0.49417, 0.027047,
    0.555033, 0.012015,
    0.583151, 0.012015,
    0.583151, 0.027047,
    0.555033, 0.027047,
    0.432789, 0.012015,
    0.46849, 0.012015,
    0.46849, 0.027047,
    0.432789, 0.027047,
    0.468929, 0.012015,
    0.432789, 0.012015,
    0.432789, 0.027047,
    0.468929, 0.027047,
    0.376692, 0.012015,
    0.426222, 0.012015,
    0.426222, 0.027047,
    0.376692, 0.027047,
    0.342227, 0.012015,
    0.35862, 0.012015,
    0.35862, 0.027047,
    0.342227, 0.027047,
    0.573655, 0.012015,
    0.541162, 0.012015,
    0.541162, 0.027047,
    0.573655, 0.027047,
    0.600451, 0.012015,
    0.657773, 0.012015,
    0.657773, 0.027047,
    0.600451, 0.027047,
    0.379295, 0.012015,
    0.473271, 0.012015,
    0.473271, 0.027047,
    0.379295, 0.027047,
    0.364547, 0.012015,
    0.402688, 0.012015,
    0.402688, 0.027047,
    0.364547, 0.027047,
    0.541285, 0.012015,
    0.572218, 0.012015,
    0.572218, 0.027047,
    0.541285, 0.027047,
    0.642568, 0.012015,
    0.608534, 0.012015,
    0.608534, 0.027047,
    0.642568, 0.027047,
    0.604544, 0.012015,
    0.652493, 0.012015,
    0.652493, 0.027047,
    0.604544, 0.027047,
    0.390592, 0.012015,
    0.418489, 0.012015,
    0.418489, 0.027047,
    0.390592, 0.027047,
    0.48814, 0.012015,
    0.519913, 0.012015,
    0.519913, 0.027047,
    0.48814, 0.027047,
    0.608534, 0.012015,
    0.573655, 0.012015,
    0.573655, 0.027047,
    0.608534, 0.027047,
    0.46849, 0.012015,
    0.490461, 0.012015,
    0.490461, 0.027047,
    0.46849, 0.027047,
    0.623637, 0.012015,
    0.585428, 0.012015,
    0.585428, 0.027047,
    0.623637, 0.027047,
    0.418489, 0.012015,
    0.39095, 0.012015,
    0.39095, 0.027047,
    0.418489, 0.027047,
    0.373433, 0.012015,
    0.340446, 0.012015,
    0.340446, 0.027047,
    0.373433, 0.027047,
    0.538283, 0.012015,
    0.519476, 0.012015,
    0.519476, 0.027047,
    0.538283, 0.027047,
    0.35862, 0.012015,
    0.371364, 0.012015,
    0.371364, 0.027047,
    0.35862, 0.027047,
    0.409852, 0.012015,
    0.370932, 0.012015,
    0.370932, 0.027047,
    0.409852, 0.027047,
    0.515936, 0.012015,
    0.49417, 0.012015,
    0.49417, 0.027047,
    0.515936, 0.027047,
    0.583151, 0.012015,
    0.600451, 0.012015,
    0.600451, 0.027047,
    0.583151, 0.027047,
    0.512914, 0.012015,
    0.532896, 0.012015,
    0.532896, 0.027047,
    0.512914, 0.027047,
    0.477251, 0.012015,
    0.447417, 0.012015,
    0.447417, 0.027047,
    0.477251, 0.027047
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    249, 248, 246,
    248, 247, 246,
    245, 244, 242,
    244, 243, 242,
    241, 240, 238,
    240, 239, 238,
    237, 236, 234,
    236, 235, 234,
    233, 232, 230,
    232, 231, 230,
    229, 228, 226,
    228, 227, 226,
    225, 224, 222,
    224, 223, 222,
    221, 220, 218,
    220, 219, 218,
    217, 216, 214,
    216, 215, 214,
    213, 212, 210,
    212, 211, 210,
    209, 208, 206,
    208, 207, 206,
    205, 204, 202,
    204, 203, 202,
    201, 200, 198,
    200, 199, 198,
    197, 196, 194,
    196, 195, 194,
    193, 192, 190,
    192, 191, 190,
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
    17, 16, 15,
    17, 15, 12,
    15, 14, 12,
    14, 13, 12,
    19, 17, 12,
    19, 18, 17,
    19, 12, 10,
    12, 11, 10,
    20, 10, 9,
    20, 19, 10,
    22, 20, 9,
    25, 24, 22,
    24, 23, 22,
    22, 21, 20,
    26, 25, 22,
    30, 29, 27,
    29, 28, 27,
    27, 26, 22,
    31, 30, 27,
    32, 31, 27,
    33, 32, 27,
    34, 33, 27,
    35, 27, 22,
    35, 34, 27,
    36, 35, 22,
    38, 37, 36,
    9, 39, 22,
    39, 36, 22,
    39, 38, 36,
    41, 40, 39,
    46, 45, 42,
    45, 44, 42,
    44, 43, 42,
    42, 41, 39,
    47, 46, 42,
    48, 47, 42,
    49, 42, 39,
    49, 48, 42,
    9, 8, 39,
    8, 49, 39,
    6, 5, 2,
    5, 4, 2,
    4, 3, 2,
    6, 2, 0,
    0, 7, 6,
    2, 1, 0
]);
