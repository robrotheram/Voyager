import { combineReducers } from 'redux'
import auth from './auth'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    auth,
    todos,
    visibilityFilter
})

export default todoApp