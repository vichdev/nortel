import React from "react";
import * as Styles from "./styles";
// import logo from "../../assets/logo_teste.png";
const Header: React.FC = () => {
  return (
    <Styles.HeaderWrapper>
      <Styles.Header>
        <Styles.LogoWrapper>
          {/* <Styles.Logo src={logo} alt="logo do site" /> */}
          <h1>Nortel</h1>
          <span>Fornecendo aromas e sabores</span>
        </Styles.LogoWrapper>
        <Styles.NavBarWrapper>
          <Styles.NavBar>
            <ul>Home</ul>
            <ul>Sobre nós</ul>
            <ul>Produtos</ul>
            <ul>Contato</ul>
          </Styles.NavBar>
        </Styles.NavBarWrapper>
      </Styles.Header>
    </Styles.HeaderWrapper>
  );
};

export default Header;
