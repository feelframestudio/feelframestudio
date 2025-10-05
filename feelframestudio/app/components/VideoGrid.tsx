'use client'
import { useRef } from 'react'
import Link from 'next/link';
import type {
    VideoItem
} from '../type'


import SkeletonCard from './SkeletonCard';

type VideoGridProps = {
    videos: VideoItem[];
    loading: boolean;
};


const VideoGrid = ({ videos, loading }: VideoGridProps) => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);


    const handleMouseEnter = (index: number) => {
        const video = videoRefs.current[index];
        if (video) video.play();
    };


    const handleMouseLeave = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    if (loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className='sm:grid max-sm:flex max-sm:flex-col max-sm:gap-8 grid-cols-2 grid-rows-2 gap-12'>
            {
                videos.map((videoItem, index) => {
                    if (!videoItem) return null;

                    const {
                        title,
                        shortDescription,
                        previewVideo,
                    } = videoItem;


                    const previewVideoUrl = previewVideo?.url
                        ? `${previewVideo.url}`
                        : null;

                    return (
                        <div
                            key={videoItem.id}
                            className='flex flex-col gap-4 hover:bg-[#2A2A2F] sm:p-4 transition-all ease-in duration-100 '
                        >
                            <Link
                                key={videoItem.id}
                                href={`/works/${videoItem.id}`}
                            >

                                <div
                                    className='group relative'>

                                    {previewVideoUrl && (
                                        <video
                                            ref={(el) => {
                                                videoRefs.current[index] = el;
                                            }}
                                            loop
                                            muted
                                            playsInline
                                            className='h-[300px] md:h-[350px] w-full object-cover opacity-60'
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={() => handleMouseLeave(index)}
                                        >
                                            <source src={previewVideoUrl} type='video/mp4' />
                                        </video>
                                    )}
                                    <div
                                        className='hidden group-hover:block absolute top-0 left-0 w-full h-full bg-[#d85425] opacity-30 pointer-events-none'>
                                    </div>
                                    <div
                                        className='hidden group-hover:block absolute top-0 left-0 w-full h-full pointer-events-none p-4 z-10'>
                                        <h1 className='text-3xl'>
                                            {shortDescription}
                                        </h1>
                                    </div>


                                </div>
                            </Link>

                            <div className='flex-col flex gap-2'>
                                <p>WORK</p>
                                <h1 className='text-4xl font-semibold'>{title}</h1>
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default VideoGrid
