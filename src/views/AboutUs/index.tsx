import React from "react";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhatsApp from "../../components/WhatsApp";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default AboutUs;
