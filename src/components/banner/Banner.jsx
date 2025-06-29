import React from "react";
import "./banner.css";
import skyScrapper from "../../images/skyscrepper.jpg";
export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="banner-layout">
          <h1 className="banner-layout-title">DUBAI IS WAITING FOR YOU</h1>
        </div>
        <img src={skyScrapper} alt="Dubai Banner" className="banner-img" />
      </div>
    </div>
  );
};
