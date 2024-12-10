import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; // For arrow icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Button } from "@mui/material";



// Custom Left Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="bg-white absolute lg:top-[0%] md:top-[25%] top-[15%] rounded-md z-10 pt-1 h-28 -left-3 w-8 pl-1.5 " onClick={onClick}  >
      <IoIosArrowDropleftCircle className="h-5 w-5" />
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="bg-white absolute lg:top-[0%] md:top-[25%] top-[15%]  rounded-md -right-3 h-28 w-8 pl-1.5 pt-1" onClick={onClick}  >
      <IoIosArrowDroprightCircle className="h-5 w-5" />
    </button>
  );
}



function Slide({ image, setImages, images }) {



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
            slidesToScroll: 5,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 2
          }
        },

      ]
    };
  const handleAdd = () => {
    const inx = images?.index + 1
    image?.length > inx && setImages({ ...image[inx], index: inx })
  }
  return (
  <>
    <div className="mt-5">
      <Slider {...settings}>
        {
          image.map((items, ind) =>
            <div key={items} onClick={() => setImages({ ...items, index: ind })} className={`bg-white flex py-6 h-28 w-28 border ${images?.index === ind ? "border-orange-500" : "border-slate-300"}  gap-4  `}>
              <img className="" src={items.src}
                alt="Error"
              />
            </div>
          )
        }


      </Slider>
    </div>
  </>
  )
  ;
}

export default Slide;