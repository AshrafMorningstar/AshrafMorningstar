import React, { useState } from "react";
import Affogato from "../../assets/Menu/affogato.jpg";
import Americano from "../../assets/Menu/americano.jpg";
import Cappuccino from "../../assets/Menu/cappuccino.jpg";
import Conpana from "../../assets/Menu/conpana.jpg";
import Espresso from "../../assets/Menu/espresso.jpg";
import Lungo from "../../assets/Menu/lungo.jpg";
import Mocha from "../../assets/Menu/mocha.jpg";
import Ristresto from "../../assets/Menu/ristresto.jpg";
import AnimatedButton from "../Motion/AnimatedButton";
import AnimatedCard from "../Motion/AnimatedCard"

const Menu_details = () => {
  const [activeTab, setActiveTab] = useState("black");

  const tabs = [
    { id: "black", label: "BLACK" },
    { id: "organic", label: "ORGANIC" },
    { id: "gold", label: "GOLD" },
    { id: "cream", label: "CREAM" },
    { id: "sweet", label: "SWEET" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Cappuccino",
      price: "$99.00",
      image: Cappuccino,
      categories: ["black", "gold"],
    },
    {
      id: 2,
      name: "Americano",
      price: "$149.00",
      image: Americano,
      categories: ["black", "gold"],
    },
    {
      id: 3,
      name: "Conpana",
      price: "$299.00",
      image: Conpana,
      categories: ["organic"],
    },
    {
      id: 4,
      name: "Affogato",
      price: "$349.00",
      image: Affogato,
      categories: ["organic", "sweet"],
    },
    {
      id: 5,
      name: "Espresso",
      price: "$399.00",
      image: Espresso,
      categories: ["gold", "black"],
    },
    {
      id: 6,
      name: "Ristresto",
      price: "$449.00",
      image: Ristresto,
      categories: ["cream"],
    },
    {
      id: 7,
      name: "Mocha",
      price: "$249.00",
      image: Mocha,
      categories: ["cream", "sweet"],
    },
    {
      id: 8,
      name: "Lungo",
      price: "$199.00",
      image: Lungo,
      categories: ["sweet", "black"],
    },
  ];

  // Filter items matching the active tab
  const filteredItems = menuItems
    .filter((item) => item.categories.includes(activeTab))
    .slice(0, 4); // max 4 items

  return (
    <div className="container mx-auto flex flex-col items-center py-10 px-4 md:px-10">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[90%] bg-[#5A3D3D] p-6 rounded-3xl shadow-lg transition-transform duration-500 hover:scale-[1.01]">
        {/* Tabs */}
        <ul className="flex flex-wrap justify-center sm:justify-between items-center px-4 sm:px-10 py-4 rounded-lg bg-[#614343] shadow-inner">
          {tabs.map((tab) => (
            <AnimatedButton>
              <li key={tab.id}>
                <button
                  className={`text-lg sm:text-xl md:text-2xl font-bold px-3 py-1 mx-1 transition-colors duration-300 ${
                    activeTab === tab.id
                      ? "text-[#EDAD55] border-b-2 border-[#EDAD55]"
                      : "text-[#F5E7CC] hover:text-[#EDAD55]"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            </AnimatedButton>
          ))}
        </ul>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <AnimatedCard>
                <div
                  key={item.id}
                  className="flex gap-6 items-center bg-[#6b4c4c] p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105"
                >
                  <div className="overflow-hidden rounded-xl w-[150px] md:w-[180px]">
                    <img
                      src={item.image}
                      alt={`${item.name} Image`}
                      className="rounded-xl transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <h1
                      className="text-2xl md:text-3xl text-[#ECAC55] tracking-wide font-bold mb-2"
                      style={{ fontFamily: "Anton, sans-serif" }}
                    >
                      {item.name}
                    </h1>
                    <p className="text-md text-[#DACAB5] mb-2">
                      Finally, a massive thanks to my family.
                    </p>
                    <p className="text-md text-[#DACAB5]">
                      Price:{" "}
                      <span className="text-[#E5594C] text-xl">
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))
          ) : (
            <p className="text-center text-[#F5E7CC] text-lg">
              No items available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu_details;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar