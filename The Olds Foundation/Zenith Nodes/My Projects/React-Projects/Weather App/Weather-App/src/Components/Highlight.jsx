import React from "react";

function Highlight({stats}) {
  return (
    <>
      {/* contain-1 */}
      <div className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-center rounded-3xl text-transform scale-100 hover:scale-110 transition-transform duration-300  ease-in-out">
        <h1 className="text-xl mt-2">{stats.title}</h1>

        <div className="mt-2">
          {" "}
          <span className="text-4xl font-bold text-slate-200">{stats.value}</span>
          <span className="text-2xl">{stats.unit}</span>
        </div>
 
         {
          stats.direction ? (
            <div className="mt-2 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-slate-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <span className="text-slate-200 ms-2 text-xl">{stats.direction}</span>
        </div>
          ): null
         } 

       {
        stats.title =="Humidity" ? (
          <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: `${stats.value}%` }}
            ></div>
        </div>
        ):null
       }


      </div>
    </>
  );
}

export default Highlight;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar