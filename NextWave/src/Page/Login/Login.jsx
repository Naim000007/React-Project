import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
const Login = () => {

    const [singState, setSignState] = useState("Sign In")

    return (
        <div className='login'>
            <img src={logo} className='login-logo' alt="" />
            <div className='login-form'>
                <h1>{singState}</h1>
                <form>
                    {
                        singState === "Sign Up" ? <input type="text" placeholder='your Name' /> : <></>
                    }
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Your Password' />
                    <button>{singState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remeber Me</label>
                        </div>
                        <p>Need Help</p>
                    </div>
                </form>
                <div className="form-switch">
                    {
                        singState === "Sign In" ? <p>New to NexWave? <span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p> : <p>Already have account? <span onClick={() => { setSignState("Sign In") }}>Sign In Now</span></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login