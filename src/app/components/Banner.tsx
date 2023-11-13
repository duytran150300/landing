"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/banner.css";
import "../styles/responsive.css";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 3000)}`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="banner"
      >
        <SwiperSlide>
          <Image
            src={"/Home page (1).svg"}
            alt={""}
            width={1000}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Home page (1).svg"}
            alt={""}
            width={1000}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Home page (1).svg"}
            alt={""}
            width={1000}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Home page (1).svg"}
            alt={""}
            width={1000}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Home page (1).svg"}
            alt={""}
            width={1000}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Home page (1).svg"}
            alt={""}
            width={1000}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Home page (1).svg"}
            alt={""}
            width={1000}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Home page (1).svg"}
            alt={""}
            width={1000}
            height={800}
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg
            viewBox="0 0 180 180"
            preserveAspectRatio="xMidYMid meet"
            ref={progressCircle}
          >
            <circle cx="90" cy="90" r="85"></circle>
          </svg>
          <span ref={progressContent}></span>
          <div className="line"></div>
          <div className="arrow"></div>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
