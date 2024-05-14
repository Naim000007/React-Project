import React from 'react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonial = [
    {
        key: 1,
        name: 'Naim',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsam a, dicta corrupti inventore molestias sint minima est excepturi vel consequatur asperiores sapiente deserunt ad facilis dignissimos aperiam, necessitatibus tenetur aut? Optio repellat officia, est dicta placeat dignissimos eum aspernatur.',

    },
    {
        key: 1,
        name: 'Naim',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsam a, dicta corrupti inventore molestias sint minima est excepturi vel consequatur asperiores sapiente deserunt ad facilis dignissimos aperiam, necessitatibus tenetur aut? Optio repellat officia, est dicta placeat dignissimos eum aspernatur.',

    },
    {
        key: 1,
        name: 'Naim',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsam a, dicta corrupti inventore molestias sint minima est excepturi vel consequatur asperiores sapiente deserunt ad facilis dignissimos aperiam, necessitatibus tenetur aut? Optio repellat officia, est dicta placeat dignissimos eum aspernatur.',

    },
]

import { Swiper, SwiperSlide } from 'swiper/react';
const Testimonials = () => {

    return (
        <div>
            <div className="service_top-content">
                <h6 className='subtitle'>Testimonials</h6>
                <h2>Trusted by more than <span className='highlight'>10,000+ clients</span></h2>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[50%] tstimonial-swiper">
                {
                    testimonial.map(testimonial => {
                        return <SwiperSlide key={testimonial.id}>
                            <div className='flex flex-col items-center my-16 mx-24 testimonial-card'>
                                <h3 className='text-3xl text-[#379cf6]'>{testimonial.name}</h3>
                                <p className='py-4 text-white'>{testimonial.details}</p>

                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default Testimonials



