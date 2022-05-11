import React from "react";
import Header from "./components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalStyles } from "./styles/globalStyles";
import Carousel from "./components/Carousel/Carousel";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Carousel />
    </>
  );
};

export default App;
