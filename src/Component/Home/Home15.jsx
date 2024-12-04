import React from 'react'
import AutoPlaySlider from './Slider'
import { useNavigate } from 'react-router-dom'
const Home15 = () => {
    const Navigate = useNavigate();
    return (
        <div>
            <div onClick={() => Navigate("/Product")}>
                <img src='https://img-prd-pim.poorvika.com/pageimg/apple-iphone-16-series-wb.webp?width=1000&height=1000&quality=75' />
            </div>
            <div className='mt-2'>
                <AutoPlaySlider />
            </div>
        </div>
    )
}

export default Home15
