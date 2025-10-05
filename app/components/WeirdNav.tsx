'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Nav from './Nav'
import { RxHamburgerMenu } from "react-icons/rx"

const WeirdNav = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 80); // You can adjust the threshold
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }


    return (
        <>
            <div
                className={`
          fixed top-8 right-10 bg-[#d85425] z-10 hover:scale-90 transition-all ease-in duration-100 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}>
                <RxHamburgerMenu onClick={toggleMenu} className='w-[35px] h-[35px]' />
            </div>
            <Nav
                isClicked={isOpen}
                onClosed={() => setIsOpen(false)}
            />
        </>



    )
}

export default WeirdNav
