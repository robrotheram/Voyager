const defaultState= {
    username:"",
    isAuth:false,
};
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const initialState  = ((persistedState.auth!=undefined) ? persistedState.auth : defaultState);

const auth = (state = initialState,  action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, isAuth:true };
        case 'LOG_OUT':
            return { ...state, isAuth:false };
        default:
            return state
    }
};

export default auth;