import React from 'react'

export const FooterIcons = () => {
  return (
    <div className="footer-item">
      <div className="footer-item-title">Work With Us</div>
      <ul className="footer-item-list">
        <li className="footer-item-link">Become a Supplier</li>
        <li className="footer-item-link">Become an Affiliate Partner</li>
      </ul>
      <div className="footer-icons">
        <div className="icon">
          <i style={{ color: "#c0392b" }} className="bi bi-instagram"></i>
        </div>
        <div className="icon">
          <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
        </div>
        <div className="icon">
          <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
        </div>
        <div className="icon">
          <i style={{ color: "darkblue" }} className="bi bi-linkedin"></i>
        </div>
      </div>
      <div className="footer-copy-right">
        Copyright &copy; 2024 Dubai Safari
      </div>
    </div>
  );
}
