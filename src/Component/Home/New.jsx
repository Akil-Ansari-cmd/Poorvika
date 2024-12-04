import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
const New = () => {
  return (
    <div className=''>
      <div className='flex items-center h-14 '>
        <div className='flex items-center gap-3 md:pl-3 pl-5 border-r  border-slate-400 h-full w-44 shadow-sm'>
          <div><FaWhatsapp className='h-8 w-6 text-green-500' /></div>
          <div className='md:flex hidden font-semibold'>WhatsApp Us</div>
        </div>
        <div className='flex items-center gap-3 pl-5 h-full w-44 shadow-sm'>
          <div><BsTelephone className='h-6 w-6 text-blue-500' /></div>
          <div className='md:flex hidden font-semibold'>Talk to Us</div>
        </div>
        <div className='flex items-center gap-3 pl-5 bg-pink-100 h-full w-44 shadow-sm'>
          <div><IoLogoInstagram className='h-10 w-8 text-pink-500' /></div>
          <div className='md:flex hidden font-semibold'>@Poorvika</div>
        </div>
        <div className='flex items-center gap-3 pl-5 bg-blue-50 h-full w-44 shadow-sm'>
          <div><FaFacebookF className='h-6 w-8 text-blue-500' /></div>
          <div className='md:flex hidden font-semibold'>@Poorvika</div>
        </div>
        <div className='flex items-center gap-3 pl-5 bg-blue-100 h-full w-44 shadow-sm'>
          <div><RiTwitterXFill className='h-6 w-8 text-black' /></div>
          <div className='md:flex hidden font-semibold'>@Poorvika</div>
        </div>
        <div className='lg:flex hidden items-center gap-3 pl-5 bg-red-100 h-full w-44 shadow-sm'>
          <div><FaYoutube className='h-8 w-8 text-red-500' /></div>
          <div className='md:flex hidden font-semibold'>@Poorvika</div>
        </div>
        <div className='xl:flex hidden items-center gap-3 pl-5 bg-blue-50 h-full w-44 shadow-sm'>
          <div> <FaLinkedinIn className='h-8 w-8 text-blue-500' /></div>
          <div className=' font-semibold'>@Poorvika</div>
        </div>
        <div className='xl:flex hidden items-center gap-3 pl-5 bg-slate-200 h-full w-44 shadow-sm'>
          <div><FaThreads className='h-8 w-8 text-black' /></div>
          <div className='font-semibold'>@Poorvika</div>
        </div>
      </div>
      <div className='flex flex-wrap md:gap-0 gap-5 pt-7 bg-white'>
        <div>
          <div className='flex flex-col ml-5'>
            <div className='font-bold text-xl'>Contact Information</div>
            <div className='my-3 font-bold'>Head Office</div>
            <div>Poorvika Mobiles Pvt Ltd</div>
            <div>Admin Office No.30, Arcot Road,</div>
            <div>Kodambakkam, Chennai- 600 024.</div>
          </div>
        </div>
        <div>
          <div className='flex flex-col md:ml-5 ml-0'>
            <div className='font-bold text-xl'>Support</div>
            <div className='my-3'>Contact Us</div>
            <div>Site Map</div>
            <div className='mt-3'>One Assist</div>
          </div>
        </div>
        <div className='xl:ml-40 lg:ml-10 md:ml-40 ml-6'>
          <div className='flex flex-col'>
            <div className='font-bold text-xl'>Policies</div>
            <div className='my-3'>T & C</div>
            <div>Privacy Policy</div>
            <div className='my-3'>CSR & Whistle Blower Policy</div>
            <div>Return, Replacement & Refund</div>
          </div>
        </div>
        <div className='md:ml-16 ml-5'>
          <div className='flex flex-col'>
            <div className='font-bold text-xl'>Opportunities</div>
            <div className='my-3'>Careers</div>
          </div>
        </div>
        <div className='xl:ml-28 lg:ml-10 md:ml-28 ml-3'>
          <div className='flex flex-col ml-5'>
            <div className='font-bold text-xl'>Know More</div>
            <div className='my-3'>About Us</div>
            <div>Our Stores</div>
            <div className='mt-3'>Service Centres</div>
          </div>
        </div>
      </div>
      <div className='bg-white px-10 pt-20'>
        <div className='flex font-bold text-xl'>About Us</div>
        <p className='font-normal leading-8'>Poorvika leads India as the Largest Tech and Appliance Omnichannel Retailer, using innovative strategies that provide wider access to latest Premium Technology. Our services span across 470+ Showrooms in India, covering Tamil Nadu, Karnataka, Pondicherry, and Maharashtra, including an ever-growing legacy of Poorvika Appliances Showrooms in Tamil Nadu. Poorvika sells a wide category of Gadgets and Appliances, both Online and Offline ranging from the Best Smartphones, ACs, Refrigerators, Washing Machines, Laptops, All-in-one PCs, Customized PCs, Gaming Gears, Smart Devices, Smart TVs, Peripherals to many remarkable Accessories and Household Needs. Through www.poorvika.com, Poorvika's popular E-Commerce portal, Customers across India place their orders in just a click and gets them delivered Safely with convenient options like Same Day Delivery and Regular Delivery, while they also opt for Pickup at the Store option based on their location. Till now, Poorvika has served over 40 Million+ Happy Customers over 20 years, as a Leading retailer for Top Brands like Apple, Asus, Acer, Samsung, Oppo, LG, Bosch, Philips, IFB, Lenovo, Vivo, Whirlpool, Xiaomi, OnePlus, Redmi, Godrej, Realme, Nokia, etc. Poorvika remains the best spot to shop for all our everyday Gadgets and other Electronic Needs!</p>
      </div>
      <div className='flex flex-wrap pt-10 bg-white xl:gap-20 lg:gap-10 md:gap-2 gap-0'>
        <div className='flex lg:pl-20 md:pl-0 pl-5'>
          <div><img className='w-[100%]' src='https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/google-play.png' /></div>
          <div><img src='https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/app-store.png' /></div>
        </div>
        <div className='flex md:mt-0 mt-5 '>
          <div className='flex flex-col'>
            <div className='lg:ml-16 ml-12'>Our EMI Partners</div>
            <div className='flex gap-5 mt-4 md:ml-0 ml-7'>
              <div><img src='https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/bajaj.png' /></div>
              <div><img src='https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/foot-hdfc.png' /></div>
              <div><img src='https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/home-credit.png' /></div>
            </div>
          </div>
        </div>
        <div className='md:flex hidden md:mt-0 mt-5 w-[30%]'>
          <div className='flex flex-col'>
            <div className='lg:ml-28 ml-10'>Payment Option</div>
            <div className='flex mt-4 md:ml-0 ml-7'>
              <div><img src='https://img.poorvika.com/cdn-cgi/image/width=372,height=354,quality=50/common/foot-Payment-option.png' /></div>
            </div>
          </div>
        </div>
        <div className='md:hidden flex mt-5'>
          <div className='flex flex-col'>
            <div className=' ml-4'>Payment Option</div>
            <div className='flex mt-4 ml-7'>
              <div><img className='w-[100%]' src='https://img.poorvika.com/cdn-cgi/image/width=372,height=354,quality=50/common/foot-Payment-option.png' /></div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white pt-4 text-sm md:pl-10 pl-2'>
      Copyright © 2024 Poorvika Mobiles Private Limited | All Rights Reserved.
      </div>
    </div>
  )
}

export default New
