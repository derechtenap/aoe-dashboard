import {
    writable
} from "svelte/store";

import leaderboards from "../json/leaderboards.json"

// Add checked property to each leaderboard
const leaderboardChecked = leaderboards.map(data => ({
    ...data,
    isChecked: true
}))

// See https://stackoverflow.com/questions/56488202/how-to-persist-svelte-store
const createWritableStore = (key, value) => {
    const {
        subscribe,
        set
    } = writable(value);

    return {
        subscribe,
        set,
        useLocalStorage: () => {
            if (typeof window !== 'undefined') {
                const data = localStorage.getItem(key)
                if (data) {
                    set(data)
                }

                subscribe(current => {
                    localStorage.setItem(key, current)
                })
            }
        }
    }
}

export const boards = createWritableStore('leaderboards', leaderboardChecked)
export const steam64id = createWritableStore('steamid64', '76561197984749679')