import React, { useState } from 'react'
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Head2 = () => {
    const [open, setOpen] = useState();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const [lock, setLock] = useState(true);

    const lockHandler = () => {
        setLock(!lock);
    }
    return (
        <div className='flex flex-col text-white' onClick={handleOpen}>
            <div className='lg:flex hidden text-sm font-normal'>My Account</div>
            <div className='flex'>
                <div className='lg:flex hidden text-sm font-semibold whitespace-nowrap'>Sign In</div>
                <MdAccountCircle className='w-10 h-8 md:ml-8 ml-2 lg:-mt-4 -mt-0' />
            </div>
            {
                open && 
            <div onClick={handleClose} className='absolute bg-black bg-opacity-50 z-40 h-[100vh] left-0 w-[100%] inset-0  lg:py-5 md:py-0 py-10'>
                <div onClick={(e) => e.stopPropagation()} className='h-[100%] mx-auto w-[70%]'>
                    <div className='flex '>
                        <div className='lg:flex hidden w-[50%]'>
                            <img className=' border-r-gray-400 w-[100%] h-[100%]' src='https://img.poorvika.com//login-img.jpeg' />
                        </div>
                        <div className='relative flex flex-col bg-white lg:w-[50%] md:w-[80%] w-[100%] md:mx-auto lg:mx-0'>
                        <div onClick={handleClose} className='absolute right-0 text-white'><RxCross2 className='bg-orange-500 ' style={{fontSize:"25px"}}/></div>
                            <div className='mx-auto mt-10 text-xl font-semibold text-black'>Sign In</div>
                            <div className='mx-auto mt-10 text-lg font-semibold text-slate-400'>To access your Order easily</div>
                            <div className='mx-10 mt-3 text-black'>Email / Mobile Number *</div>
                            <input className='mx-10 p-3 mt-3 rounded-md border border-black outline-none text-black' type='text' placeholder='Email / Mobile Number' />
                            <div className='mx-10 mt-3 text-black'>Password *</div>
                            <input className='mx-10 p-3 mt-3 rounded-md border border-black outline-none text-black' type={`${lock ? "password" : "text"}`} placeholder='Password' />
                            <div className='absolute top-72 mt-3 right-16 text-black' >
                                {lock ? <CiLock onClick={lockHandler} /> : <CiUnlock onClick={lockHandler} />}
                            </div>
                            <div className='flex justify-between mt-5 text-xs px-10'>
                                <div className='text-red-500'>Register</div>
                                <div className='text-black'>Forgot Password ?</div>
                            </div>
                            <div className='mx-10 md:mb-0 mb-3 p-3 mt-5 text-center bg-orange-400 rounded-md font-bold text-white'>LOGIN</div>
                            <div className='md:flex hidden mx-auto font-bold text-orange-500'>or</div>
                            <div className='md:flex hidden mx-auto my-2 text-black'>LOGIN WITH OTP / GUEST</div>
                            <div className='md:flex hidden text-xs mx-auto text-black'>Upon login, I agree to Poorvika's <span className='text-blue-500'>Privacy Policy</span> & <span className='text-blue-500'>Terms</span></div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
export default Head2
