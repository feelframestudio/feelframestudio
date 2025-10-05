import React from 'react'
import useFetch from './hooks/UseFetch'
import { useEffect } from 'react'

type WorkNoteData = {
  title: string;
  note: string;
};

const WorkNote = () => {
    const { data, loading } = useFetch<WorkNoteData>(`${process.env.NEXT_PUBLIC_API_URL}/api/work-note`
    );

    useEffect(() => {
        console.log("API response:", data);
    }, [data]);
    return (
        <>
            {
                loading ?
                    (<div className="w-full h-[350px] bg-[#414145] animate-pulse" ></div>) :
                    (<div className='w-full pt-[100px] p-4 flex flex-col gap-4 max-w-3xl'>
                        <h1 className='text-4xl'>{data?.title ?? "No title available"}</h1>
                        <p className='text-xl leading-relaxed'>
                            {data?.note ?? "No title available"}
                        </p>
                    </div>)
            }
        </>

    )
}

export default WorkNote
