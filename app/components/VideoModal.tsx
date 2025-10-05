// components/VideoModal.tsx
'use client'

import { useEffect } from 'react'
import { GiCancel } from "react-icons/gi"

function getYouTubeId(url: string): string | null {
    if (url) {
        return ""
    }
    const regExp = /^.*(youtu\.be\/|v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
}

export default function VideoModal({ isOpen, onClose, videoSrc }: {
    isOpen: boolean
    onClose: () => void
    videoSrc: string | undefined
}) {
    // Disable scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-20"
            onClick={onClose} // clicking outside
        >


            <div className='absolute inset-0 bg-[#151516] opacity-90'>
            </div>
            <div className="absolute top-2 right-2 text-white text-3xl z-20 mt-4 mr-2">
                <GiCancel fill='#f5f5f5' onClick={onClose} />
            </div>
            <div className="w-full p-4 z-30 flex items-center justify-center"
                onClick={e => e.stopPropagation()}>

                <iframe
                    className="w-full sm:w-[80%] h-[450px]"
                    src={getYouTubeId(videoSrc ?? "")
                        ? `https://www.youtube.com/embed/${getYouTubeId(videoSrc ?? "")}`
                        : ""
                    }
                    title={"Feelframe Studio - Showreel"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}


