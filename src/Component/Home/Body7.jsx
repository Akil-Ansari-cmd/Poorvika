import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute -top-[14%] border right-10  rounded-md pt-1 h-8 w-8 pl-1.5 " onClick={onClick}  >
            <IoIosArrowBack className="h-5 w-5 text-gray-400" />
        </button>
    );
}

// Custom Right Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute -top-[14%] border  rounded-md right-0 h-8 w-8 pl-1.5 pt-1" onClick={onClick}  >
            <IoIosArrowForward className="h-5 w-5 text-gray-400" />
        </button>
    );
}
const Body7 = () => {
    const product = [{
        id: 1,
        src: "https://img-prd-pim.poorvika.com/product/xiaomi-hd-ready-led-smart-tv-a-series-2024-32-inch-front-side-view.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        inch: "( 32 inch )"
    }, {
        id: 2,
        src: "https://img-prd-pim.poorvika.com/product/Haier-full-hd-led-smart-tv-le43a900g-n-43-inch-Front-View.png",
        price: "₹ 67,900",
        des: "(Marble Grey, 8GB-256B)",
        name: "Samsung S24 Plus 5G(Marble...",
        inch: "( 32 inch )"
    }, {
        id: 3,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=242,height=242,quality=75/product/haier-hd-ready-smart-led-tv-le32a7n-32-inch-front-view.png",
        price: "₹ 26,900",
        des: "(Cleadon Grey, 8GB-256B)",
        name: "One Plus Nord (Cleadon M...",
        inch: "( 32 inch )"
    }, {
        id: 4,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=242,height=242,quality=75/product/samsung-full-hd-led-smart-tv-t5410-43-inch-front-view.png",
        price: "₹ 25,900",
        des: "(2a) Plus 5g",
        name: "Nothing Phone (2a) (Bla..",
        inch: "( 32 inch )"
    }, {
        id: 5,
        src: "https://img-prd-pim.poorvika.com/product/xiaomi-led-smart-tv-x-series-2024-4k-ultra-hd-55-inch-front-view.png",
        price: "₹ 36,900",
        des: "(Lotus Purple, 8GB-256B)",
        name: "Vivo V40 5G (Purple,8GB-256GB)",
        inch: "( 32 inch )"
    }, {
        id: 6,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=242,height=242,quality=75/product/zebronics-hd-ready-smart-led-tv-32p1-32-inch-front-view.png",
        price: "₹ 36,999",
        des: "(Space Brown, 12GB-256B)",
        name: "Oppo Reno 12 5G(Space Bro..)",
        inch: "( 32 inch )"
    }, {
        id: 7,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=242,height=242,quality=75/product/sony-bravia-2-4k-ultra-hd-smart-lcd-google-tv-s25-55-inch-side-view-min.png",
        price: "₹ 31,900",
        des: "(Monet Purpe, 12GB-256B)",
        name: "Realme 13 pro 5G(Teal,128GB)",
        inch: "( 32 inch )"
    }, {
        id: 8,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=242,height=242,quality=75/product/LG-4k-ultra-hd-smart-led-tv-uq73-43-inch-Front-View.png",
        price: "₹ 31,900",
        des: "(Fusion White, 12GB-256B)",
        name: "Fusion 13 5G(Fusion...)",
        inch: "( 32 inch )"
    }, {
        id: 9,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=242,height=242,quality=75/product/lg-4k-ultra-hd-smart-led-tv-ut8040-55-inch-front-vie-min.png",
        price: "₹ 12,900",
        des: "(Startail Black, 12GB-256B)",
        name: "Techno spark 5G (Stattail B...)",
        inch: "( 32 inch )"
    },
    {
        id: 10,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=242,height=242,quality=75/product/samsung-4k-ultra-hd-led-smart-tv-du7000-55-inch-front-view.png",
        price: "₹ 89,900",
        des: "(Pink,128GB)",
        name: "Iphone 16 plus (Pink,128GB)",
        inch: "( 32 inch )"
    }
    ]
    var settings = {
        dots: false,
        infinite: false,
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
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
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
        <div className='h-full'>
            <div className='flex  justify-between  p-1 mx-10 pt-2'>
                <div className=' font-bold text-xl'>Tv & Audio</div>
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
                                    <div className='mt-4 gap-5'>
                                        <div className='font-semibold text-sm ml-8'>
                                            {items.name}
                                        </div>
                                        <div className='text-sm ml-8'>{items.inch}</div>
                                    </div>
                                    <div className='ml-10 mt-2'>
                                        <img className='h-36' src={items.src} />
                                    </div>
                                    <div className='text-sm ml-3'>
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
    )
}

export default Body7