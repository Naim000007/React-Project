import React, { useState } from 'react'

const UseState = () => {
    const [car, setCar] = useState({
        brand: 'Tesla',
        color: 'Red',
        model: 'Model S',
        year: 2022
    })
    return (
        <div>
            <h1>My {car.brand}</h1>
            <h2>It is a {car.color} {car.model} from {car.year} </h2>
            <button onClick={() => setCar({ ...car, color: 'Blue' })}>Change Color</button>
        </div>
    )
}

export default UseState