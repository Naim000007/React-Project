import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import FeaturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white'>
            <SectionTitle subHeading="Check it out" heading="Featured Items" />
            <div className='md:flex justify-center items-center py-20 px-36'>
                <div> <img src={FeaturedImg} /></div>
                <div className='md:ml-10 '>
                    <p>May 5, 2024</p>
                    <p className='uppercase font-bold py-4'>where can i get some</p>
                    <p> Discover culinary bliss at BistroBoss, where every dish is a masterpiece. Indulge in our eclectic menu, showcasing the finest ingredients and innovative flavors. From savory starters to delectable desserts, each bite is a journey of delight. Join us for an unforgettable dining experience where passion meets perfection. </p>
                    <button className="btn btn-outline mt-5">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured