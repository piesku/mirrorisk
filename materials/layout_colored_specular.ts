export interface ColoredSpecularLayout {
    // Uniforms
    Pv: WebGLUniformLocation;
    World: WebGLUniformLocation;
    Self: WebGLUniformLocation;
    Eye: WebGLUniformLocation;
    ColorDiffuse: WebGLUniformLocation;
    ColorSpecular: WebGLUniformLocation;
    Shininess: WebGLUniformLocation;
    LightPositions: WebGLUniformLocation;
    LightDetails: WebGLUniformLocation;
    ShadowMap: WebGLUniformLocation;
    ShadowSpace: WebGLUniformLocation;
    // Attributes
    VertexPosition: GLint;
    VertexNormal: GLint;
}
