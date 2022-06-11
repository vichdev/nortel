import React from "react";
import Button from "../Button";
import * as Styles from "./styles";

const Banner: React.FC = () => {
  const products = [
    {
      title: "Veterinários",
      description: "O melhor produto para seu Pet.",
      alt: "Imagem de um produto veterinário representando a linha veterinária.",
      imagePath: "productbanner_1.jpg",
    },
    {
      title: "Hotelaria",
      description: "O melhor produto para seu negócio.",
      alt: "Imagem de um produto para hotéis e negócios representando a linha de hotelaria.",
      imagePath: "productbanner_2.jpg",
    },
    {
      title: "Fitoterápicos",
      description: "O melhor produto para você.",
      alt: "Imagem de um produto fitoterápico representando a linha fitoterápica.",
      imagePath: "productbanner_3.jpg",
    },
  ];

  const getImagePath = (image: string) => {
    return require(`../../assets/ProductsBanner/${image}`);
  };

  return (
    <Styles.SectionWrapper>
      <Styles.ProductsHeader>
        <h1>Conheça nossos Produtos</h1>
        <span> Conheça todas as nossas opções.</span>
      </Styles.ProductsHeader>
      <Styles.SectionContainer>
        <Styles.ProductsContainer>
          {products.map((item, index) => {
            return (
              <Styles.Product key={index}>
                <Styles.ProductImageWrapper>
                  <Styles.ProductImage
                    src={getImagePath(item.imagePath)}
                    alt={item.alt}
                  />
                </Styles.ProductImageWrapper>
                <Styles.ProductInfoWrapper>
                  <Styles.ProductTitle>{item.title}</Styles.ProductTitle>
                  <Styles.ProductDescription>
                    {item.description}
                  </Styles.ProductDescription>
                </Styles.ProductInfoWrapper>
                <Button title="Saiba Mais" />
              </Styles.Product>
            );
          })}
        </Styles.ProductsContainer>
      </Styles.SectionContainer>
    </Styles.SectionWrapper>
  );
};

export default Banner;
