import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute lg:-top-[10%] md:top-[0%] top-[0%] rounded-md z-10 pt-1 h-28 -left-10 w-8 pl-1.5 " onClick={onClick}  >
            <IoIosArrowDropleftCircle className="h-5 w-5" />
        </button>
    );
}

// Custom Right Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute lg:-top-[10%] md:top-[0%] top-[0%]  rounded-md -right-7 h-28 w-8 pl-1.5 pt-1" onClick={onClick}  >
            <IoIosArrowDroprightCircle className="h-5 w-5" />
        </button>
    );
}

const EMI = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />, // Custom next arrow
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },

        ]
    };
    return (
        <div className='slide-container md:mx-10 mx-8 md:w-96 w-80 gap-x-5 mt-5'>
            <Slider {...settings} className='gap-x-5'>
                <div className='border border-dashed  border-black h-24  rounded-md pl-2 pt-2'>
                    <div className='text-xs font-semibold text-green-600'>EMI:</div>
                    <div className='text-xs font-semibold'>Starting From ₹ 3,494 for ICICI</div>
                    <div className='flex text-xs font-semibold gap-3 md:pt-8 pt-5 md:pl-28 pl-20 text-orange-500'>
                        <div>EMI</div>
                        <div>T&C</div>
                    </div>
                </div>
                <div className='border border-dashed border-black ml-3 h-24 rounded-md  pl-2 pt-2'>
                    <div className='text-xs font-semibold text-green-600'>EMI:</div>
                    <div className='text-xs font-semibold'>Get 5000 Instant cashback</div>
                    <div className='flex text-xs font-semibold gap-3 md:pt-8 pt-9 md:pl-28 pl-28 text-orange-500'>
                      
                        <div>T&C</div>
                    </div>
                </div>
                <div className='border border-dashed border-black ml-7 h-24 rounded-md  pl-2 pt-2'>
                    <div className='text-xs font-semibold text-green-600'>EMI:</div>
                    <div className='text-xs font-semibold'>﻿Get 5000 Instant cashback</div>
                    <div className='flex text-xs font-semibold gap-3 pt-8 pl-28 text-orange-500'>
                        <div>T&C</div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default EMI
