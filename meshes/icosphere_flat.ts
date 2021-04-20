import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_icosphere_flat(gl: WebGLRenderingContext): Mesh {
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
    0, -0.5, 0,
    0.223605, -0.425327, 0.154506,
    -0.085408, -0.425327, 0.249998,
    0.380422, -0.22361, 0.262863,
    0.223605, -0.425327, 0.154506,
    0.447211, -0.262868, 0,
    0, -0.5, 0,
    -0.085408, -0.425327, 0.249998,
    -0.276392, -0.425326, 0,
    0, -0.5, 0,
    -0.276392, -0.425326, 0,
    -0.085408, -0.425327, -0.249998,
    0, -0.5, 0,
    -0.085408, -0.425327, -0.249998,
    0.223605, -0.425327, -0.154506,
    0.380422, -0.22361, 0.262863,
    0.447211, -0.262868, 0,
    0.5, 0, 0.154506,
    -0.145306, -0.22361, 0.425325,
    0.138198, -0.262869, 0.404506,
    0, 0, 0.5,
    -0.470227, -0.223608, 0,
    -0.361802, -0.262868, 0.249998,
    -0.5, 0, 0.154506,
    -0.145306, -0.22361, -0.425325,
    -0.361802, -0.262868, -0.249998,
    -0.309017, 0, -0.404508,
    0.380422, -0.22361, -0.262863,
    0.138198, -0.262869, -0.404506,
    0.309017, 0, -0.404508,
    0.380422, -0.22361, 0.262863,
    0.5, 0, 0.154506,
    0.309017, 0, 0.404508,
    -0.145306, -0.22361, 0.425325,
    0, 0, 0.5,
    -0.309017, 0, 0.404508,
    -0.470227, -0.223608, 0,
    -0.5, 0, 0.154506,
    -0.5, 0, -0.154506,
    -0.145306, -0.22361, -0.425325,
    -0.309017, 0, -0.404508,
    0, 0, -0.5,
    0.380422, -0.22361, -0.262863,
    0.309017, 0, -0.404508,
    0.5, 0, -0.154506,
    0.145306, 0.22361, 0.425325,
    0.361802, 0.262868, 0.249998,
    0.085408, 0.425327, 0.249998,
    -0.380422, 0.22361, 0.262863,
    -0.138198, 0.262869, 0.404506,
    -0.223605, 0.425327, 0.154506,
    -0.380422, 0.22361, -0.262863,
    -0.447211, 0.262868, 0,
    -0.223605, 0.425327, -0.154506,
    0.145306, 0.22361, -0.425325,
    -0.138198, 0.262869, -0.404506,
    0.085408, 0.425327, -0.249998,
    0.470227, 0.223608, 0,
    0.361802, 0.262868, -0.249998,
    0.276392, 0.425326, 0,
    0.276392, 0.425326, 0,
    0.085408, 0.425327, -0.249998,
    0, 0.5, 0,
    0.276392, 0.425326, 0,
    0.361802, 0.262868, -0.249998,
    0.085408, 0.425327, -0.249998,
    0.361802, 0.262868, -0.249998,
    0.145306, 0.22361, -0.425325,
    0.085408, 0.425327, -0.249998,
    0.085408, 0.425327, -0.249998,
    -0.223605, 0.425327, -0.154506,
    0, 0.5, 0,
    0.085408, 0.425327, -0.249998,
    -0.138198, 0.262869, -0.404506,
    -0.223605, 0.425327, -0.154506,
    -0.138198, 0.262869, -0.404506,
    -0.380422, 0.22361, -0.262863,
    -0.223605, 0.425327, -0.154506,
    -0.223605, 0.425327, -0.154506,
    -0.223605, 0.425327, 0.154506,
    0, 0.5, 0,
    -0.223605, 0.425327, -0.154506,
    -0.447211, 0.262868, 0,
    -0.223605, 0.425327, 0.154506,
    -0.447211, 0.262868, 0,
    -0.380422, 0.22361, 0.262863,
    -0.223605, 0.425327, 0.154506,
    -0.223605, 0.425327, 0.154506,
    0.085408, 0.425327, 0.249998,
    0, 0.5, 0,
    -0.223605, 0.425327, 0.154506,
    -0.138198, 0.262869, 0.404506,
    0.085408, 0.425327, 0.249998,
    -0.138198, 0.262869, 0.404506,
    0.145306, 0.22361, 0.425325,
    0.085408, 0.425327, 0.249998,
    0.085408, 0.425327, 0.249998,
    0.276392, 0.425326, 0,
    0, 0.5, 0,
    0.085408, 0.425327, 0.249998,
    0.361802, 0.262868, 0.249998,
    0.276392, 0.425326, 0,
    0.361802, 0.262868, 0.249998,
    0.470227, 0.223608, 0,
    0.276392, 0.425326, 0,
    0.5, 0, -0.154506,
    0.361802, 0.262868, -0.249998,
    0.470227, 0.223608, 0,
    0.5, 0, -0.154506,
    0.309017, 0, -0.404508,
    0.361802, 0.262868, -0.249998,
    0.309017, 0, -0.404508,
    0.145306, 0.22361, -0.425325,
    0.361802, 0.262868, -0.249998,
    0, 0, -0.5,
    -0.138198, 0.262869, -0.404506,
    0.145306, 0.22361, -0.425325,
    0, 0, -0.5,
    -0.309017, 0, -0.404508,
    -0.138198, 0.262869, -0.404506,
    -0.309017, 0, -0.404508,
    -0.380422, 0.22361, -0.262863,
    -0.138198, 0.262869, -0.404506,
    -0.5, 0, -0.154506,
    -0.447211, 0.262868, 0,
    -0.380422, 0.22361, -0.262863,
    -0.5, 0, -0.154506,
    -0.5, 0, 0.154506,
    -0.447211, 0.262868, 0,
    -0.5, 0, 0.154506,
    -0.380422, 0.22361, 0.262863,
    -0.447211, 0.262868, 0,
    -0.309017, 0, 0.404508,
    -0.138198, 0.262869, 0.404506,
    -0.380422, 0.22361, 0.262863,
    -0.309017, 0, 0.404508,
    0, 0, 0.5,
    -0.138198, 0.262869, 0.404506,
    0, 0, 0.5,
    0.145306, 0.22361, 0.425325,
    -0.138198, 0.262869, 0.404506,
    0.309017, 0, 0.404508,
    0.361802, 0.262868, 0.249998,
    0.145306, 0.22361, 0.425325,
    0.309017, 0, 0.404508,
    0.5, 0, 0.154506,
    0.361802, 0.262868, 0.249998,
    0.5, 0, 0.154506,
    0.470227, 0.223608, 0,
    0.361802, 0.262868, 0.249998,
    0.309017, 0, -0.404508,
    0, 0, -0.5,
    0.145306, 0.22361, -0.425325,
    0.309017, 0, -0.404508,
    0.138198, -0.262869, -0.404506,
    0, 0, -0.5,
    0.138198, -0.262869, -0.404506,
    -0.145306, -0.22361, -0.425325,
    0, 0, -0.5,
    -0.309017, 0, -0.404508,
    -0.5, 0, -0.154506,
    -0.380422, 0.22361, -0.262863,
    -0.309017, 0, -0.404508,
    -0.361802, -0.262868, -0.249998,
    -0.5, 0, -0.154506,
    -0.361802, -0.262868, -0.249998,
    -0.470227, -0.223608, 0,
    -0.5, 0, -0.154506,
    -0.5, 0, 0.154506,
    -0.309017, 0, 0.404508,
    -0.380422, 0.22361, 0.262863,
    -0.5, 0, 0.154506,
    -0.361802, -0.262868, 0.249998,
    -0.309017, 0, 0.404508,
    -0.361802, -0.262868, 0.249998,
    -0.145306, -0.22361, 0.425325,
    -0.309017, 0, 0.404508,
    0, 0, 0.5,
    0.309017, 0, 0.404508,
    0.145306, 0.22361, 0.425325,
    0, 0, 0.5,
    0.138198, -0.262869, 0.404506,
    0.309017, 0, 0.404508,
    0.138198, -0.262869, 0.404506,
    0.380422, -0.22361, 0.262863,
    0.309017, 0, 0.404508,
    0.5, 0, 0.154506,
    0.5, 0, -0.154506,
    0.470227, 0.223608, 0,
    0.5, 0, 0.154506,
    0.447211, -0.262868, 0,
    0.5, 0, -0.154506,
    0.447211, -0.262868, 0,
    0.380422, -0.22361, -0.262863,
    0.5, 0, -0.154506,
    0.223605, -0.425327, -0.154506,
    0.138198, -0.262869, -0.404506,
    0.380422, -0.22361, -0.262863,
    0.223605, -0.425327, -0.154506,
    -0.085408, -0.425327, -0.249998,
    0.138198, -0.262869, -0.404506,
    -0.085408, -0.425327, -0.249998,
    -0.145306, -0.22361, -0.425325,
    0.138198, -0.262869, -0.404506,
    -0.085408, -0.425327, -0.249998,
    -0.361802, -0.262868, -0.249998,
    -0.145306, -0.22361, -0.425325,
    -0.085408, -0.425327, -0.249998,
    -0.276392, -0.425326, 0,
    -0.361802, -0.262868, -0.249998,
    -0.276392, -0.425326, 0,
    -0.470227, -0.223608, 0,
    -0.361802, -0.262868, -0.249998,
    -0.276392, -0.425326, 0,
    -0.361802, -0.262868, 0.249998,
    -0.470227, -0.223608, 0,
    -0.276392, -0.425326, 0,
    -0.085408, -0.425327, 0.249998,
    -0.361802, -0.262868, 0.249998,
    -0.085408, -0.425327, 0.249998,
    -0.145306, -0.22361, 0.425325,
    -0.361802, -0.262868, 0.249998,
    0.447211, -0.262868, 0,
    0.223605, -0.425327, -0.154506,
    0.380422, -0.22361, -0.262863,
    0.447211, -0.262868, 0,
    0.223605, -0.425327, 0.154506,
    0.223605, -0.425327, -0.154506,
    0.223605, -0.425327, 0.154506,
    0, -0.5, 0,
    0.223605, -0.425327, -0.154506,
    -0.085408, -0.425327, 0.249998,
    0.138198, -0.262869, 0.404506,
    -0.145306, -0.22361, 0.425325,
    -0.085408, -0.425327, 0.249998,
    0.223605, -0.425327, 0.154506,
    0.138198, -0.262869, 0.404506,
    0.223605, -0.425327, 0.154506,
    0.380422, -0.22361, 0.262863,
    0.138198, -0.262869, 0.404506
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    0.0974, -0.944, 0.3152,
    0.0974, -0.944, 0.3152,
    0.0974, -0.944, 0.3152,
    0.6821, -0.6778, 0.2745,
    0.6821, -0.6778, 0.2745,
    0.6821, -0.6778, 0.2745,
    -0.2558, -0.9468, 0.1954,
    -0.2558, -0.9468, 0.1954,
    -0.2558, -0.9468, 0.1954,
    -0.2558, -0.9468, -0.1954,
    -0.2558, -0.9468, -0.1954,
    -0.2558, -0.9468, -0.1954,
    0.0974, -0.944, -0.3152,
    0.0974, -0.944, -0.3152,
    0.0974, -0.944, -0.3152,
    0.8965, -0.3441, 0.2792,
    0.8965, -0.3441, 0.2792,
    0.8965, -0.3441, 0.2792,
    0.0235, -0.3304, 0.9435,
    0.0235, -0.3304, 0.9435,
    0.0235, -0.3304, 0.9435,
    -0.8801, -0.3436, 0.3277,
    -0.8801, -0.3436, 0.3277,
    -0.8801, -0.3436, 0.3277,
    -0.5553, -0.3357, -0.7609,
    -0.5553, -0.3357, -0.7609,
    -0.5553, -0.3357, -0.7609,
    0.5155, -0.335, -0.7887,
    0.5155, -0.335, -0.7887,
    0.5155, -0.335, -0.7887,
    0.7879, -0.1297, 0.6019,
    0.7879, -0.1297, 0.6019,
    0.7879, -0.1297, 0.6019,
    -0.2929, -0.1262, 0.9478,
    -0.2929, -0.1262, 0.9478,
    -0.2929, -0.1262, 0.9478,
    -0.9913, -0.132, 0,
    -0.9913, -0.132, 0,
    -0.9913, -0.132, 0,
    -0.2929, -0.1262, -0.9478,
    -0.2929, -0.1262, -0.9478,
    -0.2929, -0.1262, -0.9478,
    0.7879, -0.1297, -0.6019,
    0.7879, -0.1297, -0.6019,
    0.7879, -0.1297, -0.6019,
    0.3921, 0.667, 0.6335,
    0.3921, 0.667, 0.6335,
    0.3921, 0.667, 0.6335,
    -0.4531, 0.6688, 0.5894,
    -0.4531, 0.6688, 0.5894,
    -0.4531, 0.6688, 0.5894,
    -0.6821, 0.6778, -0.2745,
    -0.6821, 0.6778, -0.2745,
    -0.6821, 0.6778, -0.2745,
    0.0366, 0.6617, -0.7488,
    0.0366, 0.6617, -0.7488,
    0.0366, 0.6617, -0.7488,
    0.7065, 0.6789, -0.1998,
    0.7065, 0.6789, -0.1998,
    0.7065, 0.6789, -0.1998,
    0.2558, 0.9468, -0.1954,
    0.2558, 0.9468, -0.1954,
    0.2558, 0.9468, -0.1954,
    0.4726, 0.804, -0.361,
    0.4726, 0.804, -0.361,
    0.4726, 0.804, -0.361,
    0.3921, 0.667, -0.6335,
    0.3921, 0.667, -0.6335,
    0.3921, 0.667, -0.6335,
    -0.0974, 0.944, -0.3152,
    -0.0974, 0.944, -0.3152,
    -0.0974, 0.944, -0.3152,
    -0.1787, 0.796, -0.5783,
    -0.1787, 0.796, -0.5783,
    -0.1787, 0.796, -0.5783,
    -0.4531, 0.6688, -0.5894,
    -0.4531, 0.6688, -0.5894,
    -0.4531, 0.6688, -0.5894,
    -0.3168, 0.9485, 0,
    -0.3168, 0.9485, 0,
    -0.3168, 0.9485, 0,
    -0.5878, 0.809, 0,
    -0.5878, 0.809, 0,
    -0.5878, 0.809, 0,
    -0.6821, 0.6778, 0.2745,
    -0.6821, 0.6778, 0.2745,
    -0.6821, 0.6778, 0.2745,
    -0.0974, 0.944, 0.3152,
    -0.0974, 0.944, 0.3152,
    -0.0974, 0.944, 0.3152,
    -0.1787, 0.796, 0.5783,
    -0.1787, 0.796, 0.5783,
    -0.1787, 0.796, 0.5783,
    0.0366, 0.6617, 0.7488,
    0.0366, 0.6617, 0.7488,
    0.0366, 0.6617, 0.7488,
    0.2558, 0.9468, 0.1954,
    0.2558, 0.9468, 0.1954,
    0.2558, 0.9468, 0.1954,
    0.4726, 0.804, 0.361,
    0.4726, 0.804, 0.361,
    0.4726, 0.804, 0.361,
    0.7065, 0.6789, 0.1998,
    0.7065, 0.6789, 0.1998,
    0.7065, 0.6789, 0.1998,
    0.8801, 0.3436, -0.3277,
    0.8801, 0.3436, -0.3277,
    0.8801, 0.3436, -0.3277,
    0.7796, 0.1935, -0.5956,
    0.7796, 0.1935, -0.5956,
    0.7796, 0.1935, -0.5956,
    0.5553, 0.3357, -0.7609,
    0.5553, 0.3357, -0.7609,
    0.5553, 0.3357, -0.7609,
    -0.0235, 0.3304, -0.9435,
    -0.0235, 0.3304, -0.9435,
    -0.0235, 0.3304, -0.9435,
    -0.29, 0.1884, -0.9383,
    -0.29, 0.1884, -0.9383,
    -0.29, 0.1884, -0.9383,
    -0.5155, 0.335, -0.7887,
    -0.5155, 0.335, -0.7887,
    -0.5155, 0.335, -0.7887,
    -0.8965, 0.3441, -0.2792,
    -0.8965, 0.3441, -0.2792,
    -0.8965, 0.3441, -0.2792,
    -0.9804, 0.1969, 0,
    -0.9804, 0.1969, 0,
    -0.9804, 0.1969, 0,
    -0.8965, 0.3441, 0.2792,
    -0.8965, 0.3441, 0.2792,
    -0.8965, 0.3441, 0.2792,
    -0.5155, 0.335, 0.7887,
    -0.5155, 0.335, 0.7887,
    -0.5155, 0.335, 0.7887,
    -0.29, 0.1884, 0.9383,
    -0.29, 0.1884, 0.9383,
    -0.29, 0.1884, 0.9383,
    -0.0235, 0.3304, 0.9435,
    -0.0235, 0.3304, 0.9435,
    -0.0235, 0.3304, 0.9435,
    0.5553, 0.3357, 0.7609,
    0.5553, 0.3357, 0.7609,
    0.5553, 0.3357, 0.7609,
    0.7796, 0.1935, 0.5956,
    0.7796, 0.1935, 0.5956,
    0.7796, 0.1935, 0.5956,
    0.8801, 0.3436, 0.3277,
    0.8801, 0.3436, 0.3277,
    0.8801, 0.3436, 0.3277,
    0.2929, 0.1262, -0.9478,
    0.2929, 0.1262, -0.9478,
    0.2929, 0.1262, -0.9478,
    0.29, -0.1884, -0.9383,
    0.29, -0.1884, -0.9383,
    0.29, -0.1884, -0.9383,
    0.0235, -0.3304, -0.9435,
    0.0235, -0.3304, -0.9435,
    0.0235, -0.3304, -0.9435,
    -0.7879, 0.1297, -0.6019,
    -0.7879, 0.1297, -0.6019,
    -0.7879, 0.1297, -0.6019,
    -0.7796, -0.1935, -0.5956,
    -0.7796, -0.1935, -0.5956,
    -0.7796, -0.1935, -0.5956,
    -0.8801, -0.3436, -0.3277,
    -0.8801, -0.3436, -0.3277,
    -0.8801, -0.3436, -0.3277,
    -0.7879, 0.1297, 0.6019,
    -0.7879, 0.1297, 0.6019,
    -0.7879, 0.1297, 0.6019,
    -0.7796, -0.1935, 0.5956,
    -0.7796, -0.1935, 0.5956,
    -0.7796, -0.1935, 0.5956,
    -0.5553, -0.3357, 0.7609,
    -0.5553, -0.3357, 0.7609,
    -0.5553, -0.3357, 0.7609,
    0.2929, 0.1262, 0.9478,
    0.2929, 0.1262, 0.9478,
    0.2929, 0.1262, 0.9478,
    0.29, -0.1884, 0.9383,
    0.29, -0.1884, 0.9383,
    0.29, -0.1884, 0.9383,
    0.5155, -0.335, 0.7887,
    0.5155, -0.335, 0.7887,
    0.5155, -0.335, 0.7887,
    0.9913, 0.132, 0,
    0.9913, 0.132, 0,
    0.9913, 0.132, 0,
    0.9804, -0.1969, 0,
    0.9804, -0.1969, 0,
    0.9804, -0.1969, 0,
    0.8965, -0.3441, -0.2792,
    0.8965, -0.3441, -0.2792,
    0.8965, -0.3441, -0.2792,
    0.4531, -0.6688, -0.5894,
    0.4531, -0.6688, -0.5894,
    0.4531, -0.6688, -0.5894,
    0.1787, -0.796, -0.5783,
    0.1787, -0.796, -0.5783,
    0.1787, -0.796, -0.5783,
    -0.0366, -0.6617, -0.7488,
    -0.0366, -0.6617, -0.7488,
    -0.0366, -0.6617, -0.7488,
    -0.3921, -0.667, -0.6335,
    -0.3921, -0.667, -0.6335,
    -0.3921, -0.667, -0.6335,
    -0.4726, -0.804, -0.361,
    -0.4726, -0.804, -0.361,
    -0.4726, -0.804, -0.361,
    -0.7065, -0.6789, -0.1998,
    -0.7065, -0.6789, -0.1998,
    -0.7065, -0.6789, -0.1998,
    -0.7065, -0.6789, 0.1998,
    -0.7065, -0.6789, 0.1998,
    -0.7065, -0.6789, 0.1998,
    -0.4726, -0.804, 0.361,
    -0.4726, -0.804, 0.361,
    -0.4726, -0.804, 0.361,
    -0.3921, -0.667, 0.6335,
    -0.3921, -0.667, 0.6335,
    -0.3921, -0.667, 0.6335,
    0.6821, -0.6778, -0.2745,
    0.6821, -0.6778, -0.2745,
    0.6821, -0.6778, -0.2745,
    0.5878, -0.809, 0,
    0.5878, -0.809, 0,
    0.5878, -0.809, 0,
    0.3168, -0.9485, 0,
    0.3168, -0.9485, 0,
    0.3168, -0.9485, 0,
    -0.0366, -0.6617, 0.7488,
    -0.0366, -0.6617, 0.7488,
    -0.0366, -0.6617, 0.7488,
    0.1787, -0.796, 0.5783,
    0.1787, -0.796, 0.5783,
    0.1787, -0.796, 0.5783,
    0.4531, -0.6688, 0.5894,
    0.4531, -0.6688, 0.5894,
    0.4531, -0.6688, 0.5894
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([]);

// prettier-ignore
let index_arr = Uint16Array.from([
    239, 238, 237,
    236, 235, 234,
    233, 232, 231,
    230, 229, 228,
    227, 226, 225,
    224, 223, 222,
    221, 220, 219,
    218, 217, 216,
    215, 214, 213,
    212, 211, 210,
    209, 208, 207,
    206, 205, 204,
    203, 202, 201,
    200, 199, 198,
    197, 196, 195,
    194, 193, 192,
    191, 190, 189,
    188, 187, 186,
    185, 184, 183,
    182, 181, 180,
    179, 178, 177,
    176, 175, 174,
    173, 172, 171,
    170, 169, 168,
    167, 166, 165,
    164, 163, 162,
    161, 160, 159,
    158, 157, 156,
    155, 154, 153,
    152, 151, 150,
    149, 148, 147,
    146, 145, 144,
    143, 142, 141,
    140, 139, 138,
    137, 136, 135,
    134, 133, 132,
    131, 130, 129,
    128, 127, 126,
    125, 124, 123,
    122, 121, 120,
    119, 118, 117,
    116, 115, 114,
    113, 112, 111,
    110, 109, 108,
    107, 106, 105,
    104, 103, 102,
    101, 100, 99,
    98, 97, 96,
    95, 94, 93,
    92, 91, 90,
    89, 88, 87,
    86, 85, 84,
    83, 82, 81,
    80, 79, 78,
    77, 76, 75,
    74, 73, 72,
    71, 70, 69,
    68, 67, 66,
    65, 64, 63,
    62, 61, 60,
    59, 58, 57,
    56, 55, 54,
    53, 52, 51,
    50, 49, 48,
    47, 46, 45,
    44, 43, 42,
    41, 40, 39,
    38, 37, 36,
    35, 34, 33,
    32, 31, 30,
    29, 28, 27,
    26, 25, 24,
    23, 22, 21,
    20, 19, 18,
    17, 16, 15,
    14, 13, 12,
    11, 10, 9,
    8, 7, 6,
    5, 4, 3,
    2, 1, 0
]);
