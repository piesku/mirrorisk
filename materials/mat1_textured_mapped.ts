import {link, Material} from "../common/material.js";
import {GL_TRIANGLES} from "../common/webgl.js";
import {TexturedMappedLayout} from "./layout_textured_mapped.js";

let vertex = `
    uniform mat4 pv;
    uniform mat4 world;
    uniform mat4 self;

    attribute vec3 position;
    attribute vec2 texcoord;
    attribute vec3 normal;
    attribute vec3 tangent;
    attribute vec3 bitangent;

    varying vec4 vert_pos;
    varying vec2 vert_texcoord;
    varying vec3 vert_normal;
    varying mat3 vert_tbn;

    void main() {
        vert_pos = world * vec4(position, 1.0);
        gl_Position = pv * vert_pos;

        // Flip the texture vertically.
        vert_texcoord = vec2(texcoord.x, -texcoord.y);

        vert_tbn = mat3(tangent, bitangent, normal);
    }
`;

let fragment = `
    precision mediump float;

    // See Game.LightPositions and Game.LightDetails.
    const int MAX_LIGHTS = 8;

    uniform vec4 diffuse_color;
    uniform sampler2D diffuse_map;
    uniform sampler2D normal_map;
    uniform sampler2D roughness_map;

    uniform vec3 eye;
    uniform vec4 light_positions[MAX_LIGHTS];
    uniform vec4 light_details[MAX_LIGHTS];

    uniform mat4 shadow_space;
    uniform sampler2D shadow_map;

    varying vec4 vert_pos;
    varying vec2 vert_texcoord;
    varying vec3 vert_normal;
    varying mat3 vert_tbn;

    float shadow_factor(vec4 world_pos) {
        vec4 shadow_space_pos = shadow_space * world_pos;
        vec3 shadow_space_ndc = shadow_space_pos.xyz / shadow_space_pos.w;
        // Transform the [-1, 1] NDC to [0, 1] to match the shadow texture data.
        shadow_space_ndc = shadow_space_ndc * 0.5 + 0.5;

        float shadow_bias = 0.001;
        float shadow_acc = 0.0;
        float texel_size = 1.0 / 2048.0;

        // Sample 9 surrounding texels to anti-alias the shadow a bit.
        for (int u = -1; u <= 1; u++) {
            for (int v = -1; v <= 1; v++) {
                float shadow_map_depth = texture2D(shadow_map, shadow_space_ndc.xy + vec2(u, v) * texel_size).x;
                shadow_acc += shadow_space_ndc.z - shadow_bias > shadow_map_depth ? 0.5 : 0.0;
            }
        }
        return shadow_acc / 9.0;
    }

    void main() {
        vec3 frag_normal = texture2D(normal_map, vert_texcoord).rgb;
        frag_normal = frag_normal * 2.0 - 1.0;
        frag_normal = normalize(vert_tbn * frag_normal);
        //frag_normal = normalize(vert_normal);

        vec3 view_dir = eye - vert_pos.xyz;
        vec3 view_normal = normalize(view_dir);

        vec4 tex_color = texture2D(diffuse_map, vert_texcoord);
        vec3 unlit_rgb = tex_color.rgb * diffuse_color.rgb;
        // Ambient light.
        vec3 light_acc = unlit_rgb * 0.1;

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
                light_acc += unlit_rgb * diffuse_factor * light_color * light_intensity;

                // Blinn-Phong reflection model.
                float roughness = texture2D(roughness_map, vert_texcoord).x;
                if (roughness > 0.0) {
                    float shininess = 2.0 / pow(roughness, 4.0) - 2.0;
                    vec3 h = normalize(light_normal + view_normal);
                    float specular_angle = max(dot(h, frag_normal), 0.0);
                    float specular_factor = pow(specular_angle, shininess);

                    // Specular color.
                    light_acc += unlit_rgb * specular_factor * light_color * light_intensity;
                }
            }
        }

        vec3 shaded_rgb = light_acc * (1.0 - shadow_factor(vert_pos));
        gl_FragColor = vec4(shaded_rgb, 1.0);
    }
`;

export function mat1_textured_mapped(gl: WebGLRenderingContext): Material<TexturedMappedLayout> {
    let program = link(gl, vertex, fragment);
    return {
        Mode: GL_TRIANGLES,
        Program: program,
        Locations: {
            Pv: gl.getUniformLocation(program, "pv")!,
            World: gl.getUniformLocation(program, "world")!,
            Self: gl.getUniformLocation(program, "self")!,

            DiffuseColor: gl.getUniformLocation(program, "diffuse_color")!,
            DiffuseMap: gl.getUniformLocation(program, "diffuse_map")!,
            NormalMap: gl.getUniformLocation(program, "normal_map")!,
            RoughnessMap: gl.getUniformLocation(program, "roughness_map")!,

            Eye: gl.getUniformLocation(program, "eye")!,
            LightPositions: gl.getUniformLocation(program, "light_positions")!,
            LightDetails: gl.getUniformLocation(program, "light_details")!,

            ShadowMap: gl.getUniformLocation(program, "shadow_map")!,
            ShadowSpace: gl.getUniformLocation(program, "shadow_space")!,

            VertexPosition: gl.getAttribLocation(program, "position")!,
            VertexTexCoord: gl.getAttribLocation(program, "texcoord")!,
            VertexNormal: gl.getAttribLocation(program, "normal")!,
            VertexTangent: gl.getAttribLocation(program, "tangent")!,
            VertexBitangent: gl.getAttribLocation(program, "bitangent")!,
        },
    };
}
