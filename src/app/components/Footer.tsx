import React from "react";
import Image from "next/image";
import "../styles/responsive.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-4 contact">
            <Image
              className="contact-img"
              src={"/logo 1.svg"}
              alt={"logo"}
              width={135}
              height={91}
            ></Image>
            <div className="address ">
              <Image
                src={"/Location.png"}
                alt={"logo"}
                width={24}
                height={24}
              ></Image>
              <span className="ml-12">
                33 Phố Lạc Trung, Quận Hai Bà Trưng, Hà Nội
              </span>
            </div>
            <div className="address my-3 ">
              <Image
                src={"/Call.png"}
                alt={"logo"}
                width={24}
                height={24}
              ></Image>
              <span className="ml-12">Tel: 19000033 | HotLine: 0904216513</span>
            </div>
            <div className="address ">
              <Image
                src={"/Message.png"}
                alt={"logo"}
                width={24}
                height={24}
              ></Image>
              <span className="ml-12">info@atlantic.edu.vn</span>
            </div>
          </div>
          <div className="col-lg-5 contact d-flex justify-content-evenly align-items-top gap-3">
            <div className="about">
              <ul>
                <li>
                  <a href="">
                    <h6 className="">Về Atlantic Group</h6>
                  </a>
                </li>
                <li>
                  <a href="">Trang chủ</a>
                </li>
                <li>
                  <a href="">Giới thiệu</a>
                </li>
                <li>
                  <a href="">Tin tức & Sự kiện</a>
                </li>
                <li>
                  <a href="">Thư viện</a>
                </li>
              </ul>
            </div>
            <div className="career">
              <ul>
                <li>
                  <a href="">
                    <h6 className="">Career</h6>
                  </a>
                </li>
                <li>
                  <a href="">Đối tác</a>
                </li>
                <li>
                  <a href="">Tuyển dụng</a>
                </li>
                <li>
                  <a href="">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="terms">
              <ul>
                <li>
                  <a href="">
                    <h6 className="">Điều khoản</h6>
                  </a>
                </li>
                <li>
                  <a href="">Điều khoản sử dụng</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 contact ">
            <div className="information">
              <h6 className="title">Đăng ký nhận tin</h6>
              <input
                type="email"
                placeholder="Địa chỉ gmail của bạn"
                className="w-100 rounded-pill position-relative email-input"
              />
              <Image
                className="send position-absolute"
                src={"/Paper_Plane.svg"}
                alt={""}
                width={24}
                height={24}
              ></Image>
            </div>
            <div className="follow">
              <h6 className="title">Theo dõi</h6>

              <div className="app-follow d-flex gap-3">
                <Image
                  className=""
                  src={"facebook.svg"}
                  alt={""}
                  width={24}
                  height={24}
                ></Image>
                <Image
                  className=" "
                  src={"tiktok.svg"}
                  alt={""}
                  width={24}
                  height={24}
                ></Image>
                <Image
                  className=" "
                  src={"youtube.svg"}
                  alt={""}
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-end">
        <span>
          © 2023 <span className="text-700">Atlantic Group</span>. All rights
          reserved
        </span>
      </div>
    </footer>
  );
};
export default Footer;
