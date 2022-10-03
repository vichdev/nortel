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
        Pensando em oferecer aos nossos clientes um cuidado especial com sua
        pele, dispomos de uma linha de sabonetes fitoterápicos de 80g a 100g á
        base de produtos naturais como o Extrato natural de Aroeira, a Polpa do
        Açaí, o Enxofre Medicinal e o óleo de menta. Dentre eles estão o
        Araraoeira e o Arosol S que são comercializados há 19 anos, sendo
        lançados posteriormente o Intimús e o Açaí.
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
