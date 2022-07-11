import styled, { keyframes } from "styled-components";
import { Button } from "../Button/styles";

const CarouselContentForwardAnimation = keyframes`
from {opacity: 0; top: -100px}
to {opacity: 1; top: 0}
`;

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  filter: brightness(0.7);
  position: relative;
`;

export const CarouselImgWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const CarouselDots = styled.li``;

export const CarouselTextWrapper = styled.div<{ handleAnimation: Boolean }>`
  display: flex;
  height: 30%;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  animation-name: ${(props) =>
    props.handleAnimation !== undefined && props.handleAnimation
      ? CarouselContentForwardAnimation
      : ""};
  animation-duration: 1s;
  align-items: center;
  transition: 0.5s;
`;

export const CaroulselTitle = styled.h1`
  font-size: 3.7rem;
  color: white;
  font-weight: 700;
`;

export const CarouselText = styled.span`
  font-size: 1rem;
  color: white;
  font-weight: 700;
`;

export const ButtonCarousel = styled(Button)`
  max-width: 30%;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const CarouselContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
