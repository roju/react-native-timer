import { ADD_TIMER, TOGGLE_TIMER, UPDATE_TIME } from '../actions';
import Timer from './timer';

export default timerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TIMER:
        return newState = [...state, new Timer(action.payload)];
    case TOGGLE_TIMER:
        console.log("toggle timer reducer" + action.payload );
        const newState = state.map((timer, i) => {
            if (i === action.payload){
                timer.isRunning = !timer.isRunning;
            } else {
                timer.isRunning = false;
            }
            return timer;
        });
    case UPDATE_TIME:
        return state.map((timer, i) => {
            if (timer.isRunning) {
                timer.time += 1;
            }
            return timer;
        });
    default:
      return state;
  }
}
