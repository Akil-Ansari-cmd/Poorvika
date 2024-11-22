import React, { useState } from 'react'

const Body6 = () => {
    const [content, setContent] = useState("1");


    return (
        <div className='mt-3 bg-white pb-5 overflow-hidden'>
            <div className='flex justify-between md:ml-10 ml-3 xl:gap-96 lg:gap-28 md:gap-36 gap-0 '>
                <div className='font-bold lg:text-xl pt-2 md:text-sm text-xl whitespace-nowrap mt-3 text-orange-500 '>
                    Tv & Audio
                </div>
                <div className='md:overflow-hidden pt-2 overflow-x-scroll'>
                    <div className='md:flex hidden ml-12'>
                        <div onClick={() => setContent("1")} className={`border-r cursor-pointer border-black font-bold lg:text-xl text-sm whitespace-nowrap p-3 lg:w-40 w-32 lg:h-12 h-10 ${content==="1" ? "text-orange-500":""} `}>
                            All Categories
                        </div>
                        <div onClick={() => setContent("2")} className={`border-r cursor-pointer border-black font-bold lg:text-xl text-sm whitespace-nowrap p-3 text-center lg:w-36 md:w-24 w-36 lg:h-12 md:h-10 ${content==="2" ? "text-orange-500":""} `}>
                            Tv
                        </div>
                        <div onClick={() => setContent("3")} className={`border-r cursor-pointer border-black font-bold lg:text-xl text-sm whitespace-nowrap p-3 text-center lg:w-36 md:w-24 w-36 lg:h-12 md:h-10 h-12 ${content==="3" ? "text-orange-500":""} `}>
                            Audio
                        </div>
                        <div onClick={() => setContent("4")} className={` font-bold cursor-pointer lg:text-xl text-sm whitespace-nowrap p-3 lg:pl-7 pl-4 h-12 ${content==="4" ? "text-orange-500":""} `}>
                            Entertainment
                        </div>
                    </div>
                    <div className='md:hidden flex ml-5'>
                        <div onClick={() => setContent("1")} className={` border-r border-black font-bold text-xl whitespace-nowrap p-3 text-center w-40 h-12 ${content==="1" ? "text-orange-500":""} `}>
                        All Categories
                        </div>
                        <div onClick={() => setContent("2")} className={` border-r border-black font-bold text-xl whitespace-nowrap p-3 w-36 h-12 ${content==="2" ? "text-orange-500":""} `}>
                        Tv
                        </div>
                        <div onClick={() => setContent("3")} className={` border-r border-black font-bold text-xl whitespace-nowrap p-3 w-36 h-12 ${content==="3" ? "text-orange-500":""} `}>
                        Audio
                        </div>
                        <div onClick={() => setContent("4")} className={` font-bold text-xl whitespace-nowrap p-3 pl-7 h-12 ${content==="4" ? "text-orange-500":""} `}>
                        Entertainment
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-7'>
                {
                    content === "1" &&
                    <div className='flex gap-3'>
                        <div className='flex flex-col xl:w[0%] w-[50%]'>
                            <div className='flex gap-4'>
                                <div>
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/pageimg/smart-tvs-shop-now-at-poorvika.webp?width=300&height=170&quality=75' />
                                </div>
                                <div >
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/pageimg/entertainment-shop-now-category.webp?width=300&height=171&quality=75' />
                                </div>
                            </div>
                            <div className='flex mt-4 gap-4'>
                                <div>
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/pageimg/audio-devices-category-shop-now.webp?width=300&height=171&quality=75' />
                                </div>
                                <div>
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/pageimg/tv-accessories-shop-now-at-poorvika.webp?width=300&height=171&quality=75' />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img className='w-[49vw] h-[100%] ' src='https://img-prd-pim.poorvika.com/pageimg/Quality-sound-at-an-affordable-price.webp?width=600&height=350&quality=75' />
                        </div>
                    </div>
                }
                {
                    content === "2" &&
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-4'>
                            <div><img className='w-[25vw]'  src='https://img-prd-pim.poorvika.com/pageimg/Led-Tv.webp?width=300&height=172&quality=75' /></div>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/OLED-TV.webp?width=300&height=171&quality=75' /></div>
                        </div>
                        <div>
                            <img className=' w-[49vw] h-[100%]' src='https://img-prd-pim.poorvika.com/pageimg/OLED-TV.webp?width=300&height=171&quality=75'/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div><img className='w-[25vw]'  src='https://img-prd-pim.poorvika.com/pageimg/OLED-TV.webp?width=300&height=171&quality=75' /></div>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/QNED-TV.webp?width=300&height=172&quality=75' /></div>
                        </div>
                    </div>}
                {
                    content === "3" &&
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-4'>
                            <div><img className='w-[25vw]'  src='https://img-prd-pim.poorvika.com/pageimg/Party-speakers.webp?width=300&height=170&quality=75' /></div>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/Bluetooth-speakers.webp?width=300&height=170&quality=75' /></div>
                        </div>
                        <div>
                            <img className=' w-[49vw] h-[100%]' src='https://img-prd-pim.poorvika.com/pageimg/Bluetooth-speakers.webp?width=300&height=170&quality=75'/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div><img className='w-[25vw]'  src='https://img-prd-pim.poorvika.com/pageimg/Soundbars.webp?width=300&height=170&quality=75' /></div>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/Soundbars.webp?width=300&height=170&quality=75' /></div>
                        </div>
                    </div>
                }
                {
                    content === "4" &&
                    <div className='flex gap-3'>
                        <div className='flex flex-col xl:w[0%] w-[50%]'>
                            <div className='flex gap-4'>
                                <div>
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/pageimg/CONSOLES-w.webp?width=300&height=170&quality=75' />
                                </div>
                                <div >
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/pageimg/CONSOLES-w.webp?width=300&height=170&quality=75' />
                                </div>
                            </div>
                            <div className='flex mt-4 gap-4'>
                                <div>
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/pageimg/CONTROLLERS.webp?width=300&height=170&quality=75' />
                                </div>
                                <div>
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/pageimg/STREAMING-DEVICES.webp?width=300&height=170&quality=75' />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img className='w-[49vw] h-[100%] ' src='https://img-prd-pim.poorvika.com/pageimg/STREAMING-DEVICES.webp?width=300&height=170&quality=75' />
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Body6
