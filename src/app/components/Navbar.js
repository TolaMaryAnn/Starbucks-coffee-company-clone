"use client"; 

import { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container flex items-center justify-between py-4 px-6 md:px-10">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <img
              src="/Assets/Starbucks_Corporation_Logo_2011.svg"
              alt="Starbucks Logo"
              className="h-12 md:h-16 cursor-pointer"
            />
          </Link>

          <div className="hidden md:flex space-x-10">
            <Link
              href="/menu"
              className="text-black font-bold text-sm tracking-wide hover:text-green-800"
            >
              MENU
            </Link>
            <Link
              href="/rewards"
              className="text-black font-bold text-sm tracking-wide hover:text-green-800"
            >
              REWARDS
            </Link>
            <Link
              href="/giftCards"
              className="text-black font-bold text-sm tracking-wide hover:text-green-800"
            >
              GIFT CARDS
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/storeLocator" className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-black hover:text-green-800 text-2xl" />
            <span className="text-black font-bold text-sm tracking-wide hover:text-green-800">
              Find a store
            </span>
          </Link>
          <Link
            href="/signin"
            className="text-black text-sm hover:bg-gray-200 border border-black px-4 py-2 rounded-full"
          >
            Sign In
          </Link>
          <Link
            href="/join"
            className="bg-black text-white px-4 py-2 text-sm rounded-full hover:bg-green-800"
          >
            Join Now
          </Link>
        </div>

        <button
          className="md:hidden text-black text-4xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-6 text-black text-4xl"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            href="/menu"
            className="text-black text-lg font-bold tracking-wide hover:text-green-800"
            onClick={() => setMenuOpen(false)}
          >
            MENU
          </Link>
          <Link
            href="/rewards"
            className="text-black text-lg font-bold tracking-wide hover:text-green-800"
            onClick={() => setMenuOpen(false)}
          >
            REWARDS
          </Link>
          <Link
            href="/giftCards"
            className="text-black text-lg font-bold tracking-wide hover:text-green-800"
            onClick={() => setMenuOpen(false)}
          >
            GIFT CARDS
          </Link>

          <Link
            href="/signin"
            className="text-black border border-black px-4 py-2 rounded-full hover:bg-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/join"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-green-800"
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </Link>
          <Link
            href="/storeLocator"
            className="text-black text-xl font-bold tracking-wide hover:text-green-800 flex items-center space-x-2"
            onClick={() => setMenuOpen(false)}
          >
            <FaMapMarkerAlt className="text-black text-2xl" />
            <span>Find a store</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
