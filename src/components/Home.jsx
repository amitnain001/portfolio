import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { HiArrowRight } from "react-icons/hi";

function Home() {
    return (
        <div name="home" className='w-full bg-gradient-to-b from-black via-black to-gray-800 h-screen' >
            <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 text-white'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl md:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                    <p className='text-gray-400 py-5 max-w-md'>
                        I love to work on web application using technologies like React, Tailwind, Node Js and MongoDb
                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Portfolio <span className='ml-1 group-hover:rotate-90 duration-300'> <HiArrowRight /></span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} className="  w-52 rounded-2xl mx-auto md:w-72 " alt="ProfileImage" />
                </div>
            </div>
        </div>
    )
}

export default Home