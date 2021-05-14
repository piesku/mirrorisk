export const LOG_TEAM_CONTROL_SUMMARY = (team: string, count: number) =>
    `${team} controls ${count === 1 ? "1 territory" : `${count} territories`}`;
export const LOG_TEAM_TURN_START = (team: string) => `C:&#92;> ${team}'s turn.`;
export const LOG_TEAM_DEPLOYS = (team: string, territory: string) =>
    `${team} deploys an army to ${territory}`;

export const LOG_TEAM_ATTACKS = (
    territory: string,
    attacking_team: string,
    attacking_count: number,
    defending_team: string,
    defending_count: number
) =>
    `${attacking_team} attacks ${defending_team} in ${territory} with ${
        attacking_count === 1 ? "1 army" : `${attacking_count} armies`
    } against ${defending_count === 1 ? "1 army" : `${defending_count} armies`}.`;

export const LOG_BATTLE_RESULT_NO_LOSSES = (team: string) => `${team} wins the battle!`;
export const LOG_BATTLE_RESULT_SOME_LOSSES = (team: string, units_lost: number) =>
    `${team} loses ${
        units_lost === 1 ? "1 army" : `${units_lost} armies`
    } but still manages to win the battle!`;

export const LOG_ERROR_UNIT_ALREADY_MOVED = () => "This unit has already moved this turn.";
export const LOG_ERROR_UNIT_CANNOT_LEAVE = () =>
    "This unit cannot move because territories cannot be left unoccupied.";

export const DIALOG_GAME_OVER_TITLE = () => `Game over!`;
export const DIALOG_GAME_OVER_BODY = (name: string) => `Game over! ${name} has won!`;

export const DIALOG_NEW_TURN = (team: string, armies: number) =>
    `It's ${team}'s turn now! Select territories to deploy ${armies} new armies.`;

export const DIALOG_NEW_TURN_WITH_BONUS = (
    team: string,
    armies: number,
    bonus: number,
    continents: Array<string>
) =>
    `It's ${team}'s turn now! You receive ${bonus} extra armies for controlling ${continents.join(
        ", "
    )}. Select territories to deploy ${armies} new armies.`;
