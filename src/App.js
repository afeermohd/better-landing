import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages";
import Aboutus from "./components/Aboutus";

import FooterNav from "./components/FooterNav";
import Navbar from "./components/Navbar";
import OfferSection from "./components/OfferSection";
// import Banner from "./components/Banner";
import Categories from "./components/Categories";

import Reviews from "./components/Reviews";
import DisplayConstruction from "./components/Categories/DisplayConstruction/DisplayConstruction";
import DisplayInterior from "./components/Categories/DisplayInterior/DisplayInterior";
import DisplayProjects from "./components/Categories/DisplayProjects/DisplayProjects";
import DisplayTestimonials from "./components/Categories/DisplayTestimonials/DisplayTestimonials";
import DisplayBlog from "./components/Categories/DisplayBlog/DisplayBlog";

import "./App.scss";
import Header from "./components/Header";
import FrontBanner from "./components/FrontBanner";
// import { SliderData } from "./data/SliderData";

function App() {
  return (
    <div className="master-home">
      {/* <Router> */}
      <Header />
      <Navbar />
      {/* </Router> */}

      <div className="home-1">
        <Router>
          <Switch>
            <Route path="/" exact>
              <FrontBanner />
              <Categories />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/construction">
              <FrontBanner />
              <DisplayConstruction />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/concept-housing">
              <FrontBanner />
              <DisplayInterior />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/projects">
              <FrontBanner />
              <DisplayProjects />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/testimonials">
              <FrontBanner />
              <DisplayTestimonials />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/budget-calculator">
              <FrontBanner />
              <DisplayBlog />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            {/* <Route path="/signin" component={SigninPage} exact /> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
