import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center h-[95vh] gap-16 pl-4 pr-2 pt-12' >
            <div className='h-fit flex flex-col gap-4'>
                <p className='leading-14 md:leading-20'>
                    <span className='text-4xl lg:text-6xl text-[#fcf3f2] bg-[#d85425] w-fit'>Captivate </span>
                    <span className='text-4xl lg:text-6xl text-[#fcf3f2] bg-[#d85425] w-fit'>your </span>
                    <span className='text-4xl lg:text-6xl text-[#fcf3f2] bg-[#d85425] w-fit'>audience </span>
                    <span className='text-4xl lg:text-6xl text-[#fcf3f2] bg-[#d85425] w-fit'>with </span>
                    <span className='text-4xl lg:text-6xl text-[#fcf3f2] bg-[#d85425] w-fit'>stunning</span>
                </p>

                <p className='leading-14 md:leading-20'>
                    <span className='text-4xl lg:text-7xl text-[#fcf3f2] bg-[#d85425] w-fit'>visuals </span>
                    <span className='text-4xl lg:text-7xl text-[#fcf3f2] bg-[#d85425] w-fit'>and </span>
                    <span className='text-4xl lg:text-7xl text-[#fcf3f2] bg-[#d85425] w-fit'>compelling </span>
                    <span className='text-4xl lg:text-7xl text-[#fcf3f2] bg-[#d85425] w-fit'>storytelling </span>
                </p>
            </div>
            <div className='flex gap-8'>
                <div className='flex gap-2 items-center'>
                    <Image src={'/images/location-dot-solid.svg'}
                        alt='location pin'
                        width={20} height={25} />
                    <p className=''><span className='text-[#d85425] w-fit'>Lagos, </span><span className=' text-[#d85425] w-fit'>NG</span><span className='text-[#d85425] w-fit'>/World</span></p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Image src={'/images/paper-plane-solid.svg'}
                        alt='location pin'
                        width={20} height={25} />
                    <p className=''><span className='text-[#d85425] w-fit'>feel</span>
                        <span className='text-[#d85425] w-fit'>frame</span>
                        <span className='text-[#d85425] w-fit'>studio</span>

                    </p>
                </div>
            </div>
        </div >
    )
}

export default Hero
