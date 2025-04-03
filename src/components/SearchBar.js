import React, { useState } from "react";
import "../App.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="상품 검색"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          <span>검색</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
