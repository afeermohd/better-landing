import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages";
import Aboutus from "./components/Aboutus";  

import FooterNav from "./components/FooterNav";
import Navbar from "./components/Navbar";
import OfferSection from "./components/OfferSection";
import Banner from "./components/Banner";
import Categories from "./components/Categories";

import Reviews from "./components/Reviews";
import DisplayConstruction from "./components/Categories/DisplayConstruction/DisplayConstruction"
import DisplayInterior from "./components/Categories/DisplayInterior/DisplayInterior"
import DisplayProjects from "./components/Categories/DisplayProjects/DisplayProjects"
import DisplayTestimonials from "./components/Categories/DisplayTestimonials/DisplayTestimonials"
import DisplayBlog from "./components/Categories/DisplayBlog/DisplayBlog"

import "./App.scss";

function App() {
  return (
    <div className="home-1">
    <Router >
      <Switch>
     
         <Route path="/"  exact>
        {/* <Home /> */}
          <Navbar />
          <Banner />
          <Categories />
          <Aboutus />
          <Reviews />
          <OfferSection />
          <FooterNav />
        </Route >
       
        <Route path="/construction"  >
          <Navbar />
          <Banner />
          <DisplayConstruction />
          <Aboutus />
          <Reviews />
          <OfferSection />
          <FooterNav />
        </Route >
        <Route path="/interior"  >
          <Navbar />
          <Banner />
          <DisplayInterior />
          <Aboutus />
          <Reviews />
          <OfferSection />
          <FooterNav />
        </Route >
          <Route path="/projects"  >
          <Navbar />
          <Banner />
          <DisplayProjects />
          <Aboutus />
          <Reviews />
          <OfferSection />
          <FooterNav />
        </Route >
          <Route path="/testimonials"  >
          <Navbar />
          <Banner />
          <DisplayTestimonials />
          <Aboutus />
          <Reviews />
          <OfferSection />
          <FooterNav />
        </Route >
          <Route path="/blog"  >
          <Navbar />
          <Banner />
          <DisplayBlog />
          <Aboutus />
          <Reviews />
          <OfferSection />
          <FooterNav />
        </Route >


       
        {/* <Route path="/signin" component={SigninPage} exact /> */}
     
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
