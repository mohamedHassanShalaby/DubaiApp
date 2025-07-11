import React from "react";
import "./services.css";
export const Services = () => {
  return (
    <div className="services">
      <div className="service-item">
        <i className="bi bi-card-image service-icon"></i>
        Aventures
      </div>
      <div className="service-item">
        <i className="bi bi-people-fill service-icon"></i>
        Family tours
      </div>
      <div className="service-item">
        <i className="bi bi-building service-icon"></i>
        City cards
      </div>
      <div className="service-item">
        <i className="bi bi-globe service-icon"></i>
        Multy-day trips
      </div>
    </div>
  );
};
