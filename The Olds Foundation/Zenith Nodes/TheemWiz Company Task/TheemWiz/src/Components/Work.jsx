import React from "react";

const Work = () => {
  return (
    <section className="bg-[#fdf0e9] px-6 md:px-12 lg:px-24 py-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20 border-b-1">
        {/* Left Section */}
        <div>
          <h4 className="text-[#ef6d58] tracking-widest text-sm uppercase mb-4">
            How We Work
          </h4>
          <h1 className="text-[#391400] text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Making Your Projects Look Awesome
          </h1>
          <p className="text-[#9f877a] text-base md:text-lg mb-8">
            Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.
          </p>
          <button className="text-[#391400] font-semibold hover:underline">
            Read More
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-17">
          {/* Item 1 */}
          <div className="flex items-center space-x-8">
            <p className="text-5xl md:text-7xl font-extrabold text-[#391400]">1</p>
            <p className="text-lg md:text-xl font-bold text-[#391400]">
              Full service range including
            </p>
          </div>
          {/* Item 2 */}
          <div className="flex items-center space-x-8">
            <p className="text-5xl md:text-7xl font-extrabold text-[#391400]">2</p>
            <p className="text-lg md:text-xl font-bold text-[#391400]">
              Technical skills, design, business
            </p>
          </div>
          {/* Item 3 */}
          <div className="flex items-center space-x-8">
            <p className="text-5xl md:text-7xl font-extrabold text-[#391400]">3</p>
            <p className="text-lg md:text-xl font-bold text-[#391400]">
              Themselves in the merchant's
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar