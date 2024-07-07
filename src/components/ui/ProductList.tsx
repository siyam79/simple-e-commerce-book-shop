"use client"

import React, { useEffect, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { TbJewishStar } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { ProductData } from '@/type/type';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/Redux/features/cartClice';
import { RootState } from '@/Redux/store/store';
import { toast } from 'react-hot-toast';

interface ProductProps {
    product: ProductData;
}


export default function ProductList({ product }: ProductProps) {

    const dispach = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart);

    const handleAddTooCart = () => {
        const result = dispach(addToCart(product))
        if (result) {
            toast.success('Add To Cart Successfully!')
        } else {
            toast.error("Please Try Again")
        }
    }

    useEffect(() => {
        console.log("Cart Items:", cartItems);
    }, [cartItems]);

    return (
        <div className="relative border border-gray-300 p-4 h-[350px] group">
            <p>{product.description}</p>
            <img className="w-[200px] h-[200px] mx-auto p-4" src={product.image} alt={product.title} />
            <h2 className="text-center">{product.title}</h2>
            <p>${product.price}</p>
            <div className="absolute bottom-1/2  transform w-10/12 mx-auto  bg-gray-200 
            py-2.5  rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className='flex items-center justify-around w-full cursor-pointer text-xl text-black '>
                    <IoCartOutline onClick={handleAddTooCart} />
                    <TbJewishStar />
                    <LuEye />
                    <CiHeart />
                </div>
            </div>
        </div>
    )
}
