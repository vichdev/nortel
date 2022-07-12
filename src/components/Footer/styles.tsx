import styled from "styled-components";
import { Button } from "../Button/styles";

export const FooterContainer = styled.div`
  width: 100%;
  height: 30rem;
  padding: 1rem;
  box-shadow: 5px 5px 15px 15px #eeeeee;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  margin: 0 auto;
  max-width: 80%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const EnterpriseInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;
  align-items: flex-start;
`;

export const EnterpriseInformation = styled.span``;

export const EntepriseInformationEmail = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: underline;
  color: black;
  cursor: pointer;
  svg {
    margin-right: 0.5rem;
  }
`;

export const EntepriseInformationFone = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
`;

export const EntepriseInformationLink = styled.a`
  display: flex;
  width: 100%;
`;

export const EntepriseInformationLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export const EnterpriseInformationLogoWrapper = styled.div`
  width: 100%;
  max-width: 10rem;
  height: 100%;
  max-height: 7rem;
  padding-right: 1rem;
`;

export const FooterButton = styled(Button)`
  width: 100%;
  max-width: 50%;
  color: #fff;
  height: 40px;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    background-color: white;
    color: var(--primary);
  }
`;

export const CopyrightText = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  height: 15%;
`;

export const FooterCopyrightContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0px 1rem 0px;
  align-items: center;
  justify-content: space-between;
`;

export const SocialMediasContainer = styled.div`
  width: 10%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SocialMedia = styled.a<{ BgColor: string }>`
  width: 2rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  text-decoration: none;
  color: black;
  height: 2rem;
  padding: 0.1rem;
  svg {
    width: 100%;
    height: 100%;
    padding: 0.3rem;
  }
  &:hover {
    background-color: ${(props) => (props.BgColor ? props.BgColor : "black")};
    svg {
      color: ${(props) => (props.color ? props.color : "white")};
    }
  }
`;

export const FooterNavBarWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-around;
`;

export const FooterNavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-right: 1rem;
`;

export const FooterNavBarTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const FooterNavBarLink = styled.a`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #101820;
`;

export const Divider = styled.hr`
  color: #dddddd;
  opacity: 0.5;
  width: 100%;
`;

export const Maps = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
