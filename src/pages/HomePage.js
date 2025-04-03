import React from "react";
import ProudctList from "../components/ProductList";
import "../App.css";

function HomePage({ products, addToCart, searchTerm }) {
  return (
    <div>
      <div>
        <div>
          <h1>리액트로 만든 쇼핑몰에 오신 것을 환영합니다.</h1>
          <p>다양한 상품을 둘러보세요.</p>
        </div>
      </div>
      <div className="product-container">
        {/* 조건부 검색 */}
        <h2>{searchTerm ? `'${searchTerm}' 검색 결과` : `모든 상품`}</h2>
        <div>
          <ProudctList
            products={products}
            addToCart={addToCart}
            searchTerm={searchTerm}
        />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
