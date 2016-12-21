const defaultState= {
    fetching:false,
    error: false,
    complete: false
};
const api = (state = defaultState,  action) => {
    switch (action.type) {
        case 'REQ_RESET':
            return { ...state, fetching:false, error: false, complete:false };
        case 'REQ_DATA':
            return { ...state, fetching:true, error: false, complete:false };
        case 'REQ_COMPLETE':
            return { ...state, fetching:false, error: false,complete:true};
        case 'RECV_ERROR':
            return { ...state, fetching:false, error: true,complete:false};
        default:
            return state
    }
};
export default api;