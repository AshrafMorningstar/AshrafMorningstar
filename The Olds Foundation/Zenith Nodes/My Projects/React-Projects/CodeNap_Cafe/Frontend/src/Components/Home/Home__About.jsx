import React from "react";
import AboutImage from "../../assets/Home/about-image.jpg";
import { motion } from "framer-motion";
import { fadeIn,fadeUp, slideLeft, slideRight } from "../../utils/motionVariants";
import MotionWrapper from "../Motion/MotionWrapper";

const About_Hero = () => {
  return (
    <MotionWrapper
      variants={slideLeft}
      className="flex flex-col xl:flex-row justify-between xl:mx-50  items-center my-20 p-4 md:p-5"
    >
      {/* User Image */}
      <MotionWrapper variants={fadeUp}>
        <div className="w-60 h-60 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] overflow-hidden rounded-full mb-6 xl:mb-0">
          <img
            className="w-full h-full object-cover"
            src={AboutImage}
            alt="about image"
          />
        </div>
      </MotionWrapper>

      {/* About Us Details */}
      <MotionWrapper
        variants={slideRight}
        className="flex flex-col justify-center items-center xl:items-center text-center xl:text-center max-w-lg px-2 mt-8 xl:mt-0">
        <h1 className="text-4xl font-bold text-[#f8d190] mb-2">About Us</h1>
        <div className="h-1 w-24 bg-[#e4594d] mb-4"></div>
        <p className="text-xl font-mono text-white mt-5 mb-10">
          At Coffee House in Berndorf, Germany, we pride ourselves on being a
          go-to destination for coffee lovers and conversation seekers alike.
          We're dedicated to providing an exceptional coffee experience in a
          cozy and inviting atmosphere, where guests can relax, unwind, and
          enjoy their time in comfort.
        </p>
        {/* Social Links */}
        <MotionWrapper variants={fadeIn}>
        <ul className="flex gap-10 items-center justify-center xl:justify-center">
          <li className="text-4xl">
            <a
              href="Ashraf Morningstar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook hover:scale-110 hover:text-[#e4594d] text-white transition duration-500"></i>
            </a>
          </li>
          <li className="text-4xl">
            <a
              href="https://x.com/AMS_Morningstar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram hover:scale-110 hover:text-[#e4594d] text-white transition duration-500"></i>
            </a>
          </li>
          <li className="text-4xl">
            <a
              href="https://github.com/AshrafMorningstar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-x-twitter hover:scale-110 hover:text-[#e4594d] text-white transition duration-500"></i>
            </a>
          </li>
        </ul>
        </MotionWrapper>
      </MotionWrapper>
    </MotionWrapper>
  );
};

export default About_Hero;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar