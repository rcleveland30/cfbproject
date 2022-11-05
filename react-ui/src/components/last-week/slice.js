import { createSlice } from '@reduxjs/toolkit';

export const lastWeekSlice = createSlice({
    name: 'week',
    initialState: 'Hello world',
    reducers: {
        changeGreeting: (state, action) => "Hola mundo"
    }
});

export const { changeGreeting } = lastWeekSlice.actions;
export const selectLastWeek = (state) => state.lastGames;
export default lastWeekSlice.reducer;
