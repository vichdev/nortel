import styled from "styled-components";
import { keyframes } from "styled-components";

const ImgAnimation = keyframes`
from {opacity: 0.5; left: -60px}
to {opacity: 1; left: 0  }
`;

const InformationAnimation = keyframes`
from {opacity: 0; left: 60px}
to {opacity: 1; left: 0  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const BannerImgWrapper = styled.div<{ doAnimation: boolean }>`
  animation-name: ${(props) => (props.doAnimation ? ImgAnimation : "")};
  opacity: 0;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  height: 700px;
`;

export const BannerInformationWrapper = styled.div<{ doAnimation: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 700px;
  opacity: 0;
  position: relative;
  box-shadow: 20px 15px 20px 15px whitesmoke;
  flex-wrap: wrap;
  animation-name: ${(props) => (props.doAnimation ? InformationAnimation : "")};
  animation-fill-mode: forwards;
  animation-duration: 1.5s;
`;

export const BannerInformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 250px;
  height: 250px;
  background-color: white;
  svg {
    font-size: 3rem;
    color: #f0ce0fee;
  }
`;

export const BannerInformationTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const BannerInformationContent = styled.span``;
