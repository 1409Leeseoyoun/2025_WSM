import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ProductItem({ product, addToCart }) {
  const { id, name, price, imageUrl, category } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const formatPrice = () => {
    // 25000 -> 25,000 (3자리마다 쉼표를 삽입하고 마지막에 원을 붙임)
    return price.toString().replace(/\C(?=(\d{3})+(?!\d))/g, ",") + "원";
  };

  return (
    <div className="product-content">
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img scr={imageUrl} alt={name} />
        </Link>
      </div>
      <div className="product-info">
        <span>{category}</span>
        <h3>
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <p>{formatPrice(price)}</p>
      </div>
      <div className="product-action">
        <button onClick={handleAddToCart}>장바구니에 추가</button>
      </div>
    </div>
  );
}

export default ProductItem;
