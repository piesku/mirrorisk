import {Vec3} from "../../common/math.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export type Task = TaskProximity | TaskTimeout;

export const enum TaskKind {
    Proximity,
    Timeout,
}

type Callback = () => void;

export interface TaskProximity {
    Kind: TaskKind.Proximity;
    Target: Vec3;
    OnDone?: Callback;
}

export function task_proximity(target: Vec3, on_done?: Callback) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Task;
        game.World.Task[entity] = {
            Kind: TaskKind.Proximity,
            OnDone: on_done,
            Target: target,
        };
    };
}

export interface TaskTimeout {
    Kind: TaskKind.Timeout;
    Remaining: number;
    OnDone?: Callback;
}

export function task_timeout(duration: number, on_done?: Callback) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Task;
        game.World.Task[entity] = {
            Kind: TaskKind.Timeout,
            OnDone: on_done,
            Remaining: duration,
        };
    };
}
