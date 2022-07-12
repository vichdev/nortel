import React from "react";
import Header from "../../components/Header";
import ScreenBanners from "../../components/ScreenBanners";
import banner from "../../assets/banner_store.jpg";
import * as Styles from "./styles";

const Produtos: React.FC = () => {
  return (
    <>
      <Header />
      <ScreenBanners
        title="Produtos"
        description="Conheça todas nossas opções para seu negócio!"
        img={banner}
      >
        <div></div>
      </ScreenBanners>
      <Styles.ProductsWrapper></Styles.ProductsWrapper>
    </>
  );
};

export default Produtos;
