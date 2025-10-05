'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GoDash } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Toast from '../components/Toast';
import WeirdNav from '../components/WeirdNav';
import useFetch from '../components/hooks/UseFetch';
import { FaEnvelope } from "react-icons/fa";

type SocialLinks = {
  instagramLink: string;
  youtubeLink: string;
};



const Page = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState('')

    const { data, loading } = useFetch<SocialLinks>(`${process.env.NEXT_PUBLIC_API_URL}/api/social-link`
    );


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('Sending...')

        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
        })

        if (res.ok) {
            setStatus('Sent ✅')
            setFormData({ firstName: '', lastName: '', email: '', message: '' })
        } else {
            setStatus('Failed ❌')
        }
    }

    return (
        <div>
            <Navbar />
            <WeirdNav />
            <div className='flex flex-col justify-center items-center gap-16 pt-44 mb-44' >
                <div className='flex flex-col items-center gap-4 h-fit'>
                    <p className='text-[#fcf3f2]'>
                        CONTACT
                    </p>
                    <GoDash fill='#d85425' />
                    <h1 className='text-4xl sm:text-6xl mb-14 text-[#fcf3f2]'>
                        {"What's up?"}
                    </h1>
                </div>

                {/* form */}
                <form
                    onSubmit={handleSubmit}
                    className='md:w-[60%] flex flex-col gap-4 max-w-2xl w-[90%]'>
                    {/* names */}
                    <div className='grid grid-cols-2 gap-6 max-sm:flex max-sm:flex-col'>
                        {/* first name */}
                        <div className='flex flex-col'>
                            <label htmlFor="firstName" className='pl-2 mb-2 w-fit text-[#fcf3f2]'>First name*</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className='bg-[#5c5c60]  h-14 px-2'
                                placeholder='John'
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* last name */}
                        <div className='flex flex-col'>
                            <label htmlFor="lastName" className='pl-2 mb-2 w-fit text-[#fcf3f2]'>Last name*</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className='bg-[#5c5c60]  h-14 px-2'
                                placeholder='Doe'
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        {/* email */}
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='pl-2 mb-2 w-fit text-[#fcf3f2]'>Email*</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className='bg-[#5c5c60]  h-20 px-2'
                                placeholder='johndoe@gmail.com'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* message */}
                        <div className='flex flex-col'>
                            <label htmlFor="message" className='pl-2 mb-2 w-fit text-[#fcf3f2]'>Message</label>
                            <textarea
                                name="message"
                                id="message"
                                className='bg-[#5c5c60]  h-28 px-2 pt-2'
                                placeholder='Your Message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                    </div>

                    <button
                        type='submit'
                        className='text-[#fcf3f2] m-auto h-15 w-32 p-4 font-semibold flex items-center justify-center gap-4 border-0 bg-[#d85425] transition-all ease-in hover:scale-90 hover:bg-[#f5f5f5] hover:text-[#d85425]'
                        onClick={() => setShow(true)}
                    >
                        SUBMIT
                    </button>
                </form>

            </div>


            <section className='bg-[#2a2a2e] flex max-md:flex-col gap-5  w-[90%] m-auto mb-36 p-5'>
                {/* address */}
                <div className='flex flex-col gap-5 max-md:border-b-[1px] max-md:border-[#d85425] pb-5 flex-grow'>
                    <h1 className='text-[#f5f5f5] text-2xl w-fit'>
                        Address
                    </h1>
                    <p className='text-[#f5f5f5] w-fit'>
                        Lagos, Nigeria
                    </p>
                </div>

                {/* get in touch */}
                <div className='flex flex-col gap-5 max-md:border-b-[1px] border-[#d85425] pb-5 flex-grow'>
                    <h1 className='text-[#f5f5f5] text-2xl w-fit'>
                        Get in touch
                    </h1>
                    <div>
                        <a href="mailto:hello@example.com" className='flex gap-2 items-center hover:underline hover:scale-95 transition-all ease-in duration-100 w-fit'>
                            <FaEnvelope fill='#f5f5f5' />
                            <p>
                                feelframestudios@gmail.com
                            </p>
                        </a>
                    </div>
                </div>

                {/* socials */}
                <div className='flex flex-col gap-5 pb-5 flex-grow'>
                    <h1 className='text-[#f5f5f5] text-2xl w-fit'>
                        Socials
                    </h1>
                    <div className='flex gap-6 h-fit w-fit justify-center '>

                        <a href={loading ? "" : data?.instagramLink} target="_blank" rel="noreferrer">
                            <FaInstagram className='fill-[#f5f5f5] hover:fill-[#d85425] hover:scale-90 transition-all ease-in duration-100' size={30} />
                        </a>

                        <a href={loading ? "" : data?.youtubeLink} target="_blank" rel="noreferrer">
                            <FaYoutube className='fill-[#f5f5f5] hover:fill-[#d85425] hover:scale-90 transition-all ease-in duration-100' size={30} />
                        </a>

                    </div>
                </div>

            </section>

            <Toast
                show={show}
                message={status}
                onClose={() => setShow(false)}
            />

            <Footer />
        </div>
    )
}

export default Page
