"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HomeCarousel: React.FC = () => {
  const products = [
    {
      image:
        "https://img.freepik.com/free-vector/abstract-business-cover_1201-951.jpg?w=740&t=st=1720074881~exp=1720075481~hmac=710bdb93052305d845358e71b677be939098ddcd347793d30cc29b0cf416d9a8",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmTUhJmX734tkBuWGtFVTrMN99Z1k5sRc3Q&s",
    },
    {
      image:
        "https://media.istockphoto.com/id/1290063471/photo/blue-book-stack.jpg?s=612x612&w=0&k=20&c=eWbuMgL99ve093Duiv7olGOhBAfUzq7tOBN73ld0a7M=",
    },
    {
      image:
        "https://img.freepik.com/free-vector/abstract-business-cover_1201-951.jpg?w=740&t=st=1720074881~exp=1720075481~hmac=710bdb93052305d845358e71b677be939098ddcd347793d30cc29b0cf416d9a8",
    },
    
  ];

  return (
    <div className='lg:w-7/12 w-full '>
      <div className="flex items-center justify-center flex-col lg:h-[500px] h-[400px] bg-white">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full h-full"
        >
          {products?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex items-center justify-center h-full w-full bg-cover bg-center rounded-xl shadow-lg overflow-hidden cursor-pointer">
                <img src={item.image} alt={`Product ${index}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCarousel;
