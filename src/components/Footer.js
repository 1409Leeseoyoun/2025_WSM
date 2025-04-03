import React from "react";
import "../App.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div>
          <h3>리액트 쇼핑몰</h3>
          <p>React로 만든 쇼핑몰</p>
        </div>
        <div>
          <h3>카테고리</h3>
          <li>전자기기</li>
          <li>액세서리</li>
        </div>
        <div>
          <h3>고객센터</h3>
          <p>이메일 : seoyoun8879@gmail.com</p>
          <p>전화 : 010-2113-3950</p>
        </div>
        <div>
          <p>&copy; {currentYear} 리액트 쇼핑몰. All Right Reseved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
