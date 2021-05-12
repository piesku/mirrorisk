import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export type Task = TaskUntil | TaskTimeout;

export const enum TaskKind {
    Until,
    Timeout,
}

type Predicate = () => boolean;
type Callback = () => void;

export interface TaskUntil {
    Kind: TaskKind.Until;
    Predicate: Predicate;
    OnDone?: Callback;
}

export function task_until(predicate: Predicate, on_done?: Callback) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Task;
        game.World.Task[entity] = {
            Kind: TaskKind.Until,
            Predicate: predicate,
            OnDone: on_done,
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
            Remaining: duration,
            OnDone: on_done,
        };
    };
}
