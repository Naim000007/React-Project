import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addTopPastes, updateToPaste } from '../Redux/PastSlice'

const Home = () => {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const pasteId = searchParams.get('pasteId')
    const dispatch = useDispatch()

    const createPaste = () => {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
        if (pasteId) {
            // Update paste
            dispatch(updateToPaste(paste))
        }
        else {
            // Create paste
            dispatch(addTopPastes(paste))
        }
        setValue('');
        setTitle('');
        setSearchParams({})
    }

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
                <button
                    onClick={createPaste}
                    className='p-2 w-[67%] pl-4 rounded-2xl border-2 mt-2'>
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
