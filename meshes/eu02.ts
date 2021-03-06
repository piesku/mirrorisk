import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_eu02(gl: WebGLRenderingContext): Mesh {
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
    18.0175, 0.999796, -61.5066,
    19.5436, 0.999796, -65.3436,
    16.1339, 0.999796, -64.8714,
    11.5823, 0.999796, -65.2106,
    10.4379, 0.999796, -63.0907,
    14.6072, 0.999796, -60.7801,
    14.6072, -0.000204, -60.7801,
    18.0175, -0.000204, -61.5066,
    18.0175, 0.999796, -61.5066,
    14.6072, 0.999796, -60.7801,
    18.0175, -0.000204, -61.5066,
    19.5436, -0.000204, -65.3436,
    19.5436, 0.999796, -65.3436,
    18.0175, 0.999796, -61.5066,
    11.5823, -0.000204, -65.2106,
    10.4379, -0.000204, -63.0907,
    10.4379, 0.999796, -63.0907,
    11.5823, 0.999796, -65.2106,
    10.4379, 0.999796, -63.0907,
    10.4379, -0.000204, -63.0907,
    14.6072, -0.000204, -60.7801,
    14.6072, 0.999796, -60.7801,
    19.5436, -0.000204, -65.3436,
    16.1339, -0.000204, -64.8714,
    16.1339, 0.999796, -64.8714,
    19.5436, 0.999796, -65.3436,
    16.1339, -0.000204, -64.8714,
    11.5823, -0.000204, -65.2106,
    11.5823, 0.999796, -65.2106,
    16.1339, 0.999796, -64.8714
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0.2084, 0, 0.978,
    0.2084, 0, 0.978,
    0.2084, 0, 0.978,
    0.2084, 0, 0.978,
    0.9292, 0, 0.3696,
    0.9292, 0, 0.3696,
    0.9292, 0, 0.3696,
    0.9292, 0, 0.3696,
    -0.88, 0, -0.4751,
    -0.88, 0, -0.4751,
    -0.88, 0, -0.4751,
    -0.88, 0, -0.4751,
    -0.4847, 0, 0.8747,
    -0.4847, 0, 0.8747,
    -0.4847, 0, 0.8747,
    -0.4847, 0, 0.8747,
    -0.1372, 0, -0.9905,
    -0.1372, 0, -0.9905,
    -0.1372, 0, -0.9905,
    -0.1372, 0, -0.9905,
    0.0743, 0, -0.9972,
    0.0743, 0, -0.9972,
    0.0743, 0, -0.9972,
    0.0743, 0, -0.9972
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.701605, 0.809442,
    0.715088, 0.843344,
    0.684962, 0.839172,
    0.644746, 0.842168,
    0.634634, 0.823438,
    0.671473, 0.803023,
    0.49184, 0.007761,
    0.569892, 0.007761,
    0.569892, 0.030649,
    0.49184, 0.030649,
    0.465023, 0.007761,
    0.552841, 0.007761,
    0.552841, 0.030649,
    0.465023, 0.030649,
    0.549796, 0.007761,
    0.501277, 0.007761,
    0.501277, 0.030649,
    0.549796, 0.030649,
    0.396415, 0.030649,
    0.396415, 0.007761,
    0.49184, 0.007761,
    0.49184, 0.030649,
    0.60482, 0.007761,
    0.526782, 0.007761,
    0.526782, 0.030649,
    0.60482, 0.030649,
    0.526782, 0.007761,
    0.422608, 0.007761,
    0.422608, 0.030649,
    0.526782, 0.030649
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    29, 28, 26,
    28, 27, 26,
    25, 24, 22,
    24, 23, 22,
    21, 20, 18,
    20, 19, 18,
    17, 16, 14,
    16, 15, 14,
    13, 12, 10,
    12, 11, 10,
    9, 8, 6,
    8, 7, 6,
    5, 4, 3,
    3, 2, 5,
    2, 1, 5,
    1, 0, 5
]);
