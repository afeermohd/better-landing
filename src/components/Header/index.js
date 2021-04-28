import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-wrapper">
        <div className="header">
          <div className="header-info">
            <div>TECH BETTER SERVICES PVT LTD</div>
            <div>+91929929292</div>
          </div>
          <div className="header-social">
            <div>Blog</div>
            <FontAwesomeIcon icon={faFacebook} size="sm" />
            <FontAwesomeIcon icon={faInstagram} size="sm" />
            <FontAwesomeIcon icon={faLinkedin} size="sm" />
            <FontAwesomeIcon icon={faYoutube} size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;