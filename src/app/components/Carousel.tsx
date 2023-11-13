"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../page.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "../styles/slider.css";
import "../styles/responsive.css";

import Image from "next/image";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import Link from "next/link";
export default function Slider() {
  return (
    <>
      <div className="container">
        <div className="business-heading text-center">
          <span className="content-title-group d-block">Atlantic group</span>
          <h3>Tin tức nổi bật</h3>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          keyboard={true}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: true,
          // }}
          className="mySwiper "
        >
          <div className="box-slide">
            <SwiperSlide>
              <div className="box-study-board">
                <div className="box-study-board-img">
                  <Image
                    src={"/Image.png"}
                    alt={""}
                    width={350}
                    height={240}
                  ></Image>
                </div>
                <div className="box-study-board-content">
                  <div className="box-study-board-content-time d-flex">
                    <span className="travel">TRAVEL</span>
                    <Image
                      src={"/Clock.svg"}
                      alt={""}
                      width={15}
                      height={15}
                    ></Image>
                    <span className="time">20/10/2023</span>
                  </div>
                  <span className="box-study-board-content-title d-block">
                    Nơi du lịch lý tưởng dành cho bạn
                  </span>
                  <span className="box-study-board-content-text">
                    Top những địa điểm du lịch lý tưởng 2023 được nhiều du khách
                    yêu thích và lựa chọn.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box-study-board">
                <div className="box-study-board-img">
                  <Image
                    src={"/Image (1).png"}
                    alt={""}
                    width={350}
                    height={240}
                  ></Image>
                </div>
                <div className="box-study-board-content">
                  <div className="box-study-board-content-time d-flex">
                    <span className="travel">STUDY ABROAD</span>
                    <Image
                      src={"/Clock.svg"}
                      alt={""}
                      width={15}
                      height={15}
                    ></Image>
                    <span className="time">20/10/2023</span>
                  </div>
                  <span className="box-study-board-content-title d-block">
                    Du học sinh xuất sắc tại Mỹ
                  </span>
                  <span className="box-study-board-content-text">
                    Với những ước mơ, hoài bão to lớn. Cô gái tự tin bước trên
                    những hành trình đầy thử thách tại Mỹ.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box-study-board">
                <div className="box-study-board-img">
                  <Image
                    src={"/Image (2).png"}
                    alt={""}
                    width={350}
                    height={240}
                  ></Image>
                </div>
                <div className="box-study-board-content">
                  <div className="box-study-board-content-time d-flex">
                    <span className="travel">STUDY ABROAD</span>
                    <Image
                      src={"/Clock.svg"}
                      alt={""}
                      width={15}
                      height={15}
                    ></Image>
                    <span className="time">20/10/2023</span>
                  </div>
                  <span className="box-study-board-content-title d-block">
                    Nơi du lịch lý tưởng dành cho bạn
                  </span>
                  <span className="box-study-board-content-text">
                    Top những địa điểm du lịch lý tưởng 2023 được nhiều du khách
                    yêu thích và lựa chọn.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box-study-board">
                <div className="box-study-board-img">
                  <Image
                    src={"/Image.png"}
                    alt={""}
                    width={350}
                    height={240}
                  ></Image>
                </div>
                <div className="box-study-board-content">
                  <div className="box-study-board-content-time d-flex">
                    <span className="travel">TRAVEL</span>
                    <Image
                      src={"/Clock.svg"}
                      alt={""}
                      width={15}
                      height={15}
                    ></Image>
                    <span className="time">20/10/2023</span>
                  </div>
                  <span className="box-study-board-content-title d-block">
                    Nơi du lịch lý tưởng dành cho bạn
                  </span>
                  <span className="box-study-board-content-text">
                    Top những địa điểm du lịch lý tưởng 2023 được nhiều du khách
                    yêu thích và lựa chọn.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box-study-board">
                <div className="box-study-board-img">
                  <Image
                    src={"/Image (1).png"}
                    alt={""}
                    width={350}
                    height={240}
                  ></Image>
                </div>
                <div className="box-study-board-content">
                  <div className="box-study-board-content-time d-flex">
                    <span className="travel">STUDY ABROAD</span>
                    <Image
                      src={"/Clock.svg"}
                      alt={""}
                      width={15}
                      height={15}
                    ></Image>
                    <span className="time">20/10/2023</span>
                  </div>
                  <span className="box-study-board-content-title d-block">
                    Du học sinh xuất sắc tại Mỹ
                  </span>
                  <span className="box-study-board-content-text">
                    Đến từ Việt Nam với những ước mơ, hoài bão to lớn. Cô gái đã
                    tự tin bước đi trên những hành trình đầy thử thách tại Mỹ.
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <Link href={""} className="showAll">
          Xem tất cả
        </Link>
        <Image
          className="img-bg"
          src={"/Logo.svg"}
          alt={""}
          height={826}
          width={551}
        ></Image>
      </div>
    </>
  );
}
