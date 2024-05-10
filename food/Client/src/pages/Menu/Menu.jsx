import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/Popular_menu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu' />
            <PopularMenu></PopularMenu>
        </div>
    )
}

export default Menu