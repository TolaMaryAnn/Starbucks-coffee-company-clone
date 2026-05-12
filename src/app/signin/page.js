"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Lora } from "next/font/google";
import PageTransition from "@/PageTransition";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Signin() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [hasPasswordText, setHasPasswordText] =
    useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [keepSignedIn, setKeepSignedIn] =
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
              Welcome Back
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-[#1e3932] leading-tight mb-5">
              Sign in to your account
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-7 max-w-xl mx-auto">
              Access your rewards, order ahead,
              save favorites, and enjoy exclusive
              BrewVista member perks.
            </p>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="pb-16 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-[30px] border border-gray-100 shadow-[0_20px_70px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* TOP BAR */}
            <div className="bg-[#1e3932] px-6 md:px-10 py-5">
              <p className="text-sm text-white/80">
                <span className="text-[#d4a853]">
                  *
                </span>{" "}
                indicates required field
              </p>
            </div>

            <div className="p-5 md:p-10">
              {/* FORM HEADER */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3932] mb-3">
                  Account Sign In
                </h2>

                <p className="text-gray-500 text-sm leading-7">
                  Enter your login details to continue
                  enjoying your rewards and personalized
                  experience.
                </p>
              </div>

              <form className="space-y-7">
                {/* EMAIL */}
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    placeholder=" "
                    className="peer w-full h-[62px] px-4 border border-gray-300 rounded-2xl bg-white text-black focus:outline-none focus:border-[#1e3932] focus:ring-4 focus:ring-green-100 transition"
                  />

                  <label
                    htmlFor="username"
                    className="absolute left-4 top-5 text-gray-500 bg-white px-1 transition-all duration-200
                    peer-placeholder-shown:top-5
                    peer-focus:-top-2.5
                    peer-focus:text-sm
                    peer-focus:text-[#1e3932]
                    peer-not-placeholder-shown:-top-2.5
                    peer-not-placeholder-shown:text-sm"
                  >
                    Username or Email{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>
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
                    className="peer w-full h-[62px] px-4 border border-gray-300 rounded-2xl bg-white text-black focus:outline-none focus:border-[#1e3932] focus:ring-4 focus:ring-green-100 transition"
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
                </div>

                {/* KEEP SIGNED IN */}
                <div className="bg-[#f8f6f2] border border-[#ece6dc] rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <label className="flex items-start gap-4 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={keepSignedIn}
                        onChange={() =>
                          setKeepSignedIn(
                            !keepSignedIn
                          )
                        }
                        className="mt-1 w-5 h-5 accent-[#1e3932]"
                      />

                      <div>
                        <p className="text-sm font-semibold text-[#1e3932]">
                          Keep me signed in
                        </p>

                        <p className="text-xs text-gray-500 mt-1 leading-6">
                          Securely stay signed in on this
                          device for faster checkout and
                          easier access.
                        </p>
                      </div>
                    </label>

                    <button
                      type="button"
                      className="text-sm text-[#1e3932] font-semibold underline"
                    >
                      Details
                    </button>
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="text-[#1e3932] underline font-semibold text-sm md:text-base"
                  >
                    Forgot your username?
                  </a>

                  <a
                    href="#"
                    className="text-[#1e3932] underline font-semibold text-sm md:text-base"
                  >
                    Forgot your password?
                  </a>
                </div>

                {/* BUTTON */}
                <div className="pt-2 flex justify-center md:justify-end">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#1e3932] hover:bg-[#163028] text-white font-semibold rounded-full px-10 py-4 text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* JOIN CTA */}
          <div className="max-w-2xl mx-auto mt-14">
            <div className="bg-gradient-to-br from-[#1e3932] to-[#295140] rounded-[30px] p-7 md:p-10 text-center shadow-[0_20px_60px_rgba(30,57,50,0.25)]">
              <p className="uppercase tracking-[0.2em] text-[#d4a853] text-sm font-bold mb-4">
                New Here?
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Join BrewVista Rewards
              </h3>

              <p className="text-white/75 text-sm md:text-base leading-7 max-w-xl mx-auto mb-8">
                Earn Stars for every purchase, unlock
                birthday treats, order ahead, and enjoy
                exclusive rewards made just for members.
              </p>

              <Link href="/join">
                <button className="bg-white hover:bg-[#f2f2f2] text-[#1e3932] font-semibold rounded-full px-8 py-3 transition-all duration-200 shadow-lg">
                  Create an Account
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}