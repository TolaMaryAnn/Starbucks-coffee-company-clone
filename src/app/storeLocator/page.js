"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";
import { Lora } from "next/font/google";
import PageTransition from "@/PageTransition";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function StoreLocator() {
  const [activeTab, setActiveTab] =
    useState("pickup");

  return (
    <PageTransition>
      <div
        className={`${lora.className} min-h-screen bg-[#f8f6f2]`}
      >
        <Navbar />

        {/* HERO */}
        <section className="pt-12 md:pt-16 pb-8 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-[0.25em] text-sm text-[#b38728] font-semibold mb-4">
              Store Locator
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-[#1e3932] leading-tight mb-5">
              Find the nearest BrewVista store
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-7 max-w-2xl mx-auto">
              Search for nearby stores, pickup options,
              and delivery availability anytime.
            </p>
          </div>
        </section>

        {/* TABS */}
        <div className="sticky top-[72px] z-40 px-4 md:px-6 mb-6">
          <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-full p-1 shadow-md flex w-full">
            <button
              onClick={() => setActiveTab("pickup")}
              className={`w-1/2 h-[52px] rounded-full text-sm md:text-base font-semibold transition-all duration-300 flex items-center justify-center ${activeTab === "pickup"
                ? "bg-[#1e3932] text-white shadow-md"
                : "text-gray-600"
                }`}
            >
              Pickup
            </button>

            <button
              onClick={() => setActiveTab("delivery")}
              className={`w-1/2 h-[52px] rounded-full text-sm md:text-base font-semibold transition-all duration-300 flex items-center justify-center ${activeTab === "delivery"
                ? "bg-[#1e3932] text-white shadow-md"
                : "text-gray-600"
                }`}
            >
              Delivery
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <section className="px-4 md:px-6 pb-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT PANEL */}
            <div className="bg-white rounded-[30px] border border-gray-100 shadow-[0_20px_70px_rgba(0,0,0,0.08)] overflow-hidden">
              {activeTab === "pickup" && (
                <div className="p-5 md:p-8 h-full flex flex-col">
                  {/* HEADER */}
                  <div className="mb-8">
                    <p className="uppercase tracking-[0.2em] text-[#b38728] text-xs font-bold mb-3">
                      Pickup Locations
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3932] mb-3">
                      Find a store
                    </h2>

                    <p className="text-gray-500 text-sm leading-7">
                      Search for nearby BrewVista stores
                      and pickup locations in your area.
                    </p>
                  </div>

                  {/* SEARCH */}
                  <div className="relative mb-10">
                    <input
                      type="text"
                      placeholder="Search for a store"
                      className="w-full h-[60px] rounded-2xl border border-gray-300 bg-[#fafafa] pl-5 pr-14 text-sm focus:outline-none focus:border-[#1e3932] focus:ring-4 focus:ring-green-100 transition"
                    />

                    <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  </div>

                  {/* EMPTY STATE */}
                  <div className="flex-grow flex flex-col justify-center items-center text-center py-12">
                    <div className="w-24 h-24 rounded-full bg-[#f8f6f2] flex items-center justify-center mb-6">
                      <FaSearch className="text-[#1e3932] text-3xl" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#1e3932] mb-3">
                      No stores found
                    </h3>

                    <p className="text-gray-500 max-w-sm leading-7 text-sm md:text-base mb-8">
                      We couldn't find any stores near
                      your current search. Try expanding
                      your search area.
                    </p>

                    <button className="bg-[#1e3932] hover:bg-[#163028] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
                      Expand Search
                    </button>
                  </div>
                </div>
              )}

              {/* DELIVERY PANEL */}
              {activeTab === "delivery" && (
                <div className="h-full flex flex-col">
                  {/* TOP */}
                  <div className="bg-gradient-to-br from-[#1e3932] to-[#295140] p-8 md:p-10 text-center">
                    <p className="uppercase tracking-[0.2em] text-[#d4a853] text-xs font-bold mb-3">
                      Delivery Available
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                      Today deserves
                      <br />
                      delivery
                    </h2>

                    <p className="text-white/75 text-sm md:text-base leading-7 max-w-md mx-auto">
                      Enjoy BrewVista delivery powered by
                      DoorDash. Fresh coffee and favorites
                      delivered right to your door.
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="flex-grow bg-[#f8f6f2] flex items-center justify-center p-8">
                    <img
                      src="/Assets/delivery-hero.png"
                      alt="Delivery"
                      className="w-full max-w-md object-contain"
                    />
                  </div>

                  {/* BOTTOM */}
                  <div className="p-6 md:p-8 border-t border-gray-100 text-center">
                    <button className="w-full md:w-auto bg-[#1e3932] hover:bg-[#163028] text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
                      Get Started
                    </button>

                    <p className="text-xs text-gray-500 leading-6 mt-6 max-w-lg mx-auto">
                      Menu availability and pricing may
                      vary for delivery. Additional fees
                      may apply. Delivery purchases may
                      not qualify for Rewards benefits.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT PANEL */}
            <div className="bg-white rounded-[30px] border border-gray-100 shadow-[0_20px_70px_rgba(0,0,0,0.08)] overflow-hidden min-h-[450px] lg:min-h-[760px]">
              {activeTab === "pickup" && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0836070074997!2d8.868978474942978!3d9.89652719291814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105375f0d68f9573%3A0x87cf9f5bb1c4214d!2sJos%2C%20Plateau%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1695540716017!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="w-full h-full border-0"
                ></iframe>
              )}

              {activeTab === "delivery" && (
                <div className="h-full bg-gradient-to-br from-[#1e3932] to-[#295140] relative overflow-hidden flex items-center justify-center p-8">
                  {/* GLOW */}
                  <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"></div>

                  <img
                    src="/Assets/delivery-hero.png"
                    alt="Delivery Hero"
                    className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}