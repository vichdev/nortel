import styled, { keyframes } from "styled-components";
import { RiArrowDropRightLine } from "react-icons/ri";

//Icons
export const DropdownMenuIcon = styled(RiArrowDropRightLine)`
  color: var(--secondary);
  position: absolute;
`;

//Animations

const MenuIconFade = keyframes`
0% {width: 0%}
100% {width: 13%}
`;

const DropdownMenuAnimation = keyframes`
0% {height: 0rem; }
100% {height: 8rem; }
`;

//Header
export const HeaderWrapper = styled.div<{ isScrolled?: Boolean }>`
  width: 100%;
  position: fixed;
  z-index: 2000;
  padding: ${(props) =>
    props.isScrolled ? "0px 0px 20px 0px" : "10px 0px 10px 0px"};
  height: ${(props) => (props.isScrolled ? "6rem" : "8rem")};
  background-color: ${(props) => (props.isScrolled ? "white" : "transparent")};
  transition: 0.6s;
`;

export const Header = styled.header<{ isScrolled?: Boolean }>`
  display: flex;
  height: ${(props) => (props.isScrolled ? "6rem" : "8rem")};
  width: 80%;
  margin: 0 auto;
  align-items: center;
  color: ${(props) => (props.isScrolled ? "#000" : "#fff")};
  background-color: ${(props) => (props.isScrolled ? "white" : "transparent")};
  justify-content: space-between;
  z-index: 1000;
  position: fixed;
  padding: 2rem;
  left: 0;
  right: 0;
  top: 0;
  transition: 0.5s;
`;

//NavBar
export const NavBarWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 60%;
  justify-content: space-evenly;
  text-align: center;
`;

export const DropdownContainer = styled.div<{ isScrolled?: Boolean }>`
  width: 100%;
  max-width: 10rem;
  height: 8rem;
  z-index: 3000;
  align-items: center;
  display: none;
  padding: 0.5rem;
  flex-direction: column;
  position: absolute;
  top: ${(props) => (props.isScrolled ? "4rem" : "5rem")};
  justify-content: space-around;
  background-color: white;
  transition: ${DropdownMenuAnimation} 0.7s ease-in-out;
  animation-name: ${DropdownMenuAnimation};
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
`;

export const DropdownText = styled.a`
  color: black;
`;

export const DropdownList = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  transition: 0.5s ease-in-out;
  ${DropdownMenuIcon} {
    position: relative;
    display: none;
    transition: 3s ease;
    animation-name: ${MenuIconFade};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  &:hover {
    ${DropdownMenuIcon} {
      visibility: visible;
      display: flex;
    }
  }
`;

export const NavBar = styled.div<{ isScrolled?: Boolean }>`
  width: 100%;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  align-items: center;
  display: flex;
  padding: 1rem;
  &:hover {
    ${DropdownContainer} {
      display: flex;
    }
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
  svg {
    opacity: 0.5;
    font-size: 1.5rem;
  }
`;

export const NavBarLink = styled.a<{ isScrolled: Boolean }>`
  position: relative;
  opacity: 0.7;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isScrolled ? "#000" : "#fff")};

  ::after {
    content: "";
    position: absolute;
    background-color: var(--primary);
    height: 2px;
    right: 0;
    width: 0;
    margin: auto;
    right: 0;
    left: 0;
    bottom: -7px;
    transition: 0.3s;
  }
  :hover:after {
    width: 100%;
  }
  &:hover {
    filter: brightness(1.1);
    opacity: 1;
  }
  svg {
    color: red;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  max-width: 5rem;
  max-height: 5rem;
`;
