import React from "react";
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'

function Header({ cartItemCount, onSearch }) {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <h1>리액트 쇼핑몰</h1>
                </Link>
            </div>
            <nav>
                <li>
                    <Link to="/">홈</Link>
                    <Link to="/category/의류">의류</Link>
                    <Link to="/category/전자기기">전자기기</Link>
                    <Link to="/category/액세서리">액세서리</Link>
                </li>
            </nav>
            <div>
                <SearchBar onSearch={onSearch}></SearchBar>
                <div>
                    <Link to="/cart">
                        <span>shopping_cart</span>
                        {cartItemCount > 0 && (     // 장바구니에 담겨있는 상품의 개수(상품이 추가되었을 때만 표시)
                            <span>{cartItemCount}</span>    // 조건문 렌더링
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;