import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import CreateNewUser from './Screens/CreateNewUser'
import EditUser from './Screens/EditUser'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/createnewuser' element={<CreateNewUser/>}/>
      <Route path='/edituser/:id' element={<EditUser/>}/>
    </Routes>
  )
}

export default App
