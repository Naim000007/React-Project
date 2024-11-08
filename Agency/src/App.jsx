import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/UI/Hero'
import Counter from './Components/UI/Counter'
import Service from './Components/UI/service'
import About from './Components/UI/About'
import Team from './Components/UI/Team'
import Footer from './Components/UI/Footer'
import Blog from './Components/UI/Blog'
import Testimonial from './Components/UI/Testimonial'
import Newsletter from './Components/UI/Newsletter'


function App() {


  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Service />
      <About />
      <Team />
      <Blog />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
