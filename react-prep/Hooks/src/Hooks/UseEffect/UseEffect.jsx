import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 1000)
    }, [])

    return (
        <div>
            <h1>I have rendered {count} times</h1>
        </div>
    )
}

export default UseEffect



// the useEffect Hook allow you to perform side effects in your components
// some examples of side effects are :
// Fetching data from api
// Directly updating the dom
// Timers like setTimeout and setInterval


// without any dependencies our useEffect run if any state changes
// with empty array of dependencies it runs only one time
// with dependencies it runs when dependencies change