import React, { useEffect } from 'react'
import Home from './Page/Home/Home'
import Login from './Page/Login/Login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Player from './Page/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in");
        navigate('/')
      }
      else {
        console.log("logged Out");
        navigate('/login')
      }
    })
  }, [])
  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App