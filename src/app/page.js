import Image from "next/image";

import Navbar from "./components/Navbar";
import Starbucks4life from "./components/Starbucks4life";
import JoyInEverySip from "./components/JoyInEverySip";
import MerryChristmas from "./components/MerryChristmas";
import UnwrapYourGifts from "./components/UnwrapYourGifts";
import FeedingAmerica from "./components/FeedingAmerica";
import BelovedTradition from "./components/BelovedTradition";
import Text from "./components/Text";
import Footer from "./components/Footer";

import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={lora.className}>
      <Navbar />
      <Starbucks4life />
      <JoyInEverySip />
      <MerryChristmas />
      <UnwrapYourGifts />
      <FeedingAmerica />
      <BelovedTradition />
      <Text />
      <Footer />
    </div>
  );
}
