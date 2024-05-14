import React from 'react'
import "../../styles/Service.css"

const serviceData = [
    {
        icon: "ri-apps-line",
        title: "App Development",
        description: "Boost your business with our custom app, perfectly tailored to your needs. Get started today!"
    },
    {
        icon: "ri-code-s-slash-fill",
        title: "Web Design",
        description: "Boost your business with our custom WebSite, perfectly tailored to your needs. Get started today!"
    },
    {
        icon: "ri-landscape-line",
        title: "Graphic Design",
        description: "Boost your business with our custom app, perfectly tailored to your needs. Get started today!"
    },
    {
        icon: "ri-rocket-line",
        title: "Digital Marketing",
        description: "Boost your business with our custom app, perfectly tailored to your needs. Get started today!"
    },
]
const Service = () => {
    return (
        <section id='service'>
            <div className="container">
                <div className="service_top-content">
                    <h6 className='subtitle'>Our Sercice</h6>
                    <h2>Save Time managing your bussiness with</h2>
                    <h2 className='highlight'> our best service</h2>
                </div>
                <div className="service_item_wrapper">
                    {serviceData.map((item, index) => (
                        <div key={index} className="service_item" >
                            <span className="service_icon"><i className={item.icon}></i></span>
                            <h3 className='service_title'>{item.title}</h3>
                            <p className="description">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Service