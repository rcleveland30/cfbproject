import { configureStore } from '@reduxjs/toolkit';
import lastWeekReducer from '../features/lastWeekSlice'

export default configureStore ({
    reducer: {
        lastGames: lastWeekReducer,
    }
})