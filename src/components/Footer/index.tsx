import React from "react";
import * as Styles from "./styles";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logonortel from "../../assets/nortel_logo_3.png";
import shopee from "../../assets/lojas/shopee.svg";
import mercado_livre from "../../assets/lojas/mercado_livre.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Styles.FooterContainer>
      <Styles.Footer>
        <Styles.FooterWrapper>
          <Styles.EnterpriseInformationContainer>
            <Styles.EnterpriseInformationLogoWrapper>
              <Styles.EntepriseInformationLogo
                src={logonortel}
                alt="Logo da nortel"
              />
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
            <Styles.LojasWrapper>
              <Styles.LojasLink href="https://www.mercadolivre.com.br/perfil/NORTELNORTEL20220717153637">
                <Styles.LojasImg
                  src={mercado_livre}
                  alt="Link para acesso a loja do mercado livre."
                />
              </Styles.LojasLink>
              <Styles.LojasLink href="https://shopee.com.br/?gclid=CjwKCAjwrNmWBhA4EiwAHbjEQDY3_-yIOrnBTZPT8sWlmysKHpZez4ELAPlWUJTZ97B202RXrni4pBoCMMUQAvD_BwE">
                <Styles.LojasImg
                  src={shopee}
                  alt="Link para acesso a loja da shopee."
                />
              </Styles.LojasLink>
            </Styles.LojasWrapper>
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.889287760481!2d-38.4289163!3d-12.861203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5663b34c84814a9b!2sNortel%20Sabonetes!5e0!3m2!1spt-BR!2sbr!4v1658318328382!5m2!1spt-BR!2sbr"
            title="Localizacão"
            referrerPolicy="no-referrer-when-downgrade"
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
              <FiInstagram title="Instagram - Nortel" />
            </Styles.SocialMedia>
            |
            <Styles.SocialMedia
              color="var(--primary)"
              BgColor="white"
              href="https://www.facebook.com/sabonetesnortel"
            >
              <FiFacebook title="Facebook - Nortel" />
            </Styles.SocialMedia>
            |
            <Styles.SocialMedia
              color="var(--primary)"
              BgColor="white"
              href="https://www.linkedin.com/in/nortel-sabonetes-59b328116/?originalSubdomain=br"
            >
              <FiLinkedin title="Linkedin - Nortel" />
            </Styles.SocialMedia>
          </Styles.SocialMediasContainer>
        </Styles.FooterCopyrightContainer>
      </Styles.Footer>
    </Styles.FooterContainer>
  );
};

export default Footer;
