import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import mongodb from "../assets/mongodb.png";
import "./hero.css"
import Hero from "./Hero"

function Experience() {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        }, {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        }, {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        }, {
            id: 4,
            src: node,
            title: "NodeJs",
            style: "shadow-green-400"
        }, {
            id: 5,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600"
        }, {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        }, {
            id: 7,
            src: github,
            title: "Github",
            style: "shadow-gray-300"
        }, {
            id: 8,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-violet-400"
        }, {
            id: 9,
            src: mongodb,
            title: "MongoDb",
            style: "shadow-green-700"
        },
    ]

    return (<>

        <div name='experience' className='bg-gradient-to-b from-black to-gray-800'>
            <div className=' w-full sm:py-10  '>
                <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                    <div>
                        <p className='text-4xl font-bold border-b-4  border-gray-500 p-2 inline'>Experience</p>
                        <p className='py-6 '>These are the technologies I've worked with
                        </p>
                    </div>
                    <div className='w-full experienceCard grid grid-cols-1 sm:grid-cols-3 gap-8   text-center py-8 px-5 sm:px-0'>
                        {techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 my-4    sm:mx-0 duration-300 py-2 rounded-lg ${style}`}>
                                <img src={src} className="w-20 mx-auto" alt="ExperienceImage" />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Hero />
        </div>
    </>
    )
}

export default Experience