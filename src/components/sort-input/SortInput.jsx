import React from "react";
import "./sortInput.css";
export const SortInput = ({ toursLength, sortItem, setSortItem }) => {
  return (
    <div className="sort-input-container">
      <div className="available-tours">
        {toursLength} tours found <i className="bi bi-info-circle"></i>
      </div>
      <select onChange={(e) => setSortItem(e.target.value)} value={sortItem}>
        <option value="recommended">Recommended</option>
        <option value="low">Price - low to high</option>
        <option value="high">Price - high to low</option>
      </select>
    </div>
  );
};
