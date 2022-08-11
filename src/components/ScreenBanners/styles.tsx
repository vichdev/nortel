import styled from "styled-components";
import { Button } from "../Button/styles";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BannerContainer = styled.div<{ onCenter?: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: ${(props) => (props.onCenter ? "40%" : "60%")};
  left: ${(props) => (props.onCenter ? "50%" : "25%")};
  transform: translate(-50%, -50%);
  text-align: center;
  svg {
    color: white;
  }
`;

export const ButtonWrapper = styled.div<{ displayButton: boolean }>`
  display: ${(props) => (props.displayButton ? "flex" : "none")};
  position: absolute;
  top: 60%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
`;

export const BannerButton = styled(Button)`
  width: 100%;
  min-width: 10rem;
  max-width: 20%;
  a {
    width: 100%;
    height: 100%;
    color: white;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 3.5rem;
  color: #fff;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  filter: brightness(0.5);
`;
