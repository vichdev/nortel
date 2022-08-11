import React from "react";
import { ICarousel } from "./interfaces/ICarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "./slider.css";
import * as Styles from "./styles";

SwiperCore.use([Navigation, Pagination]);

const ProductsCarousel: React.FC<ICarousel> = ({
  produtos,
  title,
  descricao,
  slidesPerView = 3,
}) => {
  return (
    <>
      <Styles.TitleWrapper>
        <Styles.Title>{title}</Styles.Title>
        <Styles.ProductsCarouselDescription>
          {descricao}
        </Styles.ProductsCarouselDescription>
      </Styles.TitleWrapper>
      <Swiper
        navigation
        pagination
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        autoplay={{ delay: 3000 }}
        effect={"slide"}
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
                <Styles.ImgWrapper>
                  <Styles.ProductsCarouselImg src={item.foto} alt={item.alt} />
                </Styles.ImgWrapper>
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
    </>
  );
};

export default ProductsCarousel;
