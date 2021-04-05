import React from "react";
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
      <OfferSection />
      <FooterNav />
      <Footer />
    </div>
  );
};

export default Home;
