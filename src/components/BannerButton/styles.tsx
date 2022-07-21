import styled from "styled-components";

export const BannerButton = styled.button<{ toggleUnderline: boolean }>`
  border: none;
  background-color: transparent;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  cursor: ${(props) => (props.toggleUnderline ? "default" : "pointer")};
  a {
    text-decoration: ${(props) =>
      props.toggleUnderline ? "underline" : "none"};
    color: #fff;
    cursor: ${(props) => (props.toggleUnderline ? "default" : "pointer")};
  }
`;
