import {
    writable
} from "svelte/store";

import leaderboards from "../json/leaderboards.json";

// Add checked property to each leaderboard
const leaderboardChecked = leaderboards.map(data => ({
    ...data,
    isChecked: true
}));

export const boards = writable(leaderboardChecked);
export const steam64id = writable(null);