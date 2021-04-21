import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_as04(gl: WebGLRenderingContext): Mesh {
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
    -76.8089, 0.999796, -46.7525,
    -75.5168, 0.999795, -49.8929,
    -77.297, 0.999795, -52.0823,
    -78.9446, 0.999795, -51.9822,
    -81.3266, 0.999795, -52.6068,
    -81.4046, 0.999796, -56.3405,
    -86.3743, 0.999796, -58.2847,
    -84.7707, 0.999796, -62.9462,
    -87.0179, 0.999796, -63.7501,
    -93.0185, 0.999796, -61.7729,
    -93.7679, 0.999796, -58.4646,
    -99.5509, 0.999796, -58.7237,
    -103.436, 0.999795, -55.5903,
    -105.565, 0.999795, -55.0889,
    -102.075, 0.999795, -53.0427,
    -105.866, 0.999795, -52.5507,
    -110.171, 0.999795, -52.5507,
    -110.248, 0.999795, -51.3768,
    -106.755, 0.999795, -49.4852,
    -108.881, 0.999796, -46.1557,
    -108.69, 0.999796, -45.2593,
    -107.392, 0.999796, -45.5818,
    -106.611, 0.999795, -47.7522,
    -105.04, 0.999795, -49.9348,
    -102.671, 0.999795, -50.4062,
    -100.363, 0.999795, -49.3016,
    -100.938, 0.999795, -48.8101,
    -98.884, 0.999796, -45.5966,
    -96.0567, 0.999796, -46.3328,
    -92.8267, 0.999796, -45.0134,
    -89.1618, 0.999796, -46.5336,
    -86.6552, 0.999796, -46.3336,
    -86.0453, 0.999795, -47.6029,
    -82.9556, 0.999795, -48.6545,
    -81.8288, 0.999795, -46.9265,
    -82.1789, 0.999796, -45.9462,
    -79.7198, 0.999796, -45.9796,
    -79.4558, 0.999796, -46.5315,
    -77.5889, 0.999795, -47.0722,
    -100.938, -0.000205, -48.8101,
    -98.884, -0.000204, -45.5966,
    -98.884, 0.999796, -45.5966,
    -100.938, 0.999795, -48.8101,
    -77.5889, -0.000205, -47.0722,
    -76.8089, -0.000204, -46.7525,
    -76.8089, 0.999796, -46.7525,
    -77.5889, 0.999795, -47.0722,
    -99.5509, -0.000204, -58.7237,
    -103.436, -0.000205, -55.5903,
    -103.436, 0.999795, -55.5903,
    -99.5509, 0.999796, -58.7237,
    -79.4558, -0.000204, -46.5315,
    -77.5889, -0.000205, -47.0722,
    -77.5889, 0.999795, -47.0722,
    -79.4558, 0.999796, -46.5315,
    -105.04, -0.000205, -49.9348,
    -102.671, -0.000205, -50.4062,
    -102.671, 0.999795, -50.4062,
    -105.04, 0.999795, -49.9348,
    -79.7198, -0.000204, -45.9796,
    -79.4558, -0.000204, -46.5315,
    -79.4558, 0.999796, -46.5315,
    -79.7198, 0.999796, -45.9796,
    -75.5168, -0.000205, -49.8929,
    -77.297, -0.000205, -52.0823,
    -77.297, 0.999795, -52.0823,
    -75.5168, 0.999795, -49.8929,
    -102.671, -0.000205, -50.4062,
    -100.363, -0.000205, -49.3016,
    -100.363, 0.999795, -49.3016,
    -102.671, 0.999795, -50.4062,
    -82.1789, -0.000204, -45.9462,
    -79.7198, -0.000204, -45.9796,
    -79.7198, 0.999796, -45.9796,
    -82.1789, 0.999796, -45.9462,
    -100.363, -0.000205, -49.3016,
    -100.938, -0.000205, -48.8101,
    -100.938, 0.999795, -48.8101,
    -100.363, 0.999795, -49.3016,
    -81.8288, -0.000205, -46.9265,
    -82.1789, -0.000204, -45.9462,
    -82.1789, 0.999796, -45.9462,
    -81.8288, 0.999795, -46.9265,
    -76.8089, -0.000204, -46.7525,
    -75.5168, -0.000205, -49.8929,
    -75.5168, 0.999795, -49.8929,
    -76.8089, 0.999796, -46.7525,
    -108.69, -0.000204, -45.2593,
    -107.392, -0.000204, -45.5818,
    -107.392, 0.999796, -45.5818,
    -108.69, 0.999796, -45.2593,
    -82.9556, -0.000205, -48.6545,
    -81.8288, -0.000205, -46.9265,
    -81.8288, 0.999795, -46.9265,
    -82.9556, 0.999795, -48.6545,
    -78.9446, -0.000205, -51.9822,
    -81.3266, -0.000205, -52.6068,
    -81.3266, 0.999795, -52.6068,
    -78.9446, 0.999795, -51.9822,
    -108.881, -0.000204, -46.1557,
    -108.69, -0.000204, -45.2593,
    -108.69, 0.999796, -45.2593,
    -108.881, 0.999796, -46.1557,
    -86.0453, -0.000205, -47.6029,
    -82.9556, -0.000205, -48.6545,
    -82.9556, 0.999795, -48.6545,
    -86.0453, 0.999795, -47.6029,
    -81.3266, -0.000205, -52.6068,
    -81.4046, -0.000204, -56.3405,
    -81.4046, 0.999796, -56.3405,
    -81.3266, 0.999795, -52.6068,
    -86.6552, -0.000204, -46.3336,
    -86.0453, -0.000205, -47.6029,
    -86.0453, 0.999795, -47.6029,
    -86.6552, 0.999796, -46.3336,
    -81.4046, -0.000204, -56.3405,
    -86.3743, -0.000204, -58.2847,
    -86.3743, 0.999796, -58.2847,
    -81.4046, 0.999796, -56.3405,
    -110.248, -0.000205, -51.3768,
    -106.755, -0.000205, -49.4852,
    -106.755, 0.999795, -49.4852,
    -110.248, 0.999795, -51.3768,
    -89.1618, -0.000204, -46.5336,
    -86.6552, -0.000204, -46.3336,
    -86.6552, 0.999796, -46.3336,
    -89.1618, 0.999796, -46.5336,
    -86.3743, -0.000204, -58.2847,
    -84.7707, -0.000204, -62.9462,
    -84.7707, 0.999796, -62.9462,
    -86.3743, 0.999796, -58.2847,
    -110.171, -0.000205, -52.5507,
    -110.248, -0.000205, -51.3768,
    -110.248, 0.999795, -51.3768,
    -110.171, 0.999795, -52.5507,
    -92.8267, -0.000204, -45.0134,
    -89.1618, -0.000204, -46.5336,
    -89.1618, 0.999796, -46.5336,
    -92.8267, 0.999796, -45.0134,
    -105.866, -0.000205, -52.5507,
    -110.171, -0.000205, -52.5507,
    -110.171, 0.999795, -52.5507,
    -105.866, 0.999795, -52.5507,
    -96.0567, -0.000204, -46.3328,
    -92.8267, -0.000204, -45.0134,
    -92.8267, 0.999796, -45.0134,
    -96.0567, 0.999796, -46.3328,
    -93.7679, -0.000204, -58.4646,
    -99.5509, -0.000204, -58.7237,
    -99.5509, 0.999796, -58.7237,
    -93.7679, 0.999796, -58.4646,
    -102.075, -0.000205, -53.0427,
    -105.866, -0.000205, -52.5507,
    -105.866, 0.999795, -52.5507,
    -102.075, 0.999795, -53.0427,
    -98.884, -0.000204, -45.5966,
    -96.0567, -0.000204, -46.3328,
    -96.0567, 0.999796, -46.3328,
    -98.884, 0.999796, -45.5966,
    -105.565, -0.000205, -55.0889,
    -102.075, -0.000205, -53.0427,
    -102.075, 0.999795, -53.0427,
    -105.565, 0.999795, -55.0889,
    -103.436, -0.000205, -55.5903,
    -105.565, -0.000205, -55.0889,
    -105.565, 0.999795, -55.0889,
    -103.436, 0.999795, -55.5903,
    -106.611, -0.000205, -47.7522,
    -105.04, -0.000205, -49.9348,
    -105.04, 0.999795, -49.9348,
    -106.611, 0.999795, -47.7522,
    -107.392, -0.000204, -45.5818,
    -106.611, -0.000205, -47.7522,
    -106.611, 0.999795, -47.7522,
    -107.392, 0.999796, -45.5818,
    -84.7707, -0.000204, -62.9462,
    -87.0179, -0.000204, -63.7501,
    -87.0179, 0.999796, -63.7501,
    -84.7707, 0.999796, -62.9462,
    -77.297, -0.000205, -52.0823,
    -78.9446, -0.000205, -51.9822,
    -78.9446, 0.999795, -51.9822,
    -77.297, 0.999795, -52.0823,
    -106.755, -0.000205, -49.4852,
    -108.881, -0.000204, -46.1557,
    -108.881, 0.999796, -46.1557,
    -106.755, 0.999795, -49.4852,
    -93.0185, -0.000204, -61.7729,
    -93.7679, -0.000204, -58.4646,
    -93.7679, 0.999796, -58.4646,
    -93.0185, 0.999796, -61.7729,
    -87.0179, -0.000204, -63.7501,
    -93.0185, -0.000204, -61.7729,
    -93.0185, 0.999796, -61.7729,
    -87.0179, 0.999796, -63.7501
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
    -0.8425, 0, 0.5386,
    -0.8425, 0, 0.5386,
    -0.8425, 0, 0.5386,
    -0.8425, 0, 0.5386,
    -0.3794, 0, 0.9253,
    -0.3794, 0, 0.9253,
    -0.3794, 0, 0.9253,
    -0.3794, 0, 0.9253,
    -0.6278, 0, -0.7784,
    -0.6278, 0, -0.7784,
    -0.6278, 0, -0.7784,
    -0.6278, 0, -0.7784,
    0.2782, 0, 0.9605,
    0.2782, 0, 0.9605,
    0.2782, 0, 0.9605,
    0.2782, 0, 0.9605,
    0.1951, 0, 0.9808,
    0.1951, 0, 0.9808,
    0.1951, 0, 0.9808,
    0.1951, 0, 0.9808,
    0.9021, 0, 0.4316,
    0.9021, 0, 0.4316,
    0.9021, 0, 0.4316,
    0.9021, 0, 0.4316,
    0.7759, 0, -0.6309,
    0.7759, 0, -0.6309,
    0.7759, 0, -0.6309,
    0.7759, 0, -0.6309,
    -0.4318, 0, 0.902,
    -0.4318, 0, 0.902,
    -0.4318, 0, 0.902,
    -0.4318, 0, 0.902,
    0.0136, 0, 0.9999,
    0.0136, 0, 0.9999,
    0.0136, 0, 0.9999,
    0.0136, 0, 0.9999,
    -0.6495, 0, -0.7604,
    -0.6495, 0, -0.7604,
    -0.6495, 0, -0.7604,
    -0.6495, 0, -0.7604,
    -0.9418, 0, -0.3363,
    -0.9418, 0, -0.3363,
    -0.9418, 0, -0.3363,
    -0.9418, 0, -0.3363,
    0.9248, 0, 0.3805,
    0.9248, 0, 0.3805,
    0.9248, 0, 0.3805,
    0.9248, 0, 0.3805,
    0.2411, 0, 0.9705,
    0.2411, 0, 0.9705,
    0.2411, 0, 0.9705,
    0.2411, 0, 0.9705,
    -0.8377, 0, 0.5462,
    -0.8377, 0, 0.5462,
    -0.8377, 0, 0.5462,
    -0.8377, 0, 0.5462,
    0.2536, 0, -0.9673,
    0.2536, 0, -0.9673,
    0.2536, 0, -0.9673,
    0.2536, 0, -0.9673,
    -0.9781, 0, 0.2081,
    -0.9781, 0, 0.2081,
    -0.9781, 0, 0.2081,
    -0.9781, 0, 0.2081,
    0.3222, 0, 0.9467,
    0.3222, 0, 0.9467,
    0.3222, 0, 0.9467,
    0.3222, 0, 0.9467,
    0.9998, 0, -0.0209,
    0.9998, 0, -0.0209,
    0.9998, 0, -0.0209,
    0.9998, 0, -0.0209,
    0.9013, 0, 0.4331,
    0.9013, 0, 0.4331,
    0.9013, 0, 0.4331,
    0.9013, 0, 0.4331,
    0.3643, 0, -0.9313,
    0.3643, 0, -0.9313,
    0.3643, 0, -0.9313,
    0.3643, 0, -0.9313,
    -0.4762, 0, 0.8793,
    -0.4762, 0, 0.8793,
    -0.4762, 0, 0.8793,
    -0.4762, 0, 0.8793,
    -0.0795, 0, 0.9968,
    -0.0795, 0, 0.9968,
    -0.0795, 0, 0.9968,
    -0.0795, 0, 0.9968,
    0.9456, 0, 0.3253,
    0.9456, 0, 0.3253,
    0.9456, 0, 0.3253,
    0.9456, 0, 0.3253,
    -0.9979, 0, -0.0652,
    -0.9979, 0, -0.0652,
    -0.9979, 0, -0.0652,
    -0.9979, 0, -0.0652,
    0.3832, 0, 0.9237,
    0.3832, 0, 0.9237,
    0.3832, 0, 0.9237,
    0.3832, 0, 0.9237,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    -0.3782, 0, 0.9257,
    -0.3782, 0, 0.9257,
    -0.3782, 0, 0.9257,
    -0.3782, 0, 0.9257,
    0.0448, 0, -0.999,
    0.0448, 0, -0.999,
    0.0448, 0, -0.999,
    0.0448, 0, -0.999,
    -0.1287, 0, -0.9917,
    -0.1287, 0, -0.9917,
    -0.1287, 0, -0.9917,
    -0.1287, 0, -0.9917,
    0.252, 0, 0.9677,
    0.252, 0, 0.9677,
    0.252, 0, 0.9677,
    0.252, 0, 0.9677,
    -0.5059, 0, 0.8626,
    -0.5059, 0, 0.8626,
    -0.5059, 0, 0.8626,
    -0.5059, 0, 0.8626,
    -0.2292, 0, -0.9734,
    -0.2292, 0, -0.9734,
    -0.2292, 0, -0.9734,
    -0.2292, 0, -0.9734,
    0.8116, 0, 0.5842,
    0.8116, 0, 0.5842,
    0.8116, 0, 0.5842,
    0.8116, 0, 0.5842,
    0.941, 0, 0.3384,
    0.941, 0, 0.3384,
    0.941, 0, 0.3384,
    0.941, 0, 0.3384,
    0.3369, 0, -0.9416,
    0.3369, 0, -0.9416,
    0.3369, 0, -0.9416,
    0.3369, 0, -0.9416,
    -0.0607, 0, -0.9982,
    -0.0607, 0, -0.9982,
    -0.0607, 0, -0.9982,
    -0.0607, 0, -0.9982,
    -0.8428, 0, -0.5382,
    -0.8428, 0, -0.5382,
    -0.8428, 0, -0.5382,
    -0.8428, 0, -0.5382,
    -0.9753, 0, -0.2209,
    -0.9753, 0, -0.2209,
    -0.9753, 0, -0.2209,
    -0.9753, 0, -0.2209,
    -0.313, 0, -0.9498,
    -0.313, 0, -0.9498,
    -0.313, 0, -0.9498,
    -0.313, 0, -0.9498
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.553327, 0.626599,
    0.53835, 0.6506,
    0.514884, 0.649188,
    0.507558, 0.637551,
    0.49176, 0.624465,
    0.466112, 0.642075,
    0.428811, 0.617885,
    0.405054, 0.651383,
    0.388695, 0.64008,
    0.372927, 0.589864,
    0.391677, 0.568721,
    0.36183, 0.530841,
    0.364164, 0.489329,
    0.357215, 0.472484,
    0.388014, 0.486158,
    0.372931, 0.458116,
    0.352015, 0.428977,
    0.359587, 0.422755,
    0.389357, 0.437206,
    0.401563, 0.406642,
    0.408556, 0.403579,
    0.412681, 0.413934,
    0.401784, 0.429761,
    0.394645, 0.450996,
    0.402966, 0.469322,
    0.421651, 0.479573,
    0.422182, 0.473292,
    0.453911, 0.471585,
    0.462663, 0.494296,
    0.487284, 0.509746,
    0.494799, 0.541934,
    0.508329, 0.557927,
    0.502702, 0.568221,
    0.510594, 0.59424,
    0.527763, 0.593471,
    0.532697, 0.58634,
    0.544416, 0.603145,
    0.541964, 0.607613,
    0.547373, 0.622874,
    0.546383, 0.022744,
    0.524248, 0.022744,
    0.524248, 0.029632,
    0.546383, 0.029632,
    0.600882, 0.053537,
    0.606254, 0.053537,
    0.606254, 0.060425,
    0.600882, 0.060425,
    0.449607, 0.053537,
    0.422848, 0.053537,
    0.422848, 0.060425,
    0.449607, 0.060425,
    0.588023, 0.053537,
    0.600882, 0.053537,
    0.600882, 0.060425,
    0.588023, 0.060425,
    0.411796, 0.053537,
    0.428118, 0.053537,
    0.428118, 0.060425,
    0.411796, 0.060425,
    0.526886, 0.022744,
    0.530687, 0.022744,
    0.530687, 0.029632,
    0.526886, 0.029632,
    0.553841, 0.022744,
    0.568922, 0.022744,
    0.568922, 0.029632,
    0.553841, 0.029632,
    0.428118, 0.053537,
    0.444012, 0.053537,
    0.444012, 0.060425,
    0.428118, 0.060425,
    0.569266, 0.053537,
    0.586204, 0.053537,
    0.586204, 0.060425,
    0.569266, 0.060425,
    0.444012, 0.053537,
    0.440049, 0.053537,
    0.440049, 0.060425,
    0.444012, 0.060425,
    0.533408, 0.022744,
    0.526656, 0.022744,
    0.526656, 0.029632,
    0.533408, 0.029632,
    0.532209, 0.022744,
    0.553841, 0.022744,
    0.553841, 0.029632,
    0.532209, 0.029632,
    0.386653, 0.053537,
    0.395598, 0.053537,
    0.395598, 0.060425,
    0.386653, 0.060425,
    0.545311, 0.022744,
    0.533408, 0.022744,
    0.533408, 0.029632,
    0.545311, 0.029632,
    0.591544, 0.053537,
    0.575137, 0.053537,
    0.575137, 0.060425,
    0.591544, 0.060425,
    0.528099, 0.022744,
    0.521924, 0.022744,
    0.521924, 0.029632,
    0.528099, 0.029632,
    0.542634, 0.053537,
    0.563916, 0.053537,
    0.563916, 0.060425,
    0.542634, 0.060425,
    0.572534, 0.022744,
    0.598252, 0.022744,
    0.598252, 0.029632,
    0.572534, 0.029632,
    0.529325, 0.022744,
    0.538067, 0.022744,
    0.538067, 0.029632,
    0.529325, 0.029632,
    0.5746, 0.053537,
    0.540367, 0.053537,
    0.540367, 0.060425,
    0.5746, 0.060425,
    0.375924, 0.053537,
    0.399984, 0.053537,
    0.399984, 0.060425,
    0.375924, 0.060425,
    0.521167, 0.053537,
    0.538433, 0.053537,
    0.538433, 0.060425,
    0.521167, 0.060425,
    0.611644, 0.022744,
    0.643753, 0.022744,
    0.643753, 0.029632,
    0.611644, 0.029632,
    0.572148, 0.022744,
    0.564062, 0.022744,
    0.564062, 0.029632,
    0.572148, 0.029632,
    0.495923, 0.053537,
    0.521167, 0.053537,
    0.521167, 0.060425,
    0.495923, 0.060425,
    0.406109, 0.053537,
    0.376453, 0.053537,
    0.376453, 0.060425,
    0.406109, 0.060425,
    0.473675, 0.053537,
    0.495923, 0.053537,
    0.495923, 0.060425,
    0.473675, 0.060425,
    0.48944, 0.053537,
    0.449607, 0.053537,
    0.449607, 0.060425,
    0.48944, 0.060425,
    0.432218, 0.053537,
    0.406109, 0.053537,
    0.406109, 0.060425,
    0.432218, 0.060425,
    0.4542, 0.053537,
    0.473675, 0.053537,
    0.473675, 0.060425,
    0.4542, 0.060425,
    0.408183, 0.053537,
    0.432218, 0.053537,
    0.432218, 0.060425,
    0.408183, 0.060425,
    0.422848, 0.053537,
    0.408183, 0.053537,
    0.408183, 0.060425,
    0.422848, 0.060425,
    0.539096, 0.022744,
    0.554129, 0.022744,
    0.554129, 0.029632,
    0.539096, 0.029632,
    0.524146, 0.022744,
    0.539096, 0.022744,
    0.539096, 0.029632,
    0.524146, 0.029632,
    0.551413, 0.053537,
    0.535934, 0.053537,
    0.535934, 0.060425,
    0.551413, 0.060425,
    0.602893, 0.053537,
    0.591544, 0.053537,
    0.591544, 0.060425,
    0.602893, 0.060425,
    0.551033, 0.022744,
    0.528099, 0.022744,
    0.528099, 0.029632,
    0.551033, 0.029632,
    0.635671, 0.022744,
    0.612883, 0.022744,
    0.612883, 0.029632,
    0.635671, 0.029632,
    0.535934, 0.053537,
    0.494602, 0.053537,
    0.494602, 0.060425,
    0.535934, 0.060425
]);

// prettier-ignore
let index_arr = Uint16Array.from([
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
    50, 49, 47,
    49, 48, 47,
    46, 45, 43,
    45, 44, 43,
    42, 41, 39,
    41, 40, 39,
    10, 9, 6,
    9, 8, 6,
    8, 7, 6,
    12, 10, 6,
    12, 11, 10,
    14, 12, 6,
    14, 13, 12,
    17, 16, 15,
    18, 15, 14,
    22, 21, 18,
    21, 20, 18,
    20, 19, 18,
    18, 17, 15,
    23, 18, 14,
    23, 22, 18,
    24, 23, 14,
    25, 24, 14,
    27, 26, 25,
    28, 27, 25,
    29, 28, 25,
    30, 29, 25,
    31, 30, 25,
    32, 31, 25,
    33, 14, 6,
    33, 25, 14,
    33, 32, 25,
    6, 34, 33,
    37, 36, 34,
    36, 35, 34,
    6, 4, 34,
    6, 5, 4,
    4, 38, 34,
    38, 37, 34,
    4, 3, 38,
    3, 2, 38,
    2, 1, 38,
    1, 0, 38
]);
