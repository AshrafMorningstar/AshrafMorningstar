import React from "react";
import aboutLogo from "../Assets/About/aboutLogo.png";
import aboutPic from "../Assets/About/aboutPic.png";

const About = () => {
  return (
    <>
      <div className="px-6 sm:px-10 lg:px-30 py-10 bg-[#fdf0e9]">
        {/* Logo */}
        <div className="flex justify-center border-b border-b-[#ebd1c4] pb-10">
          <img src={aboutLogo} alt="aboutLogo" />
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-16">
          <img
            className="h-auto w-full max-w-md sm:max-w-lg lg:h-[520px] object-contain"
            src={aboutPic}
            alt="aboutPic"
          />
          <div className="right px-4 sm:px-8 lg:px-14 text-center lg:text-left">
            <div className="text-lg tracking-wider text-[#ef6d58]">ABOUT</div>
            <div className="text-[#391400] my-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              An Experience <br />
              Design Agency
            </div>
            <span className="text-xl sm:text-2xl text-black">
              Provides a full service range
            </span>
            <p className="text-[16px] my-6 text-[#7f6454] leading-7">
              Ability to put themselves in the merchant's shoes. It is
              <br className="hidden sm:block" />
              meant to partner on the long run, and work as an extension
              <br className="hidden sm:block" />
              of the merchant's team.
            </p>
            <button className="px-6 rounded-xl py-3 text-black bg-white font-bold text-[14px]">
              ABOUT US
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center mt-16 bg-[#fdf0e9] p-4 rounded-md">
          {/* Card 1 */}
          <div className="w-[250px] sm:w-[300px] pl-7 pr-20 py-7 border border-[#ebd1c4]  bg-[#fdf0e9] rounded-md">
            <div className="text-3xl font-extrabold text-[#391400]">42%</div>
            <div className="text-[#391400] mt-2">Years of experience</div>
          </div>

          {/* Card 2 */}
          <div className="w-[250px] sm:w-[300px] pl-7 pr-20 py-7 border border-[#ebd1c4] bg-[#fdf0e9] rounded-md">
            <div className="text-3xl font-extrabold text-[#391400]">73+</div>
            <div className="text-[#391400] mt-2">Agency members</div>
          </div>

          {/* Card 3 */}
          <div className="w-[250px] sm:w-[300px] pl-7 pr-20 py-7 border border-[#ebd1c4]  bg-[#fdf0e9] rounded-md">
            <div className="text-3xl font-extrabold text-[#391400]">5.000</div>
            <div className="text-[#391400] mt-2">Projects complete</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;


// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar