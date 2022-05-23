import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import whiteLogo from "../../assets/realgems-white-logotp.png";
import blackLogo from "../../assets/realgems-black-logotp.png";

const Header: React.FC = () => {
  const [shrink, setShrink] = useState(false);

  const changeBackgroundHeader = () => {
    if (window.scrollY >= 80) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundHeader);
  }, []);

  return (
    <Styles.HeaderWrapper isScrolled={shrink}>
      <Styles.Header isScrolled={shrink}>
        <Styles.LogoWrapper>
          <Styles.Logo src={whiteLogo} alt="logo do site" />
        </Styles.LogoWrapper>
        <Styles.NavBarWrapper>
          <Styles.NavBar>
            <Styles.NavBarLink>Home</Styles.NavBarLink>
          </Styles.NavBar>
          <Styles.NavBar>
            <Styles.NavBarLink>Sobre Nós</Styles.NavBarLink>
          </Styles.NavBar>
          <Styles.NavBar>
            <Styles.NavBarLink>Produtos</Styles.NavBarLink>
          </Styles.NavBar>
          <Styles.NavBar>
            <Styles.NavBarLink>Contato</Styles.NavBarLink>
          </Styles.NavBar>
        </Styles.NavBarWrapper>
      </Styles.Header>
    </Styles.HeaderWrapper>
  );
};

export default Header;
