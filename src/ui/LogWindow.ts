import {html} from "../../common/html.js";
import {Game} from "../game.js";

export function LogWindow(game: Game) {
    return html`<div
        class="window"
        style="width: 500px; max-height: 300px; margin: 10px; position: absolute; bottom:0; right: 0;"
    >
        <div class="title-bar">
            <div class="title-bar-text">Game log</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            <pre
                class="pre-log"
                style="white-space: pre-wrap;word-wrap: break-word; overflow-y: scroll;height:150px;"
            >
Piesku&#10094;R&#10095; Mirrorisk
&#10094;C&#10095; Copyright Piesku Corp 2001-2021.
      <br/>${game.Logs}
    </pre>
        </div>
    </div>`;
}
