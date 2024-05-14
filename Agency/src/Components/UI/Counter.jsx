import React from 'react'
import "../../styles/Counter.css"

const countrData = [
    {
        number: "3",
        text: "Clients",
    },
    {
        number: "07",
        text: "Running Project",
    },
    {
        number: "05",
        text: "Project Completed",
    }
]

const Counter = () => {
    return (
        <section className='counter' id='projects'>
            <div className='container'>
                <div className='counter_wrapper'>
                    {
                        countrData.map((item, index) => (
                            <div key={index} className="counter_item">
                                <h3 className="couter_number">{item.number}</h3>
                                <p className="counter_title">{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Counter