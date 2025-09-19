import React, { useEffect, useState } from 'react'
import Create from './Create.jsx'
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs";


function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    }, [])
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
        <div className='task'>
          <div className='checkbox'>
            <BsCircleFill className = 'icon' />
            <p>{todo.task}</p>
          </div>
          <div>
            <span><BsFillTrashFill className = "icon" /></span>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default Home
