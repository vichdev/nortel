import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsCarousel from "../../components/ProductsCarousel";
import ProductsPages from "../../components/ProductsPages";
import ScreenBanners from "../../components/ScreenBanners";
import productbanner_1 from "../../assets/ProductsBanner/productbanner_2.jpg";
import image_banner from "../../assets/banner_about_us.jpg";
import items from "./data/items";

const ProdutosHotelaria: React.FC = () => {
  return (
    <>
      <Header />
      <ScreenBanners title="Linha hoteleira" img={productbanner_1} />
      <ProductsPages
        image={productbanner_1}
        link="https://lista.mercadolivre.com.br/_CustId_1162392719"
      >
        Atendemos hotéis, pousadas, motéis, hospitais com sabonetes de 10g a 40g
        personalizados ou não, oferecendo as mais diversas fragrâncias de acordo
        com a preferência de cada cliente. Dispomos de shampoo e condicionar 2x1
        em embalagem personalizada de 30 ml e touca para banho descartável
        plástica transparente embalada individualmente.
      </ProductsPages>
      <ProductsCarousel
        produtos={items}
        title="Conheça nossos produtos de hotelaria"
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

export default ProdutosHotelaria;
