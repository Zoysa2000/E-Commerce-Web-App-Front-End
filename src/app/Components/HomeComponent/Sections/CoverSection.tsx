"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ShopNew from "../../Buttons/ShopNew";

const CoverSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {/* Desktop slides */}
        <SwiperSlide>
          <div
            className="hidden w-full h-full bg-center bg-no-repeat md:block"
            style={{
              backgroundImage: "url('/assets/cover.png')",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="block w-full h-full bg-no-repeat bg-cover md:hidden"
            style={{
              backgroundImage: "url('/assets/cover.png')",
            }}
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hidden w-full h-full bg-center bg-no-repeat md:block"
            style={{
              backgroundImage: "url('/assets/p1.png')",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="block w-full h-full bg-no-repeat bg-cover md:hidden"
            style={{
              backgroundImage: "url('/assets/p1.png')",
            }}
          ></div>
        </SwiperSlide>

        
      </Swiper>

      {/* New Arrival button */}
      <div className="absolute z-10 bottom-4 right-4 md:bottom-8 md:right-8">
        <ShopNew />
      </div>
    </div>
  );
};

export default CoverSection;
