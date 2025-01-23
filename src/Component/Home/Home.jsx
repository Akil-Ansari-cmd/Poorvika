import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Head1 from '../Header/Head1';
import Head2 from '../Header/Head2';
import Head3 from '../Header/Head3';
import Head4 from '../Header/Head4';
import Drawer from './Drawer';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [open, setOpen] = useState();
    const Navigate = useNavigate();
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
                        <Drawer />
                    </div>
                    <div onClick={() => Navigate("/")} className='xl:ml-20 lg:ml-2 ml-auto cursor-pointer'>
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
                        <div>
                            <Head3/>
                        </div>
                       <div>
                        <Head4/>
                       </div>
                        <div>
                            <Head2/>
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