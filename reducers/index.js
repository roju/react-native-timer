import { combineReducers } from 'redux';
import timerReducer from './timer-reducer';
import timerSelectReducer from './timer-select-reducer';

export default combineReducers({
    timers: timerReducer,
    selectedTimer: timerSelectReducer
});
