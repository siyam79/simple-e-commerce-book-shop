import Link from 'next/link';
import React from 'react'
import { IoCartOutline } from "react-icons/io5";

export default function CardIcon() {
    return (
        <div className='flex items-center lg:gap-10 md:gap-8 gap-4 '>
            <Link href={'signOut'}><p className='text-xl  font-semibold '> Login </p></Link>
            <div className="relative">
                <IoCartOutline className="text-[2.5rem]" />
                <div className=" absolute top-[-10%] right-[-15%]  text-secondary min-w-[20px] min-h-[20px] text-center">
                    <span className="text-[0.8rem] bg-[#62AB00] text-white py-1 px-1 rounded-full w-full h-full border-[2px] border-secondary">
                        10
                    </span>
                </div>
            </div>
        </div>
    )
}
