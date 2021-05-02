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
        evt.preventDefault();
        if (evt.touches.length === 1) {
            // It's a new gesture.
            game.InputTouches = {};
        }
        for (let i = 0; i < evt.touches.length; i++) {
            let touch = evt.touches[i];
            game.InputTouches[touch.identifier] = i;
        }
        for (let i = 0; i < evt.changedTouches.length; i++) {
            let touch = evt.changedTouches[i];
            let index = game.InputTouches[touch.identifier];
            game.InputState[`Touch${index}`] = 1;
            game.InputState[`Touch${index}X`] = touch.clientX;
            game.InputState[`Touch${index}Y`] = touch.clientY;
            game.InputDelta[`Touch${index}`] = 1;
            game.InputDelta[`Touch${index}X`] = 0;
            game.InputDelta[`Touch${index}Y`] = 0;
        }
    });
    game.Ui.addEventListener("touchmove", (evt) => {
        evt.preventDefault();
        for (let i = 0; i < evt.changedTouches.length; i++) {
            let touch = evt.changedTouches[i];
            let index = game.InputTouches[touch.identifier];
            game.InputDelta[`Touch${index}X`] = touch.clientX - game.InputState[`Touch${index}X`];
            game.InputDelta[`Touch${index}Y`] = touch.clientY - game.InputState[`Touch${index}Y`];
            game.InputState[`Touch${index}X`] = touch.clientX;
            game.InputState[`Touch${index}Y`] = touch.clientY;
        }
    });
    game.Ui.addEventListener("touchend", (evt) => {
        evt.preventDefault();
        for (let i = 0; i < evt.changedTouches.length; i++) {
            let touch = evt.changedTouches[i];
            let index = game.InputTouches[touch.identifier];
            game.InputState[`Touch${index}`] = 0;
            game.InputDelta[`Touch${index}`] = -1;
        }
    });
    game.Ui.addEventListener("touchcancel", (evt) => {
        evt.preventDefault();
        for (let i = 0; i < evt.changedTouches.length; i++) {
            let touch = evt.changedTouches[i];
            let index = game.InputTouches[touch.identifier];
            game.InputState[`Touch${index}`] = 0;
            game.InputDelta[`Touch${index}`] = -1;
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
    let mouse_distance = Math.abs(game.InputDelta["MouseX"]) + Math.abs(game.InputDelta["MouseY"]);
    game.InputDistance["Mouse"] += mouse_distance;

    if (game.InputState["Mouse0"] === 1) {
        game.InputDistance["Mouse0"] += mouse_distance;
    }
    if (game.InputState["Mouse1"] === 1) {
        game.InputDistance["Mouse1"] += mouse_distance;
    }
    if (game.InputState["Mouse2"] === 1) {
        game.InputDistance["Mouse2"] += mouse_distance;
    }

    if (game.InputState["Touch0"] === 1) {
        game.InputDistance["Touch0"] +=
            Math.abs(game.InputDelta["Touch0X"]) + Math.abs(game.InputDelta["Touch0Y"]);
    }
    if (game.InputState["Touch1"] === 1) {
        game.InputDistance["Touch1"] +=
            Math.abs(game.InputDelta["Touch1X"]) + Math.abs(game.InputDelta["Touch1Y"]);
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
