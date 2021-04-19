import {Material, Mesh} from "../../common/material.js";
import {Vec4} from "../../common/math.js";
import {GL_ARRAY_BUFFER, GL_CW, GL_ELEMENT_ARRAY_BUFFER, GL_FLOAT} from "../../common/webgl.js";
import {ColoredDiffuseLayout} from "../../materials/layout_colored_diffuse.js";
import {ColoredSpecularLayout} from "../../materials/layout_colored_specular.js";
import {ColoredUnlitLayout} from "../../materials/layout_colored_unlit.js";
import {TexturedDiffuseLayout} from "../../materials/layout_textured_diffuse.js";
import {TexturedSpecularLayout} from "../../materials/layout_textured_specular.js";
import {TexturedUnlitLayout} from "../../materials/layout_textured_unlit.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export type Render =
    | RenderColoredUnlit
    | RenderColoredDiffuse
    | RenderColoredSpecular
    | RenderTexturedUnlit
    | RenderTexturedDiffuse
    | RenderTexturedSpecular;

export const enum RenderKind {
    ColoredUnlit,
    ColoredDiffuse,
    ColoredSpecular,
    TexturedUnlit,
    TexturedDiffuse,
    TexturedSpecular,
}

export interface RenderColoredUnlit {
    readonly Kind: RenderKind.ColoredUnlit;
    readonly Material: Material<ColoredUnlitLayout>;
    readonly Mesh: Mesh;
    readonly FrontFace: GLenum;
    readonly Vao: WebGLVertexArrayObject;
    Color: Vec4;
}

let colored_unlit_vaos: WeakMap<Mesh, WebGLVertexArrayObject> = new WeakMap();

export function render_colored_unlit(
    material: Material<ColoredUnlitLayout>,
    mesh: Mesh,
    color: Vec4
) {
    return (game: Game, entity: Entity) => {
        if (!colored_unlit_vaos.has(mesh)) {
            // We only need to create the VAO once.
            let vao = game.ExtVao.createVertexArrayOES()!;
            game.ExtVao.bindVertexArrayOES(vao);

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.VertexBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexPosition);
            game.Gl.vertexAttribPointer(
                material.Locations.VertexPosition,
                3,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.Gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, mesh.IndexBuffer);

            game.ExtVao.bindVertexArrayOES(null);
            colored_unlit_vaos.set(mesh, vao);
        }

        game.World.Signature[entity] |= Has.Render;
        game.World.Render[entity] = {
            Kind: RenderKind.ColoredUnlit,
            Material: material,
            Mesh: mesh,
            FrontFace: GL_CW,
            Vao: colored_unlit_vaos.get(mesh)!,
            Color: color,
        };
    };
}

export interface RenderColoredDiffuse {
    readonly Kind: RenderKind.ColoredDiffuse;
    readonly Material: Material<ColoredDiffuseLayout>;
    readonly Mesh: Mesh;
    readonly FrontFace: GLenum;
    readonly Vao: WebGLVertexArrayObject;
    Color: Vec4;
}

let colored_diffuse_vaos: WeakMap<Mesh, WebGLVertexArrayObject> = new WeakMap();

export function render_colored_diffuse(
    material: Material<ColoredDiffuseLayout>,
    mesh: Mesh,
    color: Vec4
) {
    return (game: Game, entity: Entity) => {
        if (!colored_diffuse_vaos.has(mesh)) {
            // We only need to create the VAO once.
            let vao = game.ExtVao.createVertexArrayOES()!;
            game.ExtVao.bindVertexArrayOES(vao);

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.VertexBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexPosition);
            game.Gl.vertexAttribPointer(
                material.Locations.VertexPosition,
                3,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.NormalBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexNormal);
            game.Gl.vertexAttribPointer(material.Locations.VertexNormal, 3, GL_FLOAT, false, 0, 0);

            game.Gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, mesh.IndexBuffer);

            game.ExtVao.bindVertexArrayOES(null);
            colored_diffuse_vaos.set(mesh, vao);
        }

        game.World.Signature[entity] |= Has.Render;
        game.World.Render[entity] = {
            Kind: RenderKind.ColoredDiffuse,
            Material: material,
            Mesh: mesh,
            FrontFace: GL_CW,
            Vao: colored_diffuse_vaos.get(mesh)!,
            Color: color,
        };
    };
}

