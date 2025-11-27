import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import user1 from "../../assets/User/user-1.jpg";
import user2 from "../../assets/User/user-2.jpg";
import user3 from "../../assets/User/user-3.jpg";
import user4 from "../../assets/User/user-4.jpg";
import user5 from "../../assets/User/user-5.jpg";

const testimonials = [
  { id: 1, image: user1, name: "Jonathan Doe", title: "Marketing Manager", text: `“This coffee shop is a hidden gem! The aroma when you walk in is intoxicating, and the baristas are true artists. Every cup feels like it’s crafted just for me. I now make it a point to stop by every morning — it’s the best way to start the day!”` },
  { id: 2, image: user2, name: "Sarah Lee", title: "Product Designer", text: `“I absolutely love the cozy atmosphere here. The seating is comfortable, the playlists are perfect, and the coffee — wow! Smooth, rich, and perfectly brewed every time. I often bring my laptop and spend hours working here.”` },
  { id: 3, image: user3, name: "Michael Chen", title: "Software Engineer", text: `“Hands down the best coffee in the city. I’m a bit of a coffee snob, and this place consistently delivers top-tier brews. The variety is impressive, and the seasonal specials always surprise me. Plus, the staff is super friendly!”` },
  { id: 4, image: user4, name: "Emily Johnson", title: "Photographer", text: `“This café has such a warm and welcoming vibe. I often come here with friends to catch up over lattes, and we always leave happy. The pastries are fresh and delicious too — you can tell they put care into every detail.”` },
  { id: 5, image: user5, name: "David Smith", title: "Entrepreneur", text: `“Perfect spot for meetings or solo work sessions. The Wi-Fi is reliable, the ambiance is relaxed yet professional, and the coffee keeps me fueled all day. I’ve brought several business contacts here, and they’ve all been impressed.”` }
];

const Reservation_Testimonial = () => {
  return (
    <section className="bg-cover bg-center py-16 px-4 md:px-8">
      <div className="text-center mb-8">
        <span className="w-fit text-lg md:text-xl py-1 px-3 rounded-lg font-bold mb-4 bg-[#E5594C]">TESTIMONIAL</span>
        <h2 className="text-3xl font-bold text-[#f8d091] mt-4">OUR CUSTOMER REVIEW</h2>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={50}
          slidesPerView={1}
          className="testimonial-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className=" p-6 rounded-lg text-center text-white">
                <div className="font-bold text-[#f8d091] text-[110px]">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p className="mb-6 text-[#f8d091] text-base md:text-lg lg:text-xl">{item.text}</p>
                <div className="flex flex-col items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full mb-2" />
                  <h4 className="font-bold uppercase mb-2 text-[#f8d091] text-lg md:text-xl">{item.name}</h4>
                  <span className="font-bold text-[#f8d091] text-sm md:text-lg mb-5">{item.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reservation_Testimonial;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar