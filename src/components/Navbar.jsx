import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { SiFramer } from 'react-icons/si';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='w-full p-6 flex justify-between items-center bg-[#EAEEFE]'>
            <div className='flex gap-2'>
                <div className='flex items-center gap-2'>
                    <span><SiFramer /></span>
                    <span>Framer</span>
                </div>
            </div>
            <span className='absolute top-4 right-4 block sm:hidden text-3xl' onClick={handleMenuOpen}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </span>
            <div className={`absolute bg-black text-white p-10 border-xs rounded-lg top-10 right-8 sm:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                <Link to='/' className='block py-2'>About</Link>
                <Link to='/' className='block py-2'>Features</Link>
                <Link to='/' className='block py-2'>Customers</Link>
                <Link to='/' className='block py-2'>Updates</Link>
                <Link to='/' className='block py-2'>Help</Link>
                <Link to='/' className='block py-2 bg-black border p-2 text-white rounded-lg'>Get For Free</Link>
            </div>
            <div className='hidden sm:flex sm:flex-row gap-6 text-lg mr-4'>
                <Link to='/'><span>About</span></Link>
                <Link to='/'><span>Features</span></Link>
                <Link to='/'><span>Customers</span></Link>
                <Link to='/'><span>Updates</span></Link>
                <Link to='/'><span>Help</span></Link>
                <Link to='/'><span className='bg-black border p-2 text-white rounded-lg'>Get For Free</span></Link>
            </div>
        </div>
    );
}

export default Navbar;
