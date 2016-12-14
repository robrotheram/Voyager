import { createStore, applyMiddleware } from 'redux';
import todoApp from '../reducers' ;
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const middleware = applyMiddleware(logger(),thunk);
export default createStore(todoApp, middleware);



//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()