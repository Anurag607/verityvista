import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastConfig } from '@/lib/utils';

const ModCard = ({ guide, index }) => {


    const handleAcceptRequest=async(id)=>{

        try {
            const { data } = await axios.post(
              `${process.env.NEXT_PUBLIC_RENDER_SERVER}/respondex/${id}/`,
              { response:'accept' }
            );
            
            
            toast.success("request has been accepted", ToastConfig);
           

            window.location.reload(false);



          } catch(err) {
            console.log(err);
          }

    }

    const handleRejectRequest=async(id)=>{

        try {
            const { data } = await axios.post(
              `${process.env.NEXT_PUBLIC_RENDER_SERVER}/respondex/${id}/`,
              { response:'reject' }
            );

      
            
            toast.success("request has been rejected", ToastConfig);
            
            window.location.reload(false);

          } catch {
            console.log("some error occured in reject part");
          }

    }


    return (
        <div className='bg-white shadow-md flex flex-col items-center sm_md:items-start sm_md:flex-row gap-x-5 gap-y-6 p-4 rounded-lg w-[95vw] sm_md:w-full relative'>
            {/* image */}
            <div className='w-[100px] h-fit sm_md:max-h-[100px] border overflow-hidden relative'>
                <img loading="lazy" src={'placeholder.jpg'} alt='guide' className='w-full h-full object-contain' />
            </div>

            {/* content */}
            <div className="flex justify-between flex-col items-center sm_md:items-center sm_md:text-left text-center sm_md:flex-row w-full relative gap-y-6">
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-xl font-semibold">{guide.username}</h1>
                </div>
                    <div className='flex flex-column justify-evenly content-evenly'>
                        <button
                        onClick={(e) => {
                            handleAcceptRequest(guide.id);
                        }}
                        className="flex items-center gap-x-2 w-fit bg-primary text-white px-5 py-2 rounded-full text-md font-medium">
                        {"Approve"}
                    </button>
                    <button
                        onClick={(e) => {
                            handleRejectRequest(guide.id);
                        }}
                        className="flex items-center gap-x-2 w-fit bg-primary text-white px-5 py-2 rounded-full text-md font-medium">
                        {"Reject"}
                    </button>
                    </div>

            </div>
        </div>
    )
}

export default ModCard