import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import user1 from "../Assets/Team/user1.png";
import user2 from "../Assets/Team/user2.png";
import user3 from "../Assets/Team/user3.png";
import user4 from "../Assets/Team/user4.png";

const Team = [
  { id: 1, image: user1, name: "Azah Anyeni", title: "Designer" },
  { id: 2, image: user2, name: "Roelof Bekkenenks", title: "React Developer" },
  { id: 3, image: user3, name: "Leonardo Oliveira", title: "Illustrator" },
  { id: 4, image: user4, name: "Izabella Tabakova", title: "Product Designer" },
];

const Our_Team = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);



  return (
    <div className="bg-[#1c1c2d] text-white px-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 2xl:px-20 py-10">
      <div className="p-4 sm:p-6 md:p-10 lg:p-12 xl:p-16">
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-xl text-[#ef6d58] uppercase tracking-widest mb-3">
            Our Team
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Team of Designers <br /> and Developers
          </h1>
        </div>

          <Swiper
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="relative"
          >
            {Team.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#26263a] rounded-xl pt-10 w-60 max-w-xs mx-auto flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 sm:w-40 sm:h-40 object-cover "
                  />
                </div>
                <div className="mt-4 text-center mb-10">
                  <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                  <span className="text-sm text-gray-400">{item.title}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>

      {/* Custom Pagination Styling */}
      <style>{`
        .swiper-pagination-bullet {
          background: #ef6d58 !important;
          opacity: 1 !important;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background: #ff4c3b !important;
        }
      `}</style>
    </div>
  );
};

export default Our_Team;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar