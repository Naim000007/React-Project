import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/UI/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
