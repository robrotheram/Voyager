import { combineReducers } from 'redux'
import User from './User'
import Server from './Server'
import api from './api'
import nav from './Nav'
import Events from './Events'
import register from './register'
import { routerReducer } from 'react-router-redux'

const todoApp = combineReducers({
    User,
    Server,
    register,
    api,
    Events,
    nav,
    routing: routerReducer
})

export default todoApp