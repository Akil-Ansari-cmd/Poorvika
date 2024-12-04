import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { MdKeyboardArrowRight } from "react-icons/md";
import Divider from '@mui/material/Divider';
import CancelIcon from '@mui/icons-material/Cancel';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaSortAmountUp } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
function valuetext(value) {
    return `${value}°C`;
}
const Head6 = () => {
    const [value, setValue] = React.useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const product = [{
        id: 1,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Apple-iphone-16-teal-128gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 2,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-white-512gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 3,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-pink-512gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 4,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-black-512gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    },{
        id: 5,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-ultramarine-512gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 6,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-black-256gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 7,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-white-256gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 8,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-pink-256gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    },
    {
        id: 9,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-teal-256gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 10,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-ultramarine-256gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 11,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-pink-128gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 12,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-teal-128gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    },
    , {
        id: 13,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-ultramarine-128gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }, {
        id: 14,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-white-128gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    },{
        id: 15,
        src: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iphone-16-black-128gb-Front-Back-View.png",
        price: "₹ 79,900",
        des: "(Teal,128GB)",
        name: "Apple iphone 16 (Teal,128GB)",
        fav: <MdOutlineFavoriteBorder />
    }]
    return (
        <>
            <div className='flex px-10 md:gap-7 gap-0'>
                <div className='md:block hidden lg:w-[25%] w-[40%] h-fit border border-gray-400 shadow-lg'>
                    <div className='flex justify-between px-5 p-2'>
                        <div className='font-semibold text-xl'>Filters</div>
                        <div className='text-sm pt-0.5 font-semibold text-orange-400'>Clear</div>
                    </div>
                    <Divider />
                    <div className='text-sm px-5 p-2.5 font-semibold'>PRICE</div>
                    <Divider />
                    <div className='flex flex-col mt-3'>
                        <div className='border-b-2 pb-1 border-gray'>
                            <div className='flex justify-between text-sm font-semibold px-5'>
                                <div>₹ 79,900</div>
                                <div>₹ 1,09,900</div>
                            </div>
                            <div className='xl:flex hidden px-5'>
                                <Box sx={{ width: 250 }}>
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                            </div>
                            <div className='xl:hidden flex px-5'>
                                <Box sx={{ width: 200 }}>
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                            </div>
                            <div className='flex px-5 xl:gap-3 gap-1'>
                                <div className='flex gap-1 border border-black w-20 h-8'>
                                    <div className='xl:pl-2 pl-0'>₹</div>
                                    <div >79,900</div>
                                </div>
                                <div>-</div>
                                <div className='flex gap-1 border border-black w-24 h-8 pt-1'>
                                    <div className='xl:pl-2 pl-0'>₹</div>
                                    <div>1,09,900</div>
                                </div>
                                <div className='border border-black rounded-full p-1 w-10 xl:pl-2.5 pl-1.5'>Go</div>
                            </div>
                        </div>
                        <div className='grid gap-2'>
                            <div className='flex justify-between px-5 mt-1 pt-1 font-semibold text-sm'>
                                <div>STOCK STATUS</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>RATING</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>PRICE RANGE</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>DISCOUNT</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>BRANDS</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>INTERNAL STORAGE</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>FEATURES</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>PRIMARY CAMERA</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>SECONDARY CAMERA</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>PROCESSOR BRAND</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>NUMBER OF CORES</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                            <div className='flex justify-between px-5 pt-1 font-semibold text-sm'>
                                <div>SCREEN SIZE</div>
                                <div><MdKeyboardArrowRight className='h-6 w-6' /></div>
                            </div>
                            <Divider />
                        </div>
                    </div>
                    <div className='mt-5 pb-5'>
                        <div className='pt-2 text-center mx-auto bg-orange-500 text-white h-10 shadow-lg w-32 '>Show More</div>
                    </div>
                </div>
                <div className='md:w-[75%] w-[100%]'>
                    <div className='md:flex hidden border border-green-500 bg-green-100 rounded-md w-80 pl-2 gap-2 text-sm'>
                        <div className=''>CATEGORIES SLUG: apple-iphone-16-mobiles</div>
                        <div><CancelIcon style={{ fontSize: "17px" }} /></div>
                    </div>
                    <div className='md:hidden flex justify-between mt-2 bg-gray-200'>
                        <div className='flex border-r w-44'>
                            <div className='pt-1.5 ml-14'><FaSortAmountUp />
                            
                            </div>
                            <div>Sort</div>
                        </div>
                        <div className='flex text-center'>
                            <div className='pt-1 relative'><IoFilter />
                            <div className=' absolute font-semibold bg-green-600 border rounded-full w-4 h-4 right-3 text-white  top-0 text-xs'>1</div>
                            </div>
                            <div className='mr-14'>Filter</div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-5 text-sm'>
                        <div>Found - 15 of 11963</div>
                        <div className='md:flex hidden gap-4 lg:text-sm md:text-xs'>
                            <div className='w-32 h-8 pt-1 text-center bg-gray-200'>Most Relevant</div>
                            <div className='pt-1'>Top Reviews</div>
                            <div className='pt-1'>Price High to Low</div>
                            <div className='pt-1'>Price Low to High</div>
                        </div>
                    </div>
                    <div className='xl:grid xl:grid-cols-4 grid grid-cols-2  md:gap-7 gap-2 mt-5'>
                        {
                            product.map((items) =>
                                <div key={items.id} className='border border-gray-400 rounded-lg h-80 '>
                                    <div className='pt-6 relative'><img className='h-36 mx-auto' src={items.src} />
                                        <div className='absolute top-4 right-3 text-gray-500'>{items.fav}</div>
                                    </div>
                                    <div className='truncate pt-8 px-2 font-semibold'>{items.name}</div>
                                    <div className='px-3 pt-2 text-sm text-slate-400'>{items.des}</div>
                                    <div className='px-4 pt-4 text-green-500 font-semibold'>{items.price}</div>
                                </div>
                            )
                        }
                    </div>
                  
                </div>
            </div>
        </>
    )
}

export default Head6
