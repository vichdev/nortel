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
        Nossa linha de produtos veterinários Totó foi criada pensando nos
        cuidados com a saúde , higiene e bem estar de nossos pets, sejam eles
        filhotes ou adultos. Com composições a base de óleo orgânico de nim ,
        cipermetrina ,Extrato de Aroeira, Enxofre, óleo de coco , dentre outras
        Nossa linha é composta de shampoos, sabonetes, talco, colônia e
        eliminador de odores.
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
