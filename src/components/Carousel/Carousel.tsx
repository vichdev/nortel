import React from "react";
import Slider from "react-slick";
import * as Styles from "./styles";
import "./slick.css";
import { ICarouselInfo } from "./interfaces/ICarouselInfo";

const Carousel: React.FC = () => {
  const carouselInfo: ICarouselInfo[] = [
    {
      titulo: "Produtos Veterinarios",
      texto: "Produtos veterinarios de qualidade para seu pet",
      path: "Carousel_img1",
    },
    {
      titulo: "Produtos de Hotelaria",
      texto: "Produtos veterinarios de qualidade para seu pet",
      path: "Carousel_img2",
    },
    {
      titulo: "Produtos Amenities",
      texto: "Produtos veterinarios de qualidade para seu pet",
      path: "Carousel_img3",
    },
    {
      titulo: "Produtos para seu Negócio",
      texto: "Produtos veterinarios de qualidade para seu pet",
      path: "Carousel_img4",
    },
  ];

  const getImagePath = (image: string) => {
    return require(`../../assets/Carousel/${image}.jpg`);
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    dotsClass: "button__bar",
  };
  return (
    <Styles.CarouselWrapper>
      <Slider {...settings}>
        {
          carouselInfo.map((item: ICarouselInfo, index: number) => {
            return (
              <Styles.CarouselImgWrapper key={index}>
                <Styles.CarouselContentWrapper>
                  <Styles.CarouselTextWrapper>
                    <Styles.CaroulselTitle>{item.titulo}</Styles.CaroulselTitle>
                    <Styles.CarouselText>{item.texto}</Styles.CarouselText>
                    <Styles.CarouselButton>Saiba Mais</Styles.CarouselButton>
                  </Styles.CarouselTextWrapper>
                </Styles.CarouselContentWrapper>
                <Styles.CarouselImg src={getImagePath(item.path)} />;
              </Styles.CarouselImgWrapper>
            );
          })

          /* {imageList.map((img) => {
          return (
            
          );
        })} */
        }
      </Slider>
    </Styles.CarouselWrapper>
  );
};

export default Carousel;
