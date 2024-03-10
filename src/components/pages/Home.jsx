import React from 'react';
import '../../App.css';
import { FaArrowRight } from "react-icons/fa";
import { About } from './About';
import { Features } from './Features';
import { Help } from './Help';
import { Pricing } from './Pricing';
import { Customers } from './Customers';

function Home() {
    return (
        <>
            <div className='w-full h-full m-0 p-0 '>
                <div className="h-[90vh] flex justify-center items-center overflow-hidden flex-col sm:flex-row p-10">
                    <img className='w-full absolute top-0 object-cover h-screen -z-10' src="/assets/bg.png" alt="" />
                    <div className='flex flex-col sm:gap-6 w-full sm:w-1/2 ml-4 sm:ml-12 text-left'>
                        <span className='p-2 w-max border rounded-lg'>Version 2.0 is here</span>
                        <div className='flex flex-col text-4xl  sm:text-8xl font-bold'>
                            <span>Pathway to </span>
                            <span>productivity</span>
                        </div>
                        <span className='text-lg sm:text-xl text-wrap sm:w-[32rem] mt-6'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</span>
                        <div className='flex gap-4 mt-4'>
                            <button className='bg-black border-black p-2 text-white rounded-lg'>Get For Free</button>
                            <div className='flex gap-2 items-center'>
                            <button>Learn More</button>
                             <FaArrowRight/>
                            </div>
                        </div>
                        <img className='absolute hidden sm:block top-16 w-56 sm:ml-[28rem]' src="/assets/cylinder.svg" alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src="/assets/Visual.svg" alt="" />
                    </div>
                </div>
                <div className='w-full h-24 relative flex justify-center items-center my-8'>
                    <img className='absolute hidden sm:block bottom-0 right-0' src="/assets/half-torus.svg" alt="" />
                    <img className='w-[80vw]' src="/assets/Logos.png" alt="" />
                </div>
                <About />
                <Features/>
                <Pricing/>
                <Customers/>
                <Help/>
            </div>
        </>
    );
}

export default Home;
