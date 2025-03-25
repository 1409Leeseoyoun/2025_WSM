import React from "react";
import ProductItem from "./ProductItem";

function ProductList({products, addToCart, categoryFilter = null, searchTerm = ''}) {
    // 카테고리 필터
    let filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;     // filter() : 주어진 조건을 만족하는 요소만 포함하는 new 배열을 반환

    // 검색어 필터 적용
    if(searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().include(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().include(searchTerm.toLowerCase())
        )
    }
    
    return (
        <div className="product-list-container">
            {filteredProducts.length===0?(
                <div>
                    <p>검색 결과가 없습니다.</p>
                </div>
            ):(
                <div>
                    {filteredProducts.map(product => (      // map() : 배열의 각 요소를 새로운 배열로 변환
                        <ProductItem
                            key={product.id}    // React 최적화를 위해 필수
                            product={product}
                            addToCart={addToCart} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;