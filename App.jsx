import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === "plants") setShowProductList(true);
    if (page === "home") setShowProductList(false);
  };

  if (currentPage === "cart") {
    return <CartItem onNavigate={navigateTo} />;
  }

  if (showProductList && currentPage === "plants") {
    return <ProductList onNavigate={navigateTo} />;
  }

  return (
    <main className="landing-page">
      <Navbar onNavigate={navigateTo} activePage="home" />
      <section className="background-image">
        <div className="landing-overlay">
          <div className="landing-content">
            <p className="eyebrow light-eyebrow">Bring nature home</p>
            <h1>Welcome To Paradise Nursery</h1>
            <p className="landing-description">
              Discover plants that make your space feel calmer, brighter, and more alive.
            </p>
            <button
              className="get-started-button"
              type="button"
              onClick={() => {
                setShowProductList(true);
                setCurrentPage("plants");
              }}
            >
              Get Started <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>
      <AboutUs />
      <footer className="site-footer">Made for plant lovers · Paradise Nursery</footer>
    </main>
  );
}
