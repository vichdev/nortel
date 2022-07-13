import React from "react";
import Header from "../../components/Header";
import ScreenBanners from "../../components/ScreenBanners";
import { FaAngleDoubleLeft } from "react-icons/fa";
import banner from "../../assets/banner_store.jpg";
import * as Styles from "./styles";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import BannerButton from "../../components/BannerButton";
import ProductsCarousel from "../../components/ProductsCarousel";

const Produtos: React.FC = () => {
  const items = [
    {
      titulo: "PRODUTO 1",
      descricao: "PRODUTO DESCRICAO",
      foto: `${banner}`,
      alt: "foto 1",
    },
    {
      titulo: "PRODUTO 2",
      descricao: "PRODUTO DESCRICAO",
      foto: `${banner}`,
      alt: "foto 1",
    },
    {
      titulo: "PRODUTO 3",
      descricao: "PRODUTO DESCRICAO",
      foto: `${banner}`,
      alt: "foto 1",
    },
  ];

  return (
    <>
      <Header />
      <ScreenBanners
        title="Produtos"
        description="Conheça todas nossas opções para seu negócio!"
        img={banner}
      >
        <BannerButton title="Home" to="/" />
        <FaAngleDoubleLeft />
        <BannerButton title="Produtos" to="/produtos" toggleUnderline={true} />
      </ScreenBanners>
      <ProductsCarousel produtos={items} />
      <Footer />
    </>
  );
};

export default Produtos;
