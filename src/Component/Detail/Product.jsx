import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { LuCircleEqual } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import EMI from './EMI';
import { FaCircleCheck } from "react-icons/fa6";
import Product2 from './Product2';
import { useLocation } from 'react-router-dom';
const image = [{ id: "1", src: "https://img-prd-pim.poorvika.com/product/Apple-iphone-16-teal-128gb-Front-Back-View.png" },
{ id: "2", src: "https://img-prd-pim.poorvika.com/product/Apple-iphone-16-teal-128gb-Back-Left-View.png" },
{ id: "3", src: "https://img-prd-pim.poorvika.com/product/Apple-iphone-16-teal-128gb-Bottom-View.png" },
{ id: "4", src: "https://img.youtube.com/vi/KmHtSWrVvZU/mqdefault.jpg" },
    , { id: "5", src: "https://img-prd-pim.poorvika.com/product/Apple-iphone-16-teal-128gb-Panel-View.png" }]
const Product = () => {
    const [images, setImages] = useState()
    const { state } = useLocation()

    console.log("jjjjjjj", state)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setImages({ ...image[0], index: 0 })
    }, [])
    return (
        <>
            <div className='xl:flex grid mt-5 relative '>
                <div className='md:hidden flex mx-2 text-xs gap-0 text-gray-400'>
                    <div>Home</div>
                    <div><MdKeyboardArrowRight className='mt-1' /></div>
                    <div>Mobile & Acc..</div>
                    <div><MdKeyboardArrowRight className='mt-1' /></div>
                    <div>Mobiles</div>
                    <div><MdKeyboardArrowRight className='mt-1' /></div>
                    <div>iphones</div>
                    <div><MdKeyboardArrowRight className='mt-1' /></div>
                    <div>Apple Mobile</div>
                    <div><MdKeyboardArrowRight className='mt-1' /></div>
                    <div>App</div>
                </div>
                <div className='xl:w-[30%] w-[75%] xl:mx-5 lg:mx-60 md:mx-40 mx-12 h-fit xl:sticky xl:top-10'>
                    <div className='pt-5 '>
                        <img className='border border-slate-300 h-96 p-3 pb-7' src={state?.src} />
                    </div>
                    <div className='xl:block mx-5 hidden'>
                        <Slide image={image} setImages={setImages} images={images} />
                    </div>
                </div>

                <div className='xl:hidden lg:flex hidden mx-72 gap-5 mt-5'>
                    <div><img className='h-20 border border-orange-500 p-2' src='https://img-prd-pim.poorvika.com/product/Apple-iphone-16-teal-128gb-Front-Back-View.png' /></div>
                    <div><img className='h-20 border border-orange-500 p-2' src='https://img-prd-pim.poorvika.com/product/Apple-iphone-16-teal-128gb-Back-Left-View.png' /></div>
                    <div><img className='h-20 border border-orange-500 p-2' src='https://img-prd-pim.poorvika.com/product/Apple-iphone-16-teal-128gb-Bottom-View.png' /></div>
                </div>
                <div className='xl:block hidden w-[45%] ml-8 mt-5'>
                    <div className='flex text-sm gap-1 text-gray-400'>
                        <div>Home</div>
                        <div><MdKeyboardArrowRight className='mt-1' /></div>
                        <div>Mobile & Acc..</div>
                        <div><MdKeyboardArrowRight className='mt-1' /></div>
                        <div>Mobiles</div>
                        <div><MdKeyboardArrowRight className='mt-1' /></div>
                        <div>iphones</div>
                        <div><MdKeyboardArrowRight className='mt-1' /></div>
                        <div>Apple Mobile</div>
                        <div><MdKeyboardArrowRight className='mt-1' /></div>
                        <div>App</div>
                    </div>
                    <div className='font-semibold text-xl mt-4'>{state?.name}</div>
                    <div className='flex gap-5 my-1'>
                        <div className='font-semibold text-base text-green-600'>In Stock</div>
                        <div className='text-xs pt-1 text-gray-500'>(Product Code: 46895)</div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='font-semibold text-lg text-orange-500'>{state?.price}</div>
                        <div className='text-xs pt-1 text-black'>M.R.P:₹ 79,900</div>
                    </div>
                    <div className='text-xs text-gray-400'>Inclusive of all taxes</div>
                    <div className='flex-col mt-3 border border-orange-500 w-[90%] h-28'>
                        <div className='flex gap-40 h-8 pt-1 bg-orange-50'>
                            <div className='flex gap-1'>
                                <div><TbCirclePercentage className='mt-1.5 text-orange-500' /></div>
                                <div className='font-semibold'>Effective Price : <span className='text-green-600'>₹ 74,900 </span></div>
                            </div>
                            <div className='flex gap-2 text-gray-400'>
                                <div className='text-sm'>See how</div>
                                <div><IoIosInformationCircleOutline className='mt-1' /></div>
                            </div>
                        </div>
                        <div className='flex gap-10 pl-8 text-sm font-semibold border-t border-orange-500'>
                            <div className='flex-col relative border-r border-gray-400 h-20 w-[25%]'>
                                <div className='pt-4'>Actual Price</div>
                                <div className='pl-2'>₹ 79,900</div>
                                <FaCircleMinus className='absolute top-7 left-24 h-6 w-4 text-orange-500' />
                            </div>
                            <div className='flex-col relative border-r border-gray-400 h-20 w-[30%]'>
                                <div className='pt-4'>Total Discounts</div>
                                <div className='pl-2'>₹ 5,000</div>
                                <LuCircleEqual className='absolute top-7 -right-2 h-6 w-4 text-orange-500' />
                            </div>
                            <div className='flex-col'>
                                <div className='pt-4'>Effective Price</div>
                                <div className='pl-2'>₹ 74,900</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-xs mt-1 font-semibold'>Low Cost EMI starts from <span className='text-green-600'>₹ 3,494/</span>month for ICICI <span className='text-blue-500'>View Plans</span></div>
                    <div className='flex mt-3 gap-3 font-semibold'>
                        <TbCirclePercentage className='h-6 w-5 text-orange-600' />
                        <div className='border-b border-black'>Available Offers</div>
                    </div>
                    <div>
                        <EMI />
                    </div>
                    <div className='mt-10 text-sm font-semibold'>Color</div>
                    <div className='flex gap-7 text-xs text-center mt-2 font-semibold'>
                        <div className='flex flex-col'>
                            <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-black-128gb-Front-Back-View-Thumbnail.png' />
                            <div>Black</div>
                        </div>
                        <div className='flex flex-col'>
                            <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-white-128gb-Front-Back-View-Thumbnail.png' />
                            <div>White</div>
                        </div>
                        <div className='flex flex-col'>
                            <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-pink-128gb-Front-Back-View-Thumbnail.png' />
                            <div>Pink</div>
                        </div>
                        <div className='flex flex-col text-xs'>
                            <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-ultramarine-128gb-Front-Back-View-Thumbnail.png' />
                            <div>Blue</div>
                        </div>
                        <div className='flex flex-col'>
                            <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-Teal-128gb-Front-Back-View-Thumbnail.png' />
                            <div>Teal</div>
                        </div>
                    </div>
                    <div className='mt-4'>Storage</div>
                    <div className='flex gap-7 mt-3 text-sm'>
                        <div className='border border-green-600 p-2 rounded-md text-green-600'>128GB</div>
                        <div className='border border-black p-2 rounded-md'>256GB</div>
                        <div className='border border-black p-2 rounded-md'>512GB</div>
                    </div>
                    <div className='flex flex-col mt-7 border h-36 bg-gray-50'>
                        <div className='flex justify-between font-semibold border-b w-[100%] h-10 whitespace-nowrap pt-2 px-3 shadow-lg '>
                            <div>Delivery Options:</div>
                            <div className='flex'>
                                <FaLocationDot className='h-5 w-6' />
                                <input type='text' className='border-b border-black h-5 outline-none pb-2' placeholder='226016' />
                            </div>
                        </div>
                        <div className='flex flex-col text-xs font-semibold items-center text-green-600'>
                            <img className='h-16 w-40' src='https://img.poorvika.com/cdn-cgi/image/width=140,height=140,quality=75/common/regulardelivery-new.png' />
                            <div>Delivery on 9 Dec to 12 Dec
                            </div>
                        </div>
                        <div className="flex bg-rose-100 mt-10 h-14 w-[100%]">
                            <div className="flex gap-x-2 p-2 border">
                                <div>
                                    <img
                                        src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Return-Exchangee.png"
                                        alt=""
                                        className="h-10 w-14 mt-1"
                                    />
                                </div>
                                <div className="text-sm ">
                                    <span className="font-semibold">Replacement</span> in 7 Days
                                </div>
                            </div>
                            <div className="flex  gap-x-2 p-2 border">
                                <div>
                                    <img
                                        src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/warrenty.png"
                                        alt=""
                                        className="h-10 w-14 mt-1"
                                    />
                                </div>
                                <div className="text-sm ">
                                    <span className="font-semibold">Warranty</span> in 1 Year
                                </div>
                            </div>
                            <div className="flex  gap-x-2 p-2 border">
                                <div>
                                    <img
                                        src=" https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Gst-Invoice.png"
                                        alt=""
                                        className="h-10 w-14 mt-1"
                                    />
                                </div>
                                <div className="text-base">
                                    <span className="font-semibold text-sm">GST Invoice</span>{" "}
                                    Available
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mt-3'>Key Specifications</div>
                            <div className='flex text-xs gap-4 mt-2'>
                                <FaCircleCheck className='mt-0.5 text-green-500' />
                                <div>Rear Camera 48MP + 12MP | Front Camera 12MP</div>
                            </div>
                            <div className='flex text-xs gap-4 my-2'>
                                <FaCircleCheck className='mt-0.5 text-green-500' />
                                <div>15.54 cm ( 6.1 inch ) Super Retina XDR, OLED display</div>
                            </div>
                            <div className='flex text-xs gap-4'>
                                <FaCircleCheck className='mt-0.5 text-green-500' />
                                <div>A18 Bionic Chip | Built-In Rechargeable Lithium-ion Battery</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:block relative hidden w-[25%] pr-5'>
                    <div className='border border-gray-300'>
                        <div className='text-sm font-semibold underline mt-3 pl-5'>Frequently Bought Together:</div>
                        <div className='flex justify-evenly mt-3'>
                            <input type='checkbox' />
                            <img className='h-10 border border-gray-200' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=150,quality=75/product/Apple-Airpods-2-True-Wireless-White-01.png' />
                            <div className='text-xs font-semibold'>Apple AirPods 2 True...
                                ₹</div>
                        </div>
                        <div className='ml-52 text-xs line-through font-semibold'>12,999</div>
                        <div className='ml-28 font-semibold text-gray-200 text-sm'>White</div>
                        <div className='flex ml-28 font-semibold text-orange-200 text-xs gap-3 pb-2'>
                            <div>buy together for</div>
                            <div> ₹ 9,999</div>
                        </div>
                        <div className='pl-5 border-t-2'>
                            <div className='text-red-500 text-sm mt-3  font-semibold'>Want to protect your product?</div>
                            <div className='font-semibold text-sm underline pt-3 text-black'>Accidental and Liquid Damage Protection Plan</div>
                            <div className='flex mt-2'>
                                <input type='radio' />
                                <div className='text-sm ml-2 mt-3'>1 Year Accidental and Liquid Damage <span className='font-semibold text-green-500'>₹ 7,900 </span></div>
                                <div><IoInformationCircleSharp className='mt-3 h-5 w-5 text-gray-400' /></div>
                            </div>
                            <div className='flex mt-2'>
                                <input type='radio' />
                                <div className='text-sm ml-2 mt-3'>2 Year Accidental and Liquid Damage <span className='font-semibold text-green-500'>₹ 14,900 </span></div>
                                <div><IoInformationCircleSharp className=' mt-3 h-5 w-5 text-gray-400' /></div>
                            </div>
                            <div className='font-semibold text-sm underline pt-3 text-black'>Extended warranty</div>
                            <div className='flex mt-2 pb-4'>
                                <input type='radio' />
                                <div className='text-sm ml-2 mt-3'>1 Year Accidental and Liquid Damage <span className='font-semibold text-green-500'>₹ 4,900 </span></div>
                                <div><IoInformationCircleSharp className=' mt-3 h-5 w-5 text-gray-400' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='sticky bottom-0 bg-white'>
                        <div className='border h-14 flex items-center font-semibold text-xl bg-orange-500 text-white justify-center  mt-2'>
                            Buy Now
                            <IoIosArrowForward className='ml-10' />
                        </div>
                        <div className='border h-14 flex items-center font-semibold text-xl bg-gray-200 text-gray-400 shadow-lg justify-center  mt-2'>
                            Add to Cart
                        </div>
                    </div>
                </div>
                <div className='xl:hidden h-fit lg:flex block'>
                    <div className=' lg:w-[60%] w-[100%] mt-5'>
                        <div className='md:flex hidden text-sm md:mx-2 mx-0 lg:gap-1 gap-2 text-gray-400'>
                            <div>Home</div>
                            <div><MdKeyboardArrowRight className='mt-1' /></div>
                            <div>Mobile & Acc..</div>
                            <div><MdKeyboardArrowRight className='mt-1' /></div>
                            <div>Mobiles</div>
                            <div><MdKeyboardArrowRight className='mt-1' /></div>
                            <div>iphones</div>
                            <div><MdKeyboardArrowRight className='mt-1' /></div>
                            <div>Apple Mobile</div>
                            <div><MdKeyboardArrowRight className='mt-1' /></div>
                            <div>App</div>
                        </div>
                        <div className='font-semibold text-xl mt-4 md:mx-2 mx-4'>{state?.name}</div>
                        <div className='flex gap-5 my-1 md:mx-2 mx-4'>
                            <div className='font-semibold text-base text-green-600'>In Stock</div>
                            <div className='text-xs pt-1 text-gray-500'>(Product Code: 46895)</div>
                        </div>
                        <div className='flex gap-5 md:mx-2 mx-4'>
                            <div className='font-semibold text-lg text-orange-500'>{state?.price}</div>
                            <div className='text-xs pt-1 text-black'>M.R.P:₹ 79,900</div>
                        </div>
                        <div className='text-xs text-gray-400 md:mx-2 mx-4'>Inclusive of all taxes</div>
                        <div className='flex-col mt-3 border border-orange-500 w-[90%] h-28 md:mx-2 mx-4'>
                            <div className='flex justify-between h-8 pt-1 bg-orange-50'>
                                <div className='flex gap-1'>
                                    <div><TbCirclePercentage className='mt-1.5 text-orange-500' /></div>
                                    <div className='font-semibold '>Effective Price : <span className='text-green-600'>₹ 74,900 </span></div>
                                </div>
                                <div className='flex gap-2 text-gray-400'>
                                    <div className='text-sm'>See how</div>
                                    <div><IoIosInformationCircleOutline className='mt-1' /></div>
                                </div>
                            </div>
                            <div className='flex gap-10 md:pl-8 pl-2 text-sm font-semibold border-t border-orange-500'>
                                <div className='flex-col relative border-r border-gray-400 h-20 md:w-[25%] w-[33%] md:text-sm text-xs'>
                                    <div className='pt-4'>Actual Price</div>
                                    <div className='pl-2'>₹ 79,900</div>
                                    <FaCircleMinus className='absolute top-7 left-[93%] h-6 w-4 text-orange-500' />
                                </div>
                                <div className='flex-col relative border-r border-gray-400 h-20 md:w-[25%] w-[33%] md:text-sm text-xs'>
                                    <div className='pt-4'>Discounts</div>
                                    <div className='md:pl-2 pl-1'>₹ 5,000</div>
                                    <LuCircleEqual className='absolute top-7 -right-2 h-6 w-4 text-orange-500' />
                                </div>
                                <div className='flex-col md:w-[25%] w-[33%] md:text-sm text-xs'>
                                    <div className='pt-4'>Effective Price</div>
                                    <div className='pl-2'>₹ 74,900</div>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs mt-1 font-semibold md:mx-2 mx-4'>Low Cost EMI starts from <span className='text-green-600'>₹ 3,494/</span>month for ICICI <span className='text-blue-500'>View Plans</span></div>
                        <div className='flex mt-3 gap-3 font-semibold md:mx-2 mx-4'>
                            <TbCirclePercentage className='h-6 w-5 text-orange-600' />
                            <div className='border-b border-black'>Available Offers</div>
                        </div>
                        <div>
                            <EMI />
                        </div>
                        <div className='mt-10 text-sm font-semibold md:mx-2 mx-3'>Color</div>
                        <div className='flex gap-7 text-xs text-center mt-2 font-semibold md:mx-2 mx-2'>
                            <div className='flex flex-col'>
                                <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-black-128gb-Front-Back-View-Thumbnail.png' />
                                <div>Black</div>
                            </div>
                            <div className='flex flex-col'>
                                <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-white-128gb-Front-Back-View-Thumbnail.png' />
                                <div>White</div>
                            </div>
                            <div className='flex flex-col'>
                                <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-pink-128gb-Front-Back-View-Thumbnail.png' />
                                <div>Pink</div>
                            </div>
                            <div className='flex flex-col text-xs'>
                                <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-ultramarine-128gb-Front-Back-View-Thumbnail.png' />
                                <div>Blue</div>
                            </div>
                            <div className='flex flex-col'>
                                <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=50,height=50,quality=75/prodvarval/Apple-iphone-16-Teal-128gb-Front-Back-View-Thumbnail.png' />
                                <div>Teal</div>
                            </div>
                        </div>
                        <div className='mt-4 md:mx-2 mx-4'>Storage</div>
                        <div className='flex gap-7 mt-3 text-sm md:mx-2 mx-4'>
                            <div className='border border-green-600 p-2 rounded-md text-green-600'>128GB</div>
                            <div className='border border-black p-2 rounded-md'>256GB</div>
                            <div className='border border-black p-2 rounded-md'>512GB</div>
                        </div>
                        <div className='flex flex-col mt-7 border md:w-[100%] w-[85%%] h-36 bg-gray-50 md:mx-2 mx-2' >
                            <div className='flex justify-between font-semibold border-b w-[100%] h-10 whitespace-nowrap pt-2 px-3 shadow-lg '>
                                <div>Delivery Options:</div>
                                <div className='flex ml-5'>
                                    <FaLocationDot className='h-5 w-6' />
                                    <input type='text' className='border-b border-black w-[100%] h-5 outline-none pb-2' placeholder='226016' />
                                </div>
                            </div>
                            <div className='flex flex-col text-xs font-semibold items-center text-green-600'>
                                <img className='h-16 w-40' src='https://img.poorvika.com/cdn-cgi/image/width=140,height=140,quality=75/common/regulardelivery-new.png' />
                                <div>Delivery on 9 Dec to 12 Dec
                                </div>
                            </div>
                        </div>
                        <div className="flex bg-rose-100 mt-10 h-14 md:w-[100%] w-[85%] md:mx-2 mx-4">
                            <div className="flex gap-x-2 p-2 border">
                                <div>
                                    <img
                                        src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Return-Exchangee.png"
                                        alt=""
                                        className="h-10 w-14 mt-1"
                                    />
                                </div>
                                <div className="text-sm ">
                                    <span className="font-semibold">Replacement</span> in 7 Days
                                </div>
                            </div>
                            <div className="flex  gap-x-2 p-2 border">
                                <div>
                                    <img
                                        src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/warrenty.png"
                                        alt=""
                                        className="h-10 w-14 mt-1"
                                    />
                                </div>
                                <div className="text-sm ">
                                    <span className="font-semibold">Warranty</span> in 1 Year
                                </div>
                            </div>
                            <div className="flex  gap-x-2 p-2 border">
                                <div>
                                    <img
                                        src=" https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Gst-Invoice.png"
                                        alt=""
                                        className="h-10 w-14 mt-1"
                                    />
                                </div>
                                <div className="text-base">
                                    <span className="font-semibold text-sm">GST Invoice</span>{" "}
                                    {/* Available */}
                                </div>
                            </div>
                        </div>
                        <div className='md:mx-2 mx-4'>
                            <div className='mt-3'>Key Specifications</div>
                            <div className='flex text-xs gap-4 mt-2'>
                                <FaCircleCheck className='mt-0.5 text-green-500' />
                                <div>Rear Camera 48MP + 12MP | Front Camera 12MP</div>
                            </div>
                            <div className='flex text-xs gap-4 my-2'>
                                <FaCircleCheck className='mt-0.5 text-green-500' />
                                <div>15.54 cm ( 6.1 inch ) Super Retina XDR, OLED display</div>
                            </div>
                            <div className='flex text-xs gap-4'>
                                <FaCircleCheck className='mt-0.5 text-green-500' />
                                <div>A18 Bionic Chip | Built-In Rechargeable Lithium-ion Battery</div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-[100%] mt-5'>
                        <div className='border border-gray-300 md:mx-2 mx-0'>
                            <div className='text-sm font-semibold underline mt-3 pl-5'>Frequently Bought Together:</div>
                            <div className='flex justify-evenly mt-3'>
                                <input type='checkbox' />
                                <img className='h-10 border border-gray-200' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=150,quality=75/product/Apple-Airpods-2-True-Wireless-White-01.png' />
                                <div className='text-xs font-semibold'>Apple AirPods 2 True...
                                    ₹</div>
                            </div>
                            <div className='ml-52 text-xs line-through font-semibold'>12,999</div>
                            <div className='ml-28 font-semibold text-gray-200 text-sm'>White</div>
                            <div className='flex ml-28 font-semibold text-orange-200 text-xs gap-3 pb-2'>
                                <div>buy together for</div>
                                <div> ₹ 9,999</div>
                            </div>
                            <div className='pl-5 border-t-2 '>
                                <div className='text-red-500 text-sm mt-3  font-semibold'>Want to protect your product?</div>
                                <div className='font-semibold text-sm underline pt-3 text-black'>Accidental and Liquid Damage Protection Plan</div>
                                <div className='flex mt-2'>
                                    <input type='radio' className='mt-4' />
                                    <div className='text-sm ml-2 mt-3'>1 Year Accidental and Liquid Damage <span className='font-semibold text-green-500'>₹ 7,900 </span></div>
                                    <div><IoInformationCircleSharp className='mt-3 h-5 w-5 text-gray-400' /></div>
                                </div>
                                <div className='flex mt-2'>
                                    <input type='radio' className='mt-4' />
                                    <div className='text-sm ml-2 mt-3'>2 Year Accidental and Liquid Damage <span className='font-semibold text-green-500'>₹ 14,900 </span></div>
                                    <div><IoInformationCircleSharp className=' mt-3 h-5 w-5 text-gray-400' /></div>
                                </div>
                                <div className='font-semibold text-sm underline pt-3 text-black'>Extended warranty</div>
                                <div className='flex mt-2 pb-4'>
                                    <input type='radio' className='mt-4' />
                                    <div className='text-sm ml-2 mt-3'>1 Year Accidental and Liquid Damage <span className='font-semibold text-green-500'>₹ 4,900 </span></div>
                                    <div><IoInformationCircleSharp className=' mt-3 h-5 w-5 text-gray-400' /></div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='md:mx-2 mx-0'>
                            <div className='border h-14 flex items-center font-semibold text-xl bg-orange-500 text-white justify-center  mt-2'>
                                Buy Now
                                <IoIosArrowForward className='ml-10' />
                            </div>
                            <div className='border h-14 flex items-center font-semibold text-xl bg-gray-200 text-gray-400 shadow-lg justify-center  mt-2'>
                                Add to Cart
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='xl:hidden flex sticky bottom-0'>
                    <div className='border pt-3 flex w-[50%] h-14 font-semibold text-xl bg-orange-500 text-white justify-center  mt-2'>
                        Buy Now
                        <IoIosArrowForward className='ml-2 mt-1.5' />
                    </div>
                    <div className='border w-[50%] flex pt-3 h-14 font-semibold text-xl bg-gray-200 text-gray-400 shadow-lg justify-center  mt-2'>
                        Add to Cart
                    </div>
                </div>
            </div>
            <div className='mt-60'><Product2 /></div>
        </>
    )
}

export default Product
