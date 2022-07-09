import React from 'react';
import arraryDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import "./hero.css";

function Portfolio() {
    const portfolios = [{
        id: 1,
        src: arraryDestruct,
        codesrc: "https://github.com/amitnain001/DEGINCY",
        btnsrc: "https://amitnain001.github.io/DEGINCY/",
    }, {
        id: 2,
        src: installNode,
        codesrc: "https://github.com/amitnain001/DOMINEUM",
        btnsrc: "https://amitnain001.github.io/DOMINEUM/",
    }, {
        id: 4,
        src: reactParallax,
        codesrc: "https://github.com/amitnain001/DropProject",
        btnsrc: "https://amitnain001.github.io/DropProject/",
    }, {
        id: 5,
        src: reactSmooth,
        codsrc: 'https://github.com/amitnain001/lawlit',
        btnsrc: "https://amitnain001.github.io/lawlit/",
    },]

    return (
        <div name="portfolio" className='bg-gradient-to-b pt-10 from-black to-gray-800' >
            <div className='  w-full text-white  sm:py-10'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                        <p className='py-6 '>Check out some of my work right here</p>
                    </div>
                    <div className=' portfolio grid sm:grid-cols-2 md:grid-cols-3 gap-8  md:px-12  '>
                        {
                            portfolios.map(({ id, src, codesrc, btnsrc }) => (
                                <div key={id} className='shadow-md my-4 group hover:scale-105 duration-200 shadow-gray-600 rounded-lg'>
                                    <img src={src} className="rounded-md " alt="reactWeather" />
                                    <div className='flex items-center justify-center'>
                                        <a href={btnsrc} target='blank'><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                                        <a href={codesrc} target="blank"> <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio