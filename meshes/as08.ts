import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_as08(gl: WebGLRenderingContext): Mesh {
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
    -100.565, 0.999796, -34.967,
    -96.8564, 0.999796, -40.5578,
    -94.1664, 0.999796, -40.2106,
    -94.002, 0.999796, -38.7241,
    -88.0696, 0.999796, -36.6162,
    -81.0815, 0.999796, -37.7881,
    -80.2764, 0.999796, -39.4087,
    -76.455, 0.999796, -40.4424,
    -75.7253, 0.999796, -43.2713,
    -74.5497, 0.999796, -44.8691,
    -76.6728, 0.999796, -46.4264,
    -77.6031, 0.999795, -46.8079,
    -79.2786, 0.999796, -46.3225,
    -79.5613, 0.999796, -45.7317,
    -82.5353, 0.999796, -45.6913,
    -82.106, 0.999795, -46.8938,
    -83.0589, 0.999795, -48.3552,
    -85.8654, 0.999795, -47.4,
    -86.5042, 0.999796, -46.0708,
    -89.1217, 0.999796, -46.2796,
    -92.826, 0.999796, -44.743,
    -96.0742, 0.999796, -46.0699,
    -98.9968, 0.999796, -45.3089,
    -101.266, 0.999795, -48.8588,
    -100.818, 0.999795, -49.2421,
    -102.703, 0.999795, -50.1447,
    -104.895, 0.999795, -49.7088,
    -106.388, 0.999795, -47.6346,
    -107.202, 0.999796, -45.3714,
    -108.881, 0.999796, -44.9543,
    -109.862, 0.999796, -43.1386,
    -111.1, 0.999796, -43.1265,
    -111.718, 0.999796, -43.6116,
    -112.64, 0.999796, -43.9001,
    -112.981, 0.999796, -43.1712,
    -111.49, 0.999796, -40.3201,
    -109.781, 0.999796, -40.0497,
    -109.55, 0.999796, -37.3914,
    -108.721, 0.999796, -36.4304,
    -108.71, 0.999796, -35.8435,
    -107.033, 0.999796, -34.4511,
    -107.776, 0.999795, -33.4901,
    -108.546, 0.999795, -32.1494,
    -108.431, 0.999795, -30.2792,
    -106.022, 0.999795, -29.7611,
    -106.19, 0.999795, -32.6954,
    -104.943, 0.999795, -32.9542,
    -105.205, 0.999796, -33.7882,
    -104.304, 0.999796, -35.0251,
    -101.801, 0.999796, -33.9892,
    -102.251, 0.999796, -35.8878,
    -101.801, -0.000204, -33.9892,
    -102.251, -0.000204, -35.8878,
    -102.251, 0.999796, -35.8878,
    -101.801, 0.999796, -33.9892,
    -112.64, -0.000204, -43.9001,
    -112.981, -0.000204, -43.1712,
    -112.981, 0.999796, -43.1712,
    -112.64, 0.999796, -43.9001,
    -111.49, -0.000204, -40.3201,
    -109.781, -0.000204, -40.0497,
    -109.781, 0.999796, -40.0497,
    -111.49, 0.999796, -40.3201,
    -76.6728, -0.000204, -46.4264,
    -77.6031, -0.000205, -46.8079,
    -77.6031, 0.999795, -46.8079,
    -76.6728, 0.999796, -46.4264,
    -109.781, -0.000204, -40.0497,
    -109.55, -0.000204, -37.3914,
    -109.55, 0.999796, -37.3914,
    -109.781, 0.999796, -40.0497,
    -77.6031, -0.000205, -46.8079,
    -79.2786, -0.000204, -46.3225,
    -79.2786, 0.999796, -46.3225,
    -77.6031, 0.999795, -46.8079,
    -109.55, -0.000204, -37.3914,
    -108.721, -0.000204, -36.4304,
    -108.721, 0.999796, -36.4304,
    -109.55, 0.999796, -37.3914,
    -79.2786, -0.000204, -46.3225,
    -79.5613, -0.000204, -45.7317,
    -79.5613, 0.999796, -45.7317,
    -79.2786, 0.999796, -46.3225,
    -108.721, -0.000204, -36.4304,
    -108.71, -0.000204, -35.8435,
    -108.71, 0.999796, -35.8435,
    -108.721, 0.999796, -36.4304,
    -79.5613, -0.000204, -45.7317,
    -82.5353, -0.000204, -45.6913,
    -82.5353, 0.999796, -45.6913,
    -79.5613, 0.999796, -45.7317,
    -108.71, -0.000204, -35.8435,
    -107.033, -0.000204, -34.4511,
    -107.033, 0.999796, -34.4511,
    -108.71, 0.999796, -35.8435,
    -82.5353, -0.000204, -45.6913,
    -82.106, -0.000205, -46.8938,
    -82.106, 0.999795, -46.8938,
    -82.5353, 0.999796, -45.6913,
    -107.033, -0.000204, -34.4511,
    -107.776, -0.000205, -33.4901,
    -107.776, 0.999795, -33.4901,
    -107.033, 0.999796, -34.4511,
    -82.106, -0.000205, -46.8938,
    -83.0589, -0.000205, -48.3552,
    -83.0589, 0.999795, -48.3552,
    -82.106, 0.999795, -46.8938,
    -100.818, -0.000205, -49.2421,
    -102.703, -0.000205, -50.1447,
    -102.703, 0.999795, -50.1447,
    -100.818, 0.999795, -49.2421,
    -83.0589, -0.000205, -48.3552,
    -85.8654, -0.000205, -47.4,
    -85.8654, 0.999795, -47.4,
    -83.0589, 0.999795, -48.3552,
    -101.266, -0.000205, -48.8588,
    -100.818, -0.000205, -49.2421,
    -100.818, 0.999795, -49.2421,
    -101.266, 0.999795, -48.8588,
    -85.8654, -0.000205, -47.4,
    -86.5042, -0.000204, -46.0708,
    -86.5042, 0.999796, -46.0708,
    -85.8654, 0.999795, -47.4,
    -107.776, -0.000205, -33.4901,
    -108.546, -0.000205, -32.1494,
    -108.546, 0.999795, -32.1494,
    -107.776, 0.999795, -33.4901,
    -86.5042, -0.000204, -46.0708,
    -89.1217, -0.000204, -46.2796,
    -89.1217, 0.999796, -46.2796,
    -86.5042, 0.999796, -46.0708,
    -107.202, -0.000204, -45.3714,
    -108.881, -0.000204, -44.9543,
    -108.881, 0.999796, -44.9543,
    -107.202, 0.999796, -45.3714,
    -89.1217, -0.000204, -46.2796,
    -92.826, -0.000204, -44.743,
    -92.826, 0.999796, -44.743,
    -89.1217, 0.999796, -46.2796,
    -111.1, -0.000204, -43.1265,
    -111.718, -0.000204, -43.6116,
    -111.718, 0.999796, -43.6116,
    -111.1, 0.999796, -43.1265,
    -92.826, -0.000204, -44.743,
    -96.0742, -0.000204, -46.0699,
    -96.0742, 0.999796, -46.0699,
    -92.826, 0.999796, -44.743,
    -111.718, -0.000204, -43.6116,
    -112.64, -0.000204, -43.9001,
    -112.64, 0.999796, -43.9001,
    -111.718, 0.999796, -43.6116,
    -96.0742, -0.000204, -46.0699,
    -98.9968, -0.000204, -45.3089,
    -98.9968, 0.999796, -45.3089,
    -96.0742, 0.999796, -46.0699,
    -109.862, -0.000204, -43.1386,
    -111.1, -0.000204, -43.1265,
    -111.1, 0.999796, -43.1265,
    -109.862, 0.999796, -43.1386,
    -98.9968, -0.000204, -45.3089,
    -101.266, -0.000205, -48.8588,
    -101.266, 0.999795, -48.8588,
    -98.9968, 0.999796, -45.3089,
    -74.5497, -0.000204, -44.8691,
    -76.6728, -0.000204, -46.4264,
    -76.6728, 0.999796, -46.4264,
    -74.5497, 0.999796, -44.8691,
    -104.895, -0.000205, -49.7088,
    -106.388, -0.000205, -47.6346,
    -106.388, 0.999795, -47.6346,
    -104.895, 0.999795, -49.7088,
    -75.7253, -0.000204, -43.2713,
    -74.5497, -0.000204, -44.8691,
    -74.5497, 0.999796, -44.8691,
    -75.7253, 0.999796, -43.2713,
    -106.388, -0.000205, -47.6346,
    -107.202, -0.000204, -45.3714,
    -107.202, 0.999796, -45.3714,
    -106.388, 0.999795, -47.6346,
    -108.881, -0.000204, -44.9543,
    -109.862, -0.000204, -43.1386,
    -109.862, 0.999796, -43.1386,
    -108.881, 0.999796, -44.9543,
    -112.981, -0.000204, -43.1712,
    -111.49, -0.000204, -40.3201,
    -111.49, 0.999796, -40.3201,
    -112.981, 0.999796, -43.1712,
    -76.455, -0.000204, -40.4424,
    -75.7253, -0.000204, -43.2713,
    -75.7253, 0.999796, -43.2713,
    -76.455, 0.999796, -40.4424,
    -102.703, -0.000205, -50.1447,
    -104.895, -0.000205, -49.7088,
    -104.895, 0.999795, -49.7088,
    -102.703, 0.999795, -50.1447,
    -80.2764, -0.000204, -39.4087,
    -76.455, -0.000204, -40.4424,
    -76.455, 0.999796, -40.4424,
    -80.2764, 0.999796, -39.4087,
    -108.546, -0.000205, -32.1494,
    -108.431, -0.000205, -30.2792,
    -108.431, 0.999795, -30.2792,
    -108.546, 0.999795, -32.1494,
    -81.0815, -0.000204, -37.7881,
    -80.2764, -0.000204, -39.4087,
    -80.2764, 0.999796, -39.4087,
    -81.0815, 0.999796, -37.7881,
    -108.431, -0.000205, -30.2792,
    -106.022, -0.000205, -29.7611,
    -106.022, 0.999795, -29.7611,
    -108.431, 0.999795, -30.2792,
    -88.0696, -0.000204, -36.6162,
    -81.0815, -0.000204, -37.7881,
    -81.0815, 0.999796, -37.7881,
    -88.0696, 0.999796, -36.6162,
    -106.022, -0.000205, -29.7611,
    -106.19, -0.000205, -32.6954,
    -106.19, 0.999795, -32.6954,
    -106.022, 0.999795, -29.7611,
    -94.002, -0.000204, -38.7241,
    -88.0696, -0.000204, -36.6162,
    -88.0696, 0.999796, -36.6162,
    -94.002, 0.999796, -38.7241,
    -106.19, -0.000205, -32.6954,
    -104.943, -0.000205, -32.9542,
    -104.943, 0.999795, -32.9542,
    -106.19, 0.999795, -32.6954,
    -94.1664, -0.000204, -40.2106,
    -94.002, -0.000204, -38.7241,
    -94.002, 0.999796, -38.7241,
    -94.1664, 0.999796, -40.2106,
    -104.943, -0.000205, -32.9542,
    -105.205, -0.000204, -33.7882,
    -105.205, 0.999796, -33.7882,
    -104.943, 0.999795, -32.9542,
    -96.8564, -0.000204, -40.5578,
    -94.1664, -0.000204, -40.2106,
    -94.1664, 0.999796, -40.2106,
    -96.8564, 0.999796, -40.5578,
    -105.205, -0.000204, -33.7882,
    -104.304, -0.000204, -35.0251,
    -104.304, 0.999796, -35.0251,
    -105.205, 0.999796, -33.7882,
    -100.565, -0.000204, -34.967,
    -96.8564, -0.000204, -40.5578,
    -96.8564, 0.999796, -40.5578,
    -100.565, 0.999796, -34.967,
    -104.304, -0.000204, -35.0251,
    -101.801, -0.000204, -33.9892,
    -101.801, 0.999796, -33.9892,
    -104.304, 0.999796, -35.0251,
    -102.251, -0.000204, -35.8878,
    -100.565, -0.000204, -34.967,
    -100.565, 0.999796, -34.967,
    -102.251, 0.999796, -35.8878
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
    0.973, 0, -0.2307,
    0.973, 0, -0.2307,
    0.973, 0, -0.2307,
    0.973, 0, -0.2307,
    -0.9058, 0, -0.4236,
    -0.9058, 0, -0.4236,
    -0.9058, 0, -0.4236,
    -0.9058, 0, -0.4236,
    -0.1564, 0, 0.9877,
    -0.1564, 0, 0.9877,
    -0.1564, 0, 0.9877,
    -0.1564, 0, 0.9877,
    0.3794, 0, -0.9253,
    0.3794, 0, -0.9253,
    0.3794, 0, -0.9253,
    0.3794, 0, -0.9253,
    -0.9962, 0, 0.0867,
    -0.9962, 0, 0.0867,
    -0.9962, 0, 0.0867,
    -0.9962, 0, 0.0867,
    -0.2782, 0, -0.9605,
    -0.2782, 0, -0.9605,
    -0.2782, 0, -0.9605,
    -0.2782, 0, -0.9605,
    -0.7574, 0, 0.653,
    -0.7574, 0, 0.653,
    -0.7574, 0, 0.653,
    -0.7574, 0, 0.653,
    -0.9021, 0, -0.4316,
    -0.9021, 0, -0.4316,
    -0.9021, 0, -0.4316,
    -0.9021, 0, -0.4316,
    -0.9998, 0, 0.0195,
    -0.9998, 0, 0.0195,
    -0.9998, 0, 0.0195,
    -0.9998, 0, 0.0195,
    -0.0136, 0, -0.9999,
    -0.0136, 0, -0.9999,
    -0.0136, 0, -0.9999,
    -0.0136, 0, -0.9999,
    -0.6389, 0, 0.7693,
    -0.6389, 0, 0.7693,
    -0.6389, 0, 0.7693,
    -0.6389, 0, 0.7693,
    0.9418, 0, 0.3363,
    0.9418, 0, 0.3363,
    0.9418, 0, 0.3363,
    0.9418, 0, 0.3363,
    -0.7913, 0, -0.6114,
    -0.7913, 0, -0.6114,
    -0.7913, 0, -0.6114,
    -0.7913, 0, -0.6114,
    0.8377, 0, -0.5462,
    0.8377, 0, -0.5462,
    0.8377, 0, -0.5462,
    0.8377, 0, -0.5462,
    0.4318, 0, -0.902,
    0.4318, 0, -0.902,
    0.4318, 0, -0.902,
    0.4318, 0, -0.902,
    -0.3222, 0, -0.9467,
    -0.3222, 0, -0.9467,
    -0.3222, 0, -0.9467,
    -0.3222, 0, -0.9467,
    0.6495, 0, 0.7604,
    0.6495, 0, 0.7604,
    0.6495, 0, 0.7604,
    0.6495, 0, 0.7604,
    -0.9013, 0, -0.4331,
    -0.9013, 0, -0.4331,
    -0.9013, 0, -0.4331,
    -0.9013, 0, -0.4331,
    -0.867, 0, -0.4983,
    -0.867, 0, -0.4983,
    -0.867, 0, -0.4983,
    -0.867, 0, -0.4983,
    0.0795, 0, -0.9968,
    0.0795, 0, -0.9968,
    0.0795, 0, -0.9968,
    0.0795, 0, -0.9968,
    -0.2411, 0, -0.9705,
    -0.2411, 0, -0.9705,
    -0.2411, 0, -0.9705,
    -0.2411, 0, -0.9705,
    -0.3832, 0, -0.9237,
    -0.3832, 0, -0.9237,
    -0.3832, 0, -0.9237,
    -0.3832, 0, -0.9237,
    0.6169, 0, -0.7871,
    0.6169, 0, -0.7871,
    0.6169, 0, -0.7871,
    0.6169, 0, -0.7871,
    0.3782, 0, -0.9257,
    0.3782, 0, -0.9257,
    0.3782, 0, -0.9257,
    0.3782, 0, -0.9257,
    0.2987, 0, -0.9544,
    0.2987, 0, -0.9544,
    0.2987, 0, -0.9544,
    0.2987, 0, -0.9544,
    -0.252, 0, -0.9677,
    -0.252, 0, -0.9677,
    -0.252, 0, -0.9677,
    -0.252, 0, -0.9677,
    -0.0098, 0, -1,
    -0.0098, 0, -1,
    -0.0098, 0, -1,
    -0.0098, 0, -1,
    0.8425, 0, -0.5386,
    0.8425, 0, -0.5386,
    0.8425, 0, -0.5386,
    0.8425, 0, -0.5386,
    0.5915, 0, -0.8063,
    0.5915, 0, -0.8063,
    0.5915, 0, -0.8063,
    0.5915, 0, -0.8063,
    -0.8116, 0, -0.5842,
    -0.8116, 0, -0.5842,
    -0.8116, 0, -0.5842,
    -0.8116, 0, -0.5842,
    0.8055, 0, 0.5927,
    0.8055, 0, 0.5927,
    0.8055, 0, 0.5927,
    0.8055, 0, 0.5927,
    -0.941, 0, -0.3384,
    -0.941, 0, -0.3384,
    -0.941, 0, -0.3384,
    -0.941, 0, -0.3384,
    -0.8798, 0, -0.4754,
    -0.8798, 0, -0.4754,
    -0.8798, 0, -0.4754,
    -0.8798, 0, -0.4754,
    -0.886, 0, 0.4636,
    -0.886, 0, 0.4636,
    -0.886, 0, 0.4636,
    -0.886, 0, 0.4636,
    0.9683, 0, 0.2498,
    0.9683, 0, 0.2498,
    0.9683, 0, 0.2498,
    0.9683, 0, 0.2498,
    -0.1951, 0, -0.9808,
    -0.1951, 0, -0.9808,
    -0.1951, 0, -0.9808,
    -0.1951, 0, -0.9808,
    0.2611, 0, 0.9653,
    0.2611, 0, 0.9653,
    0.2611, 0, 0.9653,
    0.2611, 0, 0.9653,
    -0.9981, 0, 0.0616,
    -0.9981, 0, 0.0616,
    -0.9981, 0, 0.0616,
    -0.9981, 0, 0.0616,
    0.8956, 0, 0.4449,
    0.8956, 0, 0.4449,
    0.8956, 0, 0.4449,
    0.8956, 0, 0.4449,
    -0.2103, 0, 0.9776,
    -0.2103, 0, 0.9776,
    -0.2103, 0, 0.9776,
    -0.2103, 0, 0.9776,
    0.1654, 0, 0.9862,
    0.1654, 0, 0.9862,
    0.1654, 0, 0.9862,
    0.1654, 0, 0.9862,
    0.9984, 0, -0.0569,
    0.9984, 0, -0.0569,
    0.9984, 0, -0.0569,
    0.9984, 0, -0.0569,
    -0.3348, 0, 0.9423,
    -0.3348, 0, 0.9423,
    -0.3348, 0, 0.9423,
    -0.3348, 0, 0.9423,
    0.2033, 0, 0.9791,
    0.2033, 0, 0.9791,
    0.2033, 0, 0.9791,
    0.2033, 0, 0.9791,
    -0.9939, 0, 0.11,
    -0.9939, 0, 0.11,
    -0.9939, 0, 0.11,
    -0.9939, 0, 0.11,
    0.9543, 0, -0.2989,
    0.9543, 0, -0.2989,
    0.9543, 0, -0.2989,
    0.9543, 0, -0.2989,
    -0.128, 0, 0.9918,
    -0.128, 0, 0.9918,
    -0.128, 0, 0.9918,
    -0.128, 0, 0.9918,
    0.8084, 0, 0.5886,
    0.8084, 0, 0.5886,
    0.8084, 0, 0.5886,
    0.8084, 0, 0.5886,
    0.8333, 0, 0.5528,
    0.8333, 0, 0.5528,
    0.8333, 0, 0.5528,
    0.8333, 0, 0.5528,
    -0.3824, 0, 0.924,
    -0.3824, 0, 0.924,
    -0.3824, 0, 0.924,
    -0.3824, 0, 0.924,
    -0.4793, 0, 0.8777,
    -0.4793, 0, 0.8777,
    -0.4793, 0, 0.8777,
    -0.4793, 0, 0.8777
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.289071, 0.631729,
    0.322096, 0.619949,
    0.323718, 0.605867,
    0.316384, 0.603163,
    0.313152, 0.570418,
    0.327885, 0.536443,
    0.337119, 0.534397,
    0.347169, 0.516312,
    0.362437, 0.516168,
    0.372021, 0.512214,
    0.377251, 0.524942,
    0.378016, 0.530141,
    0.373447, 0.538031,
    0.370094, 0.538722,
    0.366149, 0.553758,
    0.372789, 0.553092,
    0.379004, 0.559764,
    0.370628, 0.572799,
    0.363082, 0.574368,
    0.360849, 0.587909,
    0.348396, 0.604767,
    0.351041, 0.622914,
    0.343505, 0.636782,
    0.358659, 0.65276,
    0.361167, 0.650966,
    0.363375, 0.661667,
    0.358407, 0.672235,
    0.346008, 0.6772,
    0.333503, 0.678483,
    0.329275, 0.686477,
    0.318831, 0.689171,
    0.317213, 0.695433,
    0.318895, 0.699182,
    0.319199, 0.704222,
    0.315073, 0.705034,
    0.302486, 0.693881,
    0.303263, 0.684875,
    0.290069, 0.680358,
    0.286236, 0.674947,
    0.283273, 0.674151,
    0.278318, 0.663894,
    0.27251, 0.666452,
    0.264739, 0.668675,
    0.255397, 0.665738,
    0.255799, 0.652866,
    0.270473, 0.657406,
    0.273353, 0.651409,
    0.277256, 0.653784,
    0.284663, 0.65077,
    0.282556, 0.63677,
    0.291621, 0.641441,
    0.282556, 0.63677,
    0.291621, 0.641441,
    0.291621, 0.641441,
    0.282556, 0.63677,
    0.319199, 0.704222,
    0.315073, 0.705034,
    0.315073, 0.705034,
    0.319199, 0.704222,
    0.302486, 0.693881,
    0.303263, 0.684875,
    0.303263, 0.684875,
    0.302486, 0.693881,
    0.377251, 0.524942,
    0.378016, 0.530141,
    0.378016, 0.530141,
    0.377251, 0.524942,
    0.303263, 0.684875,
    0.290069, 0.680358,
    0.290069, 0.680358,
    0.303263, 0.684875,
    0.378016, 0.530141,
    0.373447, 0.538031,
    0.373447, 0.538031,
    0.378016, 0.530141,
    0.290069, 0.680358,
    0.286236, 0.674947,
    0.286236, 0.674947,
    0.290069, 0.680358,
    0.373447, 0.538031,
    0.370094, 0.538722,
    0.370094, 0.538722,
    0.373447, 0.538031,
    0.286236, 0.674947,
    0.283273, 0.674151,
    0.283273, 0.674151,
    0.286236, 0.674947,
    0.370094, 0.538722,
    0.366149, 0.553758,
    0.366149, 0.553758,
    0.370094, 0.538722,
    0.283273, 0.674151,
    0.278318, 0.663894,
    0.278318, 0.663894,
    0.283273, 0.674151,
    0.366149, 0.553758,
    0.372789, 0.553092,
    0.372789, 0.553092,
    0.366149, 0.553758,
    0.278318, 0.663894,
    0.27251, 0.666452,
    0.27251, 0.666452,
    0.278318, 0.663894,
    0.372789, 0.553092,
    0.379004, 0.559764,
    0.379004, 0.559764,
    0.372789, 0.553092,
    0.361167, 0.650966,
    0.363375, 0.661667,
    0.363375, 0.661667,
    0.361167, 0.650966,
    0.379004, 0.559764,
    0.370628, 0.572799,
    0.370628, 0.572799,
    0.379004, 0.559764,
    0.358659, 0.65276,
    0.361167, 0.650966,
    0.361167, 0.650966,
    0.358659, 0.65276,
    0.370628, 0.572799,
    0.363082, 0.574368,
    0.363082, 0.574368,
    0.370628, 0.572799,
    0.27251, 0.666452,
    0.264739, 0.668675,
    0.264739, 0.668675,
    0.27251, 0.666452,
    0.363082, 0.574368,
    0.360849, 0.587909,
    0.360849, 0.587909,
    0.363082, 0.574368,
    0.333503, 0.678483,
    0.329275, 0.686477,
    0.329275, 0.686477,
    0.333503, 0.678483,
    0.360849, 0.587909,
    0.348396, 0.604767,
    0.348396, 0.604767,
    0.360849, 0.587909,
    0.317213, 0.695433,
    0.318895, 0.699182,
    0.318895, 0.699182,
    0.317213, 0.695433,
    0.348396, 0.604767,
    0.351041, 0.622914,
    0.351041, 0.622914,
    0.348396, 0.604767,
    0.318895, 0.699182,
    0.319199, 0.704222,
    0.319199, 0.704222,
    0.318895, 0.699182,
    0.351041, 0.622914,
    0.343505, 0.636782,
    0.343505, 0.636782,
    0.351041, 0.622914,
    0.318831, 0.689171,
    0.317213, 0.695433,
    0.317213, 0.695433,
    0.318831, 0.689171,
    0.343505, 0.636782,
    0.358659, 0.65276,
    0.358659, 0.65276,
    0.343505, 0.636782,
    0.372021, 0.512214,
    0.377251, 0.524942,
    0.377251, 0.524942,
    0.372021, 0.512214,
    0.358407, 0.672235,
    0.346008, 0.6772,
    0.346008, 0.6772,
    0.358407, 0.672235,
    0.362437, 0.516168,
    0.372021, 0.512214,
    0.372021, 0.512214,
    0.362437, 0.516168,
    0.346008, 0.6772,
    0.333503, 0.678483,
    0.333503, 0.678483,
    0.346008, 0.6772,
    0.329275, 0.686477,
    0.318831, 0.689171,
    0.318831, 0.689171,
    0.329275, 0.686477,
    0.315073, 0.705034,
    0.302486, 0.693881,
    0.302486, 0.693881,
    0.315073, 0.705034,
    0.347169, 0.516312,
    0.362437, 0.516168,
    0.362437, 0.516168,
    0.347169, 0.516312,
    0.363375, 0.661667,
    0.358407, 0.672235,
    0.358407, 0.672235,
    0.363375, 0.661667,
    0.337119, 0.534397,
    0.347169, 0.516312,
    0.347169, 0.516312,
    0.337119, 0.534397,
    0.264739, 0.668675,
    0.255397, 0.665738,
    0.255397, 0.665738,
    0.264739, 0.668675,
    0.327885, 0.536443,
    0.337119, 0.534397,
    0.337119, 0.534397,
    0.327885, 0.536443,
    0.255397, 0.665738,
    0.255799, 0.652866,
    0.255799, 0.652866,
    0.255397, 0.665738,
    0.313152, 0.570418,
    0.327885, 0.536443,
    0.327885, 0.536443,
    0.313152, 0.570418,
    0.255799, 0.652866,
    0.270473, 0.657406,
    0.270473, 0.657406,
    0.255799, 0.652866,
    0.316384, 0.603163,
    0.313152, 0.570418,
    0.313152, 0.570418,
    0.316384, 0.603163,
    0.270473, 0.657406,
    0.273353, 0.651409,
    0.273353, 0.651409,
    0.270473, 0.657406,
    0.323718, 0.605867,
    0.316384, 0.603163,
    0.316384, 0.603163,
    0.323718, 0.605867,
    0.273353, 0.651409,
    0.277256, 0.653784,
    0.277256, 0.653784,
    0.273353, 0.651409,
    0.322096, 0.619949,
    0.323718, 0.605867,
    0.323718, 0.605867,
    0.322096, 0.619949,
    0.277256, 0.653784,
    0.284663, 0.65077,
    0.284663, 0.65077,
    0.277256, 0.653784,
    0.289071, 0.631729,
    0.322096, 0.619949,
    0.322096, 0.619949,
    0.289071, 0.631729,
    0.284663, 0.65077,
    0.282556, 0.63677,
    0.282556, 0.63677,
    0.284663, 0.65077,
    0.291621, 0.641441,
    0.289071, 0.631729,
    0.289071, 0.631729,
    0.291621, 0.641441
]);

