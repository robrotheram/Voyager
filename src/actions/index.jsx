import axios from 'axios';

let nextTodoId = 0

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

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

function receiveError(json) {
    return {
        type: 'RECV_ERROR',
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

export function fetchData(url) {
    return function(dispatch) {
        dispatch(requestData());
        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
        .then(function(response) {
            dispatch(receiveData(response.data));
        })
        .catch(function(response){
            dispatch(receiveError(response.data));

        })
    }
};


