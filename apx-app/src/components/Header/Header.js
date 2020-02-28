import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="head-container">
      <div className="hcc-text">Pop Insights</div>
      <img
        alt="apx-logo"
        className="logo"
        src={require("../../images/apx-logo.png")}
      ></img>
      <div className="user-info">
        <div className="user">gtang@apixio.com</div>
        <svg
          className="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 30"
          x="0px"
          y="0px"
          fill="#fff"
        >
          <polygon
            fillRule="evenodd"
            points="19.293 7.293 20.707 8.707 12 17.414 3.293 8.707 4.707 7.293 12 14.586"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
