import React from "react";
import * as Styles from "./styles";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScreenBanners from "../../components/ScreenBanners";
import image_banner from "../../assets/banner_1.jpg";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Styles.Wrapper>
        <Styles.InfoWrapper>
          <Styles.InfoTitle>Quem somos</Styles.InfoTitle>
          <Styles.InfoDescription>
            Uma empresa nascida na Bahia há mais de vinte anos se originando no
            mercado de produtos de higiene para hotelaria, sempre focando na
            qualidade e no melhor aproveitamento de seus produtos. <br />
            <br />
            Pela qualidade de nossos produtos, conseguimos nos estabelecer no
            mercado e nos expandir, criando a linha de produtos fitoterápicos e
            veterinários com grande aceitação pelas suas formulações balanceadas
            e eficientes no seu uso diário para cães e gatos. <br /> <br />
            Sempre se destacou pela qualidade e atendimento, além do respeito a
            suas origens e seus colaboradores, seguindo essa ideia, acreditamos
            que todos podem ter acesso a produtos de qualidade com valores
            acessiveís a toda comunidade.
          </Styles.InfoDescription>
        </Styles.InfoWrapper>
        <Styles.InfoWrapper>
          <Styles.InfoTitle>Missão</Styles.InfoTitle>
          <Styles.InfoDescription>
            Sempre oferecer o melhor pelo preço justo, dar a oportunidade do
            menor ao maior empreendedor de ofertar nossos produtos feitos com
            qualidade e carinho.
          </Styles.InfoDescription>
        </Styles.InfoWrapper>
        <Styles.InfoWrapper>
          <Styles.InfoTitle>Valores</Styles.InfoTitle>
          <Styles.InfoDescription>
            Nossos valores vem de uma empresa familiar que conseguiu crescer e
            se estabelecer no mercado baiano, produzindo a partir de
            matérias-primas de produtores e da comunidade local na maioria dos
            nossos produtos, deixando assim, a empresa com a cara do Brasil.
          </Styles.InfoDescription>
        </Styles.InfoWrapper>
      </Styles.Wrapper>
      <ScreenBanners
        img={image_banner}
        title="Se interessou pela nossa empresa?"
        center
        displayButton
        buttonTitle="Mande uma mensagem"
        link="https://wa.me/557133017719"
      />
      <Footer />
    </>
  );
};

export default AboutUs;
