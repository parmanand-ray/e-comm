import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#101820",
        color: "#f5f5f5",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "0.75rem", fontSize: "1.1rem" }}>ElectroCart</h3>
          <p style={{ lineHeight: 1.75, color: "#d1d1d1" }}>
            Your one-stop shop for electronics and accessories. Fast shipping,
            secure checkout, and great deals every day.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
            <li>
              <Link to="/" style={{ color: "#f5f5f5", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" style={{ color: "#f5f5f5", textDecoration: "none" }}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: "#f5f5f5", textDecoration: "none" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "#f5f5f5", textDecoration: "none" }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>Customer Service</h4>
          <p style={{ lineHeight: 1.75, color: "#d1d1d1" }}>
            Email: support@electrocart.com
          </p>
          <p style={{ lineHeight: 1.75, color: "#d1d1d1" }}>
            Phone: +1 (800) 123-4567
          </p>
          <p style={{ lineHeight: 1.75, color: "#d1d1d1" }}>
            24/7 support for order inquiries and shipping help.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "1.75rem",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          paddingTop: "1rem",
          textAlign: "center",
          color: "#b0b0b0",
          fontSize: "0.92rem",
        }}
      >
        © {new Date().getFullYear()} ElectroCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
