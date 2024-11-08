import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

export default function App() {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11.00 AM to 10.00 PM"}
                heading={"Order Online"}
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1}></img>
                    <h3 className='text-3xl uppercase text-center -mt-20 shadow-gray-700'>
                        Salads
                    </h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2}></img>
                    <h3 className='text-3xl uppercase text-center -mt-20 shadow-gray-700'>
                        Pizza
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3}></img>
                    <h3 className='text-3xl uppercase text-center -mt-20 shadow-gray-700'>
                        Soup
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4}></img>
                    <h3 className='text-3xl uppercase text-center -mt-16 shadow-gray-700'>
                        Cake
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5}></img>
                    <h3 className='text-3xl uppercase text-center -mt-20 shadow-gray-700'>
                        Salads
                    </h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
