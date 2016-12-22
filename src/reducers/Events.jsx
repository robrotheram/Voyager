const defaultState= {
    data:[]
};
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const initialState  = ((persistedState.auth!=undefined) ? persistedState.auth : defaultState);

const Events = (state = defaultState,  action) => {
    console.log("xx",action);
    switch (action.type) {
        case 'EVENT_RECV':
            return { ...state,
                data:action.data,
             };
        default:
            return state;
    }
};

export default Events;