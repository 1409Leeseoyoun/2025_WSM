import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../App.css";

function Cart({ cartItems = [], updateQuantity, removeQuantity, clearCart }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  };

  const handlerCheckout = () => {
    alert("결제 화면으로 넘어갑니다.");
  };

  return (
    <div>
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>장바구니가 비어있습니다.</p>
          <Link to="/">쇼핑 계속하기</Link>
        </div>
      ) : (
        <>
          <div className="cart-header">
            <span>상품</span>
            <span>수량</span>
            <span>합계</span>
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              updateQuantity={updateQuantity}
              removeQuantity={removeQuantity}
            />
          ))}
          <div className="cart-footer">
            <p>총 합계: {formatPrice(calculateTotal())}</p>
            <button onClick={clearCart}>장바구니 비우기</button>
            <button onClick={handlerCheckout}>결제하기</button>
          </div>
          <Link to="/">쇼핑 계속하기</Link>
        </>
      )}
    </div>
  );
}

export default Cart;
