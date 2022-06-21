import React from "react";
import BackgroundDivider from "../../components/BackgroundDivider";
import Banner from "../../components/BannerProdutos";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Banner />
      <BackgroundDivider />
      <Footer />
    </>
  );
};

export default Home;
