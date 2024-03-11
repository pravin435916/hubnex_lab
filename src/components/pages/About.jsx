import React from 'react';
import { LuLeaf } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";
import {motion} from "framer-motion"
import '../../App.css'
import { FadeUp,SlideDown,SlideUp ,Slideright} from '../../animations';
export const About = () => {
    return (
        <div className='w-full h-full overflow-hidden relative' id='about'>
            <div className='w-full h-full flex justify-center items-center flex-col gap-4 py-8 bg-gradient-to-b from-white to-[#D7E0FF]'>
                <span className='border border-gray-300 p-2 rounded-lg'>Boost Your Productivity</span>
                <span className='text-3xl sm:text-5xl font-bold sm:w-[32rem] text-center'>A more effective way to track progress</span>
                <span className='text-xl sm:w-[32rem] text-center'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</span>
                <motion.img
                {...FadeUp}
                className='h-full w-[90vw]' src="/assets/lap.png" alt="" />
                <img className='updown absolute hidden sm:block bottom-80 left-0' src="/assets/torus.svg" alt="" />
                <img className='updown absolute hidden sm:block  right-0 top-96 ' src="/assets/pyramid.svg" alt="" />
                <div className='w-[80vw] flex justify-between items-center flex-wrap  gap-4'>
                    <div className='flex flex-col gap-1 w-72'>
                        <span className='text-2xl'><LuLeaf /></span>
                        <span className='font-bold'>Integration Ecosystem</span>
                        <span>Track your progress and motivate your efforts everyday.</span>
                        <div className='flex gap-2 items-center'>
                        <span>Learn More </span>
                        <FaArrowRight />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-72'>
                        <span className='text-2xl'><PiTargetBold /></span>
                        <span className='font-bold'>Goal setting and tracking</span>
                        <span>Set and track goals with manageable task breakdowns.</span>
                        <div className='flex gap-2 items-center'>
                        <span>Learn More </span>
                        <FaArrowRight />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-72'>
                        <span className='text-2xl'><FaLock /></span>
                        <span className='font-bold'>Secure data encryption</span>
                        <span>Ensure your data’s safety with top tier encryption.</span>
                        <div className='flex gap-2 items-center'>
                        <span>Learn More </span>
                        <FaArrowRight />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-72'>
                        <span className='text-2xl'><FaBell /></span>
                        <span className='font-bold'>Customizable notifications</span>
                        <span>Get alerts on tasks and deadlines that matter most.</span>
                        <div className='flex gap-2 items-center'>
                        <span>Learn More </span>
                        <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
