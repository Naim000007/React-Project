import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [searchParams] = useSearchParams()
    const pasteId = searchParams.get('pasteId')

    return (
        <>
            <div className='flex flex-row gap-7 place-content-between'>
                <input
                    className='p-1 w-[67%] rounded-2xl border-2 mt-2 pl-4'
                    type='text'
                    placeholder='Enter a title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className='p-2 w-[67%] pl-4 rounded-2xl border-2 mt-2'>
                    {pasteId ? "Update My paste" : "Create my paste"}
                </button>
            </div>
            <div className='mt-8'>
                <textarea
                    className='border-2 rounded-2xl mt-4 min-w-[500px] p-4'
                    value={value}
                    placeholder="Enter content here"
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                />
            </div>
        </>
    )
}

export default Home
