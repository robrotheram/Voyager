const defaultState= {
    server_name:"",
    ip_address:"",
    public_key:"",
    status:""
};
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const initialState  = ((persistedState.auth!=undefined) ? persistedState.auth : defaultState);

const Server = (state = defaultState,  action) => {
    console.log("xx",action);
    switch (action.type) {
        case 'SERVER_UPDATED':
            return { ...state,
                server:action.data.server_name,
                ip_address:action.data.ip_address,
                public_key:action.data.public_key,
                status: action.data.status
             };
        case 'KEY_UPDATED':
            return { ...state, public_key:action.data.publicKey };
        case 'STATUS_UPDATED':
            return { ...state, status:action.data.status };
        default:
            return state
    }
};
export default Server;