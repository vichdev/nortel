import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 550px;
  object-fit: fit;
  position: relative;
`;

export const CarouselImgWrapper = styled.div`
  position: relative;
`;

export const CarouselDots = styled.li`
  width: 30px;
  height: 30px;
  color: #fff;
  background-color: #fff;
  border-radius: 10px;
`;

export const CarouselTextWrapper = styled.div`
  position: absolute;
  z-index: 100;
`;
