import React, { useState } from 'react'
import Create from './Create.jsx'

function Home() {
    const [todos, setTodos] = useState([])
  return (
    <>
    <h2>Todo List</h2>
    <Create />
    {
      todos.length === 0 
      ?
      <div><h2>No Record</h2></div>
      :
      todos.map(todo =>(
        <div>
          {todo}
        </div>
      ))
    }
    </>
  )
}

export default Home
