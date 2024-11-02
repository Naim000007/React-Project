import React, { useRef } from 'react';

const TaskList = () => {
    const scrollContainerRef = useRef(null);

    const handleWheel = (e) => {
        e.preventDefault(); // Prevent default vertical scroll
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += e.deltaY; // Scroll horizontally based on vertical wheel movement
        }
    };

    return (
        <div
            id='task-list'
            className='flex overflow-x-auto flex-shrink-0 items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10 touch-pan-x'
            onWheel={handleWheel}
            ref={scrollContainerRef}
        >
            <div className='flex-shrink-0 h-full w-[400px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
                <p className='text-sm mt-3'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur obcaecati quam magni amet cupiditate reprehenderit? </p>
            </div>
            <div className='flex-shrink-0 h-full w-[400px] p-5 bg-yellow-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
                <p className='text-sm mt-3'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur obcaecati quam magni amet cupiditate reprehenderit? </p>
            </div>
            <div className='flex-shrink-0 h-full w-[400px] p-5 bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
                <p className='text-sm mt-3'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur obcaecati quam magni amet cupiditate reprehenderit? </p>
            </div>
            <div className='flex-shrink-0 h-full w-[400px] p-5 bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
                <p className='text-sm mt-3'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur obcaecati quam magni amet cupiditate reprehenderit? </p>
            </div>
            <div className='flex-shrink-0 h-full w-[400px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
                <p className='text-sm mt-3'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur obcaecati quam magni amet cupiditate reprehenderit? </p>
            </div>
        </div>
    );
}

export default TaskList;
