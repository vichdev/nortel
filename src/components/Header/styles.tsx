import styled, { keyframes } from "styled-components";
import { RiArrowDropRightLine } from "react-icons/ri";

//Icons
export const DropdownMenuIcon = styled(RiArrowDropRightLine)`
  color: var(--yellow);
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
  height: ${(props) => (props.isScrolled ? "5rem" : "7rem")};
  background-color: ${(props) => (props.isScrolled ? "white" : "transparent")};
  transition: 0.6s;
`;

export const Header = styled.header<{ isScrolled?: Boolean }>`
  display: flex;
  height: ${(props) => (props.isScrolled ? "5rem" : "7rem")};
  width: 80%;
  margin: 0 auto;
  align-items: center;
  background-color: ${(props) => (props.isScrolled ? "white" : "transparent")};
  justify-content: space-between;
  z-index: 1000;
  position: fixed;
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
  border-radius: 5px;
  flex-direction: column;
  position: absolute;
  top: ${(props) => (props.isScrolled ? "4rem" : "5rem")};
  justify-content: space-around;
  background-color: #fff;
  transition: ${DropdownMenuAnimation} 0.7s ease-in-out;
  animation-name: ${DropdownMenuAnimation};
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
`;

export const DropdownText = styled.a`
  color: var(--primary);
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
  }
  &:hover {
    ${DropdownMenuIcon} {
      visibility: visible;
      display: flex;
    }
  }
`;

export const NavBar = styled.div`
  width: 100%;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  color: var(--primary);
  display: flex;
  padding: 1rem;
  &:hover {
    ${DropdownContainer} {
      display: flex;
    }
  }
`;

export const NavBarLink = styled.a`
  position: relative;
  opacity: 1;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    background-color: var(--primary);
    height: 3px;
    width: 0;
    left: 0;
    bottom: -7px;
    transition: 0.3s;
  }
  :hover:after {
    width: 100%;
  }
  &:hover {
    filter: brightness(1.1);
    opacity: 0.9;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 15rem;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
