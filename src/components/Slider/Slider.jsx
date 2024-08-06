import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import slider1 from '../../assets/img/1920X422/img1.jpg'
import slider2 from '../../assets/img/1920X422/img2.jpg'



const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={8000}
      showArrows={true}
    >
      <div className="slide">
      <img src={slider2} alt="Slide 1" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
        </div>
      </div>
      <div className="slide">
      <img src={slider1} alt="Slide 2" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
        </div>
      </div>
     
    </Carousel>
  );
};

export default Slider;
