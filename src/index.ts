import {create_texture_from, fetch_image} from "../common/texture.js";
import {mesh_af01} from "../meshes/af01.js";
import {mesh_af02} from "../meshes/af02.js";
import {mesh_af03} from "../meshes/af03.js";
import {mesh_af04} from "../meshes/af04.js";
import {mesh_af05} from "../meshes/af05.js";
import {mesh_af06} from "../meshes/af06.js";
import {mesh_as01} from "../meshes/as01.js";
import {mesh_as02} from "../meshes/as02.js";
import {mesh_as03} from "../meshes/as03.js";
import {mesh_as04} from "../meshes/as04.js";
import {mesh_as05} from "../meshes/as05.js";
import {mesh_as06} from "../meshes/as06.js";
import {mesh_as07} from "../meshes/as07.js";
import {mesh_as08} from "../meshes/as08.js";
import {mesh_as09} from "../meshes/as09.js";
import {mesh_as10} from "../meshes/as10.js";
import {mesh_as11} from "../meshes/as11.js";
import {mesh_as12} from "../meshes/as12.js";
import {mesh_au01} from "../meshes/au01.js";
import {mesh_au02} from "../meshes/au02.js";
import {mesh_au03} from "../meshes/au03.js";
import {mesh_au04} from "../meshes/au04.js";
import {mesh_eu01} from "../meshes/eu01.js";
import {mesh_eu02} from "../meshes/eu02.js";
import {mesh_eu03} from "../meshes/eu03.js";
import {mesh_eu04} from "../meshes/eu04.js";
import {mesh_eu05} from "../meshes/eu05.js";
import {mesh_eu06} from "../meshes/eu06.js";
import {mesh_eu07} from "../meshes/eu07.js";
import {mesh_na01} from "../meshes/na01.js";
import {mesh_na02} from "../meshes/na02.js";
import {mesh_na03} from "../meshes/na03.js";
import {mesh_na04} from "../meshes/na04.js";
import {mesh_na05} from "../meshes/na05.js";
import {mesh_na06} from "../meshes/na06.js";
import {mesh_na07} from "../meshes/na07.js";
import {mesh_na08} from "../meshes/na08.js";
import {mesh_na09} from "../meshes/na09.js";
import {mesh_sa01} from "../meshes/sa01.js";
import {mesh_sa02} from "../meshes/sa02.js";
import {mesh_sa03} from "../meshes/sa03.js";
import {mesh_sa04} from "../meshes/sa04.js";
import {dispatch} from "./actions.js";
import {Game, PlayerType} from "./game.js";
import {loop_start} from "./loop.js";
import {scene_stage} from "./scenes/sce_stage.js";

let game = new Game();

// @ts-ignore
window.game = game;

// @ts-ignore
window.$ = dispatch.bind(null, game);

// @ts-ignore
for (let texture of document.querySelectorAll("img")) {
    game.Textures[texture.id] = create_texture_from(game.Gl, texture);
}

game.TerritoryMeshes = [
    [
        // Europe
        mesh_eu01(game.Gl),
        mesh_eu02(game.Gl),
        mesh_eu03(game.Gl),
        mesh_eu04(game.Gl),
        mesh_eu05(game.Gl),
        mesh_eu06(game.Gl),
        mesh_eu07(game.Gl),
    ],
    [
        // Africa
        mesh_af01(game.Gl),
        mesh_af02(game.Gl),
        mesh_af03(game.Gl),
        mesh_af04(game.Gl),
        mesh_af05(game.Gl),
        mesh_af06(game.Gl),
    ],
    [
        // Australia
        mesh_au01(game.Gl),
        mesh_au02(game.Gl),
        mesh_au03(game.Gl),
        mesh_au04(game.Gl),
    ],
    [
        // North America
        mesh_na01(game.Gl),
        mesh_na02(game.Gl),
        mesh_na03(game.Gl),
        mesh_na04(game.Gl),
        mesh_na05(game.Gl),
        mesh_na06(game.Gl),
        mesh_na07(game.Gl),
        mesh_na08(game.Gl),
        mesh_na09(game.Gl),
    ],
    [
        // South America
        mesh_sa01(game.Gl),
        mesh_sa02(game.Gl),
        mesh_sa03(game.Gl),
        mesh_sa04(game.Gl),
    ],
    [
        // Asia
        mesh_as01(game.Gl),
        mesh_as02(game.Gl),
        mesh_as03(game.Gl),
        mesh_as04(game.Gl),
        mesh_as05(game.Gl),
        mesh_as06(game.Gl),
        mesh_as07(game.Gl),
        mesh_as08(game.Gl),
        mesh_as09(game.Gl),
        mesh_as10(game.Gl),
        mesh_as11(game.Gl),
        mesh_as12(game.Gl),
    ],
];

game.Players = [
    {
        Name: "Yellow",
        Color: [1, 1, 0, 1],
        Type: PlayerType.Human,
    },
    {Name: "Red", Color: [1, 0, 0, 1], Type: PlayerType.AI},
    {Name: "Violet", Color: [1, 0, 1, 1], Type: PlayerType.AI},
];

Promise.all([
    // Table cloth.
    load_texture(game, "Fabric023_1K_Color.jpg"),
    load_texture(game, "Fabric023_1K_Normal.jpg"),
    load_texture(game, "Fabric023_1K_Roughness.jpg"),

    // Continents
    load_texture(game, "euau.webp"),
    load_texture(game, "afsa.webp"),
    load_texture(game, "na.webp"),
    load_texture(game, "as.webp"),
    load_texture(game, "Cardboard004_1K_Normal.jpg"),
    load_texture(game, "Cardboard004_1K_Roughness.jpg"),

    // Meeples
    load_texture(game, "Wood063_1K_Color.jpg"),
    load_texture(game, "Wood063_1K_Normal.jpg"),
    load_texture(game, "Wood063_1K_Roughness.jpg"),

    load_audio(game, "huh1.mp3"),
    load_audio(game, "huh2.mp3"),
    load_audio(game, "huh3.mp3"),
    load_audio(game, "huh4.mp3"),
    load_audio(game, "huh5.mp3"),
]).then(() => {
    scene_stage(game);
    loop_start(game);
});

async function load_texture(game: Game, name: string) {
    let image = await fetch_image("./textures/" + name);
    game.Textures[name] = create_texture_from(game.Gl, image);

    // Report loading progress.
    game.Ui.innerHTML += `Loading <code>${name}</code>... ✓<br>`;
}

async function load_audio(game: Game, name: string) {
    let response = await fetch("./sounds/" + name);
    let arrayBuffer = await response.arrayBuffer();
    game.Sounds[name] = await game.Audio.decodeAudioData(arrayBuffer);

    // Report loading progress.
    game.Ui.innerHTML += `Loading <code>${name}</code>... ✓<br>`;
}
