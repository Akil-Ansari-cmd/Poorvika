import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Head1 from '../Header/Head1';
const Home = () => {
    const [open, setOpen] = useState();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <div className='sticky top-0 z-50'>
                <div className='flex items-center  bg-orange-500 h-11'>
                    <div className='md:hidden flex ml-2' >
                        <RxHamburgerMenu className='text-white h-6 w-6' />
                    </div>
                    <div className='xl:ml-20 lg:ml-2 ml-auto'>
                        <img className='h-14 w-44 ' src="https://img.poorvika.com/common/Poorvika-english-logo.svg" />
                    </div>
                    <div className='flex items-center lg:space-x-12 md:space-x-5  md:ml-0 ml-14'>
                        <div className='md:flex hidden relative'>
                            <input className='w-96 h-9 font-semibold rounded-full p-1.5 outline-none pl-6 text-sm' type="text" placeholder='Search for Products,Brands,Offers' />
                            <FaSearch className='absolute top-0.5 right-3 w-5 h-8' />
                        </div>
                        <div>
                            <Head1 />
                        </div>
                        <div className='lg:flex hidden flex-col text-white'>
                            <div className='text-sm font-normal'>Locate</div>
                            <div className='flex'>
                                <div className='text-sm font-semibold'>Stores</div>
                                <IoIosArrowDown className='w-5 h-6' />
                            </div>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='lg:flex hidden text-sm font-normal'>0 Items</div>
                            <div className='flex'>
                                <div className='lg:flex hidden text-sm font-semibold whitespace-nowrap'>₹ 0</div>
                                <FiShoppingCart className='lg:w-5 lg:h-6 w-7 h-7 md:ml-8 ml-4  lg:-mt-2 -mt-0 relative' />
                                <div className='lg:hidden md:flex hidden md:absolute ml-8 pl-1.5 font-semibold pt-0 bg-green-600 border rounded-full w-5 h-5  top-0 text-xs'>0</div>
                                <div className='md:hidden flex absolute ml-2  pl-1.5 font-semibold pt-0.5 bg-green-600 border rounded-full w-5 h-5  top-0.5 text-xs'>0</div>
                            </div>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='lg:flex hidden text-sm font-normal'>My Account</div>
                            <div className='flex'>
                                <div className='lg:flex hidden text-sm font-semibold whitespace-nowrap'>Sign In</div>
                                <MdAccountCircle className='w-10 h-8 md:ml-8 ml-2 lg:-mt-4 -mt-0' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='md:hidden pl-3 px-2 pt-2 flex relative bg-orange-500 h-12'>
                <input className='w-full h-9 font-semibold rounded-full p-1.5 outline-none pl-6 text-sm' type="text" placeholder='Search for Products,Brands,Offers' />
                <FaSearch className='absolute top-2 right-5 w-5 h-8' />
            </div>
        </>
    )
}

export default Home