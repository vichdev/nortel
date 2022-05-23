import styled from "styled-components";

export const HeaderWrapper = styled.div<{ isScrolled?: Boolean }>`
  width: 100%;
  position: fixed;
  z-index: 2000;
  padding: ${(props) =>
    props.isScrolled ? "0px 0px 20px 0px" : "10px 0px 10px 0px"};
  height: ${(props) => (props.isScrolled ? "5rem" : "7rem")};
  background-color: ${(props) => (props.isScrolled ? "black" : "transparent")};
  transition: 0.5s;
`;

export const Header = styled.header<{ isScrolled?: Boolean }>`
  display: flex;
  height: ${(props) => (props.isScrolled ? "5rem" : "7rem")};
  width: 80%;
  margin: 0 auto;
  align-items: center;
  background-color: ${(props) => (props.isScrolled ? "black" : "transparent")};
  justify-content: space-between;
  z-index: 1000;
  position: fixed;
  left: 0;
  right: 0;
  transition: 0.5s;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 60%;
  justify-content: space-evenly;
  text-align: center;
`;

export const NavBar = styled.div`
  width: 100%;
  max-width: 10%;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  text-align: center;
  color: var(--background);
`;

export const NavBarLink = styled.a`
  position: relative;
  opacity: 1;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    background-color: var(--green);
    height: 3px;
    width: 0;
    left: 0;
    bottom: -7px;
    transition: 0.3s;
  }
  :hover:after {
    width: 100%;
  }
  :hover {
    filter: brightness(1.1);
    opacity: 0.9;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
