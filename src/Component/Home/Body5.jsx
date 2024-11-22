import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-slate-50 absolute top-[13%] rounded-l-lg -left-5 h-10 w-8 pt-1 lg:block hidden" onClick={onClick}  >
            <IoIosArrowDropleftCircle className="h-5 w-5" />
        </button>
    );
}

// Custom Right Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-slate-50 absolute top-[13%] rounded-l-lg -right-5 h-10 w-8 pl-1.5 pt-1 lg:block hidden" onClick={onClick}  >
            <IoIosArrowDroprightCircle className="h-5 w-5" />
        </button>
    );
}
const Body5 = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 14,
        slidesToScroll: 14,
        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />, // Custom next arrow
        prevArrow: <PrevArrow />, // Custom previous arrow
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 14,
                    slidesToScroll: 14,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 10,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 2,
                    infinite: true,
                }
            },

        ]
    };
    return (
        <div className='slider-container h-28 mt-3 pt-5 px-5 bg-[#FFF1E5]'>
            <Slider {...settings}>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/iball-logo.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-26.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0019-Group-27.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0018-Group-28.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0017-Group-29.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/panasonic-logo.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0015-Group-31.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0014-Group-32.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0013-Group-33.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/symponi.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0011-Group-35.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0010-Group-36.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0009-Group-37.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0007-Group-39.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/iball-logo.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-26.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0019-Group-27.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0018-Group-28.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0017-Group-29.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/panasonic-logo.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0015-Group-31.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0014-Group-32.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0013-Group-33.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/symponi.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0011-Group-35.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0010-Group-36.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0009-Group-37.png' /></div>
                <div><img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0000-Group-27-0007-Group-39.png' /></div>
            </Slider>
        </div>
    )
}

export default Body5
