import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from 'next/font/google';

const lora = Lora ({
  subsets: ['latin'],
  weight: ['400', '700'], 
});
export default function giftCards() {
  return (
    <div className={lora.className}>
      <Navbar />
      Gift cards
      <Footer />
    </div>
  );
}
