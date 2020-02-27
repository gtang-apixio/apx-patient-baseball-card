import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="head-container">
      <img
        alt="apx-logo"
        className="logo"
        src={require("../../images/apx-logo.png")}
      ></img>
    </div>
  );
}

export default Header;
