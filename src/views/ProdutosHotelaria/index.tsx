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
        Hoteleira foi a primeira linha desenvolvida pela Nortel para atender as
        necessidades do nosso estado que tem como grande força o turismo, assim
        devolvendo sabonetes e shampoo de grande qualidade tendo como base da
        massa de seus sabonetes feita com glicerina e muita qualidade. Ela
        também pode ser estilizada seguindo as necessidades e pedidos dos nosso
        clientes.
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
