import styled from "styled-components";
import { Button } from "../../components/Button/styles";

export const ProductsWrapper = styled.div`
  width: 100%;
  height: 50rem;
  max-height: 35rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  max-width: 80%;
  padding: 1rem;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProductImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 99rem;
`;

export const ProductImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 99rem;
`;

export const ProductsContent = styled.div`
  width: 100%;
  max-width: 15rem;
  height: 100%;
  max-height: 22rem;
  background-color: white;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  -webkit-box-shadow: -1px -1px 20px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px -1px 20px 0px rgba(0, 0, 0, 0.2);
  box-shadow: -1px -1px 20px 0px rgba(0, 0, 0, 0.2);
  gap: 2rem;
  &:hover {
    transform: scale(1.2);
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Description = styled.span`
  font-size: 0.8rem;
`;

export const TitlePage = styled.h1`
  margin-bottom: 0.5rem;
`;

export const DescriptionPage = styled.span``;

export const TitlePageWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const BannerButton = styled(Button)``;
