import React, { useRef, useState } from "react";
import "./RecentlyViewedProducts.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img1 from "../../assets/img/212X200/img1.jpg";
import img2 from "../../assets/img/212X200/img2.jpg";
import img3 from "../../assets/img/212X200/img3.jpg";
import img4 from "../../assets/img/212X200/img4.jpg";
import img5 from "../../assets/img/212X200/img5.jpg";
import img6 from "../../assets/img/212X200/img6.jpg";
import img7 from "../../assets/img/212X200/img7.jpg";
import img8 from "../../assets/img/212X200/img8.jpg";

const products = [
  {
    id: 1,
    image: img1,
    title: "Samsung Tab A54 64GB",
    cat: "Tab",
    price: "$685,00",    
  },
  {
    id: 2,
    image: img2,
    title: "Table White",
    price: "$685,00",
    cat: "Laptop",
    
  },
  {
    id: 3,
    image: img3,
    title: "Samsung tab 64GB",
    price: "$685,00",
    cat: "Laptop",
  },
  {
    id: 4,
    image: img4,
    title: "MacBook pro",
    price: "$685,00",
    cat: "Laptop",
  },
  {
    id: 5,
    image: img5,
    title: "Apple MacBook",
    price: "$685,00",
    cat: "Laptop",
  },
  {
    id: 6,
    image: img6,
    title: "Apple MacBook",
    price: "$685,00",
    cat: "Laptop",
  },

  {
    id: 8,
    image: img7,
    title: "Apple MacBook",
    price: "$685,00",
    cat: "Laptop",
  },
  {
    id: 10,
    image: img8,
    title: "Apple MacBook",
    price: "$685,00",
    cat: "Laptop",
  },
];

const RecentlyViewedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productContainerRef = useRef(null);

  const scrollNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
      productContainerRef.current.scrollLeft +=
        productContainerRef.current.children[currentIndex].offsetWidth;
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      productContainerRef.current.scrollLeft -=
        productContainerRef.current.children[currentIndex].offsetWidth;
    }
  };

  return (
    <div className="featured-collections">
      <div className="topHeader">
      <p>Recently Viewed</p>
      <div>
        <div className="nextButton">
          <div className="scroll-button " onClick={scrollPrev}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div className="scroll-button " onClick={scrollNext}>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      </div>
      
      <div className="products-container">
        <div className="products" ref={productContainerRef}>
          {products.map((product) => (
            <div key={product.id} className="product">
             <h6>{product.cat}</h6>
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} />
              
              <div className="customComponent">
                <h5>{product.price}</h5>
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedProducts;
