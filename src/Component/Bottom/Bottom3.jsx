import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute top-[35%] border z-40 -left-5 rounded-r-lg pt-1 lg:h-20 md:h-16 h-12 w-8 pl-1.5 " onClick={onClick}  >
            <IoIosArrowBack className="h-5 w-5" />
        </button>
    );
}

// Custom Right Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute top-[35%] border  rounded-l-lg -right-5 lg:h-20 md:h-16 h-12 w-8 pl-1.5 pt-1" onClick={onClick}  >
            <IoIosArrowForward className="h-5 w-5" />
        </button>
    );
}
// import { useNavigate } from 'react-router-dom'
function Bottom3() {
    // const navigate = useNavigate();
    var settings = {
        dots: false,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "",
                    borderRadius: "10px",
                    padding: "35px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        arrows: true,
        autoplay:true,
        nextArrow: <NextArrow />, // Custom next arrow
        prevArrow: <PrevArrow />, // Custom previous arrow
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    initialSlide: 2,
                    dots: true
                }
            },

        ]
    };


    return (
        <div>
            <div className="slider-container bg-white mt-3 z-40">
                <Slider {...settings}>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/Cables-and-connectors-001.webp?width=260&height=235&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/temper-glass-phone-01.webp?width=260&height=235&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/power-bank-001.webp?width=260&height=235&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/charger-phones-01.webp?width=260&height=235&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/storage-phones-01.webp?width=260&height=235&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/adapters-phones-01.webp?width=260&height=235&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/mobiles-001.webp?width=260&height=235&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/case-and-cover-001.webp?width=260&height=235&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/phone-holders-01.webp?width=260&height=235&quality=75' /></div>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Bottom3