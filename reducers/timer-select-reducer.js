import { ADD_TIMER, START_TIMER, UPDATE_TIME } from '../actions';

export default timerSelectReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TIMER:
            return state;
        case START_TIMER:
            return state;
        case UPDATE_TIME:
            return state;
        default:
            return state;
    }
}
