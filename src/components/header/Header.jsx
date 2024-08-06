import React, { useState } from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/img/logo/logo.png";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      {/* <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li
            onMouseEnter={() => handleDropdownToggle("shop")}
            onMouseLeave={() => handleDropdownToggle(null)}
          >
            <a href="#">Shop</a>
            {openDropdown === "shop" && (
              <div className="dropdown-menu">
                <a href="#">List Layout</a>
                <a href="#">Grid Layout</a>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleDropdownToggle("products")}
            onMouseLeave={() => handleDropdownToggle(null)}
          >
            <a href="#">Products</a>
            {openDropdown === "products" && (
              <div className="dropdown-menu">
                <a href="#">Product 1</a>
                <a href="#">Product 2</a>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleDropdownToggle("blog")}
            onMouseLeave={() => handleDropdownToggle(null)}
          >
            <a href="#">Blog</a>
            {openDropdown === "blog" && (
              <div className="dropdown-menu">
                <a href="#">Article 1</a>
                <a href="#">Article 2</a>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleDropdownToggle("pages")}
            onMouseLeave={() => handleDropdownToggle(null)}
          >
            <a href="#">Pages</a>
            {openDropdown === "pages" && (
              <div className="dropdown-menu">
                <a href="#">Page 1</a>
                <a href="#">Page 2</a>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleDropdownToggle("contact")}
            onMouseLeave={() => handleDropdownToggle(null)}
          >
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav> */}

      <div className="search-bar">
      <input type="text" placeholder="Search for Products" />
      <select>
        <option value="all-categories">All Categories</option>
        {/* Add more categories as options here */}
      </select>
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>


      <div className="header-icons">
        
        <a href="#">
          <i className="fas fa-user"></i>
        </a>
        <a href="#">
          <i className="fas fa-heart"></i>
        </a>
        <a href="#">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </header>
  );
};

export default Header;
