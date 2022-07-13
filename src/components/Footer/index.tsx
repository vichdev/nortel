import React from "react";
import * as Styles from "./styles";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logonortel from "../../assets/nortel_logo_3.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Styles.FooterContainer>
      <Styles.Footer>
        <Styles.FooterWrapper>
          <Styles.EnterpriseInformationContainer>
            <Styles.EnterpriseInformationLogoWrapper>
              <Styles.EntepriseInformationLogo src={logonortel} alt="" />
            </Styles.EnterpriseInformationLogoWrapper>
            <Styles.EnterpriseInformation>
              R. São Miguel dos Campos, 29 - Valéria, Salvador - BA, 41301-360
            </Styles.EnterpriseInformation>
            <Styles.EntepriseInformationEmailWrapper>
              <Styles.EntepriseInformationEmail href="mailto:sabonetes.nortel@gmail.com?subject=DÚVIDAS%20NORTEL">
                <MdEmail />
                sabonetes.nortel@gmail.com
              </Styles.EntepriseInformationEmail>
            </Styles.EntepriseInformationEmailWrapper>
            <Styles.EntepriseInformationFone>
              <MdPhone />
              +55 (71) 3301-7719
            </Styles.EntepriseInformationFone>
            <Styles.EntepriseInformationFone>
              <FaWhatsapp />
              +55 (71) 3301-7719
            </Styles.EntepriseInformationFone>
            <Styles.FooterButton
              bgColor="var(--primary)"
              color="#fff"
              title=" Visite nosso e-commerce"
            >
              Visite nosso e-commerce
            </Styles.FooterButton>
          </Styles.EnterpriseInformationContainer>
          <Styles.FooterNavBarWrapper>
            <Styles.FooterNavBar>
              <Styles.FooterNavBarTitle>Mapa do site</Styles.FooterNavBarTitle>
              <Styles.FooterNavBarLink>
                <Link to={"/"}>Home</Link>
              </Styles.FooterNavBarLink>
              <Styles.FooterNavBarLink>
                <Link to={"/about-us"}>Sobre nós</Link>
              </Styles.FooterNavBarLink>
              <Styles.FooterNavBarLink>
                <Link to={"/produtos"}>Produtos</Link>
              </Styles.FooterNavBarLink>
              <Styles.FooterNavBarLink>
                <Link to={"/contacts"}>Contato</Link>
              </Styles.FooterNavBarLink>
            </Styles.FooterNavBar>
            <Styles.FooterNavBar>
              <Styles.FooterNavBarTitle>Produtos</Styles.FooterNavBarTitle>
              <Styles.FooterNavBarLink>
                <Link to={"/produtos/hotelaria"}>Hotelaria</Link>
              </Styles.FooterNavBarLink>
              <Styles.FooterNavBarLink>
                <Link to={"/produtos/veterinarios"}>Veterinários</Link>
              </Styles.FooterNavBarLink>
              <Styles.FooterNavBarLink>
                <Link to={"/produtos/fitoterapicos"}>Fitoterápicos</Link>
              </Styles.FooterNavBarLink>
            </Styles.FooterNavBar>
          </Styles.FooterNavBarWrapper>
          <Styles.Maps
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7220512902913!2d-38.43112268459762!3d-12.861220461087603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71613d91b8a5611%3A0xe453c48c65392409!2sR.%20S%C3%A3o%20Miguel%20dos%20Campos%2C%2029%20-%20Val%C3%A9ria%2C%20Salvador%20-%20BA%2C%2041301-360!5e0!3m2!1spt-BR!2sbr!4v1657643616900!5m2!1spt-BR!2sbr"
            title="Localizacão"
            loading="lazy"
          ></Styles.Maps>
        </Styles.FooterWrapper>
        <Styles.Divider />
        <Styles.FooterCopyrightContainer>
          <Styles.CopyrightText>
            © 2022 Nortel. Todos os direitos reservados - Política de
            Privacidade
          </Styles.CopyrightText>
          <Styles.SocialMediasContainer>
            <Styles.SocialMedia
              color="var(--primary)"
              BgColor="white"
              href="https://www.instagram.com/sabonetesnortel/"
            >
              <FiInstagram />
            </Styles.SocialMedia>
            |
            <Styles.SocialMedia
              color="var(--primary)"
              BgColor="white"
              href="https://www.facebook.com/sabonetesnortel"
            >
              <FiFacebook />
            </Styles.SocialMedia>
            |
            <Styles.SocialMedia
              color="var(--primary)"
              BgColor="white"
              href="https://www.linkedin.com/in/nortel-sabonetes-59b328116/?originalSubdomain=br"
            >
              <FiLinkedin />
            </Styles.SocialMedia>
          </Styles.SocialMediasContainer>
        </Styles.FooterCopyrightContainer>
      </Styles.Footer>
    </Styles.FooterContainer>
  );
};

export default Footer;
