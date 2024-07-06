"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// Import required modules
import { Grid, } from 'swiper/modules';

interface Product {
    image: string;
    title: string;
    brand: string;
    category: string;
    description: string;
    price: number;
}

const HomeCarouselRight: React.FC = () => {
    const products: Product[] = [
        {
            title: "Laptop Pro",
            brand: "PCMaster",
            category: "Electronics",
            description: "High-performance laptop for professional use.",
            image: "https://img.freepik.com/free-vector/abstract-business-cover_1201-951.jpg?w=740&t=st=1720074881~exp=1720075481~hmac=710bdb93052305d845358e71b677be939098ddcd347793d30cc29b0cf416d9a8",
            price: 1299.99
        },
        {
            title: "Coffee Maker Deluxe",
            brand: "HomeTech",
            category: "Home Appliances",
            description: "Automatic coffee maker with multiple brewing options.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmTUhJmX734tkBuWGtFVTrMN99Z1k5sRc3Q&s",
            price: 89.99
        },
        {
            title: "Designer Watch",
            brand: "FashionTime",
            category: "Fashion",
            description: "Elegant watch with a stylish design.",
            image: "https://media.istockphoto.com/id/1290063471/photo/blue-book-stack.jpg?s=612x612&w=0&k=20&c=eWbuMgL99ve093Duiv7olGOhBAfUzq7tOBN73ld0a7M=",
            price: 299.99
        },
        {
            title: "Laptop Pro",
            brand: "PCMaster",
            category: "Electronics",
            description: "High-performance laptop for professional use.",
            image: "https://img.freepik.com/free-vector/abstract-business-cover_1201-951.jpg?w=740&t=st=1720074881~exp=1720075481~hmac=710bdb93052305d845358e71b677be939098ddcd347793d30cc29b0cf416d9a8",
            price: 1299.99
        },
        {
            title: "Coffee Maker Deluxe",
            brand: "HomeTech",
            category: "Home Appliances",
            description: "Automatic coffee maker with multiple brewing options.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmTUhJmX734tkBuWGtFVTrMN99Z1k5sRc3Q&s",
            price: 89.99
        },
        {
            title: "Designer Watch",
            brand: "FashionTime",
            category: "Fashion",
            description: "Elegant watch with a stylish design.",
            image: "https://media.istockphoto.com/id/1290063471/photo/blue-book-stack.jpg?s=612x612&w=0&k=20&c=eWbuMgL99ve093Duiv7olGOhBAfUzq7tOBN73ld0a7M=",
            price: 299.99
        }
    ];

    return (
        <div className="lg:w-[500px] w-[300px] h-[330px] lg:mt-0 md:mt-0 mt-4 flex items-center  justify-center">
            <Swiper
                slidesPerView={1}
                grid={{
                    rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid]}
                className="w-full h-full"
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index} className="text-center text-lg lg:px-4 px-1 flex justify-center items-center">
                        <div className="flex items-center justify-center lg:w-[400px] w-full h-[150px] border border-gray-300 p-4 gap-1">
                            <img src={product.image} alt={`Slide ${index + 1}`} className="object-cover 
                            lg:w-[100px] w-[80px]  lg:h-[100px] h-[80px] rounded" />
                            <div className='py-2'>
                                <h1 className="font-bold lg:text-xl text-sm ">{product.title}</h1>
                                <p className="text-sm text-gray-500">{product.description}</p>
                                <p className="lg:text-lg text-sm  text-green-500">Price ${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HomeCarouselRight;
