import styled from "styled-components";

export const Button = styled.button<{ bgColor?: string; color?: string }>`
  width: 100%;
  max-width: 10rem;
  padding: 1rem;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  border-radius: 5px;
  border: 1px solid var(--yellow);
  color: ${(props) => (props.color ? props.color : "var(--yellow)")};
  opacity: 1;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: var(--yellow);
    color: white;
  }
`;
