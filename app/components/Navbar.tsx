'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx"
import Nav from './Nav';
import Link from 'next/link';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={`w-full p-4 flex items-center flex-row justify-between transition-colors duration-300`} >
            <Link href={'/'}>
                <Image
                    src={'/images/feelframelogowhite.png'}
                    alt='logo'
                    width={55}
                    height={70}
                    className='w-[55px] h-[55px]'
                />
            </Link>


            <div className='bg-[#d85425] hover:scale-90 transition-all ease-in duration-100'>
                <RxHamburgerMenu onClick={toggleMenu} className='w-[50px] h-[50px] md:hidden fill-[#f5f5f5]' />
            </div>

            <Nav
                isClicked={isOpen}
                onClosed={() => setIsOpen(false)}
            />


            <div className='items-center gap-10 hidden md:flex'>
                <Link href={'/works'}>
                    <p className='text-[#f5f5f5] h-fit w-fit px-2 hover:text-[#fcf3f2] hover:bg-[#d85425] cursor-pointer transition-all ease-in duration-100 hover:scale-90'>Work</p>
                </Link>

                <Link href={'/contacts'}>
                    <div className='bg-[#d85425] h-15 w-32 p-4 flex items-center justify-center gap-4 text-[#f5f5f5] hover:scale-90 transition-all ease-in duration-100 hover:bg-[#f5f5f5] hover:text-[#d85445]'>
                        <p className='cursor-pointer'>Contact</p>
                        <FaArrowRightLong />
                    </div>
                </Link>


                <div className='bg-[#d85425] hover:scale-90 transition-all ease-in duration-100'>
                    <RxHamburgerMenu onClick={toggleMenu} className='w-[35px] h-[35px] fill-[#f5f5f5]' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
