import styled, { keyframes } from "styled-components";
import { RiArrowDropRightLine } from "react-icons/ri";

//Animations

const MenuIconFade = keyframes`
0% {font-size: 0px}
100% {font-size: 15px}
`;

const DropdownMenuAnimation = keyframes`
0% {height: 9rem; }
100% {height: 15rem; }
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
  box-shadow: ${(props) =>
    props.isScrolled ? "0px -3px 50px 24px rgba(154, 154, 154, 0.24)" : ""};
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
  max-width: 11rem;
  height: 100%;
  max-height: 13rem;
  z-index: 3000;
  align-items: center;
  display: none;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  position: absolute;
  top: ${(props) => (props.isScrolled ? "4.5rem" : "5.5rem")};
  justify-content: space-between;
  background-color: white;
  transition: ${DropdownMenuAnimation} 0.7s ease-in-out;
  animation-name: ${DropdownMenuAnimation};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`;

export const DropdownText = styled.a`
  color: #333333;
  font-size: 1rem;
`;

export const DropdownList = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  transition: 0.5s ease-in-out;
  padding: 1rem;

  &:hover {
    background-color: var(--primary);
    a {
      color: white;
    }
  }
  a {
    color: #333333;
    font-size: 1rem;
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

export const NavBarLink = styled.span<{ isScrolled: Boolean }>`
  position: relative;
  opacity: 0.7;
  display: flex;
  font-size: 1rem;
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
    left: 0;
    bottom: -0.5rem;
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
