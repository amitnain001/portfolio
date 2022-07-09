import React, { useState } from 'react';
import { FaBars, FaTimes, } from "react-icons/fa";
import { Link } from 'react-scroll';

function Navbar() {

    const [hamburgur, sethamburgur] = useState(false)

    const navLinks = [
        {
            id: 1,
            link: "home",
            to: "/",
        },
        {
            id: 2,
            link: "about",
            to: "/about",
        },
        {
            id: 3,
            link: "portfolio",
            to: "/portfolio"
        },
        {
            id: 4,
            link: "experience",
            to: "/portfolio"
        },
        {
            id: 5,
            link: "contact",
            to: "/contact"
        },
    ]

    return (
        <div className='flex justify-between  items-center w-full h-20 text-white px-4 bg-black fixed top-0'>
            <div className=' '>
                <h1 className='font-Signature text-3xl  sm:text-5xl ml-2'>Amit Nain</h1>
            </div>
            <ul className='md:flex hidden '>
                {navLinks.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200' >
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => (sethamburgur(!hamburgur))} className='cursor-pointer pr-4 z-20 text-gray-500 md:hidden'>
                {hamburgur ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {hamburgur && (<ul className='flex md:hidden flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {navLinks.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl' >{link}</li>
                ))}
            </ul>)}

        </div>
    )
}

export default Navbar