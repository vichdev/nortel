import styled from "styled-components";

export const WhatsAppWrapper = styled.a`
  display: flex;
  position: fixed;
  right: 0.5rem;
  bottom: 6rem;
  z-index: 9999;
  opacity: 0.9;
  svg {
    font-size: 4rem;
    color: #2eb843;
  }
  &:hover {
    opacity: 1;
  }
`;
