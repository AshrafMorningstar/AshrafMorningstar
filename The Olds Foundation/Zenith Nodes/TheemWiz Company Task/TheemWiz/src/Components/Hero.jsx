import React from 'react'
import heroLeftBottom from '../Assets/Hero/heroBitmap.png'
import Star from '../Assets/Hero/Star.png'
import heroRightPic from '../Assets/Hero/heroRightPic.png'

const Hero = () => {
  return (
    <>
<div className=" bg-[#28293e] flex flex-col-reverse lg:flex-row items-center px-6 md:px-16 lg:px-30 py-10 md:py-20 gap-10 lg:gap-40 mt-10">
  {/* Left Content */}
  <div className="left-cont w-full lg:w-1/2">
    <span className="text-sm mt-6 md:mt-10 font-medium text-[#ef6d58] block">MODERN STUDIO</span>
<div className="relative mt-4 w-full">
  {/* Star Image: hidden on small devices, visible from md and up */}
  <img 
    className="hidden md:block absolute top-[-5px] right-2 md:right-16 lg:right-36 w-28 lg:w-32 h-28 lg:h-32 z-10" 
    src={Star} 
    alt="Star Background" 
  />
  
  {/* Main Text with higher z-index */}
  <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-tight z-20 font-bold text-white relative whitespace-normal">
    We're Help 
    <br />
    To Build Your
    <br /> 
    Dream Project
  </p>
</div>



    <p className="text-[#a5a6af] text-sm md:text-base mt-4 md:mt-6">
      Agency provides a full service range including technical skills, design, business understanding.
    </p>

    {/* Buttons */}
    <div className="btnGroup flex flex-col sm:flex-row gap-4 sm:gap-7 items-start sm:items-center mt-8 md:mt-10">
      <button className="px-4 py-2 text-sm font-medium text-white rounded-md bg-[#ef6d58]">HOW WE WORK</button>
      <span className="text-base font-medium text-white cursor-pointer">Contact Us</span>
    </div>

    {/* Quote Section */}
    <div className="leftBottom flex items-center gap-4 mt-10 md:mt-20">
      <img className="h-8" src={heroLeftBottom} alt="heroLeftBottom" />
      <div className="flex flex-col">
        <div className="text-[#a5a6af] text-xs">"Put themselves in the merchant's shoes"</div>
        <div className="text-xs text-gray-200">Meta inc.</div>
      </div>
    </div>
  </div>

  {/* Right Content */}
  <div className="right-cont w-full lg:w-1/2 flex justify-center">
    <img className="w-full max-w-md md:max-w-lg lg:max-w-full h-auto" src={heroRightPic} alt="Hero" />
  </div>
</div>

    </>
  )
}

export default Hero;
 

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar