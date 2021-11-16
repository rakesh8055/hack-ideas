import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import eventsReducer from './events/events.reducer';


const rootReducer = combineReducers({
    user: userReducer,
    events: eventsReducer
});

export default rootReducer;