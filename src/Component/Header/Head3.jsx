import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
const Head3 = () => {
  const [open, setOpen] = useState();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }
  return (
    <div className='lg:flex hidden flex-col text-white' onClick={handleOpen}>
      <div className='text-sm font-normal'>Locate</div>
      <div className='flex'>
        <div className='text-sm font-semibold'>Stores</div>
        <IoIosArrowDown className='w-5 h-6' />
      </div>
{ open &&
      <div onClick={handleClose} className='absolute h-[100%] w-[30%] top-12 right-40 bg-white border-slate-200'>
        <div onClick={(e) => e.stopPropagation()}  className='h-[80%] w-[100%] bg-white border-t border-l border-r'>
          <div className='flex justify-between px-8 text-black pt-4 text-lg border-b border-gray-200'>
            <div>Poorvika Stores</div>
            <div>Service Centre</div>
          </div>
          <div className='pt-8 bg-white'>
          <div className='flex justify-between mx-10 pb-3 border-b-2 border-slate-200'>
            <div className=' text-slate-400'>Enter Pincode</div>
            <div className='font-bold text-red-500'>Check</div>
          </div>
          </div>
          <div className='text-center pt-4 font-bold bg-white text-slate-400'>OR</div>
          <div className='pt-5 px-10 bg-white'>
            <select className='w-[100%] p-2.5 outline-none text-black bg-gray-100'>
              <option value="Select State">Select State</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
            </select>
          </div>
          <div className='pt-3 px-10 bg-white'>
            <select className='w-[100%] p-2.5 outline-none text-black bg-gray-100'>
              <option value="Select City">Select City</option>
              <option value="Select City">Select City</option>
            </select>
          </div>
          <div className='py-3 px-10 bg-white'>
            <select className='w-[100%] p-2.5 outline-none text-black bg-gray-100'>
              <option value="Select Area">Select Area</option>
              <option value="Select Area">Select Area</option>
            </select>
          </div>
        </div>
      </div>
}
    </div>
  )
}

export default Head3
