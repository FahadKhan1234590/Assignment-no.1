import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Screens/Signup/Signup'
import Login from './Screens/Login/Login'
import Dashboard from './Screens/Dashboard/Dashboard'
import Product from './Screens/Product'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/product/:id" element={<Product/>} />     

      </Routes>
    </>
  )
}

export default App
