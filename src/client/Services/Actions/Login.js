import axios from 'axios';
import env from '../../../../env';

function makeAuthentication(email, password) {
    return dispatch => {
        
        //Uncomment these lines to see login error with message
        /* return dispatch({
            type: 'TOKEN_ERROR',
            status: true,
            result: {status : false, message : "Some error occured."},
        }); */
        
        //Return dispatch object with success
        return dispatch({
            type: 'TOKEN_FOUND',
            status: true,
            result: {status : true, message : "Logged in successfully."},
        });
        
        
        //This code indicates call REST API and use it in our app. This code will give you an idea.
        /*return axios.post(env.apiUrl + env.tokenRoute, {
            'grant_type': 'password',
            'client_id': 'aasdsadsad',
            'client_secret': 'asdsadsadsad',
            'username': email,
            'password': password,
            'scope': 'user contact message',
        }).then((result) => {
            if (result.data.errors) {
                dispatch({
                    type: 'TOKEN_ERROR',
                    result: result.data,
                });
                return;
            }

            dispatch({
                type: 'TOKEN_FOUND',
                status: true,
                result: result.data,
            });
        }).catch(error => {
            dispatch({
                type: 'TOKEN_ERROR',
                result: {status : false, error : error},
            });
            return;
        }); */
    };
}

module.exports = {
    makeAuthentication
};
