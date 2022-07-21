import React from "react";
import Header from "../../components/Header";
import ScreenBanners from "../../components/ScreenBanners";
import { FaAngleDoubleRight } from "react-icons/fa";
import banner from "../../assets/banner_produtos.jpg";
import { productsList } from "./data/ProductsList";

import * as Styles from "./styles";
import Footer from "../../components/Footer";
import BannerButton from "../../components/BannerButton";
import { Link } from "react-router-dom";
import WhatsApp from "../../components/WhatsApp";
import ButtonToTop from "../../components/ButtonToTop";

const Produtos: React.FC = () => {
  function getImageByPath(image: string): string {
    return require(`../../assets/ProductsBanner/${image}`);
  }

  return (
    <>
      <Header />
      <ScreenBanners
        title="Produtos"
        description="Conheça todas nossas opções para seu negócio!"
        img={banner}
      >
        <BannerButton title="Home" to="/" />
        <FaAngleDoubleRight />
        <BannerButton title="Produtos" to="/produtos" toggleUnderline={true} />
      </ScreenBanners>
      <Styles.ProductsWrapper>
        <div>
          <h1>Conheça todas nossas linhas</h1>
          <span>
            Cada produto oferecidos em nosso portfólio deve funcionar, ser
            sustentável, seguro e agradável.
          </span>
        </div>
        <Styles.ProductsContainer>
          {productsList.map((item, index) => {
            return (
              <Styles.ProductsContent key={index}>
                <Styles.ProductImgWrapper>
                  <Styles.ProductImg
                    src={getImageByPath(item.img)}
                    alt={item.alt}
                  />
                </Styles.ProductImgWrapper>
                <Styles.TitleWrapper>
                  <Styles.Title>{item.title}</Styles.Title>
                  <Styles.Description>{item.description}</Styles.Description>
                </Styles.TitleWrapper>
                <Link to={item.route}>
                  <Styles.BannerButton title="Ver detalhes">
                    Ver detalhes
                  </Styles.BannerButton>
                </Link>
              </Styles.ProductsContent>
            );
          })}
        </Styles.ProductsContainer>
      </Styles.ProductsWrapper>
      <Footer />
      <WhatsApp />
      <ButtonToTop />
    </>
  );
};

export default Produtos;
