import React from "react";
import { useSelector } from "react-redux";

export default function Navbar({ onNavigate, activePage = "" }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = (page) => (event) => {
    event.preventDefault();
    onNavigate?.(page);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={navigate("home")}>
        <span className="brand-icon" aria-hidden="true">✿</span>
        Paradise Nursery
      </a>
      <div className="nav-links">
        <a className={activePage === "home" ? "active" : ""} href="#home" onClick={navigate("home")}>Home</a>
        <a className={activePage === "plants" ? "active" : ""} href="#plants" onClick={navigate("plants")}>Plants</a>
        <a className={`cart-nav-link ${activePage === "cart" ? "active" : ""}`} href="#cart" onClick={navigate("cart")}>
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{cartQuantity}</span>
        </a>
      </div>
    </nav>
  );
}
