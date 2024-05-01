import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

    const [singState, setSignState] = useState("Sign In")

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)


    const user_auth = async (email, password, event) => {
        event.preventDefault();
        setLoading(true)
        if (singState === "Sign In") {
            await login(email, password)
        } else {
            await signup(name, email, password)
        }
        setLoading(false)
    }



    return (
        loading ? <div className='login-spinner'>
            <img src={netflix_spinner} alt="" />
        </div> :
            <div className='login'>
                <img src={logo} className='login-logo' alt="" />
                <div className='login-form'>
                    <h1>{singState}</h1>
                    <form>
                        {
                            singState === "Sign Up" ?
                                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='your Name' />
                                : <></>
                        }
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Your Email' />
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Your Password' />
                        {/* <button onClick={user_auth} type='submit'>{singState}</button> */}
                        <button onClick={(e) => user_auth(email, password, e)} type='submit'>{singState}</button>
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