import React from 'react';
import { LuLeaf } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
export const Features = () => {
    return (
        <div className='w-full h-full overflow-hidden relative'>
            <div className='w-full h-full flex justify-center items-center flex-col gap-4 p-8 '>
                <span className='border border-gray-300 p-2 rounded-lg'>Everything you need</span>
                <span className='text-3xl sm:text-5xl font-bold sm:w-[32rem] text-center'>Streamlined for easy management</span>
                <span className='text-xl sm:w-[32rem] text-center'>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</span>
                <div className='w-[90vw] flex justify-center items-center flex-wrap gap-8'>
                    <div className='flex flex-col gap-1 w-96 shadow-xl p-8 justify-center items-center border-xs rounded-lg'>
                        <img src="/assets/cube-helix.png" alt="" />
                        <span className='font-bold'>Integration Ecosystem</span>
                        <span className='text-center'>Enhance your productivity by connecting with your favorite tools, keeping all your
                            essentials in one place.</span>
                    </div>
                    <div className='flex flex-col gap-1 w-96 shadow-xl p-8 justify-center items-center border-xs rounded-lg'>
                        <img className='p-4' src="/assets/cube-helix2.png" alt="" />
                        <span className='font-bold'>Goal setting and tracking</span>
                        <span className='text-center'>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
