const INITIAL_STATE = {
    items: [],
    isFetching: false,
    error: undefined
};

function todosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FETCH_TODOS_REQUEST':
            // This time, you may want to display loader in the UI.
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'FETCH_TODOS_SUCCESS':
            // Adding derived todos to state
            return Object.assign({}, state, {
                isFetching: false,
                todos: action.todos
            });
        case 'FETCH_TODOS_FAILURE':
            // Providing error message to state, to be able display it in UI.
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        default:
            return state;
    }
}
export default todosReducer