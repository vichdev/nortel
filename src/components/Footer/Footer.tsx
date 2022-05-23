import React from "react";
import * as Styles from "./styles";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <Styles.FooterContainer>
      <Styles.Footer>
        <hr />
        <Styles.FooterCopyrightContainer>
          <Styles.CopyrightText>
            © 2022 Nortel. Todos os direitos reservados - Política de
            Privacidade
          </Styles.CopyrightText>
          <Styles.SocialMediasContainer>
            <Styles.SocialMedia>
              <FiInstagram />
            </Styles.SocialMedia>
            <div>|</div>
            <Styles.SocialMedia>
              <FiFacebook />
            </Styles.SocialMedia>
            <div>|</div>
            <Styles.SocialMedia>
              <FiLinkedin />
            </Styles.SocialMedia>
          </Styles.SocialMediasContainer>
        </Styles.FooterCopyrightContainer>
      </Styles.Footer>
    </Styles.FooterContainer>
  );
};

export default Footer;
