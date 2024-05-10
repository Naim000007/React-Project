import React from 'react'
import useMenu from '../../../hooks/useMenu'
import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover'
import MenuItem from '../../Shared/MenuItem'

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
        </div>
    )
}

export default MenuCatagory