import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSchedule = createAsyncThunk('schedules/all', async () => { // <--URL called in another place, how to call it here? It's exported? Also, it's hard-coded
  const response = await fetch('http://localhost:8080/schedule');
  const data = await response.json();
  return data.data;
});

export const lastWeekSlice = createSlice({
  name: 'lastWeek',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSchedule.fulfilled, (state, action) => action.payload);
  },
});

export const selectLastWeek = (state) => state.breeds; // <--- "breeds?"

export default lastWeekSlice.reducer;