import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import logo from "../../assets/logonortel.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [shrink, setShrink] = useState<Boolean>(false);

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
          <Styles.Logo src={logo} alt="logo do site" />
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
            <RiArrowDropDownLine />
            <Styles.DropdownContainer isScrolled={shrink}>
              <Styles.DropdownList>
                <Styles.DropdownMenuIcon />
                <Link to="/produtos/hotelaria">
                  <Styles.DropdownText>Hotelaria</Styles.DropdownText>
                </Link>
              </Styles.DropdownList>
              <Styles.DropdownList>
                <Styles.DropdownMenuIcon />
                <Link to="/produtos/veterinarios">
                  <Styles.DropdownText>Veterinários</Styles.DropdownText>
                </Link>
              </Styles.DropdownList>
              <Styles.DropdownList>
                <Styles.DropdownMenuIcon />
                <Link to="/produtos/fitoterapicos">
                  <Styles.DropdownText>Fitoterápicos</Styles.DropdownText>
                </Link>
              </Styles.DropdownList>
            </Styles.DropdownContainer>
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
