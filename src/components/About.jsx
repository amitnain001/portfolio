import React from 'react';
import HeroImage from "../assets/heroImage.jpg";
import "./hero.css";
import resmue from "../Resume.pdf"

function About() {
    return (
        <div name="about" className='pt-10 bg-gradient-to-b from-gray-800 to-black'>
            <div className='w-full md:py-16    text-white'>
                <div className='max-w-screen-lg  md:flex justify-between items-start mx-auto  h-full px-4 text-white'>
                    <div className='flex aboutPhotoDiv max-w-sm mx-auto flex-col items-center'>
                        <img src={HeroImage} className="rounded-full w-48" alt="HeroImage" />
                        <h1 className='tracking-[3px] font-bold text-center text-4xl my-5'>AMIT NAIN</h1>
                        <p>FULL-STACK DEVELOPER</p>
                        <a className='aboubtn' href={resmue} download={true} target="blank"> <button className='px-3 py-3 bg-gray-500 rounded-md mt-7 hover:bg-gray-600 duration-200'>Download Resume</button> </a>

                    </div>
                    <div className='aboutpDiv'>
                        <p className='mt-10 md:mt-0 md:max-w-sm lg:max-w-lg  tracking-[4px] leading-9'>
                            Full stack web developer with knowledge of MERN stacks with redux, along with a knack of building application with utmost efficiency. Strong professional and willing to be an asset for an organization.
                        </p>
                        <p className='mt-6'>Here are a Few Highlights:</p>
                        <ul className='list-disc aboutul ml-3'>
                            <li className='my-3' >Full Stack web development</li>
                            <li className='my-3' >Interactive Fornt End as per the design</li>
                            <li className='my-3' >Redux for State Mnanagement</li>
                            <li className='my-3' >Building REST API</li>
                            <li className='my-3' >Managing database</li>
                        </ul>
                    </div>
                </div>
                <div className='pb-12 mt-16 max-w-screen-lg mx-auto md:mt-36   px-4 '>
                    <h1 className='font-semibold text-3xl tracking-[10px]'>EDUCATION:-</h1>
                    <div className='py-7'>
                        <h2 className='font-medium text-gray-400 text-2xl'> High School, Central Board of Secondary Education
                        </h2>
                        <p className='text-gray-400 my-3'>Socred 89% in PCM (Non-Medical) with Informatics Practices</p>
                        <p>2021</p>
                    </div>
                    <div className='py-7'>
                        <h2 className='font-medium text-gray-400 text-2xl'> Secondary School, Central Board of Secondary Education
                        </h2>
                        <p className='text-gray-400 my-3'>Socred 87%  </p>
                        <p>2019</p>
                    </div>
                </div>
                <div className='py-12 max-w-screen-lg mx-auto   px-4 '>
                    <h1 className='font-semibold text-3xl tracking-[10px]'>INTERESTS:-</h1>
                    <ul className='list-disc ml-3 mt-7'>
                        <li className='ml-1 my-4' >Traveling</li>
                        <li className='ml-1 my-4' >Swimming</li>
                        <li className='ml-1 my-4' >Reading Books</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About