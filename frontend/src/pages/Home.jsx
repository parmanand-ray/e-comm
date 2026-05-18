import React from "react";

const Home = () => {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", color: "#111", lineHeight: 1.7 }}>
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#0d6efd", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1rem" }}>
          Welcome to ElectroCart
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", margin: "0 auto 1rem", maxWidth: "780px" }}>
          Discover the Best Electronics & Accessories for Every Lifestyle
        </h1>
        <p style={{ maxWidth: "720px", margin: "0 auto", fontSize: "1rem", color: "#4d5563" }}>
          ElectroCart offers top-rated gadgets, smart accessories, and everyday electronics with fast shipping, secure checkout, and the best deals in one place.
        </p>
      </section>

      <section style={{ padding: "3rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <article style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Shop Popular Categories
          </h2>
          <p style={{ color: "#4d5563", maxWidth: "760px" }}>
            Browse our curated collection of electronics, audio, charging gear, phone accessories, and smart devices. Every product is selected to make your tech life easier.
          </p>
        </article>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <article style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "18px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)" }}>
            <h3 style={{ marginBottom: "0.75rem" }}>Audio & Headphones</h3>
            <p style={{ color: "#475569" }}>
              Find wireless headphones, earbuds, and audio accessories designed for premium sound.
            </p>
          </article>
          <article style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "18px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)" }}>
            <h3 style={{ marginBottom: "0.75rem" }}>Chargers & Power</h3>
            <p style={{ color: "#475569" }}>
              Stay powered with fast chargers, portable power banks, and reliable cables for all devices.
            </p>
          </article>
          <article style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "18px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)" }}>
            <h3 style={{ marginBottom: "0.75rem" }}>Phone Accessories</h3>
            <p style={{ color: "#475569" }}>
              Protect your phone and express your style with cases, screen protectors, mounts, and more.
            </p>
          </article>
        </div>
      </section>

      <section style={{ backgroundColor: "#f8fafc", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gap: "2rem" }}>
          <article>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Why shop at ElectroCart?</h2>
            <p style={{ color: "#475569", maxWidth: "760px" }}>
              ElectroCart delivers a seamless shopping experience for tech lovers and everyday shoppers. Enjoy secure purchases, fast delivery, and a wide range of electronics backed by helpful customer support.
            </p>
          </article>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            <article style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "16px", boxShadow: "0 8px 28px rgba(15, 23, 42, 0.06)" }}>
              <h3 style={{ marginBottom: "0.75rem" }}>Fast shipping</h3>
              <p style={{ color: "#475569" }}>Receive orders quickly with reliable delivery across the country.</p>
            </article>
            <article style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "16px", boxShadow: "0 8px 28px rgba(15, 23, 42, 0.06)" }}>
              <h3 style={{ marginBottom: "0.75rem" }}>Secure checkout</h3>
              <p style={{ color: "#475569" }}>Shop with confidence using encrypted payment processing.</p>
            </article>
            <article style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "16px", boxShadow: "0 8px 28px rgba(15, 23, 42, 0.06)" }}>
              <h3 style={{ marginBottom: "0.75rem" }}>Top deals</h3>
              <p style={{ color: "#475569" }}>Discover value offers on best-selling electronics and accessories.</p>
            </article>
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <article>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Explore Electronics with ElectroCart</h2>
          <p style={{ color: "#475569", maxWidth: "760px" }}>
            ElectroCart helps customers find the latest gadgets, reliable accessories, and daily tech essentials. Whether you need charging solutions, audio gear, or protective phone accessories, our collection is designed for quality and convenience.
          </p>
        </article>
        <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ backgroundColor: "#eff6ff", color: "#0d6efd", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 500 }}>Electronics</span>
          <span style={{ backgroundColor: "#eff6ff", color: "#0d6efd", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 500 }}>Tech Accessories</span>
          <span style={{ backgroundColor: "#eff6ff", color: "#0d6efd", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 500 }}>Fast Delivery</span>
          <span style={{ backgroundColor: "#eff6ff", color: "#0d6efd", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 500 }}>Secure Checkout</span>
        </div>
      </section>
    </main>
  );
};

export default Home;