export interface RenderColoredSpecular {
    readonly Kind: RenderKind.ColoredSpecular;
    readonly Material: Material<ColoredSpecularLayout>;
    readonly Mesh: Mesh;
    readonly FrontFace: GLenum;
    readonly Vao: WebGLVertexArrayObject;
    ColorDiffuse: Vec4;
    ColorSpecular: Vec4;
    Shininess: number;
}

let colored_specular_vaos: WeakMap<Mesh, WebGLVertexArrayObject> = new WeakMap();

export function render_colored_specular(
    material: Material<ColoredSpecularLayout>,
    mesh: Mesh,
    color_diffuse: Vec4,
    shininess: number = 1,
    color_specular: Vec4 = color_diffuse
) {
    return (game: Game, entity: Entity) => {
        if (!colored_specular_vaos.has(mesh)) {
            // We only need to create the VAO once.
            let vao = game.ExtVao.createVertexArrayOES()!;
            game.ExtVao.bindVertexArrayOES(vao);

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.VertexBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexPosition);
            game.Gl.vertexAttribPointer(
                material.Locations.VertexPosition,
                3,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.NormalBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexNormal);
            game.Gl.vertexAttribPointer(material.Locations.VertexNormal, 3, GL_FLOAT, false, 0, 0);

            game.Gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, mesh.IndexBuffer);

            game.ExtVao.bindVertexArrayOES(null);
            colored_specular_vaos.set(mesh, vao);
        }

        game.World.Signature[entity] |= Has.Render;
        game.World.Render[entity] = {
            Kind: RenderKind.ColoredSpecular,
            Material: material,
            Mesh: mesh,
            FrontFace: GL_CW,
            Vao: colored_specular_vaos.get(mesh)!,
            ColorDiffuse: color_diffuse,
            ColorSpecular: color_specular,
            Shininess: shininess,
        };
    };
}

export interface RenderTexturedUnlit {
    readonly Kind: RenderKind.TexturedUnlit;
    readonly Material: Material<TexturedUnlitLayout>;
    readonly Mesh: Mesh;
    readonly FrontFace: GLenum;
    readonly Vao: WebGLVertexArrayObject;
    Texture: WebGLTexture;
    Color: Vec4;
}

let textured_unlit_vaos: WeakMap<Mesh, WebGLVertexArrayObject> = new WeakMap();

export function render_textured_unlit(
    material: Material<TexturedUnlitLayout>,
    mesh: Mesh,
    texture: WebGLTexture,
    color: Vec4 = [1, 1, 1, 1]
) {
    return (game: Game, entity: Entity) => {
        if (!textured_unlit_vaos.has(mesh)) {
            // We only need to create the VAO once.
            let vao = game.ExtVao.createVertexArrayOES()!;
            game.ExtVao.bindVertexArrayOES(vao);

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.VertexBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexPosition);
            game.Gl.vertexAttribPointer(
                material.Locations.VertexPosition,
                3,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.TexCoordBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexTexCoord);
            game.Gl.vertexAttribPointer(
                material.Locations.VertexTexCoord,
                2,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.Gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, mesh.IndexBuffer);

            game.ExtVao.bindVertexArrayOES(null);
            textured_unlit_vaos.set(mesh, vao);
        }

        game.World.Signature[entity] |= Has.Render;
        game.World.Render[entity] = {
            Kind: RenderKind.TexturedUnlit,
            Material: material,
            Mesh: mesh,
            FrontFace: GL_CW,
            Vao: textured_unlit_vaos.get(mesh)!,
            Texture: texture,
            Color: color,
        };
    };
}

export interface RenderTexturedDiffuse {
    readonly Kind: RenderKind.TexturedDiffuse;
    readonly Material: Material<TexturedDiffuseLayout>;
    readonly Mesh: Mesh;
    readonly FrontFace: GLenum;
    readonly Vao: WebGLVertexArrayObject;
    Texture: WebGLTexture;
    Color: Vec4;
}

