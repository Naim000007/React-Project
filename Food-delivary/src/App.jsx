import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Cart from './page/cart/Cart'
import PlaceOrder from './page/placeorder/PlaceOrder'
import Home from './page/Home/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/order' element={<PlaceOrder />} ></Route>
      </Routes>
    </div>
  )
}

export default App