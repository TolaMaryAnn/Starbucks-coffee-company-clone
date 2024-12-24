"use client";
import { useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Image from "next/image";
import style from "styled-jsx/style";
import {
  FaMoneyBillWave,
  FaMobileAlt,
  FaRegCreditCard,
  FaGift,
} from "react-icons/fa";

export default function rewards() {
  const [animate, setAnimate] = useState(false);
  const [selectedStar, setSelectedStar] = useState("25★");
  const handleStarClick = (star) => {
    setAnimate(true);
    setTimeout(() => {
      setSelectedStar(star);
      setAnimate(false);
    }, 500);
  };

  const rewards = {
    "25★": {
      title: "25★ Stars",
      description:
        "Brewed hot or iced coffee or tea, bakery item, packaged snack, and more.",
      image: "/Assets/25.png",
    },
    "100★": {
      title: "100★ Stars",
      description:
        "Treat yourself to an iced coffee, buttery croissant, bag of chips, and more.",
      image: "/Assets/100.png",
    },
    "200★": {
      title: "200★ Stars",
      description:
        "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich, or oatmeal on us.",
      image: "/Assets/200.png",
    },
    "300★": {
      title: "300★ Stars",
      description:
        "Enjoy a PM pick-me-up with a lunch sandwich, protein box, or a bag of coffee—including Starbucks VIA Instant®.",
      image: "/Assets/300.png",
    },
    "400★": {
      title: "400★ Stars",
      description:
        "Take home a signature cup, drink tumbler, or your choice of coffee merch up to $20.",
      image: "/Assets/400.png",
    },
  };
  return (
    <div>
      <Navbar />
      <div className="bg-green-800 px-32 text-white tracking-wider font-bold text-xl py-6 sticky top-0 z-50">
        Starbucks® Rewards
      </div>

      <section
        className="relative bg-green-900 h-screen text-white py-20 px-4"
        style={{
          backgroundImage: 'url("/Assets/hero-mobile_2021.jpg")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="relative  mt-48 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Free Coffee <br /> Is a Tap Away
          </h1>
          <p className="text-lg md:text-xl text-green-900 mb-6">
            Join now to start earning Rewards.
          </p>
          <button className="bg-green-800 text-white font-medium py-3 px-6 rounded-full mt-6 text-lg hover:bg-yellow-400 transition">
            Join Now
          </button>

          <div className="text-green-900 mt-6">
            Or{" "}
            <a href="/" className="underline  ">
              join in the app
            </a>{" "}
            for the best experience
          </div>
        </div>
      </section>

      <section className="py-28 text-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Getting Started Is Easy
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Earn Stars and get rewarded in a few easy steps.
          </p>

          <div className="grid grid-cols-1 mt-10 md:mt-20 md:grid-cols-3  gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-800 text-white rounded-full mb-4 text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create an account</h3>
              <p className="text-gray-600">
                To get started, <span className="font-semibold">join now</span>.
                You can also join in the app to get access to the full range of
                Starbucks® Rewards benefits.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-800 text-white rounded-full mb-4 text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Order and pay how you’d like
              </h3>
              <p className="text-gray-600">
                Use cash, credit/debit card, or save some time and pay right
                through the app. You’ll collect Stars all ways.{" "}
                <a
                  href="#"
                  className="text-green-600 hover:underline font-semibold"
                >
                  Learn how
                </a>
                .
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-800 text-white rounded-full mb-4 text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Earn Stars, get Rewards
              </h3>
              <p className="text-gray-600">
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as{" "}
                <span className="font-semibold">25 Stars</span>!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-blue-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get Your Favorites for Free
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Earn Stars and redeem for Rewards.
          </p>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-y-auto md:h-auto space-x-4 md:space-x-0 md:space-y-4 pb-4 md:pb-0">
              {Object.keys(rewards).map((star) => (
                <button
                  key={star}
                  onClick={() => handleStarClick(star)}
                  className={`px-4 py-2 text-left md:text-center rounded-lg ${
                    selectedStar === star
                      ? "bg-green-800 text-white text-2xl font-bold"
                      : "bg-white text-gray-800 border"
                  }`}
                >
                  {star}
                </button>
              ))}
            </div>

            <div className="w-full md:w-3/4 px-6 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
              <div
                className={`relative transition-all duration-500 ease-in-out ${
                  animate ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={rewards[selectedStar].image}
                  alt={rewards[selectedStar].title}
                  className="w-full h-auto object-contain mb-4"
                />
              </div>
              <div
                className={`transition-opacity duration-500 ease-in-out ${
                  animate ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  {rewards[selectedStar].title}
                </h3>
                <p className="text-gray-600">
                  {rewards[selectedStar].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  text-black">
        <div className=" px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Endless Extras
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Joining Starbucks® Rewards means unlocking access to benefits like
            quick and easy ordering, tasty Rewards, and— <br /> yes, free
            coffee.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 ">
              <img
                src="/Assets/1-fun-freebies.jpg"
                alt="Fun Freebies"
                className=" h-48  mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-4">
                Fun freebies
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Not only can you earn free coffee, look forward to a birthday{" "}
                <br />
                treat plus coffee and tea refills.
              </p>
              <a
                href="#"
                className="text-green-900 font-semibold hover:underline"
              >
                Learn more
              </a>
            </div>

            <div className="p-6 ">
              <img
                src="/Assets/2-order-and-pay-ahead.jpg"
                alt="Order & Pay Ahead"
                className=" h-48  mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-4">
                Order & pay ahead
              </h3>
              <p className="text-gray-600 mb-4">
                Master the art of ordering ahead with saved favorites and <br />
                payment methods.
              </p>
              <a
                href="#"
                className="text-green-900 font-semibold hover:underline"
              >
                Learn more
              </a>
            </div>

            <div className="p-6 ">
              <img
                src="/Assets/3-get-to-free-faster.jpg"
                alt="Get to Free Faster"
                className=" h-48  mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-4">
                Get to free faster
              </h3>
              <p className="text-gray-600 mb-4">
                Earn Stars even quicker with Bonus Star challenges, Double Star{" "}
                <br />
                Days, and exciting games.
              </p>
              <a
                href="#"
                className="text-green-900 font-semibold hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-black">
        <div className=" px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Cash or card, you earn Stars
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) <br /> Rewards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-20">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-semibold text-black mb-4">
                1★ Star per dollar
              </h3>
              <p className="text-black mb-6">Pay as you go</p>
            </div>
            <div className="md:col-span-1">
              <ul className="space-y-6 text-gray-600">
                <li className="flex items-start">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-800 rounded-full mr-4">
                    <FaMoneyBillWave className="w-32 h-32" />
                  </div>
                  <div>
                    <span className="font-bold text-xl text-black">
                      Scan and pay separately:
                    </span>{" "}
                    Use cash or credit/debit card at the register.
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <ul className="space-y-6 text-gray-600">
                <li className="flex items-start">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-800 rounded-full mr-4">
                    <FaMobileAlt className="w-32 h-32" />
                  </div>
                  <div>
                    <span className="font-bold text-xl text-black">
                      Save payment in the app:
                    </span>{" "}
                    Check-out faster by saving a credit/debit card or PayPal to
                    your account. You’ll be able to order ahead or scan and pay
                    at the register in one step.
                  </div>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-2xl font-semibold text-black mb-4">
                2★ Stars per dollar
              </h3>
              <p className="text-black mb-6">Add funds in the app</p>
            </div>
            <div className="md:col-span-1">
              <ul className="space-y-6 text-gray-600">
                <li className="flex items-start">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-800 rounded-full mr-4">
                    <FaRegCreditCard className="w-32 h-32" />
                  </div>
                  <div>
                    <span className="font-bold text-xl text-black">
                      Preload:
                    </span>{" "}
                    To save time and earn Stars twice as fast, add money to your
                    digital Starbucks Card using any payment option. Scan and
                    pay in one step or order ahead in the app.
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <ul className="space-y-6 text-gray-600">
                <li className="flex items-start">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-800 rounded-full mr-4">
                    <FaGift className="w-32 h-32" />
                  </div>
                  <div>
                    <span className="font-bold text-xl text-black">
                      Register your gift card:
                    </span>{" "}
                    Then use it to pay through the app. You can even consolidate
                    balances from multiple cards in one place.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-gray-300 mb-8" />

      <section className="py-16 bg-gray-50 text-gray-800">
        <div className=" px-6">
          <div>
            At participating stores. Restrictions apply. 1Excludes taxes and
            gratuities. At participating stores. Some restrictions apply.
            Flights purchased close to departure may not earn double Stars.
            Stars and miles may not be earned on purchases of alcohol, Starbucks
            Cards and Starbucks Card reloads. For details, visit
            deltastarbucks.com/terms .↩ 2At participating stores only. Some
            restrictions apply. Linked Card members will earn 2% Cash Back on
            the full purchase price of every Qualifying Purchase. Extra Star
            offer excludes taxes and tips. Stars may not be earned on purchases
            of alcohol or on reloads of Starbucks Cards that are not registered.
            For details, visit Terms and Conditions . Bank of America, N.A.
            Member FDIC.↩ 3Individuals must link loyalty program accounts to
            participate in offer. Members with linked accounts will earn: (a)
            double Starbucks Rewards Stars on Qualifying Starbucks Transactions
            during Eligible Stays at Participating Marriott Bonvoy Hotels,
            excluding stays at Homes & Villas by Marriott Bonvoy and The
            Ritz-Carlton Yacht Collection, and (b) earn 100 Marriott Bonvoy
            Points upon completion of 3 Qualifying Starbucks Transactions during
            Marriott Bonvoy Week. Qualifying Starbucks Transactions must be made
            at U.S. participating Starbucks stores and exclude purchases of
            alcoholic beverages, Starbucks Card eGifts and physical Starbucks
            gift. To earn Double Stars, the applicable stay must qualify as an
            Eligible Stay at a Participating Marriott Bonvoy® Hotel under offer
            terms and conditions. Other restrictions and exclusions apply. For
            full offer terms and conditions, visit Starbucks.com/MarriottBonvoy
            . Marriott Bonvoy® and its affiliated brands and hotels are the
            registered trademarks and/or service marks of Marriott
            International, Inc. and its affiliates. Used under license from
            Marriott International, Inc.↩
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Earning Stars
              </h3>
              <p className="text-gray-600 mb-4">
                Stars cannot be earned on purchases of alcohol, Starbucks Cards,
                or Starbucks Card reloads.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Earn{" "}
                  <span className="font-bold text-green-800">
                    1 Star per $1 spent
                  </span>{" "}
                  when you scan your member barcode in the app, then pay with
                  cash, credit/debit cards, or mobile wallets at participating
                  stores. You can also earn 1 Star per $1 spent when you link a
                  payment method and pay directly through the app.
                </li>
                <li>
                  Earn{" "}
                  <span className="font-bold text-green-800">
                    2 Stars per $1 spent
                  </span>{" "}
                  when you load funds and pay with your digital Starbucks Card
                  in the app. You can also earn 2 Stars per $1 spent when you
                  pay in-person at a participating store with your registered
                  physical Starbucks Card or scan your member barcode in the
                  app, and then use any physical Starbucks Card (regardless of
                  whether it is registered) to complete the purchase.
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Benefits</h3>
              <p className="text-gray-600">
                Free refills are available during the same in-store visit only.
                To qualify for the Birthday Reward, you must have made at least
                one Star-earning transaction.
              </p>
            </div>

            {/* Terms of Use */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Terms of Use
              </h3>
              <p className="text-gray-600">
                For full program details, visit{" "}
                <a
                  href="https://starbucks.com/rewards/terms"
                  className="text-green-800 underline"
                >
                  starbucks.com/rewards/terms
                </a>
                .
              </p>
              <p className="text-gray-600">
                Starbucks® Rewards benefits are available at participating
                Starbucks stores. Not all stores have the ability to honor
                Rewards at this time. Visit the{" "}
                <a
                  href="https://starbucks.com/store-locator"
                  className="text-green-800 underline"
                >
                  Starbucks Store Locator
                </a>{" "}
                and search for locations honoring “Redeem Rewards.”
              </p>
            </div>

            {/* Redeeming Rewards */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Redeeming Rewards
              </h3>
              <p className="text-gray-600">
                Rewards cannot be redeemed for alcoholic beverages or
                multi-serve items. You pay the difference for any beverage
                customization over $1 and/or merchandise item over $20. Not all
                stores honor tiered Rewards. Select stores redeem 200 Stars for
                free food or drink items only.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-gray-300 mb-8" />
      <Footer />
    </div>
  );
}
