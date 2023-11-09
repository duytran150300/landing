import React from "react";
import Image from "next/image";
import "../styles/responsive.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="#">
            <Image
              src={"/logo_group.png"}
              alt={"logo"}
              width={195}
              height={45}
            ></Image>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-around align-items-center w-100 text-white">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lĩnh vực
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Truyện AG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Tuyển dụng
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Liên hệ
                </a>
              </li>
              <li className="nav-item">
                <ul className="navbar-nav d-flex justify-content-between align-items-center w-100 text-white gap-3">
                  <li className="search">
                    <Image
                      src={"/Vector.svg"}
                      alt={""}
                      height={10}
                      width={10}
                    ></Image>
                  </li>
                  <li className="search">
                    <Image
                      src={"/Vector (1).svg"}
                      alt={""}
                      height={10}
                      width={10}
                    ></Image>
                  </li>
                  <li className="search">
                    <Image
                      src={"/Youtube (1).svg"}
                      alt={""}
                      height={10}
                      width={10}
                    ></Image>
                  </li>
                  <div className="vertical-slash"></div>
                  <li className="search">
                    <Image
                      src={"/Search.svg"}
                      alt={""}
                      height={10}
                      width={10}
                    ></Image>
                  </li>

                  <div className="translate d-flex align-items-center">
                    <span className="d-bloc">VN</span>
                    <Image
                      src={"/arrow.svg"}
                      alt={""}
                      width={10}
                      height={10}
                    ></Image>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
