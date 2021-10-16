import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Miss Elf's Piano Emporium</h1>
      </div>
      <div className="header-middle">
        <h2>
          <Link to="/login" className="link">
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Header;
