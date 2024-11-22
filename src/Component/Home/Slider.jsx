import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; // For arrow icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";



// Custom Left Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="bg-white absolute lg:top-[35%] md:top-[25%] top-[15%] rounded-md z-10 pt-1 h-20 w-8 pl-1.5 "  onClick={onClick}  >
    <IoIosArrowDropleftCircle  className="h-5 w-5"/>
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const {onClick } = props;
  return (
    <button className="bg-white absolute lg:top-[35%] md:top-[25%] top-[15%]  rounded-md right-0 h-20 w-8 pl-1.5 pt-1"  onClick={onClick}  >
    <IoIosArrowDroprightCircle className="h-5 w-5"/>
    </button>
  );
}



function AutoPlaySlider() {
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 3000, // Autoplay speed set to 3 seconds (3000 ms)
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  const image = ["https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=400,quality=75/pageimg/one-plus-nord-web-banner-2.jpg", "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=400,quality=75/pageimg/Nothing-Mobile-Web-banner.jpg", "https://img-prd-pim.poorvika.com/pageimg/Laptops-Available-at-Poddorvika.webp?width=1900&height=400&quality=75","https://img-prd-pim.poorvika.com/pageimg/Smart-tv-available-at-poorvika-web-banner-1900-400.webp?width=1900&height=400&quality=75","https://img-prd-pim.poorvika.com/pageimg/Horizon-banne-Web.webp?width=1900&height=400&quality=75","https://img-prd-pim.poorvika.com/pageimg/iphone-13-15-16-series-web.webp?width=1900&height=400&quality=75"]

  return (
    <div>
      <Slider {...settings}>
       
          
        {
          image.map((items,id) =>
            <div key={id} className="bg-white">
              <img className="md:h-auto h-32 mb-2" src={items}
                alt="Error"
              />
            </div>
          )
        }

       
      </Slider>
    </div>
  );
}

export default AutoPlaySlider;