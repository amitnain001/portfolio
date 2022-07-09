import React from 'react';
import "./hero.css";
import emailjs from "emailjs-com"

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_0d2yo59', e.target, '86yFUT4Fgh3dSajo6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <div name='contact' className='pt-10 bg-gradient-to-b from-black  to-gray-800'>
            <div className='w-full 2xl:h-screen  md:mx-0   p-4 text-white' >
                <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                    <div className='pb-5'>
                        <p className='text-4xl  font-bold inline border-b-4 border-gray-500'>
                            GET IN TOUCH</p>
                        <p className='py-6'>Contact me</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <form className='contactForm flex flex-col w-full md:w-1/2' onSubmit={sendEmail}>
                            <input type="text" name='name' placeholder='Enter your name' className='my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                            <input type="email" name='email' placeholder='Enter your email' className='my-2 p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none' />
                            <input type="text" name='subject' placeholder='Subject' className='my-2 p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none' />
                            <textarea name="message" rows="10" className='my-2 inputodd p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter Your Message'>
                            </textarea>
                            <input type="submit" className='text-white bg-gradient-to-b contactButton from-cyan-500 to-blue-500 px-6 py-3 my-8  mx-auto flex items-center rounded-md hover:scale-105 duration-300' value="Send Message" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact