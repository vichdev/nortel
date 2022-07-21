import styled from "styled-components";
import { Button } from "../../components/Button/styles";

export const ProductsWrapper = styled.div`
  width: 100%;
  height: 50rem;
  max-height: 50rem;
  margin: 0 auto;
  max-width: 80%;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProductsContent = styled.div`
  width: 100%;
  max-width: 15rem;
  height: 100%;
  max-height: 20rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 99rem;
`;

export const ProductImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 99rem;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h1``;

export const Description = styled.span``;

export const BannerButton = styled(Button)``;
