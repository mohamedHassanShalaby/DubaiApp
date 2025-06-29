import React from "react";
import { currencies, languages } from "../../data";

export const SelectBox = () => {
  return (
    <>
      <div className="select-box">
        <label className="select-box-label">Languages</label>
        <select className="select-box-input">
          {languages.map((item) => (
            <option key={item.id}>{item.value}</option>
          ))}
        </select>
      </div>
      <div className="select-box">
        <label className="select-box-label">Currencies</label>
        <select className="select-box-input">
          {currencies.map((item) => (
            <option key={item.id}>{item.value}</option>
          ))}
        </select>
      </div>
    </>
  );
};
