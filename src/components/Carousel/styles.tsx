import styled from "styled-components";
import { Button } from "../Button/styles";

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  position: relative;
`;

export const CarouselImgWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const CarouselDots = styled.li``;

export const CarouselTextWrapper = styled.div`
  display: flex;
  height: 30%;
  flex-direction: column;
  justify-content: space-around;
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
