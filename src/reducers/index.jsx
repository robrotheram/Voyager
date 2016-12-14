import { combineReducers } from 'redux'
import auth from './auth'
import todosReducer from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    auth,
    todosReducer,
    visibilityFilter
})

export default todoApp