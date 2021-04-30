import {play_buffer} from "../common/audio.js";
import {html} from "../common/html.js";
import {element} from "../common/random.js";
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
import {Game} from "./game.js";
import {load_audio, load_texture, loop_start} from "./impl.js";
import {scene_stage} from "./scenes/sce_stage.js";
import {Popup} from "./ui/App.js";

let game = new Game();

// @ts-ignore
window.game = game;

// @ts-ignore
window.$ = dispatch.bind(null, game);

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

    load_audio(game, "music1.mp3"),
    load_audio(game, "music2.mp3"),

    load_audio(game, "mhm1.mp3"),
    load_audio(game, "mhm2.mp3"),
    load_audio(game, "mhm3.mp3"),
    load_audio(game, "mhm4.mp3"),

    load_audio(game, "huh1.mp3"),
    load_audio(game, "huh2.mp3"),
    load_audio(game, "huh3.mp3"),
    load_audio(game, "huh4.mp3"),
    load_audio(game, "huh5.mp3"),

    load_audio(game, "battle1.mp3"),
    load_audio(game, "battle2.mp3"),
    load_audio(game, "battle3.mp3"),
    load_audio(game, "battle4.mp3"),
    load_audio(game, "battle5.mp3"),
    load_audio(game, "battle6.mp3"),
]).then(() => {
    scene_stage(game);
    loop_start(game);

    Popup(
        game,
        html`
            <p style="text-align: center;">
                <img src="./textures/rose.webp" width="128" height="128" style="" />
            </p>

            <p>Welcome to <em>Mirrorisk</em>!</p>

            <p>
                West is East and East is West in this virtual cardboard rendition of the 1957's
                <em>Risk</em>. The rules have changed, too: the first time a player is eliminated,
                the game ends immediately. Protect the underdogs before you take the lead!
            </p>

            <p>
                Each turn you'll get reinforcements to deploy into the territories you control.
                Controlling an entire continent will yield a bonus. Select armies with the left
                click; issue orders with the right click. Pan the camera with your left mouse button
                pressed, rotate with the right mosue button, and zoom with the mouse wheel.
            </p>

            <p>Good luck!</p>
        `,
        "Hello!"
    );

    play_buffer(game.Audio, undefined, game.Sounds[element(["music1.mp3", "music2.mp3"])]);
    setInterval(() => {
        play_buffer(game.Audio, undefined, game.Sounds[element(["music1.mp3", "music2.mp3"])]);
    }, 30000);
});
