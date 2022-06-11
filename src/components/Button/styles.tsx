import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 10rem;
  height: 20%;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--green);
  color: var(--green);
  opacity: 1;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: var(--green);
    color: white;
  }
`;
