import styled from "styled-components";

export const ProductsCarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`;

export const ProductsCarouselTitle = styled.h1`
  color: #000;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const ProductsCarouselDescription = styled.span`
  color: #000;
  font-size: 1rem;
`;

export const ProductsCarouselImg = styled.img`
  width: 200px;
  border-radius: 99rem;
  height: 200px;
`;

export const ProductsCarouselContainer = styled.div`
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: center;
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
