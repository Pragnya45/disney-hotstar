import React from "react";
import styled from "styled-components";
import ImageView from "./Image";
const banner = "/assets/images/OPPO-Reno-11-series-India.webp";
function Banner() {
  return (
    <Bannerwrapper>
      <Bannercontainer>
        <LeftContainer>
          <GradientContainer></GradientContainer>
          <ImgWrapper>
            <Image src={banner} alt="disney" width={590} height={320} />
          </ImgWrapper>
        </LeftContainer>
      </Bannercontainer>
    </Bannerwrapper>
  );
}

export default Banner;

const Bannerwrapper = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
  position: relative;
  width: 100%;
  padding-right: 30px;
`;
const Bannercontainer = styled.div`
  background: var(--bg_color800);
  border-radius: 8px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 20rem;
`;
const LeftContainer = styled.div`
  height: 100%;
  max-width: 592px;
  position: relative;
  width: 64%;
`;
const GradientContainer = styled.div`
  background: var(--linear-gradientColor1);
  height: 100%;
  position: absolute;
  transform: var(--transform-gradient);
  width: 100px;
  z-index: 1;
  right: 0;
`;
const ImgWrapper = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  position: absolute;
  object-fit: fill;
`;
const Image = styled(ImageView)``;
