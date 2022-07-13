import styled from "styled-components";

export const ProductsCarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`;

export const ProductsCarouselTitle = styled.h1`
  color: #000;
  font-size: 2rem;
`;

export const ProductsCarouselDescription = styled.span`
  color: #000;
  font-size: 1rem;
`;

export const ProductsCarouselImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const ProductsCarouselContainer = styled.div`
  width: 100%;
  height: 800px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  flex-direction: column;
`;

export const NextArrow = styled.button`
  background-color: black;
  color: #fff;
  position: absolute;
  top: 0;
  right: 15rem;
  svg {
    color: #fff;
  }
`;
