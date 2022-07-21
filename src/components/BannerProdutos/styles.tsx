import styled, { keyframes } from "styled-components";
import { Button } from "../Button/styles";

const ProductAnimation = keyframes`
from {opacity: 0; left: -60px}
to {opacity: 1; left: 0  }
`;

export const SectionWrapper = styled.div`
  width: 100vw;
  height: 100%;
  padding: 2rem;
  background-color: #fff;
`;

export const SectionContainer = styled.div`
  padding: 3rem;
`;

export const ProductsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.25rem;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 25%;
  background-color: white;
  animation-name: ${ProductAnimation};
  animation-duration: 1.5s;
  box-shadow: 2px 2px 15px 10px #eeee;
  justify-content: space-around;
  align-items: center;
  height: 50rem;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 35rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const ProductTitle = styled.h1``;

export const ProductDescription = styled.span``;

export const ProductsButton = styled(Button)`
  max-width: 60%;
`;
