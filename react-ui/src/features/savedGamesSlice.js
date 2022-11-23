import { createSlice } from '@reduxjs/toolkit'

export const savedGamesSlice = createSlice({
    name: 'savedGames',
    initialState: [],
    reducers: {
        addGame: (state, action) =>  {
            const existItem = state.find((game) => game.id === action.payload.id)
            if (!existItem) state.push(action.payload)
        }
    },
})

export const { addGame } = savedGamesSlice.actions;
export const selectSavedGames = state => state.savedGames;

export default savedGamesSlice.reducer;
