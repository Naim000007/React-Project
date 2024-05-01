import React from 'react'
import Home from './Page/Home/Home'
import Login from './Page/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Player from './Page/Player/Player'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App