import React from "react";
import { ICarousel } from "./interfaces/ICarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "./slider.css";
import * as Styles from "./styles";

SwiperCore.use([Navigation, Pagination]);

const ProductsCarousel: React.FC<ICarousel> = ({ produtos }) => {
  return (
    <Swiper
      navigation
      pagination
      slidesPerView={1}
      style={{
        width: "100%",
        display: "flex",
        padding: "1rem",
        height: "30rem",
      }}
      className="carouselProduto"
    >
      {produtos.map((item, index) => {
        return (
          <SwiperSlide key={index} style={{ display: "flex" }}>
            <Styles.ProductsCarouselContainer key={index}>
              <Styles.ProductsCarouselImg src={item.foto} alt={item.alt} />
              <Styles.DescriptionWrapper>
                <Styles.ProductsCarouselTitle>
                  {item.titulo}
                </Styles.ProductsCarouselTitle>
                <Styles.ProductsCarouselDescription>
                  {item.descricao}
                </Styles.ProductsCarouselDescription>
              </Styles.DescriptionWrapper>
            </Styles.ProductsCarouselContainer>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductsCarousel;
