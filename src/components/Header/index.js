import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";
import { Link as LinkR } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-wrapper">
        {/* <div className="header"> */}
        <div className="header-info">
          <span>TECH BETTER SERVICES PVT LTD</span>
        </div>

        <div className="header-social">
          <span>
            <a href="tel:+919898989898" className="header-link">
              <FontAwesomeIcon icon={faPhoneAlt} size="sm" /> +91-9898989898
            </a>
          </span>
          <LinkR to="/blog" className="header-link">
            Blog
          </LinkR>
          <a
            href="https://www.facebook.com/"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="sm" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="sm" />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="sm" />
          </a>
          <a
            href="https://www.youtube.com/"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="sm" />
          </a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
