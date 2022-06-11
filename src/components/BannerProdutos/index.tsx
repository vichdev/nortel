import React from "react";
import * as Styles from "./styles";

const Banner: React.FC = () => {
  const products = [
    {
      title: "Veterinários",
      description: "O melhor produto para seu Pet.",
      imagePath: "1_png",
    },
    {
      title: "Hotelaria",
      description: "O melhor produto para seu negócio.",
      imagePath: "2_png",
    },
    {
      title: "Fitoterápicos",
      description: "O melhor produto para você.",
      imagePath: "3_png",
    },
  ];

  return (
    <Styles.SectionWrapper>
      <Styles.ProductsHeader>
        <h1>Conheça nossos Produtos</h1>
        <span> Conheça todas as nossas opções.</span>
      </Styles.ProductsHeader>
      <Styles.ProductsContainer>
        {products.map((item, index) => {
          return (
            <div key={index}>
              <img src="" alt="" />
              <h1></h1>
              <span></span>
              <button></button>
            </div>
          );
        })}
      </Styles.ProductsContainer>
    </Styles.SectionWrapper>
  );
};

export default Banner;
