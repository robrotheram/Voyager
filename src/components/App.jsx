import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CardTitles from '../cards/CardTitles';

const App = () => (
    <div>
        <CardTitles/>
        <AddTodo />
        <VisibleTodoList />

        <Footer />
    </div>
)

export default App