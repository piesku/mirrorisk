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
    /**
     * @constant {number}
     */
    const GL_DATA_UNSIGNED_BYTE = 0x1401;
    /**
     * @constant {number}
     */
    const GL_DATA_UNSIGNED_INT = 0x1405;
    // Pixel formats
    /**
     * @constant {number}
     */
    const GL_DEPTH_COMPONENT = 0x1902;
    /**
     * @constant {number}
     */
    const GL_RGBA = 0x1908;
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
    const GL_LINEAR = 0x2601;
    /**
     * @constant {number}
     */
    const GL_TEXTURE_MAG_FILTER = 0x2800;
    /**
     * @constant {number}
     */
    const GL_TEXTURE_MIN_FILTER = 0x2801;
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
    /**
     * @constant {number}
     */
    const GL_COLOR_ATTACHMENT0 = 0x8ce0;
    /**
     * @constant {number}
     */
    const GL_DEPTH_ATTACHMENT = 0x8d00;
    /**
     * @constant {number}
     */
    const GL_FRAMEBUFFER_COMPLETE = 0x8cd5;
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

    // In WebGL1, the internal format must be the same as the data format (GL_RGBA).
    function resize_texture_rgba(gl, texture, width, height) {
        gl.bindTexture(GL_TEXTURE_2D, texture);
        gl.texImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA, GL_DATA_UNSIGNED_BYTE, null);
        gl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
        gl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
        return texture;
    }
    function resize_texture_depth(gl, texture, width, height) {
        gl.bindTexture(GL_TEXTURE_2D, texture);
        gl.texImage2D(GL_TEXTURE_2D, 0, GL_DEPTH_COMPONENT, width, height, 0, GL_DEPTH_COMPONENT, GL_DATA_UNSIGNED_INT, null);
        gl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
        gl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
        return texture;
    }

    function create_depth_target(gl, width, height) {
        let target = {
            Framebuffer: gl.createFramebuffer(),
            Width: width,
            Height: height,
            ColorTexture: resize_texture_rgba(gl, gl.createTexture(), width, height),
            DepthTexture: resize_texture_depth(gl, gl.createTexture(), width, height),
        };
        gl.bindFramebuffer(GL_FRAMEBUFFER, target.Framebuffer);
        gl.framebufferTexture2D(GL_FRAMEBUFFER, GL_DEPTH_ATTACHMENT, GL_TEXTURE_2D, target.DepthTexture, 0);
        gl.framebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, target.ColorTexture, 0);
        let status = gl.checkFramebufferStatus(GL_FRAMEBUFFER);
        if (status != GL_FRAMEBUFFER_COMPLETE) {
            throw new Error(`Failed to set up the framebuffer (${status}).`);
        }
        return target;
    }

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
    uniform mat4 pv;
    uniform mat4 world;
    uniform mat4 self;

    attribute vec3 position;
    attribute vec3 normal;
    varying vec4 vert_pos;
    varying vec3 vert_normal;

    void main() {
        vert_pos = world * vec4(position, 1.0);
        vert_normal = (vec4(normal, 1.0) * self).xyz;
        gl_Position = pv * vert_pos;
    }
`;
    let fragment$1 = `
    precision mediump float;

    // See Game.LightPositions and Game.LightDetails.
    const int MAX_LIGHTS = 8;

    uniform vec3 eye;
    uniform vec4 color_diffuse;
    uniform vec4 color_specular;
    uniform float shininess;
    uniform vec4 light_positions[MAX_LIGHTS];
    uniform vec4 light_details[MAX_LIGHTS];
    uniform mat4 shadow_space;
    uniform sampler2D shadow_map;

    varying vec4 vert_pos;
    varying vec3 vert_normal;

    void main() {
        vec3 frag_normal = normalize(vert_normal);

        vec3 view_dir = eye - vert_pos.xyz;
        vec3 view_normal = normalize(view_dir);

        // Ambient light.
        vec3 rgb = color_diffuse.rgb * 0.1;

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

            float diffuse_factor = dot(frag_normal, light_normal);
            if (diffuse_factor > 0.0) {
                // Diffuse color.
                rgb += color_diffuse.rgb * diffuse_factor * light_color * light_intensity;

                // Phong reflection model.
                // vec3 r = reflect(-light_normal, frag_normal);
                // float specular_angle = max(dot(r, view_normal), 0.0);
                // float specular_factor = pow(specular_angle, shininess);

                // Blinn-Phong reflection model.
                vec3 h = normalize(light_normal + view_normal);
                float specular_angle = max(dot(h, frag_normal), 0.0);
                float specular_factor = pow(specular_angle, shininess);

                // Specular color.
                rgb += color_specular.rgb * specular_factor * light_color * light_intensity;
            }
        }

        gl_FragColor = vec4(rgb, 1.0);

        vec4 shadow_space_pos = shadow_space * vert_pos;
        vec3 shadow_space_ndc = shadow_space_pos.xyz / shadow_space_pos.w;
        // Transform the [-1, 1] NDC to [0, 1] to match the shadow texture data.
        shadow_space_ndc = shadow_space_ndc * 0.5 + 0.5;
        float shadow_map_depth = texture2D(shadow_map, shadow_space_ndc.xy).x;
        if (shadow_map_depth < shadow_space_ndc.z - 0.001) {
            // In shadow.
            gl_FragColor.rgb *= 0.1;
        }
    }
