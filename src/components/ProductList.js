import React from "react";
import ProductItem from "./ProductItem";
import "../App.css";

function ProductList({ products, addToCart, categoryFilter = null, searchTerm = "" }) {
  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    const matchesSearch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
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
