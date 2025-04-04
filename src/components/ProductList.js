import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import "../App.css";

function ProductList({ products, addToCart, searchTerm = "" }) {
  const { category } = useParams(); // URL에서 카테고리 가져오기

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h2>{category ? `${category} 상품 목록` : "전체 상품 목록"}</h2>
      {filteredProducts.length === 0 ? (
        <div>
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="product-list-container">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
