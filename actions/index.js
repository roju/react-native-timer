export const ADD_TIMER = 'ADD_TIMER';
export const UPDATE_TIME = 'UPDATE_TIME';
export const SELECT_TIMER = 'SELECT_TIMER';
export const START_TIMER = 'START_TIMER';

export const addTimer = (name = "Timer") => {
    return {
        type: ADD_TIMER,
        payload: name
    }
}

export const updateTime = (index) => {
    return {
        type: UPDATE_TIME
    }
}

export const selectTimer = (index) => {
    return {
        type: SELECT_TIMER,
        payload: {index}
    }
}

export const startTimer = (index) => {
    return {
        type: START_TIMER,
        payload: {index}
    }
}
