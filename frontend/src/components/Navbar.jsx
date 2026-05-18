import React from "react";
import { Link } from "react-router-dom";

const navLinkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: 500,
  transition: "color 0.2s ease",
};

const Navbar = () => {
  return (
    <header style={{ width: "100%", boxShadow: "0 1px 10px rgba(0,0,0,0.05)" }}>
      <div
        style={{
          backgroundColor: "#0d6efd",
          color: "#ffffff",
          textAlign: "center",
          padding: "0.6rem 1rem",
          fontSize: "0.95rem",
          fontWeight: 500,
        }}
      >
        Free shipping on orders over $50 • Fast delivery • Secure checkout
      </div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          backgroundColor: "#ffffff",
        }}
      >
        <Link to="/" style={{ ...navLinkStyle, fontSize: "1.3rem", color: "#0d6efd" }}>
          ElectroCart
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
          <Link to="/shop" style={navLinkStyle}>
            Shop
          </Link>
          <Link to="/about" style={navLinkStyle}>
            About
          </Link>
          <Link to="/contact" style={navLinkStyle}>
            Contact
          </Link>
          <Link
            to="/cart"
            style={{
              ...navLinkStyle,
              padding: "0.55rem 0.9rem",
              border: "1px solid #0d6efd",
              borderRadius: "999px",
              color: "#0d6efd",
            }}
          >
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
