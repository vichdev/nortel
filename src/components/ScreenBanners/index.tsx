import React from "react";
import { IPropsBanner } from "./interfaces/IScreenBanner";
import * as Styles from "./styles";

const ScreenBanners: React.FC<IPropsBanner> = ({
  title,
  img,
  center,
  displayButton,
  buttonTitle,
  link,
}) => {
  return (
    <Styles.BannerWrapper>
      <Styles.BannerImg src={img} />
      <Styles.BannerContainer onCenter={center}>
        <Styles.BannerTitle>{title}</Styles.BannerTitle>
      </Styles.BannerContainer>
      <Styles.ButtonWrapper displayButton={displayButton}>
        <a href={link}>
          <Styles.BannerButton bgColor="var(--primary)" color="white">
            {buttonTitle}
          </Styles.BannerButton>
        </a>
      </Styles.ButtonWrapper>
    </Styles.BannerWrapper>
  );
};

export default ScreenBanners;
