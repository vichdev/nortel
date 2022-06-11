import React from "react";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalStyles } from "./styles/globalStyles";
import Carousel from "./components/Carousel";
import Banner from "./components/BannerProdutos";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Carousel />
      <Banner />
      <Footer />
    </>
  );
};

export default App;
