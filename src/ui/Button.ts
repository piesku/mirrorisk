import {html} from "../../common/html.js";
import {Action} from "../actions.js";

export function Button(content: string, action: Action, disabled: boolean = false) {
    return html`<button
        onmousedown="event.stopPropagation();"
        onmouseup="event.stopPropagation(); $(${action});"
        style="cursor: pointer;"
        ${disabled && "disabled"}
    >
        ${content}
    </div>`;
}
