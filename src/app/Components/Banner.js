import React from "react";
import styled from "styled-components";
import ImageView from "./Image";
const banner = "/assets/images/Banner-karma.jpg";
const logo = "/assets/icons/logo_dark.png";
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
        <RightContainer>
          <BannerContentWrapper>
            <Logo src={logo} alt="disney" width={590} height={320} />
            <Content>
              <Title>Karma Calling</Title>
              <StreamingDate>Streaming from Jan 26</StreamingDate>
            </Content>
          </BannerContentWrapper>
          <Button>Trailer</Button>
        </RightContainer>
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
  height: 16rem;
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
  width: 100%;
  position: absolute;
  /* object-fit: fill; */
`;
const Image = styled(ImageView)`
  /* object-fit: contain; */
  width: 100%;

  height: 100%;
`;
const RightContainer = styled.div`
  background: var(--bg_color-gradient);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 8px;
  width: 36%;
`;
const BannerContentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Logo = styled(ImageView)`
  max-width: 48px;
  height: auto;
  border-radius: 2px;
`;
const Content = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.3rem;
`;
const Title = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--white_color);
`;
const StreamingDate = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--text-color1000);
`;
const Button = styled.button`
  color: var(--white_color);
  font-family: var(--FONT-FAMILY);
  background-color: var(--bg_color700);
  outline: none;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  width: 170px;
  cursor: pointer;
  padding: 18px 3px;
`;
