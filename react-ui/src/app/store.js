import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from '../features/scheduleSlice'
import savedGamesReducer from '../features/savedGamesSlice'
import searchDataReducer from '../features/searchDataSlice';

export default configureStore ({
    reducer: {
        schedule: scheduleReducer,
        savedGames: savedGamesReducer,
        searchData: searchDataReducer
    }
})