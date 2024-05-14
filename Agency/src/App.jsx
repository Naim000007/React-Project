import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/UI/Hero'
import Counter from './Components/UI/Counter'
import Service from './Components/UI/service'
import About from './Components/UI/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Service />
      <About />
    </>
  )
}

export default App
