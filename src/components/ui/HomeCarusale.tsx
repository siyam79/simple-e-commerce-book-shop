"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface HomeCarouselProps {
  className?: string;
  slideClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  desClassName?: string;
  showTitle?: boolean;
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({
  className = '',
  slideClassName = '',
  imageClassName = '',
  titleClassName = '',
  desClassName = '',
  showTitle = false
}) => {
  const products = [
    {
      title: "Designer Watch",
      description: "Elegant watch with a stylish design. Elegant watch with a stylish design.",
      image:
        "https://img.freepik.com/free-vector/abstract-business-cover_1201-951.jpg?w=740&t=st=1720074881~exp=1720075481~hmac=710bdb93052305d845358e71b677be939098ddcd347793d30cc29b0cf416d9a8",
    },
    {
      title: "Designer Watch2",
      description: "Elegant watch with a stylish design. Elegant watch with a stylish design.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmTUhJmX734tkBuWGtFVTrMN99Z1k5sRc3Q&s",
    },
    {
      title: "Designer Watch3",
      description: "Elegant watch with a stylish design. Elegant watch with a stylish design.",
      image:
        "https://media.istockphoto.com/id/1290063471/photo/blue-book-stack.jpg?s=612x612&w=0&k=20&c=eWbuMgL99ve093Duiv7olGOhBAfUzq7tOBN73ld0a7M=",
    },
    {
      title: "Designer Watch4",
      description: "Elegant watch with a stylish design. Elegant watch with a stylish design.",
      image:
        "https://img.freepik.com/free-vector/abstract-business-cover_1201-951.jpg?w=740&t=st=1720074881~exp=1720075481~hmac=710bdb93052305d845358e71b677be939098ddcd347793d30cc29b0cf416d9a8",
    },
  ];

  return (
    <div className={`lg:w-7/12 w-full `}>
      <div className={`flex items-center justify-center flex-col lg:h-[500px] h-[400px] bg-white 
      ${className}`}>
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
          {products.map((item, index) => (
            <SwiperSlide key={index} className={slideClassName}>
              <div className="relative flex items-center justify-center h-full w-full bg-cover bg-center  shadow-lg overflow-hidden cursor-pointer">
                {showTitle && (
                  <div className="absolute top-6 px-2 text-gray-500">
                    <h1 className={titleClassName}>{item.title}</h1>
                    <p className={desClassName}>{item.description}</p>
                    <p className={titleClassName}> Price $240 </p>
                  </div>
                )}
                <img
                  src={item.image}
                  alt={`Product ${index}`}
                  className={`object-cover ${imageClassName}`}
                />

                

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
