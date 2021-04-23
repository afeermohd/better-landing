import React from "react";
import Chevron from "./Chevron";
import "./Modal.css";
// import "./DisplayConstruction/ListAccordian.css";
import {Link} from "react-router-dom"

export const Modal = ({  children }) => {
  // if (!open) return null;
  return (
    <div>
      <div className="modal-card">
      <Link to="/">
       <div className="modal-close" 
      //  onClick={onClose}
       >
          <Chevron
            className={`listaccordian-icon rotate180`}
            width={10}
            fill={"white"}
          />
        </div>
      </Link>
        <Link to="/construction">
       <div className="" >
          Construction
        </div>
      </Link>
      <Link to="/interior">
       <div className="" >
          Interior
        </div>
      </Link>
      <Link to="/projects">
       <div className="" >
          Projects
        </div>
      </Link>
       <Link to="/testimonials">
       <div className="" >
          Testimonials
        </div>
      </Link>
       <Link to="/blog">
       <div className="" >
          Blog
        </div>
      </Link>

       
        {children}
      </div>
    </div>
  );
};
