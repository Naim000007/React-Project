import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


import { Swiper, SwiperSlide } from 'swiper/react';
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div>
            <SectionTitle subHeading='What Our Clients Say' heading='Testimonials' />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testimonials.map(testimonial => {
                        return <SwiperSlide key={testimonial.id}>
                            <div className='flex flex-col items-center my-16 mx-24 '>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={testimonial.rating}
                                    readOnly
                                />
                                <p className='py-4'>{testimonial.details}</p>
                                <h3 className='text-2xl text-orange-400'>{testimonial.name}</h3>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default Testimonials



// Import Swiper styles




// import required modules


