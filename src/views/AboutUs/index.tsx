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
            Com 19 anos de historia, a Nortel surgiu para atender a demanda da
            rede hoteleira baiana, mas que ao longo desse tempo expandiu-se para
            outras regiões do nosso Brasil. Decidimos sair dos quartos dos
            hotéis e ingressamos também na linha de sabonetes fitoterápicos,
            valorizando nossas riquezas naturais, investindo em sabonetes a base
            da Aroeira, do Enxofre Medicinal, do Açaí e da Menta. Mas faltava
            algum personagem na nossa trajetória e então decidimos produzir
            nossa linha veterinária, a qual demos o nome carinhoso de Totó, para
            refletir todo nosso amor e carinho aos nossos amigos de 4 patas.
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
