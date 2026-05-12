"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "@/PageTransition";
import { FaMoneyBillWave, FaMobileAlt, FaRegCreditCard, FaGift } from "react-icons/fa";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

const rewardTiers = [
  {
    star: "25★",
    title: "25 Stars",
    description: "Brewed hot or iced coffee or tea, bakery item, packaged snack, and more.",
    image: "/Assets/25.png",
    color: "#e8f5e9",
  },
  {
    star: "100★",
    title: "100 Stars",
    description: "Treat yourself to an iced coffee, buttery croissant, bag of chips, and more.",
    image: "/Assets/100.png",
    color: "#f1f8e9",
  },
  {
    star: "200★",
    title: "200 Stars",
    description: "Turn good mornings great with a handcrafted drink of your choice, breakfast sandwich, or oatmeal on us.",
    image: "/Assets/200.png",
    color: "#fafde7",
  },
  {
    star: "300★",
    title: "300 Stars",
    description: "Enjoy a PM pick-me-up with a lunch sandwich, protein box, or a bag of coffee.",
    image: "/Assets/300.png",
    color: "#fff8e1",
  },
  {
    star: "400★",
    title: "400 Stars",
    description: "Take home a signature cup, drink tumbler, or coffee merch up to $20.",
    image: "/Assets/400.png",
    color: "#fff3e0",
  },
];

const extras = [
  {
    image: "/Assets/1-fun-freebies.jpg",
    title: "Fun Freebies",
    description: "Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.",
  },
  {
    image: "/Assets/2-order-and-pay-ahead.jpg",
    title: "Order & Pay Ahead",
    description: "Master the art of ordering ahead with saved favorites and payment methods.",
  },
  {
    image: "/Assets/3-get-to-free-faster.jpg",
    title: "Get to Free Faster",
    description: "Earn Stars even quicker with Bonus Star challenges, Double Star Days, and exciting games.",
  },
];

const paymentMethods = [
  {
    icon: <FaMoneyBillWave />,
    title: "Scan and pay separately",
    description: "Use cash or credit/debit card at the register.",
    tier: "1★ per dollar",
  },
  {
    icon: <FaMobileAlt />,
    title: "Save payment in the app",
    description: "Check out faster by saving a credit/debit card or PayPal to your account.",
    tier: "1★ per dollar",
  },
  {
    icon: <FaRegCreditCard />,
    title: "Preload your card",
    description: "Add money to your digital Card and earn Stars twice as fast. Scan and pay in one step.",
    tier: "2★ per dollar",
  },
  {
    icon: <FaGift />,
    title: "Register your gift card",
    description: "Use it to pay through the app. Consolidate balances from multiple cards in one place.",
    tier: "2★ per dollar",
  },
];

