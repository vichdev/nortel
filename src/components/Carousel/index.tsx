import React from "react";
import Slider from "react-slick";
import * as Styles from "./styles";
import "./slick.css";
import { ICarouselInfo } from "./interfaces/ICarouselInfo";
import { carouselInfo } from "./data/carouselInfo";
import Button from "../Button";

const Carousel: React.FC = () => {
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
        {carouselInfo.map((item: ICarouselInfo, index: number) => {
          return (
            <Styles.CarouselImgWrapper key={index}>
              <Styles.CarouselContentWrapper>
                <Styles.CarouselTextWrapper>
                  <Styles.CaroulselTitle>{item.titulo}</Styles.CaroulselTitle>
                  <Styles.CarouselText>{item.texto}</Styles.CarouselText>
                  <Styles.ButtonCarousel color="#fff" bgColor="var(--yellow)">
                    Saiba Mais
                  </Styles.ButtonCarousel>
                </Styles.CarouselTextWrapper>
              </Styles.CarouselContentWrapper>
              <Styles.CarouselImg src={getImagePath(item.path)} />
            </Styles.CarouselImgWrapper>
          );
        })}
      </Slider>
    </Styles.CarouselWrapper>
  );
};

export default Carousel;
