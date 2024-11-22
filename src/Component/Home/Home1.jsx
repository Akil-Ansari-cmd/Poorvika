import React from 'react'
import AutoPlaySlider from './Slider'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Home1 = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [yes, setYes] = React.useState(false);
    const handleYes = () => setYes(true);
    const handleNo = () => setYes(false);
    return (
        <>
        <div className='xl:flex hidden items-center text-base font-semibold gap-5 px-24 h-10 sticky top-11 rounded-b-md z-40 bg-white'>
                <div className={`hover:cursor-pointer relative  text-black hover:text-orange-500  ${open ? "text-orange-500" : " "}`} onMouseEnter={handleOpen} onMouseLeave={handleClose}>Mobile & Accessories
                </div>
                <div className={`hover:cursor-pointer text-black hover:text-orange-500  ${yes ? "text-orange-500" : " "}`} onMouseEnter={handleYes} onMouseLeave={handleNo}>Computer & Tablets
                </div>
                <div>TV & Audio</div>
                <div>Kitchen Appliances</div>
                <div>Home Appliances</div>
                <div>Smart Technology</div>
                <div>Personal & Health Care</div>
            </div>
        <div>
            
            <div>
                {
                    open && <div className='fixed z-50 h-[100vh] w-[90vw] ml-28 top-20' onMouseLeave={handleClose}>
                        <div className='flex' onMouseEnter={handleOpen}>
                            <div className='w-[35%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-semibold text-sm'>Mobiles<ArrowRightIcon style={{ color: "gray" }} /></div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='pt-2'>Realme</div>
                                        <div className='pt-2'>Samsung</div>
                                        <div className='pt-2'>Infinix</div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='pt-2'>Vivo</div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='pt-2'>realme Narzo 10</div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>iphone SE</div>
                                        <div className='pt-2'>Motorola razr</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[40%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-semibold text-sm'>Mobile Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='pt-2'>Realme</div>
                                        <div className='pt-2'>Samsung</div>
                                        <div className='pt-2'>Infinix</div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Vivo<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Realme Narxo 10<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>iphone SE</div>
                                        <div className='pt-2'>Motorola razr</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[35%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-semibold text-sm'>Laptops<ArrowRightIcon style={{ color: "gray" }} /></div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Desktop PCs<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Gaming & Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Computer Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Vivo<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Realme Narxo 10<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[40%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-normal text-sm text-gray-400'>Televisions</div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Speakers<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Gaming & Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Computer Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Vivo<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Realme Narxo 10<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>iphone SE</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[30%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-semibold text-sm'>Featured<ArrowRightIcon style={{ color: "gray" }} /></div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='pt-2'>Realme</div>
                                        <div className='pt-2'>Samsung</div>
                                        <div className='pt-2'>Infinix</div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='pt-2'>Vivo</div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='pt-2'>realme Narzo 10</div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>iphone SE</div>
                                        <div className='pt-2'>Motorola razr</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className='w-[50%] h-full' src='https://img-prd-pim.poorvika.com/navigation/Vivo-22V40-Pro.jpg'/>
                            </div>
                        </div>
                    </div>
                }
                {
                yes && <div className='fixed  z-50 h-[100vh] w-[90vw] ml-28 top-20' onMouseLeave={handleNo}>
                        <div className='flex' onMouseEnter={handleYes}>
                            <div className='w-[35%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-semibold text-sm'>Tablets<ArrowRightIcon style={{ color: "gray" }} /></div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='pt-2'>Realme</div>
                                        <div className='pt-2'>Samsung</div>
                                        <div className='pt-2'>Infinix</div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='pt-2'>Vivo</div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='pt-2'>realme Narzo 10</div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>iphone SE</div>
                                        <div className='pt-2'>Motorola razr</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[40%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-semibold text-sm'>Mobile Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='pt-2'>Realme</div>
                                        <div className='pt-2'>Samsung</div>
                                        <div className='pt-2'>Infinix</div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Vivo<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Realme Narxo 10<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>iphone SE</div>
                                        <div className='pt-2'>Motorola razr</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[35%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-semibold text-sm'>Laptops<ArrowRightIcon style={{ color: "gray" }} /></div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Desktop PCs<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Gaming & Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Computer Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Vivo<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Realme Narxo 10<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[40%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-normal text-sm text-gray-400'>Televisions</div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Speakers<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Gaming & Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Computer Accessories<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Vivo<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='font-semibold text-sm pt-2 text-black'>Realme Narxo 10<ArrowRightIcon style={{ color: "gray" }} /></div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>iphone SE</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[30%] bg-white'>
                                <div className='flex flex-col pt-3 pl-5'>
                                    <div className='font-semibold text-sm'>Featured<ArrowRightIcon style={{ color: "gray" }} /></div>
                                    <div className='font-normal text-sm text-slate-400 pt-2'>
                                        <div>Mi</div>
                                        <div className='pt-2'>Realme</div>
                                        <div className='pt-2'>Samsung</div>
                                        <div className='pt-2'>Infinix</div>
                                        <div className='pt-2'>OPPO</div>
                                        <div className='pt-2'>Apple</div>
                                        <div className='pt-2'>Vivo</div>
                                        <div className='pt-2'>Honor</div>
                                        <div className='pt-2'>Asus</div>
                                        <div className='pt-2'>Poco X2</div>
                                        <div className='pt-2'>realme Narzo 10</div>
                                        <div className='pt-2'>Infinix Hot 9</div>
                                        <div className='pt-2'>IQOO 3</div>
                                        <div className='pt-2'>iphone SE</div>
                                        <div className='pt-2'>Motorola razr</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className='w-[50%] h-full' src='https://img-prd-pim.poorvika.com/navigation/Vivo-22V40-Pro.jpg'/>
                            </div>
                        </div>
                    </div>}
            </div>
            <div>
                <img src='https://img-prd-pim.poorvika.com/pageimg/apple-iphone-16-series-wb.webp?width=1000&height=1000&quality=75' />
            </div>
            <div className='mt-2'>
                <AutoPlaySlider />
            </div>
        </div>
        </>
    )
}

export default Home1
