"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../components/Footer";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Lora } from "next/font/google";
import PageTransition from "@/PageTransition";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Join() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hasPasswordText, setHasPasswordText] =
    useState(false);
  const [termsAccepted, setTermsAccepted] =
    useState(false);

  return (
    <PageTransition>
      <div
        className={`${lora.className} min-h-screen bg-[#f8f6f2]`}
      >
        {/* HEADER */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
            <Link href="/">
              <img
                src="/Assets/Starbucks_Corporation_Logo_2011.svg"
                alt="Logo"
                className="h-10 md:h-14 cursor-pointer"
              />
            </Link>

            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu />
            </button>
          </nav>

          {/* MOBILE MENU */}
          <div
            className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${menuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible"
              }`}
          >
            <div
              className={`absolute right-0 top-0 h-full w-[80%] bg-white shadow-2xl transition-transform duration-300 ${menuOpen
                  ? "translate-x-0"
                  : "translate-x-full"
                }`}
            >
              <div className="flex justify-end p-5">
                <button
                  className="text-3xl"
                  onClick={() => setMenuOpen(false)}
                >
                  <FiX />
                </button>
              </div>

              <div className="px-6 flex flex-col gap-6 mt-6">
                <Link
                  href="/"
                  className="text-lg font-semibold"
                >
                  Home
                </Link>

                <Link
                  href="/rewards"
                  className="text-lg font-semibold"
                >
                  Rewards
                </Link>

                <Link
                  href="/menu"
                  className="text-lg font-semibold"
                >
                  Menu
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="pt-14 md:pt-20 pb-10 px-5">
          <div className="max-w-2xl mx-auto text-center">
            <p className="uppercase tracking-[0.25em] text-sm text-[#b38728] font-semibold mb-4">
              BrewVista Rewards
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-[#1e3932] leading-tight mb-5">
              Create your account
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-7 max-w-xl mx-auto">
              Earn Stars for free drinks and food, unlock
              birthday rewards, order ahead, and enjoy
              exclusive member perks.
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="pb-16 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-[30px] border border-gray-100 shadow-[0_20px_70px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* TOP STRIP */}
            <div className="bg-[#1e3932] px-6 md:px-10 py-5">
              <p className="text-sm text-white/80">
                <span className="text-[#d4a853]">*</span>{" "}
                indicates required field
              </p>
            </div>

            <div className="p-5 md:p-10">
              {/* PERSONAL INFO */}
              <div className="mb-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#1e3932] mb-2">
                    Personal Information
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Tell us a little about yourself.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* FIRST NAME */}
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      placeholder=" "
                      className="peer w-full h-[62px] px-4 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:border-[#1e3932] focus:ring-4 focus:ring-green-100 transition"
                    />

                    <label
                      htmlFor="firstName"
                      className="absolute left-4 top-5 text-gray-500 bg-white px-1 transition-all duration-200
                      peer-placeholder-shown:top-5
                      peer-focus:-top-2.5
                      peer-focus:text-sm
                      peer-focus:text-[#1e3932]
                      peer-not-placeholder-shown:-top-2.5
                      peer-not-placeholder-shown:text-sm"
                    >
                      First Name{" "}
                      <span className="text-red-500">
                        *
                      </span>
                    </label>
                  </div>

                  {/* LAST NAME */}
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      placeholder=" "
                      className="peer w-full h-[62px] px-4 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:border-[#1e3932] focus:ring-4 focus:ring-green-100 transition"
                    />

                    <label
                      htmlFor="lastName"
                      className="absolute left-4 top-5 text-gray-500 bg-white px-1 transition-all duration-200
                      peer-placeholder-shown:top-5
                      peer-focus:-top-2.5
                      peer-focus:text-sm
                      peer-focus:text-[#1e3932]
                      peer-not-placeholder-shown:-top-2.5
                      peer-not-placeholder-shown:text-sm"
                    >
                      Last Name{" "}
                      <span className="text-red-500">
                        *
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* ACCOUNT SECURITY */}
              <div className="mb-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#1e3932] mb-2">
                    Account Security
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Keep your account safe and secure.
                  </p>
                </div>

                {/* EMAIL */}
                <div className="relative mb-6">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full h-[62px] px-4 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:border-[#1e3932] focus:ring-4 focus:ring-green-100 transition"
                  />

                  <label
                    htmlFor="email"
                    className="absolute left-4 top-5 text-gray-500 bg-white px-1 transition-all duration-200
                    peer-placeholder-shown:top-5
                    peer-focus:-top-2.5
                    peer-focus:text-sm
                    peer-focus:text-[#1e3932]
                    peer-not-placeholder-shown:-top-2.5
                    peer-not-placeholder-shown:text-sm"
                  >
                    Email Address{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <p className="text-xs text-gray-500 mt-2 ml-1">
                    This will be your username.
                  </p>
                </div>

                {/* PASSWORD */}
                <div className="relative">
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    id="password"
                    placeholder=" "
                    onChange={(e) =>
                      setHasPasswordText(
                        e.target.value.length > 0
                      )
                    }
                    className="peer w-full h-[62px] px-4 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:border-[#1e3932] focus:ring-4 focus:ring-green-100 transition"
                  />

                  <label
                    htmlFor="password"
                    className={`absolute left-4 bg-white px-1 transition-all duration-200 ${hasPasswordText || showPassword
                        ? "-top-2.5 text-sm text-[#1e3932]"
                        : "top-5 text-gray-500"
                      }`}
                  >
                    Password{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-5 text-gray-500 hover:text-black"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="w-5 h-5" />
                    ) : (
                      <FaEye className="w-5 h-5" />
                    )}
                  </button>

                  <div className="mt-3 bg-[#f8f6f2] border border-[#ece6dc] rounded-2xl p-4">
                    <p className="text-xs text-gray-600 leading-6">
                      Your password should be 8–25
                      characters and include at least:
                    </p>

                    <ul className="text-xs text-gray-600 mt-2 space-y-1 list-disc ml-5">
                      <li>One uppercase letter</li>
                      <li>One lowercase letter</li>
                      <li>One number</li>
                      <li>
                        One special character (*, !, #,
                        etc.)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TERMS */}
              <div className="mb-10 bg-[#f8f6f2] border border-[#ece6dc] rounded-2xl p-5">
                <label className="flex items-start gap-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() =>
                      setTermsAccepted(!termsAccepted)
                    }
                    className="mt-1 w-5 h-5 accent-[#1e3932]"
                  />

                  <span className="text-sm text-gray-700 leading-7">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#1e3932] underline font-semibold"
                    >
                      Rewards Terms
                    </a>
                    ,{" "}
                    <a
                      href="#"
                      className="text-[#1e3932] underline font-semibold"
                    >
                      Card Terms
                    </a>{" "}
                    and acknowledge the{" "}
                    <a
                      href="#"
                      className="text-[#1e3932] underline font-semibold"
                    >
                      Privacy Statement
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* BUTTON */}
              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  disabled={!termsAccepted}
                  className={`w-full md:w-auto px-10 py-4 rounded-full font-semibold text-base transition-all duration-200 ${termsAccepted
                      ? "bg-[#1e3932] hover:bg-[#163028] text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}