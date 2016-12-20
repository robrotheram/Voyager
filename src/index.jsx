import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store';
import Navigation from './Navigation';
import { addTodo } from './actions'
import './styles/Main.scss'
render(
    <Provider store={store}>
        <Navigation/>
    </Provider>,
    document.getElementById('root')
);

setInterval(function() {
    //store.dispatch(addTodo("hello"));
}, 200);

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})