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
import { SliderData } from "./data/SliderData";

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
              {/* <Home /> */}
              {/* <Banner /> */}
              <FrontBanner slides={SliderData} />
              <Categories />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/construction">
              {/* <Navbar /> */}
              <FrontBanner slides={SliderData} />
              {/* <Banner /> */}
              <DisplayConstruction />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/interior">
              {/* <Navbar /> */}
              <FrontBanner slides={SliderData} />
              {/* <Banner /> */}
              <DisplayInterior />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/projects">
              {/* <Navbar /> */}
              {/* <Banner /> */}
              <FrontBanner slides={SliderData} />
              <DisplayProjects />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/testimonials">
              {/* <Navbar /> */}
              {/* <Banner /> */}
              <FrontBanner slides={SliderData} />
              <DisplayTestimonials />
              <Aboutus />
              <Reviews />
              <OfferSection />
              <FooterNav />
            </Route>

            <Route path="/blog">
              {/* <Navbar /> */}
              {/* <Banner /> */}
              <FrontBanner slides={SliderData} />
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
