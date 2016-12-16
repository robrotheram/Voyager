const defaultState= {
    data:{},
    fetching:false,
    error: false,
};
const api = (state = defaultState,  action) => {

    console.log("+++data+++",action);

    switch (action.type) {
        case 'REQ_DATA':
            return { ...state, fetching:true, error: false };
        case 'RECV_DATA':
            return { ...state, fetching:false, error: false, data:action.data };
        case 'REQ_COMPLETE':
            return { ...state, fetching:false, error: false};

        case 'RECV_ERROR':
            return { ...state, fetching:false, error: true};
        default:
            return state
    }
};

export default api;