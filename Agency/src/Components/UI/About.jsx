import React from 'react'
import "../../styles/About.css"
import aboutImg from "../../assets/images/about-us.jpg"

const chooseData = [
    {
        icon: "ri-wifi-line",
        title: "First Working process",
        desc: "Our team of experts will work with you to understand your needs and goals, and then create a customized solution that fits your budget and timeline."
    },
    {
        icon: "ri-team-line",
        title: "Dedicated team",
        desc: "Our team of experts will work with you to understand your needs and goals, and then create a customized solution that fits your budget and timeline."
    },
    {
        icon: "ri-customer-service-2-line",
        title: "24/7 Hours support",
        desc: "Our team of experts will work with you to understand your needs and goals, and then create a customized solution that fits your budget and timeline."
    }
]
const About = () => {
    return (
        <section id='about'>
            <div className="container">
                <div className="about_wrapper">
                    <div className="about_content">
                        <h6 className='subtitle'>Why choose us</h6>
                        <h2>Specialist in aviding clients on</h2>
                        <h2 className='highlight'> financial challenges</h2>
                        <p className='description about_content-desc'>
                            we're not just about building websites; we're about crafting digital experiences that truly connect with your audience. From the first hello to the final launch, we're by your side, listening, understanding, and bringing your vision to life. With us, it's not just business; it's a partnership built on trust, collaboration, and a shared commitment to your success. Let's create something remarkable together.
                        </p>
                        {/* <div className="choose_us-item">
                            <span className="choose_us-icon"><i className="ri-wifi-line"></i></span>
                            <h4 className="choose_us-title">First Working process</h4>
                            <p className="description">we're not just about building websites; we're about crafting digital experiences that truly connect with your audience.</p>
                        </div> */}
                        <div className='choose_item-wrapper'>
                            {
                                chooseData.map((item, index) => (
                                    <div className="choose_us-item">
                                        <span className="choose_us-icon"><i className={item.icon}></i></span>
                                        <div className="choose_us-text">

                                            <h4 className="choose_us-title">{item.title}</h4>
                                            <p className="description">{item.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className="about_img">
                        <img src={aboutImg}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About