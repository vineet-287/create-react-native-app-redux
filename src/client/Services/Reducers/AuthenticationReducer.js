const authenticationReducer = (state = {
        message : "Checking login",
        username : null,
        saveLogin : null,
        signedIn : false
        }, action) => {
    switch (action.type) {
        case 'DEFAULT':
            state = {
                ...state,
                message: action.message
            }
            break;
        case 'TOKEN_FOUND': 
            state = {
                ...state,
                data: action.result,
                status: action.status
            }
            break;
        case 'TOKEN_ERROR': 
            state = {
                ...state,
                errorObj: action.result
            }
            break;

        default:
            break;
    }
    return state;
};

export default authenticationReducer;

