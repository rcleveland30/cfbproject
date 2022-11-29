import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from '../features/scheduleSlice'
import savedGamesReducer from '../features/savedGamesSlice'
import searchDataReducer from '../features/searchDataSlice';
import authenticationReducer from '../features/authenticationSlice';

export default configureStore ({
    reducer: {
        schedule: scheduleReducer,
        savedGames: savedGamesReducer,
        searchData: searchDataReducer,
        isAuth: authenticationReducer
    }
})