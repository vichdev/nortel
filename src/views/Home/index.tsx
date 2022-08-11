import React from "react";
import BackgroundDivider from "../../components/BackgroundDivider";
import Banner from "../../components/BannerProdutos";
import BannerQualitys from "../../components/BannerQualitys";
import ButtonToTop from "../../components/ButtonToTop";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhatsApp from "../../components/WhatsApp";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Banner />
      <BackgroundDivider />
      <BannerQualitys />
      <Footer />
      <ButtonToTop />
    </>
  );
};

export default Home;
