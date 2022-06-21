import styled from "styled-components";
import background from "../../assets/backgrounds/background.jpg";

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 25rem;
  background-image: url(${background});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  background-color: var(--primary);
`;
