import axios from 'axios';

export function regenAPI(token,servername, router) {
    return function(dispatch) {
        dispatch({type: 'REQ_DATA'});
        return axios({
            url: "http://192.168.1.173:8888/v1/server/regen",
            timeout: 20000,
            crossDomain: true,
            headers: {
                'Authorization': 'bearer '+token
            },
            method: 'post',
            data: {
                serverName: servername,
            },
            responseType: 'json'
        })
        .then(function(response) {
            dispatch(updateKey(response.data));
            dispatch({type: 'REQ_COMPLETE'});
        })
        .catch(function(response){
            dispatch({type: 'RECV_ERROR'});
        })
    }
};
export function update(token,servernameold,servername,desciption, ipaddress) {
    return function(dispatch) {
        dispatch({type: 'REQ_DATA'});
        return axios({
            url: "http://192.168.1.173:8888/v1/server/update",
            timeout: 20000,
            crossDomain: true,
            headers: {
                'Authorization': 'bearer '+token
            },
            method: 'post',
            data: {
                serverNameOld:servernameold,
                serverName:servername,
                description:desciption,
                ip_address:ipaddress
            },
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(updateServer(response.data.servers));
                dispatch({type: 'REQ_COMPLETE'});
            })
            .catch(function(response){
                dispatch({type: 'RECV_ERROR'});
            })
    }
};

export function add(token,servername,desciption, ipaddress) {
    return function(dispatch) {
        dispatch({type: 'REQ_DATA'});
        return axios({
            url: "http://192.168.1.173:8888/v1/server/update",
            timeout: 20000,
            crossDomain: true,
            headers: {
                'Authorization': 'bearer '+token
            },
            method: 'post',
            data: {
                serverName:servername,
                description:desciption,
                ip_address:ipaddress
            },
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(addServer(response.data.servers));
                dispatch({type: 'REQ_COMPLETE'});
            })
            .catch(function(response){
                dispatch({type: 'RECV_ERROR'});
            })
    }
};
export function get(token,router) {
    console.log("server data is requested *****");
    return function(dispatch) {
        return axios({
            url: "http://192.168.1.173:8888/v1/server/list",
            timeout: 20000,
            crossDomain: true,
            headers: {
                'Authorization': 'bearer '+token
            },
            method: 'get',
            responseType: 'json'
        })
            .then(function(response) {
                if(response.data.servers !=undefined){
                    dispatch(getServer(response.data.servers));
                }

            })
            .catch(function(response){
                console.log(response);
                router.replace('logout');
            })
    }
};

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
function updateServer(json) {
    return{
        type: 'SERVER_UPDATED',
        data: json
    }
};
function addServer(json) {
    return{
        type: 'SERVER_ADDED',
        data: json
    }
};
function getServer(json) {
    return{
        type: 'SERVER_GOT',
        data: json
    }
};

function updateKey(json) {
    return{
        type: 'KEY_UPDATED',
        data: json
    }
};