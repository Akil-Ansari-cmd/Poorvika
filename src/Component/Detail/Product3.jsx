import React from 'react'

const Product3 = () => {
    return (
        <div className='mx-4'>
            <div className='mt-3 font-semibold text-xl h-12 bg-gray-200 pt-2 pl-2'>Compare with similar items</div>
            <div className='flex border mt-4 '>
                <div className="pt-40 font-semibold lg:w-[12%] md:w-[20%] w-[25%]">Compare features</div>
                <div className='flex overflow-hidden overflow-x-scroll'>
                    <div className='flex flex-col ml-10 border-l border-r lg:w-[22%] md:w-[33%] w-[50%]'>
                        <div className='pl-5  pt-4'><img className='h-52 pl-3' src='https://img-prd-pim.poorvika.com/prodvarval/Apple-iphone-16-Teal-128gb-Front-Back-View-Thumbnail.png' /></div>
                        <div className='font-semibold text-sm pl-2'>You are viewing :</div>
                        <div className='text-sm pl-2 truncate'>Apple iPhone 16 ( Teal, 128GB )</div>
                        <div className='font-semibold text-sm pl-2'>79,900</div>
                    </div>
                    <div className='flex flex-col ml-5 lg:w-[22%] md:w-[33%] w-[50%]'>
                        <div className=' pl-8 pt-4'><img className='h-52' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Samsung-galaxy-s24-5g-onyx-black-256gb-8gb-ram-Front-Back-View.png' /></div>
                        <div className='font-semibold text-sm pl-2'>You are viewing :</div>
                        <div className='text-sm pl-2 truncate'>Apple iPhone 16 ( Teal, 128GB )</div>
                        <div className='font-semibold text-sm pl-2'>79,900</div>
                    </div>
                    <div className='flex flex-col ml-5 border-l border-r lg:w-[22%] md:w-[33%] w-[50%]'>
                        <div className=' pl-8 pt-4'><img className='h-52' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Apple-iphone-16-black-256gb-Front-Back-View.png' /></div>
                        <div className='font-semibold text-sm pl-2'>You are viewing :</div>
                        <div className='text-sm pl-2 truncate'>Apple iPhone 16 ( Teal, 128GB )</div>
                        <div className='font-semibold text-sm pl-2'>79,900</div>
                    </div>
                    <div className='flex flex-col ml-5 lg:w-[22%] md:w-[33%] w-[50%]'>
                        <div className=' pl-8 pt-4'><img className='h-52' src='https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Apple-iphone-16-plus-black-128gb-Front-Back-View-Image.png' /></div>
                        <div className='font-semibold text-sm pl-2'>You are viewing :</div>
                        <div className='text-sm pl-2 truncate'>Apple iPhone 16 ( Teal, 128GB )</div>
                        <div className='font-semibold text-sm pl-2'>79,900</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product3
