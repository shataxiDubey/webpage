import React from "react";
import "./SecondComponent.css";
import FourthComponent from './FourthComponent'
import ThirdComponent from "./ThirdComponent";
import FifthComponent from './FifthComponent';
import SixthComponent from './SixthComponent';
const SecondComponent = () => {
  return (
    <div id="secondPart">
      <div id="container">
        <ul className="nav-left">
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>
        <ul className="nav-right">
          <li>fifth</li>
          <li>sixth</li>
        </ul>
      </div>
      <div className="image-text">
        <div className="image">
          <div className="title-image">
            <img
              src="https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="titan watch"
              className="title-image"
            />
          </div>
          <div className="image-row">
            <img
              src="https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="titan watch"
              className="title-image1"
            />

            <img
              src="https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="titan watch"
              className="title-image2"
            />

            <img
              src="https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="titan watch"
              className="title-image3"
            />
          </div>
        </div>
        <div className="content">
          <ThirdComponent />
        </div>
      </div>
      <FourthComponent></FourthComponent>
      <FifthComponent/>
      <SixthComponent/>
    </div>
  );
};

export default SecondComponent;

//