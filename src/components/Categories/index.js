import React from "react";
import "./style.css";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

import Construction from "../../assets/construction.jpeg";
import Interior from "../../assets/interior.jpeg";
import Projects from "../../assets/projects.jpeg";
import Blog from "../../assets/blog.jpeg";
import Testimonials from "../../assets/testimonials.jpeg";

const categoriesLinks = [
  {
    title: "Construction",
    image: Construction,
    to: "/construction",
  },
  {
    title: "Concept Housing",
    image: Interior,
    to: "/concept-housing",
  },
  {
    title: "Projects",
    image: Projects,
    to: "/projects",
  },
  {
    title: "Testimonials",
    image: Testimonials,
    to: "/testimonials",
  },
  {
    title: "Budget Calculator",
    image: Blog,
    to: "/budget-calculator",
  },
];

const Categories = () => {
  return (
    <div className="categories-section" id="categories">
      <div className="categories">
        {categoriesLinks.map((item, index) => (
          <LinkS
            to="dummy"
            smooth={true}
            duration={500}
            className="footer-link"
            key={index}
          >
            <LinkR to={item.to} className="catergories-link">
              <div
                // onClick={() => setShowInfo("construction")}
                className="categories-item"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="categories-title">
                  <span>{item.title}</span>
                </div>
              </div>
            </LinkR>
          </LinkS>
        ))}
      </div>
    </div>
  );
};

export default Categories;
