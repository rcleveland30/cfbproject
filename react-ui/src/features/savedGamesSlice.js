import { createSlice } from '@reduxjs/toolkit'

export const savedGamesSlice = createSlice({
    name: 'savedGames',
    initialState: [],
    reducers: {
        addGame: (state, action) => [...state, action.payload]
    },
})

export const { addGame } = savedGamesSlice.actions;
export const selectSavedGames = state => state.savedGames;

export default savedGamesSlice.reducer;