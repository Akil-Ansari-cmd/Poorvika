import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bottom9 from './Bottom9';
const Bottom8 = () => {
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
        arrows: false,
        autoplay: true,
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
        <>
            <div className="md:mx-20 mt-4 mx-0 bg-white">
                <div className='font-bold text-3xl pl-8 pt-5 text-orange-500'>
                    Featured Categories
                </div>
                <div className='flex pt-2 gap-3'>
                    <div><img src='https://img-prd-pim.poorvika.com/pageimg/Re-iphone-banner.webp?width=1000&height=1000&quality=75' /></div>
                    <div><img src='https://img-prd-pim.poorvika.com/pageimg/Re-Android-banner.webp?width=1000&height=1000&quality=75' /></div>
                    <div><img src='https://img-prd-pim.poorvika.com/pageimg/Re-feature-banner.webp?width=1000&height=1000&quality=75' /></div>
                </div>
            </div>
            <div className="md:mx-20 mt-3 py-5 mx-0 bg-white">
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=400,quality=75/pageimg/HEADSET-BANNER.jpg' /></div>
            </div>
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
            <div className="md:mx-20 mt-2 mx-0 bg-white pb-3">
                <div className='font-bold text-3xl pl-8 pt-5 text-orange-500'>
                    Shop Accessories By Budget
                </div>
                <div className='flex lg:px-28 md:px-20 px-0 pt-10'>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/1-web.png' /></div>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/2-web.png' /></div>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/3-web.png' /></div>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/4-web.png' /></div>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/5-web.png' /></div>
                </div>
                <div className='flex lg:px-28 md:px-20 px-0 pt-5'>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/6-web.png' /></div>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/7-web.png' /></div>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/8-web.png' /></div>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/9-web.png' /></div>
                    <div><img className='h-[100%] w-[100%]' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/10-web.png' /></div>
                </div>
            </div>
            <div className="md:mx-20 mt-4 mx-0 bg-white">
                <div className='font-bold text-3xl pl-8 pt-5 text-orange-500'>
                    Choose Your Comfort
                </div>
                <div className='flex pt-2 gap-3'>
                    <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/Re-HEADSET-wired.jpg' /></div>
                    <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/Re-HEADSET-wireless.jpg' /></div>
                    <div><img src='https://img-prd-pim.poorvika.com/pageimg/Re-true-wireless.webp?width=1000&height=1000&quality=75' /></div>
                </div>
            </div>
           
        </>
    )
}

export default Bottom8
