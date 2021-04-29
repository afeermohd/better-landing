import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    return () => {
      setPrevScrollPos(document.body.getBoundingClientRect().top);
      setVisible(document.body.getBoundingClientRect().top > prevScrollPos);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div
      className={`navbar-container ${visible ? "active-nav" : "hidden-nav"}`}
      style={{ top: visible ? "0" : "-100px" }}
    >
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

        <div className="navbar-nav"></div>
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
