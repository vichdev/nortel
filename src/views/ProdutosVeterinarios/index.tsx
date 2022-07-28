import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScreenBanners from "../../components/ScreenBanners";
import productbanner_1 from "../../assets/ProductsBanner/productbanner_5.jpg";
import ProductsPages from "../../components/ProductsPages";
import ProductsCarousel from "../../components/ProductsCarousel";
import items from "./data/produtos";

const ProdutosVeterinarios: React.FC = () => {
  return (
    <div>
      <Header />
      <ScreenBanners title="Linha veterinária" img={productbanner_1} />
      <ProductsPages />
      <ProductsCarousel
        produtos={items}
        title="Produtos veterinários"
        descricao="Veja abaixo toda nossa linha veterinária."
      />
      <Footer />
    </div>
  );
};

export default ProdutosVeterinarios;
