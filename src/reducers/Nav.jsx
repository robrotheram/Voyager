
const defaultState= {
    toggled: false,
};
const nav = (state = defaultState,  action) => {
    switch (action.type) {
        case 'TOGGLE_NAV':
            return { ...state, toggled:!state.toggled};
        default:
            return state
    }
};

export default nav;