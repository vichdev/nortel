import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  height: 20rem;
  justify-content: center;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const InformationContainer = styled.div``;

export const CopyrightText = styled.h1`
  color: black;
  font-size: 1rem;
  height: 15%;
`;

export const FooterCopyrightContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialMediasContainer = styled.div`
  width: 10%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SocialMedia = styled.div`
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99rem;
  height: 2rem;
  padding: 0.1rem;
  svg {
    width: 100%;
    height: 100%;
    padding: 0.3rem;
  }
  &:hover {
    background-color: black;
    svg {
      color: white;
    }
  }
`;
