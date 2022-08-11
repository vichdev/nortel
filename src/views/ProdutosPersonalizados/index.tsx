import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsCarousel from "../../components/ProductsCarousel";
import ProductsPages from "../../components/ProductsPages";
import ScreenBanners from "../../components/ScreenBanners";
import items from "./data/items";
import productbanner from "../../assets/ProductsBanner/productbanner_5.jpg";
import image_banner from "../../assets/banner_about_us.jpg";

const ProdutosPersonalizados: React.FC = () => {
  return (
    <>
      <Header />
      <ScreenBanners
        title="Personalize seu pedido"
        img={productbanner}
        link="https://lista.mercadolivre.com.br/_CustId_1162392719"
      />
      <ProductsPages image={productbanner}>
        Produtos personalizados vem para atender demandas e pedidos dos que
        desejam exclusividade, atenção ou algo que não esteja em nosso catálogo
        mas que podemos atender seus interesses, sendo alguns desses serviços a
        modificação das nossas formulações, embalagens, cor e essência.
      </ProductsPages>
      <ProductsCarousel
        produtos={items}
        title="Conheça alguns exemplos personalizados"
        descricao=""
      />
      <ScreenBanners
        img={image_banner}
        title="Se interessou em personalizar?"
        center
        displayButton
        link="https://wa.me/557133017719"
        buttonTitle="Entre em contato"
      />
      <Footer />
    </>
  );
};

export default ProdutosPersonalizados;
