import styled from "styled-components";
import { Button } from "../Button/styles";

export const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  padding: 2rem;
  margin-bottom: 5rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 30rem;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const Info = styled.span`
  color: var(--text);
  line-height: 1.5rem;
  font-size: 1.25rem;
  text-align: justify;
`;

export const ButtonBuyNow = styled(Button)`
  width: 30%;
  &:hover {
    filter: opacity(0.9);
  }
`;
