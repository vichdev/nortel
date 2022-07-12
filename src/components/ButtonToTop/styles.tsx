import styled, { keyframes } from "styled-components";

const ShowButtonAnimation = keyframes`
from{opacity:0; right: -1rem;}
to{opacity: 1; right: 1rem;}
`;

export const ButtonWrapper = styled.div<{ showButton: boolean }>`
  width: 50px;
  background-color: var(--primary);
  color: #fff;
  height: 50px;
  border-radius: 9rem;
  display: ${(props) => (props.showButton ? "flex" : "none")};
  align-items: center;
  animation-name: ${(props) => (props.showButton ? ShowButtonAnimation : "")};
  animation-duration: 1s;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  padding: 1rem;
  justify-content: center;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
  &:hover {
    opacity: 0.9;
  }
`;
