import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../App.css";

function Header({ cartItemCount, onSearch }) {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h1>리액트 쇼핑몰</h1>
        </Link>
      </div>
      <nav className="category-content">
        <Link to="/">홈</Link>
        <p>|</p>
        <Link to="/category/의류">의류</Link>
        <p>|</p>
        <Link to="/category/전자기기">전자기기</Link>
        <p>|</p>
        <Link to="/category/액세서리">액세서리</Link>
      </nav>
      <div>
        <SearchBar onSearch={onSearch}></SearchBar>
        <div className="cart-link">
          <Link to="/cart">
            <span>shopping_cart</span>
            {cartItemCount > 0 && (
              <span>{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
