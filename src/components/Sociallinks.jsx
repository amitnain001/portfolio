import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import pdf from "../Resume.pdf"

function Sociallinks() {

    const links = [{
        id: 1,
        child: (<>LinkedIn <FaLinkedin size={30} /></>),
        href: "https://linkedin.com",
        style: "rounded-tr-md"
    }, {
        id: 2,
        child: (<>GitHub <FaGithub size={30} /></>),
        href: "https://github.com/amitnain001",
    }, {
        id: 3,
        child: (<>Mail <HiOutlineMail size={30} /></>),
        href: "mailto:nainamit0047@gmail.com",
    }, {
        id: 4,
        child: (<>Resume  <BsFillPersonLinesFill size={30} /></>),
        href: pdf,
        style: 'rounded-br-md',
        download: true,
    },]


    return (
        <div className='hidden xl:flex flex-col top-[35%] left-0 fixed'>
            <ul className='rounded-md'>

                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`flex justify-between items-center w-36 h-14 px-4 bg-gray-500 ml-[-88px] hover:ml-[-2px] duration-300 ${style}`}>
                        <a href={href} className='flex justify-between items-center w-full text-white' download={download} target="blank">{child}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sociallinks
