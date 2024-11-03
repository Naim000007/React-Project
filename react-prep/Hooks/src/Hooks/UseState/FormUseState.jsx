import React, { useState } from 'react'

const FormUseState = () => {
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const handelName = (e) => {
        setName(e.target.value)
    }
    const handelCity = (e) => {
        setCity(e.target.value)
    }
    return (
        <div style={{ padding: '20px' }}>
            <h2>Enter Your Details</h2>

            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    onChange={handelName}
                    value={name}
                />
            </div>

            <div style={{ marginTop: '10px' }}>
                <label htmlFor="city">Select City: </label>
                <select id="city" value={city} onChange={handelCity}>
                    <option value="">Select a city</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rajshahi">Rajshahi</option>
                </select>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3>Summary</h3>
                <p>Name: {name}</p>
                <p>City: {city}</p>
            </div>
        </div>
    )
}

export default FormUseState