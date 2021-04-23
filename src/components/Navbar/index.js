import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-nav">
        <img
          src="https://i.ibb.co/HHn3V8j/logo.png"
          className="navbar-logo"
          alt="Better"
          href="#"
        />
      </div>
      <div className="navbar-nav">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="navbar-nav">
        <button className="skewBtn blue">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
