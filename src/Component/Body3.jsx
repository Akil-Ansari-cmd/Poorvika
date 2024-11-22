import React, { useState } from 'react'

const Body3 = () => {
    const [content, setContent] = useState("1");


    return (
        <div className='mt-3 bg-white pb-5 overflow-hidden'>
            <div className='flex justify-between md:ml-10 ml-3 xl:gap-96 lg:gap-28 md:gap-36 gap-0'>
                <div className='font-bold lg:text-xl pt-2 md:text-sm text-xl whitespace-nowrap mt-3 text-orange-500 '>
                    Laptops & Tablets
                </div>
                <div className='md:overflow-hidden pt-2 overflow-x-scroll'>
                    <div className='md:flex hidden ml-12'>
                        <div onClick={() => setContent("1")} className={`border-r border-black font-bold lg:text-xl text-sm whitespace-nowrap p-3 lg:w-36 w-28 lg:h-12 h-10 ${content==="1" ? "text-orange-500":""}  `}>
                            Best Laptops
                        </div>
                        <div onClick={() => setContent("2")} className={`border-r border-black font-bold lg:text-xl text-sm whitespace-nowrap p-3 lg:w-36 md:w-28 w-36 lg:h-12 md:h-10 ${content==="2" ? "text-orange-500":""}  `}>
                            Desktop Pc
                        </div>
                        <div onClick={() => setContent("3")} className={`border-r border-black font-bold lg:text-xl text-sm whitespace-nowrap p-3 lg:w-36 md:w-28 w-36 lg:h-12 md:h-10 h-12 ${content==="3" ? "text-orange-500":""} `}>
                            iPad & Tablet
                        </div>
                        <div onClick={() => setContent("4")} className={` font-bold lg:text-xl text-sm whitespace-nowrap p-3 lg:pl-7 pl-4 h-12 ${content==="4" ? "text-orange-500":""} `}>
                            Accessories
                        </div>
                    </div>
                    <div className='md:hidden flex ml-5'>
                        <div onClick={() => setContent("1")} className={` border-r border-black font-bold text-xl whitespace-nowrap p-3 w-36 h-12 ${content==="1" ? "text-orange-500":""} `}>
                            Best Laptops
                        </div>
                        <div onClick={() => setContent("2")} className={` border-r border-black font-bold text-xl whitespace-nowrap p-3 w-36 h-12 ${content==="2" ? "text-orange-500":""} `}>
                            Desktop Pc
                        </div>
                        <div onClick={() => setContent("3")} className={` border-r border-black font-bold text-xl whitespace-nowrap p-3 w-36 h-12 ${content==="3" ? "text-orange-500":""} `}>
                            iPad & Tablet
                        </div>
                        <div onClick={() => setContent("4")} className={` font-bold text-xl whitespace-nowrap p-3 pl-7 h-12 ${content==="4" ? "text-orange-500":""} `}>
                            Accessories
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-7'>
                {
                    content === "1" &&
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-4'>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/Macbook-lap.webp?width=300&height=170&quality=75' /></div>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/gaming-laptop-shop-now.webp?width=300&height=170&quality=75' /></div>
                        </div>
                        <div>
                            <img className=' w-[49vw] h-[100%]' src='https://img-prd-pim.poorvika.com/pageimg/HP-LAptop-mob.webp?width=600&height=350&quality=75' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/2-in-1-laptop.webp?width=300&height=170&quality=75' /></div>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/windows-laptop-shop-now.webp?width=300&height=171&quality=75' /></div>
                        </div>
                    </div>
                }
                {
                    content === "2" &&
                    <div className=''>
                    <img src='https://img-prd-pim.poorvika.com/pageimg/all-in-one-pc-category.webp?width=1900&height=1900&quality=75'/>
                    </div>}
                {
                    content === "3" &&
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-4'>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/iPad.webp?width=300&height=170&quality=75' /></div>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/iPad-Air.webp?width=300&height=171&quality=75' /></div>
                        </div>
                        <div>
                            <img className=' w-[49vw] h-[100%]' src='https://img-prd-pim.poorvika.com/pageimg/work-play.webp?width=600&height=350&quality=75' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/iPad-Pro.webp?width=301&height=170&quality=75' /></div>
                            <div><img className='w-[25vw]' src='https://img-prd-pim.poorvika.com/pageimg/Tablets-w.webp?width=301&height=171&quality=75' /></div>
                        </div>
                    </div>
                }
                {
                    content === "4" &&
                    <div className='flex gap-3'>
                        <div className='flex flex-col xl:w[0%] w-[50%]'>
                            <div className='flex gap-4'>
                                <div>
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=170,quality=75/pageimg/Printers-img.png' />
                                </div>
                                <div >
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=170,quality=75/pageimg/Mouse-keyboards.png' />
                                </div>
                            </div>
                            <div className='flex mt-4 gap-4'>
                                <div>
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=170,quality=75/pageimg/Charger-Adapters.png' />
                                </div>
                                <div>
                                    <img className='w-[100vw]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=170,quality=75/pageimg/Storage-Devices.png' />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img className='w-[49vw] h-[100%] ' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=600,height=350,quality=75/pageimg/Tablet-accessories.png' />
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Body3