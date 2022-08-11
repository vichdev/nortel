import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import banner from "../../assets/banner_quality.jpg";
import { FaLeaf, FaShippingFast } from "react-icons/fa";
import { BsBookmarkStar } from "react-icons/bs";
import { MdCrueltyFree } from "react-icons/md";
const BannerQualitys: React.FC = () => {
  const [animation, setAnimation] = useState<boolean>(false);

  //@ts-ignore
  useEffect((): void => {
    const handleAnimation = (): void => {
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
              Embalagens feitas com materiais reciclados, focando na preservação
              e redução do lixo. Matérias-primas biodegradável.
            </Styles.BannerInformationContent>
          </Styles.BannerInformationContainer>
          <Styles.BannerInformationContainer>
            <BsBookmarkStar />
            <Styles.BannerInformationTitle>
              Qualidade
            </Styles.BannerInformationTitle>
            <Styles.BannerInformationContent>
              Qualidade comprovada por mais de 20 anos no mercado hoteleiro e
              veterinário, focando sempre na melhor matéria prima para garantir
              a satisfação de nossos clientes.
            </Styles.BannerInformationContent>
          </Styles.BannerInformationContainer>
          <Styles.BannerInformationContainer>
            <FaShippingFast />
            <Styles.BannerInformationTitle>
              Logística
            </Styles.BannerInformationTitle>
            <Styles.BannerInformationContent>
              Atendimento totalmente personalizado, focando nas necessidades e
              satisfação dos nossos clientes, entregamos independente do local
              ou horário.
            </Styles.BannerInformationContent>
          </Styles.BannerInformationContainer>
          <Styles.BannerInformationContainer>
            <MdCrueltyFree />
            <Styles.BannerInformationTitle>
              Cruelty free
            </Styles.BannerInformationTitle>
            <Styles.BannerInformationContent>
              Não realizamos testes, nem crueldade com animais no
              desenvolvimento de nosssos produtos.
            </Styles.BannerInformationContent>
          </Styles.BannerInformationContainer>
        </Styles.BannerInformationWrapper>
      </Styles.BannerContainer>
    </Styles.BannerWrapper>
  );
};

export default BannerQualitys;
