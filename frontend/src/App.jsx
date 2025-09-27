import { useState } from 'react'
import './App.css'
import Home from './Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      {/* <Home /> */}
      {/* <Signup /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
