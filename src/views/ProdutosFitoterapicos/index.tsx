import React from "react";
import Header from "../../components/Header";
import ProductsCarousel from "../../components/ProductsCarousel";
import ProductsPages from "../../components/ProductsPages";
import ScreenBanners from "../../components/ScreenBanners";
import items from "./data/items";
import productbanner_1 from "../../assets/ProductsBanner/aroeira.jpg";
import Footer from "../../components/Footer";
import image_banner from "../../assets/banner_about_us.jpg";

const ProdutosFitoterapicos: React.FC = () => {
  return (
    <>
      <Header />
      <ScreenBanners title="Linha fitoterápica" img={productbanner_1} />
      <ProductsPages
        image={productbanner_1}
        link="https://lista.mercadolivre.com.br/_CustId_1162392719"
      >
        A linha fitoterápica veio de uma grande inspiração e amor pelos produtos
        naturais do nosso país, a primeira grande percepção veio da{" "}
        <b>Aroeira</b>, planta com grandes benefícios à nossa saúde, logo após o{" "}
        <b>Enxofre</b> que ajuda na cicatrização e limpeza de nossa pele,
        ajudando também nas reduções de espinhas e manchas, e logo mais o{" "}
        <b>Nim</b>. Demais produtos focando sempre no cuidado e as melhorias que
        seu uso traz à nossa pele e saúde.
      </ProductsPages>
      <ProductsCarousel
        produtos={items}
        title="Conheça nossos produtos de hotelaria"
        descricao=""
        slidesPerView={2}
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

export default ProdutosFitoterapicos;
