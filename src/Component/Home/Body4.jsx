import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="bg-white absolute -top-[14%] border right-10  rounded-md pt-1 h-8 w-8 pl-1.5 "  onClick={onClick}  >
    <IoIosArrowBack className="h-5 w-5 text-gray-400"/>
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const {onClick } = props;
  return (
    <button className="bg-white absolute -top-[14%] border  rounded-md right-0 h-8 w-8 pl-1.5 pt-1"  onClick={onClick}  >
    <IoIosArrowForward className="h-5 w-5 text-gray-400"/>
    </button>
  );
}
const Body4 = () => {
  const product = [{
    id: 1,
    src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1600,height=1600,quality=75/product/Lenovo-ideapad-slim-3i-intel-core-i7-13th-gen-windows-11-home-laptop-83em009yin-arctic-grey-16gb-512gb-Front-View-Model.png",
    price: "₹ 79,900",
    des: "(Teal,128GB)",
    name: "Apple iphone 16 (Teal,128GB)"
  }, {
    id: 2,
    src: "https://img-prd-pim.poorvika.com/product/Hp-intel-core-i5-12th-gen-windows-11-home-laptop-15-fd0111tu-natural-silver-16gb-512gb-Front-View.png",
    price: "₹ 67,900",
    des: "(Marble Grey, 8GB-256B)",
    name: "Samsung Galaxy S24 5G(Marble..."
  }, {
    id: 3,
    src: "https://img-prd-pim.poorvika.com/product/Asus-tuf-gaming-a15-amd-ryzen-7-7435hs-windows-11-home-laptop-fa566ncr-hn054ws-graphite-black-16gb-512gb-Front-View.png",
    price: "₹ 26,900",
    des: "(Cleadon Grey, 8GB-256B)",
    name: "One Plus Nord CE4 5G (Cleadon M..."
  }, {
    id: 4,
    src: "https://img-prd-pim.poorvika.com/product/Dell-inspiron-7440-intel-core-i5-13th-gen-windows-11-home-2-in-1-laptop-oic7440134501rinu1-ice-blue-16gb-512gb-Flip-View-Model.png",
    price: "₹ 25,900",
    des: "(2a) Plus 5g",
    name: "Nothing Phone (2a) Plus 5G (Bla.."
  }, {
    id: 5,
    src: "https://img-prd-pim.poorvika.com/product/HP-victus-gaming-intel-core-i5-12th-gen-windows-11-home-laptop-15-fa0333tx-performance-blue-16gb-512gb-Front-View.png",
    price: "₹ 36,900",
    des: "(Lotus Purple, 8GB-256B)",
    name: "Vivo V40 5G (Lotus Purple,8GB-256GB)"
  }, {
    id: 6,
    src: "https://img-prd-pim.poorvika.com/product/HP-pavilion-intel-core-ultra-7-windows-11-home-laptop-16-af0028tu-natural-silver-16gb-512gb-Front-View.png",
    price: "₹ 36,999",
    des: "(Space Brown, 12GB-256B)",
    name: "Oppo Reno 12 pro 5G(Space Bro..)"
  }, {
    id: 7,
    src: "https://img-prd-pim.poorvika.com/product/Asus-vivobook-go-15-intel-core-i3-12th-gen-windows-11-home-laptop-e1504ga-nj321ws-cool-silver-8gb-ram-512gb-ssd-Front-View.png",
    price: "₹ 31,900",
    des: "(Monet Purpe, 12GB-256B)",
    name: "Realme 13 pro 5G(Teal,128GB)"
  }, {
    id: 8,
    src: "https://img-prd-pim.poorvika.com/product/vLenovo-ideapad-3-intel-core-i3-12th-gen-windows-11-home-laptop-82rk00vwin-arctic-grey-8gb-ram-512gb-ssd-Top-View.png",
    price: "₹ 31,900",
    des: "(Fusion White, 12GB-256B)",
    name: "Fusion 13 pro plus 5G(Fusion...)"
  }, {
    id: 9,
    src: "https://img-prd-pim.poorvika.com/product/asus-rog-strix-g16-intel-core-i7-13th-gen-windows-11-home-laptop-g614ju-n3200ws-eclipse-gray-16gb-1tb-front-back.png",
    price: "₹ 12,900",
    des: "(Startail Black, 12GB-256B)",
    name: "Techno spark 20 pro 5G (Stattail B...)"
  },
  {
    id: 10,
    src: "https://img-prd-pim.poorvika.com/product/hp-victus-gaming-amd-ryzen-r5-5600h-windows-11-home-laptop-15-fb0106ax-performance-blue-16gb-512gb-front-view.png",
    price: "₹ 89,900",
    des: "(Pink,128GB)",
    name: "Apple iphone 16 plus (Pink,128GB)"
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
        <div className=' font-bold text-xl'>Laptops</div>
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
                <div className='ml-10 mt-5'>
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
  )
}

export default Body4