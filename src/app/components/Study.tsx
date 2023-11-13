"use client";
import { Html, Head, Main, NextScript } from "next/document";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import "../styles/study.css";
import "../styles/responsive.css";

// import "../../../public/js/miniature.earth.js";
// import "../../../public/js/study";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
// import Script from "next/script";
export default function Study() {
  return (
    <>
      {/* <Head> */}
      {/* <script src="../../../public/js/study.js" /> */}
      {/* </Head> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // loop={true}
        navigation={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 0,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 22,
        //   },
        //   1024: {
        //     slidesPerView: 1,
        //     spaceBetween: 28,
        //   },
        // }}
        modules={[Pagination, Navigation, Mousewheel, Keyboard]}
        className="box-content-study py-5"
      >
        <SwiperSlide>
          <div className="box-study">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-9 ">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-12 content-study">
                    <div className="business-heading tex">
                      <span className="content-title-group d-block">
                        DẤU ẤN
                      </span>
                      <h3>Du Học Atlantic</h3>
                    </div>
                    <div className="text">
                      Du học Atlantic là cầu nối đưa học sinh Việt Nam tiếp cận
                      với nền giáo dục chất lượng hàng đầu trên toàn thế giới
                      thông qua các chương trình vừa học vừa làm, chương trình
                      học bổng, chương trình cho vay học phí.
                    </div>
                    <button className="see-more">Tìm hiểu thêm</button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 content-earth">
                    <div id="myearth">
                      <div id="glow">
                        <img src="/Image (8).png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="study-content-bg stamp">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12 px-4">
                  <img src="/Image (8).png" alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="content-study">
                    <div className="business-heading ">
                      <span className="content-title-group d-block">
                        DẤU ẤN
                      </span>
                      <h3>Atlantic Five - Star English</h3>
                    </div>
                    <div className="text">
                      Năm 2016 – 2017, Atlantic chính thức khai trương Trung tâm
                      Anh ngữ 5 sao đầu tiên tại Việt Nam với 2 cơ sở tại 33 -
                      35 Lạc Trung và 125 Hoàng Ngân, Hà Nội với mong muốn mang
                      lại môi trường học tập Anh ngữ tiêu chuẩn 5 sao.
                    </div>
                    <button className="see-more">Tìm hiểu thêm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box-study-bg stamp">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12 px-4">
                  <div className="content-study">
                    <div className="business-heading ">
                      <span className="content-title-group d-block">
                        DẤU ẤN
                      </span>
                      <h3>FSEL </h3>
                      <h3>Five Star E - Learning</h3>
                    </div>
                    <div className="text">
                      FSEL – Viết tắt của Five-Star E-learning – là nền tảng
                      ngoại ngữ học thuật mô phỏng lại trải nghiệm lớp học thật
                      tại trung tâm với nhiều tiện ích.
                    </div>
                    <button className="see-more">Tìm hiểu thêm</button>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <img src="/image (10).png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content-bg-stamp stamp">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12 px-4">
                  <img src="/image (9).png" alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="content-study">
                    <div className="business-heading ">
                      <span className="content-title-group d-block">
                        DẤU ẤN
                      </span>
                      <h3>Du Học Atlantic</h3>
                    </div>
                    <div className="text">
                      Năm 2015, Atlantic Five-Star English bắt đầu cung cấp loại
                      hình đào tạo bổ trợ và tăng cường ngoại ngữ tại các trường
                      học. Song song với việc đào tạo tiếng Anh tại trung tâm,
                      Atlantic Group cũng là đơn vị hợp tác dạy bổ trợ tiếng Anh
                      tăng cường, song bằng Cambridge và IELTS tại hơn 100
                      trường THCS, THPT tại Hà Nội và nhiều tỉnh thành và dạy
                      tiếng Nhật - Hàn tại hơn 20 trường THCS và THPT trên địa
                      bàn Hà Nội với số lượng hơn 50.000 học sinh.
                    </div>
                    <button className="see-more">Tìm hiểu thêm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Script src="../../../public/js/study.js" /> */}
    </>
  );
}
