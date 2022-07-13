import React from "react";
import Slider from "react-slick";
import { ICarousel } from "./interfaces/ICarousel";
import * as Styles from "./styles";

const ProductsCarousel: React.FC<ICarousel> = ({ produtos }) => {
  const settings = {
    arrows: true,
    speed: 500,
    dots: true,
    centerPadding: "5px",
    variableWidth: false,
    centerMode: true,
  };

  return (
    <Styles.ProductsCarouselWrapper>
      <Slider
        {...settings}
        variableWidth={false}
        centerMode={true}
        centerPadding="5px"
      >
        {produtos.map((item, index) => {
          return (
            <Styles.ProductsCarouselContainer key={index}>
              <Styles.ProductsCarouselImg src={item.foto} alt={item.alt} />
              <Styles.ProductsCarouselTitle>
                {item.titulo}
              </Styles.ProductsCarouselTitle>
              <Styles.ProductsCarouselDescription>
                {item.descricao}
              </Styles.ProductsCarouselDescription>
            </Styles.ProductsCarouselContainer>
          );
        })}
      </Slider>
    </Styles.ProductsCarouselWrapper>
  );
};

export default ProductsCarousel;
