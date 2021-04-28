import React from "react";
import Chevron from "./Chevron";
import "./Modal.css";
// import "./DisplayConstruction/ListAccordian.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Modal = ({ children }) => {
  // if (!open) return null;
  return (
    <div className="modal-section">
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <div className="modal-wrapper">
          <Link to="/">
            <div
              className="modal-close"
              //  onClick={onClose}
            >
              <Chevron
                className={`listaccordian-icon rotate180`}
                width={10}
                fill={"white"}
              />
            </div>
          </Link>
          <div className="links">
            <NavLink
              to="/construction"
              activeClassName="selected-link"
              className="link"
            >
              <div className="">Construction</div>
            </NavLink>
            <NavLink
              to="/interior"
              activeClassName="selected-link"
              className="link"
            >
              <div className="">Interior</div>
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="selected-link"
              className="link"
            >
              <div className="">Projects</div>
            </NavLink>
            <NavLink
              to="/testimonials"
              activeClassName="selected-link"
              className="link"
            >
              <div className="">Testimonials</div>
            </NavLink>
            <NavLink
              to="/blog"
              activeClassName="selected-link"
              className="link"
            >
              <div className="">Blog</div>
            </NavLink>
          </div>

          {children}
        </div>
      </motion.div>
    </div>
  );
};