// prettier-ignore
let index_arr = Uint16Array.from([
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
    58, 57, 55,
    57, 56, 55,
    54, 53, 51,
    53, 52, 51,
    4, 3, 2,
    5, 4, 2,
    6, 5, 2,
    7, 6, 2,
    8, 7, 2,
    9, 8, 2,
    12, 11, 10,
    10, 9, 2,
    13, 12, 10,
    13, 10, 1,
    10, 2, 1,
    14, 13, 1,
    19, 18, 14,
    18, 17, 14,
    17, 16, 14,
    16, 15, 14,
    20, 14, 1,
    20, 19, 14,
    22, 20, 1,
    22, 21, 20,
    23, 22, 1,
    27, 26, 23,
    26, 25, 23,
    25, 24, 23,
    28, 23, 1,
    28, 27, 23,
    30, 28, 1,
    30, 29, 28,
    31, 30, 1,
    35, 34, 31,
    34, 33, 31,
    33, 32, 31,
    36, 31, 1,
    36, 35, 31,
    38, 36, 1,
    38, 37, 36,
    40, 38, 1,
    40, 39, 38,
    42, 41, 40,
    43, 42, 40,
    44, 43, 40,
    45, 44, 40,
    46, 45, 40,
    47, 46, 40,
    48, 40, 1,
    48, 47, 40,
    1, 50, 48,
    50, 49, 48,
    1, 0, 50
]);