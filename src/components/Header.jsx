import React from "react";
import "./Header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <div className="headerRight">
        <h3>
          <span className="ahmet">Murat Özkan </span>Fullstack Web Developer
        </h3>
      </div>
      <Nav />
    </div>
  );
};

export default Header;