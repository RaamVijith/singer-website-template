import React, { useState } from "react";
import "./SpecialOffers.css";
import img1 from "../../assets/img/320X300/img1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img2 from '../../assets/img/212X200/img1.jpg';
import img3 from '../../assets/img/212X200/img2.jpg';
import img4 from '../../assets/img/212X200/img3.jpg';
import img5 from '../../assets/img/212X200/img4.jpg';
import img6 from '../../assets/img/212X200/img5.jpg';
import img7 from '../../assets/img/212X200/img6.jpg';
import img8 from '../../assets/img/212X200/img7.jpg';
import img9 from '../../assets/img/212X200/img8.jpg';



const productsData = {
  featured: [
    {
      id: 1,
      img:img2,
      cat:"Teb",
      name: "Product 1",      
      price: "$100.00",
    },
    {
      id: 2,
      img:img3,
      cat:"Teb",
      name: "Product 2",
      price: "$200.00",
    },
    {
      id: 3,
      img:img4,
      cat:"Teb",
      name: "Product 3",
      price: "$300.00",
    },
    {
        id: 1,
        img:img5,
        cat:"Teb",
        name: "Product 1",
        price: "$100.00",
      },
      {
        id: 2,
        img:img6,
      cat:"Teb",
        name: "Product 2",
        price: "$200.00",
      },
      {
        id: 3,
        img:img7,
      cat:"Teb",
        name: "Product 3",
        price: "$300.00",
      },
      {
        id: 2,
        img:img8,
      cat:"Teb",
        name: "Product 2",
        price: "$200.00",
      },
      {
        id: 3,
        img:img9,
      cat:"Teb",
        name: "Product 3",
        price: "$300.00",
      },
  ],
  onSale: [
    {
        id: 1,
        img:img5,
        cat:"Teb",
        name: "Product 1",      
        price: "$100.00",
      },
      {
        id: 2,
        img:img6,
        cat:"Teb",
        name: "Product 2",
        price: "$200.00",
      },
      {
        id: 3,
        img:img7,
        cat:"Teb",
        name: "Product 3",
        price: "$300.00",
      },
      {
          id: 1,
          img:img8,
          cat:"Teb",
          name: "Product 1",
          price: "$100.00",
        },
        {
          id: 2,
          img:img9,
        cat:"Teb",
          name: "Product 2",
          price: "$200.00",
        },
        {
          id: 3,
          img:img4,
        cat:"Teb",
          name: "Product 3",
          price: "$300.00",
        },
        {
          id: 2,
          img:img3,
        cat:"Teb",
          name: "Product 2",
          price: "$200.00",
        },
        {
          id: 3,
          img:img9,
        cat:"Teb",
          name: "Product 3",
          price: "$300.00",
        },
  ],
  topRated: [
    {
        id: 1,
        img:img4,
        cat:"Teb",
        name: "Product 1",      
        price: "$100.00",
      },
      {
        id: 2,
        img:img8,
        cat:"Teb",
        name: "Product 2",
        price: "$200.00",
      },
      {
        id: 3,
        img:img4,
        cat:"Teb",
        name: "Product 3",
        price: "$300.00",
      },
      {
          id: 1,
          img:img5,
          cat:"Teb",
          name: "Product 1",
          price: "$100.00",
        },
        {
          id: 2,
          img:img6,
        cat:"Teb",
          name: "Product 2",
          price: "$200.00",
        },
        {
          id: 3,
          img:img7,
        cat:"Teb",
          name: "Product 3",
          price: "$300.00",
        },
        {
          id: 2,
          img:img8,
        cat:"Teb",
          name: "Product 2",
          price: "$200.00",
        },
        {
          id: 3,
          img:img9,
        cat:"Teb",
          name: "Product 3",
          price: "$300.00",
        },
  ],
};

const SpecialOffers = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="special-offer">
        <div className="special-offer-container">
          <h2>
            Special
            <br />
            Offer
          </h2>
          <h1>$120</h1>
        </div>

        <div className="offer-details">
          <img src={img1} alt="Special Offer" />
          <h6>
            Dell XPS 13 9315 Touch i5 8GB RAM, 256GB SSD with Microsoft Office
          </h6>
          <p>
            <span className="original-price">$999.00</span>{" "}
            <span className="discounted-price">$79.00</span>
          </p>
          <div className="offer-deatails-inside">
            <p>Available: 6</p>
            <p>Already Sold: 28</p>
          </div>
          
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}></div>
          </div>
          <p>Hurry Up! Offer ends in:</p>
          <div className="countdown">
            <div>
              00 <span>Hours</span>
            </div>
            <div>
              00 <span>Minutes</span>
            </div>
            <div>
              00 <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-section">
        <div className="tabs">
          
          <button
            className={activeTab === "featured" ? "active" : ""}
            onClick={() => handleTabClick("featured")}
          >
            Featured
          </button>
          <button
            className={activeTab === "onSale" ? "active" : ""}
            onClick={() => handleTabClick("onSale")}
          >
            On Sale
          </button>
          <button
            className={activeTab === "topRated" ? "active" : ""}
            onClick={() => handleTabClick("topRated")}
          >
            Top Rated
          </button>
        </div>
        <div className="tab-content">
          {productsData[activeTab].map((product) => (
            <div className="product2" key={product.id}>
                <h6>{product.cat}</h6>
                <h5>{product.name}</h5>
              <img src={product.img} alt={product.name} />
              <div className="product2-inside">
              <p>{product.price}</p>
              <i class="fa fa-cart-plus" aria-hidden="true"></i>

              </div>    
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
