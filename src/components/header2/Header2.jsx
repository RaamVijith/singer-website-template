import React, { useState } from 'react';
import './Header2.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const Header2 = () => {
  const [dropdown, setDropdown] = useState(null);
  const [menuActive, setMenuActive] = useState(false);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header2">
      <div className="header2-logo">
      <i class="fa fa-bars" aria-hidden="true"></i>
      <div >Products</div>
      </div>
      

      <div className="header2-menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="header2-nav">
        <ul className={`header2-nav-list ${menuActive ? 'active' : ''}`}>
          <li
            className="header2-nav-item"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            Brands
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            {dropdown === 'products' && (
              <div className="header2-dropdown">
                <ul className="header2-dropdown-list">
                  <li>Mobiles & Tablets, Computers, Printers, Gadgets & Accessories</li>
                  <li>Home & Kitchen Appliances</li>
                  <li>TV, Home Audio Video & Interactive Flat Panel Smart Boards</li>
                  <li>Refrigerators, Freezers, Coolers, Air Conditioners & Washing Machines</li>
                  <li>Fitness Equipment, Musical Instruments, Medical & Other Products</li>
                  <li>Furniture</li>
                  <li>Agro Products, Bicycles, Motor Bikes & Automobile</li>
                  <li>Gift Vouchers, Gift Packages & Bundle Offers</li>
                </ul>
              </div>
            )}
          </li>
          <li className="header2-nav-item">Duty Free</li>
          <li className="header2-nav-item">Added Services</li>
          <li className="header2-nav-item">Gift Cards</li>
          <li className="header2-nav-item">Omni Cart</li>
          <li className="header2-nav-item">Hot Deals</li>
          <li className="header2-nav-item">Singer Red Loyalty Program</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header2;