`;
    function mat1_colored_specular_phong(gl) {
        let program = link(gl, vertex$1, fragment$1);
        return {
            Mode: GL_TRIANGLES,
            Program: program,
            Locations: {
                Pv: gl.getUniformLocation(program, "pv"),
                World: gl.getUniformLocation(program, "world"),
                Self: gl.getUniformLocation(program, "self"),
                Eye: gl.getUniformLocation(program, "eye"),
                ColorDiffuse: gl.getUniformLocation(program, "color_diffuse"),
                ColorSpecular: gl.getUniformLocation(program, "color_specular"),
                Shininess: gl.getUniformLocation(program, "shininess"),
                LightPositions: gl.getUniformLocation(program, "light_positions"),
                LightDetails: gl.getUniformLocation(program, "light_details"),
                ShadowMap: gl.getUniformLocation(program, "shadow_map"),
                ShadowSpace: gl.getUniformLocation(program, "shadow_space"),
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

    void main() {
        float z = gl_FragCoord.z * 10.0;
        gl_FragColor = vec4(z, z, z, 1.0);
    }
`;
    function mat1_depth(gl) {
        let program = link(gl, vertex, fragment);
        return {
            Mode: GL_TRIANGLES,
            Program: program,
            Locations: {
                Pv: gl.getUniformLocation(program, "pv"),
                World: gl.getUniformLocation(program, "world"),
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
        -0.167295, 2.24354, -0.253657,
        -0.312891, 2.30913, -0.278707,
        -0.235879, 2.11911, -0.256966,
        -0.34609, 1.65975, -0.36444,
        -0.322782, 1.66462, -0.349527,
        -0.396649, 1.57738, -0.297771,
        0.665131, 1.25359, -0.186453,
        0.58506, 1.53283, -0.182485,
        0.604904, 1.54383, -0.176617,
        -0.425852, 2.02387, 0.246011,
        -0.360254, 2.04771, 0.19612,
        -0.359553, 2.04884, 0.193611,
        0.027983, 2.28152, 0.403838,
        0.03462, 2.34391, 0.437022,
        -0.031617, 2.34391, 0.443527,
        0.087583, 3.45135, -0.297025,
        0.216871, 2.65478, -0.210744,
        0.087583, 2.65478, -0.297025,
        0.072891, 1.99663, 0.390063,
        0.058249, 2.20772, 0.321101,
        -0.116122, 2.19684, 0.308117,
        0.574677, 1.19465, -0.117374,
        0.572666, 1.20378, -0.127501,
        0.600752, 1.16545, -0.10535,
        -0.446426, 3.75001, 0.719093,
        -0.48293, 1.67561, 0.676616,
        -0.446426, 1.59069, 0.719093,
        0.301293, 2.34391, 0.037876,
        0.30685, 2.65478, 0.171461,
        0.301293, 2.34391, 0.170349,
        -0.467133, 1.80831, -0.429366,
        -0.526733, 1.77645, -0.341891,
        -0.537485, 1.90441, -0.32198,
        0.586948, 1.21324, 0.180039,
        0.571215, 1.19465, 0.143923,
        0.585062, 1.15569, 0.112561,
        -0.397964, 0.39835, -0.606553,
        -0.488543, 1.19465, -0.315859,
        -0.318849, 1.19465, -0.485553,
        -0.519111, 1.36668, 0.438327,
        -0.549299, 1.35407, 0.485738,
        -0.60132, 1.4142, 0.455621,
        0.248728, 2.14055, 0.259417,
        0.273949, 2.00728, 0.379679,
        0.342575, 2.05082, 0.286762,
        -0.450541, 2.12316, -0.026503,
        -0.526733, 1.96945, 0.185216,
        -0.425852, 2.02387, 0.246011,
        0.423944, 1.19465, 0.426934,
        0.230145, 1.32752, 0.556488,
        0.230145, 1.19465, 0.556488,
        -0.456381, 1.53989, -0.217168,
        -0.396649, 1.57738, -0.297771,
        -0.327435, 1.32752, -0.444673,
        -0.463151, 2.78765, 0.336406,
        -0.436673, 2.65478, 0.203667,
        -0.463151, 2.65478, 0.336406,
        0.56626, 1.23014, -0.159756,
        0.572666, 1.20378, -0.127501,
        0.553497, 1.19465, -0.224018,
        0.423944, 1.19465, -0.417817,
        0.26239, 1.19465, -0.525815,
        0.330725, 1.2608, -0.480134,
        -0.496336, 3.75001, 0.618477,
        -0.48293, 3.75001, 0.676616,
        -0.310368, 3.75001, 0.676616,
        -0.105158, 1.19095, -0.572031,
        -0.273334, 1.24204, -0.763735,
        -0.015209, 1.19465, -0.589435,
        -0.310368, 1.90814, 0.560337,
        -0.296962, 1.95803, 0.535382,
        -0.331814, 1.95803, 0.535382,
        0.705616, 0.39835, 0.708606,
        0.382529, 0, 0.92444,
        0.705616, 0, 0.708606,
        -0.090954, 1.83791, 0.431244,
        -0.324339, 2.01501, 0.212064,
        -0.29685, 1.93337, 0.2845,
        0.171076, 1.78176, 0.501932,
        0.049885, 1.90295, 0.483481,
        0.096764, 1.85604, 0.490625,
        0.002936, 1.76632, 0.518047,
        -0.043961, 1.81322, 0.510958,
        -0.090892, 1.85604, 0.490625,
        -0.397964, 0.39835, 0.61567,
        -0.357262, 0.829619, 0.553318,
        -0.379149, 0.829619, 0.535515,
        -0.716395, 0.39835, -0.128309,
        -0.609544, 0.39835, -0.394974,
        -0.918314, 0.39835, -0.376403,
        0.087583, 3.45135, 0.438881,
        0.216871, 2.78765, 0.3526,
        0.216871, 3.45135, 0.3526,
        -0.310368, 2.78765, 0.560337,
        -0.296962, 3.75001, 0.618477,
        -0.296962, 2.78765, 0.618477,
        -0.346872, 3.75001, 0.51786,
        -0.396649, 2.78765, 0.50233,
        -0.396649, 3.75001, 0.50233,
        0.614425, 1.11753, 0.007611,
        0.588038, 1.145, 0.103181,
        0.601016, 1.12376, 0.002013,
        -0.106349, 3.30746, 0.46099,
        -0.164356, 3.01981, 0.50233,
        -0.106349, 3.30746, 0.50233,
        0.679637, 1.33106, 0.213562,
        0.611978, 1.31168, 0.213589,
        0.648007, 1.31345, 0.218268,
        -0.48293, 1.90814, 0.560337,
        -0.496336, 3.75001, 0.618477,
        -0.48293, 3.75001, 0.560337,
        0.553497, 1.32752, -0.224018,
        0.423944, 1.32752, -0.417817,
        -0.379393, 0.39835, -0.915323,
        0.001568, 0, -0.990985,
        -0.379393, 0, -0.915323,
        -0.268025, 2.00728, 0.379679,
        -0.242804, 2.14055, 0.259417,
        -0.336784, 2.05082, 0.286762,
        -0.195304, 2.10499, 0.305681,
        -0.242804, 2.14055, 0.259417,
        -0.174179, 2.09715, 0.352202,
        0.58506, 1.53283, -0.182485,
        0.665131, 1.25359, -0.186453,
        0.565173, 1.32752, -0.165232,
        -0.396649, 1.83039, 0.40546,
        -0.446426, 1.82539, 0.51786,
        -0.396649, 1.81467, 0.50233,
        -0.064801, 2.65478, -0.327422,
        -0.064801, 3.45135, -0.327422,
        0.823088, 1.3199, -0.071531,
        0.830384, 1.32665, -0.046079,
        0.827471, 1.31319, -0.067121,
        0.216871, 2.65478, 0.618078,
        0.303151, 2.78765, 0.488791,
        0.216871, 2.78765, 0.618078,
        0.369123, 2.05984, 0.264727,
        0.307208, 2.10053, 0.196268,
        0.35109, 2.04969, 0.253877,
        0.798819, 1.35126, 0.137242,
        0.837559, 1.27814, 0.068937,
        0.838906, 1.3436, 0.032841,
        -0.379393, 0, -0.915323,
        0.997111, 0, 0.004558,
        0.001568, 0, 1.0001,
        0.49168, 1.19465, 0.324976,
        0.4011, 0.39835, 0.61567,
        0.61268, 0.39835, 0.40409,
        -0.389481, 2.31523, -0.535557,
        -0.447488, 2.13391, -0.326493,
        -0.389481, 2.26625, -0.305122,
        0.100481, 2.65478, 0.422987,
        0.098335, 2.34391, 0.417775,
        0.208376, 2.34391, 0.344105,
        -0.217186, 2.65478, -0.297025,
        -0.064801, 3.45135, -0.327422,
        -0.064801, 2.65478, -0.327422,
        0.250719, 2.34391, 0.292735,
        0.450624, 1.45004, -0.726303,
        0.450624, 2.13391, -0.326493,
        0.450624, 1.39827, -0.48286,
        -0.634688, 1.62605, 0.532678,
        -0.66226, 1.5265, 0.535515,
        -0.635447, 1.62605, 0.535515,
        0.392617, 2.31523, -0.535557,
        0.450624, 2.18568, -0.569936,
        0.382529, 0.39835, -0.915323,
        0.001568, 0, -0.990985,
        0.001568, 0.39835, -0.990985,
        -0.316188, 2.0903, 0.180975,
        -0.359553, 2.04884, 0.193611,
        -0.360254, 2.04771, 0.19612,
        0.557081, 1.70583, -0.288795,
        0.487659, 1.6465, -0.282158,
        0.454474, 1.97356, -0.339236,
        0.392617, 1.26872, -0.517239,
        0.392617, 1.3177, -0.747674,
        -0.288865, 2.38851, -0.508213,
        -0.273334, 2.3909, -0.519495,
        -0.346872, 2.32187, -0.566485,
        -0.338433, 2.04227, 0.195661,
        -0.316188, 2.0903, 0.180975,
        -0.326759, 2.02566, 0.200773,
        -0.432754, 2.65478, 0.488791,
        -0.432754, 2.78765, 0.488791,
        -0.463151, 2.65478, 0.070928,
        -0.436673, 2.78765, 0.203667,
        0.24438, 1.19164, -0.526491,
        0.321986, 1.19465, -0.485553,
        0.4011, 0.39835, -0.606553,
        0.907645, 1.37106, 0.075043,
        0.798819, 1.35126, 0.137242,
        0.838906, 1.3436, 0.032841,
        -0.296962, 1.55396, 0.631407,
        -0.296962, 1.62605, 0.559316,
        -0.296962, 1.7515, 0.578381,
        0.037083, 2.38543, -0.241156,
        0.09428, 2.30608, -0.264371,
        0.001568, 2.32501, -0.27391,
        -0.303486, 2.65478, 0.646767,
        -0.303486, 2.78765, 0.646767,
        -0.310368, 3.75001, 0.676616,
        0.92145, 0.39835, -0.376403,
        0.705616, 0, -0.69949,
        0.705616, 0.39835, -0.69949,
        -0.609544, 0.39835, 0.40409,
        -0.488543, 1.19465, 0.324976,
        -0.574297, 1.19465, 0.111151,
        0.195766, 0.39835, 0.980987,
        0.001568, 0.39835, 1.0001,
        0.001568, 0, 1.0001,
        0.087583, 2.78765, 0.704359,
        0.087583, 2.78765, 0.438881,
        -0.064801, 2.78765, 0.469278,
        0.514339, 1.7649, 0.321805,
        0.579382, 1.62791, 0.275081,
        0.604336, 1.8172, 0.244285,
        -0.391386, 2.09889, -0.288954,
        -0.396649, 2.14095, -0.075483,
        -0.311787, 2.09983, -0.172803,
        0.002936, 1.76632, 0.518047,
        0.096764, 1.85604, 0.490625,
        0.049885, 1.81322, 0.510958,
        -0.635447, 1.5265, 0.635069,
        -0.635447, 1.42694, 0.535515,
        -0.61235, 1.42694, 0.621795,
        0.268108, 2.28152, 0.163713,
        0.250719, 2.34391, 0.292735,
        0.172973, 2.23097, 0.266667,
        -0.595758, 1.35062, 0.432509,
        -0.550228, 1.58829, 0.010175,
        -0.541473, 1.56096, 0.051535,
        0.61268, 0.39835, -0.394974,
        0.585411, 1.16229, -0.085212,
        0.601016, 1.12376, 0.002013,
        -0.217186, 2.78765, 0.438881,
        -0.346474, 3.45135, 0.3526,
        -0.346474, 2.78765, 0.3526,
        0.553497, 1.19465, 0.233135,
        0.553497, 1.2985, 0.233135,
        0.510315, 1.29796, 0.297731,
        -0.350211, 1.3456, 0.430676,
        -0.390062, 1.35392, 0.396189,
        -0.466417, 1.32752, 0.310469,
        0.571215, 1.19465, 0.143923,
        0.56579, 1.22307, 0.171242,
        -0.163714, 2.65478, 0.422987,
        -0.031617, 2.34391, 0.443527,
        -0.031617, 2.65478, 0.449198,
        0.511203, 1.31397, 0.296403,
        0.510315, 1.29796, 0.297731,
        0.513808, 1.29965, 0.301496,
        -0.313952, 2.28152, -0.01283,
        -0.289756, 2.27665, -0.049311,
        -0.301805, 2.24607, 0.050287,
        0.49168, 1.19465, -0.315859,
        0.321986, 1.19465, -0.485553,
        0.423944, 1.19465, -0.417817,
        -0.463019, 1.80895, -0.431156,
        -0.472841, 1.93879, -0.416623,
        -0.463019, 1.94034, -0.420918,
        -0.223587, 1.47524, 0.477807,
        -0.212372, 1.52989, 0.481364,
        -0.197408, 1.56672, 0.511091,
        0.308554, 1.93071, -0.266024,
        0.310375, 2.01939, -0.280929,
        0.385063, 1.88723, -0.327926,
        0.396914, 1.32752, 0.399904,
        0.466647, 1.54113, 0.21192,
        0.410181, 1.65673, 0.261993,
        -0.447488, 1.39827, -0.48286,
        -0.389481, 1.26872, -0.517239,
        -0.373021, 1.26514, -0.500647,
        -0.310368, 1.90814, 0.560337,
        -0.296962, 2.65478, 0.618477,
        -0.296962, 1.79186, 0.618477,
        -0.512796, 1.35407, 0.449234,
        -0.446426, 1.33411, 0.51786,
        -0.496336, 1.33632, 0.535455,
        -0.098965, 2.65478, -0.234448,
        -0.223381, 2.65478, -0.182899,
        -0.217186, 2.65478, -0.297025,
        0.303151, 2.78765, 0.223312,
        0.345894, 2.24634, -0.208355,
        0.413192, 2.28855, -0.083315,
        0.422484, 2.2348, -0.202647,
        -0.29685, 1.93337, 0.2845,
        -0.329257, 1.80044, 0.393459,
        -0.292187, 1.7683, 0.352204,
        0.001568, 1.19293, -0.581339,
        0.001568, 1.19465, -0.592767,
        0.42182, 1.72614, -0.298883,
        0.398192, 1.89038, -0.331645,
        0.418966, 1.91534, -0.338203,
        0.001568, 1.32752, 0.601884,
        0.230145, 1.19465, 0.556488,
        0.230145, 1.32752, 0.556488,
        -0.390062, 1.35392, 0.396189,
        -0.42313, 1.32752, 0.423461,
        -0.463019, 1.31717, 0.420297,
        0.487659, 1.6465, -0.282158,
        0.499265, 1.50249, -0.158699,
        0.49263, 1.50663, -0.157245,
        0.276471, 2.34192, -0.28906,
        -0.288865, 2.34431, -0.300343,
        -0.273334, 2.34192, -0.28906,
        0.096765, 1.83768, 0.430554,
        0.281087, 1.98565, 0.284077,
        0.273949, 2.00728, 0.379679,
        0.345894, 2.24634, -0.208355,
        0.28709, 2.19603, -0.202647,
        0.27792, 2.21872, -0.149118,
        0.601016, 1.12376, 0.002013,
        0.585411, 1.16229, -0.085212,
        0.695528, 1.14766, -0.080395,
        -0.343023, 2.31378, -0.300476,
        -0.288865, 2.34431, -0.300343,
        -0.259254, 1.19465, -0.525815,
        -0.327588, 1.2608, -0.480134,
        -0.288865, 1.19545, -0.544583,
        0.350008, 1.32421, -0.77847,
        0.292001, 1.23965, -0.752453,
        0.276471, 1.24204, -0.763735,
        0.001568, 1.19465, -0.592767,
        -0.015209, 1.19465, -0.589435,
        0.001568, 1.19536, -0.592767,
        0.001568, 1.19536, -0.592767,
        0.018345, 1.19465, -0.589435,
        0.001568, 1.19465, -0.592767,
        -0.58438, 1.83782, -0.139241,
        -0.583256, 1.85941, -0.08999,
        -0.526733, 2.01511, -0.255079,
        -0.273545, 2.01884, -0.265325,
        -0.281262, 2.02297, -0.276651,
        -0.335319, 2.08527, -0.273934,
        -0.379393, 0.39835, 0.92444,
        -0.379393, 0, 0.92444,
        0.292001, 1.23965, -0.752453,
        0.392617, 1.26872, -0.517239,
        0.292001, 1.19545, -0.544583,
        -0.370083, 2.65478, 0.036765,
        -0.318628, 2.65478, -0.087652,
        -0.335191, 2.47227, -0.098713,
        -0.246256, 2.22577, 0.247471,
        -0.175987, 2.20055, 0.276089,
        -0.161568, 2.34391, 0.417775,
        0.838906, 1.3436, 0.032841,
        0.837559, 1.27814, 0.068937,
        0.825878, 1.235, -0.023981,
        0.321986, 1.19465, 0.49467,
        0.10816, 1.19465, 0.580424,
        -0.346872, 3.75001, 0.719093,
        -0.310368, 1.67561, 0.676616,
        -0.310368, 3.75001, 0.676616,
        0.089343, 1.66386, 0.478564,
        0.17997, 1.5788, 0.510692,
        0.002936, 1.76632, 0.518047,
        -0.344516, 2.0362, 0.212355,
        -0.324339, 2.01501, 0.212064,
        -0.336784, 2.05082, 0.286762,
        0.423944, 1.32752, -0.417817,
        0.366414, 1.32752, -0.456275,
        0.330564, 1.32752, -0.444671,
        -0.234442, 2.47227, -0.199462,
        -0.223381, 2.65478, -0.182899,
        -0.270149, 2.22577, 0.202871,
        -0.345279, 2.34391, 0.234064,
        -0.265017, 2.21651, 0.178885,
        -0.273334, 2.3909, -0.519495,
        0.350008, 2.32187, -0.566485,
        -0.346872, 2.32187, -0.566485,
        0.296167, 2.26764, -0.049916,
        0.300293, 2.26001, 0.045036,
        0.333814, 2.28869, 0.041858,
        0.466647, 1.54113, 0.21192,
        0.469811, 1.54151, 0.215499,
        0.475712, 1.59818, 0.275081,
        0.601814, 1.54946, -0.187117,
        0.58506, 1.53283, -0.182485,
        0.519383, 1.64172, -0.279769,
        -0.290591, 1.62605, 0.535515,
        -0.290591, 1.5265, 0.635069,
        0.001568, 0.39835, -0.725484,
        0.050627, 1.19202, -0.57704,
        0.134436, 0.39835, -0.713405,
        -0.994108, 0.39835, 0.004558,
        -0.918314, 0, -0.376403,
        -0.994108, 0, 0.004558,
        -0.461484, 1.95803, 0.535382,
        -0.461497, 1.82654, 0.535397,
        -0.463019, 1.82694, 0.535397,
        -0.496336, 1.81808, 0.535398,
        -0.463019, 1.8544, 0.36612,
        -0.595758, 1.78282, 0.589805,
        -0.446426, 1.82539, 0.51786,
        -0.419053, 2.78765, 0.50932,
        -0.419053, 2.65478, 0.50932,
        0.675484, 1.21775, 0.191588,
        0.593452, 1.14249, 0.10544,
        0.695528, 1.14766, 0.118714,
        0.654996, 1.86821, -0.021527,
        0.657914, 1.80747, -0.096562,
        0.50518, 2.16325, -0.186453,
        -0.550361, 1.32752, -0.224018,
        -0.595758, 1.19465, 0.004558,
        -0.595758, 1.32752, 0.004558,
        0.28236, 2.30563, 0.05648,
        0.269472, 2.34007, -0.04498,
        0.301293, 2.34391, 0.037876,
        0.827471, 1.31319, -0.067121,
        0.766544, 1.21297, -0.10535,
        0.749903, 1.28493, -0.147931,
        -0.048209, 3.35193, 0.50233,
        -0.048209, 3.35193, 0.465968,
        -0.064801, 3.33924, 0.469278,
        -0.099038, 2.36389, -0.234815,
        -0.091163, 2.30608, -0.264371,
        -0.10434, 2.2996, -0.263066,
        0.766544, 1.21297, -0.10535,
        0.780216, 1.16505, 0.007611,
        -0.310738, 1.42694, 0.460253,
        -0.296962, 1.42694, 0.559316,
        -0.296962, 1.42059, 0.535445,
        -0.044445, 2.37753, -0.244278,
        -0.099038, 2.36389, -0.234815,
        -0.098965, 2.65478, -0.234448,
        0.060041, 2.20815, 0.320776,
        0.160006, 2.22577, 0.275528,
        0.085327, 2.28152, 0.386449,
        -0.281864, 2.28152, -0.070316,
        -0.214316, 2.3243, -0.16938,
        -0.311787, 2.09983, -0.172803,
        0.362075, 1.54069, 0.366632,
        0.257657, 1.49946, 0.455381,
        0.396914, 1.32752, 0.399904,
        0.780216, 1.16505, 0.007611,
        0.702829, 1.12204, 0.01916,
        -0.288865, 2.34431, -0.300343,
        -0.273334, 2.34192, -0.28906,
        -0.463019, 1.39707, 0.286193,
        -0.501191, 1.50212, 0.129533,
        -0.466417, 1.32752, 0.310469,
        0.454474, 1.97356, -0.339236,
        0.44049, 1.97568, -0.340293,
        0.435094, 2.03251, -0.322503,
        -0.330147, 2.40882, 0.30362,
        -0.313952, 2.34391, 0.292735,
        0.410405, 2.27727, 0.047433,
        0.492968, 2.20559, 0.063627,
        0.502525, 2.21104, -0.065793,
        0.547442, 1.54382, 0.243907,
        0.573595, 1.57285, 0.245345,
        0.579382, 1.62791, 0.275081,
        -0.214316, 2.3243, -0.16938,
        -0.220239, 2.34391, -0.178223,
        -0.161687, 2.34391, -0.209486,
        -0.48293, 3.75001, 0.676616,
        -0.496336, 1.79186, 0.618477,
        -0.48293, 1.67561, 0.676616,
        -0.396649, 2.14095, -0.075483,
        -0.396649, 2.09942, -0.291842,
        -0.496203, 2.09197, -0.151277,
        0.49168, 1.19465, -0.315859,
        -0.34609, 1.65975, -0.36444,
        -0.396649, 1.6622, -0.381073,
        -0.363278, 1.32752, -0.456275,
        -0.446426, 1.33411, 0.51786,
        -0.396649, 1.0951, 0.50233,
        -0.446426, 1.0951, 0.51786,
        -0.318628, 2.65478, 0.295877,
        -0.383773, 2.40882, 0.174199,
        0.160006, 2.22577, 0.275528,
        0.060041, 2.20815, 0.320776,
        0.198885, 2.10279, 0.306363,
        0.513285, 1.32752, 0.293289,
        0.639778, 1.34212, 0.336406,
        0.547442, 1.54382, 0.243907,
        -0.396649, 1.81467, 0.50233,
        -0.346872, 2.65478, 0.51786,
        -0.346872, 1.79891, 0.51786,
        0.333549, 2.65478, 0.336406,
        0.333549, 2.78765, 0.336406,
        -0.043961, 1.90295, 0.483481,
        -0.165285, 1.78176, 0.501932,
        -0.090892, 1.85604, 0.490625,
        -0.346872, 1.37537, 0.51786,
        -0.331727, 1.0951, 0.535483,
        -0.346872, 1.0951, 0.51786,
        -0.463019, 1.35571, 0.43432,
        -0.519111, 1.36668, 0.438327,
        -0.463019, 1.31717, 0.420297,
        0.477836, 2.14772, 0.182031,
        0.393414, 2.08068, 0.262338,
        0.369123, 2.05984, 0.264727,
        0.355583, 1.95737, 0.281452,
        -0.296962, 1.06265, 0.535487,
        -0.296962, 0.829619, 0.584587,
        -0.105024, 1.19465, 0.580424,
        0.273949, 2.00728, 0.379679,
        0.002936, 1.94579, 0.46314,
        0.096779, 1.85605, 0.490618,
        0.096765, 1.83768, 0.430554,
        0.096779, 1.85605, 0.490618,
        0.171076, 1.78176, 0.501932,
        0.002918, 1.75043, 0.466159,
        0.002936, 1.76632, 0.518047,
        -0.174179, 1.5788, 0.510692,
        0.769863, 1.34799, 0.16471,
        0.798401, 1.33071, 0.14858,
        -0.432754, 2.78765, 0.223312,
        0.274931, 2.15644, -0.196518,
        0.27792, 2.21872, -0.149118,
        0.28709, 2.19603, -0.202647,
        -0.389481, 1.26872, -0.517239,
        -0.288865, 1.23965, -0.752453,
        -0.288865, 1.19545, -0.544583,
        0.997111, 0.39835, 0.004558,
        0.92145, 0, 0.38552,
        0.997111, 0, 0.004558,
        0.17997, 2.09715, 0.352202,
        0.198885, 2.10279, 0.306363,
        0.072891, 1.99663, 0.390063,
        -0.383773, 2.40882, 0.034026,
        -0.390676, 2.40882, 0.104113,
        0.350008, 2.32187, -0.566485,
        0.292001, 2.38851, -0.508213,
        0.392617, 2.31523, -0.535557,
        -0.043961, 1.81322, 0.510958,
        0.049885, 1.81322, 0.510958,
        0.002962, 1.85808, 0.497219,
        0.292001, 2.34431, -0.300343,
        0.276471, 2.34192, -0.28906,
        0.316027, 2.30913, -0.278707,
        0.292001, 2.34431, -0.300343,
        0.392617, 2.31523, -0.535557,
        0.292001, 2.38851, -0.508213,
        0.09428, 2.30608, -0.264371,
        0.316027, 2.30913, -0.278707,
        0.276471, 2.34192, -0.28906,
        0.626371, 1.6295, -0.199462,
        0.626769, 1.73888, -0.218045,
        0.64606, 1.66663, -0.155861,
        0.675484, 1.21775, 0.191588,
        0.784862, 1.19744, 0.10544,
        0.752739, 1.26076, 0.180039,
        -0.503214, 1.53102, -0.088899,
        -0.526733, 1.52849, 0.024602,
        -0.496203, 1.65088, -0.311892,
        -0.165285, 1.78176, 0.501932,
        -0.043961, 1.90295, 0.483481,
        -0.090907, 1.85605, 0.490618,
        -0.288865, 1.23965, -0.752453,
        -0.346872, 1.32421, -0.77847,
        -0.273334, 1.24204, -0.763735,
        -0.70248, 0.39835, -0.69949,
        -0.70248, 0, -0.69949,
        0.350008, 1.32421, -0.77847,
        0.350008, 2.32187, -0.566485,
        0.450624, 1.45004, -0.726303,
        -0.379393, 0, 0.92444,
        -0.70248, 0.39835, 0.708606,
        -0.70248, 0, 0.708606,
        0.798401, 1.33071, 0.14858,
        -0.918314, 0.39835, 0.38552,
        -0.918314, 0, 0.38552,
        0.160148, 2.65478, -0.182899,
        0.163022, 2.37978, -0.187174,
        0.137444, 2.3868, -0.203217,
        0.087583, 2.78765, 0.704359,
        -0.064801, 2.65478, 0.734756,
        0.087583, 2.65478, 0.704359,
        0.679637, 1.33106, 0.213562,
        0.648007, 1.31345, 0.218268,
        -0.461484, 1.95803, 0.535382,
        -0.48293, 3.75001, 0.560337,
        -0.446426, 3.75001, 0.51786,
        -0.310368, 2.65478, 0.560337,
        -0.310368, 1.90814, 0.560337,
        -0.331814, 1.95803, 0.535382,
        -0.296962, 1.63359, 0.53542,
        -0.296962, 1.6324, 0.53542,
        -0.298152, 1.63359, 0.53542,
        -0.296962, 1.6324, 0.53542,
        -0.290591, 1.62605, 0.535515,
        -0.29135, 1.62605, 0.532678,
        0.333549, 2.65478, 0.336406,
        0.30707, 2.78765, 0.203667,
        0.333549, 2.78765, 0.336406,
        -0.329257, 1.80044, 0.393459,
        -0.335942, 1.79394, 0.530579,
        -0.296962, 1.75558, 0.535406,
        0.418966, 1.91534, -0.338203,
        0.398192, 1.89038, -0.331645,
        0.366414, 1.32752, -0.456275,
        0.514339, 1.7649, 0.321805,
        0.459385, 2.04617, 0.271497,
        0.749903, 1.28493, -0.147931,
        0.695528, 1.14766, -0.080395,
        0.576725, 1.2353, -0.147952,
        -0.450541, 1.90865, 0.352202,
        -0.457644, 1.85172, 0.373909,
        -0.396649, 1.83039, 0.40546,
        -0.472841, 1.93879, -0.416623,
        -0.456271, 2.04869, -0.34728,
        0.292001, 2.34431, -0.300343,
        0.276471, 2.3909, -0.519495,
        -0.346872, 1.32421, -0.77847,
        -0.389481, 1.45907, -0.768514,
        -0.064801, 3.01981, 0.469278,
        0.06807, 3.01981, 0.50233,
        -0.164356, 3.01981, 0.50233,
        0.490329, 1.32752, 0.270438,
        0.469811, 1.54151, 0.215499,
        0.466647, 1.54113, 0.21192,
        -0.61235, 1.62605, 0.621795,
        -0.562573, 1.5265, 0.707943,
        -0.549299, 1.62605, 0.684846,
        0.273949, 1.66866, 0.483348,
        0.17997, 1.5788, 0.510692,
        0.241421, 1.50026, 0.463595,
        0.292001, 1.19545, -0.544583,
        0.26239, 1.19465, -0.525815,
        0.24438, 1.19164, -0.526491,
        0.303151, 3.45135, -0.081457,
        0.333549, 2.65478, 0.070928,
        0.303151, 2.65478, -0.081457,
        -0.223587, 1.47524, 0.477807,
        -0.293948, 1.41707, 0.456662,
        -0.304343, 1.32752, 0.472544,
        -0.425188, 1.45495, -0.749001,
        -0.447488, 2.18568, -0.569936,
        -0.373021, 2.31882, -0.552149,
        -0.396649, 2.01936, 0.258754,
        -0.396649, 1.83039, 0.40546,
        0.301031, 2.19095, 0.135862,
        0.302531, 2.25013, 0.06021,
        0.272542, 2.28152, 0.118463,
        -0.420807, 1.32752, -0.417817,
        -0.550361, 1.19465, -0.224018,
        -0.432754, 3.45135, -0.081457,
        -0.432754, 2.65478, -0.081457,
        0.087583, 3.45135, -0.297025,
        -0.432754, 3.45135, -0.081457,
        0.087583, 3.45135, 0.438881,
        0.302531, 2.25013, 0.06021,
        0.301031, 2.19095, 0.135862,
        0.333814, 2.28869, 0.041858,
        -0.227009, 1.32752, 0.556488,
        0.001568, 1.19465, 0.601884,
        -0.496336, 1.62605, 0.699024,
        -0.496336, 1.5265, 0.725783,
        -0.635447, 1.42694, 0.535515,
        -0.651741, 1.5265, 0.496457,
        -0.6153, 1.42694, 0.460253,
        0.03462, 2.34391, 0.437022,
        0.276471, 1.24204, -0.763735,
        0.519383, 1.64172, -0.279769,
        0.499265, 1.50249, -0.158699,
        0.487659, 1.6465, -0.282158,
        0.333814, 2.28869, 0.041858,
        0.300293, 2.26001, 0.045036,
        0.296167, 2.26764, -0.049916,
        0.28236, 2.30563, 0.05648,
        -0.330147, 2.40882, -0.095394,
        -0.281864, 2.28152, -0.070316,
        0.450624, 1.39827, -0.48286,
        0.450624, 2.13391, -0.326493,
        0.44049, 1.97568, -0.340293,
        -0.550228, 1.58829, 0.010175,
        -0.692923, 1.44194, 0.465694,
        -0.572185, 1.75162, -0.181209,
        -0.346872, 2.78765, 0.51786,
        -0.310368, 3.75001, 0.560337,
        -0.310368, 2.78765, 0.560337,
        0.780216, 1.16505, 0.007611,
        -0.164356, 3.01981, 0.449419,
        -0.106349, 3.30746, 0.46099,
        -0.217186, 3.45135, 0.438881,
        -0.296962, 1.95803, 0.535382,
        -0.331797, 1.78945, 0.535402,
        -0.331814, 1.95803, 0.535382,
        -0.467133, 2.04697, -0.342554,
        -0.496203, 2.09197, -0.151277,
        -0.303486, 2.78765, 0.646767,
        -0.217186, 2.65478, 0.704359,
        -0.217186, 2.78765, 0.704359,
        0.009931, 3.30746, 0.454371,
        0.06807, 3.01981, 0.50233,
        0.06807, 3.01981, 0.442773,
        -0.447488, 1.45004, -0.726303,
        -0.389481, 1.26872, -0.517239,
        -0.447488, 1.39827, -0.48286,
        -0.326759, 2.02566, 0.200773,
        -0.332202, 2.04964, 0.175322,
        -0.338433, 2.04227, 0.195661,
        0.216871, 3.45135, -0.210744,
        -0.519111, 1.36668, 0.438327,
        -0.463019, 1.35571, 0.43432,
        0.585062, 1.15569, 0.112561,
        0.568687, 1.19465, 0.141527,
        0.49168, 1.19465, 0.324976,
        -0.61235, 1.42694, 0.621795,
        -0.549299, 1.42694, 0.684846,
        0.345894, 2.24634, -0.208355,
        0.370667, 2.15999, -0.275801,
        0.342317, 2.1455, -0.267143,
        -0.246075, 2.14012, 0.246857,
        -0.175987, 2.20055, 0.276089,
        -0.225292, 2.20618, 0.233457,
        -0.346474, 3.45135, -0.210744,
        -0.346474, 2.65478, -0.210744,
        -0.550361, 1.19465, 0.233135,
        -0.550361, 1.32752, 0.233135,
        0.658068, 1.81844, 0.07429,
        0.662, 1.84379, 0.004242,
        0.477836, 2.14772, 0.182031,
        -0.164356, 3.01981, 0.50233,
        0.06807, 3.01981, 0.50233,
        0.009931, 3.30746, 0.50233,
        0.6456, 1.68321, 0.18465,
        -0.488543, 1.19465, 0.324976,
        -0.318849, 1.19465, 0.49467,
        -0.420807, 1.19465, 0.426934,
        -0.463019, 1.94034, -0.420918,
        -0.456271, 2.04869, -0.34728,
        -0.447488, 2.18568, -0.569936,
        0.30685, 2.65478, 0.171461,
        0.30707, 2.65478, 0.203667,
        0.255395, 2.65478, 0.295877,
        -0.526733, 1.96945, 0.185216,
        -0.567384, 1.84897, 0.183022,
        -0.558747, 1.85551, 0.202677,
        -0.431957, 1.69535, -0.394193,
        -0.421445, 1.67989, -0.391477,
        -0.327588, 1.2608, -0.480134,
        -0.420807, 1.19465, -0.417817,
        -0.363278, 1.32752, -0.456275,
        0.92145, 0.39835, -0.376403,
        0.61268, 0.39835, -0.394974,
        0.719531, 0.39835, 0.137426,
        0.087583, 3.45135, 0.438881,
        0.009931, 3.30746, 0.454371,
        0.06807, 3.01981, 0.442773,
        0.92145, 0.39835, 0.38552,
        0.342575, 1.58066, 0.430518,
        0.362075, 1.54069, 0.366632,
        0.308554, 1.93071, -0.266024,
        0.398024, 1.69499, -0.25626,
        0.330564, 1.32752, -0.444671,
        -0.496336, 1.71345, 0.564565,
        -0.549299, 1.69893, 0.585292,
        -0.496336, 1.69893, 0.626184,
        -0.541473, 1.56096, 0.051535,
        -0.510201, 1.50872, 0.078872,
        -0.501191, 1.50212, 0.129533,
        -0.420807, 1.32752, 0.426934,
        -0.422717, 1.32752, 0.424077,
        -0.422769, 1.32731, 0.424,
        -0.296962, 0.829619, 1.09966,
        -0.346872, 1.59069, 0.719093,
        -0.396649, 1.55964, 0.734623,
        0.393414, 2.08068, 0.262338,
        0.459385, 2.04617, 0.271497,
        0.477836, 2.14772, 0.182031,
        0.087583, 2.78765, 0.704359,
        0.087583, 2.65478, 0.704359,
        -0.064801, 2.78765, 0.734756,
        -0.233115, 1.69149, 0.556488,
        -0.241197, 1.69819, 0.488201,
        -0.261938, 1.73563, 0.386573,
        0.475712, 1.59818, 0.275081,
        0.547442, 1.54382, 0.243907,
        0.490048, 1.74406, 0.324194,
        0.25325, 2.13995, 0.241956,
        0.248728, 2.14055, 0.259417,
        0.342575, 2.05082, 0.286762,
        -0.301805, 2.24607, 0.050287,
        -0.347141, 2.12549, -0.032937,
        -0.316188, 2.0903, 0.180975,
        -0.357262, 0.829619, 0.553318,
        -0.296962, 0.829619, 0.584587,
        -0.496336, 0.829619, 1.09966,
        0.303151, 3.45135, 0.223312,
        0.30707, 2.78765, 0.203667,
        -0.496336, 1.35407, 0.626184,
        -0.496336, 1.42694, 0.699024,
        -0.549299, 1.42694, 0.684846,
        -0.432754, 2.65478, 0.488791,
        -0.419053, 2.78765, 0.50932,
        -0.432754, 2.78765, 0.488791,
        -0.574297, 1.19465, -0.102034,
        -0.609544, 0.39835, -0.394974,
        -0.716395, 0.39835, -0.128309,
        0.586948, 1.21324, 0.180039,
        0.675484, 1.21775, 0.191588,
        0.611978, 1.31168, 0.213589,
        -0.048209, 3.35193, 0.465968,
        0.009931, 3.30746, 0.50233,
        0.009931, 3.30746, 0.454371,
        -0.396649, 1.0951, 0.50233,
        -0.346872, 1.0951, 0.51786,
        -0.331727, 1.0951, 0.535483,
        -0.549299, 1.35407, 0.485738,
        -0.549299, 1.35407, 0.585292,
        -0.635447, 1.42694, 0.535515,
        -0.61235, 1.62605, 0.621795,
        -0.556245, 1.69893, 0.559243,
        -0.466417, 1.32752, 0.310469,
        -0.548284, 1.32752, -0.097224,
        -0.550361, 1.32752, 0.233135,
        -0.370105, 1.35407, 0.510612,
        -0.461548, 1.32779, 0.535456,
        -0.48293, 1.90814, 0.560337,
        -0.496336, 1.95803, 0.535382,
        -0.496336, 1.79186, 0.618477,
        -0.461571, 1.0951, 0.535483,
        -0.345621, 0.949454, 0.535501,
        -0.496336, 0.829619, 0.535515,
        0.92145, 0.39835, -0.376403,
        0.997111, 0, 0.004558,
        0.92145, 0, -0.376403,
        -0.329692, 1.66831, -0.35965,
        -0.310428, 1.69433, -0.350597,
        -0.322782, 1.66462, -0.349527,
        -0.496336, 1.5265, 0.725783,
        -0.496336, 1.42694, 0.699024,
        -0.496336, 0.829619, 1.09966,
        -0.567384, 1.84897, 0.183022,
        -0.692923, 1.69149, 0.556488,
        -0.558747, 1.85551, 0.202677,
        0.382529, 0.39835, -0.915323,
        0.382529, 0, -0.915323,
        0.86716, 1.38341, 0.205791,
        0.665487, 1.76442, 0.107241,
        -0.918314, 0.39835, 0.38552,
        -0.918314, 0, 0.38552,
        0.599444, 1.58394, 0.236162,
        0.573595, 1.57285, 0.245345,
        -0.346872, 1.59069, 0.719093,
        -0.396649, 3.75001, 0.734623,
        -0.396649, 1.55964, 0.734623,
        -0.447488, 2.13391, -0.326493,
        -0.455187, 2.05122, -0.343091,
        -0.396649, 2.09942, -0.291842,
        -0.396649, 3.75001, 0.734623,
        -0.296962, 1.5265, 0.64144,
        -0.496336, 1.42694, 0.699024,
        -0.227009, 1.19465, 0.556488,
        -0.420807, 1.19465, 0.426934,
        -0.296962, 1.49904, 0.631407,
        0.410181, 1.65673, 0.261993,
        0.424077, 1.77844, 0.315035,
        0.321248, 1.97028, 0.241547,
        -0.549299, 1.69893, 0.585292,
        -0.61235, 1.62605, 0.621795,
        -0.200414, 1.57211, 0.496276,
        -0.174179, 1.5788, 0.510692,
        -0.214619, 1.61752, 0.498909,
        0.002936, 1.94579, 0.46314,
        -0.090907, 1.85605, 0.490618,
        0.593452, 1.14249, 0.10544,
        -0.635447, 1.62605, 0.535515,
        -0.66226, 1.5265, 0.535515,
        -0.379393, 0, -0.915323,
        -0.379393, 0.39835, -0.915323,
        -0.10434, 2.2996, -0.263066,
        -0.091163, 2.30608, -0.264371,
        -0.391386, 2.09889, -0.288954,
        -0.335319, 2.08527, -0.273934,
        -0.281262, 2.02297, -0.276651,
        -0.267982, 1.9807, -0.284865,
        -0.167295, 2.24354, -0.253657,
        -0.396649, 1.57738, -0.297771,
        -0.396649, 1.6622, -0.381073,
        -0.34609, 1.65975, -0.36444,
        0.791101, 1.29606, -0.151543,
        0.604904, 1.54383, -0.176617,
        0.791101, 1.29606, -0.151543,
        0.604904, 1.54383, -0.176617,
        -0.332202, 2.04964, 0.175322,
        -0.347141, 2.12549, -0.032937,
        -0.450541, 2.12316, -0.026503,
        -0.396649, 2.01936, 0.258754,
        -0.360254, 2.04771, 0.19612,
        -0.344516, 2.0362, 0.212355,
        -0.360254, 2.04771, 0.19612,
        -0.338433, 2.04227, 0.195661,
        -0.116122, 2.19684, 0.308117,
        -0.031617, 2.34391, 0.443527,
        -0.116122, 2.19684, 0.308117,
        0.058249, 2.20772, 0.321101,
        0.027983, 2.28152, 0.403838,
        -0.031617, 2.34391, 0.443527,
        0.058249, 2.20772, 0.321101,
        0.085327, 2.28152, 0.386449,
        -0.195304, 2.10499, 0.305681,
        0.002895, 1.93118, 0.415354,
        0.060041, 2.20815, 0.320776,
        0.058249, 2.20772, 0.321101,
        0.572666, 1.20378, -0.127501,
        0.569892, 1.23453, -0.141467,
        0.576725, 1.2353, -0.147952,
        0.572666, 1.20378, -0.127501,
        0.585411, 1.16229, -0.085212,
        0.5734, 1.19465, -0.11605,
        -0.48293, 3.75001, 0.676616,
        -0.48293, 1.67561, 0.676616,
        0.30685, 2.65478, 0.036765,
        -0.472841, 1.93879, -0.416623,
        -0.472841, 1.93879, -0.416623,
        0.588038, 1.145, 0.103181,
        0.593452, 1.14249, 0.10544,
        0.593452, 1.14249, 0.10544,
        0.56579, 1.22307, 0.171242,
        0.568687, 1.19465, 0.141527,
        -0.512796, 1.35407, 0.449234,
        0.17997, 2.09715, 0.352202,
        0.273949, 2.00728, 0.379679,
        -0.496203, 2.09197, -0.151277,
        -0.450541, 1.90865, 0.352202,
        -0.425852, 2.02387, 0.246011,
        0.423944, 1.32752, 0.426934,
        -0.322782, 1.66462, -0.349527,
        -0.310428, 1.69433, -0.350597,
        -0.548284, 1.32752, -0.097224,
        -0.503214, 1.53102, -0.088899,
        -0.322782, 1.66462, -0.349527,
        0.569892, 1.23453, -0.141467,
        0.574677, 1.19465, -0.117374,
        0.565173, 1.32752, -0.165232,
        0.330725, 1.2608, -0.480134,
        0.366414, 1.32752, -0.456275,
        0.366414, 1.32752, -0.456275,
        -0.446426, 3.75001, 0.719093,
        -0.396649, 3.75001, 0.734623,
        -0.346872, 3.75001, 0.719093,
        -0.296962, 3.75001, 0.618477,
        -0.310368, 3.75001, 0.560337,
        -0.48293, 3.75001, 0.560337,
        -0.346872, 3.75001, 0.51786,
        -0.396649, 3.75001, 0.50233,
        -0.446426, 3.75001, 0.51786,
        -0.241224, 1.19164, -0.52649,
        -0.288865, 1.19545, -0.544583,
        -0.288865, 1.23965, -0.752453,
        0.276471, 1.24204, -0.763735,
        0.001568, 1.19536, -0.592767,
        0.292001, 1.23965, -0.752453,
        0.108294, 1.19095, -0.572031,
        0.292001, 1.19545, -0.544583,
        0.24438, 1.19164, -0.526491,
        0.050627, 1.19202, -0.57704,
        0.018345, 1.19465, -0.589435,
        -0.296962, 1.79186, 0.618477,
        0.382529, 0.39835, 0.92444,
        -0.292187, 1.7683, 0.352204,
        -0.261938, 1.73563, 0.386573,
        -0.240662, 1.67666, 0.415789,
        0.002936, 1.76632, 0.518047,
        0.002936, 1.76632, 0.518047,
        0.17997, 1.5788, 0.510692,
        0.273949, 1.66866, 0.483348,
        -0.345621, 0.949454, 0.535501,
        -0.345621, 0.949454, 0.535501,
        -0.318849, 1.19465, 0.49467,
        0.001568, 0.39835, -0.725484,
        0.001568, 0.39835, -0.990985,
        -0.379393, 0.39835, -0.915323,
        -0.70248, 0.39835, -0.69949,
        -0.397964, 0.39835, -0.606553,
        -0.994108, 0.39835, 0.004558,
        -0.918314, 0.39835, 0.38552,
        -0.70248, 0.39835, 0.708606,
        -0.609544, 0.39835, 0.40409,
        -0.379393, 0.39835, 0.92444,
        -0.397964, 0.39835, 0.61567,
        0.001568, 0.39835, 1.0001,
        0.134436, 0.39835, 0.722522,
        0.195766, 0.39835, 0.980987,
        0.134466, 0.39835, 0.722513,
        0.087583, 2.78765, 0.438881,
        -0.310368, 3.75001, 0.560337,
        0.614425, 1.11753, 0.007611,
        0.593452, 1.14249, 0.10544,
        -0.164356, 3.01981, 0.449419,
        -0.48293, 1.90814, 0.560337,
        -0.496336, 1.79186, 0.618477,
        -0.379393, 0.39835, -0.915323,
        0.001568, 0.39835, -0.990985,
        -0.174179, 2.09715, 0.352202,
        0.002936, 1.94579, 0.46314,
        0.002895, 1.93118, 0.415354,
        -0.246075, 2.14012, 0.246857,
        -0.242804, 2.14055, 0.259417,
        0.534137, 1.32752, -0.157287,
        0.558382, 1.5055, -0.174011,
        0.49263, 1.50663, -0.157245,
        0.499265, 1.50249, -0.158699,
        0.56626, 1.23014, -0.159756,
        0.58506, 1.53283, -0.182485,
        -0.457644, 1.85172, 0.373909,
        -0.463019, 1.82694, 0.535397,
        -0.461497, 1.82654, 0.535397,
        -0.446426, 1.82539, 0.51786,
        -0.446426, 1.82539, 0.51786,
        -0.335942, 1.79394, 0.530579,
        -0.349145, 1.81987, 0.392467,
        -0.346872, 1.79891, 0.51786,
        -0.396649, 1.83039, 0.40546,
        -0.396649, 1.83039, 0.40546,
        -0.446426, 1.82539, 0.51786,
        0.303151, 2.65478, 0.488791,
        0.355583, 1.95737, 0.281452,
        0.316879, 2.00665, 0.23043,
        0.301031, 2.19095, 0.135862,
        0.798401, 1.33071, 0.14858,
        0.382529, 0, 0.92444,
        -0.379393, 0, 0.92444,
        -0.70248, 0, 0.708606,
        -0.918314, 0, 0.38552,
        -0.994108, 0, 0.004558,
        -0.918314, 0, -0.376403,
        -0.70248, 0, -0.69949,
        0.001568, 0, -0.990985,
        0.382529, 0, -0.915323,
        0.705616, 0, -0.69949,
        0.92145, 0, -0.376403,
        0.92145, 0, 0.38552,
        0.705616, 0, 0.708606,
        -0.447488, 2.13391, -0.326493,
        0.255395, 2.65478, 0.295877,
        0.100481, 2.65478, 0.422987,
        -0.217186, 3.45135, -0.297025,
        0.392617, 2.26625, -0.305122,
        0.382529, 0, -0.915323,
        -0.336784, 2.05082, 0.286762,
        -0.301295, 2.09936, 0.202567,
        -0.336784, 2.05082, 0.286762,
        -0.242804, 2.14055, 0.259417,
        -0.301295, 2.09936, 0.202567,
        -0.246075, 2.14012, 0.246857,
        -0.301295, 2.09936, 0.202567,
        -0.301295, 2.09936, 0.202567,
        0.519383, 1.64172, -0.279769,
        -0.373021, 2.31882, -0.552149,
        -0.373021, 2.31882, -0.552149,
        -0.389481, 2.31523, -0.535557,
        -0.359553, 2.04884, 0.193611,
        -0.432754, 2.78765, 0.223312,
        -0.432754, 3.45135, 0.223312,
        -0.463151, 3.45135, 0.070928,
        0.134436, 0.39835, -0.713405,
        0.134436, 0.39835, -0.713405,
        0.108294, 1.19095, -0.572031,
        0.249429, 1.19465, -0.523202,
        0.321986, 1.19465, -0.485553,
        0.576725, 1.2353, -0.147952,
        0.569892, 1.23453, -0.141467,
        0.56626, 1.23014, -0.159756,
        0.665131, 1.25359, -0.186453,
        0.665131, 1.25359, -0.186453,
        0.791101, 1.29606, -0.151543,
        0.749903, 1.28493, -0.147931,
        0.665131, 1.25359, -0.186453,
        0.749903, 1.28493, -0.147931,
        0.791101, 1.29606, -0.151543,
        0.879903, 1.33907, -0.055705,
        0.823088, 1.3199, -0.071531,
        0.907645, 1.37106, 0.075043,
        0.823088, 1.3199, -0.071531,
        0.830384, 1.32665, -0.046079,
        0.907645, 1.37106, 0.075043,
        0.86716, 1.38341, 0.205791,
        0.769066, 1.37279, 0.301496,
        0.769863, 1.34799, 0.16471,
        0.639778, 1.34212, 0.336406,
        0.679637, 1.33106, 0.213562,
        0.639778, 1.34212, 0.336406,
        0.513808, 1.29965, 0.301496,
        0.553497, 1.2985, 0.233135,
        0.510315, 1.29796, 0.297731,
        0.553497, 1.2985, 0.233135,
        0.553497, 1.2985, 0.233135,
        0.562434, 1.29282, 0.188136,
        0.611978, 1.31168, 0.213589,
        0.553497, 1.2985, 0.233135,
        0.611978, 1.31168, 0.213589,
        0.639778, 1.34212, 0.336406,
        0.679637, 1.33106, 0.213562,
        0.823088, 1.3199, -0.071531,
        0.749903, 1.28493, -0.147931,
        0.791101, 1.29606, -0.151543,
        -0.296962, 1.42694, 0.559316,
        -0.310738, 1.42694, 0.460253,
        -0.274296, 1.5265, 0.496457,
        -0.274296, 1.5265, 0.496457,
        -0.29135, 1.62605, 0.532678,
        -0.290591, 1.62605, 0.535515,
        -0.274296, 1.5265, 0.496457,
        -0.296962, 1.49904, 0.631407,
        -0.274296, 1.5265, 0.496457,
        -0.296962, 1.06265, 0.535487,
        -0.296962, 1.42059, 0.535445,
        -0.296962, 1.42694, 0.559316,
        -0.296962, 0.829619, 1.09966,
        -0.296962, 0.829619, 0.584587,
        -0.296962, 1.75558, 0.535406,
        -0.296962, 1.95803, 0.535382,
        -0.296962, 1.79186, 0.618477,
        -0.296962, 1.5265, 0.64144,
        -0.296962, 1.6324, 0.53542,
        -0.296962, 1.63359, 0.53542,
        0.170431, 2.24354, -0.253657,
        0.107477, 2.2996, -0.263066,
        -0.049417, 2.31957, -0.271168,
        0.001568, 2.32501, -0.27391,
        -0.044445, 2.37753, -0.244278,
        -0.296962, 2.78765, 0.618477,
        -0.296962, 3.75001, 0.618477,
        -0.310368, 1.67561, 0.676616,
        -0.296962, 1.79186, 0.618477,
        -0.296962, 2.65478, 0.618477,
        -0.310368, 3.75001, 0.676616,
        -0.310368, 1.67561, 0.676616,
        -0.310368, 3.75001, 0.676616,
        0.92145, 0.39835, -0.376403,
        0.92145, 0, -0.376403,
        -0.574297, 1.19465, -0.102034,
        -0.716395, 0.39835, -0.128309,
        -0.574297, 1.19465, 0.111151,
        -0.716395, 0.39835, -0.128309,
        -0.609544, 0.39835, 0.40409,
        0.382529, 0, 0.92444,
        0.195766, 0.39835, 0.980987,
        -0.432754, 2.78765, 0.223312,
        -0.436673, 2.78765, 0.203667,
        -0.463151, 2.78765, 0.336406,
        -0.432754, 2.78765, 0.488791,
        -0.346474, 2.78765, 0.3526,
        -0.419053, 2.78765, 0.50932,
        -0.396649, 2.78765, 0.50233,
        -0.217186, 2.78765, 0.438881,
        -0.346872, 2.78765, 0.51786,
        -0.310368, 2.78765, 0.560337,
        -0.296962, 2.78765, 0.618477,
        -0.303486, 2.78765, 0.646767,
        -0.217186, 2.78765, 0.704359,
        -0.064801, 2.78765, 0.734756,
        0.216871, 2.78765, 0.618078,
        0.303151, 2.78765, 0.488791,
        0.333549, 2.78765, 0.336406,
        0.216871, 2.78765, 0.3526,
        0.30707, 2.78765, 0.203667,
        0.303151, 2.78765, 0.223312,
        0.477836, 2.14772, 0.182031,
        0.459385, 2.04617, 0.271497,
        -0.396649, 2.09942, -0.291842,
        -0.345408, 2.12352, -0.059601,
        -0.345408, 2.12352, -0.059601,
        -0.335319, 2.08527, -0.273934,
        0.250719, 2.34391, 0.292735,
        0.250719, 2.34391, 0.292735,
        0.208376, 2.34391, 0.344105,
        0.208376, 2.34391, 0.344105,
        0.160006, 2.22577, 0.275528,
        0.172973, 2.23097, 0.266667,
        0.272542, 2.28152, 0.118463,
        0.268108, 2.28152, 0.163713,
        -0.501191, 1.50212, 0.129533,
        -0.463019, 1.39707, 0.286193,
        -0.463019, 1.39707, 0.286193,
        0.719531, 0.39835, 0.137426,
        0.588038, 1.145, 0.103181,
        0.719531, 0.39835, 0.137426,
        0.601016, 1.12376, 0.002013,
        0.5734, 1.19465, -0.11605,
        0.513285, 1.32752, 0.293289,
        0.511203, 1.31397, 0.296403,
        0.510315, 1.29796, 0.297731,
        0.511203, 1.31397, 0.296403,
        0.510315, 1.29796, 0.297731,
        0.510315, 1.29796, 0.297731,
        -0.304343, 1.32752, 0.472544,
        -0.293948, 1.41707, 0.456662,
        -0.390062, 1.35392, 0.396189,
        -0.45612, 1.38875, 0.30372,
        -0.304343, 1.32752, 0.472544,
        0.562434, 1.29282, 0.188136,
        -0.301805, 2.24607, 0.050287,
        -0.363332, 2.40882, -0.033272,
        -0.313952, 2.28152, -0.01283,
        -0.289756, 2.27665, -0.049311,
        0.553497, 1.19465, -0.224018,
        0.574677, 1.19465, -0.117374,
        0.5734, 1.19465, -0.11605,
        0.249429, 1.19465, -0.523202,
        0.26239, 1.19465, -0.525815,
        -0.463019, 1.80895, -0.431156,
        -0.472841, 1.93879, -0.416623,
        -0.217436, 1.52082, 0.468958,
        -0.200414, 1.57211, 0.496276,
        0.42182, 1.72614, -0.298883,
        0.398024, 1.69499, -0.25626,
        0.321248, 1.97028, 0.241547,
        0.316879, 2.00665, 0.23043,
        0.281087, 1.98565, 0.284077,
        0.324257, 1.77326, 0.327247,
        0.396914, 1.32752, 0.399904,
        0.396914, 1.32752, 0.399904,
        0.490329, 1.32752, 0.270438,
        -0.431957, 1.69535, -0.394193,
        -0.455187, 1.74722, -0.407733,
        -0.310368, 1.90814, 0.560337,
        -0.310368, 2.65478, 0.560337,
        -0.549299, 1.35407, 0.585292,
        -0.549299, 1.35407, 0.485738,
        -0.549299, 1.35407, 0.485738,
        -0.413241, 1.35407, 0.449234,
        -0.370105, 1.35407, 0.510612,
        -0.396649, 1.34755, 0.50233,
        -0.496336, 1.35407, 0.626184,
        -0.549299, 1.35407, 0.585292,
        -0.461548, 1.32779, 0.535456,
        -0.463053, 1.32741, 0.535456,
        -0.275633, 2.65478, 0.34809,
        -0.239093, 2.65478, 0.378115,
        -0.346872, 2.65478, 0.51786,
        -0.396649, 2.65478, 0.50233,
        -0.419053, 2.65478, 0.50932,
        -0.432754, 2.65478, 0.488791,
        -0.318628, 2.65478, 0.295877,
        -0.463151, 2.65478, 0.336406,
        -0.436673, 2.65478, 0.203667,
        -0.463151, 2.65478, 0.070928,
        -0.370083, 2.65478, 0.171461,
        -0.432754, 2.65478, -0.081457,
        -0.370083, 2.65478, 0.036765,
        -0.346474, 2.65478, -0.210744,
        -0.318628, 2.65478, -0.087652,
        -0.064801, 2.65478, -0.327422,
        0.087583, 2.65478, -0.297025,
        0.035732, 2.65478, -0.234448,
        0.216871, 2.65478, -0.210744,
        0.160148, 2.65478, -0.182899,
        0.303151, 2.65478, -0.081457,
        0.255395, 2.65478, -0.087652,
        0.333549, 2.65478, 0.070928,
        0.30685, 2.65478, 0.036765,
        0.33023, 2.30103, -0.089421,
        0.001568, 1.19465, -0.592767,
        0.435094, 1.9488, -0.340304,
        0.44049, 1.97568, -0.340293,
        0.418966, 1.91534, -0.338203,
        0.42182, 1.72614, -0.298883,
        0.385063, 1.88723, -0.327926,
        0.435094, 1.9488, -0.340304,
        -0.350211, 1.3456, 0.430676,
        -0.421933, 1.32752, 0.424077,
        -0.422769, 1.32731, 0.424,
        -0.463019, 1.39707, 0.286193,
        -0.45612, 1.38875, 0.30372,
        0.281087, 1.98565, 0.284077,
        0.316879, 2.00665, 0.23043,
        0.342575, 2.05082, 0.286762,
        0.316879, 2.00665, 0.23043,
        0.35109, 2.04969, 0.253877,
        0.281087, 1.98565, 0.284077,
        0.096779, 1.85605, 0.490618,
        0.28731, 2.2643, -0.085299,
        0.33023, 2.30103, -0.089421,
        0.345894, 2.24634, -0.208355,
        0.600752, 1.16545, -0.10535,
        0.614425, 1.11753, 0.007611,
        0.614425, 1.11753, 0.007611,
        -0.389481, 2.26625, -0.305122,
        -0.373021, 1.26514, -0.500647,
        -0.373021, 1.26514, -0.500647,
        -0.389481, 1.26872, -0.517239,
        -0.241224, 1.19164, -0.52649,
        -0.259254, 1.19465, -0.525815,
        -0.24627, 1.19465, -0.5232,
        -0.259254, 1.19465, -0.525815,
        0.392617, 1.3177, -0.747674,
        -0.57709, 1.82119, -0.188034,
        -0.728629, 1.56672, 0.511091,
        -0.692923, 1.69149, 0.556488,
        -0.567384, 1.84897, 0.183022,
        -0.526733, 1.96945, 0.185216,
        -0.311787, 2.09983, -0.172803,
        -0.273545, 2.01884, -0.265325,
        -0.273545, 2.01884, -0.265325,
        -0.267982, 1.9807, -0.284865,
        -0.379393, 0.39835, 0.92444,
        0.392617, 1.3177, -0.747674,
        -0.345279, 2.34391, 0.234064,
        -0.270149, 2.22577, 0.202871,
        -0.246256, 2.22577, 0.247471,
        -0.225292, 2.20618, 0.233457,
        -0.175987, 2.20055, 0.276089,
        0.827471, 1.31319, -0.067121,
        0.134436, 0.39835, 0.722522,
        0.134466, 0.39835, 0.722513,
        0.10816, 1.19465, 0.580424,
        0.10816, 1.19465, 0.580424,
        -0.310368, 1.67561, 0.676616,
        0.002918, 1.75043, 0.466159,
        0.089343, 1.66386, 0.478564,
        0.089343, 1.66386, 0.478564,
        0.241421, 1.50026, 0.463595,
        -0.090954, 1.83791, 0.431244,
        -0.268025, 2.00728, 0.379679,
        -0.090907, 1.85605, 0.490618,
        -0.360254, 2.04771, 0.19612,
        0.534137, 1.32752, -0.157287,
        0.565173, 1.32752, -0.165232,
        0.553497, 1.32752, -0.224018,
        -0.383773, 2.40882, 0.174199,
        -0.265017, 2.21651, 0.178885,
        -0.270149, 2.22577, 0.202871,
        -0.265017, 2.21651, 0.178885,
        -0.273334, 2.3909, -0.519495,
        0.276471, 2.3909, -0.519495,
        0.350008, 2.32187, -0.566485,
        0.333814, 2.28869, 0.041858,
        0.33023, 2.30103, -0.089421,
        0.28731, 2.2643, -0.085299,
        0.412528, 1.653, 0.262736,
        0.410181, 1.65673, 0.261993,
        0.466647, 1.54113, 0.21192,
        0.484169, 1.53406, 0.223031,
        0.475712, 1.59818, 0.275081,
        0.412528, 1.653, 0.262736,
        0.475712, 1.59818, 0.275081,
        0.626371, 1.6295, -0.199462,
        0.519383, 1.64172, -0.279769,
        0.519383, 1.64172, -0.279769,
        0.601814, 1.54946, -0.187117,
        0.604904, 1.54383, -0.176617,
        0.58506, 1.53283, -0.182485,
        0.58506, 1.53283, -0.182485,
        0.558382, 1.5055, -0.174011,
        0.519383, 1.64172, -0.279769,
        0.001568, 0.39835, -0.725484,
        -0.105158, 1.19095, -0.572031,
        -0.241224, 1.19164, -0.52649,
        -0.24627, 1.19465, -0.5232,
        0.001568, 1.19293, -0.581339,
        0.001568, 1.19293, -0.581339,
        0.050627, 1.19202, -0.57704,
        0.050627, 1.19202, -0.57704,
        0.134436, 0.39835, -0.713405,
        -0.918314, 0.39835, -0.376403,
        -0.496336, 1.81808, 0.535398,
        -0.496336, 1.95803, 0.535382,
        -0.496336, 1.80777, 0.598952,
        -0.558747, 1.85551, 0.202677,
        -0.396649, 2.65478, 0.50233,
        -0.396649, 1.81467, 0.50233,
        -0.396649, 3.75001, 0.50233,
        -0.396649, 2.78765, 0.50233,
        0.586948, 1.21324, 0.180039,
        0.593452, 1.14249, 0.10544,
        0.502525, 2.21104, -0.065793,
        0.654996, 1.86821, -0.021527,
        0.502525, 2.21104, -0.065793,
        0.654996, 1.86821, -0.021527,
        0.654996, 1.86821, -0.021527,
        0.907645, 1.37106, 0.075043,
        0.879903, 1.33907, -0.055705,
        0.666916, 1.73193, -0.114321,
        0.262316, 2.34391, -0.062791,
        0.28236, 2.30563, 0.05648,
        0.272542, 2.28152, 0.118463,
        0.749903, 1.28493, -0.147931,
        0.823088, 1.3199, -0.071531,
        0.827471, 1.31319, -0.067121,
        0.827471, 1.31319, -0.067121,
        0.766544, 1.21297, -0.10535,
        -0.106349, 3.30746, 0.46099,
        -0.106349, 3.30746, 0.50233,
        -0.167295, 2.24354, -0.253657,
        -0.143875, 2.3531, -0.217809,
        -0.10434, 2.2996, -0.263066,
        -0.143875, 2.3531, -0.217809,
        -0.099038, 2.36389, -0.234815,
        -0.10434, 2.2996, -0.263066,
        -0.099038, 2.36389, -0.234815,
        -0.049417, 2.31957, -0.271168,
        -0.099038, 2.36389, -0.234815,
        -0.049417, 2.31957, -0.271168,
        0.695528, 1.14766, -0.080395,
        0.766544, 1.21297, -0.10535,
        -0.296962, 1.42059, 0.535445,
        -0.331757, 1.3858, 0.535449,
        -0.310738, 1.42694, 0.460253,
        -0.331757, 1.3858, 0.535449,
        -0.346872, 1.37537, 0.51786,
        -0.346872, 1.37537, 0.51786,
        -0.370105, 1.35407, 0.510612,
        -0.406927, 1.36668, 0.438327,
        -0.370105, 1.35407, 0.510612,
        -0.413241, 1.35407, 0.449234,
        -0.406927, 1.36668, 0.438327,
        -0.406927, 1.36668, 0.438327,
        -0.098965, 2.65478, -0.234448,
        0.035732, 2.65478, -0.234448,
        0.160006, 2.22577, 0.275528,
        0.208376, 2.34391, 0.344105,
        0.085327, 2.28152, 0.386449,
        0.208376, 2.34391, 0.344105,
        0.098335, 2.34391, 0.417775,
        0.085327, 2.28152, 0.386449,
        0.03462, 2.34391, 0.437022,
        0.085327, 2.28152, 0.386449,
        0.027983, 2.28152, 0.403838,
        0.085327, 2.28152, 0.386449,
        0.085327, 2.28152, 0.386449,
        0.058249, 2.20772, 0.321101,
        0.060041, 2.20815, 0.320776,
        -0.161687, 2.34391, -0.209486,
        -0.143875, 2.3531, -0.217809,
        -0.235879, 2.11911, -0.256966,
        -0.267982, 1.9807, -0.284865,
        -0.273545, 2.01884, -0.265325,
        -0.214316, 2.3243, -0.16938,
        -0.214316, 2.3243, -0.16938,
        -0.345408, 2.12352, -0.059601,
        -0.289756, 2.27665, -0.049311,
        0.089343, 1.66386, 0.478564,
        0.10335, 1.32752, 0.554411,
        0.096765, 1.83768, 0.430554,
        0.10335, 1.32752, 0.554411,
        0.396914, 1.32752, 0.399904,
        0.396914, 1.32752, 0.399904,
        0.396914, 1.32752, 0.399904,
        0.784862, 1.19744, 0.10544,
        -0.343023, 2.31378, -0.300476,
        -0.503214, 1.53102, -0.088899,
        -0.548284, 1.32752, -0.097224,
        -0.548284, 1.32752, -0.097224,
        -0.466417, 1.32752, 0.310469,
        -0.548284, 1.32752, -0.097224,
        -0.45612, 1.38875, 0.30372,
        0.411192, 2.12809, -0.294445,
        0.370667, 2.15999, -0.275801,
        0.422484, 2.2348, -0.202647,
        0.345894, 2.24634, -0.208355,
        -0.223381, 2.65478, 0.39103,
        -0.223381, 2.65478, 0.39103,
        -0.239093, 2.65478, 0.378115,
        -0.223381, 2.65478, 0.39103,
        -0.239093, 2.65478, 0.378115,
        -0.275633, 2.65478, 0.34809,
        -0.318628, 2.65478, 0.295877,
        0.413192, 2.28855, -0.083315,
        0.514339, 1.7649, 0.321805,
        0.490048, 1.74406, 0.324194,
        0.579382, 1.62791, 0.275081,
        0.579382, 1.62791, 0.275081,
        0.599444, 1.58394, 0.236162,
        -0.48293, 3.75001, 0.676616,
        -0.496336, 3.75001, 0.618477,
        -0.456271, 2.04869, -0.34728,
        -0.467133, 2.04697, -0.342554,
        -0.455187, 2.05122, -0.343091,
        -0.450541, 2.12316, -0.026503,
        0.321986, 1.19465, -0.485553,
        -0.327435, 1.32752, -0.444673,
        -0.310428, 1.69433, -0.350597,
        -0.329692, 1.66831, -0.35965,
        -0.329692, 1.66831, -0.35965,
        -0.327588, 1.2608, -0.480134,
        -0.421445, 1.67989, -0.391477,
        -0.396649, 1.34755, 0.50233,
        -0.318628, 2.65478, 0.295877,
        -0.370083, 2.65478, 0.171461,
        0.072891, 1.99663, 0.390063,
        0.198885, 2.10279, 0.306363,
        0.060041, 2.20815, 0.320776,
        0.198885, 2.10279, 0.306363,
        0.172973, 2.23097, 0.266667,
        0.484169, 1.53406, 0.223031,
        0.508738, 1.32752, 0.291584,
        0.513285, 1.32752, 0.293289,
        0.513808, 1.29965, 0.301496,
        0.513285, 1.32752, 0.293289,
        0.513285, 1.32752, 0.293289,
        0.513808, 1.29965, 0.301496,
        -0.396649, 1.81467, 0.50233,
        -0.396649, 2.65478, 0.50233,
        -0.241197, 1.69819, 0.488201,
        0.002936, 1.76632, 0.518047,
        0.002936, 1.76632, 0.518047,
        0.002936, 1.94579, 0.46314,
        -0.331757, 1.3858, 0.535449,
        -0.422717, 1.32752, 0.424077,
        -0.421933, 1.32752, 0.424077,
        -0.406927, 1.36668, 0.438327,
        -0.350211, 1.3456, 0.430676,
        -0.310738, 1.42694, 0.460253,
        -0.197408, 1.56672, 0.511091,
        -0.274296, 1.5265, 0.496457,
        -0.422769, 1.32731, 0.424,
        -0.422717, 1.32752, 0.424077,
        -0.692923, 1.44194, 0.465694,
        -0.595758, 1.35062, 0.432509,
        -0.6153, 1.42694, 0.460253,
        -0.692923, 1.69149, 0.556488,
        -0.728629, 1.56672, 0.511091,
        -0.634688, 1.62605, 0.532678,
        -0.651741, 1.5265, 0.496457,
        -0.496336, 1.80777, 0.598952,
        -0.595758, 1.78282, 0.589805,
        -0.496336, 1.71345, 0.564565,
        -0.595758, 1.78282, 0.589805,
        -0.692923, 1.69149, 0.556488,
        -0.556245, 1.69893, 0.559243,
        -0.556245, 1.69893, 0.559243,
        -0.692923, 1.69149, 0.556488,
        -0.422717, 1.32752, 0.424077,
        -0.233115, 1.69149, 0.556488,
        -0.29135, 1.62605, 0.532678,
        -0.233115, 1.69149, 0.556488,
        -0.296962, 1.7515, 0.578381,
        -0.296962, 1.63359, 0.53542,
        -0.298152, 1.63359, 0.53542,
        -0.233115, 1.69149, 0.556488,
        -0.60132, 1.4142, 0.455621,
        -0.422717, 1.32752, 0.424077,
        0.424077, 1.77844, 0.315035,
        0.514339, 1.7649, 0.321805,
        0.514339, 1.7649, 0.321805,
        0.514339, 1.7649, 0.321805,
        -0.357262, 0.829619, 0.553318,
        0.134436, 0.39835, 0.722522,
        0.134436, 0.39835, 0.722522,
        0.10816, 1.19465, 0.580424,
        0.10816, 1.19465, 0.580424,
        -0.345621, 0.949454, 0.535501,
        -0.296962, 1.06265, 0.535487,
        -0.296962, 1.06265, 0.535487,
        0.273949, 2.00728, 0.379679,
        0.17997, 2.09715, 0.352202,
        0.002936, 1.94579, 0.46314,
        0.049885, 1.90295, 0.483481,
        0.273949, 1.66866, 0.483348,
        0.096765, 1.83768, 0.430554,
        0.342575, 1.58066, 0.430518,
        0.362075, 1.54069, 0.366632,
        0.096765, 1.83768, 0.430554,
        -0.212372, 1.52989, 0.481364,
        -0.217436, 1.52082, 0.468958,
        -0.432754, 3.45135, 0.223312,
        0.318839, 2.12644, -0.264236,
        0.318839, 2.12644, -0.264236,
        -0.389481, 1.3177, -0.747674,
        0.92145, 0.39835, 0.38552,
        0.92145, 0, 0.38552,
        0.248728, 2.14055, 0.259417,
        0.198885, 2.10279, 0.306363,
        0.25325, 2.13995, 0.241956,
        0.198885, 2.10279, 0.306363,
        0.002895, 1.93118, 0.415354,
        0.002936, 1.94579, 0.46314,
        0.072891, 1.99663, 0.390063,
        0.072891, 1.99663, 0.390063,
        -0.370083, 2.65478, 0.171461,
        0.350008, 2.32187, -0.566485,
        0.276471, 2.3909, -0.519495,
        0.292001, 2.38851, -0.508213,
        0.002936, 1.76632, 0.518047,
        0.350008, 2.25975, -0.274326,
        0.376158, 2.2628, -0.28853,
        0.376158, 2.2628, -0.28853,
        0.392617, 2.26625, -0.305122,
        0.392617, 2.26625, -0.305122,
        -0.273334, 2.34192, -0.28906,
        0.001568, 2.32501, -0.27391,
        -0.273334, 2.34192, -0.28906,
        -0.091163, 2.30608, -0.264371,
        -0.273334, 2.34192, -0.28906,
        -0.049417, 2.31957, -0.271168,
        -0.091163, 2.30608, -0.264371,
        -0.049417, 2.31957, -0.271168,
        -0.273334, 2.34192, -0.28906,
        0.604904, 1.54383, -0.176617,
        0.604904, 1.54383, -0.176617,
        0.601814, 1.54946, -0.187117,
        0.557081, 1.70583, -0.288795,
        0.879903, 1.33907, -0.055705,
        0.791101, 1.29606, -0.151543,
        0.879903, 1.33907, -0.055705,
        0.879903, 1.33907, -0.055705,
        0.695528, 1.14766, 0.118714,
        -0.503214, 1.53102, -0.088899,
        -0.510201, 1.50872, 0.078872,
        -0.526733, 1.52849, 0.024602,
        -0.456381, 1.53989, -0.217168,
        -0.043961, 1.90295, 0.483481,
        0.002936, 1.94579, 0.46314,
        -0.090907, 1.85605, 0.490618,
        -0.090907, 1.85605, 0.490618,
        -0.090954, 1.83791, 0.431244,
        -0.165285, 1.78176, 0.501932,
        -0.240662, 1.67666, 0.415789,
        -0.241197, 1.69819, 0.488201,
        -0.389481, 1.3177, -0.747674,
        0.392617, 2.31523, -0.535557,
        0.450624, 2.18568, -0.569936,
        0.350008, 2.32187, -0.566485,
        0.350008, 2.32187, -0.566485,
        0.392617, 1.3177, -0.747674,
        -0.379393, 0, 0.92444,
        -0.379393, 0.39835, 0.92444,
        0.798401, 1.33071, 0.14858,
        0.752739, 1.26076, 0.180039,
        0.752739, 1.26076, 0.180039,
        0.752739, 1.26076, 0.180039,
        0.798401, 1.33071, 0.14858,
        0.752739, 1.26076, 0.180039,
        -0.461497, 1.82654, 0.535397,
        -0.48293, 1.90814, 0.560337,
        -0.48293, 3.75001, 0.560337,
        -0.331797, 1.78945, 0.535402,
        -0.335942, 1.79394, 0.530579,
        -0.310368, 2.65478, 0.560337,
        -0.296962, 1.62605, 0.559316,
        -0.298152, 1.63359, 0.53542,
        0.30707, 2.65478, 0.203667,
        -0.335942, 1.79394, 0.530579,
        -0.335942, 1.79394, 0.530579,
        -0.331797, 1.78945, 0.535402,
        -0.296962, 1.7515, 0.578381,
        -0.233115, 1.69149, 0.556488,
        -0.233115, 1.69149, 0.556488,
        -0.261938, 1.73563, 0.386573,
        -0.261938, 1.73563, 0.386573,
        -0.292187, 1.7683, 0.352204,
        -0.261938, 1.73563, 0.386573,
        0.350008, 2.25975, -0.274326,
        0.316027, 2.30913, -0.278707,
        0.170431, 2.24354, -0.253657,
        0.316027, 2.30913, -0.278707,
        0.09428, 2.30608, -0.264371,
        0.107477, 2.2996, -0.263066,
        0.316027, 2.30913, -0.278707,
        0.107477, 2.2996, -0.263066,
        0.408148, 2.20055, -0.293706,
        0.376158, 2.2628, -0.28853,
        0.350008, 2.25975, -0.274326,
        0.411192, 2.12809, -0.294445,
        0.435094, 2.03251, -0.322503,
        0.370667, 2.15999, -0.275801,
        0.411192, 2.12809, -0.294445,
        0.239003, 2.11911, -0.256966,
        0.342317, 2.1455, -0.267143,
        0.318839, 2.12644, -0.264236,
        0.342317, 2.1455, -0.267143,
        0.239003, 2.11911, -0.256966,
        0.330564, 1.32752, -0.444671,
        0.310375, 2.01939, -0.280929,
        0.330564, 1.32752, -0.444671,
        0.385063, 1.88723, -0.327926,
        0.239003, 2.11911, -0.256966,
        0.330725, 1.2608, -0.480134,
        0.376158, 1.26514, -0.500647,
        0.310375, 2.01939, -0.280929,
        0.239003, 2.11911, -0.256966,
        0.385063, 1.88723, -0.327926,
        0.310375, 2.01939, -0.280929,
        0.435094, 1.9488, -0.340304,
        0.766544, 1.21297, -0.10535,
        0.600752, 1.16545, -0.10535,
        -0.396649, 1.83039, 0.40546,
        -0.396649, 2.01936, 0.258754,
        -0.425852, 2.02387, 0.246011,
        -0.472841, 1.93879, -0.416623,
        0.292001, 2.38851, -0.508213,
        -0.273334, 2.3909, -0.519495,
        -0.288865, 2.38851, -0.508213,
        -0.389481, 1.45907, -0.768514,
        0.350008, 2.32187, -0.566485,
        0.350008, 2.32187, -0.566485,
        -0.346872, 2.32187, -0.566485,
        -0.164356, 3.01981, 0.449419,
        0.06807, 3.01981, 0.442773,
        -0.61235, 1.62605, 0.621795,
        0.342575, 1.58066, 0.430518,
        0.392617, 1.26872, -0.517239,
        0.376158, 1.26514, -0.500647,
        0.376158, 1.26514, -0.500647,
        0.330725, 1.2608, -0.480134,
        0.249429, 1.19465, -0.523202,
        0.333549, 3.45135, 0.070928,
        0.10335, 1.32752, 0.554411,
        0.10335, 1.32752, 0.554411,
        0.089343, 1.66386, 0.478564,
        -0.217436, 1.52082, 0.468958,
        0.10335, 1.32752, 0.554411,
        0.002918, 1.75043, 0.466159,
        -0.389481, 1.3177, -0.747674,
        -0.346872, 1.32421, -0.77847,
        -0.447488, 1.45004, -0.726303,
        -0.447488, 2.18568, -0.569936,
        -0.447488, 2.18568, -0.569936,
        -0.389481, 2.31523, -0.535557,
        -0.349145, 1.81987, 0.392467,
        -0.324339, 2.01501, 0.212064,
        -0.396649, 1.83039, 0.40546,
        -0.344516, 2.0362, 0.212355,
        0.198885, 2.10279, 0.306363,
        0.25325, 2.13995, 0.241956,
        0.25325, 2.13995, 0.241956,
        0.307208, 2.10053, 0.196268,
        0.25325, 2.13995, 0.241956,
        0.28236, 2.30563, 0.05648,
        0.216871, 3.45135, -0.210744,
        0.303151, 3.45135, -0.081457,
        -0.064801, 3.45135, -0.327422,
        -0.217186, 3.45135, -0.297025,
        -0.346474, 3.45135, -0.210744,
        -0.463151, 3.45135, 0.070928,
        -0.432754, 3.45135, 0.223312,
        -0.217186, 3.45135, 0.438881,
        -0.346474, 3.45135, 0.3526,
        -0.064801, 3.45135, 0.469278,
        0.216871, 3.45135, 0.3526,
        0.303151, 3.45135, 0.223312,
        0.333549, 3.45135, 0.070928,
        0.393414, 2.08068, 0.262338,
        0.333814, 2.28869, 0.041858,
        0.301031, 2.19095, 0.135862,
        0.300293, 2.26001, 0.045036,
        0.03462, 2.34391, 0.437022,
        0.098335, 2.34391, 0.417775,
        0.100481, 2.65478, 0.422987,
        0.100481, 2.65478, 0.422987,
        -0.273334, 1.24204, -0.763735,
        0.519383, 1.64172, -0.279769,
        0.558382, 1.5055, -0.174011,
        0.499265, 1.50249, -0.158699,
        0.269472, 2.34007, -0.04498,
        0.28236, 2.30563, 0.05648,
        0.28236, 2.30563, 0.05648,
        -0.214316, 2.3243, -0.16938,
        0.435094, 1.9488, -0.340304,
        0.435094, 1.9488, -0.340304,
        0.376158, 1.26514, -0.500647,
        0.450624, 1.39827, -0.48286,
        0.376158, 1.26514, -0.500647,
        0.392617, 1.26872, -0.517239,
        0.450624, 1.39827, -0.48286,
        0.392617, 2.26625, -0.305122,
        0.392617, 2.26625, -0.305122,
        -0.595758, 1.35062, 0.432509,
        -0.310368, 3.75001, 0.560337,
        0.825878, 1.235, -0.023981,
        -0.064801, 3.33924, 0.469278,
        -0.064801, 3.45135, 0.469278,
        -0.064801, 2.78765, 0.469278,
        -0.064801, 3.01981, 0.469278,
        -0.296962, 1.75558, 0.535406,
        -0.303486, 2.65478, 0.646767,
        0.009931, 3.30746, 0.50233,
        -0.447488, 1.45004, -0.726303,
        -0.389481, 1.3177, -0.747674,
        -0.099038, 2.36389, -0.234815,
        -0.099038, 2.36389, -0.234815,
        -0.143875, 2.3531, -0.217809,
        -0.143875, 2.3531, -0.217809,
        -0.406927, 1.36668, 0.438327,
        0.49168, 1.19465, 0.324976,
        -0.61235, 1.42694, 0.621795,
        0.318839, 2.12644, -0.264236,
        0.345894, 2.24634, -0.208355,
        -0.246075, 2.14012, 0.246857,
        -0.265017, 2.21651, 0.178885,
        -0.246075, 2.14012, 0.246857,
        -0.301295, 2.09936, 0.202567,
        -0.246075, 2.14012, 0.246857,
        0.477836, 2.14772, 0.182031,
        0.658068, 1.81844, 0.07429,
        0.658068, 1.81844, 0.07429,
        0.658068, 1.81844, 0.07429,
        0.907645, 1.37106, 0.075043,
        0.492968, 2.20559, 0.063627,
        0.477836, 2.14772, 0.182031,
        0.654996, 1.86821, -0.021527,
        0.658068, 1.81844, 0.07429,
        -0.048209, 3.35193, 0.50233,
        -0.106349, 3.30746, 0.50233,
        0.599444, 1.58394, 0.236162,
        0.49168, 1.19465, 0.324976,
        0.568687, 1.19465, 0.141527,
        0.553497, 1.19465, 0.233135,
        0.571215, 1.19465, 0.143923,
        -0.259254, 1.19465, -0.525815,
        -0.24627, 1.19465, -0.5232,
        -0.318849, 1.19465, -0.485553,
        -0.420807, 1.19465, -0.417817,
        0.423944, 1.19465, 0.426934,
        -0.488543, 1.19465, -0.315859,
        -0.550361, 1.19465, -0.224018,
        0.321986, 1.19465, 0.49467,
        0.230145, 1.19465, 0.556488,
        -0.574297, 1.19465, -0.102034,
        -0.595758, 1.19465, 0.004558,
        0.10816, 1.19465, 0.580424,
        0.001568, 1.19465, 0.601884,
        -0.574297, 1.19465, 0.111151,
        -0.550361, 1.19465, 0.233135,
        -0.105024, 1.19465, 0.580424,
        -0.227009, 1.19465, 0.556488,
        -0.456271, 2.04869, -0.34728,
        -0.455187, 2.05122, -0.343091,
        -0.447488, 2.13391, -0.326493,
        -0.447488, 2.13391, -0.326493,
        -0.447488, 1.45004, -0.726303,
        -0.463019, 1.80895, -0.431156,
        -0.447488, 1.45004, -0.726303,
        -0.455187, 1.74722, -0.407733,
        -0.447488, 1.45004, -0.726303,
        -0.455187, 1.74722, -0.407733,
        -0.310368, 2.65478, 0.560337,
        -0.223381, 2.65478, 0.39103,
        -0.217186, 2.65478, 0.704359,
        -0.303486, 2.65478, 0.646767,
        -0.296962, 2.65478, 0.618477,
        -0.163714, 2.65478, 0.422987,
        -0.064801, 2.65478, 0.734756,
        -0.031617, 2.65478, 0.449198,
        0.216871, 2.65478, 0.618078,
        0.087583, 2.65478, 0.704359,
        0.100481, 2.65478, 0.422987,
        0.333549, 2.65478, 0.336406,
        0.303151, 2.65478, 0.488791,
        -0.457644, 1.85172, 0.373909,
        -0.463019, 1.8544, 0.36612,
        -0.396649, 1.57738, -0.297771,
        -0.455187, 1.74722, -0.407733,
        -0.463019, 1.80895, -0.431156,
        -0.396649, 1.6622, -0.381073,
        -0.421445, 1.67989, -0.391477,
        -0.396649, 1.6622, -0.381073,
        -0.496203, 1.65088, -0.311892,
        -0.431957, 1.69535, -0.394193,
        -0.259254, 1.19465, -0.525815,
        -0.327588, 1.2608, -0.480134,
        -0.363278, 1.32752, -0.456275,
        0.382529, 0.39835, -0.915323,
        0.134436, 0.39835, -0.713405,
        0.705616, 0.39835, -0.69949,
        0.4011, 0.39835, -0.606553,
        0.92145, 0.39835, 0.38552,
        0.997111, 0.39835, 0.004558,
        0.382529, 0.39835, 0.92444,
        0.705616, 0.39835, 0.708606,
        0.4011, 0.39835, 0.61567,
        0.61268, 0.39835, 0.40409,
        -0.048209, 3.35193, 0.465968,
        0.087583, 2.78765, 0.438881,
        0.92145, 0, 0.38552,
        0.92145, 0.39835, 0.38552,
        0.262316, 2.34391, -0.062791,
        0.269472, 2.34007, -0.04498,
        0.28731, 2.2643, -0.085299,
        0.296167, 2.26764, -0.049916,
        0.30685, 2.65478, 0.036765,
        0.301293, 2.34391, 0.037876,
        0.255395, 2.65478, -0.087652,
        0.301293, 2.34391, 0.037876,
        0.27792, 2.21872, -0.149118,
        0.274931, 2.15644, -0.196518,
        0.170431, 2.24354, -0.253657,
        0.239003, 2.11911, -0.256966,
        0.49263, 1.50663, -0.157245,
        0.534137, 1.32752, -0.157287,
        -0.556245, 1.69893, 0.559243,
        -0.550361, 1.32752, 0.233135,
        -0.550361, 1.19465, 0.233135,
        -0.42313, 1.32752, 0.423461,
        -0.42313, 1.32752, 0.423461,
        -0.42313, 1.32752, 0.423461,
        -0.422769, 1.32731, 0.424,
        -0.422769, 1.32731, 0.424,
        -0.48293, 1.67561, 0.676616,
        -0.496336, 1.79186, 0.618477,
        -0.496336, 0.829619, 1.09966,
        -0.296962, 1.79186, 0.618477,
        -0.310368, 1.67561, 0.676616,
        0.477836, 2.14772, 0.182031,
        0.477836, 2.14772, 0.182031,
        -0.233115, 1.69149, 0.556488,
        -0.214619, 1.61752, 0.498909,
        -0.240662, 1.67666, 0.415789,
        -0.261938, 1.73563, 0.386573,
        -0.233115, 1.69149, 0.556488,
        0.475712, 1.59818, 0.275081,
        0.484169, 1.53406, 0.223031,
        0.547442, 1.54382, 0.243907,
        0.475712, 1.59818, 0.275081,
        0.35109, 2.04969, 0.253877,
        0.307208, 2.10053, 0.196268,
        0.25325, 2.13995, 0.241956,
        -0.316188, 2.0903, 0.180975,
        -0.301295, 2.09936, 0.202567,
        -0.289756, 2.27665, -0.049311,
        -0.345408, 2.12352, -0.059601,
        -0.301805, 2.24607, 0.050287,
        -0.332202, 2.04964, 0.175322,
        -0.326759, 2.02566, 0.200773,
        -0.316188, 2.0903, 0.180975,
        -0.332202, 2.04964, 0.175322,
        -0.296962, 0.829619, 1.09966,
        -0.496336, 0.829619, 0.535515,
        -0.379149, 0.829619, 0.535515,
        0.30707, 2.65478, 0.203667,
        0.333549, 2.65478, 0.070928,
        0.333549, 3.45135, 0.070928,
        -0.61235, 1.42694, 0.621795,
        -0.549299, 1.35407, 0.585292,
        -0.419053, 2.65478, 0.50932,
        -0.574297, 1.19465, -0.102034,
        0.648007, 1.31345, 0.218268,
        0.611978, 1.31168, 0.213589,
        0.611978, 1.31168, 0.213589,
        0.562434, 1.29282, 0.188136,
        0.56579, 1.22307, 0.171242,
        -0.048209, 3.35193, 0.50233,
        -0.461571, 1.0951, 0.535483,
        -0.446426, 1.0951, 0.51786,
        -0.61235, 1.42694, 0.621795,
        -0.6153, 1.42694, 0.460253,
        -0.60132, 1.4142, 0.455621,
        -0.634688, 1.62605, 0.532678,
        -0.635447, 1.62605, 0.535515,
        -0.556245, 1.69893, 0.559243,
        -0.61235, 1.62605, 0.621795,
        -0.556245, 1.69893, 0.559243,
        0.508738, 1.32752, 0.291584,
        0.490329, 1.32752, 0.270438,
        0.396914, 1.32752, 0.399904,
        0.513285, 1.32752, 0.293289,
        0.423944, 1.32752, 0.426934,
        0.230145, 1.32752, 0.556488,
        -0.227009, 1.32752, 0.556488,
        0.001568, 1.32752, 0.601884,
        0.10335, 1.32752, 0.554411,
        -0.422717, 1.32752, 0.424077,
        -0.420807, 1.32752, 0.426934,
        -0.421933, 1.32752, 0.424077,
        -0.304343, 1.32752, 0.472544,
        -0.42313, 1.32752, 0.423461,
        -0.550361, 1.32752, -0.224018,
        -0.595758, 1.32752, 0.004558,
        -0.363278, 1.32752, -0.456275,
        -0.420807, 1.32752, -0.417817,
        -0.327435, 1.32752, -0.444673,
        -0.396649, 1.0951, 0.50233,
        -0.396649, 1.34755, 0.50233,
        -0.461571, 1.0951, 0.535483,
        -0.461484, 1.95803, 0.535382,
        -0.463053, 1.32741, 0.535456,
        -0.461548, 1.32779, 0.535456,
        -0.331727, 1.0951, 0.535483,
        -0.331757, 1.3858, 0.535449,
        -0.296962, 1.06265, 0.535487,
        -0.296962, 1.42059, 0.535445,
        -0.496336, 1.33632, 0.535455,
        -0.379149, 0.829619, 0.535515,
        0.997111, 0.39835, 0.004558,
        -0.496336, 1.80777, 0.598952,
        -0.496336, 1.71345, 0.564565,
        -0.496336, 1.79186, 0.618477,
        -0.496336, 1.69893, 0.626184,
        -0.496336, 1.62605, 0.699024,
        -0.496336, 1.95803, 0.535382,
        -0.496336, 1.81808, 0.535398,
        -0.496336, 1.33632, 0.535455,
        -0.496336, 0.829619, 0.535515,
        -0.496336, 1.35407, 0.626184,
        -0.583256, 1.85941, -0.08999,
        -0.692923, 1.69149, 0.556488,
        -0.567384, 1.84897, 0.183022,
        -0.692923, 1.69149, 0.556488,
        0.382529, 0.39835, -0.915323,
        0.769066, 1.37279, 0.301496,
        0.658068, 1.81844, 0.07429,
        0.769066, 1.37279, 0.301496,
        0.6456, 1.68321, 0.18465,
        -0.389481, 2.26625, -0.305122,
        -0.343023, 2.31378, -0.300476,
        -0.447488, 2.13391, -0.326493,
        0.412528, 1.653, 0.262736,
        -0.496336, 1.69893, 0.626184,
        -0.549299, 1.62605, 0.684846,
        -0.200414, 1.57211, 0.496276,
        -0.212372, 1.52989, 0.481364,
        0.593452, 1.14249, 0.10544,
        0.614425, 1.11753, 0.007611,
        -0.61235, 1.62605, 0.621795,
        -0.379393, 0, -0.915323
    ]);
    // prettier-ignore
    let normal_arr = Float32Array.from([
        -0.0986, 0.1564, 0.9827,
        -0.2918, 0.3642, 0.8844,
        -0.1474, -0.0144, 0.989,
        0.3767, -0.7035, -0.6026,
        0.6094, -0.5348, -0.5853,
        0.2929, -0.7037, -0.6472,
        -0.0038, 0.0131, -0.9999,
        0.2287, -0.3218, -0.9187,
        0.4919, -0.177, -0.8524,
        -0.1119, 0.851, 0.5131,
        0.0229, 0.9045, 0.4257,
        0.0473, 0.9391, 0.3403,
        0.0788, -0.6135, 0.7857,
        0.1711, -0.477, 0.8621,
        -0.0821, -0.5861, 0.806,
        0.3826, 0, -0.9239,
        0.7071, 0, -0.7071,
        0.3826, 0, -0.9239,
        0.0032, 0.3549, 0.9349,
        0.0078, 0.311, 0.9503,
        -0.2548, 0.2621, 0.9308,
        -0.5274, -0.6804, -0.5088,
        -0.1889, -0.5651, -0.803,
        -0.1529, -0.7661, -0.6242,
        -0.5494, 0, 0.8355,
        -0.8044, 0, 0.594,
        -0.1765, 0.2754, 0.945,
        0.9332, -0.3395, -0.1178,
        0.9807, -0.0182, 0.1947,
        0.9509, -0.2403, 0.1948,
        -0.5945, -0.1508, -0.7898,
        -0.8665, -0.1725, -0.4684,
        -0.9104, 0.1463, -0.3869,
        -0.3068, -0.5171, 0.799,
        -0.5295, -0.6381, 0.5589,
        -0.5295, -0.6381, 0.5589,
        -0.5124, 0.1668, -0.8424,
        -0.8211, 0.1786, -0.5421,
        -0.5822, 0.1785, -0.7932,
        -0.4042, -0.7058, -0.5817,
        -0.6094, -0.7381, -0.2894,
        -0.6651, -0.7024, -0.2535,
        0.5694, 0.7178, 0.4006,
        0.3096, 0.5589, 0.7692,
        0.5696, 0.7178, 0.4004,
        -0.7631, 0.6217, 0.1767,
        -0.8088, 0.5033, 0.3041,
        -0.6145, 0.6652, 0.4241,
        0.7071, 0, 0.7071,
        0.3826, 0, 0.9239,
        0.3826, 0, 0.9239,
        -0.8638, 0.1163, -0.4902,
        -0.7684, 0.1525, -0.6215,
        -0.8019, 0.1117, -0.5869,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        0.9808, 0, -0.1948,
        0.9808, 0, -0.1948,
        0.9239, 0, -0.3826,
        0.7071, 0, -0.7071,
        0.5557, 0, -0.8313,
        0.5557, 0, -0.8313,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        -0.0288, -0.9727, -0.2301,
        -0.0164, -0.9693, -0.2453,
        -0.0074, -0.9748, -0.223,
        0.0002, 0.4472, 0.8944,
        0, 0.4473, 0.8944,
        0, 0.4473, 0.8944,
        0.7071, 0, 0.7071,
        0.3955, -0.0173, 0.9183,
        0.7071, 0, 0.7071,
        -0.4152, 0.3695, 0.8313,
        -0.2726, 0.5856, 0.7634,
        -0.3239, 0.5181, 0.7916,
        0.1187, 0.0986, 0.988,
        0.0001, 0.3277, 0.9448,
        0.0913, 0.2385, 0.9668,
        -0.7071, -0.6754, 0.2096,
        -0.7071, -0.6754, 0.2096,
        -0.7071, -0.6754, 0.2096,
        -0.4789, 0.1469, 0.8655,
        -0.5405, 0.1701, 0.8239,
        -0.6823, 0.1748, 0.7098,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0.3826, 0, 0.9239,
        0.7071, 0, 0.7071,
        0.7071, 0, 0.7071,
        0.8923, 0, -0.4513,
        1, 0, 0,
        1, 0, 0,
        0.5494, 0, -0.8355,
        0, 0, -1,
        0, 0, -1,
        -0.1794, -0.98, -0.0855,
        -0.512, -0.7806, 0.3584,
        -0.4608, -0.8786, 0.1253,
        -0.9803, 0.1977, 0,
        -0.9803, 0.1977, 0,
        -0.9803, 0.1977, 0,
        -0.1363, 0.477, 0.8682,
        -0.1363, 0.477, 0.8682,
        -0.1363, 0.477, 0.8682,
        -0.9518, 0, -0.3065,
        -1, 0, 0,
        -0.8923, 0, -0.4513,
        0.9239, 0, -0.3826,
        0.7071, 0, -0.7071,
        -0.3825, 0, -0.9239,
        0, 0, -1,
        -0.3825, 0, -0.9239,
        -0.3096, 0.5588, 0.7693,
        -0.5692, 0.7179, 0.4009,
        -0.5692, 0.718, 0.4004,
        0.7076, 0.6754, -0.2075,
        0.7077, 0.6753, -0.2074,
        0.7074, 0.6757, -0.2073,
        0.2287, -0.3218, -0.9187,
        -0.0038, 0.0131, -0.9999,
        -0.2477, -0.0572, -0.9671,
        0.2538, 0.9547, 0.1549,
        0.2535, 0.9548, 0.1549,
        0.2539, 0.9547, 0.155,
        0, 0, -1,
        0, 0, -1,
        0.8737, 0.3457, -0.3422,
        0.9923, -0.0259, -0.1208,
        0.9055, 0.0047, -0.4242,
        0.7071, 0, 0.7071,
        0.9239, 0, 0.3826,
        0.7071, 0, 0.7071,
        -0.5205, 0.3792, 0.765,
        -0.5188, 0.4419, 0.7318,
        -0.621, 0.2402, 0.7461,
        0.8372, 0.251, 0.4859,
        0.9518, -0.1776, 0.2499,
        0.9967, 0.0223, 0.0775,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0.8205, 0.1746, 0.5442,
        0.5418, 0.1786, 0.8213,
        0.8212, 0.1782, 0.5421,
        -0.7467, 0.6651, -0.0043,
        -0.9685, 0.2427, 0.0545,
        -0.834, 0.5396, 0.1147,
        0.4218, 0.0069, 0.9066,
        0.4274, -0.0181, 0.9038,
        0.6706, -0.0097, 0.7417,
        -0.3826, 0, -0.9239,
        0, 0, -1,
        0, 0, -1,
        0.8573, -0.0181, 0.5145,
        0.9798, -0.1956, -0.0416,
        0.9798, 0.1956, 0.0416,
        0.9798, -0.1956, -0.0416,
        -0.9348, 0.2517, -0.2506,
        -1, 0, 0,
        -0.8656, 0.5006, -0.0096,
        0.7956, 0.5925, 0.126,
        0.9798, 0.1956, 0.0416,
        0.3825, 0, -0.9239,
        0, 0, -1,
        0, 0, -1,
        -0.8484, 0.4633, 0.2559,
        -0.6611, 0.7359, 0.146,
        -0.661, 0.736, 0.146,
        0.2258, -0.2646, -0.9375,
        -0.1958, -0.4668, -0.8624,
        0.1301, -0.0876, -0.9876,
        0.7956, -0.5925, -0.126,
        0.7956, -0.5925, -0.1259,
        -0.5273, 0.8248, -0.2039,
        -0.4439, 0.7769, -0.4465,
        -0.3782, 0.7737, -0.5083,
        0.0016, -0.2931, -0.9561,
        0.0016, -0.2931, -0.9561,
        0.0016, -0.2931, -0.9561,
        -0.9239, 0, 0.3827,
        -0.9239, 0, 0.3826,
        -1, 0, 0,
        -0.9951, 0, 0.0992,
        0.3927, 0.1785, -0.9022,
        0.5822, 0.1785, -0.7931,
        0.545, 0.1737, -0.8202,
        0.2714, -0.9466, 0.1737,
        0.2714, -0.9467, 0.1734,
        0.2714, -0.9466, 0.1739,
        0.9846, 0.1121, 0.134,
        0.9852, 0.1353, 0.105,
        1, 0, 0,
        0.182, 0.2429, -0.9528,
        0.2766, 0.4472, -0.8506,
        0.0314, 0.4345, -0.9001,
        0.9744, 0, 0.2247,
        0.9744, 0, 0.2247,
        0.8923, 0, 0.4513,
        0.9239, 0, -0.3825,
        0.7071, 0, -0.7071,
        0.7071, 0, -0.7071,
        -0.8647, 0.1515, 0.4788,
        -0.823, 0.1841, 0.5373,
        -0.9683, 0.1655, 0.1871,
        0.1948, -0.0139, 0.9807,
        -0.049, 0, 0.9988,
        -0.0142, -0.0173, 0.9997,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0.6, 0.136, 0.7883,
        0.7833, -0.0385, 0.6204,
        0.7872, 0.2268, 0.5735,
        0.2269, 0.9557, -0.1876,
        0.1874, 0.9787, 0.084,
        0.3859, 0.9015, -0.1957,
        0.7071, -0.6769, 0.2045,
        0.7071, -0.6769, 0.2045,
        0.7071, -0.6769, 0.2045,
        -0.8659, 0, 0.5002,
        -0.8702, -0.4926, 0.0001,
        -0.7587, -0.4821, 0.438,
        0.7246, -0.6673, 0.1723,
        0.7034, -0.5568, 0.4417,
        0.6484, -0.5929, 0.4775,
        -0.4913, -0.7353, -0.4668,
        -0.8053, -0.5071, -0.3072,
        -0.2549, -0.8307, -0.4949,
        0.8626, 0.1592, -0.4801,
        0.9587, 0.104, -0.2647,
        0.9896, 0.1341, -0.0521,
        -0.3826, 0, 0.9239,
        -0.7071, 0, 0.7071,
        -0.7071, 0, 0.7071,
        0.9239, 0, 0.3826,
        0.9209, 0, 0.3897,
        0.8313, 0, 0.5557,
        -0.6834, -0.0656, 0.7271,
        -0.6877, -0.2379, 0.6858,
        -0.759, 0.1321, 0.6375,
        0.9808, 0, 0.1948,
        0.9808, 0, 0.1948,
        -0.337, -0.0181, 0.9413,
        -0.049, -0.0182, 0.9986,
        -0.0065, -0.009, 0.9999,
        -0.3886, 0.2451, 0.8882,
        -0.7507, 0.0958, 0.6536,
        -0.5631, 0.1839, 0.8056,
        -0.7844, -0.5516, -0.2836,
        -0.7009, -0.6006, -0.3847,
        -0.8474, -0.5303, -0.0264,
        0, -1, -0.0002,
        0, -1, 0,
        0, -1, 0,
        -0.4074, 0.0711, -0.9104,
        -0.6409, 0.2624, -0.7213,
        -0.4217, 0.3144, -0.8505,
        0.9497, -0.1781, -0.2574,
        0.9497, -0.1781, -0.2574,
        0.9823, 0.064, -0.176,
        -0.7275, -0.1533, -0.6687,
        -0.8875, -0.0259, -0.46,
        -0.6951, -0.2516, -0.6734,
        0.6719, 0.1899, 0.7158,
        0.8245, 0.1975, 0.5303,
        0.7856, 0.2194, 0.5785,
        -0.2961, -0.2748, 0.9148,
        -0.6789, -0.4566, 0.5749,
        -0.5563, -0.4312, 0.7103,
        0.9518, 0, -0.3065,
        1, 0, 0,
        0.9873, 0, 0.1589,
        -0.2466, -0.859, -0.4486,
        -0.0205, -0.9631, -0.2683,
        -0.2012, -0.9753, -0.0913,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0.9239, 0, 0.3826,
        0.1639, 0.8084, -0.5653,
        0.4076, 0.9033, -0.1336,
        0.4194, 0.7266, -0.5443,
        0.4121, 0.572, 0.7092,
        0.6699, 0.3661, 0.6459,
        0.808, 0.243, 0.5367,
        0, -0.9857, -0.1684,
        0, -0.9888, -0.1489,
        -0.0072, -0.2041, -0.9789,
        -0.122, -0.211, -0.9698,
        0.1461, -0.166, -0.9752,
        0, 0, 1,
        0.3826, 0, 0.9239,
        0.3826, 0, 0.9239,
        0.2549, -0.8307, -0.4949,
        0.2548, -0.8307, -0.495,
        0, -0.8591, -0.5118,
        -0.1958, -0.4668, -0.8624,
        -0.3196, -0.6239, -0.7131,
        -0.5035, -0.5854, -0.6355,
        0, 0.9783, 0.2072,
        0, 0.9782, 0.2077,
        0, 0.9783, 0.2071,
        0.7069, -0.6765, 0.2066,
        0.7072, -0.6762, 0.2062,
        0.7071, -0.6765, 0.2059,
        -0.5672, 0.5989, -0.5652,
        -0.551, 0.5755, -0.6043,
        -0.6193, 0.6792, -0.3939,
        -0.1574, -0.8855, -0.4372,
        -0.2528, -0.8828, -0.3958,
        -0.0365, -0.9451, -0.3247,
        -0.5751, 0.7705, 0.2748,
        -0.4349, 0.7682, 0.4699,
        -0.2211, -0.9137, 0.3408,
        -0.3346, -0.7547, 0.5643,
        -0.3541, -0.7851, 0.5082,
        0.4435, -0.5273, -0.7248,
        0.4444, -0.5276, -0.724,
        0.4446, -0.5277, -0.7237,
        0, 0, -1,
        -0.1948, 0, -0.9808,
        0, 0, -1,
        0, 0, -1,
        0.1948, 0, -0.9808,
        0, 0, -1,
        -0.9731, 0.1786, -0.1453,
        -0.9452, 0.3246, -0.0353,
        -0.8789, 0.4217, -0.2228,
        0.7849, 0.5124, -0.3482,
        0.7749, 0.5377, -0.3322,
        0.4928, 0.8377, -0.2352,
        -0.3825, 0, 0.9239,
        -0.3825, 0, 0.9239,
        0.6094, -0.7755, -0.1648,
        0.7956, -0.5925, -0.126,
        0.6095, -0.7754, -0.1649,
        -0.9784, 0.0834, -0.189,
        -0.8267, 0.1085, -0.552,
        -0.8348, 0.0203, -0.5501,
        -0.5762, -0.6684, 0.4703,
        -0.4475, -0.6315, 0.6332,
        -0.3739, -0.3335, 0.8654,
        0.9967, 0.0223, 0.0775,
        0.9518, -0.1776, 0.2499,
        0.9002, -0.3875, -0.1987,
        0.5421, 0.1786, 0.8211,
        0.148, 0.1404, 0.9789,
        0.5494, 0, 0.8355,
        0.8044, 0, 0.594,
        0.8923, 0, 0.4513,
        -0.7074, -0.676, 0.206,
        -0.7074, -0.6764, 0.2049,
        -0.7071, -0.6761, 0.207,
        -0.7072, -0.6762, 0.2063,
        -0.7071, -0.6763, 0.2063,
        -0.7071, -0.6763, 0.2064,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        -0.5226, -0.0264, -0.8522,
        -0.5523, 0.1085, -0.8265,
        -0.7079, -0.6752, 0.2073,
        -0.8596, -0.423, 0.2865,
        -0.7507, -0.6494, 0.1207,
        0, 0.5627, -0.8266,
        0.1889, 0.3576, -0.9145,
        -0.1956, 0.3091, -0.9307,
        -0.6427, 0.7609, 0.0891,
        -0.6426, 0.761, 0.0891,
        -0.6426, 0.7609, 0.0891,
        -0.5975, -0.5529, 0.5808,
        -0.5937, -0.5529, 0.5846,
        -0.2543, -0.4672, 0.8467,
        0.4495, -0.5248, -0.7228,
        0.2287, -0.3218, -0.9187,
        0.1865, -0.4304, -0.8831,
        0.8886, 0.4586, 0.0051,
        0.8914, -0.0159, 0.4529,
        -0.0878, 0.166, -0.9822,
        0.0888, 0.1777, -0.98,
        0.2262, 0.1737, -0.9584,
        -1, 0, 0,
        -0.9239, 0, -0.3826,
        -1, 0, 0,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0, -0.0001, -1,
        -0.2539, 0.9547, 0.1549,
        -0.1617, 0.9741, 0.1581,
        -0.4908, 0.8636, 0.1152,
        -0.5309, 0, -0.8474,
        -0.2978, 0, -0.9546,
        -0.2978, 0, -0.9546,
        0.1429, -0.4973, 0.8557,
        -0.274, -0.8586, 0.4331,
        0.2388, -0.8325, 0.4999,
        0.9142, 0.403, -0.0413,
        0.8843, 0.3155, -0.3441,
        0.7568, 0.4827, -0.4408,
        -0.9239, 0, -0.3826,
        -1, 0, 0,
        -1, 0, 0,
        0.8812, -0.4652, -0.084,
        0.9336, -0.0152, -0.3579,
        0.9332, -0.3395, -0.1178,
        0.9055, 0.0047, -0.4242,
        0.7182, -0.4891, -0.4948,
        0.7407, -0.1954, -0.6427,
        -0.6075, 0.7943, 0,
        -0.6075, 0.7943, 0,
        -0.6075, 0.7943, 0,
        -0.2938, 0.1987, -0.9349,
        -0.2799, 0.4065, -0.8697,
        -0.3856, 0.3846, -0.8386,
        0.7182, -0.4891, -0.4948,
        0.666, -0.7443, -0.0494,
        0.6587, -0.7026, -0.2692,
        0.8796, 0.4596, -0.1223,
        0.9826, 0.063, -0.1747,
        -0.107, 0.2306, -0.9671,
        -0.2938, 0.1987, -0.9349,
        -0.1772, 0.0477, -0.983,
        0.337, -0.6897, 0.6408,
        0.5259, -0.6043, 0.5985,
        0.357, -0.5832, 0.7296,
        -0.8696, 0.3548, -0.3434,
        -0.7266, 0.3399, -0.597,
        -0.7883, 0.3502, -0.5059,
        0.898, 0.2088, 0.3872,
        0.5053, -0.0479, 0.8616,
        0.6719, 0.1899, 0.7158,
        0.666, -0.7443, -0.0494,
        0.2754, -0.9611, 0.0202,
        -0.4349, 0.7682, 0.4699,
        -0.159, 0.4835, 0.8607,
        -0.9161, 0.1713, 0.3625,
        -0.9806, -0.0586, 0.1871,
        -0.9539, 0.0918, 0.2856,
        0.5755, 0.3081, -0.7575,
        0.1178, 0.3068, -0.9444,
        0.6763, 0.3937, -0.6226,
        -0.7869, -0.1096, 0.6073,
        -0.7005, -0.4241, 0.5739,
        0.3327, 0.8739, 0.3545,
        0.7584, 0.6044, 0.2438,
        0.7958, 0.6024, -0.0614,
        0.0705, -0.4926, 0.8674,
        0.4662, -0.4578, 0.757,
        0.1626, -0.3823, 0.9096,
        -0.5456, -0.4759, -0.6897,
        -0.5585, -0.3419, -0.7557,
        -0.4064, -0.1933, -0.893,
        -0.8923, 0, 0.4513,
        -0.9873, 0, 0.1589,
        -0.8044, 0, 0.594,
        -0.3594, 0.9247, -0.1255,
        -0.4055, 0.8794, -0.2494,
        -0.6981, 0.7113, -0.0816,
        0.8268, 0.1708, -0.5359,
        -0.2248, -0.24, 0.9444,
        -0.4343, -0.2385, 0.8686,
        -0.6233, -0.2881, 0.727,
        -0.5091, 0, -0.8607,
        0, 0, -1,
        -0.5494, 0, -0.8355,
        -0.8561, 0.0564, 0.5136,
        -0.9637, -0.1674, 0.208,
        0.3887, 0.3378, 0.8572,
        0.2337, 0.3202, 0.918,
        0.4348, 0.3315, 0.8372,
        -0.3385, 0.2599, 0.9043,
        -0.0976, 0.341, 0.935,
        -0.3383, 0.2599, 0.9044,
        0.0478, 0, -0.9988,
        0.5494, 0, -0.8355,
        0.593, 0, -0.8052,
        1, 0, 0,
        1, 0, 0,
        0, 0.3277, 0.9448,
        -0.1187, 0.0986, 0.988,
        -0.0903, 0.2387, 0.9669,
        0.6413, 0, -0.7673,
        0.7584, 0, -0.6518,
        0.5494, 0, -0.8355,
        0, -0.3419, 0.9397,
        0.0003, -0.3418, 0.9398,
        0, -0.3419, 0.9397,
        0.5397, 0.6196, 0.5698,
        -0.0479, 0.1668, 0.9848,
        -0.0463, 0.1668, 0.9849,
        -0.0476, 0.1671, 0.9848,
        -0.3963, 0.1996, 0.8961,
        -0.2594, 0.151, 0.9539,
        -0.1288, 0.0826, 0.9882,
        0.3096, 0.5589, 0.7692,
        0.1694, 0.4461, 0.8788,
        0.1693, 0.4462, 0.8787,
        0.7071, 0.6761, -0.2068,
        0.7135, 0.6652, -0.2199,
        0.707, 0.6766, -0.2059,
        0.7072, -0.6761, 0.2067,
        0.7072, -0.6761, 0.2068,
        0.7072, -0.6762, 0.2063,
        0.5226, 0.1196, 0.8441,
        0.7671, 0.076, 0.6369,
        -0.9239, 0, 0.3826,
        -0.854, 0.1643, -0.4936,
        -0.9327, 0.2456, -0.2639,
        -0.8951, 0.2144, -0.3909,
        -0.7956, -0.5925, -0.126,
        -0.6094, -0.7755, -0.1648,
        -0.6095, -0.7754, -0.1649,
        1, 0, 0,
        0.9239, 0, 0.3825,
        1, 0, 0,
        -0.7076, 0.675, -0.2088,
        -0.7079, 0.6746, -0.209,
        -0.7074, 0.6757, -0.2071,
        -0.9647, -0.1861, -0.1865,
        -0.9777, -0.2098, 0.0016,
        0.4445, 0.7769, -0.4458,
        0.444, 0.7769, -0.4463,
        0.4446, 0.7769, -0.4458,
        -0.0367, 0.2571, 0.9657,
        0.0367, 0.2571, 0.9657,
        0, 0.3103, 0.9506,
        0.5192, 0.7362, 0.434,
        0.1589, 0.4835, 0.8608,
        0.4448, 0.6057, 0.6597,
        0.5192, 0.7362, 0.434,
        0.7956, 0.5925, 0.126,
        0.6095, 0.7754, 0.1649,
        0.0186, 0.5014, 0.865,
        0.4448, 0.6057, 0.6597,
        0.1589, 0.4835, 0.8608,
        0.9165, -0.199, -0.3469,
        0.8383, 0.0782, -0.5395,
        0.8159, 0.0415, -0.5767,
        0.1429, -0.4973, 0.8557,
        0.6874, -0.5828, 0.4333,
        0.5333, -0.2715, 0.8011,
        -0.8953, -0.3886, -0.2176,
        -0.7863, -0.6103, -0.0959,
        -0.7033, -0.5039, -0.5014,
        -0.7071, 0.6763, -0.2063,
        -0.7071, 0.6766, -0.2052,
        -0.7125, 0.6806, -0.1704,
        -0.4444, -0.5276, -0.724,
        -0.4435, -0.5273, -0.7248,
        -0.4446, -0.5277, -0.7237,
        -0.7071, 0, -0.7071,
        -0.7071, 0, -0.7071,
        0.1926, 0.0442, -0.9803,
        0.1889, 0.3576, -0.9145,
        0.2791, 0.1688, -0.9453,
        -0.3825, 0, 0.9239,
        -0.7071, 0, 0.7071,
        -0.7071, 0, 0.7071,
        0.7671, 0.076, 0.6369,
        -0.9239, 0, 0.3826,
        -0.9239, 0, 0.3826,
        0.5605, 0.0278, -0.8277,
        0.6784, 0.2009, -0.7067,
        0.4627, 0.2138, -0.8603,
        0.3826, 0, 0.9239,
        0, 0, 1,
        0.3826, 0, 0.9239,
        0.3222, -0.1128, 0.9399,
        0.2487, -0.1932, 0.9491,
        -0.7584, 0, -0.6518,
        -0.8923, 0, -0.4513,
        -0.5494, 0, -0.8355,
        0.8923, 0, -0.4513,
        0.9518, 0, -0.3065,
        0.7584, 0, -0.6518,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0.7044, 0.706, -0.0738,
        0.8886, 0.4586, 0.0051,
        0.6948, 0.6948, -0.1859,
        1, 0, 0,
        0.9951, 0, 0.0992,
        1, 0, 0,
        0.6955, 0.7153, 0.0678,
        0.6206, 0.7792, 0.087,
        0.6955, 0.7153, 0.0678,
        0.539, -0.2119, 0.8152,
        0.4464, -0.2174, 0.868,
        0.6733, -0.2525, 0.6949,
        0.075, 0.0257, 0.9968,
        -0.0496, 0.1664, 0.9848,
        0.1378, -0.4806, -0.866,
        0.1378, -0.4807, -0.866,
        -0.1641, -0.4823, -0.8605,
        -0.0029, 0.577, 0.8167,
        -0.3205, 0.3721, 0.8711,
        0.1514, 0.5585, 0.8155,
        -0.6409, 0.2624, -0.7213,
        -0.4074, 0.5305, -0.7434,
        0, 0.9782, 0.2077,
        -0.0002, 0.9781, 0.208,
        -0.2032, -0.0457, -0.9781,
        -0.2749, 0.0979, -0.9565,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        -0.7508, 0.0958, 0.6536,
        -0.6402, 0.1513, 0.7532,
        -0.7508, 0.0958, 0.6536,
        -0.7587, 0.4821, 0.438,
        -0.5003, 0, 0.8658,
        -0.4373, 0.4858, 0.7568,
        0.339, -0.0685, 0.9383,
        0.3074, -0.0699, 0.949,
        0.4227, 0.0205, 0.906,
        0.3541, -0.7851, 0.5082,
        0.2212, -0.9137, 0.341,
        0.1333, -0.8943, 0.4272,
        0.9239, 0, -0.3826,
        1, 0, 0,
        0.9239, 0, -0.3826,
        -0.1213, -0.044, 0.9916,
        -0.187, -0.1278, 0.974,
        -0.2671, 0.1119, 0.9572,
        -0.6011, 0.0165, -0.799,
        -0.2188, 0.2432, -0.9449,
        -0.5302, 0.3172, -0.7863,
        0.0999, 0.7638, 0.6377,
        0.1514, 0.5585, 0.8155,
        0.77, 0.3843, 0.5093,
        0.9122, 0.3432, 0.2238,
        0.8423, 0.3467, 0.4126,
        -0.7071, 0, -0.7071,
        -0.9239, 0, -0.3826,
        -0.9239, 0, -0.3826,
        -0.9239, 0, -0.3826,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        -0.5277, 0.6741, 0.5168,
        -0.2069, 0.6811, 0.7024,
        -0.1711, 0.7382, 0.6525,
        -0.3826, 0, 0.9239,
        0, 0, 1,
        -0.2286, 0.4696, 0.8528,
        -0.26, 0, 0.9656,
        -0.8702, -0.4926, 0.0001,
        -0.9642, -0.0554, -0.2593,
        -0.8079, -0.5481, -0.2163,
        0.1944, -0.0153, 0.9808,
        0, -0.1765, -0.9843,
        0.1865, -0.4304, -0.8831,
        -0.3196, -0.6239, -0.7131,
        -0.1958, -0.4668, -0.8624,
        0.141, 0.9861, 0.0884,
        0.9333, 0.3566, 0.0411,
        0.9359, 0.3522, -0.0043,
        0.9281, 0.3554, 0.1104,
        -0.7827, -0.2336, -0.5769,
        -0.7507, -0.4099, -0.5181,
        0.2439, -0.2534, 0.9361,
        0.6253, -0.0248, 0.78,
        0.8704, -0.1018, 0.4817,
        -0.8053, -0.5071, -0.3072,
        -0.8507, -0.3957, -0.3459,
        -0.9354, -0.2306, -0.268,
        0.5494, 0, -0.8355,
        0.8923, 0, -0.4513,
        0.8923, 0, -0.4513,
        0.666, -0.7443, -0.0494,
        -0.1956, 0, 0.9807,
        -0.1956, 0, 0.9807,
        -0.3826, 0, 0.9239,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0, -0.0001, -1,
        -0.5923, 0.6374, -0.4928,
        -0.6981, 0.7113, -0.0816,
        -0.5551, 0, 0.8318,
        -0.3826, 0, 0.9239,
        -0.3826, 0, 0.9239,
        0.9802, 0.1981, 0,
        0.9802, 0.1981, 0,
        0.9802, 0.1981, 0,
        -0.9776, -0.2039, -0.0511,
        -0.7956, -0.5925, -0.126,
        -0.9776, -0.206, -0.0438,
        0.6735, 0.6044, 0.4256,
        0.6735, 0.6044, 0.4256,
        0.6735, 0.6044, 0.4256,
        0.7071, 0, -0.7071,
        -0.4042, -0.7058, -0.5817,
        0, -0.9723, -0.2336,
        0.9356, 0.1602, 0.3146,
        0.9175, 0.0992, 0.3851,
        0.8205, 0.1746, 0.5442,
        -0.7587, -0.4821, 0.438,
        -0.4373, -0.4858, 0.7568,
        -0.5672, 0.5989, -0.5652,
        -0.4654, 0.458, -0.7573,
        -0.4654, 0.458, -0.7574,
        -0.6692, 0.3454, 0.6578,
        -0.5178, 0.3443, 0.7831,
        -0.6647, 0.3436, 0.6634,
        -0.7071, 0, -0.7071,
        -0.7071, 0, -0.7071,
        -0.9239, 0, 0.3826,
        -0.9239, 0, 0.3826,
        0.8668, 0.4202, 0.2683,
        0.8696, 0.4488, 0.2058,
        0.5397, 0.6196, 0.5698,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0.719, 0.2578, 0.6454,
        0, -1, 0.0002,
        0, -1, 0,
        0, -1, 0,
        -0.9977, 0.0245, -0.0636,
        -0.9958, 0.0715, 0.0565,
        -0.9754, 0.2189, 0.0247,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        -0.8088, 0.5033, 0.3041,
        -0.8211, 0.5594, 0.1127,
        -0.7891, 0.5576, 0.2578,
        -0.5618, -0.4603, -0.6873,
        -0.4244, -0.6462, -0.6342,
        -0.5557, 0, -0.8313,
        -0.7071, 0, -0.7071,
        -0.5557, 0, -0.8313,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0.3826, 0, 0.9239,
        0.1956, 0, 0.9807,
        0.1956, 0, 0.9807,
        0.9239, 0, 0.3825,
        0.5698, -0.3715, 0.7329,
        0.6612, -0.5285, 0.5324,
        0.6075, 0.2533, -0.7529,
        0.7321, 0.1995, -0.6513,
        0.7804, 0.1763, -0.5999,
        -0.1934, 0.9642, 0.1813,
        -0.4449, 0.8511, 0.2786,
        -0.3077, 0.8209, 0.4811,
        -0.9042, -0.4266, 0.0195,
        -0.9671, -0.2338, 0.1003,
        -0.9806, -0.0586, 0.1871,
        -0.7071, 0, 0.7071,
        -0.8314, 0.0013, 0.5556,
        -0.8313, 0.0003, 0.5557,
        0, 0.4472, 0.8944,
        0.1765, 0.2754, 0.945,
        0, 0.3151, 0.9491,
        -0.0805, 0.6438, 0.7609,
        0.221, 0.6218, 0.7513,
        0.5397, 0.6196, 0.5698,
        0.3826, 0, 0.9239,
        0.3826, 0, 0.9239,
        0, 0, 1,
        0.8505, 0.5258, -0.0077,
        0.9498, 0.3016, -0.0828,
        0.7783, 0.627, 0.0308,
        -0.2543, -0.4672, 0.8467,
        0.0705, -0.4926, 0.8674,
        -0.0395, -0.1431, 0.9889,
        0.702, 0.5546, 0.4466,
        0.5694, 0.7178, 0.4006,
        0.5696, 0.7178, 0.4004,
        -0.9392, 0.3132, 0.1408,
        -0.9486, 0.315, 0.029,
        -0.8484, 0.4633, 0.2559,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0.9239, 0, 0.3826,
        0.9951, 0, 0.0992,
        -0.3587, -0.7295, 0.5824,
        -0.2286, -0.4696, 0.8528,
        -0.4373, -0.4858, 0.7568,
        -0.9239, 0, 0.3827,
        -0.8318, 0, 0.5551,
        -0.9239, 0, 0.3826,
        -0.966, 0.1786, -0.1866,
        -0.8213, 0.1786, -0.5418,
        -0.9817, 0.1563, -0.1082,
        -0.3068, -0.5171, 0.799,
        0.1429, -0.4973, 0.8557,
        -0.1982, -0.2706, 0.942,
        0.6075, 0.7943, 0,
        0.6075, 0.7943, 0,
        0.6075, 0.7943, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        -0.6094, -0.7381, -0.2894,
        -0.6692, -0.7392, 0.0761,
        -0.8702, -0.4926, 0.0001,
        -0.7587, 0.4821, 0.438,
        -0.5408, 0.8291, 0.1415,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0.2978, 0, -0.9546,
        -0.7584, 0, -0.6518,
        -0.0002, 0.4472, 0.8944,
        0, 0.4473, 0.8944,
        -0.0002, 0.4472, 0.8944,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0.9239, 0, -0.3825,
        1, 0, 0,
        0.9239, 0, -0.3825,
        0.5962, -0.5321, -0.6012,
        0.7228, -0.3226, -0.6111,
        0.6094, -0.5348, -0.5853,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -0.8211, 0.5594, 0.1127,
        -0.8505, 0.5258, -0.0077,
        -0.7891, 0.5576, 0.2578,
        0.3825, 0, -0.9239,
        0.3825, 0, -0.9239,
        0.7434, 0.4937, 0.4512,
        0.7614, 0.3816, 0.524,
        -0.9239, 0, 0.3826,
        -0.9239, 0, 0.3826,
        0.1495, 0.3998, 0.9043,
        -0.0333, 0.3586, 0.9329,
        0.1765, 0.2754, 0.945,
        0, 0, 1,
        0, 0.3151, 0.9491,
        -0.5597, 0.0075, 0.8286,
        -0.6065, -0.1018, 0.7885,
        -0.5263, 0.0359, 0.8495,
        0, 0, 1,
        0.7071, 0, 0.7071,
        -0.2286, -0.4696, 0.8528,
        -0.3826, 0, 0.9239,
        -0.7071, 0, 0.7071,
        0.6846, -0.2501, 0.6846,
        -0.7092, -0.2844, 0.6451,
        -0.7695, -0.1797, 0.6128,
        -0.7553, 0.0141, 0.6552,
        -0.4449, 0.8511, 0.2786,
        -0.7587, 0.4821, 0.438,
        -0.4359, -0.1874, 0.8802,
        -0.3078, -0.07, 0.9489,
        -0.2708, 0.0101, 0.9626,
        -0.1694, 0.4461, 0.8788,
        -0.1694, 0.4462, 0.8787,
        -0.274, -0.8586, 0.4331,
        -0.8656, 0.5006, -0.0096,
        -1, 0, 0,
        -0.3825, 0, -0.9239,
        -0.3825, 0, -0.9239,
        -0.0584, 0.2905, 0.9551,
        -0.0275, 0.4621, 0.8863,
        -0.364, 0.0712, 0.9287,
        -0.1875, -0.0169, 0.9821,
        -0.0472, -0.1789, 0.9827,
        -0.013, -0.1947, 0.9808,
        -0.0986, 0.1564, 0.9827,
        0.2929, -0.7037, -0.6472,
        0.1968, -0.687, -0.6995,
        0.3767, -0.7035, -0.6026,
        0.4619, 0.1706, -0.8703,
        0.4919, -0.177, -0.8524,
        0.4619, 0.1706, -0.8703,
        0.4919, -0.177, -0.8524,
        0.1485, 0.9389, 0.3106,
        0.0997, 0.9667, 0.2356,
        -0.0013, 0.941, 0.3383,
        0.0999, 0.7638, 0.6377,
        0.0229, 0.9045, 0.4257,
        0.1433, 0.8677, 0.476,
        0.0229, 0.9045, 0.4257,
        0.2377, 0.8875, 0.3947,
        -0.2441, -0.6567, 0.7136,
        -0.0821, -0.5861, 0.806,
        -0.2441, -0.6567, 0.7136,
        0.1487, -0.7225, 0.6751,
        0.0788, -0.6135, 0.7857,
        -0.0821, -0.5861, 0.806,
        0.1487, -0.7225, 0.6751,
        0.357, -0.5832, 0.7296,
        -0.3847, 0.2977, 0.8737,
        -0.0983, 0.4484, 0.8884,
        0.2337, 0.3202, 0.918,
        0.0078, 0.311, 0.9503,
        -0.1889, -0.5651, -0.803,
        -0.617, -0.3709, -0.6941,
        -0.1641, -0.4823, -0.8605,
        -0.1889, -0.5651, -0.803,
        -0.2528, -0.8828, -0.3958,
        -0.5275, -0.6804, -0.5087,
        -0.8923, 0, 0.4513,
        -0.8044, 0, 0.594,
        0.9998, -0.0179, 0,
        -0.6409, 0.2624, -0.7213,
        -0.6409, 0.2624, -0.7213,
        -0.512, -0.7806, 0.3584,
        -0.274, -0.8586, 0.4331,
        -0.274, -0.8586, 0.4331,
        -0.5292, -0.6383, 0.5589,
        -0.5296, -0.6381, 0.5589,
        -0.2466, -0.859, -0.4486,
        0.3095, 0.5589, 0.7693,
        0.3096, 0.5589, 0.7692,
        -0.6981, 0.7113, -0.0816,
        -0.7742, 0.3876, 0.5004,
        -0.6145, 0.6652, 0.4241,
        0.7071, 0, 0.7071,
        -0.6342, 0.2181, -0.7417,
        -0.605, 0.224, -0.7641,
        -0.8791, 0.1198, -0.4613,
        -0.9216, 0.2173, -0.3215,
        -0.6342, 0.2181, -0.7417,
        0.9808, 0, -0.1948,
        0.9808, 0, -0.1948,
        0.9808, 0, -0.1948,
        0.5557, 0, -0.8313,
        0.5557, 0, -0.8313,
        0.5557, 0, -0.8313,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        -0.041, -0.9791, -0.1993,
        0.0009, -0.9781, -0.208,
        -0.0333, -0.9741, -0.2237,
        0.0164, -0.9693, -0.2453,
        0, -0.9662, -0.2576,
        0.0333, -0.9741, -0.2237,
        0.0287, -0.9727, -0.2301,
        -0.0009, -0.9781, -0.208,
        0.041, -0.9791, -0.1993,
        0, -0.9781, -0.2079,
        0.0074, -0.9748, -0.223,
        0.0002, 0.4472, 0.8944,
        0.4273, 0, 0.9041,
        -0.4469, 0.3645, 0.8169,
        -0.4292, 0.3547, 0.8306,
        -0.3993, 0.2872, 0.8706,
        0.0836, 0.1215, 0.989,
        0.0836, 0.1215, 0.989,
        0.3074, -0.0699, 0.949,
        0.339, -0.0685, 0.9383,
        -0.6702, 0.194, 0.7163,
        -0.6702, 0.194, 0.7163,
        -0.5467, 0.207, 0.8113,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, -0.0001,
        0, 1, 0,
        0, 1, -0.0001,
        0.3826, 0, 0.9239,
        0.8923, 0, -0.4513,
        -0.1794, -0.98, -0.0855,
        -0.274, -0.8586, 0.4331,
        -0.9803, 0.1977, 0,
        -0.9518, 0, -0.3065,
        -0.9873, 0, 0.1589,
        -0.3825, 0, -0.9239,
        0, 0, -1,
        -0.3099, 0.5588, 0.7692,
        0.7073, 0.6758, -0.2072,
        0.7073, 0.6758, -0.2072,
        0.7077, 0.6753, -0.2074,
        0.7077, 0.6753, -0.2074,
        -0.2476, -0.0571, -0.9672,
        -0.2481, -0.0572, -0.967,
        -0.2476, -0.0571, -0.9672,
        -0.2476, -0.0571, -0.9672,
        -0.2476, -0.0571, -0.9672,
        0.2287, -0.3218, -0.9187,
        0.253, 0.955, 0.1549,
        -0.0005, 0.9871, 0.16,
        0.2527, 0.9551, 0.1544,
        0.2535, 0.9548, 0.1549,
        0.2535, 0.9548, 0.1549,
        0.6206, 0.7792, 0.087,
        0.4822, 0.8682, 0.1169,
        0.2539, 0.9547, 0.155,
        0.2538, 0.9547, 0.1549,
        0.2538, 0.9547, 0.1549,
        0.2535, 0.9548, 0.1549,
        0.9239, 0, 0.3826,
        -0.755, -0.0548, 0.6534,
        -0.7077, 0.1573, 0.6888,
        -0.2069, 0.6811, 0.7024,
        0.7671, 0.076, 0.6369,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        -0.9685, 0.2427, 0.0545,
        0.8111, 0.0003, 0.5849,
        0.4218, 0.0069, 0.9066,
        -0.3826, 0, -0.9239,
        0.7497, 0.6093, 0.2581,
        0.3825, 0, -0.9239,
        -0.5692, 0.718, 0.4004,
        -0.7516, 0.5814, 0.3114,
        -0.5692, 0.718, 0.4004,
        -0.5692, 0.7179, 0.4009,
        -0.7516, 0.5814, 0.3114,
        -0.6609, 0.7359, 0.1468,
        -0.7516, 0.5814, 0.3114,
        -0.7516, 0.5814, 0.3114,
        0.1865, -0.4304, -0.8831,
        -0.4568, 0.7986, -0.3917,
        -0.4568, 0.7986, -0.3917,
        -0.7467, 0.6651, -0.0043,
        0.0016, -0.2931, -0.9561,
        -0.9239, 0, 0.3826,
        -0.9239, 0, 0.3826,
        -1, 0, 0,
        0.2262, 0.1737, -0.9584,
        0.2262, 0.1737, -0.9584,
        0.2011, 0.1784, -0.9632,
        0.4518, 0.1937, -0.8708,
        0.5822, 0.1785, -0.7931,
        0.2714, -0.9467, 0.1736,
        0.2714, -0.9467, 0.1736,
        0.2714, -0.9467, 0.1736,
        0.2713, -0.9467, 0.1733,
        0.2713, -0.9467, 0.1733,
        0.2711, -0.9467, 0.1736,
        0.2711, -0.9467, 0.1736,
        0.2713, -0.9467, 0.1733,
        0.2711, -0.9467, 0.1736,
        0.2711, -0.9467, 0.1736,
        0.2712, -0.9467, 0.1738,
        0.2711, -0.9467, 0.1736,
        0.2714, -0.9466, 0.1737,
        0.2711, -0.9467, 0.1736,
        0.2712, -0.9467, 0.1737,
        0.2714, -0.9466, 0.1737,
        0.2714, -0.9467, 0.1733,
        0.2714, -0.9467, 0.1733,
        0.2715, -0.9467, 0.1733,
        0.2712, -0.9467, 0.1733,
        0.2713, -0.9467, 0.1733,
        0.2712, -0.9467, 0.1733,
        0.2713, -0.9467, 0.1734,
        0.2712, -0.9467, 0.1734,
        0.2715, -0.9467, 0.1735,
        0.2712, -0.9467, 0.1734,
        0.2712, -0.9467, 0.1734,
        0.2712, -0.9467, 0.1734,
        0.2712, -0.9467, 0.1733,
        0.2712, -0.9467, 0.1734,
        0.2712, -0.9467, 0.1733,
        0.2712, -0.9467, 0.1733,
        0.2713, -0.9467, 0.1733,
        0.2711, -0.9467, 0.1736,
        0.2711, -0.9467, 0.1736,
        0.2711, -0.9467, 0.1736,
        0.9965, -0.0831, 0.0077,
        0.9454, -0.2982, -0.1314,
        0.9946, -0.0921, 0.0482,
        0.9946, -0.0921, 0.0482,
        0.935, 0.2512, -0.2502,
        0.8886, 0.4586, 0.0051,
        0.9946, -0.0921, 0.0482,
        0.9954, -0.0812, 0.0505,
        0.9946, -0.0921, 0.0482,
        1, 0, 0,
        1, 0, 0,
        0.9965, -0.0831, 0.0077,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        0.464, 0.3873, -0.7967,
        0.3956, 0.4234, -0.815,
        -0.1922, 0.4214, -0.8862,
        0.0314, 0.4345, -0.9001,
        -0.107, 0.2306, -0.9671,
        1, 0, 0,
        1, 0, 0,
        0.8044, 0, 0.594,
        0.9873, 0, 0.1589,
        1, 0, 0,
        0.8923, 0, 0.4513,
        0.8044, 0, 0.594,
        0.8923, 0, 0.4513,
        0.9239, 0, -0.3825,
        0.9239, 0, -0.3825,
        -0.966, 0.1786, -0.1866,
        -0.9817, 0.1563, -0.1082,
        -0.9683, 0.1655, 0.1871,
        -0.9817, 0.1563, -0.1082,
        -0.8647, 0.1515, 0.4788,
        0.3955, -0.0173, 0.9183,
        0.1948, -0.0139, 0.9807,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0.5397, 0.6196, 0.5698,
        0.6897, 0.362, 0.6271,
        0.1981, 0.9626, -0.1847,
        0.3403, 0.9377, -0.0692,
        0.3403, 0.9377, -0.0692,
        0.4928, 0.8377, -0.2352,
        0.7034, -0.5568, 0.4417,
        0.7034, -0.5568, 0.4417,
        0.5707, -0.5552, 0.6049,
        0.5707, -0.5552, 0.6049,
        0.5259, -0.6043, 0.5985,
        0.6484, -0.5929, 0.4775,
        0.8562, -0.516, 0.026,
        0.7246, -0.6673, 0.1723,
        -0.2549, -0.8307, -0.4949,
        -0.2026, -0.8412, -0.5012,
        -0.2026, -0.8412, -0.5012,
        0.9818, 0.1574, 0.106,
        0.979, 0.177, 0.1011,
        0.9818, 0.1574, 0.106,
        0.9896, 0.1341, -0.0521,
        0.9254, -0.0172, -0.3785,
        0.8313, 0, 0.5557,
        0.8313, 0, 0.5557,
        0.8313, 0, 0.5557,
        0.8313, 0, 0.5557,
        0.8313, 0, 0.5557,
        0.8313, 0, 0.5557,
        -0.6365, 0.141, 0.7582,
        -0.614, 0.2064, 0.7618,
        -0.6877, -0.2379, 0.6858,
        -0.7614, 0.1962, 0.6178,
        -0.6365, 0.141, 0.7582,
        0.9808, 0, 0.1948,
        -0.8474, -0.5303, -0.0264,
        -0.9221, -0.159, -0.3527,
        -0.7844, -0.5516, -0.2836,
        -0.7009, -0.6006, -0.3847,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        -0.4074, 0.0711, -0.9104,
        -0.6409, 0.2624, -0.7213,
        0.9497, -0.1781, -0.2574,
        0.9821, 0.0846, -0.1684,
        -0.6556, -0.3867, -0.6485,
        -0.5838, -0.4736, -0.6594,
        0.7512, 0.2729, 0.601,
        0.7466, 0.2748, 0.6058,
        0.6553, 0.2761, 0.7031,
        0.6306, 0.2506, 0.7345,
        0.6719, 0.1899, 0.7158,
        0.6719, 0.1899, 0.7158,
        0.7867, 0.2427, 0.5676,
        -0.6901, -0.1814, 0.7006,
        -0.7362, -0.1579, 0.6581,
        0.9518, 0, -0.3065,
        0.8923, 0, -0.4513,
        -0.212, -0.9698, 0.12,
        -0.2222, -0.9688, -0.1091,
        -0.2222, -0.9688, -0.1091,
        0.1403, -0.8911, -0.4315,
        0.2937, -0.9333, -0.2064,
        0.2551, -0.9468, -0.196,
        -0.1466, -0.9708, 0.1899,
        -0.212, -0.9698, 0.12,
        0.2427, -0.9604, -0.1363,
        -0.1017, -0.894, -0.4364,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0.1582, 0.9748, -0.1574,
        0, -0.9888, -0.1489,
        0.292, -0.188, -0.9377,
        0.0732, -0.0143, -0.9972,
        0.1461, -0.166, -0.9752,
        -0.0072, -0.2041, -0.9789,
        -0.2163, -0.2208, -0.951,
        0.292, -0.188, -0.9377,
        0.2549, -0.8307, -0.4949,
        0.2548, -0.8307, -0.4949,
        0.2548, -0.8306, -0.4951,
        -0.2026, -0.8412, -0.5012,
        0.2549, -0.8307, -0.4949,
        0.7072, -0.6762, 0.2062,
        0.7074, -0.6757, 0.2071,
        0.7076, -0.6757, 0.2065,
        0.7074, -0.6757, 0.2071,
        0.708, -0.6753, 0.2065,
        0.7072, -0.6762, 0.2062,
        0.7069, -0.6764, 0.2068,
        -0.6481, 0.7347, -0.2005,
        -0.6508, 0.7428, -0.1571,
        -0.5672, 0.5989, -0.5652,
        -0.1529, -0.7661, -0.6242,
        -0.1794, -0.98, -0.0855,
        -0.1794, -0.98, -0.0855,
        -0.834, 0.5396, 0.1147,
        -0.4451, -0.796, 0.41,
        -0.4451, -0.796, 0.41,
        -0.4989, -0.805, 0.3211,
        -0.1332, -0.8942, 0.4274,
        -0.2211, -0.9137, 0.3408,
        -0.1146, -0.8144, 0.5689,
        -0.2211, -0.9137, 0.3408,
        0.4434, -0.5272, -0.7248,
        -0.9712, 0.0215, -0.2371,
        -0.9818, 0.0636, -0.179,
        -0.8505, 0.5258, -0.0077,
        -0.8211, 0.5594, 0.1127,
        -0.8088, 0.5033, 0.3041,
        0.3859, 0.9015, -0.1957,
        0.7849, 0.5124, -0.3482,
        0.7849, 0.5124, -0.3482,
        0.8292, 0.3458, -0.439,
        -0.3825, 0, 0.9239,
        0.7956, -0.5925, -0.1259,
        -0.8596, -0.423, 0.2865,
        -0.7079, -0.6752, 0.2073,
        -0.5762, -0.6684, 0.4703,
        -0.4906, -0.7956, 0.3554,
        -0.4475, -0.6315, 0.6332,
        0.9055, 0.0047, -0.4242,
        0.0552, 0.1643, 0.9848,
        0.3178, 0.1767, 0.9315,
        0.148, 0.1404, 0.9789,
        0.148, 0.1404, 0.9789,
        0.8044, 0, 0.594,
        -0.707, -0.6761, 0.2073,
        -0.7074, -0.676, 0.206,
        -0.7074, -0.676, 0.206,
        -0.7074, -0.6764, 0.2048,
        -0.7071, -0.6762, 0.207,
        -0.7071, -0.6763, 0.2064,
        -0.7071, -0.6761, 0.2072,
        -0.7072, -0.6762, 0.2063,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        -0.9637, -0.1674, 0.208,
        -0.7507, -0.6494, 0.1207,
        -0.7079, -0.6752, 0.2073,
        -0.7507, -0.6494, 0.1207,
        0, 0.5627, -0.8266,
        0, 0.5627, -0.8266,
        0.1889, 0.3576, -0.9145,
        -0.6426, 0.7609, 0.0891,
        -0.6508, 0.7428, -0.1571,
        -0.6481, 0.7347, -0.2005,
        -0.6846, -0.4303, 0.5883,
        -0.7092, -0.2844, 0.6451,
        -0.5975, -0.5529, 0.5808,
        -0.39, -0.6108, 0.689,
        -0.2543, -0.4672, 0.8467,
        -0.6846, -0.4303, 0.5883,
        -0.2543, -0.4672, 0.8467,
        0.5443, -0.323, -0.7742,
        0.1865, -0.4304, -0.8831,
        0.1865, -0.4304, -0.8831,
        0.4495, -0.5248, -0.7228,
        0.4919, -0.177, -0.8524,
        0.2287, -0.3218, -0.9187,
        0.2287, -0.3218, -0.9187,
        0.2933, -0.5325, -0.794,
        0.1865, -0.4304, -0.8831,
        -0.0878, 0.166, -0.9822,
        -0.2084, 0.1653, -0.964,
        -0.388, 0.1702, -0.9058,
        -0.4516, 0.1946, -0.8707,
        0.0002, 0.1785, -0.9839,
        0.0002, 0.1785, -0.9839,
        0.0888, 0.1777, -0.98,
        0.0888, 0.1777, -0.98,
        0.2262, 0.1737, -0.9584,
        -0.9239, 0, -0.3826,
        0, -0.0001, -1,
        0, -0.0001, -1,
        -0.2539, 0.9547, 0.1549,
        -0.7891, 0.5576, 0.2578,
        0, 0, -1,
        0.0478, 0, -0.9988,
        0, 0, -1,
        0, 0, -1,
        -0.3068, -0.5171, 0.799,
        -0.274, -0.8586, 0.4331,
        0.7958, 0.6024, -0.0614,
        0.9142, 0.403, -0.0413,
        0.7958, 0.6024, -0.0614,
        0.9142, 0.403, -0.0413,
        0.9142, 0.403, -0.0413,
        0.8935, 0.4479, -0.0324,
        0.7906, 0.3298, -0.5158,
        0.7928, 0.1876, -0.5799,
        0.9307, 0.0631, -0.3604,
        0.8812, -0.4652, -0.084,
        0.8562, -0.516, 0.026,
        0.7407, -0.1954, -0.6427,
        0.7191, 0.013, -0.6948,
        0.9055, 0.0047, -0.4242,
        0.9055, 0.0047, -0.4242,
        0.7182, -0.4891, -0.4948,
        -0.6075, 0.7943, 0,
        -0.6075, 0.7943, 0,
        -0.6272, 0.3436, -0.6989,
        -0.4168, 0.1176, -0.9013,
        -0.3856, 0.3846, -0.8386,
        -0.4168, 0.1176, -0.9013,
        -0.2938, 0.1987, -0.9349,
        -0.3856, 0.3846, -0.8386,
        -0.2938, 0.1987, -0.9349,
        -0.1922, 0.4214, -0.8862,
        -0.2938, 0.1987, -0.9349,
        -0.1922, 0.4214, -0.8862,
        0.5077, -0.7952, -0.3315,
        0.7182, -0.4891, -0.4948,
        0.9826, 0.063, -0.1747,
        0.6949, -0.6946, -0.1858,
        0.6587, -0.7026, -0.2692,
        0.6949, -0.6946, -0.1858,
        0.6463, -0.701, -0.3014,
        0.6463, -0.701, -0.3014,
        0.67, -0.5942, -0.4449,
        0.5985, -0.6961, -0.3964,
        0.67, -0.5942, -0.4449,
        0.6059, -0.672, -0.4258,
        0.5985, -0.6961, -0.3964,
        0.5985, -0.6961, -0.3964,
        -0.1772, 0.0477, -0.983,
        0.1944, 0.0347, -0.9803,
        0.5259, -0.6043, 0.5985,
        0.5707, -0.5552, 0.6049,
        0.357, -0.5832, 0.7296,
        0.5707, -0.5552, 0.6049,
        0.374, -0.4772, 0.7952,
        0.357, -0.5832, 0.7296,
        0.1711, -0.477, 0.8621,
        0.357, -0.5832, 0.7296,
        0.0788, -0.6135, 0.7857,
        0.357, -0.5832, 0.7296,
        0.357, -0.5832, 0.7296,
        0.1487, -0.7225, 0.6751,
        0.337, -0.6897, 0.6408,
        -0.5902, 0.3525, -0.7262,
        -0.4168, 0.1176, -0.9013,
        -0.7232, 0.3763, -0.5791,
        -0.6079, 0.29, -0.7392,
        -0.6475, 0.3016, -0.6998,
        -0.7266, 0.3399, -0.597,
        -0.7266, 0.3399, -0.597,
        -0.8844, 0.3336, -0.3263,
        -0.9021, 0.3453, -0.2588,
        0.0042, 0.1654, 0.9862,
        0.1338, 0.1698, 0.9763,
        0.4577, 0.2469, 0.8541,
        0.1338, 0.1698, 0.9763,
        0.6719, 0.1899, 0.7158,
        0.6719, 0.1899, 0.7158,
        0.6719, 0.1899, 0.7158,
        0.6874, -0.5828, 0.4333,
        -0.5751, 0.7705, 0.2748,
        -0.9762, 0.2167, -0.0118,
        -0.989, 0.1115, 0.0965,
        -0.989, 0.1115, 0.0965,
        -0.9539, 0.0918, 0.2856,
        -0.989, 0.1115, 0.0965,
        -0.8772, 0.1958, 0.4383,
        0.6639, 0.4461, -0.6002,
        0.1519, 0.6353, -0.7572,
        0.4194, 0.7266, -0.5443,
        0.1639, 0.8084, -0.5653,
        -0.552, -0.0174, 0.8336,
        -0.552, -0.0174, 0.8336,
        -0.6349, 0.001, 0.7725,
        -0.552, -0.0174, 0.8336,
        -0.6349, 0.001, 0.7725,
        -0.6943, 0.0238, 0.7193,
        -0.8561, 0.0564, 0.5136,
        0.4076, 0.9033, -0.1336,
        0.075, 0.0257, 0.9968,
        -0.0395, -0.1431, 0.9889,
        0.1626, -0.3823, 0.9096,
        0.1626, -0.3823, 0.9096,
        0.4654, -0.458, 0.7574,
        -0.8923, 0, 0.4513,
        -1, 0, 0,
        -0.3202, 0.8448, -0.4288,
        -0.5923, 0.6374, -0.4928,
        -0.3202, 0.8448, -0.4288,
        -0.3843, 0.9189, -0.0891,
        0.5822, 0.1785, -0.7931,
        -0.2898, -0.2401, 0.9265,
        -0.1268, -0.2409, 0.9622,
        -0.135, -0.2407, 0.9611,
        -0.135, -0.2407, 0.9611,
        -0.3971, -0.4899, 0.7761,
        -0.5454, -0.2378, 0.8037,
        0.0482, 0, -0.9988,
        -0.8561, 0.0564, 0.5136,
        -0.9768, 0.0684, 0.2029,
        0.0032, 0.3549, 0.9349,
        0.4348, 0.3315, 0.8372,
        0.2337, 0.3202, 0.918,
        0.4348, 0.3315, 0.8372,
        0.5881, 0.3791, 0.7144,
        -0.339, 0.2598, 0.9042,
        -0.5175, 0.2016, 0.8316,
        -0.3385, 0.2599, 0.9043,
        -0.5631, 0.1839, 0.8056,
        -0.3385, 0.2599, 0.9043,
        -0.3385, 0.2599, 0.9043,
        -0.5631, 0.1839, 0.8056,
        0.0478, 0, -0.9988,
        0, 0, -1,
        -0.233, 0.0521, 0.9711,
        -0.0836, 0.1216, 0.989,
        -0.0836, 0.1216, 0.989,
        0, 0.3622, 0.9321,
        0.7584, 0, -0.6518,
        -0.0002, -0.3418, 0.9397,
        -0.0002, -0.3419, 0.9397,
        -0.0002, -0.3418, 0.9398,
        -0.0002, -0.3417, 0.9398,
        0, -0.3417, 0.9398,
        0, -0.3419, 0.9397,
        0, -0.3419, 0.9397,
        -0.0002, -0.3417, 0.9398,
        -0.0002, -0.3418, 0.9397,
        -0.0001, -0.3418, 0.9398,
        0.0001, -0.3417, 0.9398,
        -0.0002, -0.3417, 0.9398,
        -0.0002, -0.3421, 0.9396,
        0, -0.3419, 0.9397,
        -0.0001, -0.342, 0.9397,
        0, -0.3419, 0.9397,
        -0.0005, -0.3425, 0.9395,
        -0.0004, -0.3424, 0.9395,
        -0.0004, -0.3425, 0.9395,
        -0.0004, -0.3424, 0.9395,
        -0.0002, -0.3421, 0.9396,
        -0.0004, -0.3424, 0.9395,
        -0.0004, -0.3424, 0.9395,
        -0.0002, -0.3421, 0.9396,
        -0.0002, -0.3418, 0.9397,
        0.0002, -0.3421, 0.9396,
        0, -0.3419, 0.9397,
        0.0002, -0.3421, 0.9396,
        0.0004, -0.3423, 0.9396,
        0.0001, -0.342, 0.9397,
        0, -0.3419, 0.9397,
        0.0002, -0.3421, 0.9396,
        0, -0.3416, 0.9398,
        -0.0002, -0.3418, 0.9397,
        -0.1412, -0.0086, 0.9899,
        0.075, 0.0257, 0.9968,
        0.075, 0.0257, 0.9968,
        0.075, 0.0257, 0.9968,
        -0.5405, 0.1701, 0.8239,
        0.0552, 0.1643, 0.9848,
        0.0552, 0.1643, 0.9848,
        0.148, 0.1404, 0.9789,
        0.148, 0.1404, 0.9789,
        -0.6702, 0.194, 0.7163,
        -0.3963, 0.1996, 0.8961,
        -0.3963, 0.1996, 0.8961,
        0.3096, 0.5589, 0.7692,
        0.3095, 0.5589, 0.7693,
        0.7071, 0.6751, -0.2102,
        0.7071, 0.6751, -0.2102,
        0.7069, 0.6762, -0.2074,
        0.7071, 0.6761, -0.2068,
        0.7074, 0.6758, -0.2069,
        0.7071, 0.676, -0.2073,
        0.7071, 0.6761, -0.2068,
        0.7078, -0.6759, 0.2054,
        0.7074, -0.6761, 0.206,
        -0.9239, 0, 0.3826,
        -0.7964, 0.1541, -0.5847,
        -0.7964, 0.1541, -0.5847,
        -0.7956, -0.5925, -0.1259,
        0.9239, 0, 0.3825,
        0.9239, 0, 0.3825,
        -0.707, 0.6764, -0.2065,
        -0.7079, 0.6746, -0.209,
        -0.7069, 0.6765, -0.2063,
        -0.7079, 0.6746, -0.209,
        -0.7071, 0.6764, -0.2062,
        -0.7071, 0.6763, -0.2064,
        -0.7074, 0.6757, -0.2071,
        -0.7074, 0.6757, -0.2071,
        -0.9768, 0.0684, 0.2029,
        0.4445, 0.7769, -0.4458,
        0.4439, 0.7769, -0.4465,
        0.444, 0.7769, -0.4463,
        0, 0.1494, 0.9887,
        0.4129, 0.3584, 0.8372,
        0.5031, 0.5042, 0.7018,
        0.5031, 0.5042, 0.7018,
        0.7497, 0.6093, 0.2581,
        0.7497, 0.6093, 0.2581,
        -0.159, 0.4835, 0.8607,
        0.0006, 0.6478, 0.7618,
        -0.159, 0.4835, 0.8607,
        -0.0275, 0.4621, 0.8863,
        -0.159, 0.4835, 0.8607,
        -0.0138, 0.537, 0.8434,
        -0.0275, 0.4621, 0.8863,
        -0.0138, 0.537, 0.8434,
        -0.159, 0.4835, 0.8607,
        0.4919, -0.177, -0.8524,
        0.4919, -0.177, -0.8524,
        0.8459, -0.3247, -0.4231,
        0.7032, 0.037, -0.71,
        0.7906, 0.3298, -0.5158,
        0.4619, 0.1706, -0.8703,
        0.7906, 0.3298, -0.5158,
        0.7906, 0.3298, -0.5158,
        0.2388, -0.8325, 0.4999,
        -0.8953, -0.3886, -0.2176,
        -0.9671, -0.2338, 0.1003,
        -0.7863, -0.6103, -0.0959,
        -0.6775, -0.6028, -0.4214,
        -0.7071, 0.6766, -0.2052,
        -0.7071, 0.6766, -0.2052,
        -0.7125, 0.6806, -0.1704,
        -0.7125, 0.6806, -0.1704,
        -0.7071, 0.6764, -0.2062,
        -0.7071, 0.6763, -0.2063,
        -0.7071, 0.6763, -0.2064,
        -0.7071, 0.6763, -0.2064,
        -0.4434, -0.5272, -0.7248,
        0.5714, 0.4397, -0.6929,
        0.2799, 0.2304, -0.932,
        0.1889, 0.3576, -0.9145,
        0.1889, 0.3576, -0.9145,
        0.5697, -0.1184, -0.8133,
        -0.3825, 0, 0.9239,
        -0.3825, 0, 0.9239,
        0.7671, 0.076, 0.6369,
        0.5333, -0.2715, 0.8011,
        0.5333, -0.2715, 0.8011,
        0.5333, -0.2715, 0.8011,
        0.7671, 0.076, 0.6369,
        0.5333, -0.2715, 0.8011,
        -0.7584, 0, -0.6518,
        -0.9518, 0, -0.3065,
        -0.8923, 0, -0.4513,
        0.7584, 0, -0.6518,
        0.7584, 0, -0.6518,
        0.8923, 0, -0.4513,
        0.9852, 0.1353, 0.105,
        0.6949, 0.6947, -0.1855,
        1, 0, 0,
        0.6206, 0.7792, 0.087,
        0.6206, 0.7792, 0.087,
        0.6955, 0.7153, 0.0679,
        0.6955, 0.7153, 0.0678,
        0.8505, 0.5258, -0.0077,
        0.8505, 0.5258, -0.0077,
        0.7783, 0.627, 0.0308,
        0.7783, 0.627, 0.0308,
        0.6955, 0.7153, 0.0678,
        0.7783, 0.627, 0.0308,
        0.2273, 0.1007, 0.9686,
        0.0919, 0.1716, 0.9808,
        0.0825, 0.1596, 0.9837,
        0.0919, 0.1716, 0.9808,
        0.0571, 0.308, 0.9496,
        0.0584, 0.2906, 0.955,
        0.0919, 0.1716, 0.9808,
        0.0584, 0.2906, 0.955,
        0.6379, 0.1583, 0.7537,
        0.542, 0.2109, 0.8135,
        0.2273, 0.1007, 0.9686,
        0.729, 0.0237, 0.684,
        0.7892, -0.0915, 0.6073,
        0.347, 0.0362, 0.9372,
        0.729, 0.0237, 0.684,
        0.0889, -0.056, 0.9944,
        0.1374, 0.0529, 0.9891,
        0.0912, -0.0217, 0.9956,
        0.1374, 0.0529, 0.9891,
        0.0889, -0.056, 0.9944,
        0.2803, -0.2233, 0.9336,
        0.0498, -0.2167, 0.9749,
        0.2803, -0.2233, 0.9336,
        0.2547, -0.2207, 0.9415,
        0.0889, -0.056, 0.9944,
        0.3971, -0.4899, 0.7761,
        0.5579, -0.4226, 0.7142,
        0.0498, -0.2167, 0.9749,
        0.0889, -0.056, 0.9944,
        0.2547, -0.2207, 0.9415,
        0.0498, -0.2167, 0.9749,
        0.7075, -0.1617, 0.688,
        0.1377, -0.4806, -0.866,
        -0.1529, -0.7661, -0.6242,
        0.1514, 0.5585, 0.8155,
        0.0999, 0.7638, 0.6377,
        -0.1119, 0.851, 0.5131,
        -0.6409, 0.2624, -0.7213,
        -0.0006, 0.9781, 0.208,
        0.0002, 0.9781, 0.208,
        0.0006, 0.9781, 0.208,
        -0.2749, 0.0979, -0.9565,
        0.1889, 0.3576, -0.9145,
        0.1889, 0.3576, -0.9145,
        -0.1956, 0.3091, -0.9307,
        0, -1, 0,
        0, -1, 0,
        -0.7587, 0.4821, 0.438,
        0.5698, -0.3715, 0.7329,
        0.4989, -0.805, 0.3211,
        0.4451, -0.796, 0.41,
        0.4451, -0.796, 0.41,
        0.3346, -0.7547, 0.5643,
        0.1147, -0.8144, 0.5687,
        1, 0, 0,
        0.1338, 0.1698, 0.9763,
        0.1338, 0.1698, 0.9763,
        0.0042, 0.1654, 0.9862,
        -0.1224, 0.1898, 0.9742,
        0.1338, 0.1698, 0.9763,
        -0.0666, 0.0761, 0.9949,
        -0.568, -0.1293, -0.8128,
        -0.2032, -0.0457, -0.9781,
        -0.7126, -0.0065, -0.7015,
        -0.2188, 0.2432, -0.9449,
        -0.2188, 0.2432, -0.9449,
        -0.679, 0.4566, -0.5749,
        0.3909, 0.5334, 0.7501,
        0.4588, 0.6007, 0.6547,
        0.1514, 0.5585, 0.8155,
        0.4996, 0.4657, 0.7304,
        0.4348, 0.3315, 0.8372,
        0.702, 0.5546, 0.4466,
        0.702, 0.5546, 0.4466,
        0.7221, 0.6097, 0.3268,
        0.702, 0.5546, 0.4466,
        0.9281, 0.3554, 0.1104,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        -0.0805, 0.6438, 0.7609,
        -0.1711, 0.7382, 0.6525,
        -0.2069, 0.6811, 0.7024,
        -0.5277, 0.6741, 0.5168,
        0.1944, -0.0153, 0.9808,
        0.4274, -0.0181, 0.9038,
        0.4218, 0.0069, 0.9066,
        0.4218, 0.0069, 0.9066,
        0, -0.1765, -0.9843,
        0.1865, -0.4304, -0.8831,
        -0.1635, -0.6338, -0.756,
        -0.3196, -0.6239, -0.7131,
        0.9383, 0.3459, -0.0017,
        0.9281, 0.3554, 0.1104,
        0.9281, 0.3554, 0.1104,
        -0.5456, -0.4759, -0.6897,
        0.7075, -0.1617, 0.688,
        0.7075, -0.1617, 0.688,
        0.5579, -0.4226, 0.7142,
        0.2439, -0.2534, 0.9361,
        0.5579, -0.4226, 0.7142,
        0.6789, -0.4566, 0.5749,
        0.2439, -0.2534, 0.9361,
        0.6902, 0.2791, 0.6675,
        0.6902, 0.2791, 0.6675,
        -0.4913, -0.7353, -0.4668,
        0.8923, 0, -0.4513,
        0.9002, -0.3875, -0.1987,
        -0.0814, 0, 0.9967,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, -0.0001, -1,
        -0.5551, 0, 0.8318,
        0.9802, 0.1981, 0,
        -0.9776, -0.2039, -0.0511,
        -0.7956, -0.5925, -0.1259,
        -0.2938, 0.1987, -0.9349,
        -0.2938, 0.1987, -0.9349,
        -0.4168, 0.1176, -0.9013,
        -0.4168, 0.1176, -0.9013,
        0.1854, -0.6944, -0.6952,
        0.8205, 0.1746, 0.5442,
        -0.7587, -0.4821, 0.438,
        -0.4654, 0.4579, -0.7574,
        -0.5672, 0.5989, -0.5652,
        -0.6692, 0.3454, 0.6578,
        -0.8154, 0.3568, 0.4559,
        -0.6692, 0.3454, 0.6578,
        -0.7516, 0.5814, 0.3114,
        -0.6692, 0.3454, 0.6578,
        0.5397, 0.6196, 0.5698,
        0.8668, 0.4202, 0.2683,
        0.8668, 0.4202, 0.2683,
        0.8668, 0.4202, 0.2683,
        0.8935, 0.4479, -0.0324,
        0.7584, 0.6044, 0.2438,
        0.5397, 0.6196, 0.5698,
        0.9142, 0.403, -0.0413,
        0.8668, 0.4202, 0.2683,
        0, 0, 1,
        0, 0, 1,
        0.8316, -0.1035, 0.5456,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, -0.0002,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        -0.9958, 0.0715, 0.0565,
        -0.9734, 0.0456, 0.2243,
        -0.9685, 0.2427, 0.0545,
        -0.9685, 0.2427, 0.0545,
        -0.9776, -0.2039, -0.0511,
        -0.9993, -0.0196, -0.0324,
        -0.9776, -0.2039, -0.0511,
        -0.9953, -0.0811, 0.0517,
        -0.9776, -0.2039, -0.0511,
        -0.9953, -0.0811, 0.0517,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        -0.7233, 0.3229, 0.6104,
        -0.7672, 0.3192, 0.5563,
        -0.3988, -0.6621, -0.6345,
        -0.6413, -0.3819, -0.6655,
        -0.3204, -0.3713, -0.8715,
        -0.3456, -0.71, -0.6135,
        -0.4244, -0.6462, -0.6342,
        -0.3456, -0.71, -0.6135,
        -0.7033, -0.5039, -0.5014,
        -0.5618, -0.4603, -0.6873,
        -0.5557, 0, -0.8313,
        -0.5557, 0, -0.8313,
        -0.5557, 0, -0.8313,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0.1956, 0, 0.9807,
        0.3826, 0, 0.9239,
        0.9239, 0, 0.3825,
        0.9239, 0, 0.3825,
        0.8713, 0.1939, -0.4508,
        0.8928, 0.3566, -0.2752,
        0.8258, 0.4019, -0.3956,
        0.9006, 0.3495, -0.2584,
        0.9239, -0.0179, -0.3821,
        0.9303, -0.0107, -0.3665,
        0.8372, -0.0067, -0.5468,
        0.9303, -0.0107, -0.3665,
        0.7255, 0.4174, -0.5472,
        0.6899, 0.3777, -0.6175,
        0.6776, 0.3724, -0.6341,
        0.6949, 0.3287, -0.6396,
        0.8164, 0.1544, -0.5565,
        0.8018, 0.1859, -0.5679,
        -0.5408, 0.8291, 0.1415,
        -0.9239, 0, 0.3826,
        -0.9239, 0, 0.3826,
        -0.8313, 0, 0.5557,
        -0.8313, 0, 0.5557,
        -0.8313, 0, 0.5557,
        -0.8313, 0.0003, 0.5557,
        -0.8313, 0.0003, 0.5557,
        -0.0003, 0.4472, 0.8944,
        -0.0003, 0.4472, 0.8944,
        0, 0.4472, 0.8944,
        0.0003, 0.4472, 0.8944,
        0.0003, 0.4472, 0.8944,
        0.5397, 0.6196, 0.5698,
        0.5397, 0.6196, 0.5698,
        0.8505, 0.5258, -0.0077,
        0.9497, 0.3019, -0.0828,
        0.9498, 0.3017, -0.0827,
        0.7783, 0.627, 0.0308,
        0.8505, 0.5258, -0.0077,
        -0.2543, -0.4672, 0.8467,
        -0.39, -0.6108, 0.689,
        0.0705, -0.4926, 0.8674,
        -0.2543, -0.4672, 0.8467,
        0.6611, 0.7359, 0.1459,
        0.7221, 0.6097, 0.3268,
        0.702, 0.5546, 0.4466,
        -0.8484, 0.4633, 0.2559,
        -0.7516, 0.5814, 0.3114,
        -0.9353, 0.3535, -0.0146,
        -0.9344, 0.3454, -0.0863,
        -0.9392, 0.3132, 0.1408,
        -0.8893, 0.3027, 0.3427,
        -0.8539, 0.2749, 0.4418,
        -0.8484, 0.4633, 0.2559,
        -0.8893, 0.3027, 0.3427,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        -0.7587, -0.4821, 0.438,
        -0.4556, -0.7183, 0.5258,
        -0.8318, 0, 0.5551,
        -0.966, 0.1786, -0.1866,
        -0.1086, -0.2958, 0.949,
        -0.1982, -0.2706, 0.942,
        -0.1982, -0.2706, 0.942,
        -0.3945, -0.2124, 0.894,
        -0.4628, -0.2297, 0.8562,
        0.6075, 0.7943, 0,
        0, -1, 0,
        0, -1, 0,
        -0.7587, -0.4821, 0.438,
        -0.8079, -0.5481, -0.2163,
        -0.6651, -0.7024, -0.2535,
        -0.6388, 0.75, -0.1711,
        -0.8656, 0.5006, -0.0096,
        -0.5408, 0.8291, 0.1415,
        -0.7587, 0.4821, 0.438,
        -0.5408, 0.8291, 0.1415,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0.0001,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 0, -1,
        0.0482, 0, -0.9988,
        -0.7584, 0, -0.6518,
        0, 0.4473, 0.8944,
        0, -0.0001, -1,
        -0.0001, -0.0001, -1,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0, -0.0001, -1,
        0, -0.0001, -1,
        1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -0.9452, 0.3246, -0.0353,
        -0.8505, 0.5258, -0.0077,
        -0.8211, 0.5594, 0.1127,
        -0.8505, 0.5258, -0.0077,
        0.3825, 0, -0.9239,
        0.3801, 0.4544, 0.8056,
        0.8668, 0.4202, 0.2683,
        0.3801, 0.4544, 0.8056,
        0.719, 0.2578, 0.6454,
        -0.4135, 0.1333, 0.9007,
        -0.4929, 0.4067, 0.7691,
        -0.5597, 0.0075, 0.8286,
        -0.6846, -0.4303, 0.5883,
        -0.3077, 0.8209, 0.4811,
        -0.4373, 0.4858, 0.7568,
        -0.4359, -0.1874, 0.8802,
        -0.4359, -0.1874, 0.8802,
        -0.274, -0.8586, 0.4331,
        -0.1794, -0.98, -0.0855,
        -0.7587, 0.4821, 0.438,
        -0.3825, 0, -0.9239
    ]);
    // prettier-ignore
    let texcoord_arr = Float32Array.from([
        0.650206, 0.610476,
        0.627514, 0.59569,
        0.662615, 0.589288,
        0.834843, 0.231877,
        0.830664, 0.229427,
        0.843736, 0.219797,
        0.672002, 0.342804,
        0.663614, 0.392338,
        0.660044, 0.39291,
        0.904267, 0.896037,
        0.915158, 0.905492,
        0.915254, 0.905941,
        0.748557, 0.420496,
        0.759141, 0.416959,
        0.75875, 0.426861,
        0.291076, 0.859844,
        0.264552, 0.720926,
        0.291076, 0.721371,
        0.642288, 0.680073,
        0.678718, 0.691183,
        0.673417, 0.719158,
        0.861205, 0.226055,
        0.860838, 0.22793,
        0.857936, 0.222177,
        0.725022, 0.513879,
        0.685592, 0.155073,
        0.693248, 0.139352,
        0.614731, 0.935005,
        0.560902, 0.915862,
        0.615105, 0.916178,
        0.77118, 0.391641,
        0.777204, 0.373435,
        0.797726, 0.383046,
        0.753893, 0.515105,
        0.750159, 0.510413,
        0.752356, 0.504376,
        0.340742, 0.499723,
        0.480186, 0.450372,
        0.480412, 0.492044,
        0.851032, 0.233752,
        0.843736, 0.226975,
        0.851032, 0.219797,
        0.664783, 0.521909,
        0.648009, 0.543752,
        0.648029, 0.522229,
        0.337532, 0.897147,
        0.321006, 0.860863,
        0.337532, 0.848968,
        0.919831, 0.949199,
        0.943063, 0.987237,
        0.919892, 0.987193,
        0.780352, 0.925143,
        0.77377, 0.907707,
        0.817448, 0.880075,
        0.364998, 0.577253,
        0.341497, 0.598103,
        0.341843, 0.577345,
        0.965528, 0.231312,
        0.961128, 0.236052,
        0.958998, 0.221654,
        0.958965, 0.181695,
        0.959987, 0.148539,
        0.971053, 0.162726,
        0.204815, 0.957546,
        0.200258, 0.966897,
        0.170937, 0.960129,
        0.426917, 0.879025,
        0.460434, 0.85001,
        0.429958, 0.894723,
        0.627892, 0.69022,
        0.624371, 0.681951,
        0.629511, 0.680074,
        0.886731, 0.129571,
        0.817447, 0.192846,
        0.817265, 0.129527,
        0.897115, 0.894092,
        0.897115, 0.956166,
        0.889469, 0.94016,
        0.239226, 0.864243,
        0.268152, 0.86116,
        0.256959, 0.862356,
        0.146661, 0.596132,
        0.145566, 0.588206,
        0.146661, 0.579564,
        0.531947, 0.556689,
        0.541636, 0.631937,
        0.536882, 0.632513,
        0.171893, 0.042995,
        0.122667, 0.052226,
        0.136328, 0.000041,
        0.887087, 0.138975,
        0.912413, 0.023149,
        0.912413, 0.138887,
        0.304181, 0.703426,
        0.313062, 0.535702,
        0.313062, 0.702995,
        0.294435, 0.536184,
        0.286427, 0.703135,
        0.286427, 0.535841,
        0.708306, 0.952308,
        0.712918, 0.93574,
        0.710595, 0.953321,
        0.958852, 0.138996,
        0.951766, 0.19017,
        0.953316, 0.139359,
        0.14713, 0.596132,
        0.14713, 0.607371,
        0.145566, 0.601552,
        0.117257, 0.868999,
        0.107964, 0.547852,
        0.117257, 0.548029,
        0.982094, 0.22198,
        0.982061, 0.182021,
        0.751257, 0.750472,
        0.683676, 0.803344,
        0.68184, 0.750749,
        0.16815, 0.953332,
        0.150364, 0.935763,
        0.170938, 0.933908,
        0.853106, 0.932045,
        0.854854, 0.945048,
        0.849107, 0.924603,
        0.27709, 0.938502,
        0.27709, 0.987689,
        0.265761, 0.97277,
        0.514139, 0.931285,
        0.519462, 0.952066,
        0.511329, 0.948013,
        0.313455, 0.722586,
        0.313455, 0.861059,
        0.261275, 0.957932,
        0.261277, 0.962211,
        0.259826, 0.958593,
        0.655039, 0.972108,
        0.678209, 0.945008,
        0.678209, 0.972102,
        0.464957, 0.875472,
        0.477265, 0.864221,
        0.468951, 0.876151,
        0.713206, 0.947623,
        0.727526, 0.959572,
        0.716816, 0.966209,
        0.476755, 0,
        0.680846, 0.204106,
        0.476884, 0.340572,
        0.565934, 0.849325,
        0.523509, 0.707649,
        0.574879, 0.710517,
        0.983167, 0.761482,
        0.944124, 0.786539,
        0.951444, 0.763973,
        0.561617, 0.859264,
        0.615808, 0.860507,
        0.615597, 0.882095,
        0.340858, 0.689728,
        0.480404, 0.710231,
        0.341593, 0.710784,
        0.615452, 0.893674,
        0.918485, 0.391727,
        0.954154, 0.264879,
        0.954163, 0.39493,
        0.088624, 0.89589,
        0.079725, 0.911325,
        0.088186, 0.895733,
        0.925195, 0.237537,
        0.918476, 0.261677,
        0.823393, 0.57182,
        0.757139, 0.51597,
        0.826387, 0.515912,
        0.286427, 0.712521,
        0.28643, 0.704623,
        0.286815, 0.704373,
        0.983281, 0.725273,
        0.971694, 0.729223,
        0.992751, 0.675479,
        0.958965, 0.416916,
        0.925195, 0.413889,
        0.217926, 0.948353,
        0.215218, 0.946377,
        0.227969, 0.938502,
        0.756566, 0.510478,
        0.758299, 0.502631,
        0.758299, 0.513635,
        0.342579, 0.560289,
        0.365732, 0.560196,
        0.340857, 0.612961,
        0.364653, 0.598011,
        0.287743, 0.394096,
        0.287991, 0.408664,
        0.147573, 0.404176,
        0.887087, 0.189755,
        0.904777, 0.176732,
        0.900002, 0.195606,
        0.201292, 0.791424,
        0.196559, 0.775856,
        0.207301, 0.756628,
        0.749022, 0.04847,
        0.752886, 0.063116,
        0.740451, 0.058811,
        0.31856, 0.531624,
        0.31856, 0.508453,
        0.323499, 0.340654,
        0.823393, 0.704724,
        0.753093, 0.638191,
        0.822342, 0.638133,
        0.483048, 0.56295,
        0.510802, 0.700704,
        0.481436, 0.705485,
        0.898066, 0.541096,
        0.896921, 0.570124,
        0.82758, 0.569955,
        0.005299, 0.799701,
        0.051579, 0.799694,
        0.046279, 0.826269,
        0.898066, 0.594291,
        0.907948, 0.568804,
        0.919213, 0.600584,
        0.904808, 0.989839,
        0.905984, 0.952832,
        0.919831, 0.97043,
        0.146677, 0.561967,
        0.146677, 0.579564,
        0.145566, 0.570461,
        0.048281, 0.912918,
        0.040926, 0.896441,
        0.051115, 0.895856,
        0.625965, 0.913913,
        0.615452, 0.893674,
        0.635073, 0.889786,
        0.940457, 0.666075,
        0.940457, 0.740718,
        0.938195, 0.733686,
        0.147877, 0.456352,
        0.284188, 0.490716,
        0.278267, 0.503528,
        0.705255, 0.803345,
        0.678405, 0.9191,
        0.678405, 0.80357,
        0.919919, 0.908563,
        0.938029, 0.908597,
        0.937904, 0.922142,
        0.473112, 0.972511,
        0.471706, 0.963603,
        0.476226, 0.945196,
        0.920007, 0.894092,
        0.924936, 0.898533,
        0.812396, 0.449287,
        0.75875, 0.426861,
        0.81281, 0.426561,
        0.850604, 0.454694,
        0.84928, 0.452221,
        0.850148, 0.452081,
        0.310478, 0.511421,
        0.313805, 0.504579,
        0.313805, 0.522148,
        0.136479, 0.704153,
        0.141207, 0.74573,
        0.134653, 0.72542,
        0.770884, 0.392286,
        0.791185, 0.40275,
        0.790478, 0.404294,
        0.581634, 0.935005,
        0.576747, 0.943266,
        0.569334, 0.947557,
        0.328887, 0.795648,
        0.323661, 0.810299,
        0.31388, 0.784994,
        0.39148, 0.854891,
        0.418977, 0.897055,
        0.403149, 0.914981,
        0.97027, 0.739778,
        0.961936, 0.761106,
        0.958046, 0.761482,
        0.9807, 0.646137,
        0.989581, 0.515911,
        0.989581, 0.665918,
        0.583745, 0.949964,
        0.600329, 0.949629,
        0.596722, 0.958102,
        0.211046, 0.551913,
        0.189362, 0.560894,
        0.190441, 0.540993,
        0.939507, 0.023157,
        0.848893, 0.880698,
        0.834601, 0.90067,
        0.8355, 0.880075,
        0.093417, 0.952263,
        0.097059, 0.981909,
        0.085935, 0.981595,
        0.428543, 0.897637,
        0.430539, 0.897647,
        0.481007, 0.779487,
        0.47851, 0.751181,
        0.481007, 0.746325,
        0.98785, 0.032435,
        0.96609, 0.000081,
        0.989219, 0,
        0.905664, 0.676852,
        0.910937, 0.671348,
        0.917963, 0.671,
        0.316909, 0.743534,
        0.336754, 0.722557,
        0.337532, 0.723422,
        0.27976, 0.863765,
        0.281738, 0.962354,
        0.27976, 0.959644,
        0.99685, 0.155411,
        0.994088, 0.197211,
        0.982425, 0.1853,
        0.071179, 0.962692,
        0.082813, 0.962631,
        0.084806, 0.971597,
        0.710595, 0.953321,
        0.712918, 0.968624,
        0.693825, 0.967547,
        0.227342, 0.984913,
        0.217926, 0.9848,
        0.026399, 0.97535,
        0.021838, 0.962186,
        0.03091, 0.971232,
        0.930144, 0.746292,
        0.937366, 0.758741,
        0.934727, 0.760777,
        0.313869, 0.364522,
        0.313745, 0.366836,
        0.313745, 0.364511,
        0.313745, 0.364511,
        0.313745, 0.366987,
        0.313623, 0.364524,
        0.805677, 0.352328,
        0.81265, 0.349292,
        0.818273, 0.38791,
        0.909742, 0.746587,
        0.911722, 0.74803,
        0.913732, 0.760871,
        0.895728, 0.635668,
        0.826388, 0.6355,
        0.983792, 0.98185,
        0.965782, 0.941008,
        0.983792, 0.945525,
        0.83641, 0.879575,
        0.813985, 0.879398,
        0.81422, 0.84746,
        0.738944, 0.475401,
        0.734635, 0.462186,
        0.758342, 0.449215,
        0.261297, 0.973674,
        0.249478, 0.97432,
        0.245707, 0.95937,
        0.524733, 0.847025,
        0.490986, 0.845289,
        0.333224, 0.340647,
        0.323499, 0.702394,
        0.323499, 0.340654,
        0.634594, 0.949547,
        0.628839, 0.96483,
        0.627891, 0.935103,
        0.145184, 0.892989,
        0.147557, 0.895409,
        0.136903, 0.903049,
        0.134653, 0.771975,
        0.138962, 0.760706,
        0.145233, 0.758742,
        0.789479, 0.847646,
        0.790596, 0.879575,
        0.847261, 0.805986,
        0.859899, 0.826271,
        0.843465, 0.804313,
        0.020388, 0.552435,
        0.092572, 0.560408,
        0.007472, 0.566238,
        0.866478, 0.962591,
        0.867401, 0.97917,
        0.861543, 0.979059,
        0.133408, 0.981306,
        0.13265, 0.981444,
        0.125118, 0.973701,
        0.984232, 0.757482,
        0.981554, 0.758951,
        0.974605, 0.73241,
        0.192833, 0.774327,
        0.19937, 0.795825,
        0.149954, 0.340595,
        0.289037, 0.36415,
        0.148873, 0.358318,
        0.751257, 0.558576,
        0.680846, 0.618405,
        0.68184, 0.558852,
        0.953224, 0.440899,
        0.953226, 0.41804,
        0.953412, 0.418125,
        0.52753, 0.956551,
        0.526726, 0.926322,
        0.543007, 0.968926,
        0.127023, 0.883413,
        0.131218, 0.715622,
        0.131218, 0.738777,
        0.697406, 0.920276,
        0.711994, 0.935332,
        0.694199, 0.932828,
        0.616314, 0.437956,
        0.628668, 0.430452,
        0.635032, 0.499405,
        0.312748, 0.401942,
        0.289714, 0.366618,
        0.312865, 0.366215,
        0.303097, 0.720581,
        0.30871, 0.706549,
        0.30938, 0.720787,
        0.259826, 0.958593,
        0.24735, 0.941606,
        0.261297, 0.938502,
        0.749345, 0.512729,
        0.743006, 0.512729,
        0.743644, 0.509847,
        0.769575, 0.829382,
        0.764692, 0.819241,
        0.76633, 0.818045,
        0.24735, 0.941606,
        0.235399, 0.95423,
        0.146725, 0.607371,
        0.146725, 0.62142,
        0.145566, 0.618372,
        0.762232, 0.832026,
        0.769575, 0.829382,
        0.769818, 0.880075,
        0.622092, 0.965304,
        0.627891, 0.983642,
        0.610273, 0.968788,
        0.811955, 0.814622,
        0.791169, 0.822085,
        0.801414, 0.782413,
        0.386836, 0.891869,
        0.365077, 0.88119,
        0.39148, 0.854891,
        0.679126, 0.952066,
        0.692894, 0.950131,
        0.62327, 0.60098,
        0.625443, 0.603498,
        0.953019, 0.216188,
        0.95826, 0.19017,
        0.95826, 0.22745,
        0.670449, 0.47628,
        0.672002, 0.477381,
        0.667042, 0.486322,
        0.769864, 0.484378,
        0.758748, 0.482636,
        0.83223, 0.923398,
        0.817485, 0.924736,
        0.818646, 0.902117,
        0.857936, 0.234441,
        0.855093, 0.22963,
        0.857936, 0.219797,
        0.791169, 0.822085,
        0.790656, 0.825436,
        0.779939, 0.825645,
        0.716117, 0.514872,
        0.680846, 0.176278,
        0.685592, 0.155073,
        0.338335, 0.928017,
        0.338335, 0.965536,
        0.321006, 0.940976,
        0.288235, 0.450511,
        0.949253, 0.692969,
        0.958449, 0.693399,
        0.954052, 0.750621,
        0.445854, 0.951057,
        0.453485, 0.992519,
        0.445854, 0.992708,
        0.81281, 0.483262,
        0.770804, 0.502631,
        0.816378, 0.444724,
        0.813713, 0.428139,
        0.836536, 0.43716,
        0.851787, 0.456782,
        0.873576, 0.448556,
        0.870815, 0.490033,
        0.962946, 0.662092,
        0.970954, 0.516394,
        0.970954, 0.665174,
        0.655134, 0.920282,
        0.678305, 0.920276,
        0.279274, 0.870829,
        0.27909, 0.898895,
        0.279199, 0.881689,
        0.142668, 0.82397,
        0.146704, 0.872672,
        0.142661, 0.872692,
        0.936602, 0.796224,
        0.934722, 0.787779,
        0.943141, 0.794951,
        0.817448, 0.945812,
        0.118501, 0.889084,
        0.12293, 0.891865,
        0.128093, 0.90919,
        0.554052, 0.671855,
        0.553408, 0.630661,
        0.589891, 0.691598,
        0.965782, 0.97522,
        0.943171, 0.944212,
        0.965782, 0.941008,
        0.636813, 0.830023,
        0.628438, 0.830433,
        0.62437, 0.813803,
        0.798334, 0.991086,
        0.789312, 0.991086,
        0.790633, 0.959103,
        0.712918, 0.940776,
        0.716568, 0.945538,
        0.655039, 0.804401,
        0.333833, 0.836921,
        0.337532, 0.848969,
        0.330317, 0.843283,
        0.071179, 0.943923,
        0.054118, 0.98501,
        0.054118, 0.948685,
        0.887087, 0.000044,
        0.817327, 0.061796,
        0.817622, 0,
        0.672002, 0.483181,
        0.676117, 0.475968,
        0.676561, 0.507452,
        0.837396, 0.836626,
        0.847568, 0.836848,
        0.882306, 0.970581,
        0.889376, 0.958313,
        0.889376, 0.976474,
        0.267596, 0.881791,
        0.256474, 0.872123,
        0.267874, 0.871476,
        0.882306, 0.973667,
        0.879563, 0.975314,
        0.877965, 0.969213,
        0.036499, 0.943923,
        0.054118, 0.984771,
        0.036499, 0.98037,
        0.661888, 0.650871,
        0.678829, 0.680073,
        0.670303, 0.677267,
        0.655252, 0.406554,
        0.650863, 0.425004,
        0.64559, 0.410111,
        0.733712, 0.924735,
        0.740161, 0.947408,
        0.727524, 0.935023,
        0.761047, 0.323958,
        0.7712, 0.309281,
        0.759851, 0.360559,
        0.313833, 0.340595,
        0.313833, 0.36198,
        0.313832, 0.353705,
        0.874805, 0.95801,
        0.867401, 0.970631,
        0.872099, 0.956166,
        0.750263, 0.68552,
        0.680846, 0.685796,
        0.092582, 0.737873,
        0.092572, 0.560408,
        0.107964, 0.71393,
        0.826388, 0.6355,
        0.89613, 0.702783,
        0.82679, 0.702614,
        0.716568, 0.945538,
        0.898066, 0.761215,
        0.828726, 0.761046,
        0.77199, 0.002642,
        0.771085, 0.050508,
        0.765986, 0.049114,
        0.915825, 0.446007,
        0.892122, 0.468072,
        0.8927, 0.446448,
        0.713796, 0.924484,
        0.716329, 0.920276,
        0.122994, 0.8603,
        0.117257, 0.548029,
        0.127023, 0.548023,
        0.9807, 0.516342,
        0.9807, 0.646137,
        0.974974, 0.637493,
        0.313754, 0.367009,
        0.313869, 0.366837,
        0.313869, 0.367099,
        0.295487, 0.527517,
        0.294374, 0.52762,
        0.294481, 0.52712,
        0.64801, 0.545008,
        0.628238, 0.522936,
        0.64801, 0.52191,
        0.502842, 0.927419,
        0.50004, 0.951217,
        0.493132, 0.9511,
        0.142843, 0.662526,
        0.139235, 0.658662,
        0.139867, 0.559601,
        0.108884, 0.948094,
        0.109163, 0.897358,
        0.628239, 0.526828,
        0.618129, 0.547195,
        0.606558, 0.521909,
        0.7703, 0.968361,
        0.76767, 0.958543,
        0.777901, 0.951294,
        0.791185, 0.40275,
        0.811467, 0.40782,
        0.281738, 0.861058,
        0.320163, 0.863804,
        0.007482, 0.743704,
        0, 0.720596,
        0.854879, 0.963894,
        0.849107, 0.987052,
        0.849121, 0.946543,
        0.847096, 0.459336,
        0.857853, 0.496194,
        0.857148, 0.496505,
        0.050675, 0.930511,
        0.06526, 0.912776,
        0.065365, 0.930388,
        0.358158, 0.90992,
        0.347383, 0.892441,
        0.362279, 0.880902,
        0.647634, 0.775916,
        0.643172, 0.771734,
        0.642492, 0.768649,
        0.237915, 0.859798,
        0.215218, 0.722504,
        0.237915, 0.721325,
        0.916411, 0.83777,
        0.926253, 0.824801,
        0.942019, 0.823877,
        0.098188, 0.909801,
        0.092582, 0.779221,
        0.102217, 0.756821,
        0.106876, 0.942797,
        0.107089, 0.981909,
        0.83346, 0.474866,
        0.827272, 0.488598,
        0.818373, 0.479737,
        0.313291, 0.442372,
        0.289597, 0.402345,
        0.479271, 0.636237,
        0.34046, 0.636791,
        0.350854, 0.817523,
        0.369962, 0.721181,
        0.47666, 0.792418,
        0.938657, 0.752284,
        0.942924, 0.740718,
        0.942924, 0.758885,
        0.987368, 0.071765,
        0.964721, 0.032516,
        0.074754, 0.930617,
        0.07701, 0.91306,
        0.07701, 0.928581,
        0.085759, 0.913496,
        0.088624, 0.932761,
        0.759141, 0.416959,
        0.087523, 0.752197,
        0.016368, 0.974608,
        0.021838, 0.953519,
        0.021838, 0.975326,
        0.845621, 0.924045,
        0.826271, 0.490997,
        0.829262, 0.50381,
        0.817614, 0.490393,
        0.814059, 0.836444,
        0.811955, 0.814622,
        0.655039, 0.9585,
        0.63722, 0.829676,
        0.644715, 0.85622,
        0.779985, 0.314583,
        0.804152, 0.237537,
        0.789267, 0.349391,
        0.294435, 0.703478,
        0.304181, 0.536133,
        0.304181, 0.703426,
        0.747326, 0.960058,
        0.714348, 0.843901,
        0.724333, 0.894127,
        0.705255, 0.918875,
        0.480912, 0.71113,
        0.476662, 0.74009,
        0.47666, 0.710784,
        0.812248, 0.406116,
        0.835767, 0.387293,
        0.915825, 0.51178,
        0.89221, 0.494304,
        0.915335, 0.493864,
        0.206453, 0.934656,
        0.21323, 0.984488,
        0.204814, 0.985415,
        0.977631, 0.914459,
        0.951444, 0.941008,
        0.944116, 0.917093,
        0.294374, 0.52712,
        0.294374, 0.532331,
        0.292292, 0.529211,
        0.264552, 0.8594,
        0.581634, 0.94942,
        0.587692, 0.941802,
        0.605882, 0.844887,
        0.59973, 0.851335,
        0.565934, 0.849325,
        0.051115, 0.895856,
        0.065805, 0.895733,
        0.071179, 0.962692,
        0.075476, 0.943923,
        0.08025, 0.9456,
        0.661154, 0.743139,
        0.672945, 0.730999,
        0.673039, 0.742038,
        0.479271, 0.663195,
        0.34046, 0.663748,
        0.290471, 0.340998,
        0.313622, 0.340595,
        0.948579, 0.596914,
        0.959441, 0.599966,
        0.923083, 0.658448,
        0.036499, 0.95352,
        0, 0.95352,
        0.007663, 0.903469,
        0.928609, 0.575734,
        0.00631, 0.413366,
        0.002084, 0.454997,
        0, 0.433758,
        0.949419, 0.822063,
        0.943502, 0.80162,
        0.977639, 0.783905,
        0.281773, 0.62272,
        0.281812, 0.628336,
        0.272805, 0.644413,
        0.657526, 0.77464,
        0.678828, 0.768649,
        0.677764, 0.771471,
        0.755769, 0.379906,
        0.753151, 0.379061,
        0.302203, 0.461315,
        0.290139, 0.442775,
        0.313622, 0.453938,
        0.07385, 0.31473,
        0.08116, 0.261285,
        0.168568, 0.297623,
        0.753093, 0.920277,
        0.742082, 0.894726,
        0.750326, 0.845032,
        0.886792, 0.061841,
        0.374834, 0.896986,
        0.386836, 0.891869,
        0.777801, 0.130892,
        0.789301, 0.172838,
        0.756613, 0.237392,
        0.441803, 0.950799,
        0.436273, 0.959048,
        0.431233, 0.948526,
        0.778879, 0.308233,
        0.771747, 0.303031,
        0.774334, 0.297774,
        0.987849, 0.112027,
        0.987869, 0.112544,
        0.987833, 0.112558,
        0.73399, 0,
        0.708858, 0.138487,
        0.701759, 0.133288,
        0.830212, 0.961844,
        0.818546, 0.962155,
        0.817448, 0.945812,
        0.678305, 0.997428,
        0.655134, 0.997434,
        0.915247, 0.467632,
        0.560522, 0.968284,
        0.569263, 0.972036,
        0.581634, 0.982555,
        0.125118, 0.973701,
        0.118608, 0.984413,
        0.113312, 0.950875,
        0.827526, 0.219797,
        0.830664, 0.219959,
        0.830664, 0.237208,
        0.310478, 0.514513,
        0.292921, 0.500528,
        0.310478, 0.481694,
        0.942715, 0.420028,
        0.953224, 0.425485,
        0.918476, 0.515291,
        0.939507, 0.138895,
        0.942695, 0.02317,
        0.798334, 0.9605,
        0.806913, 0.951294,
        0.811694, 0.959569,
        0.859848, 0.903204,
        0.856138, 0.880207,
        0.859848, 0.880075,
        0.480584, 0.412132,
        0.340461, 0.447765,
        0.340957, 0.400086,
        0.930144, 0.744573,
        0.930144, 0.759387,
        0.913732, 0.752271,
        0.740539, 0.512811,
        0.73399, 0.502631,
        0.742351, 0.502631,
        0.62373, 0.753586,
        0.626439, 0.74491,
        0.629512, 0.742269,
        0.76767, 0.956652,
        0.76767, 0.974012,
        0.753094, 0.965202,
        0.427425, 0.968332,
        0.44046, 0.961182,
        0.491488, 0.470826,
        0.535604, 0.528345,
        0.492003, 0.490718,
        0.13893, 0.827513,
        0.441809, 0.952161,
        0.62744, 0.721391,
        0.629512, 0.711891,
        0.629512, 0.74227,
        0.963207, 0.461647,
        0.977352, 0.488115,
        0.958965, 0.507452,
        0.823393, 0.704724,
        0.757139, 0.761482,
        0.754145, 0.704782,
        0.291492, 0.529947,
        0.292291, 0.535514,
        0.289597, 0.531047,
        0.915264, 0.367419,
        0.905579, 0.352452,
        0.918477, 0.237537,
        0.549929, 0.897867,
        0.560522, 0.966408,
        0.54789, 0.900969,
        0.823393, 0.57182,
        0.754145, 0.571878,
        0.940755, 0.52102,
        0.943411, 0.588067,
        0.753093, 0.515912,
        0.683676, 0.516189,
        0.880897, 0.49303,
        0.87693, 0.492678,
        0.333224, 0.717194,
        0.340461, 0.340595,
        0.340461, 0.722557,
        0.639757, 0.558228,
        0.650383, 0.548387,
        0.650652, 0.56381,
        0.73399, 0.5132,
        0.200806, 0.796406,
        0.075194, 0.895961,
        0.964239, 0.071846,
        0.964721, 0.112108,
        0.197685, 0.800297,
        0.478127, 0.94446,
        0.466469, 0.926209,
        0.47815, 0.887924,
        0.057629, 0.943923,
        0.050675, 0.930511,
        0.260496, 0.930976,
        0.25719, 0.926785,
        0.267018, 0.926217,
        0.15038, 1,
        0.170938, 0.998171,
        0.711994, 0.935332,
        0.040486, 0.931096,
        0.036499, 0.913591,
        0.68184, 0.750749,
        0.751257, 0.750472,
        0.646692, 0.623685,
        0.646757, 0.625989,
        0.6513, 0.564635,
        0.658606, 0.571746,
        0.671978, 0.572936,
        0.678829, 0.570231,
        0.650206, 0.610476,
        0.843736, 0.219797,
        0.843736, 0.234478,
        0.292291, 0.52712,
        0.651261, 0.342054,
        0.660044, 0.39291,
        0.651261, 0.342054,
        0.660044, 0.39291,
        0.919831, 0.909403,
        0.915049, 0.945853,
        0.897115, 0.943681,
        0.909484, 0.894092,
        0.915158, 0.905492,
        0.918075, 0.902771,
        0.915158, 0.905492,
        0.918959, 0.905766,
        0.733991, 0.450354,
        0.75875, 0.426861,
        0.627891, 0.935005,
        0.622072, 0.964985,
        0.608439, 0.958507,
        0.75875, 0.426861,
        0.622072, 0.964985,
        0.610273, 0.968788,
        0.655945, 0.730136,
        0.629512, 0.687941,
        0.678828, 0.690936,
        0.678718, 0.691183,
        0.860838, 0.22793,
        0.861689, 0.233377,
        0.860275, 0.234202,
        0.860838, 0.22793,
        0.861689, 0.219797,
        0.861493, 0.225917,
        0.716117, 0.514872,
        0.685592, 0.155073,
        0.560522, 0.935005,
        0.791185, 0.40275,
        0.791185, 0.40275,
        0.752783, 0.502653,
        0.753893, 0.502631,
        0.753893, 0.502631,
        0.749558, 0.515196,
        0.749617, 0.510207,
        0.848858, 0.234332,
        0.664783, 0.543419,
        0.648009, 0.543752,
        0.331603, 0.919382,
        0.668695, 0.799589,
        0.647634, 0.794842,
        0.943002, 0.949243,
        0.758338, 0.892608,
        0.753094, 0.891113,
        0.817448, 0.951294,
        0.781701, 0.947562,
        0.758338, 0.892608,
        0.966395, 0.234047,
        0.959599, 0.237537,
        0.982425, 0.230736,
        0.971053, 0.162726,
        0.982425, 0.170214,
        0.982425, 0.170214,
        0.192392, 0.97268,
        0.183325, 0.973366,
        0.175475, 0.968776,
        0.170937, 0.949727,
        0.175493, 0.940377,
        0.204815, 0.947145,
        0.18336, 0.934593,
        0.192427, 0.933908,
        0.200276, 0.938498,
        0.418977, 0.855317,
        0.422138, 0.847036,
        0.458463, 0.847289,
        0.460434, 0.945833,
        0.43054, 0.897651,
        0.458463, 0.948526,
        0.426917, 0.916227,
        0.422138, 0.948273,
        0.418977, 0.939951,
        0.427792, 0.906182,
        0.429958, 0.900571,
        0.629511, 0.711891,
        0.886912, 0.192891,
        0.867282, 0.920059,
        0.866014, 0.910728,
        0.859899, 0.900598,
        0.256406, 0.882986,
        0.256406, 0.882986,
        0.215218, 0.8903,
        0.215764, 0.869632,
        0.544344, 0.65285,
        0.544344, 0.65285,
        0.55002, 0.695682,
        0.045399, 0.145544,
        0, 0.136537,
        0.025875, 0.073941,
        0.073753, 0.025999,
        0.079303, 0.081239,
        0.204043, 0,
        0.266611, 0.025888,
        0.314527, 0.073766,
        0.259301, 0.079332,
        0.340461, 0.136352,
        0.288294, 0.1227,
        0.340461, 0.204081,
        0.288485, 0.217391,
        0.330597, 0.23665,
        0.288482, 0.217396,
        0.887087, 0.023239,
        0.304181, 0.536133,
        0.708306, 0.952308,
        0.711994, 0.935332,
        0.958852, 0.189707,
        0.117257, 0.868999,
        0.107964, 0.889084,
        0.751257, 0.750472,
        0.753093, 0.803068,
        0.147573, 0.955149,
        0.850212, 0.880075,
        0.856138, 0.883144,
        0.856138, 0.946543,
        0.854854, 0.945048,
        0.261297, 0.972022,
        0.272122, 0.942485,
        0.262711, 0.940711,
        0.263495, 0.941571,
        0.261902, 0.989278,
        0.27709, 0.938502,
        0.525573, 0.927519,
        0.521815, 0.955552,
        0.521552, 0.95551,
        0.519462, 0.952066,
        0.519462, 0.952066,
        0.50004, 0.951217,
        0.506324, 0.927732,
        0.502294, 0.949322,
        0.514139, 0.931285,
        0.514139, 0.931285,
        0.519462, 0.952066,
        0.655039, 0.945014,
        0.470727, 0.892606,
        0.477864, 0.881334,
        0.47815, 0.847036,
        0.716568, 0.945538,
        0.544574, 0.340572,
        0.414329, 0.314688,
        0.366423, 0.266795,
        0.340491, 0.204199,
        0.340461, 0.136462,
        0.366344, 0.073874,
        0.414202, 0.025942,
        0.544445, 0,
        0.607001, 0.025884,
        0.654907, 0.073777,
        0.680839, 0.136373,
        0.654986, 0.266698,
        0.607128, 0.31463,
        0.944124, 0.786539,
        0.561253, 0.892981,
        0.561617, 0.859264,
        0.47967, 0.689175,
        0.958965, 0.240564,
        0.754145, 0.571878,
        0.303097, 0.703477,
        0.290757, 0.713858,
        0.303097, 0.703477,
        0.303097, 0.720591,
        0.290757, 0.713858,
        0.30084, 0.720712,
        0.290757, 0.713858,
        0.290757, 0.713858,
        0.974605, 0.73241,
        0.232529, 0.941011,
        0.232529, 0.941011,
        0.235399, 0.943918,
        0.753893, 0.508851,
        0.364746, 0.595812,
        0.480404, 0.595351,
        0.479668, 0.612407,
        0.148873, 0.358318,
        0.148873, 0.358318,
        0.288381, 0.371814,
        0.288254, 0.395118,
        0.287991, 0.408664,
        0.949685, 0.221351,
        0.950741, 0.220087,
        0.951766, 0.223171,
        0.935058, 0.229852,
        0.935058, 0.229852,
        0.912298, 0.226458,
        0.91942, 0.224972,
        0.935058, 0.229852,
        0.91942, 0.224972,
        0.912298, 0.226458,
        0.89473, 0.211761,
        0.904997, 0.213306,
        0.887087, 0.189755,
        0.904997, 0.213306,
        0.903178, 0.209062,
        0.887087, 0.189755,
        0.891368, 0.16632,
        0.906466, 0.147733,
        0.90925, 0.17138,
        0.928315, 0.138996,
        0.923974, 0.161052,
        0.928315, 0.138996,
        0.951076, 0.14239,
        0.9456, 0.15503,
        0.951766, 0.142967,
        0.9456, 0.15503,
        0.9456, 0.15503,
        0.945, 0.162991,
        0.935798, 0.159631,
        0.9456, 0.15503,
        0.935798, 0.159631,
        0.928315, 0.138996,
        0.923974, 0.161052,
        0.904997, 0.213306,
        0.91942, 0.224972,
        0.912298, 0.226458,
        0.666754, 0.536091,
        0.678828, 0.528909,
        0.678828, 0.548387,
        0.313763, 0.540226,
        0.313326, 0.522239,
        0.313763, 0.522148,
        0.179633, 0.787684,
        0.197685, 0.800297,
        0.179633, 0.787684,
        0.156428, 0.865575,
        0.17993, 0.807749,
        0.183483, 0.808022,
        0.215218, 0.933908,
        0.147573, 0.90589,
        0.201925, 0.753633,
        0.215218, 0.720925,
        0.215218, 0.752289,
        0.200806, 0.796406,
        0.193837, 0.773532,
        0.193915, 0.773339,
        0.763337, 0.074797,
        0.75464, 0.064386,
        0.759138, 0.821798,
        0.753093, 0.82302,
        0.738679, 0.048908,
        0.31388, 0.508436,
        0.31388, 0.340618,
        0.323499, 0.702394,
        0.31388, 0.682085,
        0.31388, 0.531607,
        0.323499, 0.340654,
        0.323499, 0.702394,
        0.323499, 0.340654,
        0.823393, 0.704724,
        0.754145, 0.704782,
        0.480584, 0.412132,
        0.340957, 0.400086,
        0.481436, 0.383534,
        0.340957, 0.400086,
        0.343653, 0.340572,
        0.830184, 0.515912,
        0.887087, 0.219797,
        0.089158, 0.890429,
        0.092582, 0.891112,
        0.069442, 0.895733,
        0.042878, 0.890436,
        0.066619, 0.875386,
        0.039299, 0.888047,
        0.040518, 0.88414,
        0.051579, 0.852842,
        0.03781, 0.87546,
        0.030406, 0.869095,
        0.02027, 0.866759,
        0.015339, 0.867897,
        0.005299, 0.852849,
        0, 0.826276,
        0.02034, 0.777153,
        0.042878, 0.762103,
        0.069442, 0.756798,
        0.066619, 0.777146,
        0.092582, 0.761412,
        0.089158, 0.762096,
        0.923083, 0.658448,
        0.906249, 0.642799,
        0.903862, 0.990291,
        0.915085, 0.950502,
        0.915085, 0.950502,
        0.914736, 0.987725,
        0.615452, 0.893674,
        0.615452, 0.893674,
        0.615597, 0.882095,
        0.615597, 0.882095,
        0.636005, 0.887228,
        0.480463, 0.779487,
        0.480463, 0.810854,
        0.47666, 0.803897,
        0.929861, 0.720926,
        0.920438, 0.694397,
        0.920438, 0.694397,
        0.623493, 0.713415,
        0.60762, 0.843125,
        0.152514, 0.535702,
        0.623493, 0.840405,
        0.289597, 0.485371,
        0.943063, 0.92122,
        0.940698, 0.921869,
        0.937904, 0.922142,
        0.940698, 0.921869,
        0.937904, 0.922142,
        0.937904, 0.922142,
        0.476226, 0.98296,
        0.460434, 0.983052,
        0.471706, 0.963603,
        0.465437, 0.946073,
        0.476226, 0.98296,
        0.937081, 0.901296,
        0.830332, 0.808783,
        0.82609, 0.83649,
        0.823243, 0.814657,
        0.815649, 0.813807,
        0.138015, 0.684909,
        0.146699, 0.668055,
        0.147017, 0.668012,
        0.147017, 0.758742,
        0.144966, 0.757692,
        0.770884, 0.392286,
        0.791185, 0.40275,
        0.57934, 0.942445,
        0.571139, 0.94908,
        0.319216, 0.75775,
        0.328487, 0.754157,
        0.388554, 0.968163,
        0.388681, 0.974623,
        0.378153, 0.96924,
        0.382221, 0.932287,
        0.39148, 0.854891,
        0.39148, 0.854891,
        0.418977, 0.859253,
        0.965452, 0.688242,
        0.970878, 0.679622,
        0.9807, 0.646137,
        0.9807, 0.516342,
        0.596944, 0.970678,
        0.584141, 0.958953,
        0.584141, 0.958953,
        0.595467, 0.937171,
        0.60844, 0.938857,
        0.604231, 0.941329,
        0.60844, 0.968688,
        0.596944, 0.970678,
        0.600794, 0.95368,
        0.600616, 0.953876,
        0.180255, 0.653486,
        0.186623, 0.658724,
        0.167839, 0.683086,
        0.159163, 0.680375,
        0.155259, 0.681593,
        0.152871, 0.678012,
        0.172761, 0.644378,
        0.147573, 0.651437,
        0.152188, 0.628292,
        0.147573, 0.605143,
        0.163794, 0.622679,
        0.152871, 0.578572,
        0.163794, 0.599191,
        0.167908, 0.556031,
        0.172761, 0.577498,
        0.217, 0.535702,
        0.243558, 0.541012,
        0.234521, 0.551921,
        0.266091, 0.556065,
        0.256205, 0.560917,
        0.281129, 0.578615,
        0.272805, 0.577532,
        0.286427, 0.60519,
        0.281773, 0.599231,
        0.849107, 0.901359,
        0.430539, 0.897647,
        0.988427, 0.677612,
        0.991468, 0.674072,
        0.983958, 0.681444,
        0.970878, 0.711697,
        0.47666, 0.752068,
        0.988427, 0.677612,
        0.898066, 0.671735,
        0.910717, 0.671268,
        0.910864, 0.671262,
        0.920438, 0.694397,
        0.918909, 0.691495,
        0.994088, 0.197211,
        0.99685, 0.208212,
        0.986419, 0.205256,
        0.99685, 0.208212,
        0.98971, 0.210176,
        0.994088, 0.197211,
        0.988987, 0.148539,
        0.08317, 0.982644,
        0.074679, 0.982695,
        0.071179, 0.962692,
        0.710188, 0.972111,
        0.708306, 0.952308,
        0.708306, 0.952308,
        0.235399, 0.984321,
        0.027366, 0.955507,
        0.027366, 0.955507,
        0.03091, 0.953519,
        0.025689, 0.978395,
        0.026399, 0.97535,
        0.025366, 0.977415,
        0.026399, 0.97535,
        0.937366, 0.740718,
        0.79895, 0.356604,
        0.827753, 0.241737,
        0.847096, 0.252671,
        0.83213, 0.320385,
        0.847096, 0.336002,
        0.898066, 0.758692,
        0.909742, 0.746587,
        0.909742, 0.746587,
        0.913732, 0.740718,
        0.895728, 0.635668,
        0.965782, 0.981277,
        0.759139, 0.492012,
        0.73924, 0.482541,
        0.747326, 0.931355,
        0.751563, 0.931948,
        0.752894, 0.943215,
        0.259826, 0.958593,
        0.481436, 0.705485,
        0.48144, 0.705485,
        0.490986, 0.845289,
        0.490986, 0.845289,
        0.323499, 0.702394,
        0.636912, 0.935005,
        0.634594, 0.949547,
        0.634594, 0.949547,
        0.636912, 0.975069,
        0.147557, 0.950675,
        0.133407, 0.922805,
        0.14024, 0.957957,
        0.145363, 0.889084,
        0.145233, 0.820139,
        0.140016, 0.822138,
        0.135752, 0.8126,
        0.856201, 0.837147,
        0.752894, 0.920276,
        0.749472, 0.922796,
        0.843465, 0.804313,
        0.020388, 0.552435,
        0.087528, 0.547834,
        0.092572, 0.560408,
        0.861543, 0.979059,
        0.859899, 0.956166,
        0.867401, 0.956316,
        0.313623, 0.341215,
        0.313832, 0.340595,
        0.313832, 0.364511,
        0.130219, 0.983388,
        0.125118, 0.973701,
        0.133408, 0.962001,
        0.125118, 0.973701,
        0.992751, 0.746842,
        0.974605, 0.73241,
        0.974605, 0.73241,
        0.295695, 0.52811,
        0.297327, 0.52712,
        0.297327, 0.530785,
        0.981554, 0.758951,
        0.977331, 0.761482,
        0.974605, 0.73241,
        0.342394, 0.560196,
        0.48056, 0.527458,
        0.480138, 0.506187,
        0.480648, 0.505182,
        0.481436, 0.540598,
        0.289597, 0.357625,
        0.289037, 0.36415,
        0.289037, 0.36415,
        0.148873, 0.358318,
        0.750264, 0.618128,
        0.957476, 0.416916,
        0.957476, 0.441244,
        0.525687, 0.967525,
        0.54789, 0.900969,
        0.134653, 0.738693,
        0.134653, 0.885094,
        0.134653, 0.547834,
        0.134653, 0.715538,
        0.712841, 0.922453,
        0.711994, 0.935332,
        0.61794, 0.503231,
        0.616314, 0.437956,
        0.961972, 0.664525,
        0.962946, 0.603821,
        0.616314, 0.437956,
        0.606558, 0.340572,
        0.627288, 0.341232,
        0.63435, 0.418272,
        0.30938, 0.703477,
        0.62146, 0.930537,
        0.625837, 0.920792,
        0.261297, 0.938502,
        0.261275, 0.957932,
        0.259826, 0.958593,
        0.259826, 0.958593,
        0.24735, 0.941606,
        0.742351, 0.502631,
        0.749558, 0.502631,
        0.774568, 0.807961,
        0.776844, 0.827315,
        0.76633, 0.818045,
        0.776844, 0.827315,
        0.769575, 0.829382,
        0.76633, 0.818045,
        0.769575, 0.829382,
        0.759138, 0.821798,
        0.769575, 0.829382,
        0.759138, 0.821798,
        0.693825, 0.967547,
        0.681008, 0.971869,
        0.006053, 0.953519,
        0.011085, 0.957265,
        0, 0.965401,
        0.011085, 0.957265,
        0.011389, 0.961325,
        0.312542, 0.720797,
        0.309381, 0.716732,
        0.312542, 0.703477,
        0.14748, 0.561967,
        0.145566, 0.549026,
        0.14748, 0.547835,
        0.011389, 0.978723,
        0.73399, 0,
        0.750401, 0.001583,
        0.636005, 0.887228,
        0.615597, 0.882095,
        0.626598, 0.86379,
        0.615597, 0.882095,
        0.615808, 0.860507,
        0.626598, 0.86379,
        0.615864, 0.851335,
        0.626598, 0.86379,
        0.62665, 0.855525,
        0.626598, 0.86379,
        0.610273, 0.968788,
        0.622072, 0.964985,
        0.622092, 0.965304,
        0.779939, 0.825645,
        0.776844, 0.827315,
        0.781679, 0.785882,
        0.781416, 0.761481,
        0.784684, 0.76817,
        0.791169, 0.822085,
        0.791169, 0.822085,
        0.820363, 0.786776,
        0.815649, 0.813807,
        0.340503, 0.906518,
        0.340461, 0.847036,
        0.343227, 0.937676,
        0.340461, 0.847036,
        0.39148, 0.854891,
        0.39148, 0.854891,
        0.39148, 0.854891,
        0.678305, 0.935052,
        0.623302, 0.590812,
        0.761047, 0.323958,
        0.733991, 0.3003,
        0.733991, 0.3003,
        0.761842, 0.264173,
        0.733991, 0.3003,
        0.951766, 0.21879,
        0.660571, 0.502188,
        0.660909, 0.508844,
        0.641857, 0.515886,
        0.650352, 0.52191,
        0.812398, 0.461081,
        0.812398, 0.461081,
        0.81244, 0.464528,
        0.812398, 0.461081,
        0.81244, 0.464528,
        0.812537, 0.472546,
        0.81281, 0.483262,
        0.625302, 0.521072,
        0.480848, 0.838189,
        0.47666, 0.836384,
        0.480848, 0.810854,
        0.107964, 0.972119,
        0.851032, 0.228052,
        0.716117, 0.514872,
        0.70966, 0.515912,
        0.327975, 0.974946,
        0.326083, 0.974112,
        0.328163, 0.974229,
        0.328963, 0.919382,
        0.287991, 0.408664,
        0.947573, 0.750014,
        0.943141, 0.686375,
        0.946455, 0.691205,
        0.946455, 0.691205,
        0.949324, 0.761482,
        0.963375, 0.690744,
        0.453485, 0.948526,
        0.81281, 0.483262,
        0.813712, 0.500795,
        0.845757, 0.40782,
        0.836536, 0.43716,
        0.813713, 0.428139,
        0.836536, 0.43716,
        0.816381, 0.447446,
        0.859763, 0.493738,
        0.851036, 0.457165,
        0.851787, 0.456782,
        0.850148, 0.452081,
        0.851787, 0.456782,
        0.851787, 0.456782,
        0.850148, 0.452081,
        0.962946, 0.662092,
        0.962946, 0.51605,
        0.279759, 0.918529,
        0.256406, 0.882986,
        0.256406, 0.882986,
        0.279759, 0.861058,
        0.146704, 0.822138,
        0.941399, 0.801622,
        0.9414, 0.801746,
        0.934762, 0.805395,
        0.938359, 0.813607,
        0.924573, 0.82249,
        0.9009, 0.844902,
        0.907696, 0.831499,
        0.941435, 0.801607,
        0.941399, 0.801622,
        0.921889, 0.762969,
        0.937418, 0.775214,
        0.924462, 0.774664,
        0.879553, 0.771209,
        0.900708, 0.761482,
        0.890676, 0.778193,
        0.907559, 0.772228,
        0.859899, 0.805932,
        0.864096, 0.78949,
        0.8759, 0.802812,
        0.864096, 0.78949,
        0.879553, 0.771209,
        0.878342, 0.792922,
        0.878342, 0.792922,
        0.879553, 0.771209,
        0.941399, 0.801622,
        0.879719, 0.843415,
        0.8908, 0.832109,
        0.879719, 0.843415,
        0.869515, 0.835375,
        0.88952, 0.831476,
        0.889519, 0.83129,
        0.879719, 0.843415,
        0.92663, 0.776439,
        0.941399, 0.801622,
        0.122656, 0.942623,
        0.108884, 0.948094,
        0.108884, 0.948094,
        0.108884, 0.948094,
        0.541636, 0.631937,
        0.623269, 0.548387,
        0.623269, 0.548387,
        0.623269, 0.689023,
        0.623269, 0.689023,
        0.544344, 0.65285,
        0.554052, 0.671855,
        0.554052, 0.671855,
        0.965782, 0.97522,
        0.943141, 0.978431,
        0.63542, 0.851336,
        0.631004, 0.840929,
        0.623493, 0.790585,
        0.636813, 0.830023,
        0.628559, 0.774789,
        0.636813, 0.769965,
        0.636813, 0.830023,
        0.795742, 0.952207,
        0.7979, 0.951294,
        0.655039, 0.919931,
        0.321191, 0.82895,
        0.321191, 0.82895,
        0.071179, 0.984192,
        0.886792, 0.061841,
        0.817327, 0.061796,
        0.677671, 0.462475,
        0.676117, 0.475968,
        0.679463, 0.460258,
        0.676117, 0.475968,
        0.679463, 0.52335,
        0.673486, 0.526935,
        0.676561, 0.507452,
        0.676561, 0.507452,
        0.85448, 0.880075,
        0.882306, 0.970581,
        0.886797, 0.956166,
        0.889376, 0.958313,
        0.256406, 0.882986,
        0.874805, 0.960675,
        0.87878, 0.958189,
        0.87878, 0.958189,
        0.882306, 0.956165,
        0.054118, 0.944368,
        0.625443, 0.603498,
        0.651089, 0.639667,
        0.625443, 0.603498,
        0.646757, 0.625989,
        0.625443, 0.603498,
        0.64786, 0.632471,
        0.646757, 0.625989,
        0.64786, 0.632471,
        0.625443, 0.603498,
        0.660044, 0.39291,
        0.660044, 0.39291,
        0.66131, 0.394345,
        0.669098, 0.425611,
        0.627288, 0.341232,
        0.651261, 0.342054,
        0.627288, 0.341232,
        0.627288, 0.341232,
        0.747326, 0.935523,
        0.313676, 0.475254,
        0.313676, 0.504579,
        0.310478, 0.495218,
        0.749226, 0.343054,
        0.480404, 0.571173,
        0.481318, 0.560196,
        0.481318, 0.581552,
        0.780669, 0.951834,
        0.789313, 0.951294,
        0.777902, 0.968107,
        0.789313, 0.983705,
        0.77876, 0.984488,
        0.874805, 0.975682,
        0.101714, 0.56032,
        0.107964, 0.583073,
        0.092572, 0.560408,
        0.092572, 0.560408,
        0.101703, 0.737768,
        0.826388, 0.6355,
        0.895728, 0.635668,
        0.716568, 0.945538,
        0.727524, 0.935023,
        0.727524, 0.935023,
        0.727524, 0.935023,
        0.716568, 0.945538,
        0.727524, 0.935023,
        0.122991, 0.883215,
        0.117257, 0.868999,
        0.117257, 0.548029,
        0.974979, 0.6668,
        0.973872, 0.666025,
        0.9807, 0.516342,
        0.295695, 0.531708,
        0.295695, 0.527501,
        0.628238, 0.546034,
        0.50004, 0.951217,
        0.50004, 0.951217,
        0.499181, 0.951948,
        0.49189, 0.958507,
        0.481436, 0.953178,
        0.481436, 0.953178,
        0.491351, 0.924592,
        0.491351, 0.924592,
        0.497597, 0.919405,
        0.491351, 0.924592,
        0.958965, 0.24971,
        0.963405, 0.240528,
        0.985858, 0.249838,
        0.963405, 0.240528,
        0.997032, 0.237537,
        0.995032, 0.238905,
        0.963405, 0.240528,
        0.995032, 0.238905,
        0.642204, 0.815859,
        0.642669, 0.804275,
        0.647264, 0.803344,
        0.645657, 0.828024,
        0.644631, 0.845855,
        0.650378, 0.820639,
        0.645657, 0.828024,
        0.978394, 0.2724,
        0.962385, 0.269419,
        0.966293, 0.27236,
        0.655039, 0.821773,
        0.978394, 0.2724,
        0.997032, 0.406698,
        0.971425, 0.290337,
        0.134653, 0.560375,
        0.137323, 0.658391,
        0.978394, 0.2724,
        0.138034, 0.548179,
        0.145566, 0.547835,
        0.971425, 0.290337,
        0.978394, 0.2724,
        0.966422, 0.313465,
        0.971425, 0.290337,
        0.145566, 0.668013,
        0.628239, 0.541117,
        0.607484, 0.53641,
        0.777901, 0.951294,
        0.777901, 0.987348,
        0.77286, 0.989799,
        0.791185, 0.40275,
        0.318185, 0.861094,
        0.320163, 0.959683,
        0.318185, 0.96239,
        0.10483, 0.910055,
        0.092572, 0.560408,
        0.092572, 0.560408,
        0.107088, 0.757,
        0.858347, 0.946543,
        0.859493, 0.987052,
        0.050675, 0.930511,
        0.374834, 0.896986,
        0.647634, 0.794484,
        0.644104, 0.792411,
        0.644104, 0.792411,
        0.638647, 0.785617,
        0.642166, 0.769661,
        0.215218, 0.860975,
        0.943141, 0.894092,
        0.943141, 0.894092,
        0.883717, 0.888005,
        0.908378, 0.838317,
        0.943141, 0.894092,
        0.868476, 0.873971,
        0.098129, 0.933834,
        0.107088, 0.934055,
        0.09259, 0.909775,
        0.092582, 0.779221,
        0.092582, 0.779221,
        0.098107, 0.756798,
        0.100451, 0.979996,
        0.094613, 0.936115,
        0.107089, 0.981909,
        0.098346, 0.934055,
        0.836536, 0.43716,
        0.835285, 0.453124,
        0.835285, 0.453124,
        0.845757, 0.462107,
        0.835285, 0.453124,
        0.817614, 0.490393,
        0.370013, 0.836691,
        0.395057, 0.847036,
        0.340461, 0.7925,
        0.340461, 0.765402,
        0.350801, 0.740347,
        0.394976, 0.710784,
        0.422063, 0.710784,
        0.466267, 0.740297,
        0.447108, 0.721129,
        0.47666, 0.76532,
        0.466319, 0.817472,
        0.447159, 0.836639,
        0.422145, 0.847036,
        0.460434, 0.872849,
        0.845621, 0.924045,
        0.849107, 0.941467,
        0.937366, 0.754292,
        0.615864, 0.851335,
        0.615808, 0.860507,
        0.561617, 0.859264,
        0.813712, 0.40782,
        0.020383, 0.756798,
        0.016368, 0.974608,
        0.011389, 0.955639,
        0.021838, 0.953519,
        0.816191, 0.5048,
        0.817614, 0.490393,
        0.817614, 0.490393,
        0.791169, 0.822085,
        0.646658, 0.860515,
        0.68065, 0.340571,
        0.68065, 0.460258,
        0.672002, 0.434951,
        0.092423, 0.91937,
        0.088624, 0.917914,
        0.092423, 0.895733,
        0.638657, 0.804931,
        0.638657, 0.804931,
        0.782649, 0.241157,
        0.304181, 0.536133,
        0.736373, 0.970593,
        0.731484, 0.899771,
        0.731484, 0.919287,
        0.731484, 0.803757,
        0.731484, 0.84417,
        0.480912, 0.746324,
        0.8927, 0.51222,
        0.21323, 0.933908,
        0.977631, 0.914459,
        0.983167, 0.938519,
        0.769575, 0.829382,
        0.769575, 0.829382,
        0.776844, 0.827315,
        0.776844, 0.827315,
        0.594843, 0.935005,
        0.565934, 0.849325,
        0.051115, 0.895856,
        0.084806, 0.945756,
        0.071179, 0.962692,
        0.661154, 0.743139,
        0.67416, 0.752577,
        0.661154, 0.743139,
        0.653097, 0.754446,
        0.661154, 0.743139,
        0.923083, 0.658448,
        0.948579, 0.596914,
        0.948579, 0.596914,
        0.948579, 0.596914,
        0.962946, 0.515912,
        0.942643, 0.666076,
        0.923083, 0.658448,
        0.962946, 0.603821,
        0.948579, 0.596914,
        0.016566, 0.895733,
        0.025923, 0.903469,
        0.914411, 0.5602,
        0.114308, 0.545738,
        0.147573, 0.535906,
        0.133525, 0.543957,
        0.147528, 0.536511,
        0.146496, 0.350502,
        0.147573, 0.352543,
        0.134491, 0.346894,
        0.114108, 0.340595,
        0.093073, 0.547835,
        0.092873, 0.342692,
        0.073656, 0.344473,
        0.07269, 0.541537,
        0.054221, 0.535952,
        0.054541, 0.354693,
        0.037778, 0.363551,
        0.037548, 0.522119,
        0.022904, 0.510091,
        0.025744, 0.378204,
        0.011904, 0.39489,
        0.01406, 0.49333,
        0.003852, 0.474217,
        0.313763, 0.5552,
        0.313364, 0.554704,
        0.313763, 0.540226,
        0.944124, 0.786539,
        0.977631, 0.914459,
        0.947088, 0.844927,
        0.977631, 0.914459,
        0.943141, 0.855043,
        0.977631, 0.914459,
        0.943141, 0.855043,
        0.174201, 0.690496,
        0.189362, 0.660977,
        0.190441, 0.715616,
        0.1754, 0.705568,
        0.176538, 0.700635,
        0.199761, 0.666553,
        0.217, 0.720926,
        0.222784, 0.671132,
        0.266091, 0.700596,
        0.243558, 0.715634,
        0.245806, 0.666569,
        0.286427, 0.651484,
        0.281129, 0.678056,
        0.678828, 0.800389,
        0.678349, 0.798941,
        0.74455, 0.361095,
        0.763476, 0.384346,
        0.770884, 0.392286,
        0.74998, 0.378516,
        0.953224, 0.443657,
        0.957143, 0.441244,
        0.957143, 0.462441,
        0.755769, 0.379906,
        0.291072, 0.475254,
        0.302203, 0.461315,
        0.313622, 0.453938,
        0, 0.204267,
        0.042952, 0.16868,
        0.025934, 0.266852,
        0.052167, 0.217917,
        0.204133, 0.340577,
        0.136422, 0.340595,
        0.314586, 0.266677,
        0.266707, 0.314619,
        0.261158, 0.259379,
        0.217794, 0.288392,
        0.733837, 0.902088,
        0.753093, 0.804747,
        0.817327, 0.061796,
        0.886792, 0.061841,
        0.798604, 0.056938,
        0.801688, 0.05755,
        0.798633, 0.071247,
        0.804134, 0.070494,
        0.817265, 0.002649,
        0.815911, 0.05661,
        0.795476, 0.003016,
        0.815911, 0.05661,
        0.789408, 0.079557,
        0.782968, 0.090717,
        0.763337, 0.074797,
        0.770952, 0.097258,
        0.812684, 0.205917,
        0.817265, 0.237537,
        0.44046, 0.961182,
        0.989219, 0.147083,
        0.96609, 0.147165,
        0.987874, 0.112655,
        0.987874, 0.112655,
        0.987874, 0.112655,
        0.987833, 0.112558,
        0.987833, 0.112558,
        0.685592, 0.155073,
        0.680846, 0.176278,
        0.70273, 0.001731,
        0.712107, 0.174546,
        0.712649, 0.153574,
        0.817448, 0.945812,
        0.817448, 0.945812,
        0.560522, 0.968284,
        0.569742, 0.957141,
        0.579198, 0.970869,
        0.581634, 0.982555,
        0.560522, 0.968284,
        0.125118, 0.973701,
        0.130219, 0.983388,
        0.118608, 0.984413,
        0.125118, 0.973701,
        0.824755, 0.236901,
        0.817265, 0.226464,
        0.827526, 0.219797,
        0.651278, 0.758267,
        0.653097, 0.754446,
        0.301428, 0.52712,
        0.289597, 0.502362,
        0.678828, 0.768649,
        0.310478, 0.526503,
        0.313325, 0.522148,
        0.313325, 0.533638,
        0.307119, 0.475254,
        0.953224, 0.515303,
        0.918476, 0.416916,
        0.9389, 0.416923,
        0.942695, 0,
        0.964239, 0.00009,
        0.964239, 0.138996,
        0.811694, 0.975117,
        0.799822, 0.972071,
        0.856138, 0.903336,
        0.480584, 0.412132,
        0.913741, 0.758297,
        0.913732, 0.752271,
        0.913732, 0.752271,
        0.916282, 0.742348,
        0.928159, 0.740718,
        0.7342, 0.512811,
        0.629512, 0.764899,
        0.626439, 0.76226,
        0.757119, 0.980249,
        0.756605, 0.952079,
        0.758965, 0.951294,
        0.441803, 0.975388,
        0.441291, 0.975414,
        0.44046, 0.961182,
        0.427425, 0.968332,
        0.44046, 0.961182,
        0.605895, 0.344967,
        0.606558, 0.34981,
        0.578842, 0.347221,
        0.606193, 0.344174,
        0.578397, 0.340572,
        0.539148, 0.351153,
        0.486675, 0.411171,
        0.506953, 0.375954,
        0.524867, 0.368038,
        0.481592, 0.452055,
        0.481436, 0.451477,
        0.481682, 0.451952,
        0.488817, 0.430954,
        0.481625, 0.45218,
        0.552008, 0.543163,
        0.516795, 0.522901,
        0.603967, 0.545247,
        0.592315, 0.548388,
        0.606558, 0.53921,
        0.134653, 0.872349,
        0.134659, 0.828463,
        0.441803, 0.992711,
        0.624127, 0.712872,
        0.963026, 0.421248,
        0.96321, 0.421197,
        0.979047, 0.462935,
        0.979044, 0.412401,
        0.983289, 0.468922,
        0.983289, 0.406697,
        0.958965, 0.419369,
        0.973262, 0.508615,
        0.826387, 0.761424,
        0.917013, 0.418765,
        0.906693, 0.404988,
        0.918477, 0.415308,
        0.913571, 0.399873,
        0.918177, 0.384781,
        0.918477, 0.446007,
        0.909624, 0.423283,
        0.879149, 0.345057,
        0.847096, 0.26278,
        0.891752, 0.343879,
        0.560522, 0.851335,
        0.560522, 0.966408,
        0.549929, 0.897867,
        0.560522, 0.966408,
        0.823393, 0.57182,
        0.91721, 0.522379,
        0.948579, 0.596914,
        0.892122, 0.446008,
        0.892122, 0.507467,
        0.626221, 0.579803,
        0.623302, 0.590812,
        0.639757, 0.558228,
        0.477895, 0.945196,
        0.06905, 0.943923,
        0.418976, 0.955282,
        0.260496, 0.930976,
        0.258223, 0.938502,
        0.711994, 0.935332,
        0.708306, 0.952308,
        0.050675, 0.930511,
        0.68184, 0.750749
    ]);
    // prettier-ignore
    let index_arr = Uint16Array.from([
        1983, 1982, 1981,
        1938, 1937, 1935,
        1936, 1935, 1934,
        1911, 1910, 1909,
        1899, 1898, 1897,
        1844, 1843, 1842,
        1815, 1814, 1813,
        1751, 1750, 1749,
        1748, 1747, 1746,
        1740, 1739, 1738,
        1735, 1734, 1733,
        1659, 1669, 1668,
        1660, 1659, 1658,
        1644, 1643, 1642,
        1667, 1656, 1666,
        1641, 1646, 1645,
        1656, 1663, 1639,
        1656, 1639, 1655,
        1654, 1641, 1639,
        1641, 1640, 1639,
        1603, 1605, 1604,
        1603, 1604, 1602,
        1603, 1602, 1601,
        1600, 1599, 1598,
        1596, 1595, 1594,
        1584, 1583, 1582,
        1569, 1568, 1567,
        1516, 1515, 1514,
        1514, 1513, 1516,
        1513, 1512, 1511,
        1478, 1477, 1476,
        1457, 1456, 1455,
        1418, 1417, 1416,
        1415, 1414, 1412,
        1413, 1412, 1410,
        1411, 1410, 1409,
        1408, 1407, 1406,
        1402, 1401, 1400,
        1399, 1398, 1397,
        1396, 1394, 1403,
        1394, 1396, 1395,
        1394, 1393, 1392,
        1385, 1384, 1383,
        1375, 1374, 1373,
        1341, 1340, 1339,
        1338, 1337, 1336,
        1328, 1327, 1326,
        1322, 1321, 1320,
        1318, 1297, 1317,
        1318, 1296, 1297,
        1298, 1297, 1296,
        1167, 1166, 1165,
        1129, 1131, 1130,
        1129, 1128, 1127,
        1097, 1096, 1095,
        1094, 1093, 1092,
        1091, 1090, 1089,
        1087, 1086, 1085,
        1081, 1080, 1078,
        1079, 1078, 1077,
        1062, 1061, 1060,
        1064, 1063, 1056,
        1056, 1059, 1058,
        1058, 1057, 1056,
        1041, 1040, 1038,
        1039, 1038, 1037,
        891, 894, 893,
        891, 890, 889,
        1980, 1979, 1978,
        1971, 1977, 1976,
        1971, 1976, 1973,
        1973, 1974, 1972,
        1973, 1972, 1971,
        1973, 1975, 1974,
        1975, 1973, 826,
        1980, 826, 1979,
        826, 1980, 825,
        824, 1975, 826,
        826, 825, 824,
        823, 821, 874,
        823, 822, 821,
        819, 1970, 818,
        820, 819, 818,
        1966, 1967, 1965,
        1966, 1965, 1964,
        817, 1969, 816,
        816, 1966, 1964,
        816, 1964, 815,
        815, 1968, 817,
        815, 1962, 1968,
        815, 1963, 1962,
        817, 816, 815,
        813, 1961, 812,
        814, 813, 812,
        1943, 1939, 1942,
        1943, 1941, 1939,
        1941, 1940, 1939,
        1941, 1943, 1944,
        1947, 1941, 1944,
        1947, 1944, 1946,
        1947, 1946, 1945,
        1950, 1949, 1948,
        1951, 1947, 1945,
        1951, 1949, 1950,
        1951, 1945, 1949,
        1957, 1956, 1955,
        1957, 1953, 1956,
        1953, 1957, 808,
        808, 809, 1954,
        808, 1954, 1953,
        1951, 1950, 807,
        807, 1950, 1952,
        807, 1952, 809,
        809, 808, 807,
        1933, 1932, 804,
        804, 1931, 803,
        804, 802, 1933,
        804, 803, 802,
        799, 1930, 1929,
        799, 1929, 801,
        801, 800, 799,
        797, 1928, 796,
        798, 797, 796,
        1924, 1923, 794,
        793, 1927, 1926,
        793, 1926, 1925,
        795, 794, 793,
        788, 1921, 787,
        789, 788, 787,
        786, 1920, 1919,
        786, 784, 1920,
        786, 785, 784,
        781, 1913, 780,
        779, 1915, 1914,
        779, 1914, 781,
        781, 780, 779,
        778, 1912, 777,
        777, 1907, 1906,
        777, 1906, 776,
        778, 777, 776,
        775, 1903, 1902,
        775, 1902, 1901,
        775, 774, 773,
        1995, 750, 751,
        806, 750, 805,
        750, 1877, 749,
        751, 750, 749,
        1837, 919, 1836,
        731, 919, 1837,
        731, 729, 919,
        920, 919, 729,
        731, 730, 729,
        1798, 1797, 1796,
        1801, 1798, 1799,
        1798, 1796, 1799,
        1805, 1801, 1802,
        1801, 1799, 1802,
        1809, 1805, 1806,
        1805, 1802, 1806,
        1809, 1806, 1810,
        1794, 1795, 1793,
        1800, 1794, 1792,
        1794, 1793, 1792,
        1804, 1800, 1803,
        1800, 1792, 1803,
        1808, 1804, 1807,
        1804, 1803, 1807,
        1812, 1808, 1811,
        1808, 1807, 1811,
        722, 1812, 721,
        1812, 1811, 721,
        720, 1810, 722,
        720, 1809, 1810,
        722, 721, 720,
        718, 1790, 1789,
        718, 716, 1790,
        718, 717, 716,
        694, 693, 692,
        1820, 691, 1819,
        690, 1765, 1764,
        691, 690, 689,
        687, 1763, 686,
        688, 687, 686,
        679, 1761, 678,
        680, 679, 678,
        1649, 1652, 1657,
        1647, 1648, 1753,
        1652, 1649, 1647,
        1647, 1653, 1652,
        1649, 1648, 1647,
        1647, 1651, 1650,
        1647, 1752, 666,
        666, 667, 1651,
        666, 1651, 1647,
        665, 1745, 667,
        667, 666, 665,
        658, 657, 656,
        644, 1732, 646,
        646, 645, 644,
        1717, 1728, 1727,
        643, 1717, 1727,
        1727, 1726, 643,
        643, 1725, 1723,
        1723, 1724, 1722,
        1723, 1722, 643,
        643, 1722, 642,
        1722, 1721, 642,
        1720, 1719, 642,
        1717, 643, 641,
        642, 1719, 641,
        1719, 1718, 641,
        1717, 641, 1716,
        643, 642, 641,
        1700, 1701, 1680,
        631, 1705, 1704,
        1683, 631, 1680,
        629, 1703, 1702,
        629, 1702, 1700,
        1700, 1680, 629,
        631, 629, 1680,
        631, 630, 629,
        622, 1692, 621,
        620, 621, 1691,
        620, 1691, 1690,
        1689, 1688, 620,
        622, 621, 620,
        609, 1685, 608,
        608, 1684, 610,
        610, 609, 608,
        599, 1675, 1674,
        599, 1674, 1673,
        601, 600, 599,
        598, 1672, 597,
        596, 597, 1671,
        598, 597, 596,
        1670, 1665, 593,
        1665, 1664, 593,
        1662, 593, 1661,
        592, 593, 1662,
        593, 591, 1670,
        593, 592, 591,
        586, 1628, 585,
        587, 586, 585,
        582, 1627, 584,
        583, 1626, 582,
        584, 583, 582,
        581, 580, 579,
        684, 1762, 683,
        685, 684, 683,
        684, 685, 766,
        569, 684, 766,
        569, 766, 568,
        570, 569, 568,
        564, 563, 561,
        563, 560, 561,
        560, 1613, 1612,
        561, 560, 559,
        552, 1606, 551,
        553, 552, 551,
        550, 549, 548,
        1581, 1580, 1577,
        1577, 1576, 538,
        538, 536, 1577,
        538, 537, 536,
        534, 1575, 533,
        535, 534, 533,
        532, 1574, 1573,
        532, 1572, 1571,
        532, 530, 1574,
        532, 531, 530,
        526, 525, 524,
        1564, 1563, 1562,
        1561, 1560, 1558,
        1565, 519, 1563,
        1559, 1558, 519,
        521, 520, 519,
        1557, 1556, 516,
        518, 517, 516,
        514, 1555, 513,
        515, 514, 513,
        506, 1551, 1550,
        506, 504, 1551,
        506, 505, 504,
        1548, 1545, 1549,
        1548, 1547, 1545,
        1546, 1545, 503,
        503, 1544, 502,
        1544, 1543, 502,
        503, 502, 501,
        499, 1542, 1541,
        500, 499, 498,
        1697, 1699, 1696,
        1697, 1696, 1695,
        1524, 1523, 1522,
        1521, 1524, 1526,
        1521, 1525, 1524,
        1521, 1520, 1500,
        1521, 1500, 1501,
        1697, 1698, 626,
        626, 1694, 628,
        1501, 1500, 626,
        628, 627, 626,
        1499, 1501, 626,
        1499, 626, 627,
        1499, 627, 1498,
        1499, 1498, 1497,
        1497, 1498, 1496,
        1497, 1496, 1495,
        1518, 1517, 1509,
        1508, 1509, 1510,
        1509, 1508, 1507,
        1504, 1510, 1506,
        1510, 1504, 1508,
        1505, 1506, 1527,
        1506, 1505, 1504,
        1503, 1502, 490,
        1505, 1527, 489,
        489, 490, 1505,
        488, 1497, 1528,
        488, 1519, 490,
        490, 489, 488,
        487, 810, 1959,
        487, 1959, 1958,
        486, 1494, 485,
        487, 485, 810,
        487, 486, 485,
        1624, 1623, 578,
        578, 577, 576,
        578, 479, 1624,
        578, 1625, 478,
        578, 478, 479,
        478, 1489, 1488,
        479, 478, 477,
        836, 1989, 1988,
        613, 612, 611,
        612, 1482, 611,
        1482, 612, 1481,
        476, 1485, 1482,
        476, 1482, 1481,
        836, 1988, 475,
        475, 1487, 1486,
        476, 837, 475,
        475, 837, 836,
        476, 475, 474,
        661, 1742, 1741,
        662, 661, 660,
        660, 635, 1743,
        634, 1713, 1712,
        636, 1715, 635,
        636, 635, 634,
        634, 1714, 1480,
        1711, 1710, 1480,
        634, 1480, 636,
        471, 1480, 1479,
        473, 472, 471,
        811, 1960, 468,
        467, 1473, 466,
        466, 811, 468,
        468, 467, 466,
        1464, 1463, 1462,
        460, 1463, 1464,
        460, 461, 1463,
        459, 1465, 461,
        461, 460, 459,
        457, 1461, 1460,
        458, 457, 456,
        452, 1459, 451,
        452, 451, 450,
        439, 1442, 441,
        441, 440, 439,
        1423, 1422, 1421,
        1424, 1380, 1419,
        1380, 1420, 1419,
        1382, 1381, 1380,
        431, 1423, 1421,
        431, 1380, 1425,
        431, 1421, 1380,
        429, 1427, 1426,
        429, 1426, 431,
        431, 430, 429,
        428, 427, 426,
        422, 421, 420,
        416, 1389, 1388,
        417, 416, 415,
        1379, 1378, 414,
        414, 412, 1379,
        414, 413, 412,
        411, 410, 409,
        408, 1370, 407,
        408, 407, 406,
        1847, 735, 1846,
        736, 735, 734,
        1848, 637, 735,
        638, 735, 637,
        712, 711, 405,
        711, 404, 405,
        404, 638, 403,
        403, 638, 637,
        405, 404, 403,
        1363, 1362, 402,
        1362, 1454, 1445,
        1445, 402, 1362,
        1445, 1446, 1444,
        1445, 1444, 1443,
        444, 1445, 1443,
        442, 402, 1445,
        444, 442, 1445,
        444, 443, 442,
        539, 1587, 1586,
        541, 1590, 1589,
        539, 1585, 541,
        876, 875, 541,
        442, 540, 402,
        540, 442, 1588,
        540, 1588, 539,
        541, 540, 539,
        541, 1369, 540,
        541, 1592, 1369,
        1591, 401, 1369,
        401, 402, 540,
        401, 540, 1369,
        401, 1368, 1367,
        401, 1367, 1366,
        402, 401, 400,
        1622, 1621, 573,
        575, 574, 573,
        395, 1359, 1358,
        395, 1358, 575,
        573, 1620, 394,
        573, 394, 575,
        395, 575, 394,
        394, 1357, 1356,
        394, 1356, 396,
        396, 395, 394,
        1010, 1000, 1009,
        1004, 1001, 1000,
        1003, 1002, 1001,
        829, 828, 827,
        829, 393, 1984,
        393, 1355, 392,
        1001, 392, 1000,
        392, 1001, 391,
        391, 1354, 393,
        393, 392, 391,
        1353, 1352, 390,
        390, 388, 1353,
        390, 389, 388,
        835, 387, 834,
        554, 555, 2001,
        864, 554, 863,
        554, 1351, 386,
        555, 554, 386,
        387, 385, 834,
        386, 1351, 385,
        387, 386, 385,
        382, 1348, 1347,
        384, 383, 382,
        492, 595, 594,
        494, 492, 1532,
        494, 493, 492,
        1530, 1529, 494,
        1531, 772, 1529,
        1458, 771, 772,
        772, 771, 770,
        1900, 1331, 772,
        1331, 1529, 772,
        1330, 1329, 375,
        1332, 374, 1331,
        376, 375, 374,
        371, 1325, 1324,
        371, 1324, 1323,
        373, 372, 371,
        1609, 1608, 1607,
        1610, 558, 1608,
        606, 1737, 655,
        556, 1611, 558,
        556, 606, 655,
        558, 557, 556,
        607, 556, 1682,
        607, 606, 556,
        607, 1681, 370,
        370, 369, 368,
        1315, 1314, 1313,
        1315, 1313, 360,
        360, 1313, 362,
        362, 361, 360,
        1310, 1311, 1309,
        358, 359, 1310,
        1310, 1309, 358,
        357, 1312, 359,
        359, 358, 357,
        1306, 1305, 356,
        355, 1308, 1307,
        356, 355, 354,
        840, 839, 838,
        839, 351, 838,
        1304, 838, 351,
        353, 352, 351,
        367, 366, 365,
        523, 1566, 1316,
        366, 523, 1316,
        366, 1319, 1188,
        366, 1188, 523,
        522, 523, 1188,
        1387, 423, 1386,
        1115, 423, 1114,
        425, 424, 423,
        363, 1768, 1767,
        363, 1766, 425,
        425, 364, 363,
        363, 455, 1769,
        363, 454, 455,
        455, 454, 453,
        454, 664, 1744,
        1190, 522, 1188,
        1191, 664, 1190,
        1190, 1189, 522,
        663, 454, 363,
        663, 1189, 1190,
        663, 1190, 664,
        664, 454, 663,
        363, 342, 663,
        342, 522, 1189,
        342, 1189, 663,
        341, 342, 363,
        364, 341, 363,
        523, 340, 1566,
        342, 340, 522,
        523, 522, 340,
        342, 341, 340,
        338, 1293, 337,
        339, 338, 337,
        1289, 1288, 334,
        333, 1291, 1290,
        334, 333, 332,
        328, 327, 326,
        325, 324, 323,
        321, 1282, 320,
        322, 321, 320,
        1281, 1280, 1278,
        1279, 1278, 319,
        319, 1277, 1276,
        319, 1275, 318,
        319, 318, 317,
        1361, 1360, 397,
        399, 398, 397,
        399, 1435, 435,
        435, 1391, 1390,
        436, 1999, 1998,
        435, 1390, 436,
        399, 436, 860,
        436, 399, 435,
        1272, 436, 314,
        313, 314, 1271,
        1273, 314, 312,
        314, 313, 312,
        311, 1270, 1269,
        1269, 1268, 311,
        705, 704, 703,
        705, 1774, 310,
        310, 1773, 705,
        311, 310, 309,
        1263, 1265, 1264,
        1263, 1262, 1261,
        1266, 308, 1263,
        306, 1267, 308,
        308, 307, 306,
        604, 605, 1677,
        304, 1679, 1678,
        304, 1678, 605,
        605, 604, 304,
        304, 604, 303,
        305, 304, 303,
        1880, 1879, 1878,
        1883, 848, 1882,
        1881, 848, 1879,
        1884, 755, 848,
        757, 756, 755,
        848, 755, 847,
        755, 647, 847,
        648, 847, 647,
        295, 648, 294,
        294, 648, 647,
        296, 295, 294,
        292, 1254, 291,
        293, 292, 291,
        632, 1709, 1707,
        1708, 286, 1706,
        632, 1707, 286,
        1706, 286, 287,
        286, 633, 632,
        288, 287, 286,
        763, 762, 761,
        1891, 761, 1730,
        1731, 1730, 761,
        1890, 1730, 447,
        448, 491, 447,
        449, 448, 447,
        659, 1248, 284,
        449, 447, 284,
        447, 659, 284,
        284, 1248, 283,
        285, 284, 283,
        1241, 1240, 1239,
        1241, 1243, 1240,
        1243, 1242, 1240,
        1245, 1242, 1243,
        1245, 1244, 1242,
        1244, 1245, 1247,
        1244, 1247, 1246,
        727, 1246, 726,
        1247, 726, 1246,
        728, 1834, 727,
        728, 727, 726,
        728, 1835, 1834,
        1833, 1835, 728,
        1833, 1831, 1835,
        1833, 1832, 1831,
        1830, 1832, 1833,
        1830, 1829, 1832,
        1830, 1825, 1829,
        1828, 1825, 1830,
        1828, 1827, 1825,
        1827, 1826, 1825,
        1828, 1824, 1823,
        1828, 1823, 1827,
        1824, 1225, 1226,
        1824, 1226, 1823,
        1229, 1228, 1227,
        1227, 1226, 1224,
        1226, 1225, 1224,
        1231, 1229, 1227,
        1231, 1227, 1224,
        1231, 1224, 1230,
        1230, 1232, 1231,
        1232, 1230, 1234,
        1234, 1233, 1232,
        1233, 1234, 1236,
        1236, 1235, 1233,
        1235, 1236, 1238,
        1238, 1237, 1235,
        280, 1237, 1238,
        280, 281, 1237,
        1241, 1239, 279,
        279, 1239, 281,
        281, 280, 279,
        697, 1217, 1770,
        1219, 1218, 1217,
        278, 1221, 1220,
        278, 1215, 1214,
        277, 278, 1223,
        277, 1223, 1222,
        277, 1219, 1217,
        697, 276, 1217,
        277, 1217, 276,
        278, 276, 1216,
        697, 696, 276,
        278, 277, 276,
        274, 1213, 1212,
        275, 274, 273,
        1469, 1468, 1467,
        463, 1470, 1467,
        465, 1472, 464,
        463, 1467, 465,
        465, 464, 463,
        465, 1210, 1472,
        465, 272, 1210,
        465, 1471, 272,
        270, 1211, 1210,
        270, 1210, 272,
        272, 271, 270,
        1432, 1431, 619,
        1429, 1428, 619,
        619, 618, 617,
        617, 1687, 433,
        617, 433, 619,
        1433, 619, 433,
        745, 433, 744,
        434, 433, 432,
        1205, 1204, 1203,
        432, 1206, 1434,
        432, 1430, 1206,
        1430, 1205, 1206,
        1203, 1206, 1205,
        1206, 1203, 269,
        269, 1207, 1206,
        268, 1209, 1208,
        269, 268, 267,
        302, 301, 300,
        300, 1201, 1202,
        300, 1202, 302,
        266, 1202, 1201,
        510, 1553, 512,
        512, 511, 510,
        510, 265, 1554,
        510, 264, 265,
        266, 264, 1202,
        266, 265, 264,
        1895, 1894, 768,
        769, 768, 767,
        768, 1893, 1896,
        1893, 1200, 263,
        1893, 263, 1892,
        263, 1200, 262,
        262, 1199, 261,
        263, 262, 261,
        1194, 1193, 1192,
        257, 1196, 256,
        1196, 1195, 256,
        255, 1192, 257,
        255, 1194, 1192,
        257, 256, 255,
        254, 253, 252,
        1484, 249, 1483,
        251, 250, 249,
        243, 1185, 1184,
        243, 241, 1186,
        241, 1183, 1182,
        243, 242, 241,
        1859, 1757, 1758,
        1758, 1757, 676,
        740, 741, 1859,
        740, 1859, 1758,
        740, 1860, 742,
        742, 741, 740,
        742, 1860, 1759,
        742, 1759, 1760,
        675, 1760, 1759,
        677, 1758, 676,
        677, 676, 675,
        509, 1552, 236,
        237, 509, 236,
        677, 675, 235,
        675, 1759, 235,
        236, 677, 235,
        237, 236, 235,
        298, 1257, 297,
        1257, 1256, 297,
        299, 297, 1260,
        1260, 1259, 299,
        299, 1258, 298,
        299, 298, 297,
        229, 299, 1170,
        229, 1169, 1168,
        229, 1168, 231,
        231, 230, 229,
        616, 1994, 649,
        616, 854, 853,
        615, 650, 846,
        615, 616, 649,
        702, 615, 846,
        702, 701, 615,
        650, 615, 649,
        616, 615, 614,
        861, 2000, 223,
        1772, 223, 615,
        615, 223, 1686,
        224, 862, 223,
        862, 861, 223,
        225, 224, 223,
        222, 221, 220,
        714, 1786, 1785,
        714, 1785, 1364,
        1365, 714, 1364,
        715, 714, 713,
        714, 1784, 1788,
        714, 1787, 1784,
        1784, 832, 1783,
        833, 1987, 832,
        832, 1986, 719,
        719, 833, 832,
        216, 833, 719,
        1782, 833, 216,
        1781, 216, 1780,
        216, 1155, 1154,
        719, 1791, 215,
        215, 216, 719,
        216, 214, 1155,
        216, 215, 214,
        1136, 1135, 1134,
        1140, 1139, 1137,
        1136, 1134, 1138,
        1138, 1140, 1137,
        1138, 1137, 1136,
        1140, 1138, 1142,
        1146, 1145, 1144,
        1144, 1143, 1141,
        1141, 1143, 1142,
        1142, 1138, 1141,
        213, 1147, 1146,
        213, 1146, 1144,
        1144, 1141, 213,
        1153, 1152, 1150,
        1151, 1153, 1150,
        1151, 1150, 1149,
        1151, 1149, 212,
        212, 1149, 1148,
        212, 1148, 211,
        213, 211, 1147,
        213, 212, 211,
        336, 335, 210,
        1292, 209, 210,
        208, 1132, 210,
        210, 209, 208,
        203, 204, 1985,
        203, 1126, 1125,
        831, 203, 830,
        204, 203, 202,
        1122, 1118, 200,
        1118, 1117, 200,
        1124, 199, 1123,
        199, 1121, 1120,
        199, 1120, 1119,
        201, 200, 199,
        1869, 1868, 1867,
        1865, 1866, 1864,
        1869, 1863, 1870,
        1865, 1864, 1863,
        748, 1876, 1875,
        748, 1875, 747,
        748, 747, 746,
        746, 1874, 748,
        1874, 746, 1872,
        1872, 1873, 1874,
        1873, 1872, 1871,
        1863, 1869, 566,
        1873, 1871, 566,
        566, 1871, 1865,
        566, 1865, 1863,
        1869, 565, 566,
        1116, 1405, 1404,
        566, 567, 1873,
        567, 565, 1405,
        1113, 1112, 567,
        567, 566, 565,
        197, 1113, 567,
        567, 1405, 196,
        1116, 196, 1405,
        198, 196, 1116,
        197, 567, 196,
        198, 197, 196,
        1098, 381, 380,
        849, 845, 381,
        1103, 1102, 1101,
        1099, 1103, 1101,
        1099, 1100, 1103,
        1100, 1099, 381,
        1099, 1101, 1104,
        1101, 1105, 1104,
        1109, 1099, 1104,
        1109, 1104, 1108,
        1108, 1107, 1106,
        1108, 1106, 195,
        194, 195, 1111,
        194, 1111, 1110,
        193, 194, 380,
        1109, 1108, 193,
        193, 1108, 195,
        845, 193, 381,
        381, 193, 380,
        195, 194, 193,
        1070, 1066, 1069,
        1067, 1066, 1065,
        192, 1066, 1070,
        192, 1068, 1066,
        1084, 1083, 1082,
        1075, 1076, 1084,
        1076, 1075, 1073,
        1074, 1088, 1073,
        1074, 1073, 1072,
        191, 1074, 1072,
        191, 1072, 1071,
        192, 191, 190,
        1350, 1053, 1349,
        234, 232, 1173,
        234, 233, 232,
        233, 1175, 462,
        233, 462, 232,
        462, 1466, 189,
        232, 462, 189,
        1055, 1054, 187,
        187, 1053, 1052,
        187, 1051, 189,
        189, 188, 187,
        181, 1047, 180,
        182, 181, 180,
        315, 1274, 1046,
        315, 1046, 177,
        177, 1046, 1045,
        177, 1044, 179,
        177, 316, 315,
        179, 178, 177,
        379, 378, 377,
        1335, 377, 1333,
        174, 1255, 1252,
        174, 1251, 1250,
        1252, 1253, 173,
        1252, 173, 174,
        1334, 1333, 172,
        173, 1043, 172,
        174, 173, 172,
        1036, 1035, 171,
        171, 169, 1042,
        171, 170, 169,
        167, 1034, 166,
        168, 167, 166,
        653, 652, 651,
        652, 162, 651,
        162, 652, 161,
        163, 162, 161,
        159, 1033, 164,
        165, 159, 164,
        175, 160, 158,
        159, 165, 158,
        176, 175, 158,
        160, 159, 158,
        1818, 1822, 1821,
        1818, 725, 723,
        1818, 1817, 725,
        724, 725, 1816,
        725, 724, 723,
        1029, 725, 148,
        150, 149, 148,
        1174, 1171, 1172,
        1172, 1171, 698,
        700, 699, 698,
        698, 1171, 147,
        698, 147, 1771,
        1302, 1301, 1300,
        1303, 146, 1301,
        350, 349, 146,
        146, 349, 145,
        147, 146, 145,
        1025, 1024, 1023,
        1025, 1023, 1026,
        1028, 143, 1016,
        1028, 1027, 143,
        1023, 143, 1026,
        1021, 1020, 1019,
        1018, 144, 1019,
        1018, 1017, 144,
        143, 144, 1016,
        142, 1021, 1019,
        142, 1019, 144,
        143, 1023, 142,
        142, 1022, 1021,
        144, 143, 142,
        507, 1618, 1617,
        507, 1619, 571,
        571, 1616, 542,
        542, 572, 571,
        543, 1615, 1614,
        543, 1593, 542,
        544, 543, 542,
        140, 1756, 674,
        543, 140, 674,
        140, 543, 562,
        140, 1015, 139,
        139, 508, 507,
        141, 140, 139,
        850, 851, 1993,
        852, 851, 850,
        852, 1012, 851,
        1013, 1012, 852,
        1012, 1013, 138,
        1729, 136, 1014,
        137, 1014, 136,
        138, 136, 1012,
        138, 137, 136,
        480, 1011, 134,
        481, 480, 134,
        764, 135, 133,
        134, 1011, 133,
        765, 764, 133,
        135, 134, 133,
        1377, 348, 1376,
        419, 348, 418,
        348, 347, 346,
        348, 346, 131,
        348, 131, 1299,
        132, 131, 130,
        590, 1635, 1634,
        1633, 1632, 590,
        590, 1631, 1630,
        588, 1638, 590,
        588, 1637, 1636,
        590, 589, 588,
        1629, 1006, 588,
        1007, 1006, 1005,
        127, 1006, 1007,
        127, 1008, 1006,
        127, 126, 125,
        995, 997, 994,
        997, 996, 994,
        124, 999, 995,
        995, 994, 124,
        124, 998, 123,
        124, 123, 122,
        991, 990, 121,
        119, 991, 121,
        993, 992, 119,
        121, 120, 119,
        116, 989, 858,
        117, 989, 116,
        859, 116, 858,
        118, 117, 116,
        114, 988, 987,
        115, 114, 113,
        109, 986, 985,
        110, 109, 108,
        107, 106, 105,
        103, 984, 102,
        104, 103, 102,
        100, 983, 982,
        101, 100, 99,
        673, 672, 671,
        1755, 96, 671,
        97, 671, 96,
        98, 97, 96,
        94, 981, 93,
        95, 94, 93,
        783, 1918, 1917,
        783, 1917, 1916,
        783, 782, 1918,
        783, 282, 782,
        92, 782, 282,
        91, 92, 282,
        91, 980, 90,
        92, 91, 90,
        973, 972, 971,
        973, 975, 972,
        975, 974, 972,
        974, 975, 977,
        977, 976, 974,
        977, 978, 976,
        977, 979, 978,
        1855, 978, 979,
        1855, 979, 1857,
        1857, 1856, 1855,
        1858, 1856, 1857,
        1858, 1853, 1856,
        1853, 1858, 739,
        739, 1854, 1853,
        739, 737, 1854,
        739, 738, 737,
        738, 1851, 737,
        1852, 1851, 738,
        1852, 1849, 1851,
        1852, 1850, 1849,
        1850, 966, 1849,
        1850, 965, 966,
        967, 966, 965,
        967, 965, 969,
        969, 968, 967,
        968, 969, 88,
        88, 89, 968,
        87, 973, 971,
        87, 971, 970,
        87, 970, 89,
        89, 88, 87,
        496, 1536, 1535,
        496, 497, 1537,
        497, 496, 495,
        1540, 964, 497,
        1539, 1538, 964,
        206, 964, 963,
        207, 206, 205,
        86, 205, 206,
        206, 962, 86,
        496, 1534, 84,
        496, 84, 1533,
        86, 84, 205,
        86, 85, 84,
        83, 82, 81,
        856, 1997, 1996,
        857, 856, 855,
        483, 1491, 856,
        483, 856, 857,
        857, 1490, 483,
        483, 484, 1492,
        484, 483, 482,
        482, 527, 484,
        528, 1570, 527,
        529, 482, 1493,
        482, 529, 527,
        529, 528, 527,
        529, 1493, 79,
        80, 528, 79,
        528, 529, 79,
        78, 961, 960,
        78, 960, 959,
        78, 958, 80,
        80, 79, 78,
        75, 957, 956,
        75, 956, 955,
        75, 955, 77,
        77, 76, 75,
        1862, 1861, 74,
        1133, 954, 73,
        73, 954, 72,
        72, 743, 74,
        74, 73, 72,
        70, 953, 69,
        71, 70, 69,
        944, 943, 942,
        950, 949, 947,
        947, 948, 950,
        948, 947, 945,
        945, 946, 952,
        945, 952, 948,
        952, 951, 948,
        289, 951, 952,
        289, 952, 1249,
        290, 68, 289,
        68, 946, 67,
        946, 945, 67,
        66, 289, 68,
        66, 944, 942,
        66, 67, 944,
        68, 67, 66,
        941, 940, 939,
        941, 939, 938,
        938, 939, 937,
        938, 937, 936,
        935, 934, 933,
        935, 933, 65,
        65, 933, 64,
        936, 63, 938,
        63, 936, 65,
        65, 64, 63,
        60, 112, 932,
        60, 931, 930,
        62, 61, 60,
        112, 60, 111,
        60, 59, 111,
        59, 928, 58,
        57, 929, 111,
        57, 111, 59,
        58, 927, 57,
        59, 58, 57,
        155, 1032, 154,
        156, 155, 154,
        154, 1032, 709,
        710, 154, 709,
        710, 709, 639,
        640, 710, 639,
        639, 1050, 185,
        640, 639, 185,
        186, 185, 1050,
        186, 1050, 1049,
        1049, 1048, 186,
        186, 55, 185,
        183, 56, 54,
        55, 186, 54,
        184, 183, 54,
        56, 55, 54,
        53, 923, 922,
        53, 926, 52,
        51, 925, 924,
        51, 924, 53,
        53, 52, 51,
        245, 239, 1187,
        245, 238, 239,
        245, 244, 238,
        240, 239, 238,
        1180, 921, 1179,
        1177, 921, 1176,
        1181, 238, 48,
        1178, 48, 921,
        49, 921, 48,
        50, 49, 48,
        45, 46, 918,
        47, 46, 45,
        917, 916, 42,
        44, 43, 42,
        40, 915, 39,
        41, 40, 39,
        1344, 1345, 38,
        1342, 1346, 1343,
        792, 791, 790,
        791, 37, 1922,
        1343, 1344, 36,
        1344, 38, 36,
        1343, 36, 1342,
        37, 791, 36,
        38, 37, 36,
        35, 911, 910,
        35, 914, 34,
        34, 913, 33,
        35, 33, 912,
        35, 34, 33,
        754, 1440, 1439,
        754, 1441, 753,
        753, 1438, 1437,
        754, 753, 752,
        753, 546, 752,
        668, 752, 546,
        669, 1754, 668,
        670, 669, 668,
        670, 1284, 669,
        330, 682, 1287,
        1287, 1286, 330,
        330, 1285, 1284,
        260, 259, 258,
        260, 603, 602,
        603, 681, 1676,
        330, 331, 682,
        682, 331, 681,
        330, 1284, 329,
        331, 330, 329,
        670, 1283, 1284,
        1284, 1283, 329,
        32, 329, 1283,
        329, 32, 331,
        32, 908, 681,
        681, 331, 32,
        670, 31, 1283,
        1283, 31, 32,
        668, 546, 547,
        670, 547, 31,
        547, 1838, 1841,
        547, 1597, 1838,
        545, 1597, 547,
        670, 668, 547,
        733, 732, 547,
        547, 546, 545,
        1845, 1839, 547,
        1839, 1840, 30,
        1839, 30, 547,
        1198, 30, 1197,
        32, 30, 909,
        30, 31, 547,
        32, 31, 30,
        153, 1031, 1030,
        153, 152, 151,
        153, 1030, 157,
        228, 1164, 1163,
        228, 1162, 1161,
        228, 227, 226,
        1372, 29, 1371,
        1372, 226, 29,
        1160, 29, 226,
        157, 1030, 28,
        29, 157, 28,
        1371, 29, 27,
        28, 907, 27,
        29, 28, 27,
        759, 1889, 758,
        1889, 1888, 758,
        1887, 1886, 1885,
        760, 758, 1887,
        760, 759, 758,
        760, 1887, 26,
        26, 1887, 1885,
        760, 26, 844,
        26, 24, 844,
        906, 905, 24,
        26, 25, 24,
        901, 900, 899,
        904, 903, 23,
        902, 23, 901,
        904, 23, 21,
        23, 22, 21,
        1908, 1776, 1904,
        1776, 1905, 1904,
        1779, 1778, 1776,
        1777, 1776, 708,
        708, 707, 706,
        707, 895, 1775,
        20, 895, 707,
        898, 897, 18,
        18, 895, 20,
        18, 896, 895,
        20, 19, 18,
        624, 1693, 623,
        625, 624, 623,
        623, 695, 625,
        695, 16, 625,
        128, 17, 15,
        16, 695, 15,
        129, 128, 15,
        17, 16, 15,
        654, 248, 1736,
        654, 247, 248,
        248, 247, 246,
        345, 1447, 246,
        247, 345, 246,
        470, 1475, 1474,
        445, 1453, 1452,
        445, 1452, 1451,
        445, 1450, 345,
        445, 1449, 1448,
        445, 470, 469,
        1294, 470, 445,
        1294, 445, 446,
        345, 446, 445,
        343, 1295, 1294,
        343, 1294, 446,
        343, 446, 345,
        345, 344, 343,
        345, 887, 344,
        888, 887, 345,
        12, 887, 892,
        14, 13, 12,
        885, 884, 882,
        217, 1159, 219,
        218, 219, 1158,
        217, 218, 1156,
        219, 218, 217,
        1157, 880, 218,
        881, 218, 880,
        881, 880, 879,
        881, 879, 11,
        11, 879, 886,
        883, 882, 9,
        11, 9, 881,
        11, 10, 9,
        878, 6, 877,
        8, 7, 6,
        3, 873, 872,
        5, 4, 3,
        1579, 1, 1578,
        1, 1436, 437,
        1, 865, 871,
        1, 866, 865,
        438, 1, 437,
        1990, 1991, 1,
        843, 1992, 1990,
        843, 842, 841,
        1990, 1, 867,
        1990, 867, 843,
        868, 867, 1,
        2, 869, 868,
        2, 868, 1,
        2, 870, 869,
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

    function copy$2(out, a) {
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
    function copy$1(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
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
    function ortho(out, top, right, bottom, left, near, far) {
        let lr = 1 / (left - right);
        let bt = 1 / (bottom - top);
        let nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
        return out;
    }
    function get_translation(out, mat) {
        out[0] = mat[12];
        out[1] = mat[13];
        out[2] = mat[14];
        return out;
    }

    const QUERY$e = 8192 /* Transform */ | 1 /* Camera */;
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
            if ((game.World.Signature[i] & QUERY$e) === QUERY$e) {
                let camera = game.World.Camera[i];
                game.Cameras.push(i);
                if (camera.Kind === 0 /* Display */) {
                    update_display_perspective(game, i, camera);
                }
                else if (camera.Kind === 1 /* Framebuffer */) {
                    update_framebuffer_ortho(game, i, camera);
                }
            }
        }
    }
    function update_display_perspective(game, entity, camera) {
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
        get_translation(camera.Position, transform.World);
        copy$1(camera.View, transform.Self);
        multiply$1(camera.Pv, camera.Projection, camera.View);
    }
    function update_framebuffer_ortho(game, entity, camera) {
        if (game.ViewportResized) {
            ortho(camera.Projection, camera.Radius, camera.Radius, -camera.Radius, -camera.Radius, camera.Near, camera.Far);
            invert(camera.Unprojection, camera.Projection);
        }
        let transform = game.World.Transform[entity];
        get_translation(camera.Position, transform.World);
        copy$1(camera.View, transform.Self);
        multiply$1(camera.Pv, camera.Projection, camera.View);
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

    const QUERY$d = 8192 /* Transform */ | 4 /* Collide */;
    function sys_collide(game, delta) {
        // Collect all colliders.
        let static_colliders = [];
        let dynamic_colliders = [];
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$d) === QUERY$d) {
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

    const QUERY$c = 128 /* Move */ | 8 /* ControlPlayer */;
    function sys_control_keyboard(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$c) === QUERY$c) {
                update$7(game, i);
            }
        }
    }
    function update$7(game, entity) {
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

    const QUERY$b = 128 /* Move */ | 8 /* ControlPlayer */;
    const SENSITIVITY = 0.1;
    function sys_control_mouse(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$b) === QUERY$b) {
                update$6(game, i);
            }
        }
    }
    function update$6(game, entity) {
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

    const QUERY$a = 8 /* ControlPlayer */ | 256 /* NavAgent */;
    function sys_control_pick(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$a) == QUERY$a) {
                update$5(game, i);
            }
        }
    }
    function update$5(game, entity) {
        let agent = game.World.NavAgent[entity];
        if (game.InputDelta["Mouse2"] === 1 && game.Picked && agent.Actions > 0) {
            let territory_entity = game.Picked.Entity;
            let territory = game.World.Territory[territory_entity];
            agent.TerritoryId = territory.Id;
            agent.Destination = game.Picked.Point;
            agent.Actions -= 1;
        }
    }

    const QUERY$9 = 8192 /* Transform */ | 16 /* Draw */;
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
            if ((game.World.Signature[i] & QUERY$9) == QUERY$9) {
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

    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }

    const QUERY$8 = 512 /* Pickable */;
    function sys_highlight(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$8) == QUERY$8) {
                let pickable = game.World.Pickable[i];
                switch (pickable.Kind) {
                    case 0 /* Territory */: {
                        update_territory(game, i);
                        break;
                    }
                    case 1 /* Unit */: {
                        update_unit(game, i);
                        break;
                    }
                }
            }
        }
    }
    function update_territory(game, entity) {
        let pickable = game.World.Pickable[entity];
        let render = game.World.Render[entity];
        if (game.Selected) {
            let nav_agent = game.World.NavAgent[game.Selected];
            let territory = game.World.Territory[entity];
            if (nav_agent.TerritoryId === territory.Id) {
                // The selected unit is on this terrain tile.
                copy(render.ColorDiffuse, pickable.ColorSelected);
            }
            else if (nav_agent.Actions > 0 &&
                game.TerritoryGraph[territory.Id].includes(nav_agent.TerritoryId)) {
                // The selected unit is on a neighboring tile. The current tile is a
                // possible movement and attach target.
                copy(render.ColorDiffuse, pickable.ColorReady);
                if (pickable.Hover) {
                    render.ColorDiffuse[1] += 0.2;
                }
            }
            else {
                copy(render.ColorDiffuse, pickable.ColorIdle);
            }
        }
        else if (pickable.Hover) {
            copy(render.ColorDiffuse, pickable.ColorHover);
        }
        else {
            copy(render.ColorDiffuse, pickable.ColorIdle);
        }
    }
    function update_unit(game, entity) {
        let pickable = game.World.Pickable[entity];
        let selectable = game.World.Selectable[entity];
        let mesh_entity = game.World.Children[entity].Children[1];
        let render = game.World.Render[mesh_entity];
        if (selectable.Selected) {
            copy(render.ColorDiffuse, pickable.ColorSelected);
            if (pickable.Hover) {
                render.ColorDiffuse[1] += 0.3;
            }
        }
        else if (pickable.Hover) {
            copy(render.ColorDiffuse, pickable.ColorHover);
        }
        else {
            copy(render.ColorDiffuse, pickable.ColorIdle);
        }
    }

    const QUERY$7 = 8192 /* Transform */ | 64 /* Light */;
    function sys_light(game, delta) {
        game.LightPositions.fill(0);
        game.LightDetails.fill(0);
        let counter = 0;
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$7) === QUERY$7) {
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

    const QUERY$6 = 8192 /* Transform */ | 128 /* Move */;
    const NO_ROTATION = [0, 0, 0, 1];
    function sys_move(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$6) === QUERY$6) {
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

    const QUERY$5 = 8192 /* Transform */ | 256 /* NavAgent */ | 128 /* Move */;
    function sys_nav(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$5) == QUERY$5) {
                update$2(game, i);
            }
        }
    }
    function update$2(game, entity) {
        let agent = game.World.NavAgent[entity];
        if (agent.Destination) {
            let transform = game.World.Transform[entity];
            let destination = [0, 0, 0];
            copy$2(destination, agent.Destination);
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

    const QUERY$4 = 512 /* Pickable */;
    const TARGET = 8192 /* Transform */ | 4 /* Collide */;
    function sys_pick(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$4) == QUERY$4) {
                let pickable = game.World.Pickable[i];
                pickable.Hover = false;
            }
        }
        let pickables = [];
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & TARGET) == TARGET) {
                pickables.push(game.World.Collide[i]);
            }
        }
        game.Picked = undefined;
        if (game.Cameras.length > 0) {
            update$1(game, game.Cameras[0], pickables);
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
        let hit_aabb = ray_intersect_aabb(pickables, origin, direction);
        if (hit_aabb) {
            let collider = hit_aabb.Collider;
            let entity = collider.Entity;
            for (let child of query_all(game.World, entity, 512 /* Pickable */)) {
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
                    let hit_mesh = ray_intersect_mesh(pickable.Mesh, origin, direction);
                    if (hit_mesh) {
                        pickable.Hover = true;
                        // Transform the intersection point back to the world space.
                        transform_point(hit_mesh.Point, hit_mesh.Point, transform.World);
                        game.Picked = {
                            Entity: child,
                            Point: hit_mesh.Point,
                        };
                        return;
                    }
                }
                else {
                    pickable.Hover = true;
                    game.Picked = {
                        Entity: child,
                        Point: hit_aabb.Point,
                    };
                    return;
                }
            }
        }
    }

    const QUERY$3 = 8192 /* Transform */ | 1024 /* Render */;
    function sys_render_depth(game, delta) {
        for (let camera_entity of game.Cameras) {
            let camera = game.World.Camera[camera_entity];
            switch (camera.Kind) {
                case 1 /* Framebuffer */:
                    render_framebuffer(game, camera);
                    break;
            }
        }
    }
    function render_framebuffer(game, camera) {
        game.Gl.bindFramebuffer(GL_FRAMEBUFFER, camera.Target.Framebuffer);
        game.Gl.viewport(0, 0, camera.Target.Width, camera.Target.Height);
        game.Gl.clearColor(...camera.ClearColor);
        game.Gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        game.Gl.useProgram(game.MaterialDepth.Program);
        game.Gl.uniformMatrix4fv(game.MaterialDepth.Locations.Pv, false, camera.Pv);
        let current_front_face = null;
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$3) === QUERY$3) {
                let transform = game.World.Transform[i];
                let render = game.World.Render[i];
                if (render.FrontFace !== current_front_face) {
                    current_front_face = render.FrontFace;
                    game.Gl.frontFace(render.FrontFace);
                }
                draw_depth(game, transform, render);
            }
        }
    }
    function draw_depth(game, transform, render) {
        game.Gl.uniformMatrix4fv(game.MaterialDepth.Locations.World, false, transform.World);
        game.ExtVao.bindVertexArrayOES(render.Vao);
        game.Gl.drawElements(game.MaterialDepth.Mode, render.Mesh.IndexCount, GL_UNSIGNED_SHORT, 0);
        game.ExtVao.bindVertexArrayOES(null);
    }

    const QUERY$2 = 8192 /* Transform */ | 1024 /* Render */;
    function sys_render_forward(game, delta) {
        for (let camera_entity of game.Cameras) {
            let camera = game.World.Camera[camera_entity];
            switch (camera.Kind) {
                case 0 /* Display */:
                    render_display(game, camera);
                    break;
            }
        }
    }
    function render_display(game, camera) {
        game.Gl.bindFramebuffer(GL_FRAMEBUFFER, null);
        game.Gl.viewport(0, 0, game.ViewportWidth, game.ViewportHeight);
        game.Gl.clearColor(...camera.ClearColor);
        game.Gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
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
                            use_colored_unlit(game, render.Material, camera);
                            break;
                        case 1 /* ColoredDiffuse */:
                            use_colored_diffuse(game, render.Material, camera);
                            break;
                        case 2 /* ColoredSpecular */:
                            use_colored_specular(game, render.Material, camera);
                            break;
                        case 3 /* TexturedUnlit */:
                            use_textured_unlit(game, render.Material, camera);
                            break;
                        case 4 /* TexturedDiffuse */:
                            use_textured_diffuse(game, render.Material, camera);
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
                        draw_textured_unlit(game, transform, render);
                        break;
                    case 4 /* TexturedDiffuse */:
                        draw_textured_diffuse(game, transform, render);
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
        game.Gl.activeTexture(GL_TEXTURE0);
        game.Gl.bindTexture(GL_TEXTURE_2D, game.Targets.Shade.DepthTexture);
        game.Gl.uniform1i(material.Locations.ShadowMap, 0);
        let light_entity = game.Cameras[1];
        let light_camera = game.World.Camera[light_entity];
        game.Gl.uniformMatrix4fv(material.Locations.ShadowSpace, false, light_camera.Pv);
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

    const QUERY$1 = 8192 /* Transform */ | 512 /* Pickable */ | 2048 /* Selectable */ | 2 /* Children */;
    function sys_select(game, delta) {
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$1) == QUERY$1) {
                update(game, i);
            }
        }
        game.Selected = undefined;
        for (let i = 0; i < game.World.Signature.length; i++) {
            if ((game.World.Signature[i] & QUERY$1) == QUERY$1) {
                let selectable = game.World.Selectable[i];
                if (selectable.Selected) {
                    game.Selected = i;
                }
            }
        }
    }
    function update(game, entity) {
        var _a, _b;
        game.World.Children[entity];
        let selectable = game.World.Selectable[entity];
        if (game.InputDelta["Mouse0"] === -1) {
            // When the user clicks…
            // …select.
            if (!selectable.Selected && ((_a = game.Picked) === null || _a === void 0 ? void 0 : _a.Entity) === entity) {
                selectable.Selected = true;
                game.World.Signature[entity] |= 8 /* ControlPlayer */;
            }
            // …deselect.
            if (selectable.Selected && ((_b = game.Picked) === null || _b === void 0 ? void 0 : _b.Entity) !== entity) {
                selectable.Selected = false;
                game.World.Signature[entity] &= ~8 /* ControlPlayer */;
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
            this.Territory = [];
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
            this.MaterialDepth = mat1_depth(this.Gl);
            this.MaterialColoredSpecular = mat1_colored_specular_phong(this.Gl);
            this.MeshCube = mesh_cube(this.Gl);
            this.MeshSoldier = mesh_soldier(this.Gl);
            this.TerritoryMeshes = [];
            this.TerritoryGraph = {};
            this.TerritoryEntities = {};
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
            this.Gl.getExtension("WEBGL_depth_texture");
            this.Targets = {
                Shade: create_depth_target(this.Gl, 1024, 1024),
            };
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
            sys_select(this);
            sys_highlight(this);
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
            sys_render_depth(this);
            sys_render_forward(this);
            sys_draw(this);
            sys_framerate(this, delta, performance.now() - now);
        }
    }

    let seed = 1;
    function set_seed(new_seed) {
        seed = 198706 * new_seed;
    }
    function rand() {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
    }
    function float(min = 0, max = 1) {
        return rand() * (max - min) + min;
    }

    function camera_display_perspective(fovy, near, far, clear_color = [0.9, 0.9, 0.9, 1]) {
        return (game, entity) => {
            game.World.Signature[entity] |= 1 /* Camera */;
            game.World.Camera[entity] = {
                Pv: create(),
                Position: [0, 0, 0],
                Kind: 0 /* Display */,
                FovY: fovy,
                Near: near,
                Far: far,
                View: create(),
                Projection: create(),
                Unprojection: create(),
                ClearColor: clear_color,
            };
        };
    }
    function camera_framebuffer_ortho(target, radius, near, far, clear_color) {
        return (game, entity) => {
            game.World.Signature[entity] |= 1 /* Camera */;
            game.World.Camera[entity] = {
                Pv: create(),
                Position: [0, 0, 0],
                Kind: 1 /* Framebuffer */,
                Target: target,
                Radius: radius,
                Near: near,
                Far: far,
                View: create(),
                Projection: create(),
                Unprojection: create(),
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
            control_player(true, true, false, false),
            move(100, 1),
            children([
                transform(),
                control_player(false, false, true, false),
                move(100, 1),
                children([
                    transform([0, 50, -29], from_euler([0, 0, 0, 0], -60, 180, 0)),
                    control_player(false, false, false, true),
                    move(200, 0),
                    camera_display_perspective(1, 0.1, 1000),
                ]),
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

    function nav_agent(territory_id) {
        return (game, entity) => {
            game.World.Signature[entity] |= 256 /* NavAgent */;
            game.World.NavAgent[entity] = {
                TerritoryId: territory_id,
                Destination: null,
                // TODO Move to a dedicated component?
                Actions: 1,
            };
        };
    }

    function pickable_territory(mesh, color_idle, color_hover, color_ready, color_selected) {
        return (game, entity) => {
            game.World.Signature[entity] |= 512 /* Pickable */;
            game.World.Pickable[entity] = {
                Kind: 0 /* Territory */,
                Mesh: mesh,
                Hover: false,
                ColorIdle: color_idle,
                ColorHover: color_hover,
                ColorReady: color_ready,
                ColorSelected: color_selected,
            };
        };
    }
    function pickable_unit(color_idle, color_hover, color_selected) {
        return (game, entity) => {
            game.World.Signature[entity] |= 512 /* Pickable */;
            game.World.Pickable[entity] = {
                Kind: 1 /* Unit */,
                Hover: false,
                ColorIdle: color_idle,
                ColorHover: color_hover,
                ColorReady: color_selected,
                ColorSelected: color_selected,
            };
        };
    }

    let colored_specular_vaos = new WeakMap();
    function render_colored_specular(material, mesh, color_diffuse, shininess = 1, color_specular = color_diffuse) {
        return (game, entity) => {
            if (!colored_specular_vaos.has(mesh)) {
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
                colored_specular_vaos.set(mesh, vao);
            }
            game.World.Signature[entity] |= 1024 /* Render */;
            game.World.Render[entity] = {
                Kind: 2 /* ColoredSpecular */,
                Material: material,
                Mesh: mesh,
                FrontFace: GL_CW,
                Vao: colored_specular_vaos.get(mesh),
                ColorDiffuse: color_diffuse,
                ColorSpecular: color_specular,
                Shininess: shininess,
            };
        };
    }

    function selectable() {
        return (game, entity) => {
            game.World.Signature[entity] |= 2048 /* Selectable */;
            game.World.Selectable[entity] = {
                Selected: false,
            };
        };
    }

    function territory(continent, index) {
        return (game, entity) => {
            let id = continent * 10 + index;
            game.TerritoryEntities[id] = entity;
            game.World.Signature[entity] |= 4096 /* Territory */;
            game.World.Territory[entity] = {
                Continent: continent,
                Index: index,
                Id: id,
            };
        };
    }

    function blueprint_region(game, continent, index) {
        let mesh = game.TerritoryMeshes[continent][index - 1];
        return [
            transform(),
            pickable_territory(mesh, [0.3, 0.3, 0.8, 1], [0.3, 0.5, 0.8, 1], [0.3, 0.8, 0.3, 1], [0.3, 0.5, 0.8, 1]),
            render_colored_specular(game.MaterialColoredSpecular, mesh, [0.3, 0.3, 0.8, 1]),
            territory(continent, index),
        ];
    }
    function scene_stage(game) {
        set_seed(25);
        game.World = new World();
        game.ViewportResized = true;
        game.Gl.clearColor(0.9, 0.9, 0.9, 1);
        game.TerritoryGraph = {
            // Europe
            1: [2, 3, 4, 7],
            2: [1, 4, 35],
            3: [1, 4, 5, 6, 7],
            4: [1, 2, 3, 6],
            5: [3, 6, 7, 13, 15, 57],
            6: [3, 4, 5, 51, 57, 61],
            7: [1, 3, 5, 15],
        };
        // Camera.
        instantiate(game, [...blueprint_camera(), transform([-25, 0, -50], [0, 1, 0, 0])]);
        // Directional light.
        instantiate(game, [
            transform([100, 100, 100], from_euler([0, 0, 0, 0], -45, 45, 0)),
            light_directional([1, 1, 1], 0.8),
            camera_framebuffer_ortho(game.Targets.Shade, 100, 1, 1000, [0, 0, 0, 1]),
        ]);
        // Europe
        instantiate(game, [
            transform(),
            collide(false, 0 /* None */, 0 /* None */, [1000, 0.01, 1000]),
            children(blueprint_region(game, 0 /* Europe */, 1), blueprint_region(game, 0 /* Europe */, 2), blueprint_region(game, 0 /* Europe */, 3), blueprint_region(game, 0 /* Europe */, 4), blueprint_region(game, 0 /* Europe */, 5), blueprint_region(game, 0 /* Europe */, 6), blueprint_region(game, 0 /* Europe */, 7)),
        ]);
        // Units in Central Europe.
        for (let i = 0; i < 3; i++) {
            instantiate(game, [
                transform([-21 + float(-4, 4), 0, -52 + float(-4, 4)]),
                control_player(false, false, false, false),
                disable(8 /* ControlPlayer */),
                collide(true, 0 /* None */, 0 /* None */, [2, 6, 2]),
                pickable_unit([1, 1, 0, 1], [1, 0.5, 0, 1], [1, 0, 0, 1]),
                selectable(),
                nav_agent(3),
                move(10, 5),
                children([transform(), draw_selection("#ff0"), disable(16 /* Draw */)], [
                    transform(),
                    render_colored_specular(game.MaterialColoredSpecular, game.MeshSoldier, [1, 1, 0, 1], 128, [1, 1, 1, 1]),
                ]),
            ]);
        }
        // Units in Iceland.
        for (let i = 0; i < 2; i++) {
            instantiate(game, [
                transform([7 + float(-3, 3), 0, -70 + float(-3, 3)]),
                control_player(false, false, false, false),
                disable(8 /* ControlPlayer */),
                collide(true, 0 /* None */, 0 /* None */, [2, 6, 2]),
                pickable_unit([1, 1, 0, 1], [1, 0.5, 0, 1], [1, 0, 0, 1]),
                selectable(),
                nav_agent(2),
                move(10, 5),
                children([transform(), draw_selection("#ff0"), disable(16 /* Draw */)], [
                    transform(),
                    render_colored_specular(game.MaterialColoredSpecular, game.MeshSoldier, [1, 1, 0, 1], 128, [1, 1, 1, 1]),
                ]),
            ]);
        }
    }

    let game = new Game();
    // @ts-ignore
    window.game = game;
    game.TerritoryMeshes[0] = [
        mesh_eu01(game.Gl),
        mesh_eu02(game.Gl),
        mesh_eu03(game.Gl),
        mesh_eu04(game.Gl),
        mesh_eu05(game.Gl),
        mesh_eu06(game.Gl),
        mesh_eu07(game.Gl),
    ];
    scene_stage(game);
    loop_start(game);

}());
