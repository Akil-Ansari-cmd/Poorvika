import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
const Head1 = () => {
    const [open, setOpen] = useState();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const [yes, setYes] = useState();

    const handleYes = () => {
        setYes(!yes);
    }
    const handleNo = () => {
        setYes(false);
    }
    return (
        <>
            <div className='lg:flex hidden  flex-col text-white' onClick={handleOpen}>
                <div className=' text-sm font-normal'>Delivery to</div>
                <div className='flex'>
                    <div className='text-sm font-semibold'>LUCKNOW</div>
                    <IoLocationSharp className='w-6 h-5' />
                </div>
                {open &&
                    <div onClick={handleClose} className='absolute inset-0 !z-40 bg-black bg-opacity-50 h-[100vh] top-0 left-0 w-[100%] !py-20'>
                        <div onClick={(e) => e.stopPropagation()} className='xl:w-[30%] w-[50%] mx-auto border border-white inset-0'>
                            <div>
                                <img className='' src='https://img.poorvika.com//pincode_request.jpg' />
                            </div>
                            <div className='!flex !flex-col pt-10 bg-white'>
                                <div className='mx-auto font-bold text-xl text-orange-500 '>Help us to serve you better</div>
                                <div className='mx-auto text-sm mt-5 text-gray-400'>Enter your delivery pin to check nearest</div>
                                <div className='mx-auto text-sm my-1 text-gray-400'>stores,product availabe & faster delivery</div>
                                <div className='mx-auto text-sm text-gray-400'>options</div>
                                <div className='flex pb-5 mx-auto'>
                                    <input className='mt-8 p-2 w-52 border border-black placeholder:text-black outline-none text-black' type='text' placeholder='226006' />
                                    <div className='mt-8 pl-5 pt-1 text-white bg-black w-28 text-lg border border-black'>Submit</div>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
            <div className='lg:hidden flex  relative mt-3 text-white' onClick={handleYes}>
                <IoLocationSharp className='w-5 md:ml-5 ml-2 h-8 absolute -top-4 md:pl-0 ' />
                <div className='md:flex hidden text-xs mt-1.5'>LUCKNOW</div>
                <div className='md:hidden flex text-xs mt-1.5'>LUCKN...</div>
            </div>
            {yes &&
                    <div onClick={handleNo} className='absolute inset-0 !z-40 bg-black bg-opacity-50 h-[100vh] top-0 left-0 w-[100%] !py-20'>
                        <div onClick={(e) => e.stopPropagation()} className='w-[85%] h-[30%] mx-auto border border-white inset-0'>
                            <div>
                                <img className='' src='https://img.poorvika.com//pincode_request.jpg' />
                            </div>
                            <div className='!flex !flex-col pt-10 bg-white'>
                                <div className='mx-auto font-bold text-sm text-orange-500 '>Help us to serve you better</div>
                                <div className='mx-auto text-xs mt-5 text-gray-400'>Enter your delivery pin to check nearest</div>
                                <div className='mx-auto text-xs my-1 text-gray-400'>stores,product availabe & faster delivery options</div>
                                <div className='flex pb-5 mx-auto'>
                                    <input className='mt-8 p-2 w-52 border border-black placeholder:text-black outline-none text-black' type='text' placeholder='226006' />
                                    <div className='mt-8 pl-5 pt-1 text-white bg-black w-28 text-lg border border-black'>Submit</div>
                                </div>
                            </div>
                        </div>
                    </div>

                }
        </>
    )
}

export default Head1
