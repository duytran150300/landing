"use client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "../styles/responsive.css";
import $ from "jquery";
export default function Business() {
  $(document).ready(function () {
    const imgs = $(".business-img").children();
    const contWidth = $(".business-box").width();

    const bigWidth = 30;
    const smallWidth = (100 - bigWidth) / imgs.length;
    const mouseSmallWidth = 100 / imgs.length - 1;
    const normalWidth = 100 / imgs.length;

    $(".business-img").mouseover(function () {
      $(this).stop().animate(
        {
          width: "40%",
          opacity: 1,
        },
        700
      );
      $(this).find(".business-btn").stop().fadeIn(700);
      $(this).siblings().stop().animate(
        {
          width: "19%",
          opacity: 0.5,
        },
        700
      );
    });
    $(".business-img").hover(
      function () {
        const button = $(this).find(".business-btn");
        button.css("display", "block");
        setTimeout(() => {
          button.css("visibility", "visible");
        }, 600);
      },
      function () {
        const button = $(this).find(".business-btn");
        button.css("display", "none");
        setTimeout(function () {
          button.css("visibility", "hidden");
        }, 100);
      }
    );

    $(".business-img").mouseout(function () {
      $(this).stop().animate(
        {
          width: "25%",
          opacity: 1,
        },
        700
      );
      $(this).siblings().stop().animate(
        {
          width: "25%",
          opacity: 1,
        },
        800
      );
    });
  });
  return (
    <Container>
      <div className="business-heading text-center">
        <img src="/Divider.png" alt="" className="m-auto py-5" />
        <span className="content-title-group d-block">Khám phá</span>
        <h3>Lĩnh Vực Kinh Doanh</h3>
      </div>
      <div className="business-box d-flex gap-4 my-5">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-6">
            <div className="business-img">
              <img src="/image (4).png" className="img-expand" alt="" />
              <div className="business-box-content d-flex justify-content-between align-items-center">
                <h4 className="ml-24">Du học</h4>
                <button className="business-btn see-more">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="business-img">
              <img src="/image (5).png" className="img-expand" alt="" />
              <div className="business-box-content d-flex justify-content-between align-items-center">
                <div className="ml-24">
                  <h4>Atlantic</h4>
                  <h5> Five - Star English</h5>
                </div>
                <button className="business-btn see-more">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="business-img">
              <img src="/image (6).png" className="img-expand" alt="" />
              <div className="business-box-content d-flex justify-content-between align-items-center">
                <div className="ml-24">
                  <h4>FSEL</h4>
                  <h5> Five - Star E - Learning</h5>
                </div>
                <button className="business-btn see-more">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="business-img">
              <img src="/image (7).png" className="img-expand" alt="" />
              <div className="business-box-content d-flex justify-content-between align-items-center">
                <h4 className="ml-24">Inschool</h4>
                <button className="business-btn see-more">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
