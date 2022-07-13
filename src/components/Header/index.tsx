import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import logo from "../../assets/nortel_logo_3.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [shrink, setShrink] = useState<boolean>(false);
  const location = useLocation();

  const changeBackgroundHeader = () => {
    if (window.scrollY >= 150) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundHeader);
  }, []);

  return (
    <>
      {location.pathname === "/" ? (
        <Styles.HeaderWrapper isScrolled={shrink}>
          <Styles.Header isScrolled={shrink}>
            <Styles.LogoWrapper>
              <Styles.Logo src={logo} alt="logo da empresa" />
            </Styles.LogoWrapper>
            <Styles.NavBarWrapper>
              <Styles.NavBar>
                <Link to="/">
                  <Styles.NavBarLink isScrolled={shrink}>
                    Home
                  </Styles.NavBarLink>
                </Link>
              </Styles.NavBar>
              <Styles.NavBar>
                <Link to={"/about-us"} style={{ textDecoration: "none" }}>
                  <Styles.NavBarLink isScrolled={shrink}>
                    Sobre Nós
                  </Styles.NavBarLink>
                </Link>
              </Styles.NavBar>
              <Styles.NavBar>
                <Link to={"/produtos"}>
                  <Styles.NavBarLink isScrolled={shrink}>
                    Produtos
                  </Styles.NavBarLink>
                </Link>
                <RiArrowDropDownLine />
                <Styles.DropdownContainer isScrolled={shrink}>
                  <Styles.DropdownList>
                    <Styles.DropdownMenuIcon />
                    <Link to="/produtos/hotelaria">Hotelaria</Link>
                  </Styles.DropdownList>
                  <Styles.DropdownList>
                    <Styles.DropdownMenuIcon />
                    <Link to="/produtos/veterinarios">Veterinários</Link>
                  </Styles.DropdownList>
                  <Styles.DropdownList>
                    <Styles.DropdownMenuIcon />
                    <Link to="/produtos/fitoterapicos">Fitoterápicos</Link>
                  </Styles.DropdownList>
                  <Styles.DropdownList>
                    <Styles.DropdownMenuIcon />
                    <Link to="/produtos/personalize">Personalizados</Link>
                  </Styles.DropdownList>
                </Styles.DropdownContainer>
              </Styles.NavBar>
              <Styles.NavBar>
                <Styles.NavBarLink isScrolled={shrink}>
                  Contato
                </Styles.NavBarLink>
              </Styles.NavBar>
            </Styles.NavBarWrapper>
          </Styles.Header>
        </Styles.HeaderWrapper>
      ) : (
        <Styles.HeaderWrapper isScrolled={true}>
          <Styles.Header isScrolled={true}>
            <Styles.LogoWrapper>
              <Styles.Logo src={logo} alt="logo da empresa" />
            </Styles.LogoWrapper>
            <Styles.NavBarWrapper>
              <Styles.NavBar>
                <Link to={"/"}>
                  <Styles.NavBarLink isScrolled={true}>Home</Styles.NavBarLink>
                </Link>
              </Styles.NavBar>
              <Styles.NavBar>
                <Link to={"/about-us"} style={{ textDecoration: "none" }}>
                  <Styles.NavBarLink isScrolled={true}>
                    Sobre Nós
                  </Styles.NavBarLink>
                </Link>
              </Styles.NavBar>
              <Styles.NavBar>
                <Link to={"/produtos"}>
                  <Styles.NavBarLink isScrolled={true}>
                    Produtos
                  </Styles.NavBarLink>
                </Link>
                <RiArrowDropDownLine />
                <Styles.DropdownContainer isScrolled={true}>
                  <Styles.DropdownList>
                    <Styles.DropdownMenuIcon />
                    <Link to="/produtos/hotelaria">Hotelaria</Link>
                  </Styles.DropdownList>
                  <Styles.DropdownList>
                    <Styles.DropdownMenuIcon />
                    <Link to="/produtos/veterinarios">Veterinários</Link>
                  </Styles.DropdownList>
                  <Styles.DropdownList>
                    <Styles.DropdownMenuIcon />
                    <Link to="/produtos/fitoterapicos">Fitoterápicos</Link>
                  </Styles.DropdownList>
                  <Styles.DropdownList>
                    <Styles.DropdownMenuIcon />
                    <Link to="/produtos/personalize">Personalizados</Link>
                  </Styles.DropdownList>
                </Styles.DropdownContainer>
              </Styles.NavBar>
              <Styles.NavBar>
                <Styles.NavBarLink isScrolled={true}>Contato</Styles.NavBarLink>
              </Styles.NavBar>
            </Styles.NavBarWrapper>
          </Styles.Header>
        </Styles.HeaderWrapper>
      )}
    </>
  );
};

export default Header;