const StarIcon = ({ size = 16, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#d4a853" : "none"} stroke="#d4a853" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Rewards() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleSelect = (i) => {
    if (i === selectedIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setSelectedIndex(i);
      setAnimating(false);
    }, 240);
  };

  const selected = rewardTiers[selectedIndex];

  return (
    <PageTransition>
      <div className={lora.className} style={{ backgroundColor: "#faf8f5", minHeight: "100vh" }}>
        <Navbar />

        {/* Sticky Sub-header */}
        <div style={{
          background: "#1a3a2a",
          padding: "0.9rem 2rem",
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <StarIcon size={18} />
            <span style={{ color: "#faf8f5", fontWeight: "700", fontSize: "1rem", letterSpacing: "0.05em" }}>
              BrewVista Rewards
            </span>
          </div>
          <button style={{
            background: "#d4a853",
            color: "#1a3a2a",
            border: "none",
            borderRadius: "50px",
            padding: "0.45rem 1.25rem",
            fontWeight: "700",
            fontSize: "0.8rem",
            cursor: "pointer",
            fontFamily: "sans-serif",
            letterSpacing: "0.04em",
          }}>
            Join Now
          </button>
        </div>

        {/* ── HERO ── */}
        <section style={{ position: "relative", overflow: "hidden", minHeight: "92vh", display: "flex", alignItems: "center" }}>
          {/* Background image */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: 'url("/Assets/hero-mobile_2021.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center top",
            zIndex: 0,
          }} />
          {/* Gradient overlay — left side only */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, rgba(250,248,245,0.97) 0%, rgba(250,248,245,0.88) 40%, rgba(250,248,245,0.0) 100%)",
            zIndex: 1,
          }} />

          <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem", width: "100%" }}>
            <div style={{ maxWidth: "520px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem" }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} />)}
                <span style={{ fontSize: "0.75rem", color: "#d4a853", fontFamily: "sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginLeft: "4px" }}>
                  Rewards Program
                </span>
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: "700",
                color: "#1a3a2a",
                lineHeight: 1.05,
                marginBottom: "1.25rem",
              }}>
                Free Coffee<br />Is a Tap Away
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#4a6358", fontFamily: "sans-serif", lineHeight: 1.65, marginBottom: "2rem", maxWidth: "400px" }}>
                Join now to start earning Stars with every sip. Redeem for free drinks, food, and more.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button style={{
                  background: "#1a3a2a",
                  color: "#faf8f5",
                  border: "none",
                  borderRadius: "50px",
                  padding: "0.85rem 2rem",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontFamily: "sans-serif",
                  letterSpacing: "0.03em",
                  transition: "background 0.2s",
                }}>
                  Join Now — It's Free
                </button>
                <a href="/" style={{ fontSize: "0.875rem", color: "#1a3a2a", fontFamily: "sans-serif", textDecoration: "underline", textDecorationColor: "#d4a853" }}>
                  Join in the app instead
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── GETTING STARTED ── */}
        <section style={{ padding: "6rem 2rem", background: "#fff" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p style={{ color: "#d4a853", letterSpacing: "0.2em", fontSize: "0.75rem", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "0.75rem" }}>
                How it Works
              </p>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: "700", color: "#1a3a2a", marginBottom: "1rem" }}>
                Getting Started Is Easy
              </h2>
              <p style={{ fontSize: "1rem", color: "#888", fontFamily: "sans-serif", maxWidth: "480px", margin: "0 auto", lineHeight: 1.6 }}>
                Earn Stars and get rewarded in a few easy steps.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
              {[
                { n: "1", title: "Create an account", body: "Join now to get started. You can also join in the app to access the full range of Rewards benefits." },
                { n: "2", title: "Order and pay how you'd like", body: "Use cash, credit card, or pay through the app. You'll collect Stars every way you pay." },
                { n: "3", title: "Earn Stars, get Rewards", body: "Redeem Stars for free food and drinks. Start redeeming with as little as 25 Stars." },
              ].map((step) => (
                <div key={step.n} style={{
                  background: "#faf8f5",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: "1px solid #e8e2d8",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Large BG number */}
                  <div style={{
                    position: "absolute",
                    top: "-12px",
                    right: "16px",
                    fontSize: "7rem",
                    fontWeight: "700",
                    color: "rgba(26,58,42,0.04)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}>{step.n}</div>
                  <div style={{
                    width: "48px", height: "48px",
                    borderRadius: "50%",
                    background: "#1a3a2a",
                    color: "#d4a853",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: "700", fontSize: "1.1rem",
                    marginBottom: "1.25rem",
                  }}>{step.n}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1a3a2a", marginBottom: "0.75rem" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#666", fontFamily: "sans-serif", lineHeight: 1.65 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STAR REWARDS SELECTOR ── */}
        {/* ── STAR REWARDS SELECTOR ── */}
        <section
          style={{
            padding: "6rem 1rem",
            background:
              "linear-gradient(180deg, #163124 0%, #1a3a2a 45%, #214634 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow Effects */}
          <div
            style={{
              position: "absolute",
              top: "-120px",
              right: "-120px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "rgba(212,168,83,0.06)",
              filter: "blur(40px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              left: "-100px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.03)",
              filter: "blur(40px)",
            }}
          />

          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Heading */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "3rem",
                padding: "0 0.5rem",
              }}
            >
              <p
                style={{
                  color: "#d4a853",
                  letterSpacing: "0.18em",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  marginBottom: "0.85rem",
                }}
              >
                Redeem Your Stars
              </p>

              <h2
                style={{
                  fontSize: "clamp(2rem, 7vw, 3rem)",
                  fontWeight: "700",
                  color: "#faf8f5",
                  marginBottom: "1rem",
                  lineHeight: 1.15,
                }}
              >
                Rewards Worth
                <br />
                Every Sip
              </h2>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "rgba(250,248,245,0.72)",
                  fontFamily: "sans-serif",
                  lineHeight: 1.7,
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                Collect Stars with every order and unlock handcrafted drinks,
                pastries, merch, and more.
              </p>
            </div>

            {/* MOBILE FRIENDLY STAR SELECTOR */}
            <div
              style={{
                overflowX: "auto",
                paddingBottom: "1rem",
                marginBottom: "2.5rem",
                scrollbarWidth: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  minWidth: "max-content",
                  padding: "0 0.3rem",
                }}
              >
                {rewardTiers.map((tier, i) => (
                  <button
                    key={tier.star}
                    onClick={() => handleSelect(i)}
                    style={{
                      border: "none",
                      cursor: "pointer",
                      minWidth: "92px",
                      borderRadius: "22px",
                      padding: "1rem 0.8rem",
                      background:
                        i === selectedIndex
                          ? "linear-gradient(135deg, #d4a853, #f2d084)"
                          : "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border:
                        i === selectedIndex
                          ? "1px solid rgba(255,255,255,0.25)"
                          : "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.6rem",
                      transition: "all 0.25s ease",
                      boxShadow:
                        i === selectedIndex
                          ? "0 12px 30px rgba(212,168,83,0.35)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background:
                          i === selectedIndex
                            ? "#1a3a2a"
                            : "rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <StarIcon
                        size={18}
                        filled={i <= selectedIndex}
                      />
                    </div>

                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "700",
                        color:
                          i === selectedIndex
                            ? "#1a3a2a"
                            : "#faf8f5",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {tier.star}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* REWARD CARD */}
            <div
              style={{
                background: "rgba(255,255,255,0.97)",
                borderRadius: "32px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
                opacity: animating ? 0 : 1,
                transform: animating
                  ? "translateY(10px)"
                  : "translateY(0)",
                transition:
                  "opacity 0.25s ease, transform 0.25s ease",
              }}
            >
              {/* IMAGE SECTION */}
              <div
                style={{
                  background: selected.color,
                  padding: "2.5rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* decorative circle */}
                <div
                  style={{
                    position: "absolute",
                    width: "240px",
                    height: "240px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.45)",
                    filter: "blur(4px)",
                  }}
                />

                <img
                  src={selected.image}
                  alt={selected.title}
                  style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: "260px",
                    objectFit: "contain",
                    filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.15))",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* CONTENT */}
              <div
                style={{
                  padding: "2rem 1.5rem 2.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {/* Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    background: "#f8f3e7",
                    padding: "0.45rem 0.9rem",
                    borderRadius: "50px",
                    marginBottom: "1.2rem",
                  }}
                >
                  <StarIcon size={15} />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#b38728",
                      fontWeight: "700",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {selected.star} Reward
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.7rem, 6vw, 2.2rem)",
                    fontWeight: "700",
                    color: "#1a3a2a",
                    marginBottom: "1rem",
                    lineHeight: 1.15,
                  }}
                >
                  {selected.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.97rem",
                    color: "#666",
                    fontFamily: "sans-serif",
                    lineHeight: 1.8,
                    marginBottom: "1.8rem",
                  }}
                >
                  {selected.description}
                </p>

                <button
                  style={{
                    background:
                      "linear-gradient(135deg, #1a3a2a, #29543d)",
                    color: "#faf8f5",
                    border: "none",
                    borderRadius: "50px",
                    padding: "0.95rem 1.5rem",
                    fontWeight: "700",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    fontFamily: "sans-serif",
                    width: "100%",
                    maxWidth: "240px",
                    boxShadow: "0 10px 24px rgba(26,58,42,0.22)",
                  }}
                >
                  Redeem Reward →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── ENDLESS EXTRAS ── */}
        <section style={{ padding: "6rem 2rem", background: "#fff" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p style={{ color: "#d4a853", letterSpacing: "0.2em", fontSize: "0.75rem", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "0.75rem" }}>
                Member Benefits
              </p>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: "700", color: "#1a3a2a", marginBottom: "1rem" }}>
                Endless Extras
              </h2>
              <p style={{ fontSize: "1rem", color: "#888", fontFamily: "sans-serif", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
                Joining Rewards means unlocking quick ordering, tasty Rewards, and yes — free coffee.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              {extras.map((extra) => (
                <div key={extra.title} style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#faf8f5",
                  border: "1px solid #e8e2d8",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(26,58,42,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ height: "220px", overflow: "hidden", background: "#ede5d5" }}>
                    <img
                      src={extra.image}
                      alt={extra.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1a3a2a", marginBottom: "0.6rem" }}>{extra.title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#666", fontFamily: "sans-serif", lineHeight: 1.65, marginBottom: "1rem" }}>{extra.description}</p>
                    <a href="#" style={{ fontSize: "0.85rem", color: "#1a3a2a", fontFamily: "sans-serif", fontWeight: "700", textDecoration: "underline", textDecorationColor: "#d4a853" }}>
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAYMENT METHODS ── */}
        <section style={{ padding: "6rem 2rem", background: "#faf8f5" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p style={{ color: "#d4a853", letterSpacing: "0.2em", fontSize: "0.75rem", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "0.75rem" }}>
                Earning Stars
              </p>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: "700", color: "#1a3a2a", marginBottom: "1rem" }}>
                Cash or Card, You Earn Stars
              </h2>
              <p style={{ fontSize: "1rem", color: "#888", fontFamily: "sans-serif", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
                No matter how you pay, Stars add up to delicious Rewards.
              </p>
            </div>

            {/* Two tier rows */}
            {[
              { label: "1★ Star per dollar", subtitle: "Pay as you go", methods: paymentMethods.slice(0, 2) },
              { label: "2★ Stars per dollar", subtitle: "Add funds in the app", methods: paymentMethods.slice(2) },
            ].map((tier) => (
              <div key={tier.label} style={{ marginBottom: "3rem" }}>
                {/* Tier header */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e8e2d8",
                }}>
                  <div style={{
                    background: "#1a3a2a",
                    color: "#d4a853",
                    borderRadius: "50px",
                    padding: "0.4rem 1rem",
                    fontWeight: "700",
                    fontSize: "0.9rem",
                    fontFamily: "sans-serif",
                    whiteSpace: "nowrap",
                  }}>
                    {tier.label}
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "#999", fontFamily: "sans-serif" }}>{tier.subtitle}</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                  {tier.methods.map((m) => (
                    <div key={m.title} style={{
                      display: "flex",
                      gap: "1rem",
                      background: "#fff",
                      borderRadius: "16px",
                      padding: "1.5rem",
                      border: "1px solid #e8e2d8",
                      alignItems: "flex-start",
                    }}>
                      <div style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "#f0ede6",
                        color: "#1a3a2a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}>
                        {m.icon}
                      </div>
                      <div>
                        <p style={{ fontWeight: "700", fontSize: "0.95rem", color: "#1a3a2a", marginBottom: "0.35rem" }}>{m.title}</p>
                        <p style={{ fontSize: "0.85rem", color: "#666", fontFamily: "sans-serif", lineHeight: 1.6 }}>{m.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TERMS ── */}
        <section style={{ padding: "4rem 2rem", background: "#fff", borderTop: "1px solid #e8e2d8" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.75rem", color: "#bbb", fontFamily: "sans-serif", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              At participating stores. Restrictions apply. Stars cannot be earned on purchases of alcohol, Starbucks Cards, or Starbucks Card reloads. Stars and miles may not be earned on purchases close to departure. For full offer terms, visit the respective program pages.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
              {[
                {
                  title: "Earning Stars",
                  body: "Earn 1 Star per $1 spent when you scan your member barcode, then pay with cash or card. Earn 2 Stars per $1 when you load funds and pay with your digital BrewVista Card in the app.",
                },
                {
                  title: "Benefits",
                  body: "Free refills are available during the same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.",
                },
                {
                  title: "Terms of Use",
                  body: "Rewards benefits are available at participating stores. Not all stores can honor Rewards at this time. Visit the Store Locator and search for locations honoring \u201cRedeem Rewards.\u201d",
                },
                {
                  title: "Redeeming Rewards",
                  body: "Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise over $20.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: "700", color: "#1a3a2a", marginBottom: "0.6rem" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.82rem", color: "#888", fontFamily: "sans-serif", lineHeight: 1.75 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}