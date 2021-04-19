import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_as03(gl: WebGLRenderingContext): Mesh {
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
    -53.0324, 0.999795, -24.5356,
    -51.492, 0.999795, -26.1163,
    -52.3524, 0.999795, -26.9176,
    -51.5098, 0.999795, -27.0457,
    -51.241, 0.999795, -28.4884,
    -51.8008, 0.999795, -30.7511,
    -53.6216, 0.999795, -31.0659,
    -55.5475, 0.999795, -32.5928,
    -57.323, 0.999795, -32.0828,
    -58.6084, 0.999795, -32.2979,
    -60.0064, 0.999795, -33.514,
    -60.5377, 0.999795, -31.8648,
    -63.2935, 0.999795, -32.5286,
    -64.1038, 0.999795, -31.1226,
    -65.8251, 0.999795, -30.5221,
    -66.7294, 0.999795, -28.3969,
    -66.5343, 0.999795, -26.9176,
    -68.3929, 0.999795, -26.4346,
    -72.5764, 0.999795, -24.4593,
    -75.6288, 0.999795, -24.7864,
    -77.1104, 0.999795, -24.2112,
    -78.8433, 0.999795, -25.3473,
    -80.7334, 0.999795, -25.6745,
    -81.9008, 0.999795, -24.5081,
    -79.9266, 0.999795, -22.9372,
    -78.0152, 0.999795, -18.5971,
    -77.5174, 0.999795, -18.4576,
    -76.9992, 0.999795, -19.6259,
    -76.1401, 0.999795, -19.4439,
    -75.1169, 0.999795, -18.6616,
    -73.3234, 0.999795, -18.467,
    -73.113, 0.999795, -17.555,
    -69.1671, 0.999795, -14.2568,
    -67.4204, 0.999795, -13.0744,
    -67.6847, 0.999795, -11.4254,
    -67.2572, 0.999795, -8.87388,
    -65.2906, 0.999795, -6.88248,
    -64.3921, 0.999795, -8.18934,
    -61.86, 0.999795, -14.0389,
    -61.1499, 0.999795, -19.0795,
    -59.6545, 0.999795, -17.8349,
    -58.1277, 0.999795, -19.235,
    -59.5541, 0.999795, -19.7639,
    -58.2158, 0.999795, -19.795,
    -56.092, 0.999795, -22.0975,
    -52.0518, 0.999795, -21.7241,
    -52.3787, 0.999795, -22.9187,
    -53.3827, 0.999795, -23.1378,
    -67.6266, 0.999795, -8.43071,
    -68.4415, 0.999795, -7.47307,
    -68.9644, 0.999795, -6.37059,
    -68.8428, 0.999795, -5.67946,
    -67.9843, 0.999795, -5.23551,
    -67.4189, 0.999795, -5.34297,
    -67.1944, 0.999795, -6.9097,
    -77.5174, -0.000205, -18.4576,
    -76.9992, -0.000205, -19.6259,
    -76.9992, 0.999795, -19.6259,
    -77.5174, 0.999795, -18.4576,
    -61.1499, -0.000205, -19.0795,
    -59.6545, -0.000205, -17.8349,
    -59.6545, 0.999795, -17.8349,
    -61.1499, 0.999795, -19.0795,
    -53.6216, -0.000205, -31.0659,
    -55.5475, -0.000205, -32.5928,
    -55.5475, 0.999795, -32.5928,
    -53.6216, 0.999795, -31.0659,
    -61.86, -0.000205, -14.0389,
    -61.1499, -0.000205, -19.0795,
    -61.1499, 0.999795, -19.0795,
    -61.86, 0.999795, -14.0389,
    -55.5475, -0.000205, -32.5928,
    -57.323, -0.000205, -32.0828,
    -57.323, 0.999795, -32.0828,
    -55.5475, 0.999795, -32.5928,
    -64.3921, -0.000205, -8.18934,
    -61.86, -0.000205, -14.0389,
    -61.86, 0.999795, -14.0389,
    -64.3921, 0.999795, -8.18934,
    -57.323, -0.000205, -32.0828,
    -58.6084, -0.000205, -32.2979,
    -58.6084, 0.999795, -32.2979,
    -57.323, 0.999795, -32.0828,
    -65.2906, -0.000205, -6.88248,
    -64.3921, -0.000205, -8.18934,
    -64.3921, 0.999795, -8.18934,
    -65.2906, 0.999795, -6.88248,
    -58.6084, -0.000205, -32.2979,
    -60.0064, -0.000205, -33.514,
    -60.0064, 0.999795, -33.514,
    -58.6084, 0.999795, -32.2979,
    -67.2572, -0.000205, -8.87388,
    -65.2906, -0.000205, -6.88248,
    -65.2906, 0.999795, -6.88248,
    -67.2572, 0.999795, -8.87388,
    -60.0064, -0.000205, -33.514,
    -60.5377, -0.000205, -31.8648,
    -60.5377, 0.999795, -31.8648,
    -60.0064, 0.999795, -33.514,
    -67.6847, -0.000205, -11.4254,
    -67.2572, -0.000205, -8.87388,
    -67.2572, 0.999795, -8.87388,
    -67.6847, 0.999795, -11.4254,
    -60.5377, -0.000205, -31.8648,
    -63.2935, -0.000205, -32.5286,
    -63.2935, 0.999795, -32.5286,
    -60.5377, 0.999795, -31.8648,
    -67.4204, -0.000205, -13.0744,
    -67.6847, -0.000205, -11.4254,
    -67.6847, 0.999795, -11.4254,
    -67.4204, 0.999795, -13.0744,
    -51.8008, -0.000205, -30.7511,
    -53.6216, -0.000205, -31.0659,
    -53.6216, 0.999795, -31.0659,
    -51.8008, 0.999795, -30.7511,
    -69.1671, -0.000205, -14.2568,
    -67.4204, -0.000205, -13.0744,
    -67.4204, 0.999795, -13.0744,
    -69.1671, 0.999795, -14.2568,
    -63.2935, -0.000205, -32.5286,
    -64.1038, -0.000205, -31.1226,
    -64.1038, 0.999795, -31.1226,
    -63.2935, 0.999795, -32.5286,
    -73.113, -0.000205, -17.555,
    -69.1671, -0.000205, -14.2568,
    -69.1671, 0.999795, -14.2568,
    -73.113, 0.999795, -17.555,
    -78.0152, -0.000205, -18.5971,
    -77.5174, -0.000205, -18.4576,
    -77.5174, 0.999795, -18.4576,
    -78.0152, 0.999795, -18.5971,
    -68.8428, -0.000205, -5.67946,
    -67.9843, -0.000205, -5.23551,
    -67.9843, 0.999795, -5.23551,
    -68.8428, 0.999795, -5.67946,
    -79.9266, -0.000205, -22.9372,
    -78.0152, -0.000205, -18.5971,
    -78.0152, 0.999795, -18.5971,
    -79.9266, 0.999795, -22.9372,
    -67.1944, -0.000205, -6.9097,
    -67.6266, -0.000205, -8.43071,
    -67.6266, 0.999795, -8.43071,
    -67.1944, 0.999795, -6.9097,
    -81.9008, -0.000205, -24.5081,
    -79.9266, -0.000205, -22.9372,
    -79.9266, 0.999795, -22.9372,
    -81.9008, 0.999795, -24.5081,
    -73.3234, -0.000205, -18.467,
    -73.113, -0.000205, -17.555,
    -73.113, 0.999795, -17.555,
    -73.3234, 0.999795, -18.467,
    -80.7334, -0.000205, -25.6745,
    -81.9008, -0.000205, -24.5081,
    -81.9008, 0.999795, -24.5081,
    -80.7334, 0.999795, -25.6745,
    -75.1169, -0.000205, -18.6616,
    -73.3234, -0.000205, -18.467,
    -73.3234, 0.999795, -18.467,
    -75.1169, 0.999795, -18.6616,
    -78.8433, -0.000205, -25.3473,
    -80.7334, -0.000205, -25.6745,
    -80.7334, 0.999795, -25.6745,
    -78.8433, 0.999795, -25.3473,
    -76.1401, -0.000205, -19.4439,
    -75.1169, -0.000205, -18.6616,
    -75.1169, 0.999795, -18.6616,
    -76.1401, 0.999795, -19.4439,
    -77.1104, -0.000205, -24.2112,
    -78.8433, -0.000205, -25.3473,
    -78.8433, 0.999795, -25.3473,
    -77.1104, 0.999795, -24.2112,
    -76.9992, -0.000205, -19.6259,
    -76.1401, -0.000205, -19.4439,
    -76.1401, 0.999795, -19.4439,
    -76.9992, 0.999795, -19.6259,
    -75.6288, -0.000205, -24.7864,
    -77.1104, -0.000205, -24.2112,
    -77.1104, 0.999795, -24.2112,
    -75.6288, 0.999795, -24.7864,
    -68.4415, -0.000205, -7.47307,
    -68.9644, -0.000205, -6.37059,
    -68.9644, 0.999795, -6.37059,
    -68.4415, 0.999795, -7.47307,
    -72.5764, -0.000205, -24.4593,
    -75.6288, -0.000205, -24.7864,
    -75.6288, 0.999795, -24.7864,
    -72.5764, 0.999795, -24.4593,
    -68.9644, -0.000205, -6.37059,
    -68.8428, -0.000205, -5.67946,
    -68.8428, 0.999795, -5.67946,
    -68.9644, 0.999795, -6.37059,
    -68.3929, -0.000205, -26.4346,
    -72.5764, -0.000205, -24.4593,
    -72.5764, 0.999795, -24.4593,
    -68.3929, 0.999795, -26.4346,
    -67.6266, -0.000205, -8.43071,
    -68.4415, -0.000205, -7.47307,
    -68.4415, 0.999795, -7.47307,
    -67.6266, 0.999795, -8.43071,
    -66.5343, -0.000205, -26.9176,
    -68.3929, -0.000205, -26.4346,
    -68.3929, 0.999795, -26.4346,
    -66.5343, 0.999795, -26.9176,
    -53.0324, -0.000205, -24.5356,
    -51.492, -0.000205, -26.1163,
    -51.492, 0.999795, -26.1163,
    -53.0324, 0.999795, -24.5356,
    -67.9843, -0.000205, -5.23551,
    -67.4189, -0.000205, -5.34297,
    -67.4189, 0.999795, -5.34297,
    -67.9843, 0.999795, -5.23551,
    -65.8251, -0.000205, -30.5221,
    -66.7294, -0.000205, -28.3969,
    -66.7294, 0.999795, -28.3969,
    -65.8251, 0.999795, -30.5221,
    -51.492, -0.000205, -26.1163,
    -52.3524, -0.000205, -26.9176,
    -52.3524, 0.999795, -26.9176,
    -51.492, 0.999795, -26.1163,
    -67.4189, -0.000205, -5.34297,
    -67.1944, -0.000205, -6.9097,
    -67.1944, 0.999795, -6.9097,
    -67.4189, 0.999795, -5.34297,
    -64.1038, -0.000205, -31.1226,
    -65.8251, -0.000205, -30.5221,
    -65.8251, 0.999795, -30.5221,
    -64.1038, 0.999795, -31.1226,
    -52.3524, -0.000205, -26.9176,
    -51.5098, -0.000205, -27.0457,
    -51.5098, 0.999795, -27.0457,
    -52.3524, 0.999795, -26.9176,
    -66.7294, -0.000205, -28.3969,
    -66.5343, -0.000205, -26.9176,
    -66.5343, 0.999795, -26.9176,
    -66.7294, 0.999795, -28.3969,
    -51.5098, -0.000205, -27.0457,
    -51.241, -0.000205, -28.4884,
    -51.241, 0.999795, -28.4884,
    -51.5098, 0.999795, -27.0457,
    -56.092, -0.000205, -22.0975,
    -52.0518, -0.000205, -21.7241,
    -52.0518, 0.999795, -21.7241,
    -56.092, 0.999795, -22.0975,
    -51.241, -0.000205, -28.4884,
    -51.8008, -0.000205, -30.7511,
    -51.8008, 0.999795, -30.7511,
    -51.241, 0.999795, -28.4884,
    -58.2158, -0.000205, -19.795,
    -56.092, -0.000205, -22.0975,
    -56.092, 0.999795, -22.0975,
    -58.2158, 0.999795, -19.795,
    -52.0518, -0.000205, -21.7241,
    -52.3787, -0.000205, -22.9187,
    -52.3787, 0.999795, -22.9187,
    -52.0518, 0.999795, -21.7241,
    -59.5541, -0.000205, -19.7639,
    -58.2158, -0.000205, -19.795,
    -58.2158, 0.999795, -19.795,
    -59.5541, 0.999795, -19.7639,
    -52.3787, -0.000205, -22.9187,
    -53.3827, -0.000205, -23.1378,
    -53.3827, 0.999795, -23.1378,
    -52.3787, 0.999795, -22.9187,
    -58.1277, -0.000205, -19.235,
    -59.5541, -0.000205, -19.7639,
    -59.5541, 0.999795, -19.7639,
    -58.1277, 0.999795, -19.235,
    -53.3827, -0.000205, -23.1378,
    -53.0324, -0.000205, -24.5356,
    -53.0324, 0.999795, -24.5356,
    -53.3827, 0.999795, -23.1378,
    -59.6545, -0.000205, -17.8349,
    -58.1277, -0.000205, -19.235,
    -58.1277, 0.999795, -19.235,
    -59.6545, 0.999795, -17.8349
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
    0.9141, 0, 0.4054,
    0.9141, 0, 0.4054,
    0.9141, 0, 0.4054,
    0.9141, 0, 0.4054,
    -0.6397, 0, 0.7686,
    -0.6397, 0, 0.7686,
    -0.6397, 0, 0.7686,
    -0.6397, 0, 0.7686,
    0.6212, 0, -0.7836,
    0.6212, 0, -0.7836,
    0.6212, 0, -0.7836,
    0.6212, 0, -0.7836,
    0.9902, 0, 0.1395,
    0.9902, 0, 0.1395,
    0.9902, 0, 0.1395,
    0.9902, 0, 0.1395,
    -0.2761, 0, -0.9611,
    -0.2761, 0, -0.9611,
    -0.2761, 0, -0.9611,
    -0.2761, 0, -0.9611,
    0.9177, 0, 0.3972,
    0.9177, 0, 0.3972,
    0.9177, 0, 0.3972,
    0.9177, 0, 0.3972,
    0.165, 0, -0.9863,
    0.165, 0, -0.9863,
    0.165, 0, -0.9863,
    0.165, 0, -0.9863,
    0.824, 0, 0.5666,
    0.824, 0, 0.5666,
    0.824, 0, 0.5666,
    0.824, 0, 0.5666,
    0.6563, 0, -0.7545,
    0.6563, 0, -0.7545,
    0.6563, 0, -0.7545,
    0.6563, 0, -0.7545,
    -0.7115, 0, 0.7027,
    -0.7115, 0, 0.7027,
    -0.7115, 0, 0.7027,
    -0.7115, 0, 0.7027,
    -0.9518, 0, -0.3066,
    -0.9518, 0, -0.3066,
    -0.9518, 0, -0.3066,
    -0.9518, 0, -0.3066,
    -0.9863, 0, 0.1653,
    -0.9863, 0, 0.1653,
    -0.9863, 0, 0.1653,
    -0.9863, 0, 0.1653,
    0.2342, 0, -0.9722,
    0.2342, 0, -0.9722,
    0.2342, 0, -0.9722,
    0.2342, 0, -0.9722,
    -0.9874, 0, -0.1582,
    -0.9874, 0, -0.1582,
    -0.9874, 0, -0.1582,
    -0.9874, 0, -0.1582,
    0.1704, 0, -0.9854,
    0.1704, 0, -0.9854,
    0.1704, 0, -0.9854,
    0.1704, 0, -0.9854,
    -0.5606, 0, 0.8281,
    -0.5606, 0, 0.8281,
    -0.5606, 0, 0.8281,
    -0.5606, 0, 0.8281,
    -0.8664, 0, -0.4993,
    -0.8664, 0, -0.4993,
    -0.8664, 0, -0.4993,
    -0.8664, 0, -0.4993,
    -0.6413, 0, 0.7673,
    -0.6413, 0, 0.7673,
    -0.6413, 0, 0.7673,
    -0.6413, 0, 0.7673,
    -0.27, 0, 0.9629,
    -0.27, 0, 0.9629,
    -0.27, 0, 0.9629,
    -0.27, 0, 0.9629,
    -0.4593, 0, 0.8883,
    -0.4593, 0, 0.8883,
    -0.4593, 0, 0.8883,
    -0.4593, 0, 0.8883,
    -0.9152, 0, 0.403,
    -0.9152, 0, 0.403,
    -0.9152, 0, 0.403,
    -0.9152, 0, 0.403,
    0.9619, 0, -0.2733,
    0.9619, 0, -0.2733,
    0.9619, 0, -0.2733,
    0.9619, 0, -0.2733,
    -0.6226, 0, 0.7825,
    -0.6226, 0, 0.7825,
    -0.6226, 0, 0.7825,
    -0.6226, 0, 0.7825,
    -0.9744, 0, 0.2248,
    -0.9744, 0, 0.2248,
    -0.9744, 0, 0.2248,
    -0.9744, 0, 0.2248,
    -0.7068, 0, -0.7074,
    -0.7068, 0, -0.7074,
    -0.7068, 0, -0.7074,
    -0.7068, 0, -0.7074,
    -0.1079, 0, 0.9942,
    -0.1079, 0, 0.9942,
    -0.1079, 0, 0.9942,
    -0.1079, 0, 0.9942,
    0.1706, 0, -0.9853,
    0.1706, 0, -0.9853,
    0.1706, 0, -0.9853,
    0.1706, 0, -0.9853,
    -0.6073, 0, 0.7944,
    -0.6073, 0, 0.7944,
    -0.6073, 0, 0.7944,
    -0.6073, 0, 0.7944,
    0.5483, 0, -0.8363,
    0.5483, 0, -0.8363,
    0.5483, 0, -0.8363,
    0.5483, 0, -0.8363,
    -0.2073, 0, 0.9783,
    -0.2073, 0, 0.9783,
    -0.2073, 0, 0.9783,
    -0.2073, 0, 0.9783,
    -0.3619, 0, -0.9322,
    -0.3619, 0, -0.9322,
    -0.3619, 0, -0.9322,
    -0.3619, 0, -0.9322,
    -0.9035, 0, -0.4285,
    -0.9035, 0, -0.4285,
    -0.9035, 0, -0.4285,
    -0.9035, 0, -0.4285,
    0.1066, 0, -0.9943,
    0.1066, 0, -0.9943,
    0.1066, 0, -0.9943,
    0.1066, 0, -0.9943,
    -0.9849, 0, 0.1733,
    -0.9849, 0, 0.1733,
    -0.9849, 0, 0.1733,
    -0.9849, 0, 0.1733,
    -0.427, 0, -0.9043,
    -0.427, 0, -0.9043,
    -0.427, 0, -0.9043,
    -0.427, 0, -0.9043,
    -0.7616, 0, -0.6481,
    -0.7616, 0, -0.6481,
    -0.7616, 0, -0.6481,
    -0.7616, 0, -0.6481,
    -0.2515, 0, -0.9679,
    -0.2515, 0, -0.9679,
    -0.2515, 0, -0.9679,
    -0.2515, 0, -0.9679,
    0.7162, 0, 0.6979,
    0.7162, 0, 0.6979,
    0.7162, 0, 0.6979,
    0.7162, 0, 0.6979,
    0.1868, 0, 0.9824,
    0.1868, 0, 0.9824,
    0.1868, 0, 0.9824,
    0.1868, 0, 0.9824,
    -0.9202, 0, -0.3915,
    -0.9202, 0, -0.3915,
    -0.9202, 0, -0.3915,
    -0.9202, 0, -0.3915,
    0.6816, 0, -0.7318,
    0.6816, 0, -0.7318,
    0.6816, 0, -0.7318,
    0.6816, 0, -0.7318,
    0.9899, 0, 0.1418,
    0.9899, 0, 0.1418,
    0.9899, 0, 0.1418,
    0.9899, 0, 0.1418,
    -0.3294, 0, -0.9442,
    -0.3294, 0, -0.9442,
    -0.3294, 0, -0.9442,
    -0.3294, 0, -0.9442,
    0.1503, 0, 0.9886,
    0.1503, 0, 0.9886,
    0.1503, 0, 0.9886,
    0.1503, 0, 0.9886,
    -0.9914, 0, 0.1307,
    -0.9914, 0, 0.1307,
    -0.9914, 0, 0.1307,
    -0.9914, 0, 0.1307,
    0.9831, 0, 0.1832,
    0.9831, 0, 0.1832,
    0.9831, 0, 0.1832,
    0.9831, 0, 0.1832,
    -0.092, 0, 0.9958,
    -0.092, 0, 0.9958,
    -0.092, 0, 0.9958,
    -0.092, 0, 0.9958,
    0.9707, 0, -0.2402,
    0.9707, 0, -0.2402,
    0.9707, 0, -0.2402,
    0.9707, 0, -0.2402,
    0.7351, 0, 0.678,
    0.7351, 0, 0.678,
    0.7351, 0, 0.678,
    0.7351, 0, 0.678,
    0.9645, 0, -0.2639,
    0.9645, 0, -0.2639,
    0.9645, 0, -0.2639,
    0.9645, 0, -0.2639,
    0.0232, 0, 0.9997,
    0.0232, 0, 0.9997,
    0.0232, 0, 0.9997,
    0.0232, 0, 0.9997,
    0.2133, 0, -0.977,
    0.2133, 0, -0.977,
    0.2133, 0, -0.977,
    0.2133, 0, -0.977,
    0.3477, 0, -0.9376,
    0.3477, 0, -0.9376,
    0.3477, 0, -0.9376,
    0.3477, 0, -0.9376,
    0.97, 0, 0.2431,
    0.97, 0, 0.2431,
    0.97, 0, 0.2431,
    0.97, 0, 0.2431,
    0.6759, 0, 0.737,
    0.6759, 0, 0.737,
    0.6759, 0, 0.737,
    0.6759, 0, 0.737
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.295935, 0.377488,
    0.305891, 0.371662,
    0.308874, 0.377034,
    0.310583, 0.372921,
    0.31824, 0.373372,
    0.329014, 0.379057,
    0.328321, 0.388689,
    0.333645, 0.40038,
    0.328825, 0.408745,
    0.328299, 0.415536,
    0.33271, 0.424157,
    0.323675, 0.424778,
    0.323577, 0.439593,
    0.315425, 0.441935,
    0.310215, 0.449912,
    0.298296, 0.451826,
    0.291038, 0.448976,
    0.28625, 0.457797,
    0.270968, 0.476534,
    0.268788, 0.49243,
    0.264007, 0.499223,
    0.267591, 0.509442,
    0.266873, 0.519441,
    0.259488, 0.523897,
    0.254003, 0.511906,
    0.23439, 0.496752,
    0.234308, 0.494051,
    0.240887, 0.492892,
    0.241044, 0.488305,
    0.238362, 0.48213,
    0.239631, 0.472788,
    0.235269, 0.470573,
    0.2235, 0.446408,
    0.219699, 0.436061,
    0.211002, 0.435327,
    0.198596, 0.42995,
    0.190968, 0.417469,
    0.198727, 0.414555,
    0.231585, 0.409067,
    0.258048, 0.411804,
    0.253615, 0.402653,
    0.262638, 0.396669,
    0.263527, 0.404569,
    0.265368, 0.39782,
    0.279719, 0.389942,
    0.282906, 0.368978,
    0.288555, 0.372138,
    0.288404, 0.377507,
    0.195883, 0.431267,
    0.190001, 0.434196,
    0.18375, 0.435462,
    0.180397, 0.433975,
    0.179225, 0.429062,
    0.180481, 0.426329,
    0.188711, 0.427161,
    0.234308, 0.494051,
    0.240887, 0.492892,
    0.240887, 0.492892,
    0.234308, 0.494051,
    0.258048, 0.411804,
    0.253615, 0.402653,
    0.253615, 0.402653,
    0.258048, 0.411804,
    0.328321, 0.388689,
    0.333645, 0.40038,
    0.333645, 0.40038,
    0.328321, 0.388689,
    0.231585, 0.409067,
    0.258048, 0.411804,
    0.258048, 0.411804,
    0.231585, 0.409067,
    0.333645, 0.40038,
    0.328825, 0.408745,
    0.328825, 0.408745,
    0.333645, 0.40038,
    0.198727, 0.414555,
    0.231585, 0.409067,
    0.231585, 0.409067,
    0.198727, 0.414555,
    0.328825, 0.408745,
    0.328299, 0.415536,
    0.328299, 0.415536,
    0.328825, 0.408745,
    0.190968, 0.417469,
    0.198727, 0.414555,
    0.198727, 0.414555,
    0.190968, 0.417469,
    0.328299, 0.415536,
    0.33271, 0.424157,
    0.33271, 0.424157,
    0.328299, 0.415536,
    0.198596, 0.42995,
    0.190968, 0.417469,
    0.190968, 0.417469,
    0.198596, 0.42995,
    0.33271, 0.424157,
    0.323675, 0.424778,
    0.323675, 0.424778,
    0.33271, 0.424157,
    0.211002, 0.435327,
    0.198596, 0.42995,
    0.198596, 0.42995,
    0.211002, 0.435327,
    0.323675, 0.424778,
    0.323577, 0.439593,
    0.323577, 0.439593,
    0.323675, 0.424778,
    0.219699, 0.436061,
    0.211002, 0.435327,
    0.211002, 0.435327,
    0.219699, 0.436061,
    0.329014, 0.379057,
    0.328321, 0.388689,
    0.328321, 0.388689,
    0.329014, 0.379057,
    0.2235, 0.446408,
    0.219699, 0.436061,
    0.219699, 0.436061,
    0.2235, 0.446408,
    0.323577, 0.439593,
    0.315425, 0.441935,
    0.315425, 0.441935,
    0.323577, 0.439593,
    0.235269, 0.470573,
    0.2235, 0.446408,
    0.2235, 0.446408,
    0.235269, 0.470573,
    0.23439, 0.496752,
    0.234308, 0.494051,
    0.234308, 0.494051,
    0.23439, 0.496752,
    0.180397, 0.433975,
    0.179225, 0.429062,
    0.179225, 0.429062,
    0.180397, 0.433975,
    0.254003, 0.511906,
    0.23439, 0.496752,
    0.23439, 0.496752,
    0.254003, 0.511906,
    0.188711, 0.427161,
    0.195883, 0.431267,
    0.195883, 0.431267,
    0.188711, 0.427161,
    0.259488, 0.523897,
    0.254003, 0.511906,
    0.254003, 0.511906,
    0.259488, 0.523897,
    0.239631, 0.472788,
    0.235269, 0.470573,
    0.235269, 0.470573,
    0.239631, 0.472788,
    0.266873, 0.519441,
    0.259488, 0.523897,
    0.259488, 0.523897,
    0.266873, 0.519441,
    0.238362, 0.48213,
    0.239631, 0.472788,
    0.239631, 0.472788,
    0.238362, 0.48213,
    0.267591, 0.509442,
    0.266873, 0.519441,
    0.266873, 0.519441,
    0.267591, 0.509442,
    0.241044, 0.488305,
    0.238362, 0.48213,
    0.238362, 0.48213,
    0.241044, 0.488305,
    0.264007, 0.499223,
    0.267591, 0.509442,
    0.267591, 0.509442,
    0.264007, 0.499223,
    0.240887, 0.492892,
    0.241044, 0.488305,
    0.241044, 0.488305,
    0.240887, 0.492892,
    0.268788, 0.49243,
    0.264007, 0.499223,
    0.264007, 0.499223,
    0.268788, 0.49243,
    0.190001, 0.434196,
    0.18375, 0.435462,
    0.18375, 0.435462,
    0.190001, 0.434196,
    0.270968, 0.476534,
    0.268788, 0.49243,
    0.268788, 0.49243,
    0.270968, 0.476534,
    0.18375, 0.435462,
    0.180397, 0.433975,
    0.180397, 0.433975,
    0.18375, 0.435462,
    0.28625, 0.457797,
    0.270968, 0.476534,
    0.270968, 0.476534,
    0.28625, 0.457797,
    0.195883, 0.431267,
    0.190001, 0.434196,
    0.190001, 0.434196,
    0.195883, 0.431267,
    0.291038, 0.448976,
    0.28625, 0.457797,
    0.28625, 0.457797,
    0.291038, 0.448976,
    0.295935, 0.377488,
    0.305891, 0.371662,
    0.305891, 0.371662,
    0.295935, 0.377488,
    0.179225, 0.429062,
    0.180481, 0.426329,
    0.180481, 0.426329,
    0.179225, 0.429062,
    0.310215, 0.449912,
    0.298296, 0.451826,
    0.298296, 0.451826,
    0.310215, 0.449912,
    0.305891, 0.371662,
    0.308874, 0.377034,
    0.308874, 0.377034,
    0.305891, 0.371662,
    0.180481, 0.426329,
    0.188711, 0.427161,
    0.188711, 0.427161,
    0.180481, 0.426329,
    0.315425, 0.441935,
    0.310215, 0.449912,
    0.310215, 0.449912,
    0.315425, 0.441935,
    0.308874, 0.377034,
    0.310583, 0.372921,
    0.310583, 0.372921,
    0.308874, 0.377034,
    0.298296, 0.451826,
    0.291038, 0.448976,
    0.291038, 0.448976,
    0.298296, 0.451826,
    0.310583, 0.372921,
    0.31824, 0.373372,
    0.31824, 0.373372,
    0.310583, 0.372921,
    0.279719, 0.389942,
    0.282906, 0.368978,
    0.282906, 0.368978,
    0.279719, 0.389942,
    0.31824, 0.373372,
    0.329014, 0.379057,
    0.329014, 0.379057,
    0.31824, 0.373372,
    0.265368, 0.39782,
    0.279719, 0.389942,
    0.279719, 0.389942,
    0.265368, 0.39782,
    0.282906, 0.368978,
    0.288555, 0.372138,
    0.288555, 0.372138,
    0.282906, 0.368978,
    0.263527, 0.404569,
    0.265368, 0.39782,
    0.265368, 0.39782,
    0.263527, 0.404569,
    0.288555, 0.372138,
    0.288404, 0.377507,
    0.288404, 0.377507,
    0.288555, 0.372138,
    0.262638, 0.396669,
    0.263527, 0.404569,
    0.263527, 0.404569,
    0.262638, 0.396669,
    0.288404, 0.377507,
    0.295935, 0.377488,
    0.295935, 0.377488,
    0.288404, 0.377507,
    0.253615, 0.402653,
    0.262638, 0.396669,
    0.262638, 0.396669,
    0.253615, 0.402653
]);

