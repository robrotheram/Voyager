import axios from 'axios';

function requestData() {
    return {
        type: 'REQ_DATA'
    }
};
function requestComplete() {
    return {
        type: 'REQ_COMPLETE'
    }
};
function receiveData(json) {
    return{
        type: 'RECV_DATA',
        data: json
    }
};

function authenticated(json) {
    return {
        type: 'AUTHENTICATED',
        data: json
    }
}

function authError(json) {
    return {
        type: 'AUTH_ERROR',
        data: json
    }
}
function receiveError(json) {
    return {
        type: 'RECV_ERROR',
        data: json
    }
};
export function authLogin(username, password) {
    return function(dispatch) {
        dispatch({type: 'REQ_DATA'});
        return axios({
            url: "http://192.168.1.173:8888/users/auth",
            timeout: 20000,
            crossDomain: true,
            method: 'post',
            data: {
                username: username,
                password: password
            },
            responseType: 'json'
        })
            .then(function(response) {
            if(response.data.login){
                    dispatch(authenticated(response.data));
                }else{
                    dispatch(authError(response.data));
                }
                dispatch({type: 'REQ_COMPLETE'});
            })
            .catch(function(response){
                dispatch(requestComplete());
                dispatch(receiveError(response.message));
            })
    }
};
function Registered(json) {
    return {
        type: 'REGISTERED',
        data: json
    }
}
function RegisteredError(json) {
    return {
        type: 'REGISTERED_ERROR',
        data: json
    }
};
function userUpdated(json) {
    return {
        type: 'USER_UPDATED',
        data: json
    }
};
export function authRegistered(username, email, password) {
    return function(dispatch) {
        dispatch({type: 'REQ_DATA'});
        return axios({
            url: "http://192.168.1.173:8888/users/register",
            timeout: 20000,
            crossDomain: true,
            method: 'post',
            data: {
                username: username,
                email: email,
                password: password,

            },
            responseType: 'json'
        })
            .then(function(response) {
                if(response.data.error == undefined){
                    dispatch(Registered(response.data));
                }else{
                    dispatch(RegisteredError(response.data));
                    dispatch({type: 'REQ_COMPLETE'});
                }
            })
            .catch(function(response){
                dispatch({type: 'RECV_ERROR'});
            })
    }
};
export function updateUser(token, email, password) {
    return function(dispatch) {
        dispatch({type: 'REQ_DATA'});
        return axios({
            url: "http://192.168.1.173:8888/users/update",
            timeout: 20000,
            crossDomain: true,
            method: 'post',
            headers: {
                'Authorization': 'bearer '+token
            },
            data: {
                email: email,
                password: password,
            },
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(userUpdated(response.data));
                dispatch({type: 'REQ_COMPLETE'});
            })
            .catch(function(response){
                dispatch({type: 'RECV_ERROR'});
            })
    }
};
export function updateEmail(token, email) {
    return function(dispatch) {
        dispatch({type: 'REQ_DATA'});
        return axios({
            url: "http://192.168.1.173:8888/users/update",
            timeout: 20000,
            crossDomain: true,
            method: 'post',
            headers: {
                'Authorization': 'bearer '+token
            },
            data: {
                email: email,
            },
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(userUpdated(response.data));
                dispatch({type: 'REQ_COMPLETE'});
            })
            .catch(function(response){
                dispatch({type: 'RECV_ERROR'});
            })
    }
};

