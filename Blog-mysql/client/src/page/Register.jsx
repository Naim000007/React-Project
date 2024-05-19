import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = async (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8800/api/auth/register', inputs);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="Username"
                    name='username'
                    onChange={handleChange}
                    value={inputs.username}
                />
                <input
                    required
                    type="email"
                    placeholder="Email"
                    name='email'
                    onChange={handleChange}
                    value={inputs.email}
                />
                <input
                    required
                    type="password"
                    placeholder="Password"
                    name='password'
                    onChange={handleChange}
                    value={inputs.password}
                />
                <button type="submit">Register</button>
                <p>This is an error</p>
                <span>Don't have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    );
};

export default Register;
