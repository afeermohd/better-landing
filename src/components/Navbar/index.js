import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-nav">
          <Link to="/">
            <img
              src="https://i.ibb.co/HHn3V8j/logo.png"
              className="navbar-logo"
              alt="Better"
              href="#"
            />
          </Link>
        </div>
        {/* <div className="navbar-nav">
          <NavLink
            to="construction"
            activeClassName="selected-nav"
            className="nav"
          >
            Gallery
          </NavLink>
          <NavLink
            to="construction"
            activeClassName="selected-nav"
            className="nav"
          >
            Reviews
          </NavLink>
          <NavLink
            to="construction"
            activeClassName="selected-nav"
            className="nav"
          >
            About Us
          </NavLink>
        </div> */}
        <div className="navbar-nav">
          {/* <input
          className="search-input"
          type="text"
          placeholder="Search"
        ></input> */}
        </div>
        <div className="navbar-nav">
          <FontAwesomeIcon icon={faSearch} size="2x" className="search-input" />
          <button className="btn blue">Get a Qoute</button>
          <button className="btn blue">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
