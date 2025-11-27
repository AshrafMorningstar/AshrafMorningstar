import React from "react";
import { Link } from "react-router-dom";
import Gallery1 from "../../assets/Menu/gallery-1.jpg";
import Gallery2 from "../../assets/Menu/gallery-2.jpg";
import Gallery3 from "../../assets/Menu/gallery-3.jpg";
import Gallery4 from "../../assets/Menu/gallery-4.jpg";
import Gallery5 from "../../assets/Menu/gallery-5.jpg";
import Gallery6 from "../../assets/Menu/gallery-6.jpg";
import AnimatedButton from "../Motion/AnimatedButton";
import { motion } from "framer-motion";
import {  fadeIn } from "../../utils/motionVariants";

const images = [
  { src: Gallery1, alt: "Gallery Image 1", height: "h-100" },
  { src: Gallery2, alt: "Gallery Image 2", height: "h-120" },
  { src: Gallery3, alt: "Gallery Image 3", height: "h-120" },
  { src: Gallery4, alt: "Gallery Image 4", height: "h-100" },
  { src: Gallery5, alt: "Gallery Image 5", height: "h-100" },
  { src: Gallery6, alt: "Gallery Image 6", height: "h-120" },
];
2;
const Gallery_Images = () => {
  return (
    <div className="py-10 px-10">
      <div className="flex justify-center flex-wrap gap-10 py-8 items-center px-20">
        {images.map((img, index) => (
          <motion.div
            variants={ fadeIn}
            initial="hidden"
            animate="visible"
            key={index}
            className={`relative w-150 ${img.height} rounded-lg overflow-hidden shadow-xl shadow-[#f8d290]
                       before:content-[''] before:absolute before:left-0 before:top-0 
                       before:w-full before:h-0 before:bg-[#614343c4] before:transition-all before:duration-500
                       hover:before:h-full`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}

        <AnimatedButton onClick={() => {}} disabled>
          <button
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-white bg-[#e4594d] 
          shadow-lg hover:bg-[#f8d290] hover:text-black transition duration-500 ease-in-out"
          >
            <Link to={"/gallery"}>LOAD MORE IMAGES</Link>
          </button>
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Gallery_Images;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar