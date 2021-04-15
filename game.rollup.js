(function () {
    'use strict';

    // The following defined constants and descriptions are directly ported from
    // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants.
    // Any copyright is dedicated to the Public Domain.
    // http://creativecommons.org/publicdomain/zero/1.0/.
    // Contributors
    // https://developer.mozilla.org/en-US/profiles/Sheppy
    // https://developer.mozilla.org/en-US/profiles/fscholz
    // https://developer.mozilla.org/en-US/profiles/AtiX
    // https://developer.mozilla.org/en-US/profiles/Sebastianz
    // WebGLRenderingContext
    // ==============
    // Clearing buffers
    // Constants passed to WebGLRenderingContext.clear() to clear buffer masks.
    /**
     * Passed to clear to clear the current depth buffer.
     * @constant {number}
     */
    const GL_DEPTH_BUFFER_BIT = 0x00000100;
    /**
     * Passed to clear to clear the current color buffer.
     * @constant {number}
     */
    const GL_COLOR_BUFFER_BIT = 0x00004000;
    /**
     * Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.
     * @constant {number}
     */
    const GL_LINE_STRIP = 0x0003;
    /**
     * Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.
     * @constant {number}
     */
    const GL_TRIANGLES = 0x0004;
    // Buffers
    // Constants passed to WebGLRenderingContext.bufferData(), WebGLRenderingContext.bufferSubData(), WebGLRenderingContext.bindBuffer(), or WebGLRenderingContext.getBufferParameter().
    /**
     * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.
     * @constant {number}
     */
    const GL_STATIC_DRAW = 0x88e4;
    /**
     * Passed to bindBuffer or bufferData to specify the type of buffer being used.
     * @constant {number}
     */
    const GL_ARRAY_BUFFER = 0x8892;
    /**
     * Passed to bindBuffer or bufferData to specify the type of buffer being used.
     * @constant {number}
     */
    const GL_ELEMENT_ARRAY_BUFFER = 0x8893;
    // Culling
    // Constants passed to WebGLRenderingContext.cullFace().
    /**
     * Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.
     * @constant {number}
     */
    const GL_CULL_FACE = 0x0b44;
    /**
     * Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.
     * @constant {number}
     */
    const GL_DEPTH_TEST = 0x0b71;
    // Front face directions
    // Constants passed to WebGLRenderingContext.frontFace().
    /**
     * Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction,
     * @constant {number}
     */
    const GL_CW = 0x0900;
    // Shaders
    // Constants passed to WebGLRenderingContext.getShaderParameter().
    /**
     * Passed to createShader to define a fragment shader.
     * @constant {number}
     */
    const GL_FRAGMENT_SHADER = 0x8b30;
    /**
     * Passed to createShader to define a vertex shader.
     * @constant {number}
     */
    const GL_VERTEX_SHADER = 0x8b31;
    /**
     * Passed to getShaderParamter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error.
     * @constant {number}
     */
    const GL_COMPILE_STATUS = 0x8b81;
    /**
     * Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.
     * @constant {number}
     */
    const GL_LINK_STATUS = 0x8b82;
    /**
     * @constant {number}
     */
    const GL_TEXTURE_2D = 0x0de1;
    /**
     * A texture unit.
     * @constant {number}
     */
    const GL_TEXTURE0 = 0x84c0;
    // Framebuffers and renderbuffers
    /**
     * @constant {number}
     */
    const GL_FRAMEBUFFER = 0x8d40;
    // WebGL2RenderingContext
    // ==============
    const GL_UNSIGNED_SHORT = 0x1403;
    const GL_FLOAT = 0x1406;

    function mesh_eu01(gl) {
        let vertex_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
        gl.bufferData(GL_ARRAY_BUFFER, vertex_arr$8, GL_STATIC_DRAW);
        let normal_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
        gl.bufferData(GL_ARRAY_BUFFER, normal_arr$8, GL_STATIC_DRAW);
        let texcoord_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
        gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr$8, GL_STATIC_DRAW);
        let index_buf = gl.createBuffer();
        gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
        gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr$8, GL_STATIC_DRAW);
        return {
            VertexBuffer: vertex_buf,
            VertexArray: vertex_arr$8,
            NormalBuffer: normal_buf,
            TexCoordBuffer: texcoord_buf,
            IndexBuffer: index_buf,
            IndexArray: index_arr$8,
            IndexCount: index_arr$8.length,
        };
    }
    // prettier-ignore
    let vertex_arr$8 = Float32Array.from([
        -1.47115, 0, -53.6676,
        1.38644, 0, -54.1731,
        -0.610337, 0, -55.5448,
        -1.33926, 0, -51.4255,
        -2.10507, 0, -54.6435,
        -4.17133, 0, -50.4539,
        -4.03944, 0, -52.8542,
        -7.8642, 0, -52.0629,
        -7.77628, 0, -50.0274,
        -2.26334, 0, -48.5239,
        -4.62414, 0, -56.468,
        -2.51393, 0, -56.1778,
        -3.30526, 0, -58.9739,
        -5.01981, 0, -59.0002,
        -2.01275, 0, -58.9475,
        -2.61944, 0, -60.4774,
        -4.01746, 0, -60.4774,
        1.71616, 0, -50.7221,
        -2.16662, 0, -50.9814
    ]);
    // prettier-ignore
    let normal_arr$8 = Float32Array.from([
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ]);
    // prettier-ignore
    let texcoord_arr$8 = Float32Array.from([]);
    // prettier-ignore
    let index_arr$8 = Uint16Array.from([
        16, 15, 12,
        15, 14, 12,
        14, 11, 12,
        13, 12, 10,
        12, 11, 10,
        11, 6, 10,
        10, 6, 7,
        8, 7, 5,
        6, 18, 5,
        9, 8, 5,
        7, 6, 5,
        1, 17, 3,
        4, 2, 0,
        0, 1, 3,
        2, 1, 0
    ]);

    function mesh_eu02(gl) {
        let vertex_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
        gl.bufferData(GL_ARRAY_BUFFER, vertex_arr$7, GL_STATIC_DRAW);
        let normal_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
        gl.bufferData(GL_ARRAY_BUFFER, normal_arr$7, GL_STATIC_DRAW);
        let texcoord_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
        gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr$7, GL_STATIC_DRAW);
        let index_buf = gl.createBuffer();
        gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
        gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr$7, GL_STATIC_DRAW);
        return {
            VertexBuffer: vertex_buf,
            VertexArray: vertex_arr$7,
            NormalBuffer: normal_buf,
            TexCoordBuffer: texcoord_buf,
            IndexBuffer: index_buf,
            IndexArray: index_arr$7,
            IndexCount: index_arr$7.length,
        };
    }
    // prettier-ignore
    let vertex_arr$7 = Float32Array.from([
        9.89414, 0, -73.4668,
        8.41699, 0, -68.3759,
        11.7168, 0, -69.28,
        4.3812, 0, -71.2511,
        5.48907, 0, -73.8889,
        13.194, 0, -74.0544
    ]);
    // prettier-ignore
    let normal_arr$7 = Float32Array.from([
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ]);
    // prettier-ignore
    let texcoord_arr$7 = Float32Array.from([]);
    // prettier-ignore
    let index_arr$7 = Uint16Array.from([
        0, 1, 3,
        5, 2, 0,
        4, 0, 3,
        2, 1, 0
    ]);

    function mesh_eu03(gl) {
        let vertex_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
        gl.bufferData(GL_ARRAY_BUFFER, vertex_arr$6, GL_STATIC_DRAW);
        let normal_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
        gl.bufferData(GL_ARRAY_BUFFER, normal_arr$6, GL_STATIC_DRAW);
        let texcoord_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
        gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr$6, GL_STATIC_DRAW);
        let index_buf = gl.createBuffer();
        gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
        gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr$6, GL_STATIC_DRAW);
        return {
            VertexBuffer: vertex_buf,
            VertexArray: vertex_arr$6,
            NormalBuffer: normal_buf,
            TexCoordBuffer: texcoord_buf,
            IndexBuffer: index_buf,
            IndexArray: index_arr$6,
            IndexCount: index_arr$6.length,
        };
    }
    // prettier-ignore
    let vertex_arr$6 = Float32Array.from([
        -16.6992, 0, -54.4468,
        -13.2069, 0, -53.6256,
        -13.2945, 0, -57.5705,
        -18.012, 0, -53.7302,
        -21.041, 0, -55.0091,
        -22.6473, 0, -54.3134,
        -12.6538, 0, -46.8716,
        -10.4207, 0, -52.479,
        -13.2069, 0, -53.6256,
        -16.6992, 0, -54.4468,
        -13.2945, 0, -57.5705,
        -14.7001, 0, -58.1015,
        -25.1866, 0, -46.1534,
        -20.1125, 0, -46.8516,
        -22.6473, 0, -54.3134,
        -8.64182, 0, -49.4922,
        -13.2069, 0, -53.6256,
        -18.012, 0, -53.7302,
        -12.6538, 0, -46.8716,
        -18.012, 0, -53.7302,
        -14.2794, 0, -45.525,
        -12.6538, 0, -46.8716,
        -23.0125, 0, -43.8609,
        -19.9007, 0, -44.253,
        -25.1866, 0, -46.1534,
        -18.012, 0, -53.7302,
        -13.2069, 0, -53.6256,
        -16.6992, 0, -54.4468,
        -17.6809, 0, -46.8639,
        -14.2794, 0, -45.525,
        -25.1866, 0, -46.1534,
        -22.6473, 0, -54.3134,
        -25.4827, 0, -54.0382,
        -22.6473, 0, -54.3134,
        -20.1125, 0, -46.8516,
        -19.9007, 0, -44.253,
        -20.1125, 0, -46.8516,
        -25.1866, 0, -46.1534,
        -20.1125, 0, -46.8516,
        -17.6809, 0, -46.8639
    ]);
    // prettier-ignore
    let normal_arr$6 = Float32Array.from([
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ]);
    // prettier-ignore
    let texcoord_arr$6 = Float32Array.from([
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0.53966, 1,
        1, 1,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 1,
        1, 1,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        1, 1,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0
    ]);
    // prettier-ignore
    let index_arr$6 = Uint16Array.from([
        37, 36, 35,
        32, 31, 30,
        27, 26, 25,
        24, 23, 22,
        39, 38, 19,
        19, 34, 33,
        21, 20, 19,
        17, 29, 28,
        18, 17, 16,
        14, 13, 12,
        11, 10, 9,
        7, 15, 6,
        8, 7, 6,
        5, 4, 3,
        2, 1, 0
    ]);

    function mesh_eu04(gl) {
        let vertex_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
        gl.bufferData(GL_ARRAY_BUFFER, vertex_arr$5, GL_STATIC_DRAW);
        let normal_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
        gl.bufferData(GL_ARRAY_BUFFER, normal_arr$5, GL_STATIC_DRAW);
        let texcoord_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
        gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr$5, GL_STATIC_DRAW);
        let index_buf = gl.createBuffer();
        gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
        gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr$5, GL_STATIC_DRAW);
        return {
            VertexBuffer: vertex_buf,
            VertexArray: vertex_arr$5,
            NormalBuffer: normal_buf,
            TexCoordBuffer: texcoord_buf,
            IndexBuffer: index_buf,
            IndexArray: index_arr$5,
            IndexCount: index_arr$5.length,
        };
    }
    // prettier-ignore
    let vertex_arr$5 = Float32Array.from([
        -29.9061, 0, -74.9682,
        -24.6945, 0, -73.1551,
        -32.1949, 0, -81.7257,
        -31.0277, 0, -70.1862,
        -27.1012, 0, -71.2954,
        -22.3425, 0, -81.6878,
        -28.1404, 0, -84.4227,
        -29.2854, 0, -63.7444,
        -23.8194, 0, -67.0838,
        -24.6398, 0, -62.3799,
        -20.4829, 0, -66.3727,
        -14.4115, 0, -68.8341,
        -15.6148, 0, -61.1765,
        -10.1999, 0, -65.7711,
        -11.9502, 0, -59.5903,
        -19.9906, 0, -58.4964,
        -17.8574, 0, -55.7069,
        -21.7956, 0, -61.8329
    ]);
    // prettier-ignore
    let normal_arr$5 = Float32Array.from([
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ]);
    // prettier-ignore
    let texcoord_arr$5 = Float32Array.from([]);
    // prettier-ignore
    let index_arr$5 = Uint16Array.from([
        8, 9, 7,
        7, 3, 4,
        4, 8, 7,
        12, 16, 15,
        13, 14, 12,
        15, 17, 10,
        12, 15, 10,
        11, 13, 12,
        11, 12, 10,
        6, 5, 2,
        11, 1, 5,
        11, 10, 1,
        2, 5, 1,
        4, 0, 1,
        4, 3, 0,
        2, 1, 0
    ]);

    function mesh_eu05(gl) {
        let vertex_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
        gl.bufferData(GL_ARRAY_BUFFER, vertex_arr$4, GL_STATIC_DRAW);
        let normal_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
        gl.bufferData(GL_ARRAY_BUFFER, normal_arr$4, GL_STATIC_DRAW);
        let texcoord_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
        gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr$4, GL_STATIC_DRAW);
        let index_buf = gl.createBuffer();
        gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
        gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr$4, GL_STATIC_DRAW);
        return {
            VertexBuffer: vertex_buf,
            VertexArray: vertex_arr$4,
            NormalBuffer: normal_buf,
            TexCoordBuffer: texcoord_buf,
            IndexBuffer: index_buf,
            IndexArray: index_arr$4,
            IndexCount: index_arr$4.length,
        };
    }
    // prettier-ignore
    let vertex_arr$4 = Float32Array.from([
        -21.2942, 0, -39.8211,
        -29.578, 0, -40.9574,
        -24.8926, 0, -37.6256,
        -14.1478, 0, -41.765,
        -18.3322, 0, -39.3635,
        -17.5663, 0, -38.1216,
        -11.7639, 0, -41.0903,
        -11.449, 0, -44.1489,
        -16.5776, 0, -42.8605,
        -14.2794, 0, -45.525,
        -17.6536, 0, -43.2642,
        -20.1868, 0, -37.5912,
        -12.6538, 0, -46.8716,
        -28.2765, 0, -37.6516,
        -23.3048, 0, -35.9857,
        -25.1477, 0, -35.1579,
        -26.2982, 0, -34.9965,
        -25.1009, 0, -33.1744,
        -23.8931, 0, -33.872,
        -20.53, 0, -38.0681,
        -21.4306, 0, -37.3236,
        -21.3213, 0, -36.6989,
        -19.4367, 0, -36.7353,
        -20.3113, 0, -35.9232,
        -19.4055, 0, -34.9549,
        -23.7161, 0, -34.9549,
        -17.6809, 0, -46.8639,
        -20.1125, 0, -46.8516,
        -25.1866, 0, -46.1534,
        -32.2991, 0, -44.6774,
        -16.9289, 0, -35.0662,
        -18.7773, 0, -35.0867,
        -18.6893, 0, -33.592,
        -14.401, 0, -36.8027,
        -13.5217, 0, -35.9674,
        -13.1587, 0, -37.8742,
        -16.5332, 0, -34.7804,
        -14.0599, 0, -38.3139,
        -23.0125, 0, -43.8609,
        -19.9007, 0, -44.253
    ]);
    // prettier-ignore
    let normal_arr$4 = Float32Array.from([
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ]);
    // prettier-ignore
    let texcoord_arr$4 = Float32Array.from([]);
    // prettier-ignore
    let index_arr$4 = Uint16Array.from([
        37, 35, 33,
        35, 34, 33,
        36, 32, 30,
        32, 31, 30,
        22, 24, 23,
        22, 23, 11,
        11, 21, 20,
        11, 20, 19,
        5, 22, 11,
        11, 19, 4,
        5, 11, 4,
        3, 4, 8,
        3, 7, 6,
        5, 4, 3,
        12, 7, 9,
        7, 3, 9,
        8, 10, 9,
        8, 9, 3,
        26, 9, 10,
        10, 27, 26,
        39, 27, 10,
        15, 25, 18,
        15, 18, 17,
        15, 17, 16,
        15, 16, 2,
        14, 15, 2,
        38, 1, 28,
        1, 29, 28,
        2, 13, 1,
        38, 39, 0,
        0, 39, 10,
        0, 1, 38,
        0, 14, 2,
        2, 1, 0
    ]);

    function mesh_eu06(gl) {
        let vertex_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
        gl.bufferData(GL_ARRAY_BUFFER, vertex_arr$3, GL_STATIC_DRAW);
        let normal_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
        gl.bufferData(GL_ARRAY_BUFFER, normal_arr$3, GL_STATIC_DRAW);
        let texcoord_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
        gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr$3, GL_STATIC_DRAW);
        let index_buf = gl.createBuffer();
        gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
        gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr$3, GL_STATIC_DRAW);
        return {
            VertexBuffer: vertex_buf,
            VertexArray: vertex_arr$3,
            NormalBuffer: normal_buf,
            TexCoordBuffer: texcoord_buf,
            IndexBuffer: index_buf,
            IndexArray: index_arr$3,
            IndexCount: index_arr$3.length,
        };
    }
    // prettier-ignore
    let vertex_arr$3 = Float32Array.from([
        -30.8508, 0, -62.4925,
        -29.2854, 0, -63.7444,
        -36.504, 0, -69.0769,
        -34.89, 0, -44.4615,
        -38.1735, 0, -45.0102,
        -34.2422, 0, -42.2485,
        -32.2991, 0, -44.6774,
        -55.7127, 0, -53.8704,
        -55.0138, 0, -73.6952,
        -23.6629, 0, -55.6885,
        -24.4186, 0, -58.9811,
        -26.0919, 0, -57.9015,
        -25.4827, 0, -54.0382,
        -25.4681, 0, -61.473,
        -44.6386, 0, -48.9526,
        -25.1866, 0, -46.1534,
        -40.0394, 0, -38.8016,
        -36.7536, 0, -42.214,
        -46.9709, 0, -37.3744,
        -45.8891, 0, -35.4791,
        -44.2293, 0, -42.1934,
        -46.1207, 0, -44.1336,
        -32.1949, 0, -81.7257,
        -39.491, 0, -76.597,
        -32.1793, 0, -75.6617,
        -29.9061, 0, -74.9682,
        -55.9124, 0, -81.679,
        -43.3387, 0, -78.5167,
        -48.0465, 0, -50.922,
        -56.1322, 0, -49.5628,
        -59.1186, 0, -79.733,
        -62.5683, 0, -55.5664,
        -22.6473, 0, -54.3134,
        -31.0277, 0, -70.1862,
        -37.9869, 0, -73.2696
    ]);
    // prettier-ignore
    let normal_arr$3 = Float32Array.from([
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ]);
    // prettier-ignore
    let texcoord_arr$3 = Float32Array.from([]);
    // prettier-ignore
    let index_arr$3 = Uint16Array.from([
        6, 5, 3,
        11, 10, 9,
        32, 12, 9,
        3, 12, 6,
        15, 6, 12,
        12, 11, 9,
        19, 18, 16,
        17, 16, 4,
        16, 20, 4,
        18, 20, 16,
        20, 14, 4,
        21, 14, 20,
        26, 8, 30,
        27, 8, 26,
        31, 8, 7,
        29, 7, 28,
        28, 7, 2,
        2, 8, 27,
        8, 2, 7,
        24, 34, 23,
        24, 23, 22,
        2, 24, 25,
        22, 25, 24,
        25, 33, 2,
        2, 33, 1,
        28, 2, 0,
        14, 28, 0,
        0, 12, 3,
        11, 12, 0,
        14, 0, 4,
        0, 13, 11,
        4, 0, 3,
        2, 1, 0
    ]);

    function mesh_eu07(gl) {
        let vertex_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
        gl.bufferData(GL_ARRAY_BUFFER, vertex_arr$2, GL_STATIC_DRAW);
        let normal_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
        gl.bufferData(GL_ARRAY_BUFFER, normal_arr$2, GL_STATIC_DRAW);
        let texcoord_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
        gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr$2, GL_STATIC_DRAW);
        let index_buf = gl.createBuffer();
        gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
        gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr$2, GL_STATIC_DRAW);
        return {
            VertexBuffer: vertex_buf,
            VertexArray: vertex_arr$2,
            NormalBuffer: normal_buf,
            TexCoordBuffer: texcoord_buf,
            IndexBuffer: index_buf,
            IndexArray: index_arr$2,
            IndexCount: index_arr$2.length,
        };
    }
    // prettier-ignore
    let vertex_arr$2 = Float32Array.from([
        -5.46668, 0, -44.0589,
        -8.64182, 0, -49.4922,
        -11.449, 0, -44.1489,
        -5.46668, 0, -44.0589,
        -2.63293, 0, -46.4879,
        -8.64182, 0, -49.4922,
        -11.449, 0, -44.1489,
        -8.88517, 0, -39.6059,
        -5.46668, 0, -44.0589,
        0.740571, 0, -40.6854,
        -5.01688, 0, -40.5955,
        0.515671, 0, -34.0734,
        -8.88517, 0, -39.6059,
        -4.747, 0, -33.7135,
        -11.449, 0, -44.1489,
        -11.7639, 0, -41.0903,
        -8.88517, 0, -39.6059,
        0.515671, 0, -34.0734,
        -5.01688, 0, -40.5955,
        -4.747, 0, -33.7135,
        -5.46668, 0, -44.0589,
        -5.01688, 0, -40.5955,
        -11.449, 0, -44.1489,
        -8.64182, 0, -49.4922,
        -12.6538, 0, -46.8716
    ]);
    // prettier-ignore
    let normal_arr$2 = Float32Array.from([
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ]);
    // prettier-ignore
    let texcoord_arr$2 = Float32Array.from([
        0, 0,
        0, 1,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 1,
        0, 0
    ]);
    // prettier-ignore
    let index_arr$2 = Uint16Array.from([
        24, 23, 22,
        19, 18, 17,
        16, 15, 14,
        21, 12, 20,
        13, 12, 10,
        11, 10, 9,
        8, 7, 6,
        5, 4, 3,
        2, 1, 0
    ]);

    function link(gl, vertex, fragment) {
        let program = gl.createProgram();
        gl.attachShader(program, compile(gl, GL_VERTEX_SHADER, vertex));
        gl.attachShader(program, compile(gl, GL_FRAGMENT_SHADER, fragment));
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, GL_LINK_STATUS)) {
            throw new Error(gl.getProgramInfoLog(program));
        }
        return program;
    }
    function compile(gl, type, source) {
        let shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, GL_COMPILE_STATUS)) {
            throw new Error(gl.getShaderInfoLog(shader));
        }
        return shader;
    }

    let vertex$1 = `
    // See Game.LightPositions and Game.LightDetails.
    const int MAX_LIGHTS = 8;

    uniform mat4 pv;
    uniform mat4 world;
    uniform mat4 self;
    uniform vec4 color;
    uniform vec4 light_positions[MAX_LIGHTS];
    uniform vec4 light_details[MAX_LIGHTS];

    attribute vec3 position;
    attribute vec3 normal;
    varying vec4 vert_color;

    void main() {
        vec4 vert_pos = world * vec4(position, 1.0);
        vec3 vert_normal = normalize((vec4(normal, 1.0) * self).xyz);
        gl_Position = pv * vert_pos;

        // Ambient light.
        vec3 rgb = color.rgb * 0.1;

        for (int i = 0; i < MAX_LIGHTS; i++) {
            if (light_positions[i].w == 0.0) {
                break;
            }

            vec3 light_color = light_details[i].rgb;
            float light_intensity = light_details[i].a;

            vec3 light_normal;
            if (light_positions[i].w == 1.0) {
                // Directional light.
                light_normal = light_positions[i].xyz;
            } else {
                vec3 light_dir = light_positions[i].xyz - vert_pos.xyz;
                float light_dist = length(light_dir);
                light_normal = light_dir / light_dist;
                // Distance attenuation.
                light_intensity /= (light_dist * light_dist);
            }

            float diffuse_factor = dot(vert_normal, light_normal);
            if (diffuse_factor > 0.0) {
                // Diffuse color.
                rgb += color.rgb * diffuse_factor * light_color * light_intensity;
            }
        }

        vert_color = vec4(rgb, 1.0);
    }
`;
    let fragment$1 = `
    precision mediump float;

    varying vec4 vert_color;

    void main() {
        gl_FragColor = vert_color;
    }
`;
    function mat1_colored_diffuse_gouraud(gl) {
        let program = link(gl, vertex$1, fragment$1);
        return {
            Mode: GL_TRIANGLES,
            Program: program,
            Locations: {
                Pv: gl.getUniformLocation(program, "pv"),
                World: gl.getUniformLocation(program, "world"),
                Self: gl.getUniformLocation(program, "self"),
                Color: gl.getUniformLocation(program, "color"),
                LightPositions: gl.getUniformLocation(program, "light_positions"),
                LightDetails: gl.getUniformLocation(program, "light_details"),
                VertexPosition: gl.getAttribLocation(program, "position"),
                VertexNormal: gl.getAttribLocation(program, "normal"),
            },
        };
    }

    let vertex = `
    uniform mat4 pv;
    uniform mat4 world;

    attribute vec3 position;

    void main() {
        gl_Position = pv * world * vec4(position, 1.0);
    }
`;
    let fragment = `
    precision mediump float;
    uniform vec4 color;

    void main() {
        gl_FragColor = color;
    }
`;
    function mat1_colored_unlit_line(gl) {
        let program = link(gl, vertex, fragment);
        return {
            Mode: GL_LINE_STRIP,
            Program: program,
            Locations: {
                Pv: gl.getUniformLocation(program, "pv"),
                World: gl.getUniformLocation(program, "world"),
                Color: gl.getUniformLocation(program, "color"),
                VertexPosition: gl.getAttribLocation(program, "position"),
            },
        };
    }

    function mesh_cube(gl) {
        let vertex_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
        gl.bufferData(GL_ARRAY_BUFFER, vertex_arr$1, GL_STATIC_DRAW);
        let normal_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
        gl.bufferData(GL_ARRAY_BUFFER, normal_arr$1, GL_STATIC_DRAW);
        let texcoord_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
        gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr$1, GL_STATIC_DRAW);
        let index_buf = gl.createBuffer();
        gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
        gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr$1, GL_STATIC_DRAW);
        return {
            VertexBuffer: vertex_buf,
            VertexArray: vertex_arr$1,
            NormalBuffer: normal_buf,
            TexCoordBuffer: texcoord_buf,
            IndexBuffer: index_buf,
            IndexArray: index_arr$1,
            IndexCount: index_arr$1.length,
        };
    }
    // prettier-ignore
    let vertex_arr$1 = Float32Array.from([
        -0.5, -0.5, 0.5,
        -0.5, 0.5, 0.5,
        -0.5, 0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5, 0.5, -0.5,
        0.5, 0.5, -0.5,
        0.5, -0.5, -0.5,
        0.5, -0.5, -0.5,
        0.5, 0.5, -0.5,
        0.5, 0.5, 0.5,
        0.5, -0.5, 0.5,
        0.5, -0.5, 0.5,
        0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5,
        -0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5,
        0.5, -0.5, -0.5,
        0.5, -0.5, 0.5,
        -0.5, -0.5, 0.5,
        0.5, 0.5, -0.5,
        -0.5, 0.5, -0.5,
        -0.5, 0.5, 0.5,
        0.5, 0.5, 0.5
    ]);
    // prettier-ignore
    let normal_arr$1 = Float32Array.from([
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ]);
    // prettier-ignore
    let texcoord_arr$1 = Float32Array.from([
        0.666667, 0.333333,
        0.333333, 0.333333,
        0.333333, 0,
        0.666667, 0,
        0.333333, 0.666667,
        0, 0.666667,
        0, 0.333333,
        0.333333, 0.333333,
        0.333333, 0.333333,
        0, 0.333333,
        0, 0,
        0.333333, 0,
        0.333333, 0.666667,
        0.333333, 0.333333,
        0.666667, 0.333333,
        0.666667, 0.666667,
        1, 0.333333,
        0.666667, 0.333333,
        0.666667, 0,
        1, 0,
        0.333333, 0.666667,
        0.333333, 1,
        0, 1,
        0, 0.666667
    ]);
    // prettier-ignore
    let index_arr$1 = Uint16Array.from([
        23, 22, 20,
        22, 21, 20,
        19, 18, 16,
        18, 17, 16,
        15, 14, 12,
        14, 13, 12,
        11, 10, 8,
        10, 9, 8,
        7, 6, 4,
        6, 5, 4,
        3, 2, 0,
        2, 1, 0
    ]);

    function mesh_soldier(gl) {
        let vertex_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
        gl.bufferData(GL_ARRAY_BUFFER, vertex_arr, GL_STATIC_DRAW);
        let normal_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
        gl.bufferData(GL_ARRAY_BUFFER, normal_arr, GL_STATIC_DRAW);
        let texcoord_buf = gl.createBuffer();
        gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
        gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr, GL_STATIC_DRAW);
        let index_buf = gl.createBuffer();
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
        0.571508, 1.20611, -0.142565,
        0.761224, 1.18969, -0.106626,
        0.601956, 1.12098, 0.066804,
        0.761224, 1.18969, -0.106626,
        0.7609, 1.14239, 0.068582,
        0.601956, 1.12098, 0.066804,
        0.703482, 1.26889, -0.175568,
        0.761224, 1.18969, -0.106626,
        0.571508, 1.20611, -0.142565,
        0.667339, 1.69182, -0.143933,
        0.703482, 1.26889, -0.175568,
        0.583908, 1.52393, -0.182966,
        0.703482, 1.26889, -0.175568,
        0.546413, 1.32206, -0.16072,
        0.583908, 1.52393, -0.182966,
        0.440457, 1.19388, -0.397366,
        0.473887, 0.398518, -0.567546,
        0.277396, 1.19205, -0.520881,
        0.440457, 1.19388, -0.397366,
        0.738978, 0.398427, -0.103718,
        0.473887, 0.398518, -0.567546,
        0.571508, 1.20611, -0.142565,
        0.738978, 0.398427, -0.103718,
        0.440457, 1.19388, -0.397366,
        0.738978, 0.398427, -0.103718,
        0.571508, 1.20611, -0.142565,
        0.601956, 1.12098, 0.066804,
        0.329353, 1.19407, 0.507219,
        0.634968, 0.398426, 0.383828,
        0.573904, 1.19823, 0.169016,
        0.634968, 0.398426, 0.383828,
        0.738978, 0.398427, -0.103718,
        0.601956, 1.12098, 0.066804,
        0.573904, 1.19823, 0.169016,
        0.634968, 0.398426, 0.383828,
        0.601956, 1.12098, 0.066804,
        0.634968, 0.398426, 0.383828,
        0.329353, 1.19407, 0.507219,
        0.267635, 0.398589, 0.704295,
        0.029291, 1.19387, -0.586945,
        0.035657, 0.398427, -0.739353,
        -0.26576, 1.18813, -0.529253,
        0.277396, 1.19205, -0.520881,
        0.035657, 0.398427, -0.739353,
        0.029291, 1.19387, -0.586945,
        -0.26576, 1.18813, -0.529253,
        0.035657, 0.398427, -0.739353,
        -0.554146, 0.398637, -0.508518,
        0.473887, 0.398518, -0.567546,
        0.035657, 0.398427, -0.739353,
        0.277396, 1.19205, -0.520881,
        0.703482, 1.26889, -0.175568,
        0.571508, 1.20611, -0.142565,
        0.546413, 1.32206, -0.16072,
        -0.588818, 1.19455, -0.098705,
        -0.554146, 0.398637, -0.508518,
        -0.742437, 0.398614, 0.01076,
        -0.367702, 1.19392, 0.471056,
        -0.452684, 0.820578, 0.512472,
        -0.304046, 1.09335, 0.535291,
        -0.296962, 0.829645, 0.585153,
        -0.091631, 1.19468, 0.59565,
        -0.304046, 1.09335, 0.535291,
        -0.452684, 0.820578, 0.512472,
        -0.296962, 0.829645, 0.585153,
        -0.496336, 0.829619, 1.09966,
        -0.59418, 0.398427, 0.441528,
        -0.23911, 0.398484, 0.705721,
        -0.452684, 0.820578, 0.512472,
        -0.367702, 1.19392, 0.471056,
        -0.59418, 0.398427, 0.441528,
        -0.452684, 0.820578, 0.512472,
        -0.742437, 0.398614, 0.01076,
        -0.59418, 0.398427, 0.441528,
        -0.540252, 1.19426, 0.238241,
        -0.296962, 0.829619, 1.09969,
        -0.496336, 0.829619, 1.09966,
        -0.296962, 0.829645, 0.585153,
        0.443203, 1.34161, -0.484377,
        0.362241, 1.32682, -0.445788,
        0.277396, 1.19205, -0.520881,
        -0.23911, 0.398484, 0.705721,
        -0.091631, 1.19468, 0.59565,
        -0.296962, 0.829645, 0.585153,
        -0.296962, 0.829645, 0.585153,
        -0.452684, 0.820578, 0.512472,
        -0.23911, 0.398484, 0.705721,
        -0.23911, 0.398484, 0.705721,
        0.267635, 0.398589, 0.704295,
        -0.091631, 1.19468, 0.59565,
        0.65027, 0.39835, -0.786323,
        0.473887, 0.398518, -0.567546,
        0.987129, 0.39835, -0.191869,
        0.738978, 0.398427, -0.103718,
        0.987129, 0.39835, -0.191869,
        0.473887, 0.398518, -0.567546,
        0.941904, 0.39835, 0.366803,
        0.277396, 1.19205, -0.520881,
        0.362241, 1.32682, -0.445788,
        0.440457, 1.19388, -0.397366,
        0.738978, 0.398427, -0.103718,
        0.634968, 0.398426, 0.383828,
        0.941904, 0.39835, 0.366803,
        0.563208, 0.39835, 0.844978,
        0.941904, 0.39835, 0.366803,
        0.634968, 0.398426, 0.383828,
        -0.789313, 0.39835, -0.644143,
        -1.00897, 0.39835, 0.133062,
        -0.554146, 0.398637, -0.508518,
        -0.789313, 0.39835, -0.644143,
        -0.554146, 0.398637, -0.508518,
        -0.098233, 0.39835, -1.00525,
        0.65027, 0.39835, -0.786323,
        -0.098233, 0.39835, -1.00525,
        0.035657, 0.398427, -0.739353,
        0.035657, 0.398427, -0.739353,
        -0.098233, 0.39835, -1.00525,
        -0.554146, 0.398637, -0.508518,
        0.473887, 0.398518, -0.567546,
        0.65027, 0.39835, -0.786323,
        0.035657, 0.398427, -0.739353,
        -1.00897, 0.39835, 0.133062,
        -0.642173, 0.39835, 0.789064,
        -0.59418, 0.398427, 0.441528,
        -0.59418, 0.398427, 0.441528,
        -0.742437, 0.398614, 0.01076,
        -1.00897, 0.39835, 0.133062,
        0.563208, 0.39835, 0.844978,
        0.267635, 0.398589, 0.704295,
        -0.023464, 0.39835, 1.01185,
        0.267635, 0.398589, 0.704295,
        0.563208, 0.39835, 0.844978,
        0.634968, 0.398426, 0.383828,
        -0.642173, 0.39835, 0.789064,
        -0.023464, 0.39835, 1.01185,
        -0.23911, 0.398484, 0.705721,
        0.267635, 0.398589, 0.704295,
        -0.742437, 0.398614, 0.01076,
        -0.554146, 0.398637, -0.508518,
        -1.00897, 0.39835, 0.133062,
        -0.23911, 0.398484, 0.705721,
        0.941904, 0.39835, 0.366803,
        0.99439, 0, 0.176818,
        0.987129, 0.39835, -0.191869,
        0.941904, 0.39835, 0.366803,
        0.600532, 0, 0.845815,
        0.99439, 0, 0.176818,
        0.65027, 0.39835, -0.786323,
        0.856181, 0, -0.566373,
        0.001568, 0, -1.03338,
        0.65027, 0.39835, -0.786323,
        0.987129, 0.39835, -0.191869,
        0.856181, 0, -0.566373,
        0.987129, 0.39835, -0.191869,
        0.99439, 0, 0.176818,
        0.856181, 0, -0.566373,
        -0.709074, 0, -0.706084,
        -0.789313, 0.39835, -0.644143,
        0.001568, 0, -1.03338,
        -0.098233, 0.39835, -1.00525,
        0.001568, 0, -1.03338,
        -0.789313, 0.39835, -0.644143,
        0.001568, 0, -1.03338,
        -0.098233, 0.39835, -1.00525,
        0.65027, 0.39835, -0.786323,
        0.941904, 0.39835, 0.366803,
        0.563208, 0.39835, 0.844978,
        0.600532, 0, 0.845815,
        0.563208, 0.39835, 0.844978,
        -0.023464, 0.39835, 1.01185,
        0.600532, 0, 0.845815,
        -0.023464, 0.39835, 1.01185,
        -0.170691, 0, 0.99738,
        0.600532, 0, 0.845815,
        -0.023464, 0.39835, 1.01185,
        -0.642173, 0.39835, 0.789064,
        -0.170691, 0, 0.99738,
        -0.642173, 0.39835, 0.789064,
        -0.789313, 0, 0.65326,
        -0.170691, 0, 0.99738,
        -1.00897, 0.39835, 0.133062,
        -0.789313, 0, 0.65326,
        -0.642173, 0.39835, 0.789064,
        -1.00897, 0.39835, 0.133062,
        -1.00897, 0, -0.123945,
        -0.789313, 0, 0.65326,
        -0.789313, 0.39835, -0.644143,
        -1.00897, 0, -0.123945,
        -1.00897, 0.39835, 0.133062,
        -0.789313, 0.39835, -0.644143,
        -0.709074, 0, -0.706084,
        -1.00897, 0, -0.123945,
        0.001568, 0, -1.03338,
        0.856181, 0, -0.566373,
        0.99439, 0, 0.176818,
        0.600532, 0, 0.845815,
        -0.709074, 0, -0.706084,
        -0.789313, 0, 0.65326,
        -0.170691, 0, 0.99738,
        -1.00897, 0, -0.123945,
        0.440457, 1.19388, -0.397366,
        0.362241, 1.32682, -0.445788,
        0.571508, 1.20611, -0.142565,
        -0.496336, 0.829619, 1.09966,
        -0.496337, 1.57845, 0.718983,
        -0.502103, 1.37068, 0.666539,
        0.703482, 1.26889, -0.175568,
        0.667339, 1.69182, -0.143933,
        0.852303, 1.33187, -0.045757,
        0.583908, 1.52393, -0.182966,
        0.49016, 1.50713, -0.169815,
        0.42991, 1.78295, -0.344895,
        0.761224, 1.18969, -0.106626,
        0.852303, 1.33187, -0.045757,
        0.7609, 1.14239, 0.068582,
        0.571508, 1.20611, -0.142565,
        0.362241, 1.32682, -0.445788,
        0.546413, 1.32206, -0.16072,
        0.49016, 1.50713, -0.169815,
        0.583908, 1.52393, -0.182966,
        0.546413, 1.32206, -0.16072,
        0.761224, 1.18969, -0.106626,
        0.703482, 1.26889, -0.175568,
        0.852303, 1.33187, -0.045757,
        0.852303, 1.33187, -0.045757,
        0.667339, 1.69182, -0.143933,
        0.90542, 1.38368, 0.145472,
        0.7609, 1.14239, 0.068582,
        0.796681, 1.35069, 0.143622,
        0.658145, 1.32018, 0.228864,
        0.701667, 1.35969, 0.334091,
        0.796681, 1.35069, 0.143622,
        0.90542, 1.38368, 0.145472,
        0.852303, 1.33187, -0.045757,
        0.796681, 1.35069, 0.143622,
        0.7609, 1.14239, 0.068582,
        0.546413, 1.32206, -0.16072,
        0.362241, 1.32682, -0.445788,
        0.49016, 1.50713, -0.169815,
        0.852303, 1.33187, -0.045757,
        0.90542, 1.38368, 0.145472,
        0.796681, 1.35069, 0.143622,
        0.443852, 1.43365, -0.750468,
        0.319964, 1.24804, -0.76591,
        0.315691, 1.38881, -0.801793,
        0.317383, 2.27296, -0.612935,
        0.315691, 1.38881, -0.801793,
        -0.311736, 2.27349, -0.613483,
        0.315691, 1.38881, -0.801793,
        -0.316407, 1.24829, -0.766589,
        -0.330272, 1.40014, -0.798863,
        -0.316407, 1.24829, -0.766589,
        0.315691, 1.38881, -0.801793,
        0.319964, 1.24804, -0.76591,
        -0.330272, 1.40014, -0.798863,
        -0.451881, 1.43512, -0.730181,
        -0.440104, 2.23858, -0.575972,
        0.796681, 1.35069, 0.143622,
        0.701667, 1.35969, 0.334091,
        0.658145, 1.32018, 0.228864,
        0.501739, 1.31936, 0.293786,
        0.658145, 1.32018, 0.228864,
        0.701667, 1.35969, 0.334091,
        -0.316407, 1.24829, -0.766589,
        -0.451881, 1.43512, -0.730181,
        -0.330272, 1.40014, -0.798863,
        -0.485306, 1.83373, 0.55456,
        -0.388809, 3.75001, 0.483566,
        -0.420062, 2.78765, 0.506001,
        0.57444, 1.5651, 0.251757,
        0.701667, 1.35969, 0.334091,
        0.663018, 1.73503, 0.146323,
        -0.403683, 3.45135, 0.297743,
        0.345767, 3.45135, 0.068277,
        -0.454203, 3.45135, -0.090366,
        -0.420062, 2.78765, 0.506001,
        -0.205243, 2.78765, 0.460549,
        -0.44476, 2.78765, 0.218816,
        -0.454203, 3.45135, -0.090366,
        -0.44476, 2.78765, 0.218816,
        -0.403683, 3.45135, 0.297743,
        -0.454203, 3.45135, -0.090366,
        -0.454533, 2.65478, -0.038305,
        -0.44476, 2.78765, 0.218816,
        -0.388809, 3.75001, 0.483566,
        -0.49463, 3.75001, 0.668714,
        -0.327736, 3.75001, 0.725072,
        -0.388809, 3.75001, 0.483566,
        -0.327736, 3.75001, 0.725072,
        -0.295765, 2.77557, 0.605709,
        -0.295765, 2.77557, 0.605709,
        -0.420062, 2.78765, 0.506001,
        -0.388809, 3.75001, 0.483566,
        -0.157344, 3.02014, 0.468646,
        0.064905, 3.02011, 0.455562,
        0.022755, 3.29291, 0.482594,
        -0.157344, 3.02014, 0.468646,
        0.022755, 3.29291, 0.482594,
        -0.077624, 3.34457, 0.486544,
        -0.420062, 2.78765, 0.506001,
        -0.295765, 2.77557, 0.605709,
        -0.205243, 2.78765, 0.460549,
        0.472039, 1.53487, 0.220635,
        0.501739, 1.31936, 0.293786,
        0.57444, 1.5651, 0.251757,
        0.14797, 2.78765, 0.415295,
        0.064905, 3.02011, 0.455562,
        -0.205243, 2.78765, 0.460549,
        0.044398, 3.45135, -0.347505,
        0.345767, 3.45135, 0.068277,
        -0.403683, 3.45135, 0.297743,
        -0.08231, 3.43206, 0.470453,
        0.345767, 3.45135, 0.068277,
        -0.08231, 3.43206, 0.470453,
        0.153004, 3.45135, 0.419207,
        -0.08231, 3.43206, 0.470453,
        -0.157344, 3.02014, 0.468646,
        -0.077624, 3.34457, 0.486544,
        -0.077624, 3.34457, 0.486544,
        0.153004, 3.45135, 0.419207,
        -0.08231, 3.43206, 0.470453,
        0.022755, 3.29291, 0.482594,
        0.153004, 3.45135, 0.419207,
        -0.077624, 3.34457, 0.486544,
        0.57444, 1.5651, 0.251757,
        0.501739, 1.31936, 0.293786,
        0.701667, 1.35969, 0.334091,
        0.564465, 1.29432, 0.191056,
        0.573904, 1.19823, 0.169016,
        0.658145, 1.32018, 0.228864,
        0.601956, 1.12098, 0.066804,
        0.658145, 1.32018, 0.228864,
        0.573904, 1.19823, 0.169016,
        0.064905, 3.02011, 0.455562,
        0.153004, 3.45135, 0.419207,
        0.022755, 3.29291, 0.482594,
        0.044397, 2.78765, 0.754839,
        0.316009, 2.78765, 0.281012,
        0.14797, 2.78765, 0.415295,
        0.658145, 1.32018, 0.228864,
        0.501739, 1.31936, 0.293786,
        0.564465, 1.29432, 0.191056,
        0.345767, 3.45135, 0.068277,
        0.153004, 3.45135, 0.419207,
        0.316009, 2.78765, 0.281012,
        0.14797, 2.78765, 0.415295,
        0.316009, 2.78765, 0.281012,
        0.153004, 3.45135, 0.419207,
        -0.205243, 2.78765, 0.460549,
        -0.08231, 3.43206, 0.470453,
        -0.403683, 3.45135, 0.297743,
        -0.205243, 2.78765, 0.460549,
        -0.157344, 3.02014, 0.468646,
        -0.08231, 3.43206, 0.470453,
        0.7609, 1.14239, 0.068582,
        0.658145, 1.32018, 0.228864,
        0.601956, 1.12098, 0.066804,
        -0.157344, 3.02014, 0.468646,
        -0.205243, 2.78765, 0.460549,
        0.064905, 3.02011, 0.455562,
        0.044397, 2.78765, 0.754839,
        -0.205243, 2.78765, 0.460549,
        -0.295765, 2.77557, 0.605709,
        0.153004, 3.45135, 0.419207,
        0.064905, 3.02011, 0.455562,
        0.14797, 2.78765, 0.415295,
        -0.205243, 2.78765, 0.460549,
        -0.403683, 3.45135, 0.297743,
        -0.44476, 2.78765, 0.218816,
        0.25862, 2.65456, 0.325279,
        0.316009, 2.78765, 0.281012,
        0.3246, 2.65478, 0.4977,
        0.316009, 2.78765, 0.281012,
        0.25862, 2.65456, 0.325279,
        0.3066, 2.65436, -0.032346,
        0.044398, 3.45135, -0.347505,
        -0.086287, 2.65478, -0.345019,
        -0.454203, 3.45135, -0.090366,
        0.044397, 2.78765, 0.754839,
        0.3246, 2.65478, 0.4977,
        0.316009, 2.78765, 0.281012,
        0.329353, 1.19407, 0.507219,
        0.573904, 1.19823, 0.169016,
        0.501739, 1.31936, 0.293786,
        0.421485, 2.24287, 0.13633,
        0.492213, 2.22584, -0.147775,
        0.306689, 2.29839, -0.035328,
        0.564465, 1.29432, 0.191056,
        0.501739, 1.31936, 0.293786,
        0.573904, 1.19823, 0.169016,
        0.472039, 1.53487, 0.220635,
        0.393627, 1.7003, 0.270716,
        0.501739, 1.31936, 0.293786,
        0.454816, 2.09145, -0.318427,
        0.438943, 2.24413, -0.576504,
        0.320851, 2.32276, -0.272547,
        0.299344, 2.38833, -0.526871,
        0.320851, 2.32276, -0.272547,
        0.438943, 2.24413, -0.576504,
        0.320851, 2.32276, -0.272547,
        0.308817, 2.16624, -0.256431,
        0.454816, 2.09145, -0.318427,
        0.501739, 1.31936, 0.293786,
        0.393627, 1.7003, 0.270716,
        0.344688, 1.55749, 0.397025,
        0.299344, 2.38833, -0.526871,
        0.438943, 2.24413, -0.576504,
        0.317383, 2.27296, -0.612935,
        0.501739, 1.31936, 0.293786,
        0.344688, 1.55749, 0.397025,
        0.225827, 1.51857, 0.487081,
        0.306689, 2.29839, -0.035328,
        0.492213, 2.22584, -0.147775,
        0.308817, 2.16624, -0.256431,
        0.225827, 1.51857, 0.487081,
        0.153542, 1.32647, 0.560164,
        0.501739, 1.31936, 0.293786,
        0.263189, 2.65478, -0.166331,
        0.345767, 3.45135, 0.068277,
        0.3066, 2.65436, -0.032346,
        0.501739, 1.31936, 0.293786,
        0.153542, 1.32647, 0.560164,
        0.329353, 1.19407, 0.507219,
        0.345767, 3.45135, 0.068277,
        0.316009, 2.78765, 0.281012,
        0.3066, 2.65436, -0.032346,
        0.279007, 2.33805, -0.050242,
        0.3066, 2.65436, -0.032346,
        0.314407, 2.353, 0.202258,
        0.3066, 2.65436, -0.032346,
        0.25862, 2.65456, 0.325279,
        0.314407, 2.353, 0.202258,
        -0.330272, 1.40014, -0.798863,
        -0.311736, 2.27349, -0.613483,
        0.315691, 1.38881, -0.801793,
        0.331385, 2.03492, 0.244024,
        0.421485, 2.24287, 0.13633,
        0.292602, 2.14619, 0.185688,
        0.314407, 2.353, 0.202258,
        0.284479, 2.28622, 0.108075,
        0.279007, 2.33805, -0.050242,
        -0.330272, 1.40014, -0.798863,
        -0.440104, 2.23858, -0.575972,
        -0.311736, 2.27349, -0.613483,
        0.284479, 2.28622, 0.108075,
        0.292602, 2.14619, 0.185688,
        0.306689, 2.29839, -0.035328,
        -0.26576, 1.18813, -0.529253,
        -0.438276, 1.33908, -0.484441,
        -0.316407, 1.24829, -0.766589,
        -0.316407, 1.24829, -0.766589,
        -0.438276, 1.33908, -0.484441,
        -0.451881, 1.43512, -0.730181,
        -0.316407, 1.24829, -0.766589,
        0.319964, 1.24804, -0.76591,
        0.029291, 1.19387, -0.586945,
        -0.316407, 1.24829, -0.766589,
        0.029291, 1.19387, -0.586945,
        -0.26576, 1.18813, -0.529253,
        0.029291, 1.19387, -0.586945,
        0.319964, 1.24804, -0.76591,
        0.277396, 1.19205, -0.520881,
        0.299344, 2.38833, -0.526871,
        0.317383, 2.27296, -0.612935,
        -0.311736, 2.27349, -0.613483,
        -0.311736, 2.27349, -0.613483,
        -0.295573, 2.38902, -0.525499,
        0.299344, 2.38833, -0.526871,
        -0.311736, 2.27349, -0.613483,
        -0.440104, 2.23858, -0.575972,
        -0.295573, 2.38902, -0.525499,
        -0.443696, 2.08079, -0.318107,
        -0.465221, 1.87638, -0.445843,
        -0.509249, 2.08255, -0.226072,
        -0.346569, 2.14292, -0.091773,
        -0.509249, 2.08255, -0.226072,
        -0.533894, 2.02525, 0.132421,
        -0.028889, 2.38208, -0.25261,
        -0.223008, 2.65445, -0.201492,
        0.076812, 2.65156, -0.237662,
        -0.028889, 2.38208, -0.25261,
        -0.182162, 2.3396, -0.210733,
        -0.223008, 2.65445, -0.201492,
        -0.465221, 1.87638, -0.445843,
        -0.548669, 1.72739, -0.317551,
        -0.509249, 2.08255, -0.226072,
        -0.443696, 2.08079, -0.318107,
        -0.440104, 2.23858, -0.575972,
        -0.465221, 1.87638, -0.445843,
        -0.368886, 2.11694, -0.269191,
        -0.443696, 2.08079, -0.318107,
        -0.509249, 2.08255, -0.226072,
        -0.346569, 2.14292, -0.091773,
        -0.368886, 2.11694, -0.269191,
        -0.509249, 2.08255, -0.226072,
        -0.443696, 2.08079, -0.318107,
        -0.415528, 2.25268, -0.306883,
        -0.440104, 2.23858, -0.575972,
        -0.118582, 2.30547, -0.260056,
        -0.182162, 2.3396, -0.210733,
        -0.028889, 2.38208, -0.25261,
        -0.295573, 2.38902, -0.525499,
        -0.281651, 2.33086, -0.272188,
        0.320851, 2.32276, -0.272547,
        0.299344, 2.38833, -0.526871,
        -0.295573, 2.38902, -0.525499,
        0.320851, 2.32276, -0.272547,
        0.056667, 2.32555, -0.272116,
        -0.281651, 2.33086, -0.272188,
        -0.118582, 2.30547, -0.260056,
        -0.451881, 1.43512, -0.730181,
        -0.465221, 1.87638, -0.445843,
        -0.440104, 2.23858, -0.575972,
        -0.281651, 2.33086, -0.272188,
        0.056667, 2.32555, -0.272116,
        0.320851, 2.32276, -0.272547,
        -0.028889, 2.38208, -0.25261,
        0.056667, 2.32555, -0.272116,
        -0.118582, 2.30547, -0.260056,
        -0.359218, 2.11243, 0.058425,
        -0.282673, 2.28584, -0.082626,
        -0.346569, 2.14292, -0.091773,
        -0.27212, 2.01397, -0.274018,
        -0.368886, 2.11694, -0.269191,
        -0.346569, 2.14292, -0.091773,
        0.320851, 2.32276, -0.272547,
        0.056667, 2.32555, -0.272116,
        0.234523, 2.15203, -0.249275,
        0.234523, 2.15203, -0.249275,
        0.056667, 2.32555, -0.272116,
        0.171538, 2.38238, -0.190128,
        0.345767, 3.45135, 0.068277,
        0.263189, 2.65478, -0.166331,
        0.044398, 3.45135, -0.347505,
        -0.086287, 2.65478, -0.345019,
        0.044398, 3.45135, -0.347505,
        0.263189, 2.65478, -0.166331,
        0.3066, 2.65436, -0.032346,
        0.076812, 2.65156, -0.237662,
        0.263189, 2.65478, -0.166331,
        0.263189, 2.65478, -0.166331,
        0.076812, 2.65156, -0.237662,
        -0.086287, 2.65478, -0.345019,
        0.171538, 2.38238, -0.190128,
        -0.028889, 2.38208, -0.25261,
        0.076812, 2.65156, -0.237662,
        0.3066, 2.65436, -0.032346,
        0.171538, 2.38238, -0.190128,
        0.076812, 2.65156, -0.237662,
        0.171538, 2.38238, -0.190128,
        0.3066, 2.65436, -0.032346,
        0.279007, 2.33805, -0.050242,
        -0.533894, 2.02525, 0.132421,
        -0.509249, 2.08255, -0.226072,
        -0.586022, 1.79995, -0.195568,
        -0.509249, 2.08255, -0.226072,
        -0.548669, 1.72739, -0.317551,
        -0.586022, 1.79995, -0.195568,
        0.171538, 2.38238, -0.190128,
        0.056667, 2.32555, -0.272116,
        -0.028889, 2.38208, -0.25261,
        -0.427528, 1.67358, -0.391213,
        -0.548669, 1.72739, -0.317551,
        -0.465221, 1.87638, -0.445843,
        -0.438276, 1.33908, -0.484441,
        -0.465221, 1.87638, -0.445843,
        -0.451881, 1.43512, -0.730181,
        -0.465221, 1.87638, -0.445843,
        -0.438276, 1.33908, -0.484441,
        -0.427528, 1.67358, -0.391213,
        -0.548669, 1.72739, -0.317551,
        -0.427528, 1.67358, -0.391213,
        -0.438245, 1.54739, -0.259287,
        -0.438276, 1.33908, -0.484441,
        -0.347993, 1.32399, -0.444908,
        -0.427528, 1.67358, -0.391213,
        -0.438245, 1.54739, -0.259287,
        -0.427528, 1.67358, -0.391213,
        -0.321761, 1.66709, -0.354964,
        0.234523, 2.15203, -0.249275,
        0.171538, 2.38238, -0.190128,
        0.267605, 2.15049, -0.224465,
        0.284479, 2.28622, 0.108075,
        0.137889, 2.2194, 0.296014,
        0.292602, 2.14619, 0.185688,
        0.267605, 2.15049, -0.224465,
        0.171538, 2.38238, -0.190128,
        0.279007, 2.33805, -0.050242,
        0.308817, 2.16624, -0.256431,
        0.267605, 2.15049, -0.224465,
        0.306689, 2.29839, -0.035328,
        0.306689, 2.29839, -0.035328,
        0.267605, 2.15049, -0.224465,
        0.279007, 2.33805, -0.050242,
        0.279007, 2.33805, -0.050242,
        0.284479, 2.28622, 0.108075,
        0.306689, 2.29839, -0.035328,
        -0.223008, 2.65445, -0.201492,
        -0.086287, 2.65478, -0.345019,
        0.076812, 2.65156, -0.237662,
        0.237725, 1.98163, 0.419254,
        0.292602, 2.14619, 0.185688,
        0.162207, 2.0782, 0.345205,
        0.100825, 1.84091, 0.442914,
        0.344688, 1.55749, 0.397025,
        0.331385, 2.03492, 0.244024,
        0.100825, 1.84091, 0.442914,
        0.331385, 2.03492, 0.244024,
        0.237725, 1.98163, 0.419254,
        0.002781, 1.93584, 0.427182,
        0.162207, 2.0782, 0.345205,
        -0.057391, 2.19686, 0.335033,
        -0.27212, 2.01397, -0.274018,
        -0.282673, 2.28584, -0.082626,
        -0.182162, 2.3396, -0.210733,
        -0.346569, 2.14292, -0.091773,
        -0.282673, 2.28584, -0.082626,
        -0.27212, 2.01397, -0.274018,
        0.002781, 1.93584, 0.427182,
        -0.202723, 2.11932, 0.314336,
        -0.090926, 1.85604, 0.49062,
        -0.293994, 2.02975, 0.364342,
        -0.090926, 1.85604, 0.49062,
        -0.202723, 2.11932, 0.314336,
        -0.118582, 2.30547, -0.260056,
        -0.27212, 2.01397, -0.274018,
        -0.182162, 2.3396, -0.210733,
        -0.301181, 1.99019, 0.261753,
        -0.091698, 1.83909, 0.433738,
        -0.293994, 2.02975, 0.364342,
        -0.443696, 2.08079, -0.318107,
        -0.368886, 2.11694, -0.269191,
        -0.415528, 2.25268, -0.306883,
        -0.202723, 2.11932, 0.314336,
        0.002781, 1.93584, 0.427182,
        -0.057391, 2.19686, 0.335033,
        -0.440104, 2.23858, -0.575972,
        -0.415528, 2.25268, -0.306883,
        -0.295573, 2.38902, -0.525499,
        -0.281651, 2.33086, -0.272188,
        -0.415528, 2.25268, -0.306883,
        -0.368886, 2.11694, -0.269191,
        -0.086287, 2.65478, -0.345019,
        -0.223008, 2.65445, -0.201492,
        -0.454533, 2.65478, -0.038305,
        -0.454533, 2.65478, -0.038305,
        -0.454203, 3.45135, -0.090366,
        -0.086287, 2.65478, -0.345019,
        -0.182162, 2.3396, -0.210733,
        -0.364628, 2.39648, -0.042177,
        -0.223008, 2.65445, -0.201492,
        -0.374941, 2.65423, 0.027047,
        -0.454533, 2.65478, -0.038305,
        -0.223008, 2.65445, -0.201492,
        -0.364628, 2.39648, -0.042177,
        -0.390342, 2.35849, 0.167515,
        -0.374941, 2.65423, 0.027047,
        -0.364628, 2.39648, -0.042177,
        -0.374941, 2.65423, 0.027047,
        -0.223008, 2.65445, -0.201492,
        -0.057391, 2.19686, 0.335033,
        -0.283446, 2.21185, 0.174021,
        -0.202723, 2.11932, 0.314336,
        0.096779, 1.85605, 0.490618,
        0.237725, 1.98163, 0.419254,
        0.002781, 1.93584, 0.427182,
        0.162207, 2.0782, 0.345205,
        0.002781, 1.93584, 0.427182,
        0.237725, 1.98163, 0.419254,
        0.049885, 1.90295, 0.483481,
        0.171076, 1.78176, 0.501932,
        0.096779, 1.85605, 0.490618,
        0.096764, 1.85604, 0.490625,
        0.171076, 1.78176, 0.501932,
        0.049885, 1.90295, 0.483481,
        0.344688, 1.55749, 0.397025,
        0.100825, 1.84091, 0.442914,
        0.171076, 1.78176, 0.501932,
        0.171076, 1.78176, 0.501932,
        0.096764, 1.85604, 0.490625,
        0.002692, 1.76816, 0.521814,
        0.096779, 1.85605, 0.490618,
        0.100825, 1.84091, 0.442914,
        0.237725, 1.98163, 0.419254,
        0.096779, 1.85605, 0.490618,
        0.002781, 1.93584, 0.427182,
        0.049885, 1.90295, 0.483481,
        -0.282673, 2.28584, -0.082626,
        -0.359218, 2.11243, 0.058425,
        -0.283446, 2.21185, 0.174021,
        0.344688, 1.55749, 0.397025,
        0.171076, 1.78176, 0.501932,
        0.225827, 1.51857, 0.487081,
        -0.415528, 2.25268, -0.306883,
        -0.281651, 2.33086, -0.272188,
        -0.295573, 2.38902, -0.525499,
        0.002692, 1.76816, 0.521814,
        0.225827, 1.51857, 0.487081,
        0.171076, 1.78176, 0.501932,
        0.171076, 1.78176, 0.501932,
        0.100825, 1.84091, 0.442914,
        0.096779, 1.85605, 0.490618,
        -0.282673, 2.28584, -0.082626,
        -0.364628, 2.39648, -0.042177,
        -0.182162, 2.3396, -0.210733,
        0.049885, 1.90295, 0.483481,
        0.002692, 1.76816, 0.521814,
        0.002781, 1.93584, 0.427182,
        -0.043961, 1.90295, 0.483481,
        0.049885, 1.90295, 0.483481,
        0.002781, 1.93584, 0.427182,
        0.002692, 1.76816, 0.521814,
        -0.118582, 2.30547, -0.260056,
        -0.281651, 2.33086, -0.272188,
        -0.368886, 2.11694, -0.269191,
        -0.368886, 2.11694, -0.269191,
        -0.27212, 2.01397, -0.274018,
        -0.118582, 2.30547, -0.260056,
        -0.043961, 1.90295, 0.483481,
        -0.090926, 1.85604, 0.49062,
        -0.165285, 1.78176, 0.501932,
        -0.165285, 1.78176, 0.501932,
        0.002692, 1.76816, 0.521814,
        -0.090892, 1.85604, 0.490625,
        -0.165285, 1.78176, 0.501932,
        -0.090892, 1.85604, 0.490625,
        -0.043961, 1.90295, 0.483481,
        -0.090926, 1.85604, 0.49062,
        -0.043961, 1.90295, 0.483481,
        0.002781, 1.93584, 0.427182,
        0.002692, 1.76816, 0.521814,
        -0.043961, 1.90295, 0.483481,
        -0.090892, 1.85604, 0.490625,
        -0.090926, 1.85604, 0.49062,
        -0.091698, 1.83909, 0.433738,
        -0.165285, 1.78176, 0.501932,
        0.284479, 2.28622, 0.108075,
        0.314407, 2.353, 0.202258,
        0.137889, 2.2194, 0.296014,
        -0.091698, 1.83909, 0.433738,
        -0.090926, 1.85604, 0.49062,
        -0.293994, 2.02975, 0.364342,
        0.162207, 2.0782, 0.345205,
        0.292602, 2.14619, 0.185688,
        0.137889, 2.2194, 0.296014,
        0.225827, 1.51857, 0.487081,
        0.002692, 1.76816, 0.521814,
        0.004465, 1.75291, 0.473756,
        -0.165285, 1.78176, 0.501932,
        -0.091698, 1.83909, 0.433738,
        -0.237991, 1.68148, 0.423867,
        -0.237991, 1.68148, 0.423867,
        -0.288438, 1.78799, 0.361479,
        -0.239805, 1.70351, 0.546265,
        -0.239805, 1.70351, 0.546265,
        -0.165285, 1.78176, 0.501932,
        -0.237991, 1.68148, 0.423867,
        -0.093893, 2.65451, 0.451911,
        0.25862, 2.65456, 0.325279,
        -0.086287, 2.65478, 0.752353,
        0.3246, 2.65478, 0.4977,
        -0.086287, 2.65478, 0.752353,
        0.25862, 2.65456, 0.325279,
        0.25862, 2.65456, 0.325279,
        -0.093893, 2.65451, 0.451911,
        0.048949, 2.46167, 0.468283,
        -0.237991, 1.68148, 0.423867,
        -0.091698, 1.83909, 0.433738,
        -0.288438, 1.78799, 0.361479,
        -0.091698, 1.83909, 0.433738,
        -0.301181, 1.99019, 0.261753,
        -0.288438, 1.78799, 0.361479,
        -0.239805, 1.70351, 0.546265,
        -0.316932, 1.78074, 0.532351,
        -0.29581, 1.63218, 0.535183,
        -0.498179, 1.81403, 0.60294,
        -0.717955, 1.66106, 0.545202,
        -0.503905, 1.72159, 0.576858,
        -0.309657, 1.5985, 0.70464,
        -0.316932, 1.78074, 0.532351,
        -0.314614, 1.94253, 0.543137,
        0.314407, 2.353, 0.202258,
        0.25862, 2.65456, 0.325279,
        0.188292, 2.36426, 0.393553,
        -0.362659, 2.65478, 0.511129,
        -0.314614, 1.94253, 0.543137,
        -0.316932, 1.78074, 0.532351,
        -0.239805, 1.70351, 0.546265,
        -0.288438, 1.78799, 0.361479,
        -0.316932, 1.78074, 0.532351,
        -0.301181, 1.99019, 0.261753,
        -0.414039, 1.96479, 0.335722,
        -0.288438, 1.78799, 0.361479,
        -0.414039, 1.96479, 0.335722,
        -0.525198, 1.86331, 0.318034,
        -0.288438, 1.78799, 0.361479,
        -0.288438, 1.78799, 0.361479,
        -0.485306, 1.83373, 0.55456,
        -0.316932, 1.78074, 0.532351,
        -0.288438, 1.78799, 0.361479,
        -0.525198, 1.86331, 0.318034,
        -0.485306, 1.83373, 0.55456,
        -0.414039, 1.96479, 0.335722,
        -0.533894, 2.02525, 0.132421,
        -0.525198, 1.86331, 0.318034,
        0.188292, 2.36426, 0.393553,
        0.25862, 2.65456, 0.325279,
        0.048949, 2.46167, 0.468283,
        -0.239518, 2.38893, 0.412924,
        -0.093893, 2.65451, 0.451911,
        -0.337291, 2.6545, 0.295269,
        0.048949, 2.46167, 0.468283,
        -0.093893, 2.65451, 0.451911,
        -0.239518, 2.38893, 0.412924,
        -0.342164, 2.04799, 0.189165,
        -0.301181, 1.99019, 0.261753,
        -0.293994, 2.02975, 0.364342,
        -0.301181, 1.99019, 0.261753,
        -0.342164, 2.04799, 0.189165,
        -0.414039, 1.96479, 0.335722,
        -0.057391, 2.19686, 0.335033,
        0.137889, 2.2194, 0.296014,
        -0.062294, 2.27007, 0.413072,
        -0.062294, 2.27007, 0.413072,
        0.137889, 2.2194, 0.296014,
        0.188292, 2.36426, 0.393553,
        0.314407, 2.353, 0.202258,
        0.188292, 2.36426, 0.393553,
        0.137889, 2.2194, 0.296014,
        -0.062294, 2.27007, 0.413072,
        0.048949, 2.46167, 0.468283,
        -0.239518, 2.38893, 0.412924,
        -0.062294, 2.27007, 0.413072,
        0.188292, 2.36426, 0.393553,
        0.048949, 2.46167, 0.468283,
        -0.057391, 2.19686, 0.335033,
        0.162207, 2.0782, 0.345205,
        0.137889, 2.2194, 0.296014,
        -0.062294, 2.27007, 0.413072,
        -0.239518, 2.38893, 0.412924,
        -0.283446, 2.21185, 0.174021,
        -0.062294, 2.27007, 0.413072,
        -0.283446, 2.21185, 0.174021,
        -0.057391, 2.19686, 0.335033,
        -0.525198, 1.86331, 0.318034,
        -0.586022, 1.79995, -0.195568,
        -0.717955, 1.66106, 0.545202,
        -0.414039, 1.96479, 0.335722,
        -0.359218, 2.11243, 0.058425,
        -0.533894, 2.02525, 0.132421,
        -0.420062, 2.78765, 0.506001,
        -0.362659, 2.65478, 0.511129,
        -0.485306, 1.83373, 0.55456,
        -0.454533, 2.65478, -0.038305,
        -0.362659, 2.65478, 0.511129,
        -0.44476, 2.78765, 0.218816,
        -0.420062, 2.78765, 0.506001,
        -0.44476, 2.78765, 0.218816,
        -0.362659, 2.65478, 0.511129,
        -0.316932, 1.78074, 0.532351,
        -0.485306, 1.83373, 0.55456,
        -0.362659, 2.65478, 0.511129,
        -0.374941, 2.65423, 0.027047,
        -0.337291, 2.6545, 0.295269,
        -0.454533, 2.65478, -0.038305,
        -0.293994, 2.02975, 0.364342,
        -0.202723, 2.11932, 0.314336,
        -0.342164, 2.04799, 0.189165,
        -0.359218, 2.11243, 0.058425,
        -0.414039, 1.96479, 0.335722,
        -0.342164, 2.04799, 0.189165,
        -0.337291, 2.6545, 0.295269,
        -0.374941, 2.65423, 0.027047,
        -0.390342, 2.35849, 0.167515,
        -0.093893, 2.65451, 0.451911,
        -0.362659, 2.65478, 0.511129,
        -0.337291, 2.6545, 0.295269,
        -0.337291, 2.6545, 0.295269,
        -0.390342, 2.35849, 0.167515,
        -0.239518, 2.38893, 0.412924,
        -0.362659, 2.65478, 0.511129,
        -0.454533, 2.65478, -0.038305,
        -0.337291, 2.6545, 0.295269,
        -0.586022, 1.79995, -0.195568,
        -0.525198, 1.86331, 0.318034,
        -0.533894, 2.02525, 0.132421,
        -0.359218, 2.11243, 0.058425,
        -0.346569, 2.14292, -0.091773,
        -0.533894, 2.02525, 0.132421,
        -0.283446, 2.21185, 0.174021,
        -0.239518, 2.38893, 0.412924,
        -0.390342, 2.35849, 0.167515,
        -0.342164, 2.04799, 0.189165,
        -0.202723, 2.11932, 0.314336,
        -0.283446, 2.21185, 0.174021,
        -0.364628, 2.39648, -0.042177,
        -0.283446, 2.21185, 0.174021,
        -0.390342, 2.35849, 0.167515,
        -0.283446, 2.21185, 0.174021,
        -0.364628, 2.39648, -0.042177,
        -0.282673, 2.28584, -0.082626,
        -0.359218, 2.11243, 0.058425,
        -0.342164, 2.04799, 0.189165,
        -0.283446, 2.21185, 0.174021,
        -0.639326, 1.37066, 0.43949,
        -0.586022, 1.79995, -0.195568,
        -0.525265, 1.52522, 0.065047,
        -0.362659, 2.65478, 0.511129,
        -0.093893, 2.65451, 0.451911,
        -0.086287, 2.65478, 0.752353,
        -0.086287, 2.65478, 0.752353,
        -0.295765, 2.77557, 0.605709,
        -0.362659, 2.65478, 0.511129,
        -0.309657, 1.5985, 0.70464,
        -0.295765, 2.77557, 0.605709,
        -0.327736, 3.75001, 0.725072,
        0.044397, 2.78765, 0.754839,
        -0.295765, 2.77557, 0.605709,
        -0.086287, 2.65478, 0.752353,
        -0.086287, 2.65478, 0.752353,
        0.3246, 2.65478, 0.4977,
        0.044397, 2.78765, 0.754839,
        0.454816, 2.09145, -0.318427,
        0.443203, 1.34161, -0.484377,
        0.438943, 2.24413, -0.576504,
        0.438943, 2.24413, -0.576504,
        0.443852, 1.43365, -0.750468,
        0.315691, 1.38881, -0.801793,
        0.438943, 2.24413, -0.576504,
        0.315691, 1.38881, -0.801793,
        0.317383, 2.27296, -0.612935,
        0.443203, 1.34161, -0.484377,
        0.319964, 1.24804, -0.76591,
        0.443852, 1.43365, -0.750468,
        0.277396, 1.19205, -0.520881,
        0.319964, 1.24804, -0.76591,
        0.443203, 1.34161, -0.484377,
        -0.548669, 1.72739, -0.317551,
        -0.525265, 1.52522, 0.065047,
        -0.586022, 1.79995, -0.195568,
        0.617327, 1.89572, 0.222159,
        0.492213, 2.22584, -0.147775,
        0.421485, 2.24287, 0.13633,
        0.492213, 2.22584, -0.147775,
        0.617652, 1.99445, -0.180613,
        0.454816, 2.09145, -0.318427,
        0.617652, 1.99445, -0.180613,
        0.527511, 1.80265, -0.332537,
        0.454816, 2.09145, -0.318427,
        0.308817, 2.16624, -0.256431,
        0.492213, 2.22584, -0.147775,
        0.454816, 2.09145, -0.318427,
        -0.588818, 1.19455, -0.098705,
        -0.570925, 1.32643, 0.062932,
        -0.505891, 1.32629, -0.245374,
        -0.413448, 1.19405, -0.417496,
        -0.588818, 1.19455, -0.098705,
        -0.505891, 1.32629, -0.245374,
        0.234523, 2.15203, -0.249275,
        0.308817, 2.16624, -0.256431,
        0.320851, 2.32276, -0.272547,
        -0.525265, 1.52522, 0.065047,
        -0.505891, 1.32629, -0.245374,
        -0.570925, 1.32643, 0.062932,
        -0.525265, 1.52522, 0.065047,
        -0.438245, 1.54739, -0.259287,
        -0.505891, 1.32629, -0.245374,
        -0.438245, 1.54739, -0.259287,
        -0.525265, 1.52522, 0.065047,
        -0.548669, 1.72739, -0.317551,
        0.234523, 2.15203, -0.249275,
        0.297243, 1.92047, -0.293722,
        0.308817, 2.16624, -0.256431,
        0.42991, 1.78295, -0.344895,
        0.267605, 2.15049, -0.224465,
        0.308817, 2.16624, -0.256431,
        0.297243, 1.92047, -0.293722,
        0.234523, 2.15203, -0.249275,
        0.267605, 2.15049, -0.224465,
        0.617652, 1.99445, -0.180613,
        0.667339, 1.69182, -0.143933,
        0.527511, 1.80265, -0.332537,
        -0.321761, 1.66709, -0.354964,
        -0.427528, 1.67358, -0.391213,
        -0.347993, 1.32399, -0.444908,
        0.617652, 1.99445, -0.180613,
        0.90542, 1.38368, 0.145472,
        0.667339, 1.69182, -0.143933,
        -0.505891, 1.32629, -0.245374,
        -0.347993, 1.32399, -0.444908,
        -0.413448, 1.19405, -0.417496,
        -0.588818, 1.19455, -0.098705,
        -0.413448, 1.19405, -0.417496,
        -0.554146, 0.398637, -0.508518,
        0.527511, 1.80265, -0.332537,
        0.667339, 1.69182, -0.143933,
        0.583908, 1.52393, -0.182966,
        0.42991, 1.78295, -0.344895,
        0.527511, 1.80265, -0.332537,
        0.583908, 1.52393, -0.182966,
        -0.438245, 1.54739, -0.259287,
        -0.321761, 1.66709, -0.354964,
        -0.347993, 1.32399, -0.444908,
        0.443852, 1.43365, -0.750468,
        0.438943, 2.24413, -0.576504,
        0.443203, 1.34161, -0.484377,
        0.42991, 1.78295, -0.344895,
        0.454816, 2.09145, -0.318427,
        0.527511, 1.80265, -0.332537,
        -0.505891, 1.32629, -0.245374,
        -0.438245, 1.54739, -0.259287,
        -0.347993, 1.32399, -0.444908,
        0.454816, 2.09145, -0.318427,
        0.42991, 1.78295, -0.344895,
        0.443203, 1.34161, -0.484377,
        0.443203, 1.34161, -0.484377,
        0.42991, 1.78295, -0.344895,
        0.362241, 1.32682, -0.445788,
        0.308817, 2.16624, -0.256431,
        0.362241, 1.32682, -0.445788,
        0.42991, 1.78295, -0.344895,
        0.362241, 1.32682, -0.445788,
        0.308817, 2.16624, -0.256431,
        0.297243, 1.92047, -0.293722,
        -0.438276, 1.33908, -0.484441,
        -0.26576, 1.18813, -0.529253,
        -0.347993, 1.32399, -0.444908,
        0.267605, 2.15049, -0.224465,
        0.42991, 1.78295, -0.344895,
        0.297243, 1.92047, -0.293722,
        0.297243, 1.92047, -0.293722,
        0.42991, 1.78295, -0.344895,
        0.49016, 1.50713, -0.169815,
        0.297243, 1.92047, -0.293722,
        0.49016, 1.50713, -0.169815,
        0.362241, 1.32682, -0.445788,
        0.617327, 1.89572, 0.222159,
        0.617652, 1.99445, -0.180613,
        0.492213, 2.22584, -0.147775,
        -0.413448, 1.19405, -0.417496,
        -0.347993, 1.32399, -0.444908,
        -0.26576, 1.18813, -0.529253,
        0.421485, 2.24287, 0.13633,
        0.331385, 2.03492, 0.244024,
        0.464255, 1.99652, 0.304886,
        -0.413448, 1.19405, -0.417496,
        -0.26576, 1.18813, -0.529253,
        -0.554146, 0.398637, -0.508518,
        0.464255, 1.99652, 0.304886,
        0.617327, 1.89572, 0.222159,
        0.421485, 2.24287, 0.13633,
        0.663018, 1.73503, 0.146323,
        0.617652, 1.99445, -0.180613,
        0.617327, 1.89572, 0.222159,
        0.663018, 1.73503, 0.146323,
        0.90542, 1.38368, 0.145472,
        0.617652, 1.99445, -0.180613,
        0.45254, 1.77235, 0.33676,
        0.617327, 1.89572, 0.222159,
        0.464255, 1.99652, 0.304886,
        0.617327, 1.89572, 0.222159,
        0.45254, 1.77235, 0.33676,
        0.57444, 1.5651, 0.251757,
        0.701667, 1.35969, 0.334091,
        0.90542, 1.38368, 0.145472,
        0.663018, 1.73503, 0.146323,
        0.617327, 1.89572, 0.222159,
        0.57444, 1.5651, 0.251757,
        0.663018, 1.73503, 0.146323,
        0.45254, 1.77235, 0.33676,
        0.472039, 1.53487, 0.220635,
        0.57444, 1.5651, 0.251757,
        0.225827, 1.51857, 0.487081,
        0.004465, 1.75291, 0.473756,
        0.153542, 1.32647, 0.560164,
        0.464255, 1.99652, 0.304886,
        0.331385, 2.03492, 0.244024,
        0.45254, 1.77235, 0.33676,
        0.421485, 2.24287, 0.13633,
        0.306689, 2.29839, -0.035328,
        0.292602, 2.14619, 0.185688,
        0.45254, 1.77235, 0.33676,
        0.393627, 1.7003, 0.270716,
        0.472039, 1.53487, 0.220635,
        -0.201272, 1.53312, 0.490229,
        0.002692, 1.76816, 0.521814,
        -0.165285, 1.78176, 0.501932,
        -0.239805, 1.70351, 0.546265,
        -0.201272, 1.53312, 0.490229,
        -0.165285, 1.78176, 0.501932,
        0.331385, 2.03492, 0.244024,
        0.292602, 2.14619, 0.185688,
        0.237725, 1.98163, 0.419254,
        -0.175207, 1.32636, 0.542346,
        0.153542, 1.32647, 0.560164,
        0.004465, 1.75291, 0.473756,
        0.45254, 1.77235, 0.33676,
        0.331385, 2.03492, 0.244024,
        0.393627, 1.7003, 0.270716,
        0.004465, 1.75291, 0.473756,
        0.002692, 1.76816, 0.521814,
        -0.201272, 1.53312, 0.490229,
        0.393627, 1.7003, 0.270716,
        0.331385, 2.03492, 0.244024,
        0.344688, 1.55749, 0.397025,
        -0.175207, 1.32636, 0.542346,
        0.004465, 1.75291, 0.473756,
        -0.201272, 1.53312, 0.490229,
        -0.367702, 1.19392, 0.471056,
        -0.304046, 1.09335, 0.535291,
        -0.091631, 1.19468, 0.59565,
        -0.638155, 1.4277, 0.577113,
        -0.662108, 1.58482, 0.519928,
        -0.515202, 1.34746, 0.434119,
        -0.515202, 1.34746, 0.434119,
        -0.662108, 1.58482, 0.519928,
        -0.639326, 1.37066, 0.43949,
        -0.639326, 1.37066, 0.43949,
        -0.662108, 1.58482, 0.519928,
        -0.717955, 1.66106, 0.545202,
        -0.304046, 1.09335, 0.535291,
        -0.452684, 0.820578, 0.512472,
        -0.454462, 1.0951, 0.528772,
        -0.279715, 1.4565, 0.476285,
        -0.304046, 1.09335, 0.535291,
        -0.367592, 1.35381, 0.508445,
        -0.515202, 1.34746, 0.434119,
        -0.279715, 1.4565, 0.476285,
        -0.367592, 1.35381, 0.508445,
        -0.367592, 1.35381, 0.508445,
        -0.484314, 1.32771, 0.537522,
        -0.515202, 1.34746, 0.434119,
        -0.502103, 1.37068, 0.666539,
        -0.638155, 1.4277, 0.577113,
        -0.515202, 1.34746, 0.434119,
        -0.502103, 1.37068, 0.666539,
        -0.515202, 1.34746, 0.434119,
        -0.484314, 1.32771, 0.537522,
        -0.421933, 1.32752, 0.424077,
        -0.515202, 1.34746, 0.434119,
        -0.422737, 1.32743, 0.424034,
        -0.639326, 1.37066, 0.43949,
        -0.427837, 1.32548, 0.421721,
        -0.515202, 1.34746, 0.434119,
        -0.201272, 1.53312, 0.490229,
        -0.239805, 1.70351, 0.546265,
        -0.29581, 1.63218, 0.535183,
        -0.29581, 1.63218, 0.535183,
        -0.279715, 1.4565, 0.476285,
        -0.201272, 1.53312, 0.490229,
        -0.422737, 1.32743, 0.424034,
        -0.420807, 1.32752, 0.426934,
        -0.421933, 1.32752, 0.424077,
        -0.452684, 0.820578, 0.512472,
        -0.484314, 1.32771, 0.537522,
        -0.454462, 1.0951, 0.528772,
        -0.367592, 1.35381, 0.508445,
        -0.454462, 1.0951, 0.528772,
        -0.484314, 1.32771, 0.537522,
        -0.454462, 1.0951, 0.528772,
        -0.367592, 1.35381, 0.508445,
        -0.304046, 1.09335, 0.535291,
        -0.422737, 1.32743, 0.424034,
        -0.515202, 1.34746, 0.434119,
        -0.427837, 1.32548, 0.421721,
        -0.422737, 1.32743, 0.424034,
        -0.427837, 1.32548, 0.421721,
        -0.367702, 1.19392, 0.471056,
        -0.367702, 1.19392, 0.471056,
        -0.420807, 1.32752, 0.426934,
        -0.422737, 1.32743, 0.424034,
        -0.175207, 1.32636, 0.542346,
        -0.420807, 1.32752, 0.426934,
        -0.367702, 1.19392, 0.471056,
        -0.421933, 1.32752, 0.424077,
        -0.394872, 1.3322, 0.41186,
        -0.515202, 1.34746, 0.434119,
        -0.427837, 1.32548, 0.421721,
        -0.540252, 1.19426, 0.238241,
        -0.367702, 1.19392, 0.471056,
        -0.175207, 1.32636, 0.542346,
        -0.394872, 1.3322, 0.41186,
        -0.420807, 1.32752, 0.426934,
        -0.420807, 1.32752, 0.426934,
        -0.440635, 1.32754, 0.35026,
        -0.421933, 1.32752, 0.424077,
        -0.421933, 1.32752, 0.424077,
        -0.427837, 1.32548, 0.421721,
        -0.394872, 1.3322, 0.41186,
        -0.440635, 1.32754, 0.35026,
        -0.420807, 1.32752, 0.426934,
        -0.394872, 1.3322, 0.41186,
        -0.394872, 1.3322, 0.41186,
        -0.175207, 1.32636, 0.542346,
        -0.201272, 1.53312, 0.490229,
        -0.586022, 1.79995, -0.195568,
        -0.639326, 1.37066, 0.43949,
        -0.717955, 1.66106, 0.545202,
        -0.279715, 1.4565, 0.476285,
        -0.515202, 1.34746, 0.434119,
        -0.394872, 1.3322, 0.41186,
        -0.394872, 1.3322, 0.41186,
        -0.201272, 1.53312, 0.490229,
        -0.279715, 1.4565, 0.476285,
        -0.570925, 1.32643, 0.062932,
        -0.540252, 1.19426, 0.238241,
        -0.427837, 1.32548, 0.421721,
        -0.427837, 1.32548, 0.421721,
        -0.421933, 1.32752, 0.424077,
        -0.440635, 1.32754, 0.35026,
        -0.427837, 1.32548, 0.421721,
        -0.440635, 1.32754, 0.35026,
        -0.570925, 1.32643, 0.062932,
        -0.427837, 1.32548, 0.421721,
        -0.639326, 1.37066, 0.43949,
        -0.394872, 1.3322, 0.41186,
        -0.367702, 1.19392, 0.471056,
        -0.540252, 1.19426, 0.238241,
        -0.59418, 0.398427, 0.441528,
        -0.394872, 1.3322, 0.41186,
        -0.639326, 1.37066, 0.43949,
        -0.525265, 1.52522, 0.065047,
        -0.525265, 1.52522, 0.065047,
        -0.570925, 1.32643, 0.062932,
        -0.394872, 1.3322, 0.41186,
        -0.394872, 1.3322, 0.41186,
        -0.570925, 1.32643, 0.062932,
        -0.440635, 1.32754, 0.35026,
        -0.588818, 1.19455, -0.098705,
        -0.540252, 1.19426, 0.238241,
        -0.570925, 1.32643, 0.062932,
        -0.588818, 1.19455, -0.098705,
        -0.742437, 0.398614, 0.01076,
        -0.540252, 1.19426, 0.238241,
        -0.091631, 1.19468, 0.59565,
        0.329353, 1.19407, 0.507219,
        0.153542, 1.32647, 0.560164,
        -0.362659, 2.65478, 0.511129,
        -0.295765, 2.77557, 0.605709,
        -0.309657, 1.5985, 0.70464,
        -0.309657, 1.5985, 0.70464,
        -0.314614, 1.94253, 0.543137,
        -0.362659, 2.65478, 0.511129,
        -0.49463, 3.75001, 0.668714,
        -0.460802, 1.62396, 0.706217,
        -0.327736, 3.75001, 0.725072,
        -0.296962, 0.829619, 1.09969,
        -0.309657, 1.5985, 0.70464,
        -0.460802, 1.62396, 0.706217,
        -0.503905, 1.72159, 0.576858,
        -0.60049, 1.58155, 0.685446,
        -0.496337, 1.57845, 0.718983,
        -0.498179, 1.81403, 0.60294,
        -0.496337, 1.57845, 0.718983,
        -0.496336, 0.829619, 1.09966,
        -0.498179, 1.81403, 0.60294,
        -0.496336, 0.829619, 1.09966,
        -0.460802, 1.62396, 0.706217,
        -0.496336, 0.829619, 1.09966,
        -0.296962, 0.829619, 1.09969,
        -0.460802, 1.62396, 0.706217,
        -0.460802, 1.62396, 0.706217,
        -0.309657, 1.5985, 0.70464,
        -0.327736, 3.75001, 0.725072,
        -0.496337, 1.57845, 0.718983,
        -0.60049, 1.58155, 0.685446,
        -0.502103, 1.37068, 0.666539,
        -0.367702, 1.19392, 0.471056,
        -0.091631, 1.19468, 0.59565,
        -0.175207, 1.32636, 0.542346,
        0.267635, 0.398589, 0.704295,
        0.329353, 1.19407, 0.507219,
        -0.091631, 1.19468, 0.59565,
        -0.662108, 1.58482, 0.519928,
        -0.503905, 1.72159, 0.576858,
        -0.717955, 1.66106, 0.545202,
        -0.525198, 1.86331, 0.318034,
        -0.717955, 1.66106, 0.545202,
        -0.498179, 1.81403, 0.60294,
        -0.502103, 1.37068, 0.666539,
        -0.452684, 0.820578, 0.512472,
        -0.496336, 0.829619, 1.09966,
        -0.460802, 1.62396, 0.706217,
        -0.49463, 3.75001, 0.668714,
        -0.498179, 1.81403, 0.60294,
        -0.496337, 1.57845, 0.718983,
        -0.498179, 1.81403, 0.60294,
        -0.503905, 1.72159, 0.576858,
        -0.502103, 1.37068, 0.666539,
        -0.60049, 1.58155, 0.685446,
        -0.638155, 1.4277, 0.577113,
        -0.29581, 1.63218, 0.535183,
        -0.316932, 1.78074, 0.532351,
        -0.309657, 1.5985, 0.70464,
        -0.309657, 1.5985, 0.70464,
        -0.279715, 1.4565, 0.476285,
        -0.29581, 1.63218, 0.535183,
        -0.503905, 1.72159, 0.576858,
        -0.662108, 1.58482, 0.519928,
        -0.60049, 1.58155, 0.685446,
        -0.388809, 3.75001, 0.483566,
        -0.485306, 1.83373, 0.55456,
        -0.49463, 3.75001, 0.668714,
        -0.498179, 1.81403, 0.60294,
        -0.49463, 3.75001, 0.668714,
        -0.485306, 1.83373, 0.55456,
        -0.485306, 1.83373, 0.55456,
        -0.525198, 1.86331, 0.318034,
        -0.498179, 1.81403, 0.60294,
        0.153542, 1.32647, 0.560164,
        -0.175207, 1.32636, 0.542346,
        -0.091631, 1.19468, 0.59565,
        -0.484314, 1.32771, 0.537522,
        -0.452684, 0.820578, 0.512472,
        -0.502103, 1.37068, 0.666539,
        -0.309657, 1.5985, 0.70464,
        -0.296962, 0.829619, 1.09969,
        -0.279715, 1.4565, 0.476285,
        -0.296962, 0.829619, 1.09969,
        -0.304046, 1.09335, 0.535291,
        -0.279715, 1.4565, 0.476285,
        -0.60049, 1.58155, 0.685446,
        -0.662108, 1.58482, 0.519928,
        -0.638155, 1.4277, 0.577113,
        -0.296962, 0.829645, 0.585153,
        -0.304046, 1.09335, 0.535291,
        -0.296962, 0.829619, 1.09969
    ]);
    // prettier-ignore
    let normal_arr = Float32Array.from([
        -0.0091, -0.9268, -0.3755,
        -0.0091, -0.9268, -0.3755,
        -0.0091, -0.9268, -0.3755,
        0.1318, -0.9571, -0.2581,
        0.1318, -0.9571, -0.2581,
        0.1318, -0.9571, -0.2581,
        0.0955, -0.613, -0.7843,
        0.0955, -0.613, -0.7843,
        0.0955, -0.613, -0.7843,
        0.2602, 0.0941, -0.961,
        0.2602, 0.0941, -0.961,
        0.2602, 0.0941, -0.961,
        -0.1226, -0.0862, -0.9887,
        -0.1226, -0.0862, -0.9887,
        -0.1226, -0.0862, -0.9887,
        0.5911, 0.1924, -0.7833,
        0.5911, 0.1924, -0.7833,
        0.5911, 0.1924, -0.7833,
        0.8595, 0.1412, -0.4912,
        0.8595, 0.1412, -0.4912,
        0.8595, 0.1412, -0.4912,
        0.8748, 0.1594, -0.4576,
        0.8748, 0.1594, -0.4576,
        0.8748, 0.1594, -0.4576,
        0.9779, 0.1998, -0.061,
        0.9779, 0.1998, -0.061,
        0.9779, 0.1998, -0.061,
        0.7902, 0.2145, 0.574,
        0.7902, 0.2145, 0.574,
        0.7902, 0.2145, 0.574,
        0.969, 0.135, 0.2067,
        0.969, 0.135, 0.2067,
        0.969, 0.135, 0.2067,
        0.9768, 0.1218, 0.176,
        0.9768, 0.1218, 0.176,
        0.9768, 0.1218, 0.176,
        0.6515, 0.1344, 0.7467,
        0.6515, 0.1344, 0.7467,
        0.6515, 0.1344, 0.7467,
        -0.1921, 0.1832, -0.9641,
        -0.1921, 0.1832, -0.9641,
        -0.1921, 0.1832, -0.9641,
        0.2542, 0.184, -0.9495,
        0.2542, 0.184, -0.9495,
        0.2542, 0.184, -0.9495,
        -0.3623, 0.108, -0.9258,
        -0.3623, 0.108, -0.9258,
        -0.3623, 0.108, -0.9258,
        0.3612, 0.1436, -0.9214,
        0.3612, 0.1436, -0.9214,
        0.3612, 0.1436, -0.9214,
        -0.1545, -0.1854, -0.9704,
        -0.1545, -0.1854, -0.9704,
        -0.1545, -0.1854, -0.9704,
        -0.9317, 0.1334, -0.3378,
        -0.9317, 0.1334, -0.3378,
        -0.9317, 0.1334, -0.3378,
        -0.5113, 0.2089, 0.8337,
        -0.5113, 0.2089, 0.8337,
        -0.5113, 0.2089, 0.8337,
        -0.3419, 0.1657, 0.925,
        -0.3419, 0.1657, 0.925,
        -0.3419, 0.1657, 0.925,
        0.0493, -0.9986, 0.019,
        0.0493, -0.9986, 0.019,
        0.0493, -0.9986, 0.019,
        -0.5957, 0.0651, 0.8006,
        -0.5957, 0.0651, 0.8006,
        -0.5957, 0.0651, 0.8006,
        -0.9047, 0.2446, 0.3488,
        -0.9047, 0.2446, 0.3488,
        -0.9047, 0.2446, 0.3488,
        -0.9355, 0.1456, 0.322,
        -0.9355, 0.1456, 0.322,
        -0.9355, 0.1456, 0.322,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0.4249, -0.6298, 0.6502,
        0.4249, -0.6298, 0.6502,
        0.4249, -0.6298, 0.6502,
        -0.3968, 0.1974, 0.8964,
        -0.3968, 0.1974, 0.8964,
        -0.3968, 0.1974, 0.8964,
        -0.4243, 0.1906, 0.8852,
        -0.4243, 0.1906, 0.8852,
        -0.4243, 0.1906, 0.8852,
        0.0028, 0.1364, 0.9906,
        0.0028, 0.1364, 0.9906,
        0.0028, 0.1364, 0.9906,
        0.0006, 1, -0.0003,
        0.0006, 1, -0.0003,
        0.0006, 1, -0.0003,
        0.0003, 1, 0,
        0.0003, 1, 0,
        0.0003, 1, 0,
        0.0003, 1, 0,
        0.6021, 0.0644, -0.7958,
        0.6021, 0.0644, -0.7958,
        0.6021, 0.0644, -0.7958,
        0.0003, 1, 0.0001,
        0.0003, 1, 0.0001,
        0.0003, 1, 0.0001,
        0.0003, 1, 0.0002,
        0.0003, 1, 0.0002,
        0.0003, 1, 0.0002,
        -0.001, 1, -0.0003,
        -0.001, 1, -0.0003,
        -0.001, 1, -0.0003,
        -0.0006, 1, -0.0011,
        -0.0006, 1, -0.0011,
        -0.0006, 1, -0.0011,
        0.0001, 1, -0.0003,
        0.0001, 1, -0.0003,
        0.0001, 1, -0.0003,
        0.0002, 1, -0.0004,
        0.0002, 1, -0.0004,
        0.0002, 1, -0.0004,
        0.0001, 1, -0.0007,
        0.0001, 1, -0.0007,
        0.0001, 1, -0.0007,
        -0.0003, 1, 0.0002,
        -0.0003, 1, 0.0002,
        -0.0003, 1, 0.0002,
        -0.0007, 1, 0.0007,
        -0.0007, 1, 0.0007,
        -0.0007, 1, 0.0007,
        0.0003, 1, 0.0011,
        0.0003, 1, 0.0011,
        0.0003, 1, 0.0011,
        0.0007, 1, 0.0003,
        0.0007, 1, 0.0003,
        0.0007, 1, 0.0003,
        -0.0002, 1, 0.0006,
        -0.0002, 1, 0.0006,
        -0.0002, 1, 0.0006,
        -0.0002, 1, 0.0006,
        -0.0012, 1, -0.0004,
        -0.0012, 1, -0.0004,
        -0.0012, 1, -0.0004,
        -0.0003, 1, 0.0002,
        0.9925, 0.0924, 0.0803,
        0.9925, 0.0924, 0.0803,
        0.9925, 0.0924, 0.0803,
        0.8547, -0.1274, 0.5032,
        0.8547, -0.1274, 0.5032,
        0.8547, -0.1274, 0.5032,
        0.4666, -0.2303, -0.8539,
        0.4666, -0.2303, -0.8539,
        0.4666, -0.2303, -0.8539,
        0.8566, 0.1748, -0.4854,
        0.8566, 0.1748, -0.4854,
        0.8566, 0.1748, -0.4854,
        0.9721, -0.1496, -0.1808,
        0.9721, -0.1496, -0.1808,
        0.9721, -0.1496, -0.1808,
        -0.4176, 0.0569, -0.9068,
        -0.4176, 0.0569, -0.9068,
        -0.4176, 0.0569, -0.9068,
        -0.4625, -0.0534, -0.885,
        -0.4625, -0.0534, -0.885,
        -0.4625, -0.0534, -0.885,
        0.2781, 0.1368, -0.9508,
        0.2781, 0.1368, -0.9508,
        0.2781, 0.1368, -0.9508,
        0.7818, 0.0745, 0.6191,
        0.7818, 0.0745, 0.6191,
        0.7818, 0.0745, 0.6191,
        0.2735, 0.0276, 0.9615,
        0.2735, 0.0276, 0.9615,
        0.2735, 0.0276, 0.9615,
        0.1917, -0.1063, 0.9757,
        0.1917, -0.1063, 0.9757,
        0.1917, -0.1063, 0.9757,
        -0.3374, 0.0907, 0.937,
        -0.3374, 0.0907, 0.937,
        -0.3374, 0.0907, 0.937,
        -0.4827, -0.1175, 0.8678,
        -0.4827, -0.1175, 0.8678,
        -0.4827, -0.1175, 0.8678,
        -0.8624, 0.1542, 0.4822,
        -0.8624, 0.1542, 0.4822,
        -0.8624, 0.1542, 0.4822,
        -0.9478, -0.1728, 0.2679,
        -0.9478, -0.1728, 0.2679,
        -0.9478, -0.1728, 0.2679,
        -0.9478, 0.1728, -0.2679,
        -0.9478, 0.1728, -0.2679,
        -0.9478, 0.1728, -0.2679,
        -0.8838, -0.1072, -0.4553,
        -0.8838, -0.1072, -0.4553,
        -0.8838, -0.1072, -0.4553,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0.8334, 0.3285, -0.4444,
        0.8334, 0.3285, -0.4444,
        0.8334, 0.3285, -0.4444,
        -0.9992, 0.0185, 0.0364,
        -0.9992, 0.0185, 0.0364,
        -0.9992, 0.0185, 0.0364,
        0.6261, 0.1112, -0.7718,
        0.6261, 0.1112, -0.7718,
        0.6261, 0.1112, -0.7718,
        -0.0215, -0.5391, -0.8419,
        -0.0215, -0.5391, -0.8419,
        -0.0215, -0.5391, -0.8419,
        0.8594, -0.4941, -0.1318,
        0.8594, -0.4941, -0.1318,
        0.8594, -0.4941, -0.1318,
        0.8367, 0.0967, -0.539,
        0.8367, 0.0967, -0.539,
        0.8367, 0.0967, -0.539,
        -0.1233, -0.0861, -0.9886,
        -0.1233, -0.0861, -0.9886,
        -0.1233, -0.0861, -0.9886,
        0.6823, -0.129, -0.7196,
        0.6823, -0.129, -0.7196,
        0.6823, -0.129, -0.7196,
        0.8713, 0.3554, -0.3383,
        0.8713, 0.3554, -0.3383,
        0.8713, 0.3554, -0.3383,
        0.5449, -0.3655, 0.7547,
        0.5449, -0.3655, 0.7547,
        0.5449, -0.3655, 0.7547,
        0.2824, -0.9412, 0.1854,
        0.2824, -0.9412, 0.1854,
        0.2824, -0.9412, 0.1854,
        0.9179, -0.2643, 0.2959,
        0.9179, -0.2643, 0.2959,
        0.9179, -0.2643, 0.2959,
        0.8204, 0.2235, -0.5263,
        0.8204, 0.2235, -0.5263,
        0.8204, 0.2235, -0.5263,
        0.283, -0.9427, 0.1768,
        0.283, -0.9427, 0.1768,
        0.283, -0.9427, 0.1768,
        0.4262, -0.2113, -0.8796,
        0.4262, -0.2113, -0.8796,
        0.4262, -0.2113, -0.8796,
        0.001, 0.2089, -0.9779,
        0.001, 0.2089, -0.9779,
        0.001, 0.2089, -0.9779,
        -0.0081, -0.2086, -0.978,
        -0.0081, -0.2086, -0.978,
        -0.0081, -0.2086, -0.978,
        0.0009, -0.247, -0.969,
        0.0009, -0.247, -0.969,
        0.0009, -0.247, -0.969,
        -0.4455, 0.175, -0.878,
        -0.4455, 0.175, -0.878,
        -0.4455, 0.175, -0.878,
        0.3311, -0.9202, 0.2087,
        0.3311, -0.9202, 0.2087,
        0.3311, -0.9202, 0.2087,
        0.1299, -0.9447, 0.3011,
        0.1299, -0.9447, 0.3011,
        0.1299, -0.9447, 0.3011,
        -0.5272, -0.2224, -0.8201,
        -0.5272, -0.2224, -0.8201,
        -0.5272, -0.2224, -0.8201,
        -0.6092, 0.0013, -0.793,
        -0.6092, 0.0013, -0.793,
        -0.6092, 0.0013, -0.793,
        0.1684, 0.4548, 0.8745,
        0.1684, 0.4548, 0.8745,
        0.1684, 0.4548, 0.8745,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        -0.9906, 0.046, 0.1289,
        -0.9906, 0.046, 0.1289,
        -0.9906, 0.046, 0.1289,
        -0.9993, 0.0028, 0.0365,
        -0.9993, 0.0028, 0.0365,
        -0.9993, 0.0028, 0.0365,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0.9676, 0.0617, -0.2447,
        0.9676, 0.0617, -0.2447,
        0.9676, 0.0617, -0.2447,
        0.623, -0.0384, -0.7813,
        0.623, -0.0384, -0.7813,
        0.623, -0.0384, -0.7813,
        0.0585, -0.0895, 0.9943,
        0.0585, -0.0895, 0.9943,
        0.0585, -0.0895, 0.9943,
        0.0097, -0.0575, 0.9983,
        0.0097, -0.0575, 0.9983,
        0.0097, -0.0575, 0.9983,
        0.0202, 0.9952, 0.0954,
        0.0202, 0.9952, 0.0954,
        0.0202, 0.9952, 0.0954,
        -0.3498, 0.2575, 0.9007,
        -0.3498, 0.2575, 0.9007,
        -0.3498, 0.2575, 0.9007,
        0.1261, -0.1254, 0.9841,
        0.1261, -0.1254, 0.9841,
        0.1261, -0.1254, 0.9841,
        0, 1, 0,
        0.0217, 0.9972, 0.0709,
        0.0217, 0.9972, 0.0709,
        0.0217, 0.9972, 0.0709,
        -0.0926, 0.9944, -0.0509,
        -0.0926, 0.9944, -0.0509,
        -0.0926, 0.9944, -0.0509,
        -0.6204, 0.1096, 0.7766,
        -0.6204, 0.1096, 0.7766,
        -0.6204, 0.1096, 0.7766,
        0.1943, 0.1875, 0.9629,
        0.1943, 0.1875, 0.9629,
        0.1943, 0.1875, 0.9629,
        0.1646, 0.2468, 0.955,
        0.1646, 0.2468, 0.955,
        0.1646, 0.2468, 0.955,
        -0.2369, 0.2315, 0.9436,
        -0.2369, 0.2315, 0.9436,
        -0.2369, 0.2315, 0.9436,
        -0.3052, -0.2413, 0.9212,
        -0.3052, -0.2413, 0.9212,
        -0.3052, -0.2413, 0.9212,
        0.4809, -0.631, 0.6088,
        0.4809, -0.631, 0.6088,
        0.4809, -0.631, 0.6088,
        0.4551, -0.0179, 0.8903,
        0.4551, -0.0179, 0.8903,
        0.4551, -0.0179, 0.8903,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0.1341, -0.9409, 0.3112,
        0.1341, -0.9409, 0.3112,
        0.1341, -0.9409, 0.3112,
        0.8707, 0.1143, 0.4783,
        0.8707, 0.1143, 0.4783,
        0.8707, 0.1143, 0.4783,
        0.6242, -0.0093, 0.7812,
        0.6242, -0.0093, 0.7812,
        0.6242, -0.0093, 0.7812,
        -0.4685, 0.0758, 0.8802,
        -0.4685, 0.0758, 0.8802,
        -0.4685, 0.0758, 0.8802,
        -0.7792, 0.1392, 0.6112,
        -0.7792, 0.1392, 0.6112,
        -0.7792, 0.1392, 0.6112,
        0.078, -0.6423, 0.7625,
        0.078, -0.6423, 0.7625,
        0.078, -0.6423, 0.7625,
        0.0587, -0.0468, 0.9972,
        0.0587, -0.0468, 0.9972,
        0.0587, -0.0468, 0.9972,
        -0.0564, 0.9973, 0.0478,
        -0.0564, 0.9973, 0.0478,
        -0.0564, 0.9973, 0.0478,
        0.4168, -0.0085, 0.909,
        0.4168, -0.0085, 0.909,
        0.4168, -0.0085, 0.909,
        -0.7098, -0.0397, 0.7033,
        -0.7098, -0.0397, 0.7033,
        -0.7098, -0.0397, 0.7033,
        0.8283, -0.4624, -0.3164,
        0.8283, -0.4624, -0.3164,
        0.8283, -0.4624, -0.3164,
        0.9255, -0.3577, 0.1244,
        0.9255, -0.3577, 0.1244,
        0.9255, -0.3577, 0.1244,
        -0.4572, 0.0722, -0.8864,
        -0.4572, 0.0722, -0.8864,
        -0.4572, 0.0722, -0.8864,
        0.6555, 0.6551, 0.3757,
        0.6555, 0.6551, 0.3757,
        0.6555, 0.6551, 0.3757,
        0.8053, -0.1185, 0.5809,
        0.8053, -0.1185, 0.5809,
        0.8053, -0.1185, 0.5809,
        0.3851, 0.922, 0.0406,
        0.3851, 0.922, 0.0406,
        0.3851, 0.922, 0.0406,
        0.8488, -0.0376, 0.5274,
        0.8488, -0.0376, 0.5274,
        0.8488, -0.0376, 0.5274,
        0.8532, 0.2692, 0.4467,
        0.8532, 0.2692, 0.4467,
        0.8532, 0.2692, 0.4467,
        0.8628, 0.4566, 0.2171,
        0.8628, 0.4566, 0.2171,
        0.8628, 0.4566, 0.2171,
        0.7328, 0.6713, 0.1111,
        0.7328, 0.6713, 0.1111,
        0.7328, 0.6713, 0.1111,
        0.4166, 0.0614, 0.907,
        0.4166, 0.0614, 0.907,
        0.4166, 0.0614, 0.907,
        0.7699, 0.254, 0.5854,
        0.7699, 0.254, 0.5854,
        0.7699, 0.254, 0.5854,
        0.3569, 0.5938, -0.7211,
        0.3569, 0.5938, -0.7211,
        0.3569, 0.5938, -0.7211,
        0.5942, 0.0437, 0.8031,
        0.5942, 0.0437, 0.8031,
        0.5942, 0.0437, 0.8031,
        0.0248, 0.8582, -0.5127,
        0.0248, 0.8582, -0.5127,
        0.0248, 0.8582, -0.5127,
        0.6069, 0.0727, 0.7914,
        0.6069, 0.0727, 0.7914,
        0.6069, 0.0727, 0.7914,
        0.9513, -0.0078, -0.3082,
        0.9513, -0.0078, -0.3082,
        0.9513, -0.0078, -0.3082,
        0.5493, 0.447, 0.706,
        0.5493, 0.447, 0.706,
        0.5493, 0.447, 0.706,
        0.9988, -0.0479, -0.0096,
        0.9988, -0.0479, -0.0096,
        0.9988, -0.0479, -0.0096,
        0.9879, -0.0786, -0.1338,
        0.9879, -0.0786, -0.1338,
        0.9879, -0.0786, -0.1338,
        0.983, 0.1281, 0.1318,
        0.983, 0.1281, 0.1318,
        0.983, 0.1281, 0.1318,
        -0.0008, 0.2077, -0.9782,
        -0.0008, 0.2077, -0.9782,
        -0.0008, 0.2077, -0.9782,
        -0.0072, 0.4623, 0.8867,
        -0.0072, 0.4623, 0.8867,
        -0.0072, 0.4623, 0.8867,
        0.9578, -0.2617, -0.1188,
        0.9578, -0.2617, -0.1188,
        0.9578, -0.2617, -0.1188,
        -0.3251, 0.203, -0.9236,
        -0.3251, 0.203, -0.9236,
        -0.3251, 0.203, -0.9236,
        0.9755, 0.1473, 0.1636,
        0.9755, 0.1473, 0.1636,
        0.9755, 0.1473, 0.1636,
        -0.6647, -0.7456, -0.0472,
        -0.6647, -0.7456, -0.0472,
        -0.6647, -0.7456, -0.0472,
        -0.8131, -0.556, -0.1723,
        -0.8131, -0.556, -0.1723,
        -0.8131, -0.556, -0.1723,
        -0.0001, -0.9571, -0.2898,
        -0.0001, -0.9571, -0.2898,
        -0.0001, -0.9571, -0.2898,
        -0.0281, -0.9704, -0.24,
        -0.0281, -0.9704, -0.24,
        -0.0281, -0.9704, -0.24,
        0.0499, -0.9755, -0.2142,
        0.0499, -0.9755, -0.2142,
        0.0499, -0.9755, -0.2142,
        0.0012, 0.5981, -0.8014,
        0.0012, 0.5981, -0.8014,
        0.0012, 0.5981, -0.8014,
        -0.0011, 0.606, -0.7955,
        -0.0011, 0.606, -0.7955,
        -0.0011, 0.606, -0.7955,
        -0.3702, 0.595, -0.7133,
        -0.3702, 0.595, -0.7133,
        -0.3702, 0.595, -0.7133,
        -0.7386, 0.4115, -0.534,
        -0.7386, 0.4115, -0.534,
        -0.7386, 0.4115, -0.534,
        -0.427, 0.897, 0.114,
        -0.427, 0.897, 0.114,
        -0.427, 0.897, 0.114,
        -0.1182, 0.1012, -0.9878,
        -0.1182, 0.1012, -0.9878,
        -0.1182, 0.1012, -0.9878,
        -0.2621, -0.0057, -0.965,
        -0.2621, -0.0057, -0.965,
        -0.2621, -0.0057, -0.965,
        -0.9102, 0.1951, -0.3654,
        -0.9102, 0.1951, -0.3654,
        -0.9102, 0.1951, -0.3654,
        -0.996, 0.0821, 0.0364,
        -0.996, 0.0821, 0.0364,
        -0.996, 0.0821, 0.0364,
        -0.2976, 0.9266, -0.2297,
        -0.2976, 0.9266, -0.2297,
        -0.2976, 0.9266, -0.2297,
        -0.2674, 0.9577, -0.1066,
        -0.2674, 0.9577, -0.1066,
        -0.2674, 0.9577, -0.1066,
        -0.9844, 0.156, 0.0817,
        -0.9844, 0.156, 0.0817,
        -0.9844, 0.156, 0.0817,
        -0.3537, 0.4914, -0.7959,
        -0.3537, 0.4914, -0.7959,
        -0.3537, 0.4914, -0.7959,
        0.0132, 0.9747, 0.2231,
        0.0132, 0.9747, 0.2231,
        0.0132, 0.9747, 0.2231,
        0.0017, 0.9684, 0.2495,
        0.0017, 0.9684, 0.2495,
        0.0017, 0.9684, 0.2495,
        0.0072, 0.4682, 0.8836,
        0.0072, 0.4682, 0.8836,
        0.0072, 0.4682, 0.8836,
        -0.9946, 0.0335, -0.0987,
        -0.9946, 0.0335, -0.0987,
        -0.9946, 0.0335, -0.0987,
        0.0051, 0.3365, 0.9417,
        0.0051, 0.3365, 0.9417,
        0.0051, 0.3365, 0.9417,
        -0.0901, 0.2003, -0.9756,
        -0.0901, 0.2003, -0.9756,
        -0.0901, 0.2003, -0.9756,
        -0.913, 0.4078, 0.0059,
        -0.913, 0.4078, 0.0059,
        -0.913, 0.4078, 0.0059,
        0.7112, 0.6772, -0.1886,
        0.7112, 0.6772, -0.1886,
        0.7112, 0.6772, -0.1886,
        0.003, 0.1336, 0.991,
        0.003, 0.1336, 0.991,
        0.003, 0.1336, 0.991,
        0.4328, 0.3334, -0.8375,
        0.4328, 0.3334, -0.8375,
        0.4328, 0.3334, -0.8375,
        0.8065, 0.0886, -0.5846,
        0.8065, 0.0886, -0.5846,
        0.8065, 0.0886, -0.5846,
        0.4539, -0.0772, -0.8877,
        0.4539, -0.0772, -0.8877,
        0.4539, -0.0772, -0.8877,
        0.0211, -0.9997, -0.01,
        0.0211, -0.9997, -0.01,
        0.0211, -0.9997, -0.01,
        0.0679, -0.9888, -0.1328,
        0.0679, -0.9888, -0.1328,
        0.0679, -0.9888, -0.1328,
        0.2971, -0.0637, -0.9527,
        0.2971, -0.0637, -0.9527,
        0.2971, -0.0637, -0.9527,
        0.6621, 0.1019, -0.7424,
        0.6621, 0.1019, -0.7424,
        0.6621, 0.1019, -0.7424,
        0.7873, -0.0339, -0.6156,
        0.7873, -0.0339, -0.6156,
        0.7873, -0.0339, -0.6156,
        -0.9654, 0.2596, -0.0249,
        -0.9654, 0.2596, -0.0249,
        -0.9654, 0.2596, -0.0249,
        -0.8968, 0.2011, -0.3942,
        -0.8968, 0.2011, -0.3942,
        -0.8968, 0.2011, -0.3942,
        0.234, 0.6142, -0.7536,
        0.234, 0.6142, -0.7536,
        0.234, 0.6142, -0.7536,
        -0.5908, -0.3104, -0.7447,
        -0.5908, -0.3104, -0.7447,
        -0.5908, -0.3104, -0.7447,
        -0.998, -0.0525, 0.0347,
        -0.998, -0.0525, 0.0347,
        -0.998, -0.0525, 0.0347,
        -0.9267, -0.073, 0.3686,
        -0.9267, -0.073, 0.3686,
        -0.9267, -0.073, 0.3686,
        -0.5982, -0.5543, -0.5788,
        -0.5982, -0.5543, -0.5788,
        -0.5982, -0.5543, -0.5788,
        -0.4224, -0.2307, 0.8766,
        -0.4224, -0.2307, 0.8766,
        -0.4224, -0.2307, 0.8766,
        0.186, -0.7175, -0.6712,
        0.186, -0.7175, -0.6712,
        0.186, -0.7175, -0.6712,
        0.5729, 0.3473, -0.7424,
        0.5729, 0.3473, -0.7424,
        0.5729, 0.3473, -0.7424,
        0.65, 0.3969, 0.6481,
        0.65, 0.3969, 0.6481,
        0.65, 0.3969, 0.6481,
        0.7846, 0.3957, -0.4774,
        0.7846, 0.3957, -0.4774,
        0.7846, 0.3957, -0.4774,
        -0.589, 0.6912, -0.4188,
        -0.589, 0.6912, -0.4188,
        -0.589, 0.6912, -0.4188,
        0.7986, 0.3828, -0.4644,
        0.7986, 0.3828, -0.4644,
        0.7986, 0.3828, -0.4644,
        0.7764, 0.6064, 0.1717,
        0.7764, 0.6064, 0.1717,
        0.7764, 0.6064, 0.1717,
        -0.0112, -0.9999, -0.013,
        -0.0112, -0.9999, -0.013,
        -0.0112, -0.9999, -0.013,
        0.347, 0.7263, 0.5933,
        0.347, 0.7263, 0.5933,
        0.347, 0.7263, 0.5933,
        0.4813, 0.2796, 0.8307,
        0.4813, 0.2796, 0.8307,
        0.4813, 0.2796, 0.8307,
        0.72, -0.67, 0.1811,
        0.72, -0.67, 0.1811,
        0.72, -0.67, 0.1811,
        0.1519, 0.36, 0.9205,
        0.1519, 0.36, 0.9205,
        0.1519, 0.36, 0.9205,
        -0.806, 0.3195, -0.4983,
        -0.806, 0.3195, -0.4983,
        -0.806, 0.3195, -0.4983,
        -0.7408, 0.3672, -0.5625,
        -0.7408, 0.3672, -0.5625,
        -0.7408, 0.3672, -0.5625,
        0.0641, 0.5739, 0.8164,
        0.0641, 0.5739, 0.8164,
        0.0641, 0.5739, 0.8164,
        -0.0649, 0.536, 0.8417,
        -0.0649, 0.536, 0.8417,
        -0.0649, 0.536, 0.8417,
        -0.4825, 0.2937, -0.8252,
        -0.4825, 0.2937, -0.8252,
        -0.4825, 0.2937, -0.8252,
        -0.7069, -0.6419, 0.2971,
        -0.7069, -0.6419, 0.2971,
        -0.7069, -0.6419, 0.2971,
        -0.5596, 0.0376, 0.8279,
        -0.5596, 0.0376, 0.8279,
        -0.5596, 0.0376, 0.8279,
        -0.2725, 0.2638, 0.9253,
        -0.2725, 0.2638, 0.9253,
        -0.2725, 0.2638, 0.9253,
        -0.7259, 0.6872, 0.0303,
        -0.7259, 0.6872, 0.0303,
        -0.7259, 0.6872, 0.0303,
        -0.3275, 0.1466, 0.9334,
        -0.3275, 0.1466, 0.9334,
        -0.3275, 0.1466, 0.9334,
        -0.0092, -0.9999, -0.0111,
        -0.0092, -0.9999, -0.0111,
        -0.0092, -0.9999, -0.0111,
        -0.6392, -0.0499, -0.7674,
        -0.6392, -0.0499, -0.7674,
        -0.6392, -0.0499, -0.7674,
        -0.6884, -0.0681, -0.7222,
        -0.6884, -0.0681, -0.7222,
        -0.6884, -0.0681, -0.7222,
        -0.004, -1, -0.0036,
        -0.004, -1, -0.0036,
        -0.004, -1, -0.0036,
        -0.9924, -0.0067, -0.1229,
        -0.9924, -0.0067, -0.1229,
        -0.9924, -0.0067, -0.1229,
        -0.8273, 0.1146, -0.5499,
        -0.8273, 0.1146, -0.5499,
        -0.8273, 0.1146, -0.5499,
        -0.4259, 0.6232, 0.656,
        -0.4259, 0.6232, 0.656,
        -0.4259, 0.6232, 0.656,
        -0.0813, 0.5599, 0.8246,
        -0.0813, 0.5599, 0.8246,
        -0.0813, 0.5599, 0.8246,
        -0.0824, 0.565, 0.8209,
        -0.0824, 0.565, 0.8209,
        -0.0824, 0.565, 0.8209,
        0.7167, 0.6596, -0.2263,
        0.7167, 0.6596, -0.2263,
        0.7167, 0.6596, -0.2263,
        0.0723, 0.2215, 0.9725,
        0.0723, 0.2215, 0.9725,
        0.0723, 0.2215, 0.9725,
        0.7253, 0.6573, -0.2047,
        0.7253, 0.6573, -0.2047,
        0.7253, 0.6573, -0.2047,
        0.0945, 0.2416, 0.9658,
        0.0945, 0.2416, 0.9658,
        0.0945, 0.2416, 0.9658,
        0.7129, -0.6487, 0.2664,
        0.7129, -0.6487, 0.2664,
        0.7129, -0.6487, 0.2664,
        0.7081, 0.6783, -0.1963,
        0.7081, 0.6783, -0.1963,
        0.7081, 0.6783, -0.1963,
        -0.859, 0.4926, 0.1394,
        -0.859, 0.4926, 0.1394,
        -0.859, 0.4926, 0.1394,
        0.5861, 0.0764, 0.8066,
        0.5861, 0.0764, 0.8066,
        0.5861, 0.0764, 0.8066,
        -0.5336, 0.8174, 0.217,
        -0.5336, 0.8174, 0.217,
        -0.5336, 0.8174, 0.217,
        0.1197, -0.0311, 0.9923,
        0.1197, -0.0311, 0.9923,
        0.1197, -0.0311, 0.9923,
        0.7102, 0.6862, -0.1576,
        0.7102, 0.6862, -0.1576,
        0.7102, 0.6862, -0.1576,
        -0.6973, -0.2744, -0.6622,
        -0.6973, -0.2744, -0.6622,
        -0.6973, -0.2744, -0.6622,
        0.0945, 0.2416, 0.9658,
        0.5754, 0.4018, 0.7124,
        0.5754, 0.4018, 0.7124,
        0.5754, 0.4018, 0.7124,
        -0.572, 0.4034, 0.7142,
        -0.572, 0.4034, 0.7142,
        -0.572, 0.4034, 0.7142,
        -0.0677, 0.0416, 0.9968,
        -0.0677, 0.0416, 0.9968,
        -0.0677, 0.0416, 0.9968,
        -0.0007, -0.0475, 0.9989,
        -0.0007, -0.0475, 0.9989,
        -0.0007, -0.0475, 0.9989,
        -0.1965, 0.3344, 0.9217,
        -0.1965, 0.3344, 0.9217,
        -0.1965, 0.3344, 0.9217,
        -0.0947, 0.2419, 0.9657,
        -0.0947, 0.2419, 0.9657,
        -0.0947, 0.2419, 0.9657,
        -0.0722, 0.2209, 0.9726,
        -0.0722, 0.2209, 0.9726,
        -0.0722, 0.2209, 0.9726,
        -0.7081, 0.6799, -0.1906,
        -0.7081, 0.6799, -0.1906,
        -0.7081, 0.6799, -0.1906,
        -0.0947, 0.2418, 0.9657,
        -0.0947, 0.2418, 0.9657,
        -0.0947, 0.2418, 0.9657,
        -0.708, 0.6793, -0.1929,
        -0.708, 0.6793, -0.1929,
        -0.708, 0.6793, -0.1929,
        0.669, -0.6899, 0.2766,
        0.669, -0.6899, 0.2766,
        0.669, -0.6899, 0.2766,
        -0.7078, -0.6743, 0.2106,
        -0.7078, -0.6743, 0.2106,
        -0.7078, -0.6743, 0.2106,
        0.6479, 0.3477, 0.6778,
        0.6479, 0.3477, 0.6778,
        0.6479, 0.3477, 0.6778,
        -0.7195, -0.6691, 0.1858,
        -0.7195, -0.6691, 0.1858,
        -0.7195, -0.6691, 0.1858,
        -0.7115, 0.6731, -0.2019,
        -0.7115, 0.6731, -0.2019,
        -0.7115, 0.6731, -0.2019,
        0.915, 0.3993, -0.0583,
        0.915, 0.3993, -0.0583,
        0.915, 0.3993, -0.0583,
        -0.7533, 0.6453, -0.1273,
        -0.7533, 0.6453, -0.1273,
        -0.7533, 0.6453, -0.1273,
        0.0004, -1, 0.0009,
        0.0004, -1, 0.0009,
        0.0004, -1, 0.0009,
        0.0006, -1, 0.001,
        0.0006, -1, 0.001,
        0.0006, -1, 0.001,
        0.321, 0.3136, 0.8936,
        0.321, 0.3136, 0.8936,
        0.321, 0.3136, 0.8936,
        -0.3983, 0.3158, 0.8612,
        -0.3983, 0.3158, 0.8612,
        -0.3983, 0.3158, 0.8612,
        -0.4046, 0.3839, 0.83,
        -0.4046, 0.3839, 0.83,
        -0.4046, 0.3839, 0.83,
        -0.1848, -0.0075, 0.9827,
        -0.1848, -0.0075, 0.9827,
        -0.1848, -0.0075, 0.9827,
        -0.0666, -0.2671, 0.9614,
        -0.0666, -0.2671, 0.9614,
        -0.0666, -0.2671, 0.9614,
        0.9985, -0.0107, -0.0535,
        0.9985, -0.0107, -0.0535,
        0.9985, -0.0107, -0.0535,
        0.8308, -0.0715, 0.5519,
        0.8308, -0.0715, 0.5519,
        0.8308, -0.0715, 0.5519,
        0.8063, 0.0278, -0.5909,
        0.8063, 0.0278, -0.5909,
        0.8063, 0.0278, -0.5909,
        0.687, 0.7121, 0.1448,
        0.687, 0.7121, 0.1448,
        0.687, 0.7121, 0.1448,
        0.429, 0.4212, 0.7991,
        0.429, 0.4212, 0.7991,
        0.429, 0.4212, 0.7991,
        -0.1744, 0.0195, 0.9845,
        -0.1744, 0.0195, 0.9845,
        -0.1744, 0.0195, 0.9845,
        0.31, 0.9463, 0.0918,
        0.31, 0.9463, 0.0918,
        0.31, 0.9463, 0.0918,
        0.2907, 0.9542, 0.0703,
        0.2907, 0.9542, 0.0703,
        0.2907, 0.9542, 0.0703,
        -0.6146, 0.5799, 0.5348,
        -0.6146, 0.5799, 0.5348,
        -0.6146, 0.5799, 0.5348,
        0.5125, 0.077, 0.8552,
        0.5125, 0.077, 0.8552,
        0.5125, 0.077, 0.8552,
        -0.5332, 0.1708, 0.8286,
        -0.5332, 0.1708, 0.8286,
        -0.5332, 0.1708, 0.8286,
        -0.1767, -0.0474, 0.9831,
        -0.1767, -0.0474, 0.9831,
        -0.1767, -0.0474, 0.9831,
        -0.9022, -0.3775, 0.2088,
        -0.9022, -0.3775, 0.2088,
        -0.9022, -0.3775, 0.2088,
        0.1769, 0.8162, 0.5501,
        0.1769, 0.8162, 0.5501,
        0.1769, 0.8162, 0.5501,
        0.2163, -0.7052, 0.6752,
        0.2163, -0.7052, 0.6752,
        0.2163, -0.7052, 0.6752,
        0.2843, -0.6016, 0.7465,
        0.2843, -0.6016, 0.7465,
        0.2843, -0.6016, 0.7465,
        0.6771, -0.5583, 0.4793,
        0.6771, -0.5583, 0.4793,
        0.6771, -0.5583, 0.4793,
        -0.1355, -0.2009, 0.9702,
        -0.1355, -0.2009, 0.9702,
        -0.1355, -0.2009, 0.9702,
        0.214, -0.3832, 0.8985,
        0.214, -0.3832, 0.8985,
        0.214, -0.3832, 0.8985,
        0.145, 0.3477, 0.9263,
        0.145, 0.3477, 0.9263,
        0.145, 0.3477, 0.9263,
        -0.4528, -0.6744, 0.5832,
        -0.4528, -0.6744, 0.5832,
        -0.4528, -0.6744, 0.5832,
        -0.4642, -0.6603, 0.5903,
        -0.4642, -0.6603, 0.5903,
        -0.4642, -0.6603, 0.5903,
        -0.7236, 0.6902, 0.0005,
        -0.7236, 0.6902, 0.0005,
        -0.7236, 0.6902, 0.0005,
        -0.2605, 0.8726, 0.4131,
        -0.2605, 0.8726, 0.4131,
        -0.2605, 0.8726, 0.4131,
        -0.0246, -0.0491, -0.9985,
        -0.0246, -0.0491, -0.9985,
        -0.0246, -0.0491, -0.9985,
        -0.9576, -0.2394, 0.1601,
        -0.9576, -0.2394, 0.1601,
        -0.9576, -0.2394, 0.1601,
        -0.9162, -0.3928, 0.0788,
        -0.9162, -0.3928, 0.0788,
        -0.9162, -0.3928, 0.0788,
        -0.1404, -0.0314, -0.9896,
        -0.1404, -0.0314, -0.9896,
        -0.1404, -0.0314, -0.9896,
        -0.0087, -1, 0.0022,
        -0.0087, -1, 0.0022,
        -0.0087, -1, 0.0022,
        -0.6071, 0.7557, 0.2457,
        -0.6071, 0.7557, 0.2457,
        -0.6071, 0.7557, 0.2457,
        -0.1069, 0.8863, 0.4507,
        -0.1069, 0.8863, 0.4507,
        -0.1069, 0.8863, 0.4507,
        -0.9835, 0.1167, 0.1379,
        -0.9835, 0.1167, 0.1379,
        -0.9835, 0.1167, 0.1379,
        -0.0007, -1, 0.0012,
        -0.0007, -1, 0.0012,
        -0.0007, -1, 0.0012,
        -0.8452, -0.0768, 0.529,
        -0.8452, -0.0768, 0.529,
        -0.8452, -0.0768, 0.529,
        -0.0047, -1, 0.0008,
        -0.0047, -1, 0.0008,
        -0.0047, -1, 0.0008,
        -0.9915, 0.0713, 0.1086,
        -0.9915, 0.0713, 0.1086,
        -0.9915, 0.0713, 0.1086,
        -0.3892, 0.9086, 0.1517,
        -0.3892, 0.9086, 0.1517,
        -0.3892, 0.9086, 0.1517,
        -0.7109, -0.4961, 0.4985,
        -0.7109, -0.4961, 0.4985,
        -0.7109, -0.4961, 0.4985,
        -0.7181, 0.3147, 0.6207,
        -0.7181, 0.3147, 0.6207,
        -0.7181, 0.3147, 0.6207,
        -0.7871, -0.5828, -0.2021,
        -0.7871, -0.5828, -0.2021,
        -0.7871, -0.5828, -0.2021,
        -0.8203, -0.5489, -0.1607,
        -0.8203, -0.5489, -0.1607,
        -0.8203, -0.5489, -0.1607,
        -0.893, 0.3465, 0.2873,
        -0.893, 0.3465, 0.2873,
        -0.893, 0.3465, 0.2873,
        -0.6858, -0.575, -0.4462,
        -0.6858, -0.575, -0.4462,
        -0.6858, -0.575, -0.4462,
        -0.0008, -1, 0.0009,
        -0.0008, -1, 0.0009,
        -0.0008, -1, 0.0009,
        -0.6414, -0.2202, 0.7349,
        -0.6414, -0.2202, 0.7349,
        -0.6414, -0.2202, 0.7349,
        0.9774, 0.0062, 0.2111,
        0.9774, 0.0062, 0.2111,
        0.9774, 0.0062, 0.2111,
        -0.3849, 0.3627, 0.8487,
        -0.3849, 0.3627, 0.8487,
        -0.3849, 0.3627, 0.8487,
        0.4647, -0.4711, 0.7498,
        0.4647, -0.4711, 0.7498,
        0.4647, -0.4711, 0.7498,
        0.9981, -0.0017, -0.0624,
        0.9981, -0.0017, -0.0624,
        0.9981, -0.0017, -0.0624,
        0.3025, 0.2018, -0.9316,
        0.3025, 0.2018, -0.9316,
        0.3025, 0.2018, -0.9316,
        0.324, 0.197, -0.9253,
        0.324, 0.197, -0.9253,
        0.324, 0.197, -0.9253,
        0.8246, -0.5352, -0.1831,
        0.8246, -0.5352, -0.1831,
        0.8246, -0.5352, -0.1831,
        0.6751, -0.736, -0.0509,
        0.6751, -0.736, -0.0509,
        0.6751, -0.736, -0.0509,
        -0.9451, -0.3091, -0.1055,
        -0.9451, -0.3091, -0.1055,
        -0.9451, -0.3091, -0.1055,
        0.8377, 0.5165, 0.1776,
        0.8377, 0.5165, 0.1776,
        0.8377, 0.5165, 0.1776,
        0.7169, 0.4627, -0.5215,
        0.7169, 0.4627, -0.5215,
        0.7169, 0.4627, -0.5215,
        0.7015, 0.2098, -0.6811,
        0.7015, 0.2098, -0.6811,
        0.7015, 0.2098, -0.6811,
        0.1246, 0.766, -0.6306,
        0.1246, 0.766, -0.6306,
        0.1246, 0.766, -0.6306,
        -0.9128, 0.3601, -0.1927,
        -0.9128, 0.3601, -0.1927,
        -0.9128, 0.3601, -0.1927,
        -0.8761, 0.0149, -0.482,
        -0.8761, 0.0149, -0.482,
        -0.8761, 0.0149, -0.482,
        0.0772, 0.0962, 0.9924,
        0.0772, 0.0962, 0.9924,
        0.0772, 0.0962, 0.9924,
        -0.9542, 0.2213, -0.2014,
        -0.9542, 0.2213, -0.2014,
        -0.9542, 0.2213, -0.2014,
        -0.9341, 0.2712, -0.2321,
        -0.9341, 0.2712, -0.2321,
        -0.9341, 0.2712, -0.2321,
        -0.7873, -0.5638, -0.2498,
        -0.7873, -0.5638, -0.2498,
        -0.7873, -0.5638, -0.2498,
        0.124, -0.1546, 0.9802,
        0.124, -0.1546, 0.9802,
        0.124, -0.1546, 0.9802,
        -0.6104, -0.0101, -0.792,
        -0.6104, -0.0101, -0.792,
        -0.6104, -0.0101, -0.792,
        0.5809, 0.3024, -0.7557,
        0.5809, 0.3024, -0.7557,
        0.5809, 0.3024, -0.7557,
        0.8196, 0.0656, -0.5691,
        0.8196, 0.0656, -0.5691,
        0.8196, 0.0656, -0.5691,
        -0.3284, -0.2159, 0.9195,
        -0.3284, -0.2159, 0.9195,
        -0.3284, -0.2159, 0.9195,
        0.801, 0.0593, -0.5958,
        0.801, 0.0593, -0.5958,
        0.801, 0.0593, -0.5958,
        -0.757, 0.2543, -0.6019,
        -0.757, 0.2543, -0.6019,
        -0.757, 0.2543, -0.6019,
        -0.8573, 0.2057, -0.4719,
        -0.8573, 0.2057, -0.4719,
        -0.8573, 0.2057, -0.4719,
        0.7239, -0.2067, -0.6582,
        0.7239, -0.2067, -0.6582,
        0.7239, -0.2067, -0.6582,
        0.1986, -0.4319, -0.8798,
        0.1986, -0.4319, -0.8798,
        0.1986, -0.4319, -0.8798,
        -0.7449, 0.2219, -0.6292,
        -0.7449, 0.2219, -0.6292,
        -0.7449, 0.2219, -0.6292,
        1, 0.0052, 0.0042,
        1, 0.0052, 0.0042,
        1, 0.0052, 0.0042,
        0.1101, 0.0761, -0.991,
        0.1101, 0.0761, -0.991,
        0.1101, 0.0761, -0.991,
        -0.7678, 0.1965, -0.6098,
        -0.7678, 0.1965, -0.6098,
        -0.7678, 0.1965, -0.6098,
        0.8956, -0.1093, 0.4312,
        0.8956, -0.1093, 0.4312,
        0.8956, -0.1093, 0.4312,
        0.4536, -0.2561, 0.8536,
        0.4536, -0.2561, 0.8536,
        0.4536, -0.2561, 0.8536,
        0.0202, -0.2188, 0.9756,
        0.0202, -0.2188, 0.9756,
        0.0202, -0.2188, 0.9756,
        0.5485, -0.1506, 0.8225,
        0.5485, -0.1506, 0.8225,
        0.5485, -0.1506, 0.8225,
        -0.3944, -0.645, 0.6545,
        -0.3944, -0.645, 0.6545,
        -0.3944, -0.645, 0.6545,
        -0.0813, 0.2777, -0.9572,
        -0.0813, 0.2777, -0.9572,
        -0.0813, 0.2777, -0.9572,
        -0.7029, -0.4842, -0.521,
        -0.7029, -0.4842, -0.521,
        -0.7029, -0.4842, -0.521,
        0.8198, 0.2247, -0.5268,
        0.8198, 0.2247, -0.5268,
        0.8198, 0.2247, -0.5268,
        0.8801, 0.461, 0.1137,
        0.8801, 0.461, 0.1137,
        0.8801, 0.461, 0.1137,
        -0.5947, 0.1323, -0.793,
        -0.5947, 0.1323, -0.793,
        -0.5947, 0.1323, -0.793,
        -0.2252, 0.5232, 0.8219,
        -0.2252, 0.5232, 0.8219,
        -0.2252, 0.5232, 0.8219,
        -0.587, 0.1938, -0.786,
        -0.587, 0.1938, -0.786,
        -0.587, 0.1938, -0.786,
        0.6435, 0.5052, 0.5751,
        0.6435, 0.5052, 0.5751,
        0.6435, 0.5052, 0.5751,
        0.9673, 0.2462, 0.0611,
        0.9673, 0.2462, 0.0611,
        0.9673, 0.2462, 0.0611,
        0.7806, 0.5378, 0.3184,
        0.7806, 0.5378, 0.3184,
        0.7806, 0.5378, 0.3184,
        0.5203, 0.0935, 0.8488,
        0.5203, 0.0935, 0.8488,
        0.5203, 0.0935, 0.8488,
        0.5713, -0.0006, 0.8208,
        0.5713, -0.0006, 0.8208,
        0.5713, -0.0006, 0.8208,
        0.5939, 0.408, 0.6934,
        0.5939, 0.408, 0.6934,
        0.5939, 0.408, 0.6934,
        0.8038, -0.0512, 0.5927,
        0.8038, -0.0512, 0.5927,
        0.8038, -0.0512, 0.5927,
        -0.1379, -0.4442, 0.8852,
        -0.1379, -0.4442, 0.8852,
        -0.1379, -0.4442, 0.8852,
        0.2291, 0.2696, 0.9353,
        0.2291, 0.2696, 0.9353,
        0.2291, 0.2696, 0.9353,
        -0.3757, 0.1497, 0.9146,
        -0.3757, 0.1497, 0.9146,
        -0.3757, 0.1497, 0.9146,
        -0.3847, 0.7715, 0.5068,
        -0.3847, 0.7715, 0.5068,
        -0.3847, 0.7715, 0.5068,
        -0.3875, -0.4304, 0.8152,
        -0.3875, -0.4304, 0.8152,
        -0.3875, -0.4304, 0.8152,
        -0.1198, -0.0294, 0.9924,
        -0.1198, -0.0294, 0.9924,
        -0.1198, -0.0294, 0.9924,
        0.6003, -0.1241, 0.7901,
        0.6003, -0.1241, 0.7901,
        0.6003, -0.1241, 0.7901,
        0.6836, 0.5113, 0.5209,
        0.6836, 0.5113, 0.5209,
        0.6836, 0.5113, 0.5209,
        -0.0533, 0.1804, 0.9822,
        -0.0533, 0.1804, 0.9822,
        -0.0533, 0.1804, 0.9822,
        -0.7026, -0.0742, 0.7077,
        -0.7026, -0.0742, 0.7077,
        -0.7026, -0.0742, 0.7077,
        0.7184, -0.6549, 0.2343,
        0.7184, -0.6549, 0.2343,
        0.7184, -0.6549, 0.2343,
        0.8196, 0.1954, 0.5385,
        0.8196, 0.1954, 0.5385,
        0.8196, 0.1954, 0.5385,
        -0.1604, 0.2222, 0.9617,
        -0.1604, 0.2222, 0.9617,
        -0.1604, 0.2222, 0.9617,
        -0.3924, 0.3058, 0.8675,
        -0.3924, 0.3058, 0.8675,
        -0.3924, 0.3058, 0.8675,
        -0.7999, -0.3091, -0.5143,
        -0.7999, -0.3091, -0.5143,
        -0.7999, -0.3091, -0.5143,
        -0.0257, -0.3539, 0.9349,
        -0.0257, -0.3539, 0.9349,
        -0.0257, -0.3539, 0.9349,
        -0.0656, -0.357, 0.9318,
        -0.0656, -0.357, 0.9318,
        -0.0656, -0.357, 0.9318,
        0.0439, 0.0595, -0.9973,
        0.0439, 0.0595, -0.9973,
        0.0439, 0.0595, -0.9973,
        -0.1857, -0.1455, -0.9718,
        -0.1857, -0.1455, -0.9718,
        -0.1857, -0.1455, -0.9718,
        0.391, -0.5627, -0.7284,
        0.391, -0.5627, -0.7284,
        0.391, -0.5627, -0.7284,
        0.1573, -0.9603, -0.2304,
        0.1573, -0.9603, -0.2304,
        0.1573, -0.9603, -0.2304,
        -0.4467, -0.8874, 0.1138,
        -0.4467, -0.8874, 0.1138,
        -0.4467, -0.8874, 0.1138,
        -0.7639, -0.6365, 0.1066,
        -0.7639, -0.6365, 0.1066,
        -0.7639, -0.6365, 0.1066,
        0.0041, -0.4342, 0.9008,
        0.0041, -0.4342, 0.9008,
        0.0041, -0.4342, 0.9008,
        -0.1314, -0.8289, 0.5438,
        -0.1314, -0.8289, 0.5438,
        -0.1314, -0.8289, 0.5438,
        0.1626, -0.2749, 0.9476,
        0.1626, -0.2749, 0.9476,
        0.1626, -0.2749, 0.9476,
        0.1297, -0.3045, 0.9437,
        0.1297, -0.3045, 0.9437,
        0.1297, -0.3045, 0.9437,
        -0.1225, 0.9913, 0.0482,
        -0.1225, 0.9913, 0.0482,
        -0.1225, 0.9913, 0.0482,
        0.1755, 0.0595, -0.9827,
        0.1755, 0.0595, -0.9827,
        0.1755, 0.0595, -0.9827,
        -0.2428, 0.0053, -0.9701,
        -0.2428, 0.0053, -0.9701,
        -0.2428, 0.0053, -0.9701,
        0.042, -0.0923, -0.9948,
        0.042, -0.0923, -0.9948,
        0.042, -0.0923, -0.9948,
        -0.0686, -0.6829, 0.7272,
        -0.0686, -0.6829, 0.7272,
        -0.0686, -0.6829, 0.7272,
        -0.4493, 0.1263, 0.8844,
        -0.4493, 0.1263, 0.8844,
        -0.4493, 0.1263, 0.8844,
        -0.8216, -0.1445, 0.5515,
        -0.8216, -0.1445, 0.5515,
        -0.8216, -0.1445, 0.5515,
        -0.4212, 0.129, 0.8977,
        -0.4212, 0.129, 0.8977,
        -0.4212, 0.129, 0.8977,
        0.2172, 0.6488, 0.7293,
        0.2172, 0.6488, 0.7293,
        0.2172, 0.6488, 0.7293,
        -0.7953, -0.1426, 0.5892,
        -0.7953, -0.1426, 0.5892,
        -0.7953, -0.1426, 0.5892,
        -0.0765, 0.982, 0.1728,
        -0.0765, 0.982, 0.1728,
        -0.0765, 0.982, 0.1728,
        -0.0013, 1, 0.0005,
        -0.0013, 1, 0.0005,
        -0.0013, 1, 0.0005,
        0.2514, -0.9482, 0.194,
        0.2514, -0.9482, 0.194,
        0.2514, -0.9482, 0.194,
        -0.1546, 0.9872, 0.0401,
        -0.1546, 0.9872, 0.0401,
        -0.1546, 0.9872, 0.0401,
        -0.5018, 0.1514, 0.8516,
        -0.5018, 0.1514, 0.8516,
        -0.5018, 0.1514, 0.8516,
        -0.9609, -0.1852, -0.2059,
        -0.9609, -0.1852, -0.2059,
        -0.9609, -0.1852, -0.2059,
        0.0904, -0.523, 0.8475,
        0.0904, -0.523, 0.8475,
        0.0904, -0.523, 0.8475,
        0.6677, -0.7188, 0.1934,
        0.6677, -0.7188, 0.1934,
        0.6677, -0.7188, 0.1934,
        -0.895, 0.2667, 0.3576,
        -0.895, 0.2667, 0.3576,
        -0.895, 0.2667, 0.3576,
        -0.3585, 0.9291, 0.091,
        -0.3585, 0.9291, 0.091,
        -0.3585, 0.9291, 0.091,
        -0.1181, 0.9918, 0.0498,
        -0.1181, 0.9918, 0.0498,
        -0.1181, 0.9918, 0.0498,
        -0.17, -0.4513, -0.876,
        -0.17, -0.4513, -0.876,
        -0.17, -0.4513, -0.876,
        -0.7866, 0.2023, 0.5833,
        -0.7866, 0.2023, 0.5833,
        -0.7866, 0.2023, 0.5833,
        -0.1873, -0.8866, -0.423,
        -0.1873, -0.8866, -0.423,
        -0.1873, -0.8866, -0.423,
        -0.8767, 0.1967, 0.4391,
        -0.8767, 0.1967, 0.4391,
        -0.8767, 0.1967, 0.4391,
        -0.2395, 0.9652, 0.1049,
        -0.2395, 0.9652, 0.1049,
        -0.2395, 0.9652, 0.1049,
        -0.989, -0.0405, 0.1425,
        -0.989, -0.0405, 0.1425,
        -0.989, -0.0405, 0.1425,
        -0.9685, 0.2061, 0.1398,
        -0.9685, 0.2061, 0.1398,
        -0.9685, 0.2061, 0.1398,
        0.204, -0.1178, 0.9719,
        0.204, -0.1178, 0.9719,
        0.204, -0.1178, 0.9719,
        0.8467, -0.0545, -0.5293,
        0.8467, -0.0545, -0.5293,
        0.8467, -0.0545, -0.5293,
        0.9897, 0.0723, 0.1237,
        0.9897, 0.0723, 0.1237,
        0.9897, 0.0723, 0.1237,
        -0.3199, 0.0116, 0.9474,
        -0.3199, 0.0116, 0.9474,
        -0.3199, 0.0116, 0.9474,
        0.0861, 0.4564, 0.8856,
        0.0861, 0.4564, 0.8856,
        0.0861, 0.4564, 0.8856,
        -0.205, 0.6841, 0.6999,
        -0.205, 0.6841, 0.6999,
        -0.205, 0.6841, 0.6999,
        -0.8741, -0.2201, -0.4329,
        -0.8741, -0.2201, -0.4329,
        -0.8741, -0.2201, -0.4329,
        -0.175, 0.4433, 0.8791,
        -0.175, 0.4433, 0.8791,
        -0.175, 0.4433, 0.8791,
        -0.0001, 0.4438, 0.8961,
        -0.0001, 0.4438, 0.8961,
        -0.0001, 0.4438, 0.8961,
        0.0088, -0.0094, 0.9999,
        0.0088, -0.0094, 0.9999,
        0.0088, -0.0094, 0.9999,
        -0.3047, -0.2251, 0.9255,
        -0.3047, -0.2251, 0.9255,
        -0.3047, -0.2251, 0.9255,
        -0.4092, 0.1071, 0.9061,
        -0.4092, 0.1071, 0.9061,
        -0.4092, 0.1071, 0.9061,
        0.2008, 0.2209, 0.9544,
        0.2008, 0.2209, 0.9544,
        0.2008, 0.2209, 0.9544,
        -0.0421, -0.3421, 0.9387,
        -0.0421, -0.3421, 0.9387,
        -0.0421, -0.3421, 0.9387,
        -0.5941, 0.7813, 0.1915,
        -0.5941, 0.7813, 0.1915,
        -0.5941, 0.7813, 0.1915,
        -0.995, -0.069, -0.0729,
        -0.995, -0.069, -0.0729,
        -0.995, -0.069, -0.0729,
        -0.9456, -0.0093, 0.3251,
        -0.9456, -0.0093, 0.3251,
        -0.9456, -0.0093, 0.3251,
        -0.9953, 0.0364, 0.0896,
        -0.9953, 0.0364, 0.0896,
        -0.9953, 0.0364, 0.0896,
        -0.6125, -0.3493, 0.7091,
        -0.6125, -0.3493, 0.7091,
        -0.6125, -0.3493, 0.7091,
        0.9839, 0.142, 0.1086,
        0.9839, 0.142, 0.1086,
        0.9839, 0.142, 0.1086,
        0.9939, 0.0598, 0.0931,
        0.9939, 0.0598, 0.0931,
        0.9939, 0.0598, 0.0931,
        -0.6835, 0.6791, 0.2678,
        -0.6835, 0.6791, 0.2678,
        -0.6835, 0.6791, 0.2678,
        -0.8679, 0.0253, -0.4961,
        -0.8679, 0.0253, -0.4961,
        -0.8679, 0.0253, -0.4961,
        -0.9674, 0.0104, -0.2532,
        -0.9674, 0.0104, -0.2532,
        -0.9674, 0.0104, -0.2532,
        -0.5342, 0.8231, 0.193,
        -0.5342, 0.8231, 0.193,
        -0.5342, 0.8231, 0.193,
        -0.0509, 0.3468, 0.9365,
        -0.0509, 0.3468, 0.9365,
        -0.0509, 0.3468, 0.9365,
        -0.9914, -0.056, -0.118,
        -0.9914, -0.056, -0.118,
        -0.9914, -0.056, -0.118,
        0.9938, 0.0632, 0.091,
        0.9938, 0.0632, 0.091,
        0.9938, 0.0632, 0.091,
        0.9961, -0.0744, -0.0473,
        0.9961, -0.0744, -0.0473,
        0.9961, -0.0744, -0.0473,
        -0.9371, -0.016, 0.3486,
        -0.9371, -0.016, 0.3486,
        -0.9371, -0.016, 0.3486,
        0.9996, 0.0269, 0,
        0.9996, 0.0269, 0,
        0.9996, 0.0269, 0
    ]);
    // prettier-ignore
    let texcoord_arr = Float32Array.from([]);
    // prettier-ignore
    let index_arr = Uint16Array.from([
        1326, 1325, 1324,
        1323, 1322, 1321,
        1320, 1319, 1318,
        1317, 1316, 1315,
        1314, 1313, 1312,
        1311, 1310, 1309,
        1308, 1307, 1306,
        1305, 1304, 1303,
        1302, 1301, 1300,
        1299, 1298, 1297,
        1296, 1295, 1294,
        1293, 1292, 1291,
        1290, 1289, 1288,
        1287, 1286, 1285,
        1284, 1283, 1282,
        1281, 1280, 1279,
        1278, 1277, 1276,
        1275, 1274, 1273,
        1272, 1271, 1270,
        1269, 1268, 1267,
        1266, 1265, 1264,
        1263, 1262, 1261,
        1260, 1259, 1258,
        1257, 1256, 1255,
        1254, 1253, 1252,
        1251, 1250, 1249,
        1248, 1247, 1246,
        1245, 1244, 1243,
        1242, 1241, 1240,
        1239, 1238, 1237,
        1236, 1235, 1234,
        1233, 1232, 1231,
        1230, 1229, 1228,
        1227, 1226, 1225,
        1224, 1223, 1222,
        1221, 1220, 1219,
        1218, 1217, 1216,
        1215, 1214, 1213,
        1212, 1211, 1210,
        1209, 1208, 1207,
        1206, 1205, 1204,
        1203, 1202, 1201,
        1200, 1199, 1198,
        1197, 1196, 1195,
        1194, 1193, 1192,
        1191, 1190, 1189,
        1188, 1187, 1186,
        1185, 1184, 1183,
        1182, 1181, 1180,
        1179, 1178, 1177,
        1176, 1175, 1174,
        1173, 1172, 1171,
        1170, 1169, 1168,
        1167, 1166, 1165,
        1164, 1163, 1162,
        1161, 1160, 1159,
        1158, 1157, 1156,
        1155, 1154, 1153,
        1152, 1151, 1150,
        1149, 1148, 1147,
        1146, 1145, 1144,
        1143, 1142, 1141,
        1140, 1139, 1138,
        1137, 1136, 1135,
        1134, 1133, 1132,
        1131, 1130, 1129,
        1128, 1127, 1126,
        1125, 1124, 1123,
        1122, 1121, 1120,
        1119, 1118, 1117,
        1116, 1115, 1114,
        1113, 1112, 1111,
        1110, 1109, 1108,
        1107, 1106, 1105,
        1104, 1103, 1102,
        1101, 1100, 1099,
        1098, 1097, 1096,
        1095, 1094, 1093,
        1092, 1091, 1090,
        1089, 1088, 1087,
        1086, 1085, 1084,
        1083, 1082, 1081,
        1080, 1079, 1078,
        1077, 1076, 1075,
        1074, 1073, 1072,
        1071, 1070, 1069,
        1068, 1067, 1066,
        1065, 1064, 1063,
        1062, 1061, 1060,
        1059, 1058, 1057,
        1056, 1055, 1054,
        1053, 1052, 1051,
        1050, 1049, 1048,
        1047, 1046, 1045,
        1044, 1043, 1042,
        1041, 1040, 1039,
        1038, 1037, 1036,
        1035, 1034, 1033,
        1032, 1031, 1030,
        1029, 1028, 1027,
        1026, 1025, 1024,
        1023, 1022, 1021,
        1020, 1019, 1018,
        1017, 1016, 1015,
        1014, 1013, 1012,
        1011, 1010, 1009,
        1008, 1007, 1006,
        1005, 1004, 1003,
        1002, 1001, 1000,
        999, 998, 997,
        996, 995, 994,
        993, 992, 991,
        990, 989, 988,
        987, 986, 985,
        984, 983, 982,
        981, 980, 979,
        978, 977, 976,
        975, 974, 973,
        972, 971, 970,
        969, 968, 967,
        966, 965, 964,
        963, 962, 961,
        960, 959, 958,
        957, 956, 955,
        954, 953, 952,
        951, 950, 949,
        948, 947, 946,
        945, 944, 943,
        942, 941, 940,
        939, 938, 937,
        936, 935, 934,
        933, 932, 931,
        930, 929, 928,
        927, 926, 925,
        924, 923, 922,
        921, 920, 919,
        918, 917, 916,
        915, 914, 913,
        912, 911, 910,
        909, 908, 907,
        906, 905, 904,
        903, 902, 901,
        900, 899, 898,
        897, 896, 895,
        894, 893, 892,
        891, 890, 889,
        888, 887, 886,
        885, 884, 883,
        882, 881, 880,
        879, 878, 877,
        876, 875, 874,
        873, 872, 871,
        870, 869, 868,
        867, 866, 865,
        864, 863, 862,
        861, 860, 859,
        858, 857, 856,
        855, 854, 853,
        852, 851, 850,
        849, 848, 847,
        846, 845, 844,
        843, 842, 841,
        840, 839, 838,
        837, 836, 835,
        834, 833, 832,
        831, 830, 829,
        828, 827, 826,
        825, 824, 823,
        822, 821, 820,
        819, 818, 817,
        816, 815, 814,
        813, 812, 811,
        810, 809, 808,
        807, 806, 805,
        804, 803, 802,
        801, 800, 799,
        798, 797, 796,
        795, 794, 793,
        792, 791, 790,
        789, 788, 787,
        786, 785, 784,
        783, 782, 781,
        780, 779, 778,
        777, 776, 775,
        774, 773, 772,
        771, 770, 769,
        768, 767, 766,
        765, 764, 763,
        762, 761, 760,
        759, 758, 757,
        756, 755, 754,
        753, 752, 751,
        750, 749, 748,
        747, 746, 745,
        744, 743, 742,
        741, 740, 739,
        738, 737, 736,
        735, 734, 733,
        732, 731, 730,
        729, 728, 727,
        726, 725, 724,
        723, 722, 721,
        720, 719, 718,
        717, 716, 715,
        714, 713, 712,
        711, 710, 709,
        708, 707, 706,
        704, 703, 702,
        701, 700, 699,
        698, 697, 696,
        695, 694, 693,
        692, 691, 690,
        689, 688, 687,
        686, 685, 684,
        683, 682, 681,
        680, 705, 679,
        680, 679, 678,
        677, 676, 675,
        674, 673, 672,
        671, 670, 669,
        668, 667, 666,
        665, 664, 663,
        662, 661, 660,
        659, 658, 657,
        656, 655, 654,
        653, 652, 651,
        650, 649, 648,
        647, 646, 645,
        644, 643, 642,
        641, 640, 639,
        638, 637, 636,
        635, 634, 633,
        632, 631, 630,
        629, 628, 627,
        626, 625, 624,
        623, 622, 621,
        620, 619, 618,
        617, 616, 615,
        614, 613, 612,
        611, 610, 609,
        608, 607, 606,
        605, 604, 603,
        602, 601, 600,
        599, 598, 597,
        596, 595, 594,
        593, 592, 591,
        590, 589, 588,
        587, 586, 585,
        584, 583, 582,
        581, 580, 579,
        578, 577, 576,
        575, 574, 573,
        572, 571, 570,
        569, 568, 567,
        566, 565, 564,
        563, 562, 561,
        560, 559, 558,
        557, 556, 555,
        554, 553, 552,
        551, 550, 549,
        548, 547, 546,
        545, 544, 543,
        542, 541, 540,
        539, 538, 537,
        536, 535, 534,
        533, 532, 531,
        530, 529, 528,
        527, 526, 525,
        524, 523, 522,
        521, 520, 519,
        518, 517, 516,
        515, 514, 513,
        512, 511, 510,
        509, 508, 507,
        506, 505, 504,
        503, 502, 501,
        500, 499, 498,
        497, 496, 495,
        494, 493, 492,
        491, 490, 489,
        488, 487, 486,
        485, 484, 483,
        482, 481, 480,
        479, 478, 477,
        476, 475, 474,
        473, 472, 471,
        470, 469, 468,
        467, 466, 465,
        464, 463, 462,
        461, 460, 459,
        458, 457, 456,
        455, 454, 453,
        452, 451, 450,
        449, 448, 447,
        446, 445, 444,
        443, 442, 441,
        440, 439, 438,
        437, 436, 435,
        434, 433, 432,
        431, 430, 429,
        428, 427, 426,
        425, 424, 423,
        422, 421, 420,
        419, 418, 417,
        416, 415, 414,
        413, 412, 411,
        410, 409, 408,
        407, 406, 405,
        404, 403, 402,
        401, 400, 399,
        398, 397, 396,
        395, 394, 393,
        392, 391, 390,
        389, 388, 387,
        386, 385, 384,
        383, 382, 381,
        380, 379, 378,
        377, 376, 375,
        374, 373, 372,
        371, 370, 369,
        368, 367, 366,
        365, 364, 363,
        362, 361, 360,
        359, 358, 357,
        356, 355, 354,
        353, 352, 351,
        350, 349, 348,
        347, 346, 345,
        344, 343, 342,
        341, 340, 339,
        335, 334, 333,
        332, 331, 330,
        329, 328, 327,
        326, 325, 324,
        323, 322, 321,
        320, 319, 318,
        317, 316, 315,
        314, 313, 312,
        311, 310, 309,
        307, 306, 305,
        304, 303, 302,
        301, 300, 299,
        298, 297, 296,
        295, 294, 293,
        292, 291, 290,
        289, 288, 287,
        286, 285, 284,
        283, 282, 281,
        280, 279, 278,
        338, 337, 336,
        338, 336, 276,
        277, 276, 275,
        274, 308, 273,
        274, 273, 272,
        271, 270, 269,
        268, 267, 266,
        265, 264, 263,
        262, 261, 260,
        259, 258, 257,
        256, 255, 254,
        253, 252, 251,
        250, 249, 248,
        247, 246, 245,
        244, 243, 242,
        241, 240, 239,
        238, 237, 236,
        235, 234, 233,
        232, 231, 230,
        229, 228, 227,
        226, 225, 224,
        223, 222, 221,
        220, 219, 218,
        217, 216, 215,
        214, 213, 212,
        211, 210, 209,
        208, 207, 206,
        205, 204, 203,
        202, 201, 200,
        197, 195, 199,
        199, 195, 196,
        198, 195, 197,
        195, 192, 196,
        194, 192, 195,
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
        139, 138, 137,
        136, 134, 135,
        135, 134, 133,
        132, 131, 130,
        129, 128, 127,
        126, 125, 124,
        122, 123, 140,
        123, 122, 121,
        120, 119, 118,
        117, 116, 115,
        114, 113, 112,
        111, 110, 109,
        108, 107, 106,
        105, 104, 103,
        102, 101, 100,
        99, 98, 97,
        93, 94, 96,
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

    let raf = 0;
    function loop_start(game) {
        let last = performance.now();
        let tick = (now) => {
            let delta = (now - last) / 1000;
            game.FrameUpdate(delta);
            game.FrameReset();
            last = now;
            raf = requestAnimationFrame(tick);
        };
        loop_stop();
        tick(last);
    }
    function loop_stop() {
        cancelAnimationFrame(raf);
    }

    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
    }
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
    }
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
    }
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
    }
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
    }
    function normalize(out, a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let len = x * x + y * y + z * z;
        if (len > 0) {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        return out;
    }
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    function cross(out, a, b) {
        let ax = a[0], ay = a[1], az = a[2];
        let bx = b[0], by = b[1], bz = b[2];
        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
    }
    function transform_point(out, a, m) {
        let x = a[0], y = a[1], z = a[2];
        let w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
    }
    function transform_direction(out, a, m) {
        let tip = transform_point([0, 0, 0], a, m);
        let base = get_translation([0, 0, 0], m);
        return subtract(out, tip, base);
    }
    function length(a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        return Math.hypot(x, y, z);
    }
    function distance_squared(a, b) {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        return x * x + y * y + z * z;
    }

    function create() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }
    function invert(out, a) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return out;
    }
    function multiply$1(out, a, b) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]; // Cache only the current line of the second matrix
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];
        out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];
        out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];
        out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return out;
    }
    function from_rotation_translation_scale(out, q, v, s) {
        // Quaternion math
        let x = q[0], y = q[1], z = q[2], w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;
        let xx = x * x2;
        let xy = x * y2;
        let xz = x * z2;
        let yy = y * y2;
        let yz = y * z2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;
        let sx = s[0];
        let sy = s[1];
        let sz = s[2];
        out[0] = (1 - (yy + zz)) * sx;
        out[1] = (xy + wz) * sx;
        out[2] = (xz - wy) * sx;
        out[3] = 0;
        out[4] = (xy - wz) * sy;
        out[5] = (1 - (xx + zz)) * sy;
        out[6] = (yz + wx) * sy;
        out[7] = 0;
        out[8] = (xz + wy) * sz;
        out[9] = (yz - wx) * sz;
        out[10] = (1 - (xx + yy)) * sz;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
    }
    function perspective(out, fovy, aspect, near, far) {
        let f = 1.0 / Math.tan(fovy / 2), nf;
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;
        if (far != null && far !== Infinity) {
            nf = 1 / (near - far);
            out[10] = (far + near) * nf;
            out[14] = 2 * far * near * nf;
        }
        else {
            out[10] = -1;
            out[14] = -2 * near;
        }
        return out;
    }
    function get_translation(out, mat) {
        out[0] = mat[12];
        out[1] = mat[13];
        out[2] = mat[14];
        return out;
    }

    const QUERY$d = 8192 /* Transform */ | 1 /* Camera */;
    function sys_camera(game, delta) {
        if (game.ViewportWidth != window.innerWidth || game.ViewportHeight != window.innerHeight) {
            game.ViewportWidth = game.CanvasScene.width = game.CanvasBillboard.width =
                window.innerWidth;
            game.ViewportHeight = game.CanvasScene.height = game.CanvasBillboard.height =
                window.innerHeight;
            game.ViewportResized = true;
        }
        game.Cameras = [];
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$d) === QUERY$d) {
                let camera = game.World.Camera[i];
                if (camera.Kind === 0 /* Display */) {
                    update_display(game, i, camera);
                    game.Cameras.push(camera);
                }
            }
        }
    }
    function update_display(game, entity, camera) {
        if (game.ViewportResized) {
            let aspect = game.ViewportWidth / game.ViewportHeight;
            if (aspect > 1) {
                // Landscape orientation.
                perspective(camera.Projection, camera.FovY, aspect, camera.Near, camera.Far);
                invert(camera.Unprojection, camera.Projection);
            }
            else {
                // Portrait orientation.
                perspective(camera.Projection, camera.FovY / aspect, aspect, camera.Near, camera.Far);
                invert(camera.Unprojection, camera.Projection);
            }
        }
        let transform = game.World.Transform[entity];
        multiply$1(camera.Pv, camera.Projection, transform.Self);
        get_translation(camera.Position, transform.World);
    }

    const BOX = [
        [0.5, 0.5, 0.5],
        [0.5, 0.5, -0.5],
        [-0.5, 0.5, -0.5],
        [-0.5, 0.5, 0.5],
        [0.5, -0.5, 0.5],
        [0.5, -0.5, -0.5],
        [-0.5, -0.5, -0.5],
        [-0.5, -0.5, 0.5],
    ];
    function compute_aabb(world, aabb) {
        get_translation(aabb.Center, world);
        // Start with the extents on each axis set to the position of the center.
        let min_x, min_y, min_z, max_x, max_y, max_z;
        min_x = max_x = aabb.Center[0];
        min_y = max_y = aabb.Center[1];
        min_z = max_z = aabb.Center[2];
        // Expand the extents outwards from the center by finding the farthest
        // vertex on each axis in both the negative and the positive direction.
        let world_vertex = [0, 0, 0];
        for (let i = 0; i < 8; i++) {
            let bb_vertex = BOX[i];
            // Scale the bounding box according to the size of the collider.
            world_vertex[0] = bb_vertex[0] * aabb.Size[0];
            world_vertex[1] = bb_vertex[1] * aabb.Size[1];
            world_vertex[2] = bb_vertex[2] * aabb.Size[2];
            transform_point(world_vertex, world_vertex, world);
            if (world_vertex[0] < min_x) {
                min_x = world_vertex[0];
            }
            if (world_vertex[0] > max_x) {
                max_x = world_vertex[0];
            }
            if (world_vertex[1] < min_y) {
                min_y = world_vertex[1];
            }
            if (world_vertex[1] > max_y) {
                max_y = world_vertex[1];
            }
            if (world_vertex[2] < min_z) {
                min_z = world_vertex[2];
            }
            if (world_vertex[2] > max_z) {
                max_z = world_vertex[2];
            }
        }
        // Save the min and max bounds.
        aabb.Min = [min_x, min_y, min_z];
        aabb.Max = [max_x, max_y, max_z];
        // Calculate the half-extents.
        aabb.Half[0] = (max_x - min_x) / 2;
        aabb.Half[1] = (max_y - min_y) / 2;
        aabb.Half[2] = (max_z - min_z) / 2;
    }
    function penetrate_aabb(a, b) {
        let distance_x = a.Center[0] - b.Center[0];
        let penetration_x = a.Half[0] + b.Half[0] - Math.abs(distance_x);
        let distance_y = a.Center[1] - b.Center[1];
        let penetration_y = a.Half[1] + b.Half[1] - Math.abs(distance_y);
        let distance_z = a.Center[2] - b.Center[2];
        let penetration_z = a.Half[2] + b.Half[2] - Math.abs(distance_z);
        if (penetration_x < penetration_y && penetration_x < penetration_z) {
            return [penetration_x * Math.sign(distance_x), 0, 0];
        }
        else if (penetration_y < penetration_z) {
            return [0, penetration_y * Math.sign(distance_y), 0];
        }
        else {
            return [0, 0, penetration_z * Math.sign(distance_z)];
        }
    }
    function intersect_aabb(a, b) {
        return (a.Min[0] < b.Max[0] &&
            a.Max[0] > b.Min[0] &&
            a.Min[1] < b.Max[1] &&
            a.Max[1] > b.Min[1] &&
            a.Min[2] < b.Max[2] &&
            a.Max[2] > b.Min[2]);
    }

    const QUERY$c = 8192 /* Transform */ | 4 /* Collide */;
    function sys_collide(game, delta) {
        // Collect all colliders.
        let static_colliders = [];
        let dynamic_colliders = [];
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$c) === QUERY$c) {
                let transform = game.World.Transform[i];
                let collider = game.World.Collide[i];
                // Prepare the collider for this tick's detection.
                collider.Collisions = [];
                if (collider.New) {
                    collider.New = false;
                    compute_aabb(transform.World, collider);
                }
                else if (collider.Dynamic) {
                    compute_aabb(transform.World, collider);
                    dynamic_colliders.push(collider);
                }
                else {
                    static_colliders.push(collider);
                }
            }
        }
        for (let i = 0; i < dynamic_colliders.length; i++) {
            check_collisions(dynamic_colliders[i], static_colliders, static_colliders.length);
            check_collisions(dynamic_colliders[i], dynamic_colliders, i);
        }
    }
    /**
     * Check for collisions between a dynamic collider and other colliders. Length
     * is used to control how many colliders to check against. For collisions
     * with static colliders, length should be equal to colliders.length, since
     * we want to consider all static colliders in the scene. For collisions with
     * other dynamic colliders, we only need to check a pair of colliders once.
     * Varying length allows to skip half of the NxN checks matrix.
     *
     * @param game The game instance.
     * @param collider The current collider.
     * @param colliders Other colliders to test against.
     * @param length How many colliders to check.
     */
    function check_collisions(collider, colliders, length) {
        for (let i = 0; i < length; i++) {
            let other = colliders[i];
            let collider_can_intersect = collider.Signature & other.Layers;
            let other_can_intersect = other.Signature & collider.Layers;
            if (collider_can_intersect || other_can_intersect) {
                if (intersect_aabb(collider, other)) {
                    let hit = penetrate_aabb(collider, other);
                    if (collider_can_intersect) {
                        collider.Collisions.push({
                            Other: other.Entity,
                            Hit: hit,
                        });
                    }
                    if (other_can_intersect) {
                        other.Collisions.push({
                            Other: collider.Entity,
                            Hit: negate([0, 0, 0], hit),
                        });
                    }
                }
            }
        }
    }

    const QUERY$b = 128 /* Move */ | 8 /* ControlPlayer */;
    function sys_control_keyboard(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$b) === QUERY$b) {
                update$8(game, i);
            }
        }
    }
    function update$8(game, entity) {
        let control = game.World.ControlPlayer[entity];
        if (control.Yaw) {
            // Yaw is applied relative to the entity's local space; the Y axis is
            // not affected by its current orientation.
            let move = game.World.Move[entity];
            if (game.InputState["ArrowLeft"]) {
                // Look left.
                move.LocalRotations.push([0, -1, 0, 0]);
            }
            if (game.InputState["ArrowRight"]) {
                // Look right.
                move.LocalRotations.push([0, 1, 0, 0]);
            }
        }
        if (control.Pitch) {
            // Pitch is applied relative to the entity's self space; the X axis is
            // always aligned with its left and right sides.
            let move = game.World.Move[entity];
            if (game.InputState["ArrowUp"]) {
                // Look up.
                move.SelfRotations.push([-1, 0, 0, 0]);
            }
            if (game.InputState["ArrowDown"]) {
                // Look down.
                move.SelfRotations.push([1, 0, 0, 0]);
            }
        }
    }

    const QUERY$a = 128 /* Move */ | 8 /* ControlPlayer */;
    const SENSITIVITY = 0.1;
    function sys_control_mouse(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$a) === QUERY$a) {
                update$7(game, i);
            }
        }
    }
    function update$7(game, entity) {
        let control = game.World.ControlPlayer[entity];
        let move = game.World.Move[entity];
        if (control.Move && game.InputState.Mouse0) {
            if (game.InputDelta.MouseX) {
                let amount = game.InputDelta.MouseX * SENSITIVITY;
                move.Directions.push([amount, 0, 0]);
            }
            if (game.InputDelta.MouseY) {
                let amount = game.InputDelta.MouseY * SENSITIVITY;
                move.Directions.push([0, 0, amount]);
            }
        }
        if (control.Zoom && game.InputDelta.WheelY) {
            move.Directions.push([0, 0, game.InputDelta.WheelY]);
        }
    }

    const QUERY$9 = 8 /* ControlPlayer */ | 256 /* NavAgent */;
    function sys_control_pick(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$9) == QUERY$9) {
                update$6(game, i);
            }
        }
    }
    function update$6(game, entity) {
        let agent = game.World.NavAgent[entity];
        if (game.InputDelta["Mouse2"] === 1 && game.Pick) {
            agent.Destination = game.Pick.Point;
            agent.Destination[1] += 0.5;
        }
    }

    const QUERY$8 = 8192 /* Transform */ | 16 /* Draw */;
    function sys_draw(game, delta) {
        game.Context2D.resetTransform();
        game.Context2D.clearRect(0, 0, game.ViewportWidth, game.ViewportHeight);
        let position = [0, 0, 0];
        let display_camera = null;
        for (let i = 0; i < game.World.Signature.length; i++) {
            if (game.World.Signature[i] & 1 /* Camera */) {
                let camera = game.World.Camera[i];
                if (camera.Kind === 0 /* Display */) {
                    display_camera = camera;
                    break;
                }
            }
        }
        if (!display_camera) {
            return;
        }
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$8) == QUERY$8) {
                // World position.
                get_translation(position, game.World.Transform[i].World);
                // NDC position.
                transform_point(position, position, display_camera.Pv);
                if (position[2] < -1 || position[2] > 1) {
                    // The entity is outside the frustum. Only consider the Z axis
                    // which allows us to discard all positions in front of the near
                    // plane (behind the camera) and behind the far plane. We still
                    // draw the remaining XY positions outside NDC in case the
                    // drawing is wide or tall enough to be visible.
                    continue;
                }
                game.Context2D.setTransform(1, 0, 0, 1, 0.5 * (position[0] + 1) * game.ViewportWidth, 0.5 * (-position[1] + 1) * game.ViewportHeight);
                let draw = game.World.Draw[i];
                switch (draw.Kind) {
                    case 0 /* Text */:
                        draw_text(game, draw);
                        break;
                    case 2 /* Selection */:
                        draw_selection$1(game, draw);
                        break;
                }
            }
        }
    }
    function draw_text(game, draw) {
        game.Context2D.textAlign = "center";
        game.Context2D.font = draw.Font;
        game.Context2D.fillStyle = draw.FillStyle;
        game.Context2D.fillText(draw.Text, 0, 0);
    }
    function draw_selection$1(game, draw) {
        let size = game.ViewportHeight * 0.1;
        game.Context2D.strokeStyle = draw.Color;
        game.Context2D.strokeRect(-size / 2, -size / 2, size, size);
    }

    let update_span = document.getElementById("update");
    let delta_span = document.getElementById("delta");
    let fps_span = document.getElementById("fps");
    function sys_framerate(game, delta, update) {
        if (update_span) {
            update_span.textContent = update.toFixed(1);
        }
        if (delta_span) {
            delta_span.textContent = (delta * 1000).toFixed(1);
        }
        if (fps_span) {
            fps_span.textContent = (1 / delta).toFixed();
        }
    }

    const QUERY$7 = 8192 /* Transform */ | 32 /* Highlightable */;
    function sys_highlight(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$7) == QUERY$7) {
                update$5(game, i);
            }
        }
    }
    function update$5(game, entity) {
        var _a;
        let transform = game.World.Transform[entity];
        let highlightable = game.World.Highlightable[entity];
        let render = game.World.Render[entity];
        if (((_a = game.Pick) === null || _a === void 0 ? void 0 : _a.Entity) === entity) {
            // When the cursor is over the entity…
            // …highlight it.
            if (!highlightable.Highlighted) {
                highlightable.Highlighted = true;
                switch (highlightable.Kind) {
                    case 0 /* Region */:
                        render.Color[0] += 0.5;
                        break;
                    case 1 /* Unit */:
                        scale(transform.Scale, transform.Scale, 1.3);
                        transform.Dirty = true;
                        break;
                }
            }
        }
        else {
            // When the cursor is not over the entity…
            // …remove the highlight.
            if (highlightable.Highlighted) {
                highlightable.Highlighted = false;
                switch (highlightable.Kind) {
                    case 0 /* Region */:
                        render.Color[0] -= 0.5;
                        break;
                    case 1 /* Unit */:
                        scale(transform.Scale, transform.Scale, 1 / 1.3);
                        transform.Dirty = true;
                        break;
                }
            }
        }
    }

    const QUERY$6 = 8192 /* Transform */ | 64 /* Light */;
    function sys_light(game, delta) {
        game.LightPositions.fill(0);
        game.LightDetails.fill(0);
        let counter = 0;
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$6) === QUERY$6) {
                update$4(game, i, counter++);
            }
        }
    }
    let world_pos = [0, 0, 0];
    function update$4(game, entity, idx) {
        let light = game.World.Light[entity];
        let transform = game.World.Transform[entity];
        get_translation(world_pos, transform.World);
        if (light.Kind === 1 /* Directional */) {
            // For directional lights, their normalized position in the world
            // describes the light's normal.
            normalize(world_pos, world_pos);
        }
        game.LightPositions[4 * idx + 0] = world_pos[0];
        game.LightPositions[4 * idx + 1] = world_pos[1];
        game.LightPositions[4 * idx + 2] = world_pos[2];
        game.LightPositions[4 * idx + 3] = light.Kind;
        game.LightDetails[4 * idx + 0] = light.Color[0];
        game.LightDetails[4 * idx + 1] = light.Color[1];
        game.LightDetails[4 * idx + 2] = light.Color[2];
        game.LightDetails[4 * idx + 3] = light.Intensity;
    }

    const EPSILON = 0.000001;
    const DEG_TO_RAD = Math.PI / 180;

    function multiply(out, a, b) {
        let ax = a[0], ay = a[1], az = a[2], aw = a[3];
        let bx = b[0], by = b[1], bz = b[2], bw = b[3];
        out[0] = ax * bw + aw * bx + ay * bz - az * by;
        out[1] = ay * bw + aw * by + az * bx - ax * bz;
        out[2] = az * bw + aw * bz + ax * by - ay * bx;
        out[3] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
    }
    /**
     * Compute a quaternion out of three Euler angles given in degrees. The order of rotation is YXZ.
     * @param out Quaternion to write to.
     * @param x Rotation about the X axis, in degrees.
     * @param y Rotation around the Y axis, in degress.
     * @param z Rotation around the Z axis, in degress.
     */
    function from_euler(out, x, y, z) {
        let sx = Math.sin((x / 2) * DEG_TO_RAD);
        let cx = Math.cos((x / 2) * DEG_TO_RAD);
        let sy = Math.sin((y / 2) * DEG_TO_RAD);
        let cy = Math.cos((y / 2) * DEG_TO_RAD);
        let sz = Math.sin((z / 2) * DEG_TO_RAD);
        let cz = Math.cos((z / 2) * DEG_TO_RAD);
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
        return out;
    }
    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param out - the receiving quaternion
     * @param a - the first operand
     * @param b - the second operand
     * @param t - interpolation amount, in the range [0-1], between the two inputs
     */
    function slerp(out, a, b, t) {
        // benchmarks:
        //    http://jsperf.com/quaternion-slerp-implementations
        let ax = a[0], ay = a[1], az = a[2], aw = a[3];
        let bx = b[0], by = b[1], bz = b[2], bw = b[3];
        let omega, cosom, sinom, scale0, scale1;
        // calc cosine
        cosom = ax * bx + ay * by + az * bz + aw * bw;
        // adjust signs (if necessary)
        if (cosom < 0.0) {
            cosom = -cosom;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
        }
        // calculate coefficients
        if (1.0 - cosom > EPSILON) {
            // standard case (slerp)
            omega = Math.acos(cosom);
            sinom = Math.sin(omega);
            scale0 = Math.sin((1.0 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
        }
        else {
            // "from" and "to" quaternions are very close
            //  ... so we can do a linear interpolation
            scale0 = 1.0 - t;
            scale1 = t;
        }
        // calculate final values
        out[0] = scale0 * ax + scale1 * bx;
        out[1] = scale0 * ay + scale1 * by;
        out[2] = scale0 * az + scale1 * bz;
        out[3] = scale0 * aw + scale1 * bw;
        return out;
    }

    const QUERY$5 = 8192 /* Transform */ | 128 /* Move */;
    const NO_ROTATION = [0, 0, 0, 1];
    function sys_move(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$5) === QUERY$5) {
                update$3(game, i, delta);
            }
        }
    }
    function update$3(game, entity, delta) {
        let transform = game.World.Transform[entity];
        let move = game.World.Move[entity];
        if (move.Directions.length) {
            let direction = move.Directions.reduce(add_directions);
            // Directions are not normalized to allow them to express slower
            // movement from a gamepad input. They can also cancel each other out.
            // They may not, however, intensify one another; hence max amount is 1.
            let amount = Math.min(1, length(direction));
            // Transform the direction into the world or the parent space. This will
            // also scale the result by the scale encoded in the transform.
            transform_direction(direction, direction, transform.World);
            if (transform.Parent !== undefined) {
                let parent = game.World.Transform[transform.Parent];
                transform_direction(direction, direction, parent.Self);
            }
            // Normalize the direction to remove the transform's scale. The length
            // of the orignal direction is now lost.
            normalize(direction, direction);
            // Scale by the amount and distance traveled in this tick.
            scale(direction, direction, amount * move.MoveSpeed * delta);
            add(transform.Translation, transform.Translation, direction);
            transform.Dirty = true;
            move.Directions = [];
        }
        // Rotations applied relative to the local space (parent's or world).
        if (move.LocalRotations.length) {
            let rotation = move.LocalRotations.reduce(multiply_rotations);
            let t = Math.min(1, (move.RotationSpeed / Math.PI) * delta);
            slerp(rotation, NO_ROTATION, rotation, t);
            // Pre-multiply.
            multiply(transform.Rotation, rotation, transform.Rotation);
            transform.Dirty = true;
            move.LocalRotations = [];
        }
        // Rotations applied relative to the self space.
        if (move.SelfRotations.length) {
            let rotation = move.SelfRotations.reduce(multiply_rotations);
            let t = Math.min(1, (move.RotationSpeed / Math.PI) * delta);
            slerp(rotation, NO_ROTATION, rotation, t);
            // Post-multiply.
            multiply(transform.Rotation, transform.Rotation, rotation);
            transform.Dirty = true;
            move.SelfRotations = [];
        }
    }
    function add_directions(acc, cur) {
        return add(acc, acc, cur);
    }
    function multiply_rotations(acc, cur) {
        return multiply(acc, acc, cur);
    }

    const QUERY$4 = 8192 /* Transform */ | 256 /* NavAgent */ | 128 /* Move */;
    function sys_nav(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$4) == QUERY$4) {
                update$2(game, i);
            }
        }
    }
    function update$2(game, entity) {
        let agent = game.World.NavAgent[entity];
        if (agent.Destination) {
            let transform = game.World.Transform[entity];
            let destination = [0, 0, 0];
            copy(destination, agent.Destination);
            let position = [0, 0, 0];
            get_translation(position, transform.World);
            let distance_to_destination = distance_squared(position, agent.Destination);
            if (distance_to_destination < 1) {
                agent.Destination = null;
            }
            // Transform the destination into the agent's self space for sys_move.
            transform_point(position, destination, transform.Self);
            normalize(position, position);
            let move = game.World.Move[entity];
            move.Directions.push(position);
            if (position[0] < 0) {
                // The target is on the right.
                move.LocalRotations.push([0, -1, 0, 0]);
            }
            else {
                // The target is on the left or directly behind.
                move.LocalRotations.push([0, 1, 0, 0]);
            }
        }
    }

    function ray_intersect_aabb(colliders, origin, direction) {
        let nearest_t = Infinity;
        let nearest_i = null;
        for (let i = 0; i < colliders.length; i++) {
            let t = intersection_time(origin, direction, colliders[i]);
            if (0 < t && t < nearest_t) {
                // Find the smallest positive t.
                nearest_t = t;
                nearest_i = i;
            }
        }
        if (nearest_i !== null) {
            let intersection = [0, 0, 0];
            scale(intersection, direction, nearest_t);
            add(intersection, intersection, origin);
            return { Collider: colliders[nearest_i], Point: intersection };
        }
        return null;
    }
    function intersection_time(origin, direction, aabb) {
        let max_lo = -Infinity;
        let min_hi = +Infinity;
        for (let i = 0; i < 3; i++) {
            let lo = (aabb.Min[i] - origin[i]) / direction[i];
            let hi = (aabb.Max[i] - origin[i]) / direction[i];
            if (lo > hi) {
                [lo, hi] = [hi, lo];
            }
            if (hi < max_lo || lo > min_hi) {
                return Infinity;
            }
            if (lo > max_lo)
                max_lo = lo;
            if (hi < min_hi)
                min_hi = hi;
        }
        return max_lo > min_hi ? Infinity : max_lo;
    }
    let K = [0, 0, 0];
    let L = [0, 0, 0];
    let M = [0, 0, 0];
    let E = [0, 0, 0];
    let F = [0, 0, 0];
    let G = [0, 0, 0];
    let N = [0, 0, 0];
    // Based on https://www.codeproject.com/Articles/625787/Pick-Selection-with-OpenGL-and-OpenCL
    function ray_intersect_mesh(mesh, origin, direction) {
        let tri_count = mesh.IndexCount / 3;
        for (let tri = 0; tri < tri_count; tri++) {
            let i1 = mesh.IndexArray[tri * 3 + 0] * 3;
            let i2 = mesh.IndexArray[tri * 3 + 1] * 3;
            let i3 = mesh.IndexArray[tri * 3 + 2] * 3;
            K[0] = mesh.VertexArray[i1 + 0];
            K[1] = mesh.VertexArray[i1 + 1];
            K[2] = mesh.VertexArray[i1 + 2];
            L[0] = mesh.VertexArray[i2 + 0];
            L[1] = mesh.VertexArray[i2 + 1];
            L[2] = mesh.VertexArray[i2 + 2];
            M[0] = mesh.VertexArray[i3 + 0];
            M[1] = mesh.VertexArray[i3 + 1];
            M[2] = mesh.VertexArray[i3 + 2];
            // O + tD = kK + lL + mM
            // O + tD = kK + lL + (1 - k - l)M
            // O + tD = kK + lL + M - kM - lM
            // O + tD = k(K - M) + l(L - M) + M
            // O - M = k(K - M) + l(L - M) - tD
            // G = kE + lF - tD
            // Two edges of the tri: E, F.
            subtract(E, K, M);
            subtract(F, L, M);
            // The third "edge" between M and the ray's origin: G.
            subtract(G, origin, M);
            // From now on, M is used as a temporary Vec3.
            // Given the linear system of equations:
            //     kE + lF - tD = G
            // Given the Cramer's Rule for solving the system using determinants:
            //     k = |G F -D| / |E F -D|
            //     l = |E G -D| / |E F -D|
            //     t = |E F  G| / |E F -D|
            // Given the determinant as the triple product:
            //     |A B C| = A·(B×C) = B·(C×A) = C·(A×B)
            // Given that we can invert the sign by switching the order of the cross product:
            //     |A B C| = A·(B×C) = -A·(C×B)
            // We arrive at:
            //     k = D·(F×G) / D·(F×E)
            //     l = D·(G×E) / D·(F×E)
            //     t = G·(E×F) / D·(F×E)
            cross(N, F, E);
            let denominator = dot(direction, N);
            if (denominator >= 0) {
                // The tri's normal and the ray's direction are too similar.
                // The ray would intersect the tri from the back side.
                continue;
            }
            // k = D·(F×G) / D·(F×G). Don't divide by D·(F×G) to save cycles, and
            // flip the comparison to emulate the negative denomiator.
            let k = dot(direction, cross(M, F, G));
            if (k > 0) {
                // Barycentric coordinate < 0, no intersection.
                continue;
            }
            // l = D·(G×E) / D·(F×G). Don't divide by D·(F×G) to save cycles, and
            // flip the comparison to emulate the negative denomiator.
            let l = dot(direction, cross(M, G, E));
            if (l > 0) {
                // Barycentric coordinate < 0, no intersection.
                continue;
            }
            // m = 1 - k - l when k and l are divided by the denominator.
            let m = denominator - k - l;
            if (m > 0) {
                // Barycentric coordinate < 0, no intersection.
                continue;
            }
            // t = G·(E×F) / D·(F×G)
            // G·(E×F) = -G·(F×E) = -G·N
            let t = -dot(G, N) / denominator;
            // Intersection is O + tD.
            let intersection = [0, 0, 0];
            scale(intersection, direction, t);
            add(intersection, intersection, origin);
            return { TriIndex: tri, Point: intersection };
        }
        return null;
    }

    function create_entity(world) {
        if (world.Graveyard.length > 0) {
            return world.Graveyard.pop();
        }
        if (DEBUG && world.Signature.length > 10000) {
            throw new Error("No more entities available.");
        }
        // Push a new signature and return its index.
        return world.Signature.push(0) - 1;
    }
    function instantiate(game, blueprint) {
        let entity = create_entity(game.World);
        for (let mixin of blueprint) {
            if (mixin) {
                mixin(game, entity);
            }
        }
        return entity;
    }

    function children(...blueprints) {
        return (game, entity) => {
            let child_entities = [];
            for (let blueprint of blueprints) {
                let child = instantiate(game, blueprint);
                child_entities.push(child);
            }
            game.World.Signature[entity] |= 2 /* Children */;
            game.World.Children[entity] = {
                Children: child_entities,
            };
        };
    }
    /**
     * Yield entities matching a component mask. The query is tested against the
     * parent and all its descendants.
     *
     * @param world World object which stores the component data.
     * @param parent Parent entity to traverse.
     * @param mask Component mask to look for.
     */
    function* query_all(world, parent, mask) {
        if (world.Signature[parent] & mask) {
            yield parent;
        }
        if (world.Signature[parent] & 2 /* Children */) {
            for (let child of world.Children[parent].Children) {
                yield* query_all(world, child, mask);
            }
        }
    }

    const QUERY$3 = 8192 /* Transform */ | 1 /* Camera */ | 512 /* Pick */;
    const TARGET = 8192 /* Transform */ | 4 /* Collide */ | 1024 /* Pickable */;
    function sys_pick(game, delta) {
        game.Pick = undefined;
        let pickables = [];
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & TARGET) == TARGET) {
                pickables.push(game.World.Collide[i]);
            }
        }
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$3) == QUERY$3) {
                update$1(game, i, pickables);
            }
        }
    }
    function update$1(game, entity, pickables) {
        let transform = game.World.Transform[entity];
        let camera = game.World.Camera[entity];
        let x = (game.InputState.MouseX / game.ViewportWidth) * 2 - 1;
        // In the browser, +Y is down. Invert it, so that in NDC it's up.
        let y = -(game.InputState.MouseY / game.ViewportHeight) * 2 + 1;
        // The ray's origin is at the camera's world position.
        let origin = get_translation([0, 0, 0], transform.World);
        // The target is the point on the far plane where the mouse click happens;
        // first transform it to the eye space, and then to the world space.
        let target = [x, y, -1];
        transform_point(target, target, camera.Unprojection);
        transform_point(target, target, transform.World);
        // The ray's direction.
        let direction = [0, 0, 0];
        subtract(direction, target, origin);
        normalize(direction, direction);
        let hit = ray_intersect_aabb(pickables, origin, direction);
        if (hit) {
            let collider = hit.Collider;
            let entity = collider.Entity;
            game.Pick = {
                Entity: entity,
                Collider: collider,
                Point: hit.Point,
            };
            for (let child of query_all(game.World, entity, 1024 /* Pickable */)) {
                let pickable = game.World.Pickable[child];
                if (pickable.Mesh) {
                    // The ray in the pickable's self space.
                    let origin_self = [0, 0, 0];
                    let direction_self = [0, 0, 0];
                    let transform = game.World.Transform[entity];
                    // Transform the ray to the pickable's space, which is cheaper than
                    // transforming all vertices of the pickable to the world space.
                    transform_point(origin_self, origin, transform.Self);
                    transform_direction(direction_self, direction, transform.Self);
                    let hit = ray_intersect_mesh(pickable.Mesh, origin, direction);
                    if (hit) {
                        // Transform the intersection point back to the world space.
                        transform_point(hit.Point, hit.Point, transform.World);
                        game.Pick.Entity = child;
                        game.Pick.Point = hit.Point;
                        game.Pick.TriIndex = hit.TriIndex;
                        return;
                    }
                }
            }
        }
    }

    const QUERY$2 = 8192 /* Transform */ | 2048 /* Render */;
    function sys_render(game, delta) {
        for (let camera of game.Cameras) {
            switch (camera.Kind) {
                case 0 /* Display */:
                    render_display(game, camera);
                    break;
                case 1 /* Framebuffer */:
                    render_framebuffer(game, camera);
                    break;
            }
        }
    }
    function render_display(game, camera) {
        game.Gl.bindFramebuffer(GL_FRAMEBUFFER, null);
        game.Gl.viewport(0, 0, game.ViewportWidth, game.ViewportHeight);
        game.Gl.clearColor(...camera.ClearColor);
        game.Gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        render(game, camera);
    }
    function render_framebuffer(game, camera) {
        game.Gl.bindFramebuffer(GL_FRAMEBUFFER, camera.Target);
        game.Gl.viewport(0, 0, camera.ViewportWidth, camera.ViewportHeight);
        game.Gl.clearColor(...camera.ClearColor);
        game.Gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        render(game, camera, camera.RenderTexture);
    }
    function render(game, eye, current_target) {
        // Keep track of the current material to minimize switching.
        let current_material = null;
        let current_front_face = null;
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$2) === QUERY$2) {
                let transform = game.World.Transform[i];
                let render = game.World.Render[i];
                if (render.Material !== current_material) {
                    current_material = render.Material;
                    switch (render.Kind) {
                        case 0 /* ColoredUnlit */:
                            use_colored_unlit(game, render.Material, eye);
                            break;
                        case 1 /* ColoredDiffuse */:
                            use_colored_diffuse(game, render.Material, eye);
                            break;
                        case 2 /* ColoredSpecular */:
                            use_colored_specular(game, render.Material, eye);
                            break;
                        case 3 /* TexturedUnlit */:
                            use_textured_unlit(game, render.Material, eye);
                            break;
                        case 4 /* TexturedDiffuse */:
                            use_textured_diffuse(game, render.Material, eye);
                            break;
                        case 5 /* Vertices */:
                            use_vertices(game, render.Material, eye);
                            break;
                    }
                }
                if (render.FrontFace !== current_front_face) {
                    current_front_face = render.FrontFace;
                    game.Gl.frontFace(render.FrontFace);
                }
                switch (render.Kind) {
                    case 0 /* ColoredUnlit */:
                        draw_colored_unlit(game, transform, render);
                        break;
                    case 1 /* ColoredDiffuse */:
                        draw_colored_diffuse(game, transform, render);
                        break;
                    case 2 /* ColoredSpecular */:
                        draw_colored_specular(game, transform, render);
                        break;
                    case 3 /* TexturedUnlit */:
                        // Prevent feedback loop between the active render target
                        // and the texture being rendered.
                        if (render.Texture !== current_target) {
                            draw_textured_unlit(game, transform, render);
                        }
                        break;
                    case 4 /* TexturedDiffuse */:
                        // Prevent feedback loop between the active render target
                        // and the texture being rendered.
                        if (render.Texture !== current_target) {
                            draw_textured_diffuse(game, transform, render);
                        }
                        break;
                    case 5 /* Vertices */:
                        draw_vertices(game, transform, render);
                        break;
                }
            }
        }
    }
    function use_colored_unlit(game, material, eye) {
        game.Gl.useProgram(material.Program);
        game.Gl.uniformMatrix4fv(material.Locations.Pv, false, eye.Pv);
    }
    function draw_colored_unlit(game, transform, render) {
        game.Gl.uniformMatrix4fv(render.Material.Locations.World, false, transform.World);
        game.Gl.uniform4fv(render.Material.Locations.Color, render.Color);
        game.ExtVao.bindVertexArrayOES(render.Vao);
        game.Gl.drawElements(render.Material.Mode, render.Mesh.IndexCount, GL_UNSIGNED_SHORT, 0);
        game.ExtVao.bindVertexArrayOES(null);
    }
    function use_colored_diffuse(game, material, eye) {
        game.Gl.useProgram(material.Program);
        game.Gl.uniformMatrix4fv(material.Locations.Pv, false, eye.Pv);
        game.Gl.uniform4fv(material.Locations.LightPositions, game.LightPositions);
        game.Gl.uniform4fv(material.Locations.LightDetails, game.LightDetails);
    }
    function draw_colored_diffuse(game, transform, render) {
        game.Gl.uniformMatrix4fv(render.Material.Locations.World, false, transform.World);
        game.Gl.uniformMatrix4fv(render.Material.Locations.Self, false, transform.Self);
        game.Gl.uniform4fv(render.Material.Locations.Color, render.Color);
        game.ExtVao.bindVertexArrayOES(render.Vao);
        game.Gl.drawElements(render.Material.Mode, render.Mesh.IndexCount, GL_UNSIGNED_SHORT, 0);
        game.ExtVao.bindVertexArrayOES(null);
    }
    function use_colored_specular(game, material, eye) {
        game.Gl.useProgram(material.Program);
        game.Gl.uniformMatrix4fv(material.Locations.Pv, false, eye.Pv);
        game.Gl.uniform3fv(material.Locations.Eye, eye.Position);
        game.Gl.uniform4fv(material.Locations.LightPositions, game.LightPositions);
        game.Gl.uniform4fv(material.Locations.LightDetails, game.LightDetails);
    }
    function draw_colored_specular(game, transform, render) {
        game.Gl.uniformMatrix4fv(render.Material.Locations.World, false, transform.World);
        game.Gl.uniformMatrix4fv(render.Material.Locations.Self, false, transform.Self);
        game.Gl.uniform4fv(render.Material.Locations.ColorDiffuse, render.ColorDiffuse);
        game.Gl.uniform4fv(render.Material.Locations.ColorSpecular, render.ColorSpecular);
        game.Gl.uniform1f(render.Material.Locations.Shininess, render.Shininess);
        game.ExtVao.bindVertexArrayOES(render.Vao);
        game.Gl.drawElements(render.Material.Mode, render.Mesh.IndexCount, GL_UNSIGNED_SHORT, 0);
        game.ExtVao.bindVertexArrayOES(null);
    }
    function use_textured_unlit(game, material, eye) {
        game.Gl.useProgram(material.Program);
        game.Gl.uniformMatrix4fv(material.Locations.Pv, false, eye.Pv);
    }
    function draw_textured_unlit(game, transform, render) {
        game.Gl.uniformMatrix4fv(render.Material.Locations.World, false, transform.World);
        game.Gl.activeTexture(GL_TEXTURE0);
        game.Gl.bindTexture(GL_TEXTURE_2D, render.Texture);
        game.Gl.uniform1i(render.Material.Locations.Sampler, 0);
        game.Gl.uniform4fv(render.Material.Locations.Color, render.Color);
        game.ExtVao.bindVertexArrayOES(render.Vao);
        game.Gl.drawElements(render.Material.Mode, render.Mesh.IndexCount, GL_UNSIGNED_SHORT, 0);
        game.ExtVao.bindVertexArrayOES(null);
    }
    function use_textured_diffuse(game, material, eye) {
        game.Gl.useProgram(material.Program);
        game.Gl.uniformMatrix4fv(material.Locations.Pv, false, eye.Pv);
        game.Gl.uniform4fv(material.Locations.LightPositions, game.LightPositions);
        game.Gl.uniform4fv(material.Locations.LightDetails, game.LightDetails);
    }
    function draw_textured_diffuse(game, transform, render) {
        game.Gl.uniformMatrix4fv(render.Material.Locations.World, false, transform.World);
        game.Gl.uniformMatrix4fv(render.Material.Locations.Self, false, transform.Self);
        game.Gl.activeTexture(GL_TEXTURE0);
        game.Gl.bindTexture(GL_TEXTURE_2D, render.Texture);
        game.Gl.uniform1i(render.Material.Locations.Sampler, 0);
        game.Gl.uniform4fv(render.Material.Locations.Color, render.Color);
        game.ExtVao.bindVertexArrayOES(render.Vao);
        game.Gl.drawElements(render.Material.Mode, render.Mesh.IndexCount, GL_UNSIGNED_SHORT, 0);
        game.ExtVao.bindVertexArrayOES(null);
    }
    function use_vertices(game, material, eye) {
        game.Gl.useProgram(material.Program);
        game.Gl.uniformMatrix4fv(material.Locations.Pv, false, eye.Pv);
    }
    function draw_vertices(game, transform, render) {
        game.Gl.uniformMatrix4fv(render.Material.Locations.World, false, transform.World);
        game.Gl.uniform4fv(render.Material.Locations.Color, render.Color);
        game.Gl.bindBuffer(GL_ARRAY_BUFFER, render.VertexBuffer);
        game.Gl.enableVertexAttribArray(render.Material.Locations.VertexPosition);
        game.Gl.vertexAttribPointer(render.Material.Locations.VertexPosition, 3, GL_FLOAT, false, 0, 0);
        game.Gl.drawArrays(render.Material.Mode, 0, render.IndexCount);
    }

    const QUERY$1 = 8192 /* Transform */ | 4096 /* Selectable */ | 2 /* Children */;
    function sys_select(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$1) == QUERY$1) {
                update(game, i);
            }
        }
    }
    function update(game, entity) {
        var _a;
        let children = game.World.Children[entity];
        let selectable = game.World.Selectable[entity];
        if (((_a = game.Pick) === null || _a === void 0 ? void 0 : _a.Entity) === entity) {
            // When the cursor is over the entity…
            // …select it if the user clicks.
            if (!selectable.Selected && game.InputDelta["Mouse0"] === -1) {
                selectable.Selected = true;
                game.World.Signature[entity] |= 8 /* ControlPlayer */;
                // Selection box is the first child.
                let selection = children.Children[0];
                game.World.Signature[selection] |= 16 /* Draw */;
            }
        }
        else {
            // When the cursor is not over the entity…
            // …deselect it if the user clicks.
            if (selectable.Selected && game.InputDelta["Mouse0"] === -1) {
                selectable.Selected = false;
                game.World.Signature[entity] &= ~8 /* ControlPlayer */;
                // Selection box is the first child.
                let selection = children.Children[0];
                game.World.Signature[selection] &= ~16 /* Draw */;
            }
        }
    }

    const QUERY = 8192 /* Transform */;
    function sys_transform(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY) === QUERY) {
                let transform = game.World.Transform[i];
                if (transform.Dirty) {
                    update_transform(game.World, i, transform);
                }
            }
        }
    }
    function update_transform(world, entity, transform) {
        transform.Dirty = false;
        from_rotation_translation_scale(transform.World, transform.Rotation, transform.Translation, transform.Scale);
        if (transform.Parent !== undefined) {
            let parent_transform = world.Transform[transform.Parent];
            multiply$1(transform.World, parent_transform.World, transform.World);
        }
        invert(transform.Self, transform.World);
        if (world.Signature[entity] & 2 /* Children */) {
            let children = world.Children[entity];
            for (let child of children.Children) {
                if (world.Signature[child] & 8192 /* Transform */) {
                    let child_transform = world.Transform[child];
                    child_transform.Parent = entity;
                    update_transform(world, child, child_transform);
                }
            }
        }
    }

    class World {
        constructor() {
            this.Signature = [];
            this.Graveyard = [];
            // Component data
            this.Camera = [];
            this.Children = [];
            this.Collide = [];
            this.ControlPlayer = [];
            this.Draw = [];
            this.Highlightable = [];
            this.Light = [];
            this.Move = [];
            this.NavAgent = [];
            this.Pickable = [];
            this.Render = [];
            this.Selectable = [];
            this.Transform = [];
        }
    }

    class Game {
        constructor() {
            this.World = new World();
            this.ViewportWidth = 0;
            this.ViewportHeight = 0;
            this.ViewportResized = false;
            this.InputState = {
                MouseX: 0,
                MouseY: 0,
            };
            this.InputDelta = {
                MouseX: 0,
                MouseY: 0,
            };
            this.Ui = document.querySelector("main");
            this.CanvasScene = document.querySelector("canvas#scene");
            this.Gl = this.CanvasScene.getContext("webgl");
            this.ExtVao = this.Gl.getExtension("OES_vertex_array_object");
            this.CanvasBillboard = document.querySelector("canvas#billboard");
            this.Context2D = this.CanvasBillboard.getContext("2d");
            this.MaterialColoredUnlitLine = mat1_colored_unlit_line(this.Gl);
            this.MaterialColoredDiffuseGouraud = mat1_colored_diffuse_gouraud(this.Gl);
            this.MeshCube = mesh_cube(this.Gl);
            this.MeshSoldier = mesh_soldier(this.Gl);
            this.Regions = {
                Europe: [],
            };
            // The rendering pipeline supports 8 lights.
            this.LightPositions = new Float32Array(4 * 8);
            this.LightDetails = new Float32Array(4 * 8);
            this.Cameras = [];
            document.addEventListener("visibilitychange", () => document.hidden ? loop_stop() : loop_start(this));
            this.Ui.addEventListener("contextmenu", (evt) => evt.preventDefault());
            this.Ui.addEventListener("mousedown", (evt) => {
                this.InputState[`Mouse${evt.button}`] = 1;
                this.InputDelta[`Mouse${evt.button}`] = 1;
            });
            this.Ui.addEventListener("mouseup", (evt) => {
                this.InputState[`Mouse${evt.button}`] = 0;
                this.InputDelta[`Mouse${evt.button}`] = -1;
            });
            this.Ui.addEventListener("mousemove", (evt) => {
                this.InputState.MouseX = evt.offsetX;
                this.InputState.MouseY = evt.offsetY;
                this.InputDelta.MouseX = evt.movementX;
                this.InputDelta.MouseY = evt.movementY;
            });
            this.Ui.addEventListener("wheel", (evt) => {
                this.InputDelta.WheelY = evt.deltaY;
            });
            window.addEventListener("keydown", (evt) => {
                if (!evt.repeat) {
                    this.InputState[evt.code] = 1;
                    this.InputDelta[evt.code] = 1;
                }
            });
            window.addEventListener("keyup", (evt) => {
                this.InputState[evt.code] = 0;
                this.InputDelta[evt.code] = -1;
            });
            this.Gl.enable(GL_DEPTH_TEST);
            this.Gl.enable(GL_CULL_FACE);
        }
        FrameReset() {
            this.ViewportResized = false;
            for (let name in this.InputDelta) {
                this.InputDelta[name] = 0;
            }
        }
        FrameUpdate(delta) {
            let now = performance.now();
            // User input.
            sys_pick(this);
            sys_highlight(this);
            sys_select(this);
            sys_control_pick(this);
            sys_control_keyboard(this);
            sys_control_mouse(this);
            // Game logic.
            sys_nav(this);
            sys_move(this, delta);
            sys_transform(this);
            sys_collide(this);
            // Rendering.
            sys_camera(this);
            sys_light(this);
            sys_render(this);
            sys_draw(this);
            sys_framerate(this, delta, performance.now() - now);
        }
    }

    function camera_display_perspective(fovy, near, far, clear_color = [0.9, 0.9, 0.9, 1]) {
        return (game, entity) => {
            game.World.Signature[entity] |= 1 /* Camera */;
            game.World.Camera[entity] = {
                Kind: 0 /* Display */,
                FovY: fovy,
                Near: near,
                Far: far,
                View: create(),
                Projection: create(),
                Unprojection: create(),
                Pv: create(),
                Position: [0, 0, 0],
                ClearColor: clear_color,
            };
        };
    }

    function control_player(move, yaw, pitch, zoom) {
        return (game, entity) => {
            game.World.Signature[entity] |= 8 /* ControlPlayer */;
            game.World.ControlPlayer[entity] = {
                Move: move,
                Yaw: yaw,
                Pitch: pitch,
                Zoom: zoom,
            };
        };
    }

    /**
     * The Move mixin.
     *
     * @param move_speed - Movement speed in units per second.
     * @param rotation_speed - Rotation speed, in radians per second.
     */
    function move(move_speed, rotation_speed) {
        return (game, entity) => {
            game.World.Signature[entity] |= 128 /* Move */;
            game.World.Move[entity] = {
                MoveSpeed: move_speed,
                RotationSpeed: rotation_speed,
                Directions: [],
                LocalRotations: [],
                SelfRotations: [],
            };
        };
    }

    function pick() {
        return (game, entity) => {
            game.World.Signature[entity] |= 512 /* Pick */;
        };
    }

    function transform(translation = [0, 0, 0], rotation = [0, 0, 0, 1], scale = [1, 1, 1]) {
        return (game, entity) => {
            game.World.Signature[entity] |= 8192 /* Transform */;
            game.World.Transform[entity] = {
                World: create(),
                Self: create(),
                Translation: translation,
                Rotation: rotation,
                Scale: scale,
                Dirty: true,
            };
        };
    }

    function blueprint_camera(game) {
        return [
            control_player(true, true, true, false),
            move(100, 1),
            children([
                transform([0, 50, -29], from_euler([0, 0, 0, 0], -60, 180, 0)),
                control_player(false, false, false, true),
                move(200, 0),
                camera_display_perspective(1, 0.1, 1000),
                pick(),
            ]),
        ];
    }

    /**
     * Add the Collide component.
     *
     * @param dynamic Dynamic colliders collider with all colliders. Static
     * colliders collide only with dynamic colliders.
     * @param layers Bit field with layers this collider is on.
     * @param mask Bit mask with layers visible to this collider.
     * @param size Size of the collider relative to the entity's transform.
     */
    function collide(dynamic, layers, mask, size = [1, 1, 1]) {
        return (game, entity) => {
            game.World.Signature[entity] |= 4 /* Collide */;
            game.World.Collide[entity] = {
                Entity: entity,
                New: true,
                Dynamic: dynamic,
                Layers: layers,
                Signature: mask,
                Size: size,
                Min: [0, 0, 0],
                Max: [0, 0, 0],
                Center: [0, 0, 0],
                Half: [0, 0, 0],
                Collisions: [],
            };
        };
    }

    function disable(mask) {
        return (game, entity) => {
            game.World.Signature[entity] &= ~mask;
        };
    }

    function draw_selection(color) {
        return (game, entity) => {
            game.World.Signature[entity] |= 16 /* Draw */;
            game.World.Draw[entity] = {
                Kind: 2 /* Selection */,
                Color: color,
            };
        };
    }

    function highlightable(kind) {
        return (game, entity) => {
            game.World.Signature[entity] |= 32 /* Highlightable */;
            game.World.Highlightable[entity] = {
                Kind: kind,
                Highlighted: false,
            };
        };
    }

    function light_directional(color = [1, 1, 1], range = 1) {
        return (game, entity) => {
            game.World.Signature[entity] |= 64 /* Light */;
            game.World.Light[entity] = {
                Kind: 1 /* Directional */,
                Color: color,
                Intensity: range ** 2,
            };
        };
    }

    function nav_agent() {
        return (game, entity) => {
            game.World.Signature[entity] |= 256 /* NavAgent */;
            game.World.NavAgent[entity] = {
                Destination: null,
            };
        };
    }

    function pickable(mesh) {
        return (game, entity) => {
            game.World.Signature[entity] |= 1024 /* Pickable */;
            game.World.Pickable[entity] = {
                Mesh: mesh,
            };
        };
    }

    let colored_diffuse_vaos = new WeakMap();
    function render_colored_diffuse(material, mesh, color) {
        return (game, entity) => {
            if (!colored_diffuse_vaos.has(mesh)) {
                // We only need to create the VAO once.
                let vao = game.ExtVao.createVertexArrayOES();
                game.ExtVao.bindVertexArrayOES(vao);
                game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.VertexBuffer);
                game.Gl.enableVertexAttribArray(material.Locations.VertexPosition);
                game.Gl.vertexAttribPointer(material.Locations.VertexPosition, 3, GL_FLOAT, false, 0, 0);
                game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.NormalBuffer);
                game.Gl.enableVertexAttribArray(material.Locations.VertexNormal);
                game.Gl.vertexAttribPointer(material.Locations.VertexNormal, 3, GL_FLOAT, false, 0, 0);
                game.Gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, mesh.IndexBuffer);
                game.ExtVao.bindVertexArrayOES(null);
                colored_diffuse_vaos.set(mesh, vao);
            }
            game.World.Signature[entity] |= 2048 /* Render */;
            game.World.Render[entity] = {
                Kind: 1 /* ColoredDiffuse */,
                Material: material,
                Mesh: mesh,
                FrontFace: GL_CW,
                Vao: colored_diffuse_vaos.get(mesh),
                Color: color,
            };
        };
    }

    function selectable() {
        return (game, entity) => {
            game.World.Signature[entity] |= 4096 /* Selectable */;
            game.World.Selectable[entity] = {
                Selected: false,
            };
        };
    }

    function blueprint_region(game, idx) {
        return [
            transform(),
            pickable(game.Regions.Europe[idx]),
            highlightable(0 /* Region */),
            render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.Regions.Europe[idx], [
                0.3,
                0.3,
                0.8,
                1,
            ]),
            children([
                transform([0, 0.1, 0]),
                false ,
            ]),
        ];
    }
    function scene_stage(game) {
        game.World = new World();
        game.ViewportResized = true;
        game.Gl.clearColor(0.9, 0.9, 0.9, 1);
        // Camera.
        instantiate(game, [...blueprint_camera(), transform([-25, 0, -50], [0, 1, 0, 0])]);
        // Directional light.
        instantiate(game, [transform([-1, 1, 1]), light_directional([1, 1, 1], 1)]);
        // Europe
        instantiate(game, [
            transform(),
            collide(false, 0 /* None */, 0 /* None */, [1000, 1, 1000]),
            pickable(),
            children(blueprint_region(game, 0), blueprint_region(game, 1), blueprint_region(game, 2), blueprint_region(game, 3), blueprint_region(game, 4), blueprint_region(game, 5), blueprint_region(game, 6)),
        ]);
        // Unit 1.
        instantiate(game, [
            transform([-21, 0, -52]),
            control_player(false, false, false, false),
            disable(8 /* ControlPlayer */),
            collide(true, 0 /* None */, 0 /* None */, [2, 2, 2]),
            pickable(),
            highlightable(1 /* Unit */),
            selectable(),
            nav_agent(),
            move(10, 5),
            children([transform(), draw_selection("#ff0"), disable(16 /* Draw */)], [
                transform(),
                render_colored_diffuse(game.MaterialColoredDiffuseGouraud, game.MeshSoldier, [
                    1,
                    1,
                    0,
                    1,
                ]),
            ]),
        ]);
    }

    let game = new Game();
    // @ts-ignore
    window.game = game;
    game.Regions.Europe.push(mesh_eu01(game.Gl), mesh_eu02(game.Gl), mesh_eu03(game.Gl), mesh_eu04(game.Gl), mesh_eu05(game.Gl), mesh_eu06(game.Gl), mesh_eu07(game.Gl));
    scene_stage(game);
    loop_start(game);

}());
