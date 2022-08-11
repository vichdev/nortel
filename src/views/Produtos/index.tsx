import React from "react";
import Header from "../../components/Header";
import ScreenBanners from "../../components/ScreenBanners";
import banner from "../../assets/banner_produtos.jpg";
import { productsList } from "./data/ProductsList";
import * as Styles from "./styles";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import WhatsApp from "../../components/WhatsApp";
import ButtonToTop from "../../components/ButtonToTop";
import ProductsPages from "../../components/ProductsPages";
import image from "../../assets/ProductsBanner/productbanner_1.jpg";
import image_banner from "../../assets/banner_about_us.jpg";

const Produtos: React.FC = () => {
  function getImageByPath(image: string): string {
    return require(`../../assets/ProductsBanner/${image}`);
  }

  return (
    <>
      <Header />
      <ScreenBanners title="Produtos" img={banner} />
      <Styles.ProductsWrapper>
        <Styles.TitlePageWrapper>
          <Styles.TitlePage>Conheça todas nossas linhas</Styles.TitlePage>
          <Styles.DescriptionPage>
            Dê uma olhada em cada uma de nossas linhas e visite nosso portfolio!
          </Styles.DescriptionPage>
        </Styles.TitlePageWrapper>
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
      <ScreenBanners
        img={image_banner}
        title="Gostou de nossos produtos e ficou interessado?"
        center
        displayButton
        link="https://lista.mercadolivre.com.br/_CustId_1162392719"
        buttonTitle="Visite nossa loja"
      />
      <Footer />
      <ButtonToTop />
    </>
  );
};

export default Produtos;
