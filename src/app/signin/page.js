"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Lora } from 'next/font/google';
import PageTransition from "@/PageTransition";
const lora = Lora ({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [hasText, setHasText] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setHasText(e.target.value.length > 0);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <PageTransition>
    <div className={lora.className}>
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
        </div>
      </header>

      <h2 className="text-3xl font-extrabold text-center text-black mt-10 ">
        Sign in or create an account
      </h2>

      <section className="py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="mb-8 text-lg text-black font-bold">
            <span className="text-green-800">*</span> indicates required field
          </div>
          <form>
            <div className="relative mb-6">
              <input
                type="text"
                id="username"
                placeholder=" "
                className="peer w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              />
              <label
                htmlFor="username"
                className="absolute left-4 top-3 text-gray-700 text-2xl transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xl peer-placeholder-shown:text-black peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-800 bg-white px-1"
              >
                <span className="text-green-800">*</span> Username or email
                address
              </label>
            </div>

            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                onChange={handleInputChange}
                className="peer w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              />
              <label
                htmlFor="password"
                className={`absolute left-4 ${
                  hasText || showPassword
                    ? "top-[-10px] text-sm text-green-800"
                    : "top-3 text-xl text-black"
                } transition-all duration-300 bg-white px-1`}
              >
                <span className="text-green-800">*</span> Password
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="appearance-none w-6 h-6 border border-gray-400 rounded-md checked:bg-green-800 checked:border-green-800 checked:focus:ring-green-500 focus:outline-none focus:ring focus:ring-green-500 flex-shrink-0 transition-all duration-300 relative 
  before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-white before:rounded-sm before:scale-0 checked:before:scale-100"
                />
                <span className="text-black font-bold ml-4 font-normal">
                  Keep me signed in.
                </span>
              </label>
              <a
                href="#details"
                className="text-green-800 font-extrabold hover:underline text-lg"
              >
                Details
              </a>
            </div>

            <div className="flex flex-col font-extrabold gap-2 mb-6">
              <a
                href="#forgot-username"
                className="text-green-800 hover:underline text-lg underline"
              >
                Forgot your username?
              </a>
              <a
                href="#forgot-password"
                className="text-green-800 hover:underline text-lg underline"
              >
                Forgot your password?
              </a>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full focus:outline-none focus:ring focus:ring-green-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="my-8 border-t border-gray-300"></div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-lg font-extrabold text-green-800 mb-4">
            JOIN STARBUCKS® REWARDS
          </h3>
          <p className="text-black font-normal mb-6">
            Join Starbucks® Rewards to earn free food and drinks, get free
            refills, pay <br /> and order with your phone, and more.
          </p>
          <button className=" border border-green-800 hover:bg-gray-200 text-green-800 font-bold py-2 px-6 rounded-full focus:outline-none focus:ring focus:ring-gray-500">
            Join now
          </button>
        </div>
      </section>

      <div className="my-8 border-t border-gray-300"></div>
      <Footer />
    </div>
    </PageTransition>
  );
}
