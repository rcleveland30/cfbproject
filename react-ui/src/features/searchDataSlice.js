import { createSlice } from "@reduxjs/toolkit";

export const searchDataSlice = createSlice({
    name: 'searchData',
    initialState: [],
    reducers: {
        doSearchData: (state, action) => action.payload,
        setSearchQuery: (state, action) => action.payload
    }
});

export const { doSearchData, setSearchQuery }= searchDataSlice.actions;
export const selectSearchData = state => state.searchData

export default searchDataSlice.reducer;