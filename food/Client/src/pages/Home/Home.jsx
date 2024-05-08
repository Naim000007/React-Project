import React from 'react'
import Banner from './Banner/Banner'
import Catagor from './Catagory/Catagory'
import PopularMenu from './Popular_menu/PopularMenu'
import Featured from './Featured/Featured'

const Home = () => {
    return (
        <div>
            <Banner />
            <Catagor />
            <PopularMenu />
            <Featured />
        </div>
    )
}

export default Home