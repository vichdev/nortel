import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  max-width: 80%;
  height: 45rem;
  gap: 2.5rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  text-align: justify;
`;

export const InfoTitle = styled.h1`
  color: var(--primary);
`;

export const InfoDescription = styled.p`
  color: var(--text);
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const DescriptionEmphasis = styled.span``;
