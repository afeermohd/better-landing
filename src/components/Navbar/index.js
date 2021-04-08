import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-nav">
        <img
          src="https://i.ibb.co/HHn3V8j/logo.png"
          className=""
          alt="Better"
          height="50px"
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
        <button class="skewBtn blue">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
