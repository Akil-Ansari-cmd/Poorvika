import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; // For arrow icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Bottom2 from "./Bottom2";



// Custom Left Arrow
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute lg:top-[35%] md:top-[25%] top-[15%] rounded-md z-10 pt-1 h-20 w-8 pl-1.5 " onClick={onClick}  >
            <IoIosArrowDropleftCircle className="h-5 w-5" />
        </button>
    );
}

// Custom Right Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute lg:top-[35%] md:top-[25%] top-[15%]  rounded-md right-0 h-20 w-8 pl-1.5 pt-1" onClick={onClick}  >
            <IoIosArrowDroprightCircle className="h-5 w-5" />
        </button>
    );
}



function Bottom1() {
    const settings = {
        dots: true,
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
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 3000, // Autoplay speed set to 3 seconds (3000 ms)
        nextArrow: <NextArrow />, // Custom next arrow
        prevArrow: <PrevArrow />, // Custom previous arrow
    };

    const image = ["https://img-prd-pim.poorvika.com/pageimg/samsung-z-fold-6-1900x600-67322dab1e7e769.webp?width=1900&height=600&quality=75", "https://img-prd-pim.poorvika.com/pageimg/redmi-14-pro-plus-5g-1900x600-6749a3cq159c21.webp?width=1900&height=600&quality=75", "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/pageimg/power-adapters-web.jpg", "https://img-prd-pim.poorvika.com/pageimg/apple-iphone-16-series-web-b.webp?width=1900&height=600&quality=75", "https://img-prd-pim.poorvika.com/pageimg/samsung-z-flip-6-1900x60220-673dab1e7b490.webp?width=1900&height=600&quality=75", "https://img-prd-pim.poorvika.com/pageimg/Oppo-FindX8Series.webp?width=1900&height=600&quality=75"]

    return (
        <div className="md:mx-20 mx-0 bg-white">
            <div>
                <Slider {...settings}>


                    {
                        image.map((items, id) =>
                            <div key={id} className="">
                                <img className="" src={items}
                                    alt="Error"
                                />
                            </div>
                        )
                    }


                </Slider>
            </div>
            <div>
                <Bottom2 />
            </div>
        </div>
    );
}

export default Bottom1;
