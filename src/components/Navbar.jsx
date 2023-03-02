import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
    const [navState, setNavState] = new useState(false);
    const handleHamburger = () => {
        setNavState(!navState);
    };

    return(
        <>
            <nav aria-label='main-navigation' className='sticky top-0 flex justify-between items-center h-16 min-w-[100%] max-w-[1240px] mx-auto px-4 text-[black] bg-white shadow-md font-display'>
                <h1 className='text-xl md:text-2xl cursor-default'><NavLink to=''>Burger Street</NavLink></h1>
                <ul className=' hidden md:flex md:text-2xl'>
                    <li className='p-5'>
                        <NavLink to='' className='hover:underline hover:text-green cursor-pointer'>Home</NavLink>
                    </li>
                    <li className='p-5'>
                        <NavLink to='Menu' className='hover:underline hover:text-green cursor-pointer'>Menu</NavLink>
                    </li>
                    <li className='p-5'>
                        <NavLink to='Location' className='hover:underline hover:text-green cursor-pointer'>Location</NavLink>
                    </li>
                    <li className='p-5'>
                        <NavLink to='Contact' className='hover:underline hover:text-green cursor-pointer'>Contact</NavLink>
                    </li>
                </ul>

                <button className='md:text-2xl text-green border-solid border-green border-2 bg-white px-2 rounded-md hover:bg-green hover:text-white hover:transition-[0.25s] hover:ease-in transition-[0.25s] uppercase mt-1'><NavLink>Order</NavLink></button>

                <div onClick={handleHamburger} className='z-30 md:hidden'>
                    {navState ? <HiOutlineX size={24} className='text-red' /> : <HiOutlineMenuAlt1 size={24} className='text-black' />}
                </div>

                <ul className={`fixed top-0 left-0 w-[100%] h-full filter backdrop-blur-3xl pt-12 text-3xl leading-10 md:leading-[3rem] ${!navState ? 'left-[-1%] transition-[0.5s] ease-in opacity-0 pointer-events-none' : 'transition-[0.5s] ease-in opacity-100'} md:hidden font-extrabold text-red grid place-content-center z-20`}>
                    <li className='p-5' onClick={handleHamburger}>
                        <NavLink to=''>Home</NavLink>
                    </li>
                    <li className='p-5' onClick={handleHamburger}>
                        <NavLink to='Menu'>Menu</NavLink>
                    </li>
                    <li className='p-5' onClick={handleHamburger}>
                        <NavLink to='Location'>Location</NavLink>
                    </li>
                    <li className='p-5' onClick={handleHamburger}>
                        <NavLink to='Contact'>Contact</NavLink>
                    </li>      
                </ul>
            </nav>
        </>
    )
}

export default Navbar;