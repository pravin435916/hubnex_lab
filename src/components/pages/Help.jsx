import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../../App.css'
export const Help = () => {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-b from-white to-[#D7E0FF] items-center py-8 mt-8 relative flex-col sm:flex-row">
                <div className="w-1/4 hidden sm:block">
                    <img className='updown' src="/assets/left.svg" alt="" />
                </div>
                <div className="w-[90vw] sm:w-2/5 flex flex-col justify-center items-center ">
                    <span className='font-bold text-3xl'>Sign up for free today</span>
                    <span>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</span>
                    <div className='flex gap-4 mt-4 '>
                        <button className='bg-black border-black p-2 text-white rounded-lg'>Get For Free</button>
                        <div className='flex gap-2 items-center'>
                            <button>Learn More</button>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block w-1/4">
                    <img className=' updown absolute bottom-0' src="/assets/right.svg" alt="" />
                </div>
            </div>
        </>
    )
}
