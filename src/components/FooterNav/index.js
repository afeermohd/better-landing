import React from "react";
import "./style.css";
import Footer from "../Footer";

const FooterNav = () => {
  return (
    <div className="footer-container">
      <div className="footer-nav">
        <div className="footer-headline">
          <h3>FOR THE LOVE OF BETTER</h3>
        </div>
        <div>
          <ul className="footer-list">
            <li to="construction">Construction</li>
            <li>Interior</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Careers</li>
            <li>Social Media</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FooterNav;
