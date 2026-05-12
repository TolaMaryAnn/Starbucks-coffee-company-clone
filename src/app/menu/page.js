"use client";

import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from "next/font/google";
import PageTransition from "@/PageTransition";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

const menuData = {
  Drinks: [
    "Hot Coffees", "Cold Coffees", "BrewVista Refreshers",
    "Frappuccino", "Iced Tea", "Milk, Juice and more", "Bottled Beverages",
  ],
  Food: ["Hot Breakfast", "Oatmeal and Yogurt", "Bakery", "Lunch", "Snacks & Sweets"],
  "At-Home Coffee": ["Whole Bean", "Ground Coffee", "Instant"],
  Merchandise: ["Cold Cups", "Tumblers", "Mugs", "Others"],
};

const menuItems = {
  Drinks: [
    { name: "Hot Coffees", sub: "Hot Coffees", image: "/Assets/cup-166778_1280-removebg-preview.png", tag: "Popular" },
    { name: "Cold Coffees", sub: "Cold Coffees", image: "/Assets/vecteezy_pumpkin-spice-latte-iced-coffee-background-photo_34222028-removebg-preview.png", tag: "Seasonal" },
    { name: "BrewVista Refreshers", sub: "BrewVista Refreshers", image: "/Assets/vecteezy_chilled-java-duo-sipped-through-metal-against-a-dark_30321439-removebg-preview.png", tag: "New" },
    { name: "Frappuccino", sub: "Frappuccino", image: "/Assets/coffee-5893926_1280-removebg-preview.png", tag: "Favourite" },
    { name: "Iced Tea", sub: "Iced Tea", image: "/Assets/drink-908356_1280-removebg-preview.png" },
    { name: "Milk, Juice & More", sub: "Milk, Juice and more", image: "/Assets/drink-3131322_1280-removebg-preview.png" },
    { name: "Bottled Beverages", sub: "Bottled Beverages", image: "/Assets/beers-414914_1280-removebg-preview.png" },
  ],
  Food: [
    { name: "Hot Breakfast", sub: "Hot Breakfast", image: "/Assets/vecteezy_ai-generated-grilled-pork-fresh-salad-homemade-bread-a_39624377-removebg-preview.png", tag: "Chef's Pick" },
    { name: "Oatmeal & Yogurt", sub: "Oatmeal and Yogurt", image: "/Assets/vecteezy_ai-generated-oatmeal-with-butter-and-raisins_37346511-removebg-preview.png" },
    { name: "Bakery", sub: "Bakery", image: "/Assets/vecteezy_bread-eggs-and-wheat_1226494-removebg-preview.png", tag: "Fresh Daily" },
    { name: "Lunch", sub: "Lunch", image: "/Assets/vecteezy_fried-rice-in-a-plate-on-a-white-wooden-floor_3384440-removebg-preview.png" },
    { name: "Snacks & Sweets", sub: "Snacks & Sweets", image: "/Assets/vecteezy_chinese-desserts-chinese-pastry-bean-cake-snack-mix-nuts_5668040-removebg-preview.png" },
  ],
  "At-Home Coffee": [
    { name: "Whole Bean", sub: "Whole Bean", image: "/Assets/top-view-coffee-beans-paper-bag.png", tag: "Premium" },
    { name: "Ground Coffee", sub: "Ground Coffee", image: "/Assets/vecteezy_ground-coffee-from-coffee-machine-isolated-on-white-background_6305859-removebg-preview.png" },
    { name: "Instant", sub: "Instant", image: "/Assets/vecteezy_instant-coffee-in-glass-bottle_2831065-removebg-preview.png" },
  ],
  Merchandise: [
    { name: "Cold Cups", sub: "Cold Cups", image: "/Assets/rb_66776.png" },
    { name: "Tumblers", sub: "Tumblers", image: "/Assets/composition-different-colored-tumblers.png", tag: "Limited" },
    { name: "Mugs", sub: "Mugs", image: "/Assets/rb_2490.png", tag: "New" },
    { name: "Others", sub: "Others", image: "/Assets/composition-beautiful-tableware-table.png" },
  ],
};

