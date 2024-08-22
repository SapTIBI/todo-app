import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TodoList from './components/TodoList/TodoList'
import TODOList from './data.tsx';
function App() {
  return (
    <>
      <Header/>
      <main>
        <div className="wrapper-content">
          <TodoList todoItemsList={TODOList}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
