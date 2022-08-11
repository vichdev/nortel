import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScreenBanners from "../../components/ScreenBanners";
import productbanner_1 from "../../assets/ProductsBanner/productbanner_5.jpg";
import ProductsPages from "../../components/ProductsPages";
import ProductsCarousel from "../../components/ProductsCarousel";
import items from "./data/produtos";
import image_banner from "../../assets/banner_about_us.jpg";

const ProdutosVeterinarios: React.FC = () => {
  return (
    <>
      <Header />
      <ScreenBanners
        title="Linha veterinária"
        img={productbanner_1}
        link="https://lista.mercadolivre.com.br/_CustId_1162392719"
      />
      <ProductsPages image={productbanner_1}>
        Há quinze anos lançamos nossa linha ToTó de produtos veterinários com
        grande aceitação pelas suas formulações balanceadas e com produtos de
        origem natural, como: <b>Nim</b>, <b>Coco</b>, <b>Aroeira</b>,{" "}
        <b>Alcatrão</b>, <b>Enxofre</b> garantindo sua eficácia no uso diário
        para cães e gatos. Uma linha completa de cuidados e proteção para seu
        pet. Incluindo, sabonetes, shampoos, condicionadores, talcos, colônias,
        eliminador de odores. <br /> <br />
      </ProductsPages>
      <ProductsCarousel
        produtos={items}
        title="Conheça nossos produtos veterinários"
        descricao=""
      />
      <ScreenBanners
        img={image_banner}
        title="Se interessou pelos nossos produtos?"
        center
        displayButton
        link="https://lista.mercadolivre.com.br/_CustId_1162392719"
        buttonTitle="Visite nossa loja"
      />
      <Footer />
    </>
  );
};

export default ProdutosVeterinarios;
