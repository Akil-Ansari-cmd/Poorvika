import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute top-[30%] z-40 left-0 rounded-r-lg pt-1 lg:h-20 md:h-16 h-12 w-8 pl-1.5 " onClick={onClick}  >
            <IoIosArrowBack className="h-5 w-5" />
        </button>
    );
}

// Custom Right Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute top-[30%]  rounded-l-lg right-0 lg:h-20 md:h-16 h-12 w-8 pl-1.5 pt-1" onClick={onClick}  >
            <IoIosArrowForward className="h-5 w-5" />
        </button>
    );
}
// import { useNavigate } from 'react-router-dom'
function Bottom5() {
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
        slidesToShow: 9,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        autoplay: true,
        nextArrow: <NextArrow />, // Custom next arrow
        prevArrow: <PrevArrow />, // Custom previous arrow
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 9,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 4,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 4,
                    initialSlide: 2,
                    dots: true
                }
            },

        ]
    };


    return (
        <div className="md:mx-20 mt-2 mx-0 bg-white">
            <div className='font-bold text-3xl text-orange-500 pl-5 pt-3'>Shop by Mobiles Brands</div>
            <div className="slider-container bg-white mt-3 z-40">
                <Slider {...settings}>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/Apple.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/Samsung.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/oneplus.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/realme.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/vivo.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/oppo.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/mi-01.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/Itel.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/Karbonn.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/Lava.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/Tecno-01.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/nokia.png' /></div>
                        </div>
                    </div>
                    <div
                        className='flex mt-3 justify-center items-center cursor-pointer'>
                        <div className=''>
                            <div><img className='' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=170,height=170,quality=75/pageimg/xiaomi.png' /></div>
                        </div>
                    </div>
                    
                </Slider>
            </div>

        </div>
    )
}

export default Bottom5
