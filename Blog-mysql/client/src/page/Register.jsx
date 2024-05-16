import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="Username" />
                <input required type="email" placeholder="email" />
                <input required type="password" placeholder="Password" />
                <button type="submit">Login</button>
                <p>This is an error</p>
                <span> you have an account? <Link to="/login">Log in</Link></span>
            </form>
        </div>
    )
}

export default Login