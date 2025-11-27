import React from "react";
import BgImage2 from "../../assets/cover-img/Cover-4.jpg";
import { Link } from "react-router-dom";

const Contact_Hero = () => {
  return (
    <div
      className="w-full h-[450px] md:h-[500px] lg:h-[550px] bg-cover bg-center bg-no-repeat rounded-b-[10%]"
      style={{ backgroundImage: `url(${BgImage2})` }}
    >
      <div className="bg-black h-full w-full opacity-70">
        <div className="opacity-100 w-full h-full flex flex-col items-center justify-center relative px-4 text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#cb8917] pt-10 sm:pt-16 md:pt-20">
            Our <span className="text-[#EBD8A7]">Contact</span>
          </h1>

          {/* Breadcrumb */}
          <div className="flex gap-2 sm:gap-4 md:gap-5 text-[#F8D190] mt-4 items-center">
            <Link to="/home" className="text-lg sm:text-2xl font-bold">
              Home
            </Link>
            {/* ✅ ICON updated for FontAwesome 6 */}
            <i className="fas fa-angle-right text-base sm:text-xl md:text-2xl font-bold"></i>
            <Link to="/gallery" className="text-lg sm:text-2xl font-bold">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Hero;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar