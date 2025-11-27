import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo_light from "../assets/Navbar/logo_Light_Mode.png";
import AnimatedButton from "../Components/Motion/AnimatedButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed   top-0 left-0 w-full z-50 bg-[#452625] flex justify-between items-center py-4 pl-8  md:pl-32 pr-6 drop-shadow-md">
        <Link to={"/home"}>
          <img
            src={logo_light}
            alt="navbar Logo"
            className="w-30 hover:scale-110 transition duration-700 ease-in-out"
          />
        </Link>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base list-none text-white">
          <li className="px-2 py-1 hover:bg-[#E6D3C2] hover:text-black  text-xl font-bold transition duration-700 ease-in-out rounded-md">
            <Link to={"/menu"}>Menu</Link>
          </li>

          <li className="px-2 py-1 hover:bg-[#E6D3C2] hover:text-black text-xl font-bold transition duration-700 ease-in-out rounded-md">
            <Link to={"/gallery"}>Gallery</Link>
          </li>

          <li className="px-2 py-1 hover:bg-[#E6D3C2] hover:text-black text-xl font-bold transition duration-700 ease-in-out rounded-md">
            <Link to={"/reservation"}> Reservation</Link>
          </li>
          <li className="px-2 py-1 hover:bg-[#E6D3C2] hover:text-black text-xl font-bold transition duration-700 ease-in-out rounded-md">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>

        <ul className="flex items-center justify-center gap-5 ml-10 sm:ml-5 list-none">
          {/* HIRE ME Button */}
          <AnimatedButton >
            <li className="px-3 py-1 bg-[#E4594D] text-white hover:bg-[#E6D3C2] hover:text-black text-base sm:text-md md:text-lg lg:text-xl font-bold transition duration-700 ease-in-out rounded-md">
              <a
                href="/VikramResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-1 bg-[#E4594D] text-white hover:bg-[#E6D3C2] hover:text-black text-base sm:text-md md:text-lg lg:text-xl font-bold transition duration-700 ease-in-out rounded-md"
              >
                HIRE ME
              </a>
            </li>
          </AnimatedButton>

          {/* Hamburger Icon (Mobile) */}
          <div className="relative w-10 h-10 ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="w-full h-full relative"
            >
              {/* Menu Icon */}
              <Menu
                className={`w-10 h-10 text-white absolute top-0 left-0 transform transition-all duration-500 ease-in-out ${
                  isMenuOpen
                    ? "opacity-0 rotate-180 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              {/* X Icon */}
              <X
                className={`w-10 h-10 text-white absolute top-0 left-0 transform transition-all duration-500 ease-in-out ${
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-180 scale-75"
                }`}
              />
            </button>
          </div>
        </ul>

        {/* this is social Icon section */}
        <div
          className={`hidden xl:flex absolute top-[80px] right-0 bg-transparent flex-col items-center font-bold text-xl transform duration-700 ease-in-out transition-transform z-40 ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.2s ease" }}
        >
          {/* icons div */}
          <div className="flex flex-col justify-between items-center gap-5 ">
            {/* blank div 1 */}
            <div className="w-2 h-50 mt-5 bg-[#B1661F] rounded-2xl"></div>

            {/* social media icons section */}
            <ul className="gap-5 pb-3 pr-3 flex flex-col">
              <li className="text-2xl font-bold">
                <a
                  href="Ashraf Morningstar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin hover:scale-110 rounded-full p-2.5 bg-[#e5584d] hover:bg-[#e6d3c2] hover:text-black transition duration-1000 ease-in-out"></i>
                </a>
              </li>
              <li className="text-2xl font-bold">
                <a
                  href="https://x.com/AMS_Morningstar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter hover:scale-110 rounded-full  p-2 bg-[#e5584d] hover:bg-[#e6d3c2] hover:text-black  transition duration-1000 ease-in-out"></i>
                </a>
              </li>
              <li className="text-[27px] font-bold">
                <a
                  href="https://github.com/AshrafMorningstar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-telegram hover:scale-110 rounded-full  p-2 bg-[#e5584d] hover:bg-[#e6d3c2] hover:text-black  transition duration-1000 ease-in-out"></i>
                </a>
              </li>
            </ul>
            {/* blank div 2 */}
            <div className="w-2 h-50 mb-5 bg-[#B1661F] rounded-2xl"></div>
          </div>
        </div>

        {/* this is for mobile navbar section */}
        <div
          className={`absolute xl:hidden top-[80px] right-4 sm:right-4 w-[60%] lg:w-[30%] md:w-[30%] bg-[#714323e9] rounded-xl flex flex-col items-center font-bold text-xl transform duration-700 ease-in-out transition-transform z-40 ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.2s ease" }}
        >
          <li
            onClick={() => setIsMenuOpen(false)}
            className="inline-block p-1 w-full text-[#E6D3C2] text-center hover:bg-[#D7B899] hover:text-black"
          >
            <Link to={"/menu"}>● Menu</Link>
          </li>
          <li
            onClick={() => setIsMenuOpen(false)}
            className="inline-block p-1 w-full text-[#E6D3C2] text-center hover:bg-[#D7B899] hover:text-black"
          >
            <Link to={"/gallery"}>● Gallery</Link>
          </li>
          <li
            onClick={() => setIsMenuOpen(false)}
            className="inline-block p-1 w-full text-[#E6D3C2] text-center hover:bg-[#D7B899] hover:text-black"
          >
            <Link to={"/reservation"}>● Reservation</Link>
          </li>
          <li
            onClick={() => setIsMenuOpen(false)}
            className="inline-block p-1 w-full text-[#E6D3C2] text-center hover:bg-[#D7B899] hover:text-black"
          >
            <Link to={"/contact"}>● Contact Us</Link>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar