import {Game} from "../game.js";
import {App} from "../ui/App.js";

let prev: string;

export function sys_ui(game: Game, delta: number) {
    let next = App(game);
    if (next !== prev) {
        game.Ui.innerHTML = prev = next;
        setTimeout(() => {
            let log = game.Ui.querySelector(".pre-log");
            if (log) {
                log.scroll(0, Number.MAX_SAFE_INTEGER);
            }
        }, 100);
    }
}
