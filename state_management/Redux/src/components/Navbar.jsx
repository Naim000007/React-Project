import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>Navbar button Click {count}</div>
    )
}

export default Navbar