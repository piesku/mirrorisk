import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface AudioSource {
    /** The panner for 3D sound. */
    Panner?: PannerNode;
    /** The next clip to play. */
    Trigger?: AudioBuffer;
    /** The clip which was triggered most recently. */
    Current?: AudioBuffer;
    /** The clip to play by default, in a loop. */
    Idle?: AudioBuffer;
    /** Elapsed time since the last clip change. */
    Time: number;
}

/**
 * Add the AudioSource component.
 *
 * @param spatial Does the source produce 3D sound?
 * @param idle The name of the clip to play by default, in a loop.
 */
export function audio_source(spatial: boolean, idle?: AudioBuffer) {
    return (game: Game, entity: Entity) => {
        let panner = spatial ? game.Audio.createPanner() : undefined;

        game.World.Signature[entity] |= Has.AudioSource;
        game.World.AudioSource[entity] = {
            Panner: panner,
            Idle: idle,
            Time: 0,
        };
    };
}
