import React from 'react';
import HomeCarousel from './HomeCarusale';

export default function SpecialOffer() {
    return (
        <div className='lg:w-3/12 w-full lg:my-8 md:my-6 my-4 '>
            <h1 className='bg-[#62AB00] text-center font-semibold py-3 rounded text-2xl text-white'>Special offer</h1>
            <div>
                <div className='w-full'>
                    <HomeCarousel
                        showTitle={true}
                        className="w-full lg:w-[320px] "
                        titleClassName="text-lg font-bold text-center "
                        desClassName="text-sm py-2"
                        slideClassName="custom-slide w-full"
                        imageClassName="mt-24" // Adjust this according to your CSS or tailwind classes
                    />
                </div>
            </div>
        </div>
    );
}
