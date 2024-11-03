import React, { useRef } from 'react'

const UseRefHook = () => {
    const name = useRef(null)
    const password = useRef(null)
    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', name.current.value, password.current.value);
    }
    return (
        <div>
            <h1>UseRef Hook</h1>
            <form onSubmit={handelFormSubmit}>
                <input type="text" id="name" ref={name} />
                <input type="text" id="password" ref={password} />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default UseRefHook

// useRef()
// useRef is a react hok that lets you reference a value that not needed  for rendering
// unlike states, it directly mutable
// you can access value of its using yourRef.curent

// Uncontrolled Component
// Uncontrolled componeents manage their own state internally