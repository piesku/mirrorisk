import {Vec3} from "../../common/math.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export type Task = TaskProximity | TaskTimeout;

export const enum TaskKind {
    Proximity,
    Timeout,
}

export interface TaskProximity {
    Kind: TaskKind.Proximity;
    Target: Vec3;
}

export function task_proximity(target: Vec3) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Task;
        game.World.Task[entity] = {
            Kind: TaskKind.Proximity,
            Target: target,
        };
    };
}

export interface TaskTimeout {
    Kind: TaskKind.Timeout;
    Remaining: number;
}

export function task_timeout(duration: number) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Task;
        game.World.Task[entity] = {
            Kind: TaskKind.Timeout,
            Remaining: duration,
        };
    };
}