const categoryIcons = {
  Drinks: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
  Food: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  ),
  "At-Home Coffee": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Merchandise: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Drinks");
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [animating, setAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const mainRef = useRef(null);

  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setActiveSubCategory(null);
      setSearchQuery("");
      setAnimating(false);
    }, 220);
  };

  const filteredItems = menuItems[activeCategory]?.filter((item) => {
    const matchesSub = activeSubCategory ? item.sub === activeSubCategory : true;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesSearch;
  });

  return (
    <PageTransition>
      <div className={lora.className} style={{ backgroundColor: "#faf8f5", minHeight: "100vh" }}>
        <Navbar />

        {/* ── HERO ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 50%, #1a3a2a 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-40px", right: "10%", width: "200px", height: "200px", borderRadius: "50%", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(212,168,83,0.2)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "-70px", right: "calc(10% - 40px)", width: "280px", height: "280px", borderRadius: "50%", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(212,168,83,0.1)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-60px", left: "5%", width: "160px", height: "160px", borderRadius: "50%", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(212,168,83,0.15)", pointerEvents: "none" }} />

          <div className="hero-inner" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
            <p style={{ color: "#d4a853", letterSpacing: "0.2em", fontSize: "0.7rem", textTransform: "uppercase", marginBottom: "0.4rem", fontFamily: "sans-serif" }}>
              BrewVista Café
            </p>
            <h1 style={{ color: "#faf8f5", fontSize: "clamp(1.6rem, 5vw, 3.5rem)", fontWeight: "700", lineHeight: 1.1, marginBottom: "0.75rem" }}>
              Our Menu
            </h1>
            <p style={{ color: "rgba(250,248,245,0.65)", fontSize: "0.9rem", maxWidth: "440px", fontFamily: "sans-serif", lineHeight: 1.6 }}>
              Crafted with care, served with love — explore our full selection of drinks, food, and more.
            </p>
            <div style={{ marginTop: "1.25rem", position: "relative", maxWidth: "380px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(212,168,83,0.7)" strokeWidth="2"
                style={{ position: "absolute", left: "13px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.6rem 1rem 0.6rem 2.4rem",
                  borderRadius: "50px",
                  borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(212,168,83,0.3)",
                  background: "rgba(250,248,245,0.08)",
                  color: "#faf8f5",
                  fontSize: "0.85rem",
                  outline: "none",
                  fontFamily: "sans-serif",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,168,83,0.7)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,168,83,0.3)")}
              />
            </div>
          </div>
        </div>

        {/* ── CATEGORY TABS ── */}
        <div style={{
          borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#e8e2d8",
          background: "#fff", position: "sticky", top: 0, zIndex: 30,
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 0.75rem", display: "flex", overflowX: "auto" }}>
            {Object.keys(menuData).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="cat-tab"
                style={{
                  display: "flex", alignItems: "center", gap: "0.3rem",
                  fontSize: "0.78rem",
                  fontWeight: activeCategory === cat ? "700" : "400",
                  color: activeCategory === cat ? "#1a3a2a" : "#888",
                  borderTop: "none", borderLeft: "none", borderRight: "none",
                  borderBottomWidth: "2.5px", borderBottomStyle: "solid",
                  borderBottomColor: activeCategory === cat ? "#1a3a2a" : "transparent",
                  background: "none", cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s, border-bottom-color 0.2s",
                  fontFamily: "sans-serif", flexShrink: 0,
                }}
              >
                <span style={{ color: activeCategory === cat ? "#1a3a2a" : "#ccc", lineHeight: 0 }}>
                  {categoryIcons[cat]}
                </span>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── BODY ── */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", minHeight: "70vh" }}>

          {/* Sidebar */}
          <aside className="sidebar" style={{
            width: "210px", flexShrink: 0,
            padding: "1.75rem 0",
            borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "#e8e2d8",
          }}>
            <p style={{ fontSize: "0.63rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#bbb", marginBottom: "0.75rem", padding: "0 1.25rem", fontFamily: "sans-serif" }}>
              Browse
            </p>
            <button
              onClick={() => setActiveSubCategory(null)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "0.5rem 1.25rem", fontSize: "0.85rem",
                fontWeight: activeSubCategory === null ? "700" : "400",
                color: activeSubCategory === null ? "#1a3a2a" : "#666",
                background: activeSubCategory === null ? "#f0ede6" : "transparent",
                borderTop: "none", borderRight: "none", borderBottom: "none",
                borderLeftWidth: "3px", borderLeftStyle: "solid",
                borderLeftColor: activeSubCategory === null ? "#1a3a2a" : "transparent",
                cursor: "pointer", fontFamily: "sans-serif", transition: "all 0.15s",
              }}
            >
              All {activeCategory}
            </button>
            {menuData[activeCategory]?.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubCategory(activeSubCategory === sub ? null : sub)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "0.5rem 1.25rem", fontSize: "0.85rem",
                  fontWeight: activeSubCategory === sub ? "700" : "400",
                  color: activeSubCategory === sub ? "#1a3a2a" : "#666",
                  background: activeSubCategory === sub ? "#f0ede6" : "transparent",
                  borderTop: "none", borderRight: "none", borderBottom: "none",
                  borderLeftWidth: "3px", borderLeftStyle: "solid",
                  borderLeftColor: activeSubCategory === sub ? "#1a3a2a" : "transparent",
                  cursor: "pointer", fontFamily: "sans-serif", transition: "all 0.15s",
                }}
              >
                {sub}
              </button>
            ))}
            <div style={{ height: "1px", background: "#e8e2d8", margin: "1.25rem" }} />
            <p style={{ fontSize: "0.63rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#bbb", marginBottom: "0.6rem", padding: "0 1.25rem", fontFamily: "sans-serif" }}>
              Quick Links
            </p>
            {["Menu", "Featured", "Previous", "Favourite"].map((link) => (
              <button key={link} style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "0.4rem 1.25rem", fontSize: "0.8rem", color: "#999",
                background: "none",
                borderTop: "none", borderRight: "none", borderBottom: "none", borderLeft: "none",
                cursor: "pointer", fontFamily: "sans-serif", transition: "color 0.15s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a3a2a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
              >
                {link}
              </button>
            ))}
          </aside>

          {/* Main */}
          <main ref={mainRef} className="main-content" style={{ flex: 1, minWidth: 0 }}>

            {/* Mobile pills */}
            <div className="mobile-pills">
              <div style={{ display: "flex", gap: "0.4rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
                {[{ label: "All", value: null }, ...menuData[activeCategory].map((s) => ({ label: s, value: s }))].map(({ label, value }) => (
                  <button
                    key={label}
                    onClick={() => setActiveSubCategory(value)}
                    style={{
                      padding: "0.3rem 0.85rem", borderRadius: "50px", fontSize: "0.72rem",
                      background: activeSubCategory === value ? "#1a3a2a" : "#fff",
                      color: activeSubCategory === value ? "#faf8f5" : "#666",
                      borderWidth: "1px", borderStyle: "solid",
                      borderColor: activeSubCategory === value ? "#1a3a2a" : "#ddd",
                      cursor: "pointer", whiteSpace: "nowrap",
                      fontFamily: "sans-serif", flexShrink: 0,
                      transition: "all 0.15s",
                    }}
                  >{label}</button>
                ))}
              </div>
            </div>

            {/* Heading row */}
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1rem" }}>
              <div>
                <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", fontWeight: "700", color: "#1a3a2a", lineHeight: 1.1 }}>
                  {activeSubCategory || activeCategory}
                </h2>
                <p style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "0.15rem", fontFamily: "sans-serif" }}>
                  {filteredItems?.length} item{filteredItems?.length !== 1 ? "s" : ""}
                </p>
              </div>
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} style={{
                  fontSize: "0.72rem", color: "#888", background: "none", border: "none",
                  cursor: "pointer", fontFamily: "sans-serif", textDecoration: "underline",
                }}>Clear</button>
              )}
            </div>

            {/* Cards */}
            <div style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
              transition: "opacity 0.22s ease, transform 0.22s ease",
            }}>
              {filteredItems?.length === 0 ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem", color: "#bbb" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1" style={{ margin: "0 auto 0.75rem" }}>
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <p style={{ fontFamily: "sans-serif", fontSize: "0.875rem" }}>No results for &ldquo;{searchQuery}&rdquo;</p>
                </div>
              ) : (
                <div className="card-grid">
                  {filteredItems?.map((item) => (
                    <div
                      key={item.name}
                      onMouseEnter={() => setHoveredCard(item.name)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        borderRadius: "14px", overflow: "hidden",
                        background: "#fff",
                        borderWidth: "1px", borderStyle: "solid", borderColor: "#e8e2d8",
                        cursor: "pointer",
                        transition: "transform 0.22s ease, box-shadow 0.22s ease",
                        transform: hoveredCard === item.name ? "translateY(-5px)" : "translateY(0)",
                        boxShadow: hoveredCard === item.name
                          ? "0 16px 32px rgba(26,58,42,0.12)"
                          : "0 2px 6px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div className="card-img" style={{
                        position: "relative",
                        background: "linear-gradient(160deg, #f5f0e8 0%, #ede5d5 100%)",
                        overflow: "hidden",
                      }}>
                        <img
                          src={item.image} alt={item.name}
                          style={{
                            width: "100%", height: "100%", objectFit: "cover",
                            transition: "transform 0.4s ease",
                            transform: hoveredCard === item.name ? "scale(1.07)" : "scale(1)",
                          }}
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                        {item.tag && (
                          <span style={{
                            position: "absolute", top: "8px", left: "8px",
                            padding: "2px 8px", borderRadius: "50px",
                            fontSize: "0.6rem", fontWeight: "700",
                            fontFamily: "sans-serif",
                            background: "rgba(255,255,255,0.92)", color: "#1a3a2a",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                          }}>{item.tag}</span>
                        )}
                        <div style={{
                          position: "absolute", bottom: "8px", right: "8px",
                          opacity: hoveredCard === item.name ? 1 : 0,
                          transform: hoveredCard === item.name ? "scale(1)" : "scale(0.8)",
                          transition: "all 0.2s ease",
                        }}>
                          <button aria-label={`Add ${item.name}`} style={{
                            width: "32px", height: "32px", borderRadius: "50%",
                            background: "#1a3a2a",
                            borderTop: "none", borderRight: "none", borderBottom: "none", borderLeft: "none",
                            color: "#fff", cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 4px 10px rgba(26,58,42,0.3)",
                          }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title" style={{ fontWeight: "700", color: "#1a3a2a", lineHeight: 1.25 }}>
                          {item.name}
                        </h3>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.2rem" }}>
                          <span style={{ fontSize: "0.65rem", color: "#aaa", fontFamily: "sans-serif" }}>{activeCategory}</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "2px", fontSize: "0.65rem", color: "#d4a853", fontFamily: "sans-serif" }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="#d4a853" stroke="none">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            4.8
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>

        <Footer />

        <style>{`
          /* ─── Base (mobile-first) ─── */
          .hero-inner       { padding: 1.75rem 1rem; }
          .cat-tab          { padding: 0.75rem 0.75rem; font-size: 0.72rem; }
          .sidebar          { display: none; }
          .mobile-pills     { display: block; margin-bottom: 1rem; }
          .main-content     { padding: 1rem 1rem 2.5rem; }
 
          .card-grid        { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.65rem; }
          .card-img         { height: 130px; }
          .card-body        { padding: 0.55rem 0.65rem 0.65rem; }
          .card-title       { font-size: 0.82rem; margin: 0; }
 
          /* ─── Tablet 560px+ ─── */
          @media (min-width: 560px) {
            .hero-inner     { padding: 2rem 1.5rem; }
            .card-grid      { grid-template-columns: repeat(3, 1fr); gap: 0.85rem; }
            .card-img       { height: 150px; }
            .card-body      { padding: 0.65rem 0.8rem 0.8rem; }
            .card-title     { font-size: 0.88rem; }
          }
 
          /* ─── Desktop 768px+ ─── */
          @media (min-width: 768px) {
            .hero-inner     { padding: 3rem 2rem; }
            .cat-tab        { padding: 1rem 1.25rem; font-size: 0.8rem; }
            .sidebar        { display: block; }
            .mobile-pills   { display: none; }
            .main-content   { padding: 2rem 2rem 3rem; }
            .card-grid      { grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)); gap: 1.1rem; }
            .card-img       { height: 175px; }
            .card-body      { padding: 0.8rem 0.9rem 0.9rem; }
            .card-title     { font-size: 0.92rem; }
          }
 
          /* ─── Large 1024px+ ─── */
          @media (min-width: 1024px) {
            .card-grid      { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.4rem; }
            .card-img       { height: 200px; }
            .card-body      { padding: 0.9rem 1rem 1rem; }
            .card-title     { font-size: 0.95rem; }
          }
 
          /* Hide scrollbars */
          div { scrollbar-width: none; }
          div::-webkit-scrollbar { display: none; }
          input::placeholder { color: rgba(250,248,245,0.4); }
        `}</style>
      </div>
    </PageTransition>
  );
};

export default Menu;