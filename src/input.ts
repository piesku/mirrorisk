import {Vec2} from "../common/math";
import {Game} from "./game";

export function input_init(game: Game) {
    game.Ui.addEventListener("contextmenu", (evt) => evt.preventDefault());

    game.Ui.addEventListener("mousedown", (evt) => {
        game.InputState[`Mouse${evt.button}`] = 1;
        game.InputDelta[`Mouse${evt.button}`] = 1;
    });
    game.Ui.addEventListener("mouseup", (evt) => {
        game.InputState[`Mouse${evt.button}`] = 0;
        game.InputDelta[`Mouse${evt.button}`] = -1;
    });
    game.Ui.addEventListener("mousemove", (evt) => {
        game.InputState["MouseX"] = evt.clientX;
        game.InputState["MouseY"] = evt.clientY;
        game.InputDelta["MouseX"] = evt.movementX;
        game.InputDelta["MouseY"] = evt.movementY;
    });
    game.Ui.addEventListener("wheel", (evt) => {
        game.InputDelta["WheelY"] = evt.deltaY;
    });

    game.Ui.addEventListener("touchstart", (evt) => {
        for (let i = 0; i < evt.changedTouches.length; i++) {
            let touch = evt.changedTouches[i];
            game.InputState[`Touch${touch.identifier}`] = 1;
            game.InputState[`Touch${touch.identifier}X`] = touch.screenX;
            game.InputState[`Touch${touch.identifier}Y`] = touch.screenY;
            game.InputDelta[`Touch${touch.identifier}`] = 1;
            game.InputDelta[`Touch${touch.identifier}X`] = 0;
            game.InputDelta[`Touch${touch.identifier}Y`] = 0;
        }
    });
    game.Ui.addEventListener("touchmove", (evt) => {
        for (let i = 0; i < evt.changedTouches.length; i++) {
            let touch = evt.changedTouches[i];
            game.InputDelta[`Touch${touch.identifier}X`] =
                touch.screenX - game.InputState[`Touch${touch.identifier}X`];
            game.InputDelta[`Touch${touch.identifier}Y`] =
                touch.screenY - game.InputState[`Touch${touch.identifier}Y`];
            game.InputState[`Touch${touch.identifier}X`] = touch.screenX;
            game.InputState[`Touch${touch.identifier}Y`] = touch.screenY;
        }
    });
    game.Ui.addEventListener("touchend", (evt) => {
        for (let i = 0; i < evt.changedTouches.length; i++) {
            let touch = evt.changedTouches[i];
            game.InputState[`Touch${touch.identifier}`] = 0;
            game.InputDelta[`Touch${touch.identifier}`] = -1;
        }
    });
    game.Ui.addEventListener("touchcancel", (evt) => {
        for (let i = 0; i < evt.changedTouches.length; i++) {
            let touch = evt.changedTouches[i];
            game.InputState[`Touch${touch.identifier}`] = 0;
            game.InputDelta[`Touch${touch.identifier}`] = -1;
        }
    });

    window.addEventListener("keydown", (evt) => {
        if (!evt.repeat) {
            game.InputState[evt.code] = 1;
            game.InputDelta[evt.code] = 1;
        }
    });
    window.addEventListener("keyup", (evt) => {
        game.InputState[evt.code] = 0;
        game.InputDelta[evt.code] = -1;
    });
}

export function input_frame_setup(game: Game) {
    let traveled = Math.abs(game.InputDelta["MouseX"] + game.InputDelta["MouseY"]);
    game.InputDistance["Mouse"] += traveled;

    if (game.InputState["Mouse0"] === 1) {
        game.InputDistance["Mouse0"] += traveled;
    }
    if (game.InputState["Mouse1"] === 1) {
        game.InputDistance["Mouse1"] += traveled;
    }
    if (game.InputState["Mouse2"] === 1) {
        game.InputDistance["Mouse2"] += traveled;
    }

    if (game.InputState["Touch0"] === 1) {
        game.InputDistance["Touch0"] += traveled;
    }
    if (game.InputState["Touch1"] === 1) {
        game.InputDistance["Touch1"] += traveled;
    }
}

export function input_frame_reset(game: Game) {
    if (game.InputDelta["Mouse0"] === -1) {
        game.InputDistance["Mouse0"] = 0;
    }
    if (game.InputDelta["Mouse1"] === -1) {
        game.InputDistance["Mouse1"] = 0;
    }
    if (game.InputDelta["Mouse2"] === -1) {
        game.InputDistance["Mouse2"] = 0;
    }

    if (game.InputDelta["Touch0"] === -1) {
        game.InputDistance["Touch0"] = 0;
    }
    if (game.InputDelta["Touch1"] === -1) {
        game.InputDistance["Touch1"] = 0;
    }

    for (let name in game.InputDelta) {
        game.InputDelta[name] = 0;
    }
}

export function input_clicked(game: Game, mouse_button: number, touch_id: number) {
    return (
        (game.InputDelta["Mouse" + mouse_button] === -1 &&
            game.InputDistance["Mouse" + mouse_button] < 10) ||
        (game.InputDelta["Touch" + touch_id] === -1 && game.InputDistance["Touch" + touch_id] < 10)
    );
}

export function input_pointer_position(game: Game): Vec2 | null {
    if (game.InputState["Touch0"] === 1 || game.InputDelta["Touch0"] === -1) {
        return [game.InputState["Touch0X"], game.InputState["Touch0Y"]];
    }

    if (game.InputDistance["Mouse"] > 0) {
        return [game.InputState["MouseX"], game.InputState["MouseY"]];
    }

    // No mouse, no touch.
    return null;
}
