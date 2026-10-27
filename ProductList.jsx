import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice.jsx";
import Navbar from "./Navbar.jsx";

const plantCategories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { name: "Snake Plant", price: 18.99, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&w=700&q=80" },
      { name: "Peace Lily", price: 22.50, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80" },
      { name: "Spider Plant", price: 14.99, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80" },
      { name: "Golden Pothos", price: 16.50, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80" },
      { name: "Rubber Plant", price: 24.99, image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=700&q=80" },
      { name: "Areca Palm", price: 29.99, image: "https://images.unsplash.com/photo-1597055181300-c6c5b6e9b7d5?auto=format&fit=crop&w=700&q=80" }
    ]
  },
  {
    name: "Low Maintenance Plants",
    plants: [
      { name: "ZZ Plant", price: 21.99, image: "https://images.unsplash.com/photo-1632207691143-643e2e0a3e4d?auto=format&fit=crop&w=700&q=80" },
      { name: "Jade Plant", price: 12.99, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80" },
      { name: "Aloe Vera", price: 13.50, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80" },
      { name: "Ponytail Palm", price: 26.00, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80" },
      { name: "Chinese Evergreen", price: 19.99, image: "https://images.unsplash.com/photo-1597055181300-c6c5b6e9b7d5?auto=format&fit=crop&w=700&q=80" },
      { name: "Philodendron", price: 17.99, image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=700&q=80" }
    ]
  },
  {
    name: "Decorative Plants",
    plants: [
      { name: "Monstera Deliciosa", price: 27.99, image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=700&q=80" },
      { name: "Fiddle Leaf Fig", price: 34.99, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80" },
      { name: "Calathea Orbifolia", price: 25.50, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80" },
      { name: "Bird of Paradise", price: 39.99, image: "https://images.unsplash.com/photo-1597055181300-c6c5b6e9b7d5?auto=format&fit=crop&w=700&q=80" },
      { name: "String of Pearls", price: 15.99, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80" },
      { name: "Parlor Palm", price: 20.99, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80" }
    ]
  }
];

export default function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const addedToCart = Object.fromEntries(cartItems.map((plant) => [plant.name, true]));

  return (
    <div className="shop-page">
      <Navbar onNavigate={onNavigate} activePage="plants" />
      <main className="product-page-content">
        <header className="page-heading">
          <p className="eyebrow">Find your green companion</p>
          <h1>Our Plant Collection</h1>
          <p>Thoughtfully selected plants for every room and every level of plant parent.</p>
        </header>

        {plantCategories.map((category) => (
          <section className="plant-category" key={category.name}>
            <h2>{category.name}</h2>
            <div className="product-list">
              {category.plants.map((plant) => (
                <article className="product-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="product-card-content">
                    <h3>{plant.name}</h3>
                    <p className="product-price">${plant.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-button"
                      type="button"
                      disabled={!!addedToCart[plant.name]}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
      <footer className="site-footer">A little more green, every day.</footer>
    </div>
  );
}
