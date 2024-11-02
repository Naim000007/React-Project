import React from 'react'

const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Form submitted')
    }
    return (
        <>
            <div className='flex w-screen h-screen items-center justify-center'>
                <div className='border-2 border-emerald-600 rounded-xl p-20'>
                    <form
                        onSubmit={(e) => { submitHandler(e) }}
                        className='flex flex-col items-center justify-center'>
                        <input required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-500 placeholder:text-xl' type="email" placeholder="Enter your Email" />
                        <input required className='text-white outline-none bg-transparent border-2 border-emerald-600 mt-5 text-xl py-4 px-5 rounded-full placeholder:text-gray-500 placeholder:text-xl' type="password" placeholder="Enter your Email" />
                        <button className='text-white outline-none  border-none bg-emerald-600 text-xl mt-5 py-4 px-5 rounded-full placeholder:text-white placeholder:text-xl'>Log in</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login