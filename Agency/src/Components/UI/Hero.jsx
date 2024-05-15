import React from 'react'
import "../../styles/Hero.css"
import heroDarkImg from "../../assets/images/hero-img.png"
const Hero = () => {
    return (
        <section className='hero_section'>
            <div className='container'>
                <div className='hero_wrapper'>
                    <div className='hero_content'>
                        <div>
                            <h2>We're Creating Perfect</h2>
                            <h2>Digital Product To</h2>
                            <h2 className='highlight'>Promote Your Brand</h2>
                        </div>
                        <p className='description'>Enhance your business with our customized websites, designed to fit your unique needs perfectly</p>
                        <div className='hero_btns'>
                            <button className='primary_btn'>Get Started Now</button>
                            <button className='secondary_btn'>Discover More</button>
                        </div>
                    </div>
                    <div className='hero_img'>
                        <img src={heroDarkImg} alt='hero-img'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero