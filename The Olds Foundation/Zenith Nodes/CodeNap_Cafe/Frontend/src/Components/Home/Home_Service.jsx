import React from "react";
import blackCoffee from "../../assets/Home/Black_Coffee.png";
import coldCoffee from "../../assets/Home/Cold_Coffee.png";
import hotCoffee from "../../assets/Home/Hot_Coffee.png";
import { motion } from "framer-motion";
import MotionWrapper from "../Motion/MotionWrapper";
import { fadeUp, zoomIn } from "../../utils/motionVariants";

const Home_Service = () => {
  return (
    <div className="flex justify-center items-center p-4 sm:p-6 md:p-10 my-5 ">
      <div className="w-full max-w-7xl text-center">
        {/* heading section */}
        <MotionWrapper variants={fadeUp} className="mb-10 px-4">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
            Fresh and <span className="text-[#f8d190]">Tasty Coffee</span>
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-[#f8d190] font-bold font-sans">
            Fresh aroma, delicious taste, energizing sip, perfect for mornings,
            evenings, friends, or solo moments.
          </p>
        </MotionWrapper>

        {/* Image + Description section */}
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-20 mt-20"
        >
          {/* Black Coffee */}
          <MotionWrapper
            variants={zoomIn}
            className="flex flex-col justify-center items-center w-64 sm:w-72 md:w-80"
          >
            <img
              className="w-70 h-auto rounded-lg shadow-md mb-5"
              src={blackCoffee}
              alt="Black Coffee"
            />
            <h2 className="text-xl sm:text-2xl text-[#f8d190] font-bold font-serif mb-3">
              Black Coffee
            </h2>
            <p className="text-sm sm:text-md text-white font-semibold font-serif">
              Boosts metabolism, rich antioxidants, improves focus, supports
              heart, liver, health-conscious people’s favorite.
            </p>
          </MotionWrapper>

          {/* Hot Coffee */}
          <MotionWrapper
            variants={zoomIn}
            className="flex flex-col justify-center items-center gap-3 w-64 sm:w-72 md:w-80"
          >
            <img
              className="w-70 h-auto rounded-lg shadow-md mb-5"
              src={hotCoffee}
              alt="Hot Coffee"
            />
            <h2 className="text-xl sm:text-2xl text-[#f8d190] font-bold font-serif mb-3">
              Hot Coffee
            </h2>
            <p className="text-sm sm:text-md text-white font-semibold font-serif">
              Emotional comfort, cozy warmth, aids digestion, enhances bonding,
              perfect for relaxing social coffee moments.
            </p>
          </MotionWrapper>

          {/* Cold Coffee */}
          <MotionWrapper
            variants={zoomIn}
            className="flex flex-col justify-center items-center gap-3 w-64 sm:w-72 md:w-80"
          >
            <img
              className="w-70 h-auto rounded-lg shadow-md mb-5"
              src={coldCoffee}
              alt="Cold Coffee"
            />
            <h2 className="text-xl sm:text-2xl text-[#f8d190] font-bold font-serif mb-3">
              Cold Coffee
            </h2>
            <p className="text-sm sm:text-md text-white font-semibold font-serif">
              Smooth, low-acidity, refreshing, energizing, mellow taste, ideal
              for summer days, cool relaxed vibe.
            </p>
          </MotionWrapper>
        </motion.div>
      </div>
    </div>
  );
};

export default Home_Service;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar