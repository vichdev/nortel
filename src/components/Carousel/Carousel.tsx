import React from "react";
import Slider from "react-slick";
import * as Styles from "./styles";
import "./slick.css";

const Carousel: React.FC = () => {
  const imageList = [
    "Carousel_img2",
    "Carousel_img1",
    "Carousel_img3",
    "Carousel_img4",
  ];

  const getImagePath = (image: string) => {
    return (
      <Styles.CarouselImgWrapper>
        <Styles.CarouselTextWrapper>
          <h1>Produtos Veterinários</h1>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
        </Styles.CarouselTextWrapper>
        <Styles.CarouselImg
          src={require(`../../assets/Carousel/${image}.jpg`)}
        />
      </Styles.CarouselImgWrapper>
    );
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
        {imageList.map((img) => {
          return getImagePath(img);
        })}
      </Slider>
    </Styles.CarouselWrapper>
  );
};

export default Carousel;
