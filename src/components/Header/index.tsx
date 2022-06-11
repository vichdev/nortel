import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import whiteLogo from "../../assets/realgems-white-logotp.png";
import blackLogo from "../../assets/realgems-black-logotp.png";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";

const Header: React.FC = () => {
  const [shrink, setShrink] = useState<Boolean>(false);

  const DropdownList = [
    { titulo: "Veterinários", rota: "produtos/produtos-veterinarios" },
    { titulo: "Hotelaria", rota: "produtos/produtos-hotelaria" },
    {
      titulo: "Fitoterápicos",
      rota: "produtos/produtos-fitoterapicos",
    },
  ];

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
            <RiArrowDropDownLine />
            <Styles.DropdownContainer isScrolled={shrink}>
              {DropdownList.map((item, index) => {
                return (
                  <Styles.DropdownList key={index}>
                    <Styles.DropdownMenuIcon />
                    <Styles.DropdownText>{item.titulo}</Styles.DropdownText>
                  </Styles.DropdownList>
                );
              })}
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
