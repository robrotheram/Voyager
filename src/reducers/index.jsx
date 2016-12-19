import { combineReducers } from 'redux'
import auth from './auth'
import api from './api'
import register from './register'
import { routerReducer } from 'react-router-redux'

const todoApp = combineReducers({
    auth,
    register,
    api,
    routing: routerReducer
})

export default todoApp