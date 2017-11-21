import {combineReducers} from "redux";

import basic from './BasicReducer';
import authentication from './AuthenticationReducer';

const appReducer = combineReducers({
    basic,
    authentication
});

const rootReducer = (state, action) => {
    if(action.type === 'ERASE_DATA') {
        state = undefined;
    }
    return appReducer(state,action);
}

export default rootReducer;