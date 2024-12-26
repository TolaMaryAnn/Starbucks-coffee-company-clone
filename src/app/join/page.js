"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../components/Footer";
import Link from "next/link";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function join() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hasPasswordText, setHasPasswordText] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setHasPasswordText(e.target.value.length > 0);
  };

  return (
    <div>
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
        Create an account
      </h2>

      <div className="text-center mt-12">
        <h3 className="text-lg font-extrabold text-green-800 mb-4">
          JOIN STARBUCKS® REWARDS
        </h3>
        <p className="text-black font-normal mb-6">
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile <br /> ordering, a birthday Reward, and
          moremore.
        </p>
     
      </div>
      <section className=" py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <p className="mb-8 text-lg text-black font-bold ">
            <span className="text-green-800">*</span> indicates required field
          </p>

          {/* Personal Information Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Personal Information
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  placeholder=" "
                  className="peer w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-4 top-3 text-gray-700 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-800 bg-white px-1"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  placeholder=" "
                  className="peer w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-4 top-3 text-gray-700 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-800 bg-white px-1"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
              </div>
            </div>
          </div>

          {/* Account Security Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Account Security
            </h3>
            <div className="relative mb-6">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-700 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-800 bg-white px-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mt-1">
                This will be your username.
              </p>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                onChange={handlePasswordChange}
                className="peer w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              />
              <label
                htmlFor="password"
                className={`absolute left-4 ${
                  hasPasswordText || showPassword
                    ? "top-[-10px] text-sm text-green-800"
                    : "top-3 text-base text-gray-700"
                } transition-all bg-white px-1`}
              >
                Password <span className="text-red-500">*</span>
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
              <p className="text-xs text-gray-500 mt-1">
                Create a password 8–25 characters long that includes at least
                one uppercase letter, one lowercase letter, one number, and one
                special character like an exclamation point or asterisk.
              </p>
            </div>
          </div>

          {/* Terms and Preferences */}
          <div className="mb-8">
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="appearance-none w-6 h-6 border border-gray-400 rounded-md checked:bg-green-800 focus:outline-none focus:ring focus:ring-green-500 transition-all"
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to the{" "}
                <a href="#" className="text-green-800 underline">
                  Starbucks® Rewards Terms
                </a>
                ,{" "}
                <a href="#" className="text-green-800 underline">
                  Starbucks Card Terms
                </a>{" "}
                and have read the{" "}
                <a href="#" className="text-green-800 underline">
                  Starbucks Privacy Statement
                </a>
                . <span className="text-red-500">*</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="text-lg bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring focus:ring-green-500"
              disabled={!termsAccepted}
            >
              Create Account
            </button>
          </div>
        </div>
      </section>

      <div className="my-8 border-t border-gray-300"></div>
      <Footer />
    </div>
  );
}
