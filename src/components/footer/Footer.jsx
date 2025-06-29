import React from "react";
import "./footer.css";
import { FooterIcons } from "./FooterIcons";
import { SelectBox } from "./SelectBox";
export const Fotter = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
       <SelectBox />
        
      </div>
      <div className="footer-item">
        <div className="footer-item-title">Support</div>
        <ul className="footer-item-list">
          <li className="footer-item-link">Contact</li>
          <li className="footer-item-link">Legal Notice</li>
          <li className="footer-item-link">Privacy Policy</li>
          <li className="footer-item-link">General Terms</li>
          <li className="footer-item-link">Sitemap</li>
        </ul>
      </div>
      <div className="footer-item">
        <div className="footer-item-title">Company</div>
        <ul className="footer-item-list">
          <li className="footer-item-link">About Us</li>
          <li className="footer-item-link">Careers</li>
          <li className="footer-item-link">Blog</li>
          <li className="footer-item-link">Press</li>
          <li className="footer-item-link">Gift Cards</li>
          <li className="footer-item-link">Magazine</li>
          <li className="footer-item-link">Travel Giudes</li>
        </ul>
      </div>
      <FooterIcons />
      
    </footer>
  );
};
