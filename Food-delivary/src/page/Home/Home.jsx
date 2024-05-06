import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
// import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
// import AppDownload from '../../Components/AppDownload/AppDownload'
const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {/* <AppDownload></AppDownload> */}
    </div>
  )
}

export default Home