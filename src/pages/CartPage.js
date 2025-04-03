import React from "react";
import Cart from "../components/Cart";
import { clear } from "@testing-library/user-event/dist/clear";
import "../App.css";

function CartPage({ cartItems, updateQuantity, removeFormCart, clearCart }) {
  return (
    <div className="cart-page">
      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFormCart={removeFormCart}
        clearCart={clearCart}
      />
    </div>
  );
}

export default CartPage;