let textured_diffuse_vaos: WeakMap<Mesh, WebGLVertexArrayObject> = new WeakMap();

export function render_textured_diffuse(
    material: Material<TexturedDiffuseLayout>,
    mesh: Mesh,
    texture: WebGLTexture,
    color: Vec4 = [1, 1, 1, 1]
) {
    return (game: Game, entity: Entity) => {
        if (!textured_diffuse_vaos.has(mesh)) {
            // We only need to create the VAO once.
            let vao = game.ExtVao.createVertexArrayOES()!;
            game.ExtVao.bindVertexArrayOES(vao);

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.VertexBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexPosition);
            game.Gl.vertexAttribPointer(
                material.Locations.VertexPosition,
                3,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.NormalBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexNormal);
            game.Gl.vertexAttribPointer(material.Locations.VertexNormal, 3, GL_FLOAT, false, 0, 0);

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.TexCoordBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexTexCoord);
            game.Gl.vertexAttribPointer(
                material.Locations.VertexTexCoord,
                2,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.Gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, mesh.IndexBuffer);

            game.ExtVao.bindVertexArrayOES(null);
            textured_diffuse_vaos.set(mesh, vao);
        }

        game.World.Signature[entity] |= Has.Render;
        game.World.Render[entity] = {
            Kind: RenderKind.TexturedDiffuse,
            Material: material,
            Mesh: mesh,
            FrontFace: GL_CW,
            Vao: textured_diffuse_vaos.get(mesh)!,
            Texture: texture,
            Color: color,
        };
    };
}

export interface RenderTexturedSpecular {
    readonly Kind: RenderKind.TexturedSpecular;
    readonly Material: Material<TexturedSpecularLayout>;
    readonly Mesh: Mesh;
    readonly FrontFace: GLenum;
    readonly Vao: WebGLVertexArrayObject;
    DiffuseMap: WebGLTexture;
    ColorDiffuse: Vec4;
    ColorSpecular: Vec4;
    Shininess: number;
}

let textured_specular_vaos: WeakMap<Mesh, WebGLVertexArrayObject> = new WeakMap();

export function render_textured_specular(
    material: Material<TexturedSpecularLayout>,
    mesh: Mesh,
    diffuse_map: WebGLTexture,
    shininess = 1,
    diffuse_color: Vec4 = [1, 1, 1, 1],
    specular_color: Vec4 = [1, 1, 1, 1]
) {
    return (game: Game, entity: Entity) => {
        if (!textured_specular_vaos.has(mesh)) {
            // We only need to create the VAO once.
            let vao = game.ExtVao.createVertexArrayOES()!;
            game.ExtVao.bindVertexArrayOES(vao);

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.VertexBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexPosition);
            game.Gl.vertexAttribPointer(
                material.Locations.VertexPosition,
                3,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.NormalBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexNormal);
            game.Gl.vertexAttribPointer(material.Locations.VertexNormal, 3, GL_FLOAT, false, 0, 0);

            game.Gl.bindBuffer(GL_ARRAY_BUFFER, mesh.TexCoordBuffer);
            game.Gl.enableVertexAttribArray(material.Locations.VertexTexCoord);
            game.Gl.vertexAttribPointer(
                material.Locations.VertexTexCoord,
                2,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.Gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, mesh.IndexBuffer);

            game.ExtVao.bindVertexArrayOES(null);
            textured_specular_vaos.set(mesh, vao);
        }

        game.World.Signature[entity] |= Has.Render;
        game.World.Render[entity] = {
            Kind: RenderKind.TexturedSpecular,
            Material: material,
            Mesh: mesh,
            FrontFace: GL_CW,
            Vao: textured_specular_vaos.get(mesh)!,
            DiffuseMap: diffuse_map,
            ColorDiffuse: diffuse_color,
            ColorSpecular: specular_color,
            Shininess: shininess,
        };
    };
}
