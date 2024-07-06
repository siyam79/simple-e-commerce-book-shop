import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { TbJewishStar } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";


interface Product {
    title: string;
    brand: string;
    category: string;
    description: string;
    image: string;
    price: number;
}

interface ProductProps {
    product: Product;
}

export default function ProductList({ product }: ProductProps) {
    console.log(product);

    return (
        <div className="relative border border-gray-300 p-4 h-[350px] group">
            <p>{product.description}</p>
            <img className="w-[200px] h-[200px] mx-auto p-4" src={product.image} alt={product.title} />
            <h2 className="text-center">{product.title}</h2>
            <p>${product.price}</p>
            <div className="absolute bottom-1/2  transform w-10/12 mx-auto  bg-gray-200 
            py-2.5  rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               
                <div className='flex items-center justify-around w-full cursor-pointer text-xl text-black '>
                    <IoCartOutline />
                    <TbJewishStar />
                    <LuEye />
                    <CiHeart />
                </div>
            </div>
        </div>
    )
}
