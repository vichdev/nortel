import React from "react";
import { IPropsBanner } from "./interfaces/IScreenBanner";
import * as Styles from "./styles";

const ScreenBanners: React.FC<IPropsBanner> = ({ title, description, img }) => {
  console.log(img);
  return (
    <Styles.BannerWrapper>
      <Styles.BannerImg src={img} />
      <Styles.BannerContainer>
        <Styles.BannerTitle>{title}</Styles.BannerTitle>
        <Styles.BannerDescription>{description}</Styles.BannerDescription>
      </Styles.BannerContainer>
    </Styles.BannerWrapper>
  );
};

export default ScreenBanners;
