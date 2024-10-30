import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Signup/>}/>
    </Routes>
  )
}

export default App
