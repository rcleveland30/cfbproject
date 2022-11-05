import { configureStore } from '@reduxjs/toolkit';
import lastWeekReducer from '../components/last-week/slice'

export default configureStore ({
    reducer: {
        lastGames: lastWeekReducer,
    }
})