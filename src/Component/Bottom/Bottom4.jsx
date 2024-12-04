import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute top-[35%] border z-40 left-0 rounded-r-lg pt-1 lg:h-20 md:h-16 h-12 w-8 pl-1.5 " onClick={onClick}  >
            <IoIosArrowBack className="h-5 w-5" />
        </button>
    );
}

// Custom Right Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute top-[35%] border  rounded-l-lg right-0 lg:h-20 md:h-16 h-12 w-8 pl-1.5 pt-1" onClick={onClick}  >
            <IoIosArrowForward className="h-5 w-5" />
        </button>
    );
}
// import { useNavigate } from 'react-router-dom'
function Bottom4() {
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
        autoplay: true,
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
        <div className="md:mx-20 mt-2 mx-0 bg-white">
            <div className='font-bold text-3xl text-orange-500 pl-5 pt-3'>Best Selling Smartphones</div>
            <div className="slider-container bg-white mt-3 z-40">
                <Slider {...settings}>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/11-Redmi-Note-13-5G-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/12-Oppo-A3-Pro-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/13-Galaxy-A15-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/14-Vivo-Y58-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/15-Tecno-Pova-6-Pro-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/16-Vivo-Y-200e-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/1-Realme-C65-5G-Series-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/2-Realme-12x-5G-Series-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/3-Redmi-13C-5G-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/4-Oppo-A3x-5-G-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/5-Galaxy-F15-5G-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/pageimg/7-Redmi-13-5G-2024.webp?width=365&height=420&quality=75' /></div>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Bottom4
