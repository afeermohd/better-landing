import React from "react";
import "./style.css";
// import Footer from "../Footer";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const footerInfoData = [
  {
    title: "The Better Co: The Easy Home Construction in Bangalore",
    content:
      "The Better Co is a home construction company based in Bangalore, with a focus on ‘customer satisfaction’. We work with anexperienced team of site engineers, project managers,architects, designers, structural engineers, quality control and experience managers to provide our customers with easy andseamless home construction experience. Home construction isitself a long and rough task when you have to deal with thelabourers by yourself but, we aim to make it as easy as possiblefor our customers by managing the entirety of the constructionproject from plan approval to handover.",
  },
  {
    title: "The Better Co: The Better Home Construction",
    content:
      "The Better Co as the name suggests, is the better way of getting home construction done in Bangalore. If you’re searching for hassle-free “home construction near me” or “home construction in Bangalore”, The Better Co is your way out. With our combined 25+ years of construction experience, best and affordable building materials, and dedicated team of engineers and architects in Bangalore, we make sure that we are the better choice for you.",
  },
  {
    title: "The Better Co: The Budget Home Construction",
    content:
      "Budget construction is better construction as we all know. Getting your dream home constructed within your budget is another goal while searching for your contractor and architect. We, at The Better Co, aim to cater everything for your home construction to complete within a budget of your own. We have a flexible payment policy for your comfort as well.",
  },
  {
    title: "The Better Co: Low Cost Home Construction in Bangalore",
    content:
      "When searching for home contractors, keep in mind to research and compare your options. We assure you that when you do so, you will find The Better Co as one of the low cost construction companies available in Bangalore. We keep both luxury and budget construction materials to serve all segments of the society. We wish to serve anybody and everybody with a dream to do home construction in Bangalore. Choose us and see your dream home grow.",
  },
  {
    title: "The Better Co: Reviewed Contractors in Bangalore",
    content:
      "We are one of the fastest growing home construction companies along which we are reviewed contractors. We have excellent reviews from our customers. We cover your construction journey and have your back throughout the process from plan approval to handover. You can trust us with your dream home and we never let our customers down.",
  },
  {
    title: "The Better Co: Experienced and Trusted Architects in Bangalore",
    content:
      "Experience and Trust are two major factors that are needed for home construction or in general, anything. The Better Co has an experienced team of architects and project managers who ensure that the progress of your home construction never go wrong.",
  },
  {
    title: "The Better Co: On-Time Home Construction",
    content:
      "You must have faced on-time delivery issues with something at some point in your life. It’s annoying and frustrating. We understand that and thus, The Better Co ensures that you get on-time delivery of your home construction project. It’s a part of a seamless experience and you get your home constructed within the schedule given by The Better Co.",
  },
  {
    title: "The Better Co: Quality Home Construction",
    content:
      "Getting your home constructed in time with an experienced team comes with a bonus at The Better Co. Not only, we construct your home for you, we do it with the best handpicked materials to ensure you have a quality time in your quality home.",
  },
  {
    title: "The Better Co: Customer Experience Above All in Home Construction",
    content:
      "The Better Co focuses on customer experience the most. We plan a written contract and work accordingly. We provide Project and Payment schedules and we stick to it.  We make sure that the design and execution of the project is seamless with your satisfaction in top priority. We give you daily updates with pictures from the construction site. Moreover, we provide you with answers to any and all of your queries, at all times.",
  },
  {
    title:
      "The Better Co: Fastest Growing Tech Construction Company in Bangalore",
    content:
      "Lastly, we’ve grown with your support and we have 20+ on-going projects in hand. We are one of the fastest growing tech home construction companies in Bangalore. We will expand outside Bangalore soon too. Thus, we are one of your top choices and we’d love to build you your dream home, your happiness.",
  },
];

const footerLinks = [
  { title: "Construction", link: "construction" },
  { title: "Concept Housing", link: "concept-housing" },
  { title: "Projects", link: "projects" },
  { title: "Testimonials", link: "testimonials" },
  { title: "Budget Calculator", link: "budget-calculator" },
  // { title: "About Us", link: "construction" },
  // { title: "Privacy Policy", link: "construction" },
  // { title: "Terms and Conditions", link: "construction" },
  // { title: "Careers", link: "construction" },
  // { title: "Social Media", link: "construction" },
];

const FooterNav = () => {
  return (
    <div className="footer-section">
      <div className="footer-wrapper">
        <div className="footer">
          <div className="footer-nav">
            <div className="footer-headline">
              <h3>FOR THE LOVE OF BETTER</h3>
            </div>
            <div className="footer-list-container">
              <ul className="footer-list">
                {footerLinks.map((item, index) => (
                  <LinkS
                    to="dummy"
                    smooth={true}
                    duration={1000}
                    className="footer-link"
                    key={index}
                  >
                    <LinkR to={item.link} className="footer-link">
                      <li>{item.title}</li>
                    </LinkR>
                  </LinkS>
                ))}
              </ul>
              <ul className="footer-list">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Careers</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>
          <div className="footer-info-container">
            <ul className="footer-info">
              {footerInfoData.map((item, index) => (
                <li key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                  <br />
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-end">
            <span>
              Copyright 2021 &#169; <b>The Better Co</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
