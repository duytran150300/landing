"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/box-partner.css";
import Image from "next/image";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import Link from "next/link";
import "../styles/responsive.css";
export default function BoxPartner() {
  return (
    <div className="content-bg-new">
      <div className="container">
        <div className="business-heading text-center">
          <span className="content-title-group d-block">Đối tác</span>
          <h3>Đối Tác Atlantic Group</h3>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          cssMode={true}
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
              slidesPerView: 4,
              spaceBetween: 28,
            },
          }}
          modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="slide-partner"
        >
          <SwiperSlide className="slide-box">
            <div className="business-content">
              <div className="business-content-logo">
                <img src="/image 64.png" alt="" />
              </div>
              <div className="business-content-img">
                <img src="/image 67.png" alt="" />
              </div>
              <h6 className="business-content-title">
                SOSHI Global Company Ltd.
              </h6>
              <div className="business-content-infor">
                <div>
                  <img src="/Group 11 (2).svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
                <div>
                  <img src="/Group 12.svg" alt="" />
                  <span>soshiglobal@gmail.com</span>
                </div>
                <div>
                  <img src="/Group 13.svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="business-content">
              <div className="business-content-logo">
                <img src="/image 65.png" alt="" />
              </div>
              <div className="business-content-img">
                <img src="/image 67.png" alt="" />
              </div>
              <h6 className="business-content-title">
                SOSHI Global Company Ltd.
              </h6>
              <div className="business-content-infor">
                <div>
                  <img src="/Group 11 (2).svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
                <div>
                  <img src="/Group 12.svg" alt="" />
                  <span>soshiglobal@gmail.com</span>
                </div>
                <div>
                  <img src="/Group 13.svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="business-content">
              <div className="business-content-logo">
                <img src="/image 59.png" alt="" />
              </div>
              <div className="business-content-img">
                <img src="/image 67.png" alt="" />
              </div>
              <h6 className="business-content-title">
                SOSHI Global Company Ltd.
              </h6>
              <div className="business-content-infor">
                <div>
                  <img src="/Group 11 (2).svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
                <div>
                  <img src="/Group 12.svg" alt="" />
                  <span>soshiglobal@gmail.com</span>
                </div>
                <div>
                  <img src="/Group 13.svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="business-content">
              <div className="business-content-logo">
                <img src="/image 61.png" alt="" />
              </div>
              <div className="business-content-img">
                <img src="/image 67.png" alt="" />
              </div>
              <h6 className="business-content-title">
                SOSHI Global Company Ltd.
              </h6>
              <div className="business-content-infor">
                <div>
                  <img src="/Group 11 (2).svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
                <div>
                  <img src="/Group 12.svg" alt="" />
                  <span>soshiglobal@gmail.com</span>
                </div>
                <div>
                  <img src="/Group 13.svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-box">
            <div className="business-content">
              <div className="business-content-logo">
                <img src="/image 64.png" alt="" />
              </div>
              <div className="business-content-img">
                <img src="/image 67.png" alt="" />
              </div>
              <h6 className="business-content-title">
                SOSHI Global Company Ltd.
              </h6>
              <div className="business-content-infor">
                <div>
                  <img src="/Group 11 (2).svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
                <div>
                  <img src="/Group 12.svg" alt="" />
                  <span>soshiglobal@gmail.com</span>
                </div>
                <div>
                  <img src="/Group 13.svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="business-content">
              <div className="business-content-logo">
                <img src="/image 65.png" alt="" />
              </div>
              <div className="business-content-img">
                <img src="/image 67.png" alt="" />
              </div>
              <h6 className="business-content-title">
                SOSHI Global Company Ltd.
              </h6>
              <div className="business-content-infor">
                <div>
                  <img src="/Group 11 (2).svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
                <div>
                  <img src="/Group 12.svg" alt="" />
                  <span>soshiglobal@gmail.com</span>
                </div>
                <div>
                  <img src="/Group 13.svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="business-content">
              <div className="business-content-logo">
                <img src="/image 59.png" alt="" />
              </div>
              <div className="business-content-img">
                <img src="/image 67.png" alt="" />
              </div>
              <h6 className="business-content-title">
                SOSHI Global Company Ltd.
              </h6>
              <div className="business-content-infor">
                <div>
                  <img src="/Group 11 (2).svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
                <div>
                  <img src="/Group 12.svg" alt="" />
                  <span>soshiglobal@gmail.com</span>
                </div>
                <div>
                  <img src="/Group 13.svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="business-content">
              <div className="business-content-logo">
                <img src="/image 61.png" alt="" />
              </div>
              <div className="business-content-img">
                <img src="/image 67.png" alt="" />
              </div>
              <h6 className="business-content-title">
                SOSHI Global Company Ltd.
              </h6>
              <div className="business-content-infor">
                <div>
                  <img src="/Group 11 (2).svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
                <div>
                  <img src="/Group 12.svg" alt="" />
                  <span>soshiglobal@gmail.com</span>
                </div>
                <div>
                  <img src="/Group 13.svg" alt="" />
                  <span>
                    Tầng 13 Zen Plaza, 54 - 56 Đường Nguyễn Trãi, Phường Bến
                    Thành, Quận 1, Tp. HCM, Việt Nam.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="logo-partner ">
        <div className="container d-flex justify-content-between align-items-center w-100">
          <img src="/Frame (1).svg" alt="" />
          <img src="/Frame (2).svg" alt="" />
          <img src="/Frame (3).svg" alt="" />
          <img src="/Frame (4).svg" alt="" />
          <img src="/Frame (5).svg" alt="" />
          <img src="/Frame (6).svg" alt="" />
          <img src="/Frame (7).svg" alt="" />
        </div>
      </div>
    </div>
  );
}
