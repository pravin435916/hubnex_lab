import React from 'react';
import { MdDone } from "react-icons/md";
import {motion} from "framer-motion"
import { SlideDown } from '../../animations';
import '../../App.css'
export const Pricing = () => {
    return (
        <div className='w-full h-full overflow-hidden relative my-6'>
            <div className='w-full h-full flex justify-center items-center flex-col gap-4 p-8 '>
                <span className='border border-gray-300 p-2 rounded-lg'>Boost your productivity</span>
                <span className='text-3xl sm:text-5xl font-bold sm:w-[32rem] text-center'>A more effective way to track progress</span>
                <span className='text-xl sm:w-[32rem] text-center'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</span>
                <div className='w-full flex justify-center sm:justify-end items-center sm:items-end flex-col sm:flex-row gap-4' >
                    <motion.div
                    {...SlideDown}
                     className='sm:w-1/3 h-full flex justify-start  shadow-xl flex-col p-10 gap-6 border rounded-[0.8rem] mx-8'>
                        <span>free</span>
                        <span><span className='text-3xl font-bold'>0$</span>/month</span>
                        <span className='text-white bg-black p-2 border rounded-lg text-center '>Get Started For free</span>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Up to 5 project members</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Basic support</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>2GB storage</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Integrationn</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Basic support</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                    {...SlideDown}
                    className='sm:w-1/3 h-full flex justify-start  shadow-xl flex-col p-10 gap-6 border rounded-[0.8rem] mx-8 bg-black text-white'>
                        <div className='w-full flex justify-between items-center'>
                        <span>Pro</span>
                        <span className='border-[1px] p-2 rounded-lg rainbow'>Most Popular</span>
                        </div>
                        <span><span className='text-3xl font-bold'>9$</span>/month</span>
                        <span className='text-black bg-white p-2 border rounded-lg text-center '>Sign up Now</span>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Up to 5 project members</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Basic support</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>50GB storage</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Integrationn</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Priority Support</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Advanced support</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Export support</span>
                            </div>
                        </div>
                    </motion.div>
                <motion.div 
                    {...SlideDown}
                    className='sm:w-1/3 h-full flex justify-start  shadow-xl flex-col p-10 gap-6 border rounded-[0.8rem] mx-8'>
                        <span>Business</span>
                        <span><span className='text-3xl font-bold'>19$</span>/month</span>
                        <span className='text-white bg-black p-2 border rounded-lg text-center '>Sign up Now</span>
                        <div className='flex flex-col gap-2 '>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Up to 5 project members</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Basic support</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>200GB storage</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Integrationn</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Dedicated Account Manager</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Custom Field</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Advanced Analytics</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Export Capabilities</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Api Acess</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdDone />
                                <span>Advanced security features</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
