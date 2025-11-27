import React from "react";
import BgImg from "../Assets/Video_reel/Bitmap.png";
import play from "../Assets/Video_reel/play.png";

const Video_Reel = () => {
  return (
    <section className="bg-[#fdf0e9] px-6 md:px-12 lg:px-24 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section - Video */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={BgImg}
            alt="Video background"
            className="w-[95%] h-auto object-cover"
          />
          <button className="absolute inset-0 flex justify-center items-center-safe">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center bg-[rgba(255,255,255,0.2)] hover:scale-105 transition-transform">
              <img src={play} alt="Play button" className="w-8 h-8" />
            </div>
          </button>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            1:45
          </div>
        </div>

        {/* Right Section - Details */}
        <div>
          <h4 className="text-[#ef6d58] tracking-widest text-sm uppercase mb-4">
            Video Reel
          </h4>
          <h1 className="text-[#391400] text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Unlock The Greatest <br /> Value Possible
          </h1>
          <p className="text-[#9f877a] text-base md:text-lg">
            Design, business understanding, ability to put themselves in the
            merchant's shoes meant to partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video_Reel;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar