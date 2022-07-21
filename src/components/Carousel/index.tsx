import React from "react";
import * as Styles from "./styles";
import { ICarouselInfo } from "./interfaces/ICarouselInfo";
import { carouselInfo } from "./data/carouselInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "./sliderCarousel.css";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const Carousel: React.FC = () => {
  const getImagePath = (image: string) => {
    return require(`../../assets/ProductsBanner/${image}.jpg`);
  };

  const params = {
    slidesPerView: 1,
  };

  return (
    <Swiper
      navigation
      pagination
      autoplay={{ delay: 4000 }}
      effect={"fade"}
      allowTouchMove={false}
      style={{ padding: "0rem" }}
      {...params}
      className="carouselPrincipal"
    >
      {carouselInfo.map((item: ICarouselInfo, index: number) => {
        return (
          <SwiperSlide key={index}>
            <Styles.CarouselImgWrapper>
              <Styles.CarouselContentWrapper>
                <Styles.CarouselTextWrapper>
                  <Styles.CaroulselTitle>{item.titulo}</Styles.CaroulselTitle>
                  <Styles.CarouselText>{item.texto}</Styles.CarouselText>
                  <Styles.LinkSaibaMais>
                    <Link to={item.route}>
                      <Styles.ButtonCarousel
                        color="#fff"
                        bgColor="var(--primary)"
                        title={item.title}
                      >
                        Saiba Mais
                      </Styles.ButtonCarousel>
                    </Link>
                  </Styles.LinkSaibaMais>
                </Styles.CarouselTextWrapper>
              </Styles.CarouselContentWrapper>
              <Styles.CarouselImg src={getImagePath(item.path)} />
            </Styles.CarouselImgWrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