// prettier-ignore
let index_arr = Uint16Array.from([
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
    58, 57, 55,
    57, 56, 55,
    54, 53, 52,
    52, 51, 54,
    51, 50, 54,
    50, 49, 54,
    49, 48, 54,
    8, 7, 2,
    7, 6, 2,
    6, 5, 2,
    5, 4, 2,
    4, 3, 2,
    9, 8, 2,
    15, 14, 11,
    14, 13, 11,
    13, 12, 11,
    11, 10, 9,
    16, 15, 11,
    18, 17, 16,
    22, 21, 20,
    20, 19, 18,
    23, 22, 20,
    24, 23, 20,
    25, 24, 20,
    26, 25, 20,
    27, 26, 20,
    28, 27, 20,
    29, 28, 20,
    38, 37, 33,
    37, 36, 33,
    36, 35, 33,
    35, 34, 33,
    41, 40, 39,
    39, 38, 33,
    39, 33, 30,
    33, 32, 30,
    32, 31, 30,
    30, 29, 20,
    42, 39, 30,
    42, 41, 39,
    44, 42, 30,
    30, 20, 44,
    20, 18, 44,
    18, 16, 44,
    16, 11, 44,
    11, 9, 44,
    9, 2, 44,
    44, 43, 42,
    46, 45, 44,
    47, 46, 44,
    2, 0, 44,
    0, 47, 44,
    2, 1, 0
]);
