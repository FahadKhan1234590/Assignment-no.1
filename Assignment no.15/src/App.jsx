import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import CreateNewUser from './Screens/CreateNewUser'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/createnewuser' element={<CreateNewUser/>}/>
    </Routes>
  )
}

export default App
