import React from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { HiOutlineEye } from "react-icons/hi";
import Product3 from './Product3';
import { SiTicktick } from "react-icons/si";
const Product2 = () => {
    return (
        <>
            <div className="bg-[#fef2e6] ] text-[#e0b98e] h-10 pt-1 md:flex hidden justify-around sticky xl:top-20 lg:top-24 top-11 z-50  ">
                <div className="flex mt-1 gap-x-1">
                    <div>
                        <HiOutlineEye className="text-xl font-semibold mt-0.5" />
                    </div>
                    <div className="text-base font-semibold">Overview</div>
                </div>
                <div className="flex mt-1 gap-x-1">
                    <div>
                        <img
                            src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/sliders.png"
                            alt=""
                            className="border mt-1"
                        />
                    </div>
                    <div>Detailed Specs</div>
                </div>
                <div className="flex mt-1 gap-x-1">
                    <div>
                        <img
                            src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/play.png"
                            alt=""
                            className="w-4 mt-1"
                        />
                    </div>
                    <div>Videos</div>
                </div>
                <div className="flex mt-1 gap-x-1">
                    <div>
                        <IoMdStarOutline className='text-xl font-semibold mt-0.5' />
                    </div>
                    <div>Rating and Reviews</div>
                </div>
                <div className="flex mt-1 gap-x-1">
                    <div>
                        <img
                            src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/package.png"
                            alt=""
                            className="mt-1"
                        />
                    </div>
                    <div>Related Products</div>
                </div>
                <div className="flex mt-1 gap-x-1">
                    <div>
                        <img
                            src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/compare-color.png"
                            alt=""
                            className="mt-1 "
                        />
                    </div>
                    <div>Compare</div>
                </div>
            </div>
            <div className='mt-3 font-semibold text-2xl h-10 bg-gray-200 pt-1 pl-2' >
                Overview
            </div>
            <div>
                <img src='https://img-prd-pim.poorvika.com/pageimg/Apple-iPhone-16-web33.webp?width=1000&height=1000&quality=75' />
            </div>
            <div className="bg-[#8e8e8e] h-16 text-white flex justify-center items-center mt-4 ">
                <div className="text-3xl font-bold">Videos</div>
            </div>
            <div className="h-16 border flex justify-center items-center my-8">
                <div className="text-xl">Video not available for this product</div>
            </div>
            <div className="m-2 ">
                <div className="bg-[#8e8e8e] h-12 text-white flex justify-center items-center mt-4 ">
                    <div className="text-xl font-semibold">Rating & Reviews</div>
                </div>
                <div className="border flex flex-col justify-center items-center">
                    <div className=" text-lg m-10 ">
                        You are the first one to review this product. click below button to
                        post your review !
                    </div>
                    <div className="border text-white bg-orange-500 font-semibold rounded-md w-[20%] lg:w-[15%] text-sm text-center p-4 mb-5">
                        WRITE REVIEWS
                    </div>
                </div>
            </div>
            <div>
                <Product3 />
            </div>
            <div className='mx-4 overflow-x-scroll'>
                <div className='flex pt-3 gap-2 border-l border-r border-gray-200 pl-2 pb-2 w-full'>
                    <div> <SiTicktick className='text-xl mt-1 border border-black w-10 pl-3 rounded-lg text-green-500' /></div>
                    <div className='text-lg font-semibold'>General</div>
                </div>
                <div className='flex overflow-hidden overflow-x-scroll pl-2 w-[100%] border text-center text-sm font-semibold h-10'>
                    <div className='md:w-[12%] w-[20%] pt-2'>Network </div>
                    <div className='md:w-[22%]  w-[20%] lg:ml-7 ml-16 border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2 text-center'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-52 pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-40 pt-2'>2G/3G/4G/5G/VoLTE</div>
                </div>
                <div className='flex overflow-hidden overflow-x-scroll pl-2 w-[100%] border text-center text-sm font-semibold h-10'>
                    <div className='md:w-[12%] w-[20%] pt-2'>Network </div>
                    <div className='md:w-[22%]  w-[20%] lg:ml-7 ml-16 border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2 text-center'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-52 pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-40 pt-2'>2G/3G/4G/5G/VoLTE</div>
                </div>
            </div>
            <div className='mx-4'>
                <div className='flex pt-3 gap-2 border-l border-r border-gray-200 pl-2 pb-2 '>
                    <div> <SiTicktick className='text-xl mt-1 border border-black w-10 pl-3 rounded-lg text-green-500' /></div>
                    <div className='text-lg font-semibold'>Dimensions</div>
                </div>
                <div className='flex overflow-hidden overflow-x-scroll pl-2 w-[100%] border text-center text-sm font-semibold h-10'>
                    <div className='md:w-[12%] w-[20%] pt-2'>Network </div>
                    <div className='md:w-[22%]  w-[20%] lg:ml-7 ml-16 border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2 text-center'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-52 pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-40 pt-2'>2G/3G/4G/5G/VoLTE</div>
                </div>
                <div className='flex overflow-hidden overflow-x-scroll pl-2 w-[100%] border text-center text-sm font-semibold h-10'>
                    <div className='md:w-[12%] w-[20%] pt-2'>Network </div>
                    <div className='md:w-[22%]  w-[20%] lg:ml-7 ml-16 border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2 text-center'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-52 pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-40 pt-2'>2G/3G/4G/5G/VoLTE</div>
                </div>
            </div>
            <div className='mx-4 pb-5'>
                <div className='flex pt-3 gap-2 border-l border-r border-gray-200 pl-2 pb-2 '>
                    <div> <SiTicktick className='text-xl mt-1 border border-black w-10 pl-3 rounded-lg text-green-500' /></div>
                    <div className='text-lg font-semibold'>Display</div>
                </div>
                <div className='flex overflow-hidden overflow-x-scroll pl-2 w-[100%] border text-center text-sm font-semibold h-10'>
                    <div className='md:w-[12%] w-[20%] pt-2'>Network </div>
                    <div className='md:w-[22%]  w-[20%] lg:ml-7 ml-16 border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2 text-center'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-52 pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-40 pt-2'>2G/3G/4G/5G/VoLTE</div>
                </div>
                <div className='flex overflow-hidden overflow-x-scroll pl-2 w-[100%] border text-center text-sm font-semibold h-10'>
                    <div className='md:w-[12%] w-[20%] pt-2'>Network </div>
                    <div className='md:w-[22%]  w-[20%] lg:ml-7 ml-16 border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2 text-center'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-52 pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-40 pt-2'>2G/3G/4G/5G/VoLTE</div>
                </div><div className='flex overflow-hidden overflow-x-scroll pl-2 w-[100%] border text-center text-sm font-semibold h-10'>
                    <div className='md:w-[12%] w-[20%] pt-2'>Network </div>
                    <div className='md:w-[22%]  w-[20%] lg:ml-7 ml-16 border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2 text-center'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-52 pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-40 pt-2'>2G/3G/4G/5G/VoLTE</div>
                </div>
                <div className='flex overflow-hidden overflow-x-scroll pl-2 w-[100%] border text-center text-sm font-semibold h-10'>
                    <div className='md:w-[12%] w-[20%] pt-2'>Network </div>
                    <div className='md:w-[22%]  w-[20%] lg:ml-7 ml-16 border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2 text-center'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-52 pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] border-l lg:pr-0 md:pr-16 pr-52 border-r pt-2'>2G/3G/4G/5G/VoLTE</div>
                    <div className='md:w-[22%]  w-[20%] lg:pr-0 md:pr-16 pr-40 pt-2'>2G/3G/4G/5G/VoLTE</div>
                </div>
            </div>
        </>
    )
}

export default Product2
