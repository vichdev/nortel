import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import banner from "../../assets/banner_quality.jpg";
import { FaLeaf } from "react-icons/fa";

const BannerQualitys: React.FC = () => {
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    const handleAnimation = () => {
      return window.scrollY >= 1300
        ? setAnimation(!animation)
        : setAnimation(false);
    };
    window.addEventListener("scroll", handleAnimation);
  }, []);

  return (
    <Styles.BannerWrapper>
      <Styles.BannerContainer>
        <Styles.BannerImgWrapper doAnimation={animation}>
          <Styles.BannerImg src={banner} />
        </Styles.BannerImgWrapper>
        <Styles.BannerInformationWrapper doAnimation={animation}>
          <Styles.BannerInformationContainer>
            <FaLeaf />
            <Styles.BannerInformationTitle>
              Sustentabilidade
            </Styles.BannerInformationTitle>
            <Styles.BannerInformationContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non ante rutrum, posuere tortor quis, semper neque. Aliquam vel
              tristique ipsum. In lacinia tellus sed orci rutrum, a malesuada
              magna.
            </Styles.BannerInformationContent>
          </Styles.BannerInformationContainer>
          <Styles.BannerInformationContainer>
            <FaLeaf />
            <Styles.BannerInformationTitle>
              Sustentabilidade
            </Styles.BannerInformationTitle>
            <Styles.BannerInformationContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non ante rutrum, posuere tortor quis, semper neque. Aliquam vel
              tristique ipsum. In lacinia tellus sed orci rutrum, a malesuada
              magna.
            </Styles.BannerInformationContent>
          </Styles.BannerInformationContainer>
          <Styles.BannerInformationContainer>
            <FaLeaf />
            <Styles.BannerInformationTitle>
              Sustentabilidade
            </Styles.BannerInformationTitle>
            <Styles.BannerInformationContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non ante rutrum, posuere tortor quis, semper neque. Aliquam vel
              tristique ipsum. In lacinia tellus sed orci rutrum, a malesuada
              magna.
            </Styles.BannerInformationContent>
          </Styles.BannerInformationContainer>
          <Styles.BannerInformationContainer>
            <FaLeaf />
            <Styles.BannerInformationTitle>
              Sustentabilidade
            </Styles.BannerInformationTitle>
            <Styles.BannerInformationContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non ante rutrum, posuere tortor quis, semper neque. Aliquam vel
              tristique ipsum. In lacinia tellus sed orci rutrum, a malesuada
              magna.
            </Styles.BannerInformationContent>
          </Styles.BannerInformationContainer>
        </Styles.BannerInformationWrapper>
      </Styles.BannerContainer>
    </Styles.BannerWrapper>
  );
};

export default BannerQualitys;
