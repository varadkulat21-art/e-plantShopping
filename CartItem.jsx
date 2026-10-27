import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice.jsx";
import Navbar from "./Navbar.jsx";

export default function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    window.alert("Coming Soon! Thank you for shopping with Paradise Nursery.");
  };

  return (
    <div className="cart-page">
      <Navbar onNavigate={onNavigate} activePage="cart" />
      <main className="cart-content">
        <header className="page-heading cart-heading">
          <p className="eyebrow">Your leafy picks</p>
          <h1>Shopping Cart</h1>
          <p>Review your plants and update quantities before checkout.</p>
        </header>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <span className="empty-cart-icon" aria-hidden="true">🪴</span>
            <h2>Your cart is looking a little empty</h2>
            <p>There are plenty of lovely plants waiting to come home with you.</p>
            <button className="primary-button" type="button" onClick={() => onNavigate?.("plants")}>
              Continue Shopping
            </button>
          </section>
        ) : (
          <>
            <section className="cart-container" aria-label="Cart items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.name}>
                  <img className="cart-item-image" src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p className="unit-price">Unit price: ${item.price.toFixed(2)}</p>
                    <p className="line-total">Item total: <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
                    <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                      <button className="quantity-button" type="button" onClick={() => handleDecrement(item)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                      <span className="quantity-value" aria-live="polite">{item.quantity}</span>
                      <button className="quantity-button" type="button" onClick={() => handleIncrement(item)} aria-label={`Increase ${item.name} quantity`}>+</button>
                    </div>
                    <button className="delete-button" type="button" onClick={() => handleRemove(item)}>Delete</button>
                  </div>
                </article>
              ))}
            </section>

            <section className="cart-summary">
              <div>
                <p className="summary-label">Total cost</p>
                <p className="grand-total">${totalAmount.toFixed(2)}</p>
              </div>
              <div className="cart-actions">
                <button className="secondary-button" type="button" onClick={() => onNavigate?.("plants")}>Continue Shopping</button>
                <button className="primary-button" type="button" onClick={handleCheckout}>Checkout</button>
              </div>
            </section>
          </>
        )}
      </main>
      <footer className="site-footer">Thank you for choosing Paradise Nursery.</footer>
    </div>
  );
}
