import React from 'react';
import './Deals.css';
import img1 from '../../assets/img/190X150/img1.png'
import img2 from '../../assets/img/190X150/img2.jpg'
import img3 from '../../assets/img/190X150/img3.jpg'
import img4 from '../../assets/img/190X150/img4.png'


const Deals = () => {
  return (
    <div className="deals-container">
      <div className="deal-item">
        <img src={img1} alt="Camera" />
        <div>
        <p>CATCH BIG <a>DEALS</a> ON THE CAMERAS</p>
        <h6 href="#">Shop now</h6>
        </div>
        
      </div>
      <div className="deal-item">
        <img src={img2} alt="Laptop" />
        <div>
        <p>CATCH BIG <a>DEALS</a> ON THE CAMERAS</p>
        <h6 href="#">Shop now</h6>
        </div>
      </div>
      <div className="deal-item">
        <img src={img3} alt="Desktop" />
        <div>
        <p>CATCH BIG <a>DEALS</a> ON THE CAMERAS</p>
        <h6 href="#">Shop now</h6>
        </div>
      </div>
      <div className="deal-item">
        <img src={img4} alt="Accessories" />
        <div>
        <p>CATCH BIG <a>DEALS</a> ON THE CAMERAS</p>
        <h6 href="#">Shop now</h6>
        </div>
      </div>
    </div>
  );
};

export default Deals;
