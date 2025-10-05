import React from 'react';
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import Link from 'next/link';
import useFetch from './hooks/UseFetch';

interface SocialLinks {
  instagramLink: string;
  youtubeLink: string;
}

const Contacts = () => {
  const { data, loading } = useFetch<SocialLinks>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/social-link`
  );

  return (
    <div className='min-h-fit w-full'>
      <section className="relative h-[300px] md:h-[500px] w-[95%] m-auto flex items-center justify-center">
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-32 '>
          <h1>{"Let's Chat"}</h1>
          <Link href={'/contacts'}>
            <div className='bg-[#d85425] h-15 w-32 p-4 font-semibold flex items-center justify-center gap-4 hover:scale-90 transition-all ease-in duration-100 hover:bg-[#f5f5f5] hover:text-[#d85445]'>
              <p>Contact</p>
              <FaArrowRightLong />
            </div>
          </Link>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='h-[300px] md:h-[500px] w-full object-cover -z-20 opacity-30'
        >
          <source src="/videos/feel.mp4" />
        </video>
      </section>

      <div className='flex max-sm:flex-col items-center sm:gap-8 gap-2 h-fit w-full justify-center px-2 my-28'>
        <a href={loading ? "" : data?.instagramLink} target="_blank" rel="noreferrer">
          <div className='flex items-center justify-center gap-4'>
            <FaInstagram className='fill-[#f5f5f5] hover:fill-[#d85425] hover:scale-90 transition-all ease-in duration-100' size={35} />
          </div>
        </a>

        <GoDash className='sm:hidden' fill='#f5f5f5' />

        <a href={loading ? "" : data?.youtubeLink} target="_blank" rel="noreferrer">
          <div className='flex items-center justify-center gap-4'>
            <FaYoutube className='fill-[#f5f5f5] hover:fill-[#d85425] hover:scale-90 transition-all ease-in duration-100' size={35} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
