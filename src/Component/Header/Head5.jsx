import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const Head5 = () => {
    return (
        <div className='h-screen w-screen'>
            <div className='flex text-sm pl-10 pt-4'>
                <div className='hover:cursor-pointer hover:text-orange-500'>Home</div>
                <IoIosArrowForward className='mt-1' />
                <div className='hover:cursor-pointer hover:text-orange-500'>My Cart</div>
            </div>
            <div className='mx-auto h-[65%] mt-20 w-[80%] bg-white shadow-xl rounded-md'>
                <div className='flex justify-center items-center pt-8'>
                    <img className='h-[40%] w-[25%]' src='https://img.poorvika.com/common/emty-cart.jpg' />
                </div>
                <div className='my-6 flex justify-center items-center'>Your shopping cart is empty!</div>
                <div className='mx-auto border bg-orange-500 w-52 h-12 rounded-md  text-center pt-2 font-semibold'>Continue Shopping</div>
            </div>
        </div>
    )
}

export default Head5
