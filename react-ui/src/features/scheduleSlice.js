import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentWeek } from '../utils';

export const fetchSchedule = createAsyncThunk('schedules/all', async () => { // <--URL called in another place, how to call it here? It's exported? Also, it's hard-coded
  const currentWeek = getCurrentWeek();
  const response = await fetch(`http://localhost:8080/schedule/?currentWeek=${currentWeek}`);
  const data = await response.json();
  return data;
});

export const scheduleSlice = createSlice({
  name: 'lastWeek',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSchedule.fulfilled, (state, action) => action.payload);
  },
});

export const selectThisWeek = (state) => state.schedule.currentWeek;
export const selectLastWeek = (state) => state.schedule.lastWeek;
export const selectNextWeek = (state) => state.schedule.nextWeek;

export default scheduleSlice.reducer;