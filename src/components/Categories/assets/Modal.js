import React from "react";
import Chevron from "./Chevron";
import "./Modal.css";
import { Link as LinkR, NavLink } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Construction", to: "/construction" },
  { title: "Concept Housing", to: "/concept-housing" },
  { title: "Projects", to: "/projects" },
  { title: "Testimonials", to: "/testimonials" },
  { title: "Budget Calculator", to: "/budget-calculator" },
];

export const Modal = ({ children, title }) => {
  return (
    <div className="modal-section" id="dummy">
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <div className="modal-wrapper">
          <div className="modal-links">
            {navLinks.map((item, index) => (
              <NavLink
                to={item.to}
                activeClassName="selected-modal-link"
                className="modal-link"
                key={index}
              >
                <span className="">{item.title}</span>
              </NavLink>
            ))}
          </div>
          <LinkS
            to="dummy1"
            smooth={true}
            duration={500}
            className="footer-link"
            // key={index}
          >
            <LinkR to="/">
              <div className="modal-close">
                <Chevron
                  className={`listaccordian-icon rotate180`}
                  width={10}
                  fill={"white"}
                />
              </div>
            </LinkR>
          </LinkS>
          <div className="category-heading">
            <span>{title}</span>
          </div>

          {children}
        </div>
      </motion.div>
    </div>
  );
};
