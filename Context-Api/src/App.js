import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import router from './utils/routes'

function App() {
  return (
    <RouterProvider router={router} >

    </RouterProvider>
  )
}

export default App
