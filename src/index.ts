import {mesh_eu01} from "../meshes/eu01.js";
import {mesh_eu02} from "../meshes/eu02.js";
import {mesh_eu03} from "../meshes/eu03.js";
import {mesh_eu04} from "../meshes/eu04.js";
import {mesh_eu05} from "../meshes/eu05.js";
import {mesh_eu06} from "../meshes/eu06.js";
import {mesh_eu07} from "../meshes/eu07.js";
import {Game} from "./game.js";
import {loop_start} from "./loop.js";
import {scene_stage} from "./scenes/sce_stage.js";

let game = new Game();
// @ts-ignore
window.game = game;

game.Regions.Europe.push(
    mesh_eu01(game.Gl),
    mesh_eu02(game.Gl),
    mesh_eu03(game.Gl),
    mesh_eu04(game.Gl),
    mesh_eu05(game.Gl),
    mesh_eu06(game.Gl),
    mesh_eu07(game.Gl)
);

scene_stage(game);
loop_start(game);
