import React from "react";
import * as Styles from "./styles";

interface IProduto {
  title: string;
  description: string;
  alt: string;
  imagePath: string;
}

const Banner: React.FC = () => {
  const products: Array<IProduto> = [
    {
      title: "Veterinários",
      description: "O melhor produto para seu Pet.",
      alt: "Imagem de um produto veterinário representando a linha veterinária.",
      imagePath: "productbanner_5.jpg",
    },
    {
      title: "Hotelaria",
      description: "O melhor produto para seu negócio.",
      alt: "Imagem de um produto para hotéis e negócios representando a linha de hotelaria.",
      imagePath: "productbanner_7.jpg",
    },
    {
      title: "Fitoterápicos",
      description: "O melhor produto para você.",
      alt: "Imagem de um produto fitoterápico representando a linha fitoterápica.",
      imagePath: "productbanner_6.jpg",
    },
  ];

  const getImagePath = (image: string): string => {
    return require(`../../assets/ProductsBanner/${image}`);
  };

  return (
    <Styles.SectionWrapper>
      <Styles.ProductsHeader>
        <h1>Conheça nossos produtos</h1>
        <span> Conheça todas as nossas opções.</span>
      </Styles.ProductsHeader>
      <Styles.SectionContainer>
        <Styles.ProductsContainer>
          {products.map((item: IProduto, index: number) => {
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
                <Styles.ProductsButton title="Saiba Mais">
                  Saiba Mais
                </Styles.ProductsButton>
              </Styles.Product>
            );
          })}
        </Styles.ProductsContainer>
      </Styles.SectionContainer>
    </Styles.SectionWrapper>
  );
};

export default Banner;
