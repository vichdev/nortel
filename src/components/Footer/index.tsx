import React from "react";
import * as Styles from "./styles";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logonortel from "../../assets/logonortel.png";

const Footer: React.FC = () => {
  return (
    <Styles.FooterContainer>
      <Styles.Footer>
        <Styles.FooterWrapper>
          <Styles.EnterpriseInformationContainer>
            <Styles.EntepriseInformationLogo src={logonortel} alt="" />
            <Styles.EnterpriseInformation>
              R. São Miguel dos Campos, 29 - Valéria, Salvador - BA, 41301-360
            </Styles.EnterpriseInformation>
            <Styles.EntepriseInformationEmail>
              <MdEmail />
              sabonetes.nortel@gmail.com
            </Styles.EntepriseInformationEmail>
            <Styles.EntepriseInformationFone>
              <MdPhone />
              +55 (71) 3301-7719
            </Styles.EntepriseInformationFone>
            <Styles.EntepriseInformationFone>
              <FaWhatsapp />
              +55 (71) 3301-7719
            </Styles.EntepriseInformationFone>
            <Styles.FooterButton
              bgColor="var(--yellow)"
              color="#fff"
              title=" Visite nosso e-commerce"
            >
              Visite nosso e-commerce
            </Styles.FooterButton>
          </Styles.EnterpriseInformationContainer>
          <Styles.FooterNavBarWrapper>
            <Styles.FooterNavBar>
              <Styles.FooterNavBarTitle>Mapa do site</Styles.FooterNavBarTitle>
              <Styles.FooterNavBarLink>Home</Styles.FooterNavBarLink>
              <Styles.FooterNavBarLink>Sobre nós</Styles.FooterNavBarLink>
              <Styles.FooterNavBarLink>Contato</Styles.FooterNavBarLink>
            </Styles.FooterNavBar>
            <Styles.FooterNavBar>
              <Styles.FooterNavBarTitle>Produtos</Styles.FooterNavBarTitle>
              <Styles.FooterNavBarLink>Veterinarios</Styles.FooterNavBarLink>
              <Styles.FooterNavBarLink>Hotelaria</Styles.FooterNavBarLink>
              <Styles.FooterNavBarLink>Fitoterapicos</Styles.FooterNavBarLink>
            </Styles.FooterNavBar>
          </Styles.FooterNavBarWrapper>
        </Styles.FooterWrapper>
        <Styles.Divider />
        <Styles.FooterCopyrightContainer>
          <Styles.CopyrightText>
            © 2022 Nortel. Todos os direitos reservados - Política de
            Privacidade
          </Styles.CopyrightText>
          <Styles.SocialMediasContainer>
            <Styles.SocialMedia color="white" BgColor="#9c3f94">
              <FiInstagram />
            </Styles.SocialMedia>
            |
            <Styles.SocialMedia color="white" BgColor="#4867aa">
              <FiFacebook />
            </Styles.SocialMedia>
          </Styles.SocialMediasContainer>
        </Styles.FooterCopyrightContainer>
      </Styles.Footer>
    </Styles.FooterContainer>
  );
};

export default Footer;
