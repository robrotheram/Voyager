import axios from 'axios';

export function getEvents(token, server, time,delta) {
    return function(dispatch) {
        dispatch({type: 'REQ_DATA'});
        return axios({
            url: "http://127.0.0.1:8888/v1/"+server+"/events",
            timeout: 20000,
            crossDomain: true,
            method: 'get',
            params: {
                delta:delta,
                time:time
            },
            headers: {
                'Authorization': 'bearer '+token
            },
            responseType: 'json'
        })
        .then(function(response) {
            console.log(response)
            })
        .catch(function(response){
            console.log(response)
            })
    }
};
