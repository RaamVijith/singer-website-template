import React from 'react';
import './Footer.css';
import logo from '../../assets/img/logo/logo.png';
import img1 from '../../assets/img/100X60/img1.jpg';
import img2 from '../../assets/img/100X60/img2.jpg';
import img3 from '../../assets/img/100X60/img3.jpg';
import img4 from '../../assets/img/100X60/img4.jpg';
import img5 from '../../assets/img/100X60/img5.jpg';
import img6 from '../../assets/img/100X60/img6.jpg';
import img7 from '../../assets/img/100X60/img7.jpg';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <img src={logo} alt="Your Logo" />
          <p>QUESTION OR FEEDBACK?</p>
          <p><i className="fas fa-phone"></i> +1 234 5678</p>
          <p><i className="fas fa-envelope"></i> mail@mail.com</p>
          
        </div>
        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Get in Touch</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SHOP</h3>
          <ul>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Bags & Accessories</a></li>
            <li><a href="#">Top Brands</a></li>
            <li><a href="#">Sale & Special Offers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>POLICIES</h3>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Return & Refund</a></li>
            <li><a href="#">Payment Policy</a></li>
            <li><a href="#">Grievance Cell</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyrights All rights reserved. Powered by <a href="#">xCommerz™</a></p>
        
        <div className="payment-methods">
          <img src={img1} alt="Visa" />
          <img src={img2} alt="Visa" />
          <img src={img3} alt="Visa" />
          <img src={img4} alt="Visa" />
          <img src={img5} alt="Visa" />
          <img src={img6} alt="Visa" />
          <img src={img7} alt="Visa" />
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
