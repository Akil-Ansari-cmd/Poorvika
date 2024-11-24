import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
const Head4 = () => {
    const [open, setOpen] = useState();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }
  return (
    <div className='flex flex-col text-white' onMouseEnter={handleOpen}>
    <div className='lg:flex hidden text-sm font-normal'>0 Items</div>
    <div className='flex'>
        <div className='lg:flex hidden text-sm font-semibold whitespace-nowrap'>₹ 0</div>
        <FiShoppingCart className='lg:w-5 lg:h-6 w-7 h-7 md:ml-8 ml-4  lg:-mt-2 -mt-0' />
        <div className='lg:hidden md:flex hidden md:absolute ml-8 pl-1.5 font-semibold pt-0 bg-green-600 border rounded-full w-5 h-5  top-0 text-xs'>0</div>
        <div className='md:hidden flex absolute ml-2  pl-1.5 font-semibold pt-0.5 bg-green-600 border rounded-full w-5 h-5  top-0.5 text-xs'>0</div>
    </div>
    { open &&
    <div onMouseLeave={handleClose} className='absolute w-[25%] pb-3 top-12  rounded-b-full shadow-lg right-52 bg-white'>
      <div onClick={(e) => e.stopPropagation} className='pt-5 text-center  text-black'>
        Your Cart is empty
      </div>
    </div>
    }
    </div>
  )
}

export default Head4
