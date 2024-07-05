import React from 'react'
import { FaCar } from "react-icons/fa";

export default function FeaturesItem() {


    return (
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 md:gap-8 gap-2 my-10'>
            <div className='border border-gray-300 lg:px-4 px-1 py-2  lg:flex items-center lg:gap-4 '>
                <p> <FaCar size={40} color='#62AB00' /> </p>
                <p className='font-medium'> Free Shipping Item <br />
                    Orders over $500 </p>
            </div>
            <div className='border border-gray-300 lg:px-4 px-1 py-2  lg:flex items-center lg:gap-4 '>
                <p> <FaCar size={40} color='#62AB00' /> </p>
                <p className='font-medium'>
                    Money Back Guarantee <br />
                    100% money back </p>
            </div>
            <div className='border border-gray-300 lg:px-4 px-1 py-2  lg:flex items-center lg:gap-4 '>
                <p> <FaCar size={40} color='#62AB00' /> </p>
                <p className='font-medium'> Cash On Delivery <br />
                    Lorem ipsum dolor amet</p>
            </div>
            <div className='border border-gray-300 lg:px-4 px-1  py-2  lg:flex items-center lg:gap-4 '>
                <p> <FaCar size={40} color='#62AB00' /> </p>
                <p className='font-medium'>
                    Help & Support <br />
                    Call us : + 0123.4567.89</p>
            </div>

        </div>
    )
}
