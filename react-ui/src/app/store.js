import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from '../features/scheduleSlice'
import savedGamesReducer from '../features/savedGamesSlice'

export default configureStore ({
    reducer: {
        schedule: scheduleReducer,
        savedGames: savedGamesReducer
    }
})