import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware} from 'react-router-redux'
import {hashHistory} from 'react-router';
import todoApp from '../reducers' ;
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const middleware = applyMiddleware(logger(),thunk,routerMiddleware(hashHistory));
export default createStore(todoApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);



//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()