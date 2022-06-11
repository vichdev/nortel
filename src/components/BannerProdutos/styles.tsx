import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100vw;
  height: 100%;
  padding: 2rem;
  background-color: #eeee;
`;

export const SectionContainer = styled.div`
  padding: 3rem;
`;

export const ProductsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-content: space-around;
  align-items: center;
  height: 40rem;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 25rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const ProductTitle = styled.h1``;

export const ProductDescription = styled.span``;
