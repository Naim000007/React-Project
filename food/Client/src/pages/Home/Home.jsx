import React from 'react'
import Banner from './Banner/Banner'
import Catagor from './Catagory/Catagory'
import PopularMenu from './Popular_menu/PopularMenu'

const Home = () => {
    return (
        <div>
            <Banner />
            <Catagor />
            <PopularMenu />
        </div>
    )
}

export default Home