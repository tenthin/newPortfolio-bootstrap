import React from "react";
import "./Menuicon.css";

function Menuicon({ onClick }) {
  return (
    <div className="hamburger-wrapper" onClick={onClick}>
      <div className="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Menuicon;
