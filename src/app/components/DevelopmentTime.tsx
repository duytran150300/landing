"use client";
import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import "../styles/responsive.css";
const DevelopmentTime = () => {
  return (
    <div className="develop-time my-5 py-5 container">
      <Image
        src={"/Group 10 (1).png"}
        alt={""}
        height={168}
        width={895}
        className="mt-5"
      ></Image>

      {/* <img src="/Group 10 (1).png" alt="" /> */}
      <h5 className="title">Tiên phong & phụng sự</h5>
      <span className="time">2003 - 2023 </span>
      <span className="text">
        Với khát vọng cháy bỏng đưa Atlantic trở thành một Tập đoàn giáo dục
        hàng đầu tại Việt Nam, chúng tôi đã, đang, sẽ xây dựng và hoàn thiện các
        công ty thành viên cung cấp tất cả các giải pháp về giáo dục tốt nhất
        cho học sinh, sinh viên với phương châm
      </span>
      <span className="slogan">"Giáo dục Việt cho tương lai Việt"</span>
      <button className="see-more">Tìm hiểu thêm</button>
    </div>
  );
};
export default DevelopmentTime;
