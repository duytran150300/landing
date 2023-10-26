import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="banner">
      <Image src={"/Banner.png"} alt={""} width={1000} height={809}></Image>
    </div>
  );
};
export default Banner;
