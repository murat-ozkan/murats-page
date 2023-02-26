import React from "react";
import "./Header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <div className="headerRight">
        <h3>
          <span className="green">DIGITAL</span>
          <span className="white">WAY</span><br />
          <span className="fdc"> Frontend Development Courses</span>
        </h3>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
