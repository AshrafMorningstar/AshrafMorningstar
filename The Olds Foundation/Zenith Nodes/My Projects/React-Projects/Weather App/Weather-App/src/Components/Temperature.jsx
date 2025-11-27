import React from "react";

function Temperature({setCity, stats}) {

  const handleCityName = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      {/* this input is location input */}
      <div className="location_container flex justify-center align-middle">
        <input
          className="location_input bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400
        text-2xl w-60 p-2 focus:outline-none focus-border-slate-400 block rounded-xl "
          placeholder="Enter Your City"
          onChange={handleCityName}
          defaultValue="Mumbai"
        />
        <div className="location_icon m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-10 text-transform scale-100 hover:scale-110 transition-transform duration-300  ease-in-out cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
      </div>

      {/* this div is for sun and moon icon */}
      <div className="sun-moon_icon flex justify-center">
        {stats.isDay !== 0 ?(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14  mt-6 text-yellow-300  text-transform scale-100 hover:scale-110 transition-transform duration-300  ease-in-out cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
        ):
        (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 mt-6 text-slate-200 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
        )}
      </div>

      {/* this div is for to show degree and temperature  */}
      <div className="degree_temperature flex justify-center item-center text-slate-200 mt-4 text-transform scale-100 hover:scale-110 transition-transform duration-300  ease-in-out cursor-pointer">
        <p className="text-[45px] font-semibold">{stats.temp}</p>
        <span className="text-[33px]">°C</span>
      </div>

      {/* condition din */}
      <div className="condition flex justify-center text-center text-slate-300 mt-4 lg:text-2xl text-transform scale-100 hover:scale-110 transition-transform duration-300  ease-in-out cursor-pointer">
        {stats.condition}
      </div>

      {/* date and time Div */}
      <div className="date&time flex justify-center text-slate-400 mt-4 text-[17px]">
        Today &#183; {stats.time} | {stats.location}
      </div>
    </>
  );
}

export default Temperature;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar