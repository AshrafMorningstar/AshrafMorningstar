import React from "react";
import mapImage from "../Assets/Contact/map.png";

const Contact = () => {
  return (
    <>
      <div
        className="py-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mapImage})` }}
      >
        <div className="px-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 2xl:px-35 py-15">
          <div className="bg-white w-full max-w-md p-8 sm:p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-5 text-black">Get In Touch</h1>
            <form className="flex flex-col">
              <input
                className="text-base sm:text-lg bg-gray-100 w-full py-2 px-4 mb-6 border border-[#f3d1bf] rounded-lg"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <select
                className="text-base sm:text-lg bg-gray-100 w-full py-2 px-4 mb-6 border border-[#f3d1bf] rounded-lg"
                name="subject"
                id="subject"
                defaultValue=""
              >
                <option value="">Subjects</option>
                <option value="web Development">Web Development</option>
                <option value="data science">Data Science</option>
                <option value="android development">Android Development</option>
                <option value="object oriented">Object Oriented</option>
                <option value="networking">Networking</option>
              </select>
              <textarea
                className="text-base sm:text-lg bg-gray-100 w-full py-2 px-4 mb-6 border border-[#f3d1bf] rounded-lg resize-none"
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
              ></textarea>
              <div className="flex justify-end">
                <button
                  className="text-sm sm:text-base font-bold bg-[#ef6d58] text-white py-2 px-6 rounded-lg hover:bg-[#d85b4a] transition"
                  type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar