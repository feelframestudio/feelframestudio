import React from 'react'
import useFetch from './hooks/UseFetch'
import { useRouter } from 'next/navigation'
import VideoGrid from './VideoGrid';
import { VideoItem } from '../type';

const SoneOfOurWorks = () => {
    const { data, loading } = useFetch<VideoItem[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/videos?populate=previewVideo&filters[displayOnHome]=true`
    );

    const router = useRouter();

    return (
        <section className=' text-[#f5f5f5] p-4 mt-12'>
            <VideoGrid videos={data ?? []} loading={loading} />


            <div
                className='w-fit bg-[#d85425] py-2 px-2 m-auto my-20 text-xl cursor-pointer hover:bg-[#f5f5f5] hover:text-[#d85425] transition-all ease-in duration-300 hover:scale-90'
                onClick={() => router.push('/works')}
            >
                <p>More of our work</p>
            </div>

        </section>
    )
}

export default SoneOfOurWorks
