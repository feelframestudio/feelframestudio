'use client'
import React, { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contacts from './components/Contacts';
import WeirdNav from './components/WeirdNav'
import VideoModal from './components/VideoModal'
import SomeOfOurWorks from './components/SomeOfOurWorks';
import useFetch from './components/hooks/UseFetch';
import { FaPlay } from "react-icons/fa";

type HighlightReel = {
  youtubeLink: string
  previewVideo: {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption: string | null
    width: number | null
    height: number | null
    formats: Record<string, unknown>
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: {
      public_id: string
      resource_type: string
    }
    createdAt: string
    updatedAt: string
    publishedAt: string
  }[]
}




const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  const highlightRef = useRef<(HTMLVideoElement | null)>(null);

  const { data, loading } = useFetch<HighlightReel>(`${process.env.NEXT_PUBLIC_API_URL}/api/highlight-reel?populate=previewVideo`
  );


  const handleMouseEnter = () => {
    if (highlightRef) {
      setShowPlay(false)
    }
  }


  const handleMouseLeave = () => {
    if (highlightRef) {
      setShowPlay(true)
    }
  };




  return (
    <>
      <Navbar />
      <WeirdNav />
      <section className='max-sm:flex max-sm:items-center sm:pt-[60px] text-[#f5f5f5] sm:pb-[60px] px-4 max-sm:min-h-[70vh] sm:min-h-[70vh] sm:flex sm:items-center'>
        <h1 className='md:text-3xl text-xl leading-12 md:leading-10 font-semibold max-w-4xl m-auto'>

          <span className='bg-[#d85425]'>Feelframestudio</span> is a creative powerhouse specializing in bold visuals and emotionally-driven storytelling. We turn ideas into unforgettable experiences that connect and inspire.

        </h1>
      </section>

      {/* highlight reel */}

      <section className='relative h-fit px-4' >
        {
          loading ? (<div className="w-full h-[350px] bg-[#414145] animate-pulse" ></div>) : (<video
            ref={highlightRef}
            autoPlay
            loop
            muted
            playsInline
            className='h-[350px] md:h-[350px] w-full m-auto object-cover'
            onClick={() => setShowModal(true)}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          >
            <source src={data?.previewVideo?.[0]?.url ?? ""} />
          </video>)
        }

        <FaPlay className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] text-4xl text-[#d85425] ${showPlay ? "hidden" : ""} pointer-events-none`} />

        <VideoModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          videoSrc={loading ? "" : data?.youtubeLink}
        />

        <div>
          <h1 className='text-4xl text-[#f5f5f5] mt-4 font-semibold'>SHOWREEL</h1>
        </div>

      </section>

      <SomeOfOurWorks />

      {/* contact */}
      <Contacts />
      {/* footer */}
      <Footer />
    </>
  )
}
export default Page
