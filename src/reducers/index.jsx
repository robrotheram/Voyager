import { combineReducers } from 'redux'
import auth from './auth'
import api from './api'
import register from './register'


const todoApp = combineReducers({
    auth,
    register,
    api
})

export default todoApp