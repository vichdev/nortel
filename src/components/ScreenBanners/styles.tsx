import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  svg {
    color: white;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin-bottom: 2rem;
`;

export const BannerDescription = styled.span`
  font-size: 1.1875rem;
  color: #fff;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  filter: brightness(0.5);
`;

export const BannerLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  svg {
    cursor: default;
  }
`;
