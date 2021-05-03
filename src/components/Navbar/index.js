import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    setPrevScrollPos(document.body.getBoundingClientRect().top);
    setVisible(document.body.getBoundingClientRect().top > prevScrollPos);
  }, [prevScrollPos]);

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
          <LinkS
            to="dummy1"
            smooth={true}
            duration={500}
            className="footer-link"
          >
            <LinkR to="/">
              <img
                src="https://i.ibb.co/HHn3V8j/logo.png"
                className="navbar-logo"
                alt="Better"
              />
            </LinkR>
          </LinkS>
        </div>

        <div className="navbar-nav"></div>
        <div className="navbar-nav">
          {/* <FontAwesomeIcon icon={faSearch} size="2x" className="search-input" /> */}
          <button className="btn blue">Get a Qoute</button>
          <button className="btn login">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
