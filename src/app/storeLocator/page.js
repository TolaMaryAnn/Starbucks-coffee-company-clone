"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { Lora } from 'next/font/google';
import PageTransition from "@/PageTransition";
const lora = Lora ({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function StoreLocator() {
  const [activeTab, setActiveTab] = useState("pickup");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <PageTransition>
   <div className={lora.className}>
     <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="sticky top-0 z-50 ">
        <div className="container mx-auto px-4 py-6">
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => handleTabSwitch("pickup")}
              className={`px-12 py-4 text-lg font-bold rounded-full focus:outline-none focus:ring focus:ring-green-500 transition-all duration-300 ${
                activeTab === "pickup"
                  ? "bg-green-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Pickup
            </button>
            <button
              onClick={() => handleTabSwitch("delivery")}
              className={`px-12 py-4 text-lg font-bold rounded-full focus:outline-none focus:ring focus:ring-green-500 transition-all duration-300 ${
                activeTab === "delivery"
                  ? "bg-green-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Delivery
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-10 flex flex-col md:flex-row h-[calc(100vh-6rem)]">
        <div className="w-full md:w-1/2 h-full">
          {activeTab === "pickup" && (
            <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Find a store
              </h2>
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search for a store"
                  className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring focus:ring-green-500"
                />
                <FaSearch className="absolute top-3 right-4 text-gray-400" />
              </div>

              <div className="mt-6 text-center text-4xl font-bold text-black flex-grow flex items-center justify-center">
                No stores were found.
              </div>
              <div className=" text-center text-black text-lg flex-grow flex items-center justify-center">
                Do you want to look further away?
              </div>
              <div className="mt-6 flex justify-center">
                <button className="bg-green-800 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500">
                  Expand Search
                </button>
              </div>
            </div>
          )}
          {activeTab === "delivery" && (
            <div className="bg-white shadow-lg text-center rounded-lg p-6 h-full flex flex-col">
              <h2 className="text-3xl font-bold text-bold mb-4">
                Today deserves delivery
              </h2>
              <p className="text-black mt-6 mb-6 flex-grow">
                Enjoy Starbucks® delivery powered by DoorDash. For additional
                help, visit{" "}
                <span className="underline text-green-800 font-bold">
                  Delivery FAQs.
                </span>
              </p>
              <div className="flex justify-center">
                <button className="bg-green-800 text-white px-8 py-6 rounded-full font-bold hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500">
                  Get started
                </button>
              </div>

              <div className="mt-6 text-lg font-normal ">
                Menu limited. Menu pricing for delivery may be higher than
                posted in stores or as marked. Additional fees may apply.
                Delivery orders are not eligible for Starbucks® Rewards benefits
                at this time.
              </div>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 h-full">
          {activeTab === "pickup" && (
            <div className="bg-gray-200 h-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0836070074997!2d8.868978474942978!3d9.89652719291814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105375f0d68f9573%3A0x87cf9f5bb1c4214d!2sJos%2C%20Plateau%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1695540716017!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          )}

          {activeTab === "delivery" && (
            <div className="relative h-full flex items-center bg-gray-200  overflow-hidden">
              <div className="absolute inset-0">
                <div className="bg-green-800 h-1/2"></div>
                <svg
                  className="absolute bottom-[-20%] w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#E5E7EB"
                    fillOpacity="1"
                    d="M0,288L30,272C60,256,120,224,180,202.7C240,181,300,171,360,176C420,181,480,203,540,192C600,181,660,139,720,133.3C780,128,840,160,900,176C960,192,1020,192,1080,176C1140,160,1200,128,1260,112C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                  ></path>
                </svg>
              </div>

              <div className="relative z-10 w-full h-full flex justify-center items-center">
                <img
                  src="/Assets/delivery-hero.png"
                  alt="Delivery Hero"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
   </div>
   </PageTransition>
  );
}
