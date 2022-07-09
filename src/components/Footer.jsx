import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


function Footer() {
    const links = [{
        id: 1,
        child: (<> <FaLinkedin size={30} />  </>),
        href: "https://linkedin.com",
        style: "rounded-tr-md"
    }, {
        id: 2,
        child: (<> <FaGithub size={30} /> </>),
        href: "https://github.com/amitnain001",
    }, {
        id: 3,
        child: (<> <HiOutlineMail size={30} />  </>),
        href: "mailto:nainamit0047@gmail.com",
    }];

    return (
        <div className='bg-black text-white py-10 md:py-20 '>
            <div className='md:max-w-5xl mx-5 md:mx-auto flex-col-reverse md:flex-row  flex justify-between items-start'>
                <ul>
                    <li className='flex items-center my-3  '>  <i className="fa-solid fa-house mr-5"></i>  VPO Talu (Bhiwani) , Haryana</li>
                    <li className='flex items-center my-3  '>  <i className="fa-solid fa-phone   mr-5"></i>+91-9275566526</li>
                    <li className='flex items-center my-3  '>  <i className="fa-solid fa-envelope   mr-5"></i>nainamit0047@gmail.com.</li>
                </ul>
                <div className='mb-10'>
                    <p className='pb-10'>Hey, my name is me Amit Nain. <br /> I am a full-stack Developer and I enjoy discussing new projects and design challenges. </p>
                    <div className='flex  '>
                        {links.map(({ id, href, child, style }) => (<a key={id} target="blank" href={href} className={`mr-7  ${style}`}>{child}</a>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
