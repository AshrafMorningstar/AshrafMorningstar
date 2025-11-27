import React from "react";
import { Plus, Minus } from "lucide-react";

const Pricing = () => {
  return (
    <div className="bg-[#fdf0e9] text-black px-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 2xl:px-20 py-10">
      <div className="p-4 sm:p-6 md:p-10 lg:p-12 xl:p-16">
        {/* details section */}
        <div className="mb-10 sm:mb-12 md:mb-10">
          <h3 className="text-xl text-[#ef6d58] uppercase tracking-widest mb-3 sm:mb-5">
            pricing
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#391400] font-bold leading-tight">
            Check Our <br /> Pricing Plans
          </h1>
        </div>

        {/* Card Section */}
        <div className="flex flex-col lg:flex-row justify-center items-baseline-last">
          {/* card-1 */}
          <div className="p-6 sm:p-8 md:p-10 border-2 border-[#f3d1bf] lg:border-r-0 w-full lg:w-1/3 flex flex-col items-start rounded-xl">
            <h3 className="text-lg sm:text-xl text-[#ef6d58] uppercase tracking-widest mb-4 sm:mb-5">
              Consultation
            </h3>
            <h1 className="text-2xl sm:text-3xl text-[#391400] font-bold mb-4 sm:mb-5">
              Free
            </h1>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-[#7f6454] font-semibold">
              Your digital marketing efforts, instead of handling in-house.
            </p>

            <div className="flex items-center space-x-4 sm:space-x-5 mb-4 sm:mb-5">
              <Plus className="text-lg text-white bg-[#ef6d58] rounded-full p-1" />
              <span className="text-sm sm:text-base lg:text-lg text-[#391400]">
                Brand Design
              </span>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-5 mb-4 sm:mb-5">
              <Minus className="text-lg text-white bg-[#f6daca] rounded-full p-1" />
              <span className="text-sm sm:text-base lg:text-lg text-[#7f6454]">
                Market Analysis
              </span>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-5 mb-6 sm:mb-10">
              <Minus className="text-lg text-white bg-[#f6daca] rounded-full p-1" />
              <span className="text-sm sm:text-base lg:text-lg text-[#7f6454]">
                Production
              </span>
            </div>

            <button className="py-2 px-4 text-base sm:text-lg bg-[#ffffff] text-[#391400] font-bold rounded-lg">
              Contact US
            </button>
          </div>

          {/* card-2 */}
          <div className="p-6 sm:p-8 md:p-10 border-2 border-[#f3d1bf] bg-[#ffffff] w-full lg:w-1/3 flex flex-col items-start rounded-xl">
            <button className="py-1.5 px-4 sm:px-5 text-sm sm:text-base bg-[#ef6d58] text-white font-bold rounded-full mb-4 sm:mb-5">
              Popular
            </button>
            <h3 className="text-lg sm:text-xl text-[#ef6d58] uppercase tracking-widest mb-4 sm:mb-5">
              Design
            </h3>
            <h1 className="text-2xl sm:text-3xl text-[#391400] font-bold mb-4 sm:mb-5">
              $1500
            </h1>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-[#7f6454] font-semibold">
              Provide your business with a variety of digital solutions to promote.
            </p>

            <div className="flex items-center space-x-4 sm:space-x-5 mb-4 sm:mb-5">
              <Plus className="text-lg text-white bg-[#ef6d58] rounded-full p-1" />
              <span className="text-sm sm:text-base lg:text-lg text-[#391400]">
                Brand Design
              </span>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-5 mb-4 sm:mb-5">
              <Plus className="text-lg text-white bg-[#f6daca] rounded-full p-1" />
              <span className="text-sm sm:text-base lg:text-lg text-[#7f6454]">
                Market Analysis
              </span>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-5 mb-6 sm:mb-10">
              <Minus className="text-lg text-white bg-[#f6daca] rounded-full p-1" />
              <span className="text-sm sm:text-base lg:text-lg text-[#7f6454]">
                Production
              </span>
            </div>

            <button className=" py-2 px-4 text-base sm:text-lg bg-[#ef6d58] text-white font-bold rounded-lg">
              Contact US
            </button>
          </div>

          {/* card-3 */}
          <div className="p-6 sm:p-8 md:p-10 border-2 border-[#f3d1bf] lg:border-l-0 w-full lg:w-1/3 flex flex-col items-start rounded-xl">
            <h3 className="text-lg sm:text-xl text-[#ef6d58] uppercase tracking-widest mb-4 sm:mb-5">
              Design + Code
            </h3>
            <h1 className="text-2xl sm:text-3xl text-[#391400] font-bold mb-4 sm:mb-5">
              $2900
            </h1>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-[#7f6454] font-semibold">
              Help you hit your marketing goals and grow your business.
            </p>

            <div className="flex items-center space-x-4 sm:space-x-5 mb-4 sm:mb-5">
              <Plus className="text-lg text-white bg-[#ef6d58] rounded-full p-1" />
              <span className="text-sm sm:text-base lg:text-lg text-[#391400]">
                Brand Design
              </span>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-5 mb-4 sm:mb-5">
              <Plus className="text-lg text-white bg-[#ef6d58] rounded-full p-1" />
              <span className="text-sm sm:text-base lg:text-lg text-[#7f6454]">
                Market Analysis
              </span>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-5 mb-6 sm:mb-10">
              <Plus className="text-lg text-white bg-[#ef6d58] rounded-full p-1" />
              <span className="text-sm sm:text-base lg:text-lg text-[#7f6454]">
                Production
              </span>
            </div>

            <button className=" py-2 px-4 text-base sm:text-lg bg-[#ffffff] text-[#391400] font-bold rounded-lg">
              Contact US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar