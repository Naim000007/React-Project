import React from 'react'
import useMenu from '../../../hooks/useMenu'
import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover'
import MenuItem from '../../Shared/MenuItem'
import { Link } from 'react-router-dom'

const MenuCatagory = ({ items, title, img }) => {

    return (
        <div className='pt-8'>
            {
                title && <Cover img={img} title={title} />
            }
            <div className='grid md:grid-cols-2 gap-10 mt-16 '>
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <Link to={'/order'}><button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button></Link>
        </div>
    )
}

export default MenuCatagory