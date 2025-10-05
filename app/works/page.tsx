'use client'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import VideoGrid from '../components/VideoGrid'
import WeirdNav from '../components/WeirdNav'

import useFetch from '../components/hooks/UseFetch'
import WorkNote from '../components/WorkNote'
import { VideoItem } from '../type';


const Page = () => {

    const { data, loading } = useFetch<VideoItem[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/videos?populate=previewVideo`
    );


    return (
        <>
            <Navbar />
            <WeirdNav />
            <WorkNote />
            <div className='w-full px-4 my-36'>
                <VideoGrid videos={data ?? []} loading={loading} />
            </div>

            <Footer />
        </>

    )
}

export default Page
