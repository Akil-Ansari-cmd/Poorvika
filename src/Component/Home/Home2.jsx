import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="bg-white absolute top-[35%] border z-40 rounded-r-lg pt-1 h-20 w-8 pl-1.5 "  onClick={onClick}  >
    <IoIosArrowBack className="h-5 w-5"/>
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const {onClick } = props;
  return (
    <button className="bg-white absolute top-[35%] border  rounded-l-lg right-0 h-20 w-8 pl-1.5 pt-1"  onClick={onClick}  >
    <IoIosArrowForward className="h-5 w-5"/>
    </button>
  );
}
// import { useNavigate } from 'react-router-dom'
function Home2() {
  const Navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
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
    <div>
    <div className="slider-container bg-white mt-3 z-40">
      <Slider {...settings}>
        <div onClick={() => Navigate("/Bottom")}
          className='flex mt-3 pt-8 ml-8 justify-center items-center w-[10%] cursor-pointer h-72'>
          <div className='flex flex-col gap-2'>
            <div><img className='h-40' src='https://img-prd-pim.poorvika.com/pageimg/group-125-65dae67371963.webp?width=150&height=150&quality=75' /></div>
            <div className='flex flex-col  font-bold text-xl pl-5 '><div className='ml-2'>Mobiles &</div>
            <div> Accessories</div>
            </div>
          </div>
        </div>
        <div
          className='flex mt-3 pt-8 ml-4 justify-center items-center w-[10%] cursor-pointer'>
          <div className='flex flex-col gap-2'>
            <div><img className='h-40' src='https://img-prd-pim.poorvika.com/pageimg/group-126-65dae67439a18.webp?width=150&height=150&quality=75' /></div>
            <div className='flex font-bold text-xl'>Laptops & Tablets</div>
          </div>
        </div>
        <div
          className='flex mt-3 pt-8 ml-4 justify-center items-center w-[10%] cursor-pointer'>
          <div className='flex flex-col gap-2'>
            <div><img className='h-40' src='https://img-prd-pim.poorvika.com/pageimg/group-127-65dae674a53d3.webp?width=150&height=150&quality=75' /></div>
            <div className='flex  font-bold text-xl ml-5'>Tv & Audio</div>
          </div>
        </div>
        <div
          className='flex mt-3 pt-8 ml-4 justify-center items-center w-[10%] cursor-pointer'>
          <div className='flex flex-col gap-2'>
            <div><img className='h-40' src='https://img-prd-pim.poorvika.com/pageimg/group-128-65dae674ee607.webp?width=150&height=150&quality=75' /></div>
            <div className='flex font-bold text-xl'>Kitchen Appliances</div>
          </div>
        </div>
        <div
          className='flex mt-3 pt-8 ml-4 justify-center items-center w-[10%] cursor-pointer'>
          <div className='flex flex-col gap-2'>
            <div><img className='h-40' src='https://img-prd-pim.poorvika.com/pageimg/group-129-1-65dae6756bc34.webp?width=150&height=150&quality=75' /></div>
            <div className='flex font-bold text-xl'>Home Appliances</div>
          </div>
        </div>
        <div
          className='flex mt-3 pt-8 ml-4 justify-center items-center w-[10%] cursor-pointer'>
          <div className='flex flex-col gap-2'>
            <div><img className='h-40' src='https://img-prd-pim.poorvika.com/pageimg/group-130-65dae675cc510.webp?width=150&height=150&quality=75' /></div>
            <div className='flex font-bold text-xl'>Smart Technology</div>
          </div>
        </div>
        <div
          className='flex mt-3 pt-8 justify-center items-center w-[10%] cursor-pointer'>
          <div className='flex flex-col gap-2'>
            <div><img className='h-40' src='https://img-prd-pim.poorvika.com/pageimg/Personal-care-category-icon.webp?width=150&height=150&quality=75' /></div>
            <div className='flex font-bold text-xl ml-5'>Personal Care</div>
          </div>
        </div>
      </Slider>
    </div>

    </div>
  )
}

export default Home2
