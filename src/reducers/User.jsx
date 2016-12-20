const defaultState= {
    username:"",
    email:"",
    token:"",
    msg:"",
    exp:0,
    authenticated:false,
    error:false
};
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const initialState  = ((persistedState.auth!=undefined) ? persistedState.auth : defaultState);

const auth = (state = defaultState,  action) => {
    console.log("xx",action);
    switch (action.type) {
        case 'AUTHENTICATED':
            return { ...state,
                authenticated:true,
                username:action.data.username,
                token:action.data.token,
                exp:action.data.exp,
                email:action.data.email,
                error:false,
             };
        case 'AUTH_ERROR':
            return { ...state, authenticated:false, msg:action.data.msg, error:true };
        case 'LOG_OUT':
            return { ...state,
                authenticated:false,
                username:"",
                token:"",
                exp:"",
                email:"",
                error:false,
            };
        default:
            return state
    }
};

export default auth;