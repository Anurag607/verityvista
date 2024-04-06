import Loader from '@/components/Loader';
import ModCard from '@/components/ModCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ModeratorPage = () => {

  const [isLoading,setIsLoading]=useState(true)

  const [modData,setmodData]=useState([])

  useEffect(() => {
    async function fetchGuidebooks() {
        setIsLoading(true);
        const getModData:any = await axios.get('url');
        if (getModData) {
            setmodData(getModData);
            setIsLoading(false);
        } else {
            console.log("error");
            setIsLoading(false);
        }
    }
    fetchGuidebooks();
}, [])
  return (
    <>
      {isLoading ? (
                <div className="grid h-[40vh] place-items-center">
                    <Loader />
                </div>
            ) : (
                <div className='flex flex-col gap-y-2 justify-center lg:justify-start w-full relatives h-[92.5%] pb-2 sm_md:pb-4 px-2 md:px-4 sm:overflow-y-scroll thin-scrollbar'>
                    {modData.length > 0 && modData.map((guide, index) => {
                        return <ModCard key={index} guide={guide} index={index} />
                    })}
                    {modData.length === 0 && (
                        <p className='text-lg text-neutral-500 max-w-[90%] mx-auto lg:max-w-full text-center lg:text-left'>
                            No guides available
                        </p>
                    )}
                </div>
            )}
    </>
  )
}

export default ModeratorPage