import React from "react";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import FooterNav from "../components/FooterNav";
import Navbar from "../components/Navbar";
import OfferSection from "../components/OfferSection";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Section1 />
      <Section2 />
      <Aboutus />
      <OfferSection />
      <FooterNav />
      <Footer />
    </div>
  );
};

export default Home;
