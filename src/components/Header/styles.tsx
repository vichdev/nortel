import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
`;

export const Header = styled.header`
  display: flex;
  height: 7rem;
  width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: fixed;
  left: 0;
  right: 0;
`;

export const NavBarWrapper = styled.div``;

export const NavBar = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
