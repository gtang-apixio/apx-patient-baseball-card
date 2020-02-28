import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="head-container">
      <div className="hcc-text">HCC Identifier</div>
      <img
        alt="apx-logo"
        className="logo"
        src={require("../../images/apx-logo.png")}
      ></img>
      {/* <img
        alt="group-logo"
        className="logo"
        src={require("../../images/group-logo.png")}
      ></img> */}
      <div className="user">gtang@apixio.com</div>
    </div>
  );
}

export default Header;
