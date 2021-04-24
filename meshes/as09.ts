import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_as09(gl: WebGLRenderingContext): Mesh {
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
    -78.1964, 0.999795, -18.3883,
    -80.1305, 0.999795, -22.78,
    -81.9132, 0.999795, -24.1984,
    -82.5504, 0.999795, -23.7698,
    -82.6358, 0.999795, -22.4215,
    -81.6824, 0.999795, -20.5677,
    -82.9101, 0.999795, -20.4333,
    -83.2822, 0.999795, -18.922,
    -85.7398, 0.999795, -17.7522,
    -85.7012, 0.999795, -19.2173,
    -88.2854, 0.999795, -19.8323,
    -90.3824, 0.999795, -18.1853,
    -89.6086, 0.999795, -17.8332,
    -88.7771, 0.999795, -16.2804,
    -90.5686, 0.999795, -13.9946,
    -90.7023, 0.999795, -14.0196,
    -91.4526, 0.999795, -13.061,
    -91.9245, 0.999795, -11.0779,
    -91.6561, 0.999795, -9.89168,
    -89.9752, 0.999795, -8.92398,
    -89.4853, 0.999795, -8.25912,
    -88.1263, 0.999795, -7.49854,
    -88.232, 0.999795, -8.55494,
    -87.0981, 0.999795, -9.05352,
    -86.6725, 0.999795, -9.85491,
    -85.555, 0.999795, -10.7838,
    -84.904, 0.999795, -10.8998,
    -84.7357, 0.999795, -11.5578,
    -84.0851, 0.999795, -11.4188,
    -84.063, 0.999795, -10.502,
    -83.3831, 0.999795, -8.75517,
    -83.5042, 0.999795, -7.93367,
    -83.8922, 0.999795, -8.00449,
    -84.4454, 0.999795, -6.27154,
    -86.814, 0.999795, -4.76808,
    -86.9426, 0.999795, -2.69092,
    -87.6505, 0.999795, -1.53167,
    -86.9529, 0.999795, -1.51693,
    -85.1353, 0.999795, -2.72616,
    -84.4223, 0.999795, -5.11028,
    -83.5754, 0.999795, -6.43692,
    -82.708, 0.999795, -7.43992,
    -82.9959, 0.999795, -9.98938,
    -82.3162, 0.999795, -12.6379,
    -81.5553, 0.999795, -14.7875,
    -81.0492, 0.999795, -14.0867,
    -80.286, 0.999795, -13.4975,
    -79.2651, 0.999795, -13.7371,
    -79.5639, 0.999795, -14.7417,
    -79.4444, 0.999795, -15.5869,
    -78.9867, 0.999795, -16.5117,
    -77.9912, 0.999795, -17.3893,
    -77.5848, 0.999795, -18.2168,
    -88.7771, -0.000205, -16.2804,
    -90.5686, -0.000205, -13.9946,
    -90.5686, 0.999795, -13.9946,
    -88.7771, 0.999795, -16.2804,
    -80.1305, -0.000205, -22.78,
    -81.9132, -0.000205, -24.1984,
    -81.9132, 0.999795, -24.1984,
    -80.1305, 0.999795, -22.78,
    -89.6086, -0.000205, -17.8332,
    -88.7771, -0.000205, -16.2804,
    -88.7771, 0.999795, -16.2804,
    -89.6086, 0.999795, -17.8332,
    -81.9132, -0.000205, -24.1984,
    -82.5504, -0.000205, -23.7698,
    -82.5504, 0.999795, -23.7698,
    -81.9132, 0.999795, -24.1984,
    -77.9912, -0.000205, -17.3893,
    -77.5848, -0.000205, -18.2168,
    -77.5848, 0.999795, -18.2168,
    -77.9912, 0.999795, -17.3893,
    -82.5504, -0.000205, -23.7698,
    -82.6358, -0.000205, -22.4215,
    -82.6358, 0.999795, -22.4215,
    -82.5504, 0.999795, -23.7698,
    -86.9529, -0.000205, -1.51693,
    -85.1353, -0.000205, -2.72616,
    -85.1353, 0.999795, -2.72616,
    -86.9529, 0.999795, -1.51693,
    -88.2854, -0.000205, -19.8323,
    -90.3824, -0.000205, -18.1853,
    -90.3824, 0.999795, -18.1853,
    -88.2854, 0.999795, -19.8323,
    -78.9867, -0.000205, -16.5117,
    -77.9912, -0.000205, -17.3893,
    -77.9912, 0.999795, -17.3893,
    -78.9867, 0.999795, -16.5117,
    -85.7012, -0.000205, -19.2173,
    -88.2854, -0.000205, -19.8323,
    -88.2854, 0.999795, -19.8323,
    -85.7012, 0.999795, -19.2173,
    -79.4444, -0.000205, -15.5869,
    -78.9867, -0.000205, -16.5117,
    -78.9867, 0.999795, -16.5117,
    -79.4444, 0.999795, -15.5869,
    -85.7398, -0.000205, -17.7522,
    -85.7012, -0.000205, -19.2173,
    -85.7012, 0.999795, -19.2173,
    -85.7398, 0.999795, -17.7522,
    -79.5639, -0.000205, -14.7417,
    -79.4444, -0.000205, -15.5869,
    -79.4444, 0.999795, -15.5869,
    -79.5639, 0.999795, -14.7417,
    -83.2822, -0.000205, -18.922,
    -85.7398, -0.000205, -17.7522,
    -85.7398, 0.999795, -17.7522,
    -83.2822, 0.999795, -18.922,
    -79.2651, -0.000205, -13.7371,
    -79.5639, -0.000205, -14.7417,
    -79.5639, 0.999795, -14.7417,
    -79.2651, 0.999795, -13.7371,
    -82.9101, -0.000205, -20.4333,
    -83.2822, -0.000205, -18.922,
    -83.2822, 0.999795, -18.922,
    -82.9101, 0.999795, -20.4333,
    -80.286, -0.000205, -13.4975,
    -79.2651, -0.000205, -13.7371,
    -79.2651, 0.999795, -13.7371,
    -80.286, 0.999795, -13.4975,
    -81.0492, -0.000205, -14.0867,
    -80.286, -0.000205, -13.4975,
    -80.286, 0.999795, -13.4975,
    -81.0492, 0.999795, -14.0867,
    -82.6358, -0.000205, -22.4215,
    -81.6824, -0.000205, -20.5677,
    -81.6824, 0.999795, -20.5677,
    -82.6358, 0.999795, -22.4215,
    -81.5553, -0.000205, -14.7875,
    -81.0492, -0.000205, -14.0867,
    -81.0492, 0.999795, -14.0867,
    -81.5553, 0.999795, -14.7875,
    -90.3824, -0.000205, -18.1853,
    -89.6086, -0.000205, -17.8332,
    -89.6086, 0.999795, -17.8332,
    -90.3824, 0.999795, -18.1853,
    -82.3162, -0.000205, -12.6379,
    -81.5553, -0.000205, -14.7875,
    -81.5553, 0.999795, -14.7875,
    -82.3162, 0.999795, -12.6379,
    -84.0851, -0.000205, -11.4188,
    -84.063, -0.000205, -10.502,
    -84.063, 0.999795, -10.502,
    -84.0851, 0.999795, -11.4188,
    -82.9959, -0.000205, -9.98938,
    -82.3162, -0.000205, -12.6379,
    -82.3162, 0.999795, -12.6379,
    -82.9959, 0.999795, -9.98938,
    -84.7357, -0.000205, -11.5578,
    -84.0851, -0.000205, -11.4188,
    -84.0851, 0.999795, -11.4188,
    -84.7357, 0.999795, -11.5578,
    -82.708, -0.000205, -7.43992,
    -82.9959, -0.000205, -9.98938,
    -82.9959, 0.999795, -9.98938,
    -82.708, 0.999795, -7.43992,
    -84.904, -0.000205, -10.8998,
    -84.7357, -0.000205, -11.5578,
    -84.7357, 0.999795, -11.5578,
    -84.904, 0.999795, -10.8998,
    -85.555, -0.000205, -10.7838,
    -84.904, -0.000205, -10.8998,
    -84.904, 0.999795, -10.8998,
    -85.555, 0.999795, -10.7838,
    -84.4223, -0.000205, -5.11028,
    -83.5754, -0.000205, -6.43692,
    -83.5754, 0.999795, -6.43692,
    -84.4223, 0.999795, -5.11028,
    -86.6725, -0.000205, -9.85491,
    -85.555, -0.000205, -10.7838,
    -85.555, 0.999795, -10.7838,
    -86.6725, 0.999795, -9.85491,
    -85.1353, -0.000205, -2.72616,
    -84.4223, -0.000205, -5.11028,
    -84.4223, 0.999795, -5.11028,
    -85.1353, 0.999795, -2.72616,
    -87.0981, -0.000205, -9.05352,
    -86.6725, -0.000205, -9.85491,
    -86.6725, 0.999795, -9.85491,
    -87.0981, 0.999795, -9.05352,
    -87.6505, -0.000205, -1.53167,
    -86.9529, -0.000205, -1.51693,
    -86.9529, 0.999795, -1.51693,
    -87.6505, 0.999795, -1.53167,
    -88.232, -0.000205, -8.55494,
    -87.0981, -0.000205, -9.05352,
    -87.0981, 0.999795, -9.05352,
    -88.232, 0.999795, -8.55494,
    -88.1263, -0.000205, -7.49854,
    -88.232, -0.000205, -8.55494,
    -88.232, 0.999795, -8.55494,
    -88.1263, 0.999795, -7.49854,
    -83.5042, -0.000205, -7.93367,
    -83.8922, -0.000205, -8.00449,
    -83.8922, 0.999795, -8.00449,
    -83.5042, 0.999795, -7.93367,
    -89.4853, -0.000205, -8.25912,
    -88.1263, -0.000205, -7.49854,
    -88.1263, 0.999795, -7.49854,
    -89.4853, 0.999795, -8.25912,
    -83.3831, -0.000205, -8.75517,
    -83.5042, -0.000205, -7.93367,
    -83.5042, 0.999795, -7.93367,
    -83.3831, 0.999795, -8.75517,
    -89.9752, -0.000205, -8.92398,
    -89.4853, -0.000205, -8.25912,
    -89.4853, 0.999795, -8.25912,
    -89.9752, 0.999795, -8.92398,
    -84.063, -0.000205, -10.502,
    -83.3831, -0.000205, -8.75517,
    -83.3831, 0.999795, -8.75517,
    -84.063, 0.999795, -10.502,
    -91.6561, -0.000205, -9.89168,
    -89.9752, -0.000205, -8.92398,
    -89.9752, 0.999795, -8.92398,
    -91.6561, 0.999795, -9.89168,
    -86.814, -0.000205, -4.76808,
    -86.9426, -0.000205, -2.69092,
    -86.9426, 0.999795, -2.69092,
    -86.814, 0.999795, -4.76808,
    -91.9245, -0.000205, -11.0779,
    -91.6561, -0.000205, -9.89168,
    -91.6561, 0.999795, -9.89168,
    -91.9245, 0.999795, -11.0779,
    -84.4454, -0.000205, -6.27154,
    -86.814, -0.000205, -4.76808,
    -86.814, 0.999795, -4.76808,
    -84.4454, 0.999795, -6.27154,
    -91.4526, -0.000205, -13.061,
    -91.9245, -0.000205, -11.0779,
    -91.9245, 0.999795, -11.0779,
    -91.4526, 0.999795, -13.061,
    -86.9426, -0.000205, -2.69092,
    -87.6505, -0.000205, -1.53167,
    -87.6505, 0.999795, -1.53167,
    -86.9426, 0.999795, -2.69092,
    -90.7023, -0.000205, -14.0196,
    -91.4526, -0.000205, -13.061,
    -91.4526, 0.999795, -13.061,
    -90.7023, 0.999795, -14.0196,
    -77.5848, -0.000205, -18.2168,
    -78.1964, -0.000205, -18.3883,
    -78.1964, 0.999795, -18.3883,
    -77.5848, 0.999795, -18.2168,
    -90.5686, -0.000205, -13.9946,
    -90.7023, -0.000205, -14.0196,
    -90.7023, 0.999795, -14.0196,
    -90.5686, 0.999795, -13.9946,
    -78.1964, -0.000205, -18.3883,
    -80.1305, -0.000205, -22.78,
    -80.1305, 0.999795, -22.78,
    -78.1964, 0.999795, -18.3883,
    -81.6824, -0.000205, -20.5677,
    -82.9101, -0.000205, -20.4333,
    -82.9101, 0.999795, -20.4333,
    -81.6824, 0.999795, -20.5677,
    -83.5754, -0.000205, -6.43692,
    -82.708, -0.000205, -7.43992,
    -82.708, 0.999795, -7.43992,
    -83.5754, 0.999795, -6.43692,
    -83.8922, -0.000205, -8.00449,
    -84.4454, -0.000205, -6.27154,
    -84.4454, 0.999795, -6.27154,
    -83.8922, 0.999795, -8.00449
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
    -0.7871, 0, -0.6169,
    -0.7871, 0, -0.6169,
    -0.7871, 0, -0.6169,
    -0.7871, 0, -0.6169,
    0.6226, 0, -0.7825,
    0.6226, 0, -0.7825,
    0.6226, 0, -0.7825,
    0.6226, 0, -0.7825,
    -0.8816, 0, 0.472,
    -0.8816, 0, 0.472,
    -0.8816, 0, 0.472,
    -0.8816, 0, 0.472,
    -0.5582, 0, -0.8297,
    -0.5582, 0, -0.8297,
    -0.5582, 0, -0.8297,
    -0.5582, 0, -0.8297,
    0.8976, 0, 0.4408,
    0.8976, 0, 0.4408,
    0.8976, 0, 0.4408,
    0.8976, 0, 0.4408,
    -0.998, 0, -0.0633,
    -0.998, 0, -0.0633,
    -0.998, 0, -0.0633,
    -0.998, 0, -0.0633,
    0.5539, 0, 0.8326,
    0.5539, 0, 0.8326,
    0.5539, 0, 0.8326,
    0.5539, 0, 0.8326,
    -0.6177, 0, -0.7864,
    -0.6177, 0, -0.7864,
    -0.6177, 0, -0.7864,
    -0.6177, 0, -0.7864,
    0.6613, 0, 0.7501,
    0.6613, 0, 0.7501,
    0.6613, 0, 0.7501,
    0.6613, 0, 0.7501,
    0.2315, 0, -0.9728,
    0.2315, 0, -0.9728,
    0.2315, 0, -0.9728,
    0.2315, 0, -0.9728,
    0.8963, 0, 0.4435,
    0.8963, 0, 0.4435,
    0.8963, 0, 0.4435,
    0.8963, 0, 0.4435,
    0.9997, 0, 0.0264,
    0.9997, 0, 0.0264,
    0.9997, 0, 0.0264,
    0.9997, 0, 0.0264,
    0.9901, 0, 0.1401,
    0.9901, 0, 0.1401,
    0.9901, 0, 0.1401,
    0.9901, 0, 0.1401,
    -0.4298, 0, -0.9029,
    -0.4298, 0, -0.9029,
    -0.4298, 0, -0.9029,
    -0.4298, 0, -0.9029,
    0.9585, 0, -0.2851,
    0.9585, 0, -0.2851,
    0.9585, 0, -0.2851,
    0.9585, 0, -0.2851,
    -0.971, 0, -0.2391,
    -0.971, 0, -0.2391,
    -0.971, 0, -0.2391,
    -0.971, 0, -0.2391,
    0.2284, 0, 0.9736,
    0.2284, 0, 0.9736,
    0.2284, 0, 0.9736,
    0.2284, 0, 0.9736,
    -0.6111, 0, 0.7916,
    -0.6111, 0, 0.7916,
    -0.6111, 0, 0.7916,
    -0.6111, 0, 0.7916,
    -0.8893, 0, 0.4573,
    -0.8893, 0, 0.4573,
    -0.8893, 0, 0.4573,
    -0.8893, 0, 0.4573,
    -0.8107, 0, 0.5854,
    -0.8107, 0, 0.5854,
    -0.8107, 0, 0.5854,
    -0.8107, 0, 0.5854,
    -0.4142, 0, 0.9102,
    -0.4142, 0, 0.9102,
    -0.4142, 0, 0.9102,
    -0.4142, 0, 0.9102,
    0.9427, 0, 0.3337,
    0.9427, 0, 0.3337,
    0.9427, 0, 0.3337,
    0.9427, 0, 0.3337,
    -0.9997, 0, 0.0241,
    -0.9997, 0, 0.0241,
    -0.9997, 0, 0.0241,
    -0.9997, 0, 0.0241,
    0.9686, 0, 0.2486,
    0.9686, 0, 0.2486,
    0.9686, 0, 0.2486,
    0.9686, 0, 0.2486,
    -0.2088, 0, 0.978,
    -0.2088, 0, 0.978,
    -0.2088, 0, 0.978,
    -0.2088, 0, 0.978,
    0.9937, 0, -0.1122,
    0.9937, 0, -0.1122,
    0.9937, 0, -0.1122,
    0.9937, 0, -0.1122,
    0.9688, 0, 0.2478,
    0.9688, 0, 0.2478,
    0.9688, 0, 0.2478,
    0.9688, 0, 0.2478,
    0.1755, 0, 0.9845,
    0.1755, 0, 0.9845,
    0.1755, 0, 0.9845,
    0.1755, 0, 0.9845,
    0.8429, 0, 0.5381,
    0.8429, 0, 0.5381,
    0.8429, 0, 0.5381,
    0.8429, 0, 0.5381,
    0.6392, 0, 0.769,
    0.6392, 0, 0.769,
    0.6392, 0, 0.769,
    0.6392, 0, 0.769,
    0.9581, 0, 0.2866,
    0.9581, 0, 0.2866,
    0.9581, 0, 0.2866,
    0.9581, 0, 0.2866,
    0.8832, 0, 0.469,
    0.8832, 0, 0.469,
    0.8832, 0, 0.469,
    0.8832, 0, 0.469,
    -0.0211, 0, 0.9998,
    -0.0211, 0, 0.9998,
    -0.0211, 0, 0.9998,
    -0.0211, 0, 0.9998,
    0.4025, 0, 0.9154,
    0.4025, 0, 0.9154,
    0.4025, 0, 0.9154,
    0.4025, 0, 0.9154,
    0.995, 0, -0.0995,
    0.995, 0, -0.0995,
    0.995, 0, -0.0995,
    0.995, 0, -0.0995,
    0.1796, 0, -0.9837,
    0.1796, 0, -0.9837,
    0.1796, 0, -0.9837,
    0.1796, 0, -0.9837,
    -0.4884, 0, 0.8726,
    -0.4884, 0, 0.8726,
    -0.4884, 0, 0.8726,
    -0.4884, 0, 0.8726,
    -0.9893, 0, -0.1458,
    -0.9893, 0, -0.1458,
    -0.9893, 0, -0.1458,
    -0.9893, 0, -0.1458,
    -0.8051, 0, 0.5932,
    -0.8051, 0, 0.5932,
    -0.8051, 0, 0.5932,
    -0.8051, 0, 0.5932,
    -0.9319, 0, 0.3627,
    -0.9319, 0, 0.3627,
    -0.9319, 0, 0.3627,
    -0.9319, 0, 0.3627,
    -0.4989, 0, 0.8666,
    -0.4989, 0, 0.8666,
    -0.4989, 0, 0.8666,
    -0.4989, 0, 0.8666,
    -0.9981, 0, -0.0618,
    -0.9981, 0, -0.0618,
    -0.9981, 0, -0.0618,
    -0.9981, 0, -0.0618,
    -0.9753, 0, 0.2207,
    -0.9753, 0, 0.2207,
    -0.9753, 0, 0.2207,
    -0.9753, 0, 0.2207,
    -0.5359, 0, -0.8443,
    -0.5359, 0, -0.8443,
    -0.5359, 0, -0.8443,
    -0.5359, 0, -0.8443,
    -0.9728, 0, -0.2315,
    -0.9728, 0, -0.2315,
    -0.9728, 0, -0.2315,
    -0.9728, 0, -0.2315,
    -0.8535, 0, -0.5212,
    -0.8535, 0, -0.5212,
    -0.8535, 0, -0.5212,
    -0.8535, 0, -0.5212,
    -0.7875, 0, -0.6163,
    -0.7875, 0, -0.6163,
    -0.7875, 0, -0.6163,
    -0.7875, 0, -0.6163,
    0.27, 0, -0.9629,
    0.27, 0, -0.9629,
    0.27, 0, -0.9629,
    0.27, 0, -0.9629,
    0.1839, 0, -0.9829,
    0.1839, 0, -0.9829,
    0.1839, 0, -0.9829,
    0.1839, 0, -0.9829,
    0.9152, 0, -0.403,
    0.9152, 0, -0.403,
    0.9152, 0, -0.403,
    0.9152, 0, -0.403,
    -0.1089, 0, -0.9941,
    -0.1089, 0, -0.9941,
    -0.1089, 0, -0.9941,
    -0.1089, 0, -0.9941,
    0.7564, 0, 0.6541,
    0.7564, 0, 0.6541,
    0.7564, 0, 0.6541,
    0.7564, 0, 0.6541,
    -0.9526, 0, -0.3041,
    -0.9526, 0, -0.3041,
    -0.9526, 0, -0.3041,
    -0.9526, 0, -0.3041
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.462816, 0.269552,
    0.465644, 0.312963,
    0.457245, 0.33183,
    0.450327, 0.33105,
    0.443997, 0.320566,
    0.443905, 0.301668,
    0.43347, 0.305725,
    0.424153, 0.295129,
    0.399494, 0.296008,
    0.405936, 0.307628,
    0.387729, 0.323389,
    0.363973, 0.318921,
    0.368722, 0.312851,
    0.368909, 0.296885,
    0.344936, 0.286001,
    0.343965, 0.286762,
    0.333921, 0.282194,
    0.321825, 0.268221,
    0.319019, 0.257559,
    0.328486, 0.242742,
    0.329643, 0.235345,
    0.337388, 0.223541,
    0.34096, 0.232478,
    0.352165, 0.231742,
    0.358941, 0.236406,
    0.371815, 0.239198,
    0.377536, 0.237407,
    0.381643, 0.241993,
    0.386294, 0.238153,
    0.382634, 0.230688,
    0.380791, 0.213795,
    0.376378, 0.207696,
    0.373555, 0.209889,
    0.361853, 0.198269,
    0.336513, 0.196092,
    0.326786, 0.179926,
    0.316242, 0.173567,
    0.321789, 0.170529,
    0.341466, 0.172646,
    0.357179, 0.188833,
    0.369541, 0.195958,
    0.380714, 0.200393,
    0.389069, 0.222099,
    0.40562, 0.240552,
    0.420736, 0.254654,
    0.421872, 0.246901,
    0.425544, 0.238968,
    0.434756, 0.236622,
    0.436557, 0.245951,
    0.441056, 0.252247,
    0.448607, 0.257769,
    0.460285, 0.26066,
    0.467017, 0.265614,
    0.563164, 0.004159,
    0.522295, 0.004159,
    0.522295, 0.022038,
    0.563164, 0.022038,
    0.584644, 0.004159,
    0.552772, 0.004159,
    0.552772, 0.022038,
    0.584644, 0.022038,
    0.590925, 0.004159,
    0.563164, 0.004159,
    0.563164, 0.022038,
    0.590925, 0.022038,
    0.552772, 0.004159,
    0.54138, 0.004159,
    0.54138, 0.022038,
    0.552772, 0.022038,
    0.582989, 0.004159,
    0.597785, 0.004159,
    0.597785, 0.022038,
    0.582989, 0.022038,
    0.697066, 0.004159,
    0.672961, 0.004159,
    0.672961, 0.022038,
    0.697066, 0.022038,
    0.462667, 0.004159,
    0.495164, 0.004159,
    0.495164, 0.022038,
    0.462667, 0.022038,
    0.438844, 0.004159,
    0.401352, 0.004159,
    0.401352, 0.022038,
    0.438844, 0.022038,
    0.605095, 0.004159,
    0.622892, 0.004159,
    0.622892, 0.022038,
    0.605095, 0.022038,
    0.485047, 0.004159,
    0.438844, 0.004159,
    0.438844, 0.022038,
    0.485047, 0.022038,
    0.550764, 0.004159,
    0.567299, 0.004159,
    0.567299, 0.022038,
    0.550764, 0.022038,
    0.589478, 0.004159,
    0.615672, 0.004159,
    0.615672, 0.022038,
    0.589478, 0.022038,
    0.535652, 0.004159,
    0.550764, 0.004159,
    0.550764, 0.022038,
    0.535652, 0.022038,
    0.528296, 0.004159,
    0.484356, 0.004159,
    0.484356, 0.022038,
    0.528296, 0.022038,
    0.517691, 0.004159,
    0.535652, 0.004159,
    0.535652, 0.022038,
    0.517691, 0.022038,
    0.637413, 0.004159,
    0.610392, 0.004159,
    0.610392, 0.022038,
    0.637413, 0.022038,
    0.581864, 0.004159,
    0.600116, 0.004159,
    0.600116, 0.022038,
    0.581864, 0.022038,
    0.568219, 0.004159,
    0.581864, 0.004159,
    0.581864, 0.022038,
    0.568219, 0.022038,
    0.672961, 0.004159,
    0.639817, 0.004159,
    0.639817, 0.022038,
    0.672961, 0.022038,
    0.536472, 0.004159,
    0.523943, 0.004159,
    0.523943, 0.022038,
    0.536472, 0.022038,
    0.401352, 0.004159,
    0.415187, 0.004159,
    0.415187, 0.022038,
    0.401352, 0.022038,
    0.498039, 0.004159,
    0.536472, 0.004159,
    0.536472, 0.022038,
    0.498039, 0.022038,
    0.476244, 0.004159,
    0.459853, 0.004159,
    0.459853, 0.022038,
    0.476244, 0.022038,
    0.450687, 0.004159,
    0.498039, 0.004159,
    0.498039, 0.022038,
    0.450687, 0.022038,
    0.502308, 0.004159,
    0.513941, 0.004159,
    0.513941, 0.022038,
    0.502308, 0.022038,
    0.405105, 0.004159,
    0.450687, 0.004159,
    0.450687, 0.022038,
    0.405105, 0.022038,
    0.466964, 0.004159,
    0.478728, 0.004159,
    0.478728, 0.022038,
    0.466964, 0.022038,
    0.48766, 0.004159,
    0.499299, 0.004159,
    0.499299, 0.022038,
    0.48766, 0.022038,
    0.363454, 0.004159,
    0.387173, 0.004159,
    0.387173, 0.022038,
    0.363454, 0.022038,
    0.46768, 0.004159,
    0.48766, 0.004159,
    0.48766, 0.022038,
    0.46768, 0.022038,
    0.320828, 0.004159,
    0.363454, 0.004159,
    0.363454, 0.022038,
    0.320828, 0.022038,
    0.433955, 0.004159,
    0.448283, 0.004159,
    0.448283, 0.022038,
    0.433955, 0.022038,
    0.450195, 0.004159,
    0.462667, 0.004159,
    0.462667, 0.022038,
    0.450195, 0.022038,
    0.439799, 0.004159,
    0.460072, 0.004159,
    0.460072, 0.022038,
    0.439799, 0.022038,
    0.406153, 0.004159,
    0.425041, 0.004159,
    0.425041, 0.022038,
    0.406153, 0.022038,
    0.524327, 0.004159,
    0.51739, 0.004159,
    0.51739, 0.022038,
    0.524327, 0.022038,
    0.417391, 0.004159,
    0.441688, 0.004159,
    0.441688, 0.022038,
    0.417391, 0.022038,
    0.428621, 0.004159,
    0.413933, 0.004159,
    0.413933, 0.022038,
    0.428621, 0.022038,
    0.431639, 0.004159,
    0.419752, 0.004159,
    0.419752, 0.022038,
    0.431639, 0.022038,
    0.459853, 0.004159,
    0.428621, 0.004159,
    0.428621, 0.022038,
    0.459853, 0.022038,
    0.37858, 0.004159,
    0.408632, 0.004159,
    0.408632, 0.022038,
    0.37858, 0.022038,
    0.357336, 0.004159,
    0.320198, 0.004159,
    0.320198, 0.022038,
    0.357336, 0.022038,
    0.470149, 0.004159,
    0.44894, 0.004159,
    0.44894, 0.022038,
    0.470149, 0.022038,
    0.507499, 0.004159,
    0.46515, 0.004159,
    0.46515, 0.022038,
    0.507499, 0.022038,
    0.505605, 0.004159,
    0.470149, 0.004159,
    0.470149, 0.022038,
    0.505605, 0.022038,
    0.320198, 0.004159,
    0.299472, 0.004159,
    0.299472, 0.022038,
    0.320198, 0.022038,
    0.522742, 0.004159,
    0.505605, 0.004159,
    0.505605, 0.022038,
    0.522742, 0.022038,
    0.630158, 0.004159,
    0.619224, 0.004159,
    0.619224, 0.022038,
    0.630158, 0.022038,
    0.398022, 0.004159,
    0.395632, 0.004159,
    0.395632, 0.022038,
    0.398022, 0.022038,
    0.600851, 0.004159,
    0.679369, 0.004159,
    0.679369, 0.022038,
    0.600851, 0.022038,
    0.556898, 0.004159,
    0.534949, 0.004159,
    0.534949, 0.022038,
    0.556898, 0.022038,
    0.387173, 0.004159,
    0.405105, 0.004159,
    0.405105, 0.022038,
    0.387173, 0.022038,
    0.415199, 0.004159,
    0.384216, 0.004159,
    0.384216, 0.022038,
    0.415199, 0.022038
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    264, 263, 261,
    263, 262, 261,
    260, 259, 257,
    259, 258, 257,
    256, 255, 253,
    255, 254, 253,
    252, 251, 249,
    251, 250, 249,
    248, 247, 245,
    247, 246, 245,
    244, 243, 241,
    243, 242, 241,
    240, 239, 237,
    239, 238, 237,
    236, 235, 233,
    235, 234, 233,
    232, 231, 229,
    231, 230, 229,
    228, 227, 225,
    227, 226, 225,
    224, 223, 221,
    223, 222, 221,
    220, 219, 217,
    219, 218, 217,
    216, 215, 213,
    215, 214, 213,
    212, 211, 209,
    211, 210, 209,
    208, 207, 205,
    207, 206, 205,
    204, 203, 201,
    203, 202, 201,
    200, 199, 197,
    199, 198, 197,
    196, 195, 193,
    195, 194, 193,
    192, 191, 189,
    191, 190, 189,
    188, 187, 185,
    187, 186, 185,
    184, 183, 181,
    183, 182, 181,
    180, 179, 177,
    179, 178, 177,
    176, 175, 173,
    175, 174, 173,
    172, 171, 169,
    171, 170, 169,
    168, 167, 165,
    167, 166, 165,
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
    13, 12, 8,
    12, 11, 8,
    11, 10, 8,
    10, 9, 8,
    14, 13, 8,
    16, 15, 14,
    17, 16, 14,
    18, 17, 14,
    19, 18, 14,
    20, 19, 14,
    21, 20, 14,
    22, 21, 14,
    23, 22, 14,
    24, 23, 14,
    25, 24, 14,
    26, 25, 14,
    27, 26, 14,
    38, 37, 33,
    37, 36, 33,
    36, 35, 33,
    35, 34, 33,
    39, 38, 33,
    40, 39, 33,
    41, 40, 33,
    41, 33, 31,
    33, 32, 31,
    42, 41, 31,
    42, 31, 30,
    43, 42, 30,
    30, 28, 43,
    30, 29, 28,
    28, 27, 14,
    28, 44, 43,
    28, 14, 44,
    14, 8, 44,
    46, 45, 44,
    47, 46, 44,
    48, 47, 44,
    49, 48, 44,
    50, 49, 44,
    51, 50, 44,
    52, 51, 44,
    8, 0, 44,
    0, 52, 44,
    8, 7, 0,
    7, 6, 0,
    6, 5, 0,
    5, 4, 0,
    4, 3, 0,
    3, 2, 0,
    2, 1, 0
]);