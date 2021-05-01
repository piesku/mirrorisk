import {html} from "../../common/html.js";

let alertWidth = 400;

export function PopupWindow(title: string, content: string) {
    return html`<div
        class="window"
        style="
            z-index: 100;
            width: ${alertWidth}px;
            position: absolute;
            left: ${(window.innerWidth - alertWidth) / 2}px;
        "
        onmousedown="event.stopPropagation();"
        onmouseup="event.stopPropagation();"
        ontouchstart="event.stopPropagation();"
        ontouchend="event.stopPropagation();"
    >
        <div class="title-bar">
            <div class="title-bar-text">${title}</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">${content}</div>
    </div>`;
}
