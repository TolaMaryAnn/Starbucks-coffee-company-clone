"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from 'next/font/google';
import PageTransition from "@/PageTransition";



const lora = Lora ({
  subsets: ['latin'],
  weight: ['400', '700'], 
});


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Drinks");

  const menuData = {
    Drinks: [
      "Hot Coffees",
      "Cold Coffees",
      "BrewVista Refreshers",
      "Frappuccino",
      "Iced Tea",
      "Milk, Juice and more",
      "Bottled Beverages",
    ],
    Food: [
      "Hot Breakfast",
      "Oatmeal and Yogurt",
      "Bakery",
      "Lunch",
      "Snacks & Sweets",
    ],
    "At-Home Coffee": ["Whole Bean", "Ground Coffee", "Instant"],
    Merchandise: ["Cold Cups", "Tumblers", "Mugs", "Other"],
  };

  const menuItems = {
    Drinks: [
      {
        name: "Hot Coffees",
        image: "/Assets/cup-166778_1280-removebg-preview.png",
      },
      {
        name: "Cold Coffees",
        image:
          "/Assets/vecteezy_pumpkin-spice-latte-iced-coffee-background-photo_34222028-removebg-preview.png",
      },
      {
        name: "BrewVista Refreshers",
        image:
          "/Assets/vecteezy_chilled-java-duo-sipped-through-metal-against-a-dark_30321439-removebg-preview.png",
      },
      {
        name: "Frappuccino",
        image: "/Assets/coffee-5893926_1280-removebg-preview.png",
      },
      {
        name: "Iced Tea",
        image: "/Assets/drink-908356_1280-removebg-preview.png",
      },
      {
        name: "Milk, Juice and more",
        image: "/Assets/drink-3131322_1280-removebg-preview.png",
      },
      {
        name: "Bottled Beverages",
        image: "/Assets/beers-414914_1280-removebg-preview.png",
      },
    ],
    Food: [
      {
        name: "Hot Breakfast",
        image:
          "/Assets/vecteezy_ai-generated-grilled-pork-fresh-salad-homemade-bread-a_39624377-removebg-preview.png",
      },
      {
        name: "Oatmeal and Yogurt",
        image:
          "/Assets/vecteezy_ai-generated-oatmeal-with-butter-and-raisins_37346511-removebg-preview.png",
      },
      {
        name: "Bakery",
        image:
          "/Assets/vecteezy_bread-eggs-and-wheat_1226494-removebg-preview.png",
      },
      {
        name: "Lunch",
        image:
          "/Assets/vecteezy_fried-rice-in-a-plate-on-a-white-wooden-floor_3384440-removebg-preview.png",
      },
      {
        name: "Snacks & Sweets",
        image:
          "/Assets/vecteezy_chinese-desserts-chinese-pastry-bean-cake-snack-mix-nuts_5668040-removebg-preview.png",
      },
    ],
    "At-Home Coffee": [
      {
        name: "Whole Bean",
        image: "/Assets/top-view-coffee-beans-paper-bag.png",
      },
      {
        name: "Ground Coffee",
        image:
          "/Assets/vecteezy_ground-coffee-from-coffee-machine-isolated-on-white-background_6305859-removebg-preview.png",
      },
      {
        name: "Instant",
        image:
          "/Assets/vecteezy_instant-coffee-in-glass-bottle_2831065-removebg-preview.png",
      },
    ],
    Merchandise: [
      { name: "Cold Cups", image: "/Assets/rb_66776.png" },
      {
        name: "Tumblers",
        image: "/Assets/composition-different-colored-tumblers.png",
      },
      { name: "Mugs", image: "/Assets/rb_2490.png" },
      {
        name: "Others",
        image: "/Assets/composition-beautiful-tableware-table.png",
      },
    ],
  };

  return (
    <PageTransition>
    <div className={lora.className}> 
      <Navbar />
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <aside className="md:w-1/4 p-4 border-b md:border-r">
          {/* Top Navigation */}
          <nav className="flex space-x-4 mb-6 overflow-x-auto">
            {["Menu", "Featured", "Previous", "Favourite"].map((navItem) => (
              <button
                key={navItem}
                className="text-sm font-medium text-gray-600 hover:text-green-600 whitespace-nowrap"
              >
                {navItem}
              </button>
            ))}
          </nav>

          {/* Category List */}
          {Object.keys(menuData).map((category) => (
            <div key={category} className="mb-4">
              <h3
                className={`font-bold text-lg cursor-pointer mb-2 ${
                  activeCategory === category ? "text-green-600" : "text-black"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </h3>
              <ul className="ml-4 space-y-2">
                {menuData[category].map((subLink) => (
                  <li
                    key={subLink}
                    className="text-sm text-gray-600 hover:text-green-600"
                  >
                    {subLink}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Right Column */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">{activeCategory}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6 lg:gap-12 overflow-hidden md:overflow-visible">
            {/* Mobile: Horizontal Scroll */}
            <div className="flex md:hidden space-x-4 overflow-x-auto">
              {menuItems[activeCategory]?.map((item) => (
                <div
                  key={item.name}
                  className="min-w-[200px] flex-shrink-0 border rounded-full bg-green-900 shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-medium text-white">
                      {item.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-72">
              {menuItems[activeCategory]?.map((item) => (
                <div
                  key={item.name}
                  className="relative w-56 h-56 border rounded-full bg-green-900 shadow-lg overflow-hidden mx-auto"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-center p-4 bg-black bg-opacity-40">
                    <h2 className="text-lg font-medium text-white">
                      {item.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Menu;
