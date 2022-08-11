import styled from "styled-components";

export const ProductsCarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`;

export const ProductsCarouselTitle = styled.h1`
  color: var(--text);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ProductsCarouselDescription = styled.span`
  color: var(--text);
  font-size: 1rem;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  font-size: center;
  align-items: center;
  justify-content: center;
  display: flex;

  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const ProductsCarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  max-width: 20rem;
  max-height: 15rem;
  height: 100%;
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
