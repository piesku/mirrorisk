import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_as10(gl: WebGLRenderingContext): Mesh {
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
    -76.3671, 0.999796, -46.5123,
    -74.4646, 0.999796, -45.1167,
    -73.5577, 0.999796, -45.0908,
    -73.792, 0.999795, -47.5426,
    -70.5708, 0.999795, -51.1092,
    -73.9615, 0.999795, -52.8153,
    -69.379, 0.999795, -54.8417,
    -68.5626, 0.999796, -57.6971,
    -73.3402, 0.999796, -59.1681,
    -72.4326, 0.999796, -61.2852,
    -69.0289, 0.999796, -62.2978,
    -71.4646, 0.999796, -66.2946,
    -70.2701, 0.999796, -72.1159,
    -70.6849, 0.999796, -72.7096,
    -70.3082, 0.999796, -75.3689,
    -67.8216, 0.999796, -76.6547,
    -68.0372, 0.999796, -76.6547,
    -73.0648, 0.999796, -76.6547,
    -73.7245, 0.999796, -77.5165,
    -83.6381, 0.999796, -79.5596,
    -86.7039, 0.999796, -82.6201,
    -89.0662, 0.999796, -82.2301,
    -90.2071, 0.999796, -80.9332,
    -94.0504, 0.999796, -80.4106,
    -95.3102, 0.999796, -78.6344,
    -92.1576, 0.999796, -77.436,
    -88.6611, 0.999796, -76.6547,
    -90.638, 0.999796, -76.5767,
    -91.2566, 0.999796, -74.6911,
    -88.4277, 0.999796, -72.902,
    -89.7883, 0.999796, -68.7391,
    -86.851, 0.999796, -64.2215,
    -84.1372, 0.999796, -63.2505,
    -85.7455, 0.999796, -58.5756,
    -80.9117, 0.999796, -56.6846,
    -80.8346, 0.999795, -52.9946,
    -78.8951, 0.999795, -52.4861,
    -77.0711, 0.999795, -52.597,
    -74.9412, 0.999795, -49.9776,
    -73.5577, -0.000204, -45.0908,
    -73.792, -0.000205, -47.5426,
    -73.792, 0.999795, -47.5426,
    -73.5577, 0.999796, -45.0908,
    -80.8346, -0.000205, -52.9946,
    -78.8951, -0.000205, -52.4861,
    -78.8951, 0.999795, -52.4861,
    -80.8346, 0.999795, -52.9946,
    -67.8216, -0.000204, -76.6547,
    -68.0372, -0.000204, -76.6547,
    -68.0372, 0.999796, -76.6547,
    -67.8216, 0.999796, -76.6547,
    -70.2701, -0.000204, -72.1159,
    -70.6849, -0.000204, -72.7096,
    -70.6849, 0.999796, -72.7096,
    -70.2701, 0.999796, -72.1159,
    -80.9117, -0.000204, -56.6846,
    -80.8346, -0.000205, -52.9946,
    -80.8346, 0.999795, -52.9946,
    -80.9117, 0.999796, -56.6846,
    -70.3082, -0.000204, -75.3689,
    -67.8216, -0.000204, -76.6547,
    -67.8216, 0.999796, -76.6547,
    -70.3082, 0.999796, -75.3689,
    -74.4646, -0.000204, -45.1167,
    -73.5577, -0.000204, -45.0908,
    -73.5577, 0.999796, -45.0908,
    -74.4646, 0.999796, -45.1167,
    -85.7455, -0.000204, -58.5756,
    -80.9117, -0.000204, -56.6846,
    -80.9117, 0.999796, -56.6846,
    -85.7455, 0.999796, -58.5756,
    -70.6849, -0.000204, -72.7096,
    -70.3082, -0.000204, -75.3689,
    -70.3082, 0.999796, -75.3689,
    -70.6849, 0.999796, -72.7096,
    -88.6611, -0.000204, -76.6547,
    -90.638, -0.000204, -76.5767,
    -90.638, 0.999796, -76.5767,
    -88.6611, 0.999796, -76.6547,
    -84.1372, -0.000204, -63.2505,
    -85.7455, -0.000204, -58.5756,
    -85.7455, 0.999796, -58.5756,
    -84.1372, 0.999796, -63.2505,
    -68.5626, -0.000204, -57.6971,
    -73.3402, -0.000204, -59.1681,
    -73.3402, 0.999796, -59.1681,
    -68.5626, 0.999796, -57.6971,
    -72.4326, -0.000204, -61.2852,
    -69.0289, -0.000204, -62.2978,
    -69.0289, 0.999796, -62.2978,
    -72.4326, 0.999796, -61.2852,
    -70.5708, -0.000205, -51.1092,
    -73.9615, -0.000205, -52.8153,
    -73.9615, 0.999795, -52.8153,
    -70.5708, 0.999795, -51.1092,
    -95.3102, -0.000204, -78.6344,
    -92.1576, -0.000204, -77.436,
    -92.1576, 0.999796, -77.436,
    -95.3102, 0.999796, -78.6344,
    -69.379, -0.000205, -54.8417,
    -68.5626, -0.000204, -57.6971,
    -68.5626, 0.999796, -57.6971,
    -69.379, 0.999795, -54.8417,
    -69.0289, -0.000204, -62.2978,
    -71.4646, -0.000204, -66.2946,
    -71.4646, 0.999796, -66.2946,
    -69.0289, 0.999796, -62.2978,
    -94.0504, -0.000204, -80.4106,
    -95.3102, -0.000204, -78.6344,
    -95.3102, 0.999796, -78.6344,
    -94.0504, 0.999796, -80.4106,
    -91.2566, -0.000204, -74.6911,
    -88.4277, -0.000204, -72.902,
    -88.4277, 0.999796, -72.902,
    -91.2566, 0.999796, -74.6911,
    -73.792, -0.000205, -47.5426,
    -70.5708, -0.000205, -51.1092,
    -70.5708, 0.999795, -51.1092,
    -73.792, 0.999795, -47.5426,
    -90.2071, -0.000204, -80.9332,
    -94.0504, -0.000204, -80.4106,
    -94.0504, 0.999796, -80.4106,
    -90.2071, 0.999796, -80.9332,
    -88.4277, -0.000204, -72.902,
    -89.7883, -0.000204, -68.7391,
    -89.7883, 0.999796, -68.7391,
    -88.4277, 0.999796, -72.902,
    -73.3402, -0.000204, -59.1681,
    -72.4326, -0.000204, -61.2852,
    -72.4326, 0.999796, -61.2852,
    -73.3402, 0.999796, -59.1681,
    -89.0662, -0.000204, -82.2301,
    -90.2071, -0.000204, -80.9332,
    -90.2071, 0.999796, -80.9332,
    -89.0662, 0.999796, -82.2301,
    -90.638, -0.000204, -76.5767,
    -91.2566, -0.000204, -74.6911,
    -91.2566, 0.999796, -74.6911,
    -90.638, 0.999796, -76.5767,
    -73.9615, -0.000205, -52.8153,
    -69.379, -0.000205, -54.8417,
    -69.379, 0.999795, -54.8417,
    -73.9615, 0.999795, -52.8153,
    -86.7039, -0.000204, -82.6201,
    -89.0662, -0.000204, -82.2301,
    -89.0662, 0.999796, -82.2301,
    -86.7039, 0.999796, -82.6201,
    -71.4646, -0.000204, -66.2946,
    -70.2701, -0.000204, -72.1159,
    -70.2701, 0.999796, -72.1159,
    -71.4646, 0.999796, -66.2946,
    -83.6381, -0.000204, -79.5596,
    -86.7039, -0.000204, -82.6201,
    -86.7039, 0.999796, -82.6201,
    -83.6381, 0.999796, -79.5596,
    -86.851, -0.000204, -64.2215,
    -84.1372, -0.000204, -63.2505,
    -84.1372, 0.999796, -63.2505,
    -86.851, 0.999796, -64.2215,
    -77.0711, -0.000205, -52.597,
    -74.9412, -0.000205, -49.9776,
    -74.9412, 0.999795, -49.9776,
    -77.0711, 0.999795, -52.597,
    -73.7245, -0.000204, -77.5165,
    -83.6381, -0.000204, -79.5596,
    -83.6381, 0.999796, -79.5596,
    -73.7245, 0.999796, -77.5165,
    -89.7883, -0.000204, -68.7391,
    -86.851, -0.000204, -64.2215,
    -86.851, 0.999796, -64.2215,
    -89.7883, 0.999796, -68.7391,
    -78.8951, -0.000205, -52.4861,
    -77.0711, -0.000205, -52.597,
    -77.0711, 0.999795, -52.597,
    -78.8951, 0.999795, -52.4861,
    -76.3671, -0.000204, -46.5123,
    -74.4646, -0.000204, -45.1167,
    -74.4646, 0.999796, -45.1167,
    -76.3671, 0.999796, -46.5123,
    -74.9412, -0.000205, -49.9776,
    -76.3671, -0.000204, -46.5123,
    -76.3671, 0.999796, -46.5123,
    -74.9412, 0.999795, -49.9776,
    -73.0648, -0.000204, -76.6547,
    -73.0648, 0.999796, -76.6547,
    -92.1576, -0.000204, -77.436,
    -88.6611, -0.000204, -76.6547,
    -88.6611, 0.999796, -76.6547,
    -92.1576, 0.999796, -77.436,
    -73.0648, -0.000204, -76.6547,
    -73.7245, -0.000204, -77.5165,
    -73.7245, 0.999796, -77.5165,
    -73.0648, 0.999796, -76.6547
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
    0.9955, 0, -0.0951,
    0.9955, 0, -0.0951,
    0.9955, 0, -0.0951,
    0.9955, 0, -0.0951,
    -0.2536, 0, 0.9673,
    -0.2536, 0, 0.9673,
    -0.2536, 0, 0.9673,
    -0.2536, 0, 0.9673,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0.8197, 0, -0.5727,
    0.8197, 0, -0.5727,
    0.8197, 0, -0.5727,
    0.8197, 0, -0.5727,
    -0.9998, 0, 0.0209,
    -0.9998, 0, 0.0209,
    -0.9998, 0, 0.0209,
    -0.9998, 0, 0.0209,
    0.4593, 0, 0.8883,
    0.4593, 0, 0.8883,
    0.4593, 0, 0.8883,
    0.4593, 0, 0.8883,
    -0.0285, 0, 0.9996,
    -0.0285, 0, 0.9996,
    -0.0285, 0, 0.9996,
    -0.0285, 0, 0.9996,
    -0.3643, 0, 0.9313,
    -0.3643, 0, 0.9313,
    -0.3643, 0, 0.9313,
    -0.3643, 0, 0.9313,
    0.9901, 0, 0.1403,
    0.9901, 0, 0.1403,
    0.9901, 0, 0.1403,
    0.9901, 0, 0.1403,
    -0.0394, 0, -0.9992,
    -0.0394, 0, -0.9992,
    -0.0394, 0, -0.9992,
    -0.0394, 0, -0.9992,
    -0.9456, 0, -0.3253,
    -0.9456, 0, -0.3253,
    -0.9456, 0, -0.3253,
    -0.9456, 0, -0.3253,
    0.2943, 0, -0.9557,
    0.2943, 0, -0.9557,
    0.2943, 0, -0.9557,
    0.2943, 0, -0.9557,
    0.2851, 0, 0.9585,
    0.2851, 0, 0.9585,
    0.2851, 0, 0.9585,
    0.2851, 0, 0.9585,
    0.4495, 0, -0.8933,
    0.4495, 0, -0.8933,
    0.4495, 0, -0.8933,
    0.4495, 0, -0.8933,
    -0.3553, 0, 0.9348,
    -0.3553, 0, 0.9348,
    -0.3553, 0, 0.9348,
    -0.3553, 0, 0.9348,
    0.9615, 0, 0.2749,
    0.9615, 0, 0.2749,
    0.9615, 0, 0.2749,
    0.9615, 0, 0.2749,
    0.8539, 0, -0.5204,
    0.8539, 0, -0.5204,
    0.8539, 0, -0.5204,
    0.8539, 0, -0.5204,
    -0.8157, 0, -0.5785,
    -0.8157, 0, -0.5785,
    -0.8157, 0, -0.5785,
    -0.8157, 0, -0.5785,
    -0.5345, 0, 0.8452,
    -0.5345, 0, 0.8452,
    -0.5345, 0, 0.8452,
    -0.5345, 0, 0.8452,
    0.7421, 0, 0.6703,
    0.7421, 0, 0.6703,
    0.7421, 0, 0.6703,
    0.7421, 0, 0.6703,
    -0.1347, 0, -0.9909,
    -0.1347, 0, -0.9909,
    -0.1347, 0, -0.9909,
    -0.1347, 0, -0.9909,
    -0.9505, 0, -0.3107,
    -0.9505, 0, -0.3107,
    -0.9505, 0, -0.3107,
    -0.9505, 0, -0.3107,
    0.9191, 0, 0.394,
    0.9191, 0, 0.394,
    0.9191, 0, 0.394,
    0.9191, 0, 0.394,
    -0.7508, 0, -0.6605,
    -0.7508, 0, -0.6605,
    -0.7508, 0, -0.6605,
    -0.7508, 0, -0.6605,
    -0.9502, 0, -0.3117,
    -0.9502, 0, -0.3117,
    -0.9502, 0, -0.3117,
    -0.9502, 0, -0.3117,
    0.4044, 0, 0.9146,
    0.4044, 0, 0.9146,
    0.4044, 0, 0.9146,
    0.4044, 0, 0.9146,
    -0.1629, 0, -0.9866,
    -0.1629, 0, -0.9866,
    -0.1629, 0, -0.9866,
    -0.1629, 0, -0.9866,
    0.9796, 0, 0.201,
    0.9796, 0, 0.201,
    0.9796, 0, 0.201,
    0.9796, 0, 0.201,
    0.7065, 0, -0.7077,
    0.7065, 0, -0.7077,
    0.7065, 0, -0.7077,
    0.7065, 0, -0.7077,
    -0.3369, 0, 0.9416,
    -0.3369, 0, 0.9416,
    -0.3369, 0, 0.9416,
    -0.3369, 0, 0.9416,
    -0.7759, 0, 0.6309,
    -0.7759, 0, 0.6309,
    -0.7759, 0, 0.6309,
    -0.7759, 0, 0.6309,
    0.2018, 0, -0.9794,
    0.2018, 0, -0.9794,
    0.2018, 0, -0.9794,
    0.2018, 0, -0.9794,
    -0.8384, 0, 0.5451,
    -0.8384, 0, 0.5451,
    -0.8384, 0, 0.5451,
    -0.8384, 0, 0.5451,
    0.0607, 0, 0.9982,
    0.0607, 0, 0.9982,
    0.0607, 0, 0.9982,
    0.0607, 0, 0.9982,
    -0.5915, 0, 0.8063,
    -0.5915, 0, 0.8063,
    -0.5915, 0, 0.8063,
    -0.5915, 0, 0.8063,
    -0.9248, 0, -0.3805,
    -0.9248, 0, -0.3805,
    -0.9248, 0, -0.3805,
    -0.9248, 0, -0.3805,
    0, 0, -1,
    0, 0, -1,
    -0.2181, 0, 0.9759,
    -0.2181, 0, 0.9759,
    -0.2181, 0, 0.9759,
    -0.2181, 0, 0.9759,
    0.7941, 0, -0.6078,
    0.7941, 0, -0.6078,
    0.7941, 0, -0.6078,
    0.7941, 0, -0.6078
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.595233, 0.488055,
    0.604692, 0.468871,
    0.611876, 0.464867,
    0.620253, 0.485564,
    0.661085, 0.500763,
    0.640958, 0.528673,
    0.686289, 0.52579,
    0.704805, 0.545335,
    0.672542, 0.577159,
    0.688702, 0.590386,
    0.72031, 0.584283,
    0.717451, 0.626617,
    0.751421, 0.66843,
    0.75057, 0.674941,
    0.764729, 0.694749,
    0.790106, 0.694681,
    0.788373, 0.695583,
    0.747944, 0.716625,
    0.746246, 0.726317,
    0.675076, 0.784237,
    0.663231, 0.82168,
    0.642602, 0.828431,
    0.628, 0.822777,
    0.594906, 0.834659,
    0.577341, 0.825648,
    0.597678, 0.802817,
    0.622525, 0.7819,
    0.606302, 0.789547,
    0.593436, 0.776973,
    0.608696, 0.750746,
    0.580332, 0.722965,
    0.585045, 0.674342,
    0.602804, 0.655177,
    0.570305, 0.624314,
    0.601262, 0.588876,
    0.586439, 0.558881,
    0.599906, 0.546674,
    0.615039, 0.539932,
    0.621203, 0.509954,
    0.166478, 0.004159,
    0.210314, 0.004159,
    0.210314, 0.022038,
    0.166478, 0.022038,
    0.515045, 0.004159,
    0.54972, 0.004159,
    0.54972, 0.022038,
    0.515045, 0.022038,
    0.747703, 0.004159,
    0.743849, 0.004159,
    0.743849, 0.022038,
    0.747703, 0.022038,
    0.649656, 0.004159,
    0.660272, 0.004159,
    0.660272, 0.022038,
    0.649656, 0.022038,
    0.373761, 0.004159,
    0.30779, 0.004159,
    0.30779, 0.022038,
    0.373761, 0.022038,
    0.703245, 0.004159,
    0.747703, 0.004159,
    0.747703, 0.022038,
    0.703245, 0.022038,
    0.628933, 0.004159,
    0.645147, 0.004159,
    0.645147, 0.022038,
    0.628933, 0.022038,
    0.427243, 0.004159,
    0.513667, 0.004159,
    0.513667, 0.022038,
    0.427243, 0.022038,
    0.660272, 0.004159,
    0.707817, 0.004159,
    0.707817, 0.022038,
    0.660272, 0.022038,
    0.375115, 0.004159,
    0.339771, 0.004159,
    0.339771, 0.022038,
    0.375115, 0.022038,
    0.491154, 0.004159,
    0.40757, 0.004159,
    0.40757, 0.022038,
    0.491154, 0.022038,
    0.734454, 0.004159,
    0.649036, 0.004159,
    0.649036, 0.022038,
    0.734454, 0.022038,
    0.665264, 0.004159,
    0.726117, 0.004159,
    0.726117, 0.022038,
    0.665264, 0.022038,
    0.698551, 0.004159,
    0.637928, 0.004159,
    0.637928, 0.022038,
    0.698551, 0.022038,
    0.256236, 0.004159,
    0.312601, 0.004159,
    0.312601, 0.022038,
    0.256236, 0.022038,
    0.340812, 0.004159,
    0.391864, 0.004159,
    0.391864, 0.022038,
    0.340812, 0.022038,
    0.47412, 0.004159,
    0.545579, 0.004159,
    0.545579, 0.022038,
    0.47412, 0.022038,
    0.797957, 0.004159,
    0.7662, 0.004159,
    0.7662, 0.022038,
    0.797957, 0.022038,
    0.328711, 0.004159,
    0.379289, 0.004159,
    0.379289, 0.022038,
    0.328711, 0.022038,
    0.210314, 0.004159,
    0.274081, 0.004159,
    0.274081, 0.022038,
    0.210314, 0.022038,
    0.347475, 0.004159,
    0.27876, 0.004159,
    0.27876, 0.022038,
    0.347475, 0.022038,
    0.663712, 0.004159,
    0.589283, 0.004159,
    0.589283, 0.022038,
    0.663712, 0.022038,
    0.418163, 0.004159,
    0.456017, 0.004159,
    0.456017, 0.022038,
    0.418163, 0.022038,
    0.830488, 0.004159,
    0.807301, 0.004159,
    0.807301, 0.022038,
    0.830488, 0.022038,
    0.729412, 0.004159,
    0.695699, 0.004159,
    0.695699, 0.022038,
    0.729412, 0.022038,
    0.637928, 0.004159,
    0.719858, 0.004159,
    0.719858, 0.022038,
    0.637928, 0.022038,
    0.410108, 0.004159,
    0.367872, 0.004159,
    0.367872, 0.022038,
    0.410108, 0.022038,
    0.545579, 0.004159,
    0.649656, 0.004159,
    0.649656, 0.022038,
    0.545579, 0.022038,
    0.464921, 0.004159,
    0.410108, 0.004159,
    0.410108, 0.022038,
    0.464921, 0.022038,
    0.407478, 0.004159,
    0.455997, 0.004159,
    0.455997, 0.022038,
    0.407478, 0.022038,
    0.30068, 0.004159,
    0.253848, 0.004159,
    0.253848, 0.022038,
    0.30068, 0.022038,
    0.642166, 0.004159,
    0.464921, 0.004159,
    0.464921, 0.022038,
    0.642166, 0.022038,
    0.589283, 0.004159,
    0.508513, 0.004159,
    0.508513, 0.022038,
    0.589283, 0.022038,
    0.54972, 0.004159,
    0.582333, 0.004159,
    0.582333, 0.022038,
    0.54972, 0.022038,
    0.594919, 0.004159,
    0.628933, 0.004159,
    0.628933, 0.022038,
    0.594919, 0.022038,
    0.253848, 0.004159,
    0.191892, 0.004159,
    0.191892, 0.022038,
    0.253848, 0.022038,
    0.653961, 0.004159,
    0.653961, 0.022038,
    0.312601, 0.004159,
    0.375115, 0.004159,
    0.375115, 0.022038,
    0.312601, 0.022038,
    0.730805, 0.004159,
    0.746214, 0.004159,
    0.746214, 0.022038,
    0.730805, 0.022038
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    192, 191, 189,
    191, 190, 189,
    188, 187, 185,
    187, 186, 185,
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
    49, 184, 48,
    184, 183, 48,
    50, 49, 47,
    49, 48, 47,
    46, 45, 43,
    45, 44, 43,
    42, 41, 39,
    41, 40, 39,
    36, 35, 34,
    34, 33, 32,
    37, 34, 32,
    37, 36, 34,
    32, 29, 37,
    32, 31, 29,
    31, 30, 29,
    29, 26, 37,
    29, 28, 26,
    28, 27, 26,
    26, 19, 37,
    26, 25, 19,
    25, 24, 19,
    24, 23, 19,
    23, 22, 19,
    22, 21, 19,
    21, 20, 19,
    19, 17, 37,
    19, 18, 17,
    17, 14, 37,
    17, 16, 14,
    16, 15, 14,
    14, 13, 37,
    13, 11, 37,
    13, 12, 11,
    11, 9, 37,
    11, 10, 9,
    9, 8, 37,
    8, 5, 37,
    8, 7, 5,
    7, 6, 5,
    5, 38, 37,
    5, 4, 38,
    4, 3, 38,
    3, 2, 38,
    2, 1, 38,
    1, 0, 38
]);
