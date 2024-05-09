import React from 'react'
import Banner from './Banner/Banner'
import Catagor from './Catagory/Catagory'
import PopularMenu from './Popular_menu/PopularMenu'
import Featured from './Featured/Featured'
import Testimonials from './Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <Catagor />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    )
}

export default Home