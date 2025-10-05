import React from 'react'
import Image from 'next/image'
import { GoDash } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import Link from 'next/link';
import useFetch from './hooks/UseFetch';

// ✅ Define the expected data type
interface SocialLinks {
  instagramLink: string;
  youtubeLink: string;
}

const Footer = () => {
  // Tell useFetch what type of data it returns
  const { data, loading } = useFetch<SocialLinks>(
    `${"https://strapi-server-app-f1em.onrender.com"}/api/social-link`
  );

  // Safe destructuring with fallback values
  const instagramUrl = !loading && data?.instagramLink ? data.instagramLink : "";
  const youtubeUrl = !loading && data?.youtubeLink ? data.youtubeLink : "";

  return (
    <section className='w-full bg-[#2b2b2f] py-5 flex flex-col gap-12'>
      {/* layout for not mobile */}
      <div className='hidden md:flex justify-between w-[95%] m-auto'>
        <div className='flex gap-8 items-center'>
          <Link href={'/'}>
            <Image
              src={'/images/feelframelogowhite.png'}
              alt='logo'
              width={55}
              height={70}
              className='w-[55px] h-[55px]'
            />
          </Link>
          <BsDashLg />
          <div>
            <a
              href="mailto:feelframestudios@gmail.com"
              className='flex gap-2 items-center hover:underline hover:scale-95'
            >
              <FaEnvelope fill='#f5f5f5' />
              <p>feelframestudios@gmail.com</p>
            </a>
          </div>
        </div>

        {/* navigation */}
        <div className='flex items-center gap-5'>
          <Link href={'/'}>
            <p className='text-[#f5f5f5] font-semibold hover:underline hover:scale-95 hover:text-[#d85425]'>Home</p>
          </Link>
          <Link href={'/works'}>
            <p className='text-[#f5f5f5] font-semibold hover:underline hover:scale-95 hover:text-[#d85425]'>Work</p>
          </Link>
          <Link href={'/contacts'}>
            <p className='text-[#f5f5f5] font-semibold hover:underline hover:scale-95 hover:text-[#d85425]'>Contact</p>
          </Link>
        </div>
      </div>

      {/* layout for mobile */}
      <div className='flex flex-col justify-center items-center gap-8 md:hidden'>
        <Link href={'/'}>
          <Image
            src={'/images/feelframelogowhite.png'}
            alt='logo'
            width={55}
            height={70}
            className='w-[55px] h-[55px]'
          />
        </Link>
        <GoDash fill='#d85425' />
        <div>
          <a
            href="mailto:feelframestudios@gmail.com"
            className='flex gap-2 items-center hover:underline hover:scale-95'
          >
            <FaEnvelope fill='#f5f5f5' />
            <p>feelframestudios@gmail.com</p>
          </a>
        </div>
        <div className='items-center gap-6 flex flex-col'>
          <Link href={'/'}>
            <p className='text-[#f5f5f5] font-semibold hover:text-[#d85425] hover:underline hover:scale-95'>Home</p>
          </Link>
          <Link href={'/works'}>
            <p className='text-[#f5f5f5] font-semibold hover:text-[#d85425] hover:underline hover:scale-95'>Work</p>
          </Link>
          <Link href={'/contacts'}>
            <p className='text-[#f5f5f5] font-semibold hover:text-[#d85425] hover:underline hover:scale-95'>Contact</p>
          </Link>
        </div>
      </div>

      {/* credits */}
      <div className='bg-[#414145] w-[95%] m-auto flex max-sm:flex-col gap-5 py-20 px-8 items-center justify-between'>
        <p className='text-[#f5f5f5] font-semibold'>© 2024 feelframestudio</p>
        <div className='flex gap-4'>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <FaInstagram className='fill-[#f5f5f5] hover:fill-[#d85425] hover:scale-90' size={25} />
          </a>
          <a href={youtubeUrl} target="_blank" rel="noreferrer">
            <FaYoutube className='fill-[#f5f5f5] hover:fill-[#d85425] hover:scale-90' size={25} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
