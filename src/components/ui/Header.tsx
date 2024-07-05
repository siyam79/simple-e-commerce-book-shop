import Link from 'next/link';
import React from 'react'

import SearchBar from './SearchBar';
import CardIcon from './CardIcon';

export default function Header() {
    return (
        <div>
            <div className='flex items-center justify-between px-3'>
                <Link href={"/"}><h1 className=' text-[#62AB00] lg:text-5xl md:text-3xl text-xl font-semibold '>Pustok.</h1></Link>

                {/* input  */}
                <div className='hidden lg:block'>
                    <SearchBar />
                </div>

                <CardIcon />

            </div>
        </div>
    )
}
