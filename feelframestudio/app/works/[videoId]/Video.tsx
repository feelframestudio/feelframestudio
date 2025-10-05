'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import WeirdNav from '@/app/components/WeirdNav'
import Navbar from '@/app/components/Navbar'
import { VideoItem } from '@/app/type'
import VideoGrid from '@/app/components/VideoGrid'
import Contacts from '@/app/components/Contacts'
import Footer from '@/app/components/Footer'
import axios from 'axios'

function getYouTubeId(url: string): string {
    const regExp = /^.*(youtu\.be\/|v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
}

const Video = ({ videoId }: { videoId: string }) => {

    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/videos?populate=previewVideo`
                )
                setVideos(res.data.data)
            } catch (err) {
                console.error('Failed to fetch videos:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchVideos();
    }, [videos])

    return (
        <div>
            <Navbar />
            <WeirdNav />
            <section>
                {
                    (() => {
                        const video = videos.find(video => video.id.toString() === videoId);
                        if (!video) return <p>Video not found.</p>;
                        return (
                            <section className='pt-16'>
                                <div className='grid grid-cols-2 min-h-48'>

                                    <div className='bg-[#d85425] p-8'>
                                        <h1 className='sm:text-5xl text-3xl '>{video.title}</h1>
                                    </div>
                                    <div className='bg-[#414145] min-h-full p-8'>
                                        <p>{video.shortDescription}</p>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <iframe
                                        className="w-full sm:h-screen h-[350px]"
                                        src={`https://www.youtube.com/embed/${getYouTubeId(video.youtubeLink)}`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className='bg-[#d85425] min-h-[80vh]'>
                                    <p className='max-w-3xl text-2xl p-8'>{video.longDescription}</p>
                                </div>
                            </section>

                        );
                    })()
                }
            </section>

            <section className=' my-[150px] text-[#f5f5f5] p-4 '>
                <VideoGrid videos={videos.filter(item => item.id !== Number(videoId))} loading={loading} />
            </section>

            <Contacts />
            <Footer />
        </div>
    )
}

export default Video
