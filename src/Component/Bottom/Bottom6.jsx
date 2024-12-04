import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Bottom7 from './Bottom7';
import Bottom8 from './Bottom8';
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute -top-[15%] border right-12  rounded-md pt-1 h-8 w-8 pl-1.5 " onClick={onClick}  >
            <IoIosArrowBack className="h-5 w-5 text-gray-400" />
        </button>
    );
}

// Custom Right Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute -top-[15%] border  rounded-md right-2 h-8 w-8 pl-1.5 pt-1" onClick={onClick}  >
            <IoIosArrowForward className="h-5 w-5 text-gray-400" />
        </button>
    );
}

const Bottom6 = () => {
    const product = [{
        id: 1,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Apple-iphone-16-teal-128gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)"
      }, {
        id: 2,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Samsung-galaxy-s24-5g-marble-grey-256gb-8gb-ram-Front-Back-View.png",
        price: "₹ 67,900",
        des: "(Marble Grey, 8GB-256B)",
        name: "Samsung Galaxy S24 5G(Marble..."
      }, {
        id: 3,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Oneplus-nord-ce4-5g-cleadon-marble-256gb-8gb-ram-Front-Back-View.png",
        price: "₹ 26,900",
        des: "(Cleadon Grey, 8GB-256B)",
        name: "One Plus Nord CE4 5G (Cleadon M..."
      }, {
        id: 4,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/nothing-phone-2a-plus-5g-Black-256gb-8gb-ram-front-back-view.png",
        price: "₹ 25,900",
        des: "(2a) Plus 5g",
        name: "Nothing Phone (2a) Plus 5G (Bla.."
      }, {
        id: 5,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/vivo-v40-5g-Purple-256gb-8gb-ram-front-back-view-01.png",
        price: "₹ 36,900",
        des: "(Lotus Purple, 8GB-256B)",
        name: "Vivo V40 5G (Lotus Purple,8GB-256GB)"
      }, {
        id: 6,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Oppo-reno-12-pro-5g-space-brown-256gb-12gb-ram-Front-Back-View.png",
        price: "₹ 36,999",
        des: "(Space Brown, 12GB-256B)",
        name: "Oppo Reno 12 pro 5G(Space Bro..)"
      }, {
        id: 7,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Realme-13-pro-5g-monet-purple-512gb-12gb-ram-Front-Back-View.png",
        price: "₹ 31,900",
        des: "(Monet Purpe, 12GB-256B)",
        name: "Realme 13 pro 5G(Teal,128GB)"
      }, {
        id: 8,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/redmi-note-13-pro-plus-5g-fusion-white-12gb-512gb-ram-front-back-view.png",
        price: "₹ 31,900",
        des: "(Fusion White, 12GB-256B)",
        name: "Fusion 13 pro plus 5G(Fusion...)"
      }, {
        id: 9,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/tecno-spark-20-pro-5g-neon-BLack-256gb-8gb-ram-front-view-01.png",
        price: "₹ 12,900",
        des: "(Startail Black, 12GB-256B)",
        name: "Techno spark 20 pro 5G (Stattail B...)"
      },
      {
        id: 10,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/apple-iphone-16-plus-pink-128gb-front-back-view.png",
        price: "₹ 89,900",
        des: "(Pink,128GB)",
        name: "Apple iphone 16 plus (Pink,128GB)"
      }
      ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />, // Custom next arrow
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                }
            },

        ]
    };
    return (
        <>
        <div className="md:mx-20 mt-2 mx-0 bg-white">
            <div>
                <img src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=400,quality=75/pageimg/5G-MOBILES-BANNER.jpg' />
            </div>
            <div className='h-fit'>
                <div className='flex  justify-between border p-1 bg-slate-100 mx-1 mt-3 px-14 pt-2'>
                    <div className=' font-bold text-2xl text-orange-500'>5G Smartphones</div>
                    <div className='flex gap-3 pt-1 '>
                        <div className='text-gray-400'>See All</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div className="slider-container bg-white mt-3">
                        <Slider {...settings}>
                            {
                                product.map((items) =>
                                    <div key={items.id} className=' border-r my-2'>
                                        <div className='mx-10 mt-5'>
                                            <img className='h-36' src={items.src} />
                                        </div>
                                        <div className='mt-5 text-sm ml-3'>
                                            <div className='font-semibold'>
                                                {items.name}
                                            </div>
                                            <div className='mt-2 font-semibold text-gray-400'>{items.des}</div>
                                            <div className='mt-3 pb-5 font-semibold text-orange-500'>{items.price}</div>
                                        </div>
                                    </div>
                                )
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Bottom7/>
        </div>
        <div>
            <Bottom8/>
        </div>
        </>
    )
}

export default Bottom6
