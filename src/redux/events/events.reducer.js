const INITIAL_STATE = {
    events: []
}

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_EVENTS':
            return {
                ...state,
                events: action.payload
            };
        default:
            return state;
    }
};
export default eventsReducer;