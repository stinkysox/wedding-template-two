import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Navbar/HeroSection/HeroSection";
import PhotographyCard from "../../components/PhotographyCard/PhotographyCard";
import OurServices from "../../components/OurServices/OurServices";
import CardTwo from "../../components/CardTwo/CardTwo";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactUs from "../../components/ContactUs/ContactUs";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PhotographyCard />
      <OurServices />
      <CardTwo />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
