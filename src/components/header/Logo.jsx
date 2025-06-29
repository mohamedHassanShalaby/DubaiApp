import React from "react";
import logo from "../../images/logo.png";

export const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="dubai-logo" className="logo-img" />
      <div className="logo-text">
        <b>DUBAI</b>
        <b>DESERT</b>
        <b>SAFARI</b>
      </div>
    </div>
  );
};
