import {create_texture_from, fetch_image} from "../common/texture.js";
import {Entity, Game} from "./game.js";
import {Has, World} from "./world.js";

export function create_entity(world: World) {
    if (world.Graveyard.length > 0) {
        return world.Graveyard.pop()!;
    }

    if (DEBUG && world.Signature.length > 10000) {
        throw new Error("No more entities available.");
    }

    // Push a new signature and return its index.
    return world.Signature.push(0) - 1;
}

export function destroy_entity(world: World, entity: Entity) {
    if (world.Signature[entity] & Has.Children) {
        for (let child of world.Children[entity].Children) {
            destroy_entity(world, child);
        }
    }

    world.Signature[entity] = 0;

    if (DEBUG && world.Graveyard.includes(entity)) {
        throw new Error("Entity already in graveyard.");
    }

    world.Graveyard.push(entity);
}

type Mixin = (game: Game, entity: Entity) => void;
export type Blueprint = Array<Mixin | false>;

export function instantiate(game: Game, blueprint: Blueprint) {
    let entity = create_entity(game.World);
    for (let mixin of blueprint) {
        if (mixin) {
            mixin(game, entity);
        }
    }
    return entity;
}

let raf = 0;

export function loop_start(game: Game) {
    let last = performance.now();

    let tick = (now: number) => {
        let delta = (now - last) / 1000;
        game.FrameSetup();
        game.FrameUpdate(delta);
        game.FrameReset();
        last = now;
        raf = requestAnimationFrame(tick);
    };

    loop_stop();
    tick(last);
}

export function loop_stop() {
    cancelAnimationFrame(raf);
}

export async function load_texture(game: Game, name: string) {
    let image = await fetch_image("./textures/" + name);
    game.Textures[name] = create_texture_from(game.Gl, image);

    // Report loading progress.
    game.Ui.innerHTML += `Loading <code>${name}</code>... ✓<br>`;
}

export async function load_audio(game: Game, name: string) {
    let response = await fetch("./sounds/" + name);
    let arrayBuffer = await response.arrayBuffer();

    // Safari doesn't support the Promise-based decodeAudioData, smh.
    game.Sounds[name] = await new Promise((resolve, reject) => {
        game.Audio.decodeAudioData(arrayBuffer, resolve, reject);
    });

    // Report loading progress.
    game.Ui.innerHTML += `Loading <code>${name}</code>... ✓<br>`;
}
