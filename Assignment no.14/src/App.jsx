import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Product from './Screens/Product'
import AllProducts from './Screens/AllProducts'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={'product/:id'} element={<Product/>}/>
      <Route path={'allproducts'} element={<AllProducts/>}/>

    </Routes>
  )
}

export default App
