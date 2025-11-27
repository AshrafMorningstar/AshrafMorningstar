import Bitmap1 from "../Assets/Portfolio/Bitmap1.png";
import Bitmap2 from "../Assets/Portfolio/Bitmap2.png";
import Bitmap3 from "../Assets/Portfolio/Bitmap3.png";
import Bitmap4 from "../Assets/Portfolio/Bitmap4.png";
import icon from "../Assets/Portfolio/icon.png";
import Block from "../Assets/Portfolio/block.png";
import cloud from "../Assets/Portfolio/cloud.png";
import GirlModel from "../Assets/Portfolio/GirlModel.png";

const Portfolio = () => {
  return (
    <>
      <div className=" bg-[#28293e] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 py-10 sm:py-12 md:py-15">
        <div className="text-center text-lg text-[#ef6d58]">PORTFOLIO</div>
        <div className="text-3xl sm:text-4xl md:text-5xl mt-4 sm:mt-6 text-white text-center font-extrabold">
          Latest Work
        </div>
        <div className="flex flex-wrap justify-center items-center mt-6 sm:mt-8 md:mt-10 gap-4 sm:gap-8 md:gap-12 lg:gap-22">
          <div className="text-sm text-gray-200">
            Show All <sup>14</sup>
          </div>
          <div className="text-sm text-gray-400">
            Design <sup>6</sup>
          </div>
          <div className="text-sm text-gray-400">
            Branding <sup>8</sup>
          </div>
          <div className="text-sm text-gray-400">
            Illustration<sup>16</sup>
          </div>
          <div className="text-sm text-gray-400">
            Motion<sup>4</sup>
          </div>
        </div>

        {/* background image section */}
        <div className="mb-6 sm:mb-8 md:mb-10 mt-10 sm:mt-12 md:mt-15 p-4 sm:p-6 md:p-10">
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap">
            {/* Image 1 */}
            <div
              style={{ backgroundImage: `url("${Bitmap1}")` }}
              className="rounded-2xl w-full sm:w-80 md:w-100 lg:w-100 xl:w-100 h-48 sm:h-56 md:h-64 lg:h-70 bg-cover bg-center bg-no-repeat"
            >
              <div className="relative top-24 sm:top-28 md:top-32 lg:top-40 left-4 sm:left-6 md:left-8 lg:left-10">
                <button className="bg-white text-sm sm:text-base md:text-lg font-bold mb-2 rounded-3xl px-2 sm:px-3 md:px-4 py-1">
                  Design
                </button>
                <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold px-1 sm:px-2">
                  SOFA
                </h1>
              </div>
            </div>

            {/* Image 2 */}
            <div
              style={{ backgroundImage: `url("${Bitmap2}")` }}
              className="rounded-2xl w-full sm:w-96 md:w-120 lg:w-140 h-48 sm:h-56 md:h-64 lg:h-70 bg-cover bg-center bg-no-repeat"
            >
              <div className="relative top-24 sm:top-28 md:top-32 lg:top-40 left-4 sm:left-6 md:left-8 lg:left-10">
                <button className="bg-white text-sm sm:text-base md:text-lg font-bold mb-2 rounded-3xl px-2 sm:px-3 md:px-4 py-1">
                  Branding
                </button>
                <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold px-1 sm:px-2">
                  KeyBoard
                </h1>
              </div>
            </div>

            {/* Image 3 */}
            <div
              style={{ backgroundImage: `url("${Bitmap3}")` }}
              className="rounded-2xl w-full sm:w-96 md:w-120 lg:w-140 h-48 sm:h-56 md:h-64 lg:h-70 bg-cover bg-center bg-no-repeat"
            >
              <div className="relative top-24 sm:top-28 md:top-32 lg:top-40 left-4 sm:left-6 md:left-8 lg:left-10">
                <button className="bg-white text-sm sm:text-base md:text-lg font-bold mb-2 rounded-3xl px-2 sm:px-3 md:px-4 py-1">
                  Illustration
                </button>
                <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold px-1 sm:px-2">
                  Work Media
                </h1>
              </div>
            </div>

            {/* Image 4 */}
            <div
              style={{ backgroundImage: `url("${Bitmap4}")` }}
              className="rounded-2xl w-full sm:w-80 md:w-100 lg:w-100 xl:w-100 h-48 sm:h-56 md:h-64 lg:h-70 bg-cover bg-center bg-no-repeat"
            >
              <div className="relative top-24 sm:top-28 md:top-32 lg:top-40 left-4 sm:left-6 md:left-8 lg:left-10">
                <button className="bg-white text-sm sm:text-base md:text-lg font-bold mb-2 rounded-3xl px-2 sm:px-3 md:px-4 py-1">
                  Motion
                </button>
                <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold px-1 sm:px-2">
                  DDDone
                </h1>
              </div>
            </div>
          </div>

          {/* button section */}
          <div className="flex justify-center items-center">
            <button className="border border-white px-4 sm:px-5 py-1 rounded-lg text-white mt-8 sm:mt-10 md:mt-12 font-bold">
              Explore More
            </button>
          </div>
        </div>

        {/* Banner Section */}
        <div className="bg-[#fdf0e9] relative z-10">
          <img
            className="absolute top-[-30px] sm:top-[-60px] md:top-[-45px] left-4 sm:left-10 md:left-20 w-12 sm:w-16 md:w-20"
            src={icon}
            alt="star batch"
          />
          <div className="">
            <div className="px-4 sm:px-10 md:px-20 sm:pt-10 md:pt-20 flex flex-col items-center lg:flex-row lg:justify-between">
              {/* detail section */}
              <div className="mb-6 mt-15 lg:mb-0 text-center lg:text-left">
                <h4 className="text-[#ef6d58] text-sm sm:text-md uppercase tracking-widest mb-2">
                  Get Started
                </h4>
                <h1 className="text-xl sm:text-2xl font-bold text-black max-w-xs sm:max-w-md">
                  We Help Companies Move Faster
                </h1>
                <button className="border-1 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-white bg-[#ef6d58] mt-4 sm:mt-5 font-bold">
                  Contact US
                </button>
              </div>

              {/* block section (hidden on small) */}
              <img
                src={Block}
                alt="blockImg"
                className="  w-80 sm:w-60 md:w-80 lg:w-100"
              />

              {/* model section (hidden on small) */}
              <div className="relative mt-3 lg:mt-3  lg:block">
                <img
                  className="absolute top-4 sm:top-6 md:top-5 right-4 sm:right-20 md:right-10 w-16 sm:w-20 md:w-24"
                  src={cloud}
                  alt="cloud img"
                />
                <img
                  className="relative z-20 w-40 sm:w-52 md:w-40 lg:w-40"
                  src={GirlModel}
                  alt="Girl Model"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar