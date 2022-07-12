import styled from "styled-components";

export const Button = styled.button<{ bgColor?: string; color?: string }>`
  width: 100%;
  padding: 1rem;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  border-radius: 5px;
  border: 1px solid var(--primary);
  color: ${(props) => (props.color ? props.color : "var(--primary)")};
  opacity: 1;
  font-size: 1rem;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: var(--primary);
    color: white;
  }
`;
