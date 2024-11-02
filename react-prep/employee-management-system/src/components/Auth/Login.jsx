import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('email is', email)
        console.log('password is', password)
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <div className='flex w-screen h-screen items-center justify-center'>
                <div className='border-2 border-emerald-600 rounded-xl p-20'>
                    <form
                        onSubmit={(e) => { submitHandler(e) }}
                        className='flex flex-col items-center justify-center'>
                        <input
                            value={email}
                            required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-500 placeholder:text-xl' type="email" placeholder="Enter your Email"
                            onChange={(e) => {
                                // console.log(e.target.value);
                                setEmail(e.target.value);
                            }} />
                        <input
                            required
                            value={password}
                            className='text-white outline-none bg-transparent border-2 border-emerald-600 mt-5 text-xl py-4 px-5 rounded-full placeholder:text-gray-500 placeholder:text-xl' type="password" placeholder="Enter your Email"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} />

                        <button className='text-white outline-none  border-none bg-emerald-600 text-xl mt-5 py-4 px-5 rounded-full placeholder:text-white placeholder:text-xl'>Log in</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login


