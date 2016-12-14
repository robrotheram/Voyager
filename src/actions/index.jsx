let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
export function fetchTodos() {
    // Instead of plain objects, we are returning function.
    return function(dispatch) {
        // Dispatching REQUEST action, which tells our app, that we are started requesting todos.
        dispatch({
            type: 'FETCH_TODOS_REQUEST'
        });
        return fetch('/api/todos')
        // Here, we are getting json body(in our case it will contain `todos` or `error` prop, depending on request was failed or not) from server response
        // And providing `response` and `body` variables to the next chain.
            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    // If request was failed, dispatching FAILURE action.
                    dispatch({
                        type: 'FETCH_TODOS_FAILURE',
                        error: body.error
                    });
                } else {
                    // When everything is ok, dispatching SUCCESS action.
                    dispatch({
                        type: 'FETCH_TODOS_SUCCESS',
                        todos: body.todos
                    });
                }
            });
    }
}