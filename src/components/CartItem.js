import React from "react";
import "../App.css";

function CartItem({ item, updateQuantity, removeFromCart }) {
  const { product, quantity } = item;

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) updateQuantity(product.id, quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p>{formatPrice(product.price)}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={handleDecrease} disabled={quantity <= 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="cart-item-total">
        <p>{formatPrice(product.price * quantity)}</p>
        <button onClick={handleRemove} className="cart-item-remove">
          삭제
        </button>
      </div>
    </div>
  );
}

export default CartItem;
