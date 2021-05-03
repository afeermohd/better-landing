import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages";
import Aboutus from "./components/Aboutus";

import FooterNav from "./components/FooterNav";
import Navbar from "./components/Navbar";
// import OfferSection from "./components/OfferSection";
// import Banner from "./components/Banner";
import Categories from "./components/Categories";

// import Reviews from "./components/Reviews";
import DisplayConstruction from "./components/Categories/DisplayConstruction/DisplayConstruction";
// import DisplayInterior from "./components/Categories/DisplayInterior/DisplayInterior";
import DisplayProjects from "./components/Categories/DisplayProjects/DisplayProjects";
import DisplayTestimonials from "./components/Categories/DisplayTestimonials/DisplayTestimonials";
// import DisplayBlog from "./components/Categories/DisplayBlog/DisplayBlog";

import "./App.css";
import Header from "./components/Header";
import FrontBanner from "./components/FrontBanner";
import Whyus from "./components/Whyus";
import Gallery from "./components/Gallery";
import DisplayConceptHousing from "./components/Categories/DisplayConceptHousing/DisplayConceptHousing";
import DisplayBudgetCalculator from "./components/Categories/DisplayBudgetCalculator/DisplayBudgetCalculator";
// import { SliderData } from "./data/SliderData";

function App() {
  return (
    <div className="master-home">
      {/* <Router> */}

      <Header />
      <Navbar />
      {/* </Router> */}

      <FrontBanner />
      <div id="dummy"></div>

      <div className="home-1">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Categories />
            </Route>
            <Route path="/construction">
              <Navbar />
              <DisplayConstruction />
            </Route>
            <Route path="/concept-housing">
              <Navbar />
              <DisplayConceptHousing />
            </Route>
            <Route path="/projects">
              <Navbar />
              <DisplayProjects />
            </Route>
            <Route path="/testimonials">
              <Navbar />
              <DisplayTestimonials />
            </Route>
            <Route path="/budget-calculator">
              <Navbar />
              <DisplayBudgetCalculator />
            </Route>
          </Switch>
          <Aboutus />
          <Whyus />
          <Gallery />
          <FooterNav />
        </Router>
      </div>
    </div>
  );
}

export default App;
