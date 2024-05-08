import React from 'react'
import Banner from './Banner/Banner'
import Catagor from './Catagory/Catagory'
import PopularMenu from './Popular_menu/PopularMenu'
import Featured from './Featured/Featured'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
    return (
        <div>
            <Banner />
            <Catagor />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    )
}

export default Home