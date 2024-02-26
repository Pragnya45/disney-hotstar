import React from "react";
import styled from "styled-components";
import ImageView from "./Image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HorizontalCard({ title, data }) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Heading>{title}</Heading>

        <ViewButton>
          View all
          <SideArrow />
        </ViewButton>
      </HeaderWrapper>
      <CardWrapper>
        <StyledSwiper
          centeredSlides={false}
          slidesPerView={4}
          loop={false}
          spaceBetween={20}
          navigation={true}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation]}
          breakpoints={{
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="swiper-container"
        >
          {data.map((release, index) => (
            <SwiperSlide key={index}>
              <ContentWrapper>
                <Card>
                  <CardImage
                    src={release.img}
                    alt={release.title}
                    width={100}
                    height={100}
                  />
                  <PlayWrapper>
                    <Play />
                    <Duration>5m</Duration>
                  </PlayWrapper>
                  {/* {release?.hovercardData?.map((hoverData, index) => (
                <HoverCard key={index}>
                  <HoverContent>
                    <Hoverimg
                      src={hoverData.coverpic}
                      alt="hanuman"
                      width={200}
                      height={200}
                    />
                    <LanguageWrapper>
                      {hoverData.language}
                      <StyleddownArrow />
                    </LanguageWrapper>
                    <ImgOverlay> </ImgOverlay>I
                    <HovercardTitleImg
                      src={hoverData.titleImg}
                      width={100}
                      height={100}
                      alt="hanuman-img"
                    />
                    <BottomContentWrapper>
                      <WatchWrapper>
                        <WatchNowBUtton>
                          <StyleddPlay /> Watch Now
                        </WatchNowBUtton>
                        <WatchListButton>
                          <StyleddPlus />
                        </WatchListButton>
                      </WatchWrapper>
                      <YearDetailsWrapper>
                        <Text>{hoverData.year}</Text>
                        <StyledCircle />
                        <Text>
                          {hoverData.seasons}
                          Seasons
                        </Text>
                        <StyledCircle />
                        <Text>{hoverData.totalLanguage}Languages</Text>
                        <StyledCircle />
                        <Text>U/A{hoverData.ua}</Text>
                      </YearDetailsWrapper>
                      <Description>{hoverData.description}</Description>
                    </BottomContentWrapper>
                  </HoverContent>
                </HoverCard>
              ))} */}
                </Card>
                <TextContainer>
                  <Title>{release.title}</Title>
                  <Description>{release.description}</Description>
                </TextContainer>
              </ContentWrapper>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </CardWrapper>
    </Wrapper>
  );
}

export default HorizontalCard;

const SideArrow = styled(ChevronRightIcon)`
  width: 25px;
  height: 22px;
  color: var(--text-color1000);
`;
const ViewButton = styled.button`
  display: flex;
  font-size: 17px;
  font-weight: 700;
  color: var(--text-color1000);
  margin-left: 0.5rem;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;
  padding-right: 1rem;
  &:hover {
    color: var(--white_color);
    ${SideArrow} {
      color: var(--white_color);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    .slick-next {
      opacity: 1;
    }
    ${ViewButton} {
      display: flex;
    }
  }
`;
const Title = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color900);
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const PlayWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0px;
  padding: 15px 10px;
  justify-content: space-between;
  align-items: center;
  background: var(--linear-gradient-color);
`;
const Play = styled(PlayArrowIcon)`
  width: 35px;
  height: 25px;
  color: var(--text-color900);
  border-radius: 6px;
`;

const Duration = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 14px;
  color: var(--tw-shadow);
`;
const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color900);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Description = styled.p`
  font-family: var(--FONT-FAMILY) !important;
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 400;
  text-align: start;
  display: none;
  transition: display 0.3s ease-in;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
`;
const ContentWrapper = styled.div`
  display: flex !important;
  cursor: pointer;
  flex-direction: column;
  align-items: start;
  width: 16rem !important;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out,
    z-index 0.3s ease-in-out, top 0.3s ease-in-out; /* Include 'top' in the transition property */
  z-index: 0;
  transform-origin: bottom;
  border-radius: 10px;

  &:hover {
    transform: scale(1);
    width: 18rem !important;
    z-index: 2;
    top: -20px;
    background: var(--bg_color800);
    box-shadow: var(--box-shadow900);
    position: relative;
    ${Description} {
      display: block;
    }
  }
`;

const StyledSwiper = styled(Swiper)`
  pointer-events: auto;
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: start;
  .swiper-slide {
    width: 16rem !important;
    top: 2rem;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: var(--white_color);
    font-size: 20px;
    font-weight: 700;
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
    cursor: pointer;
  }
  .swiper-button-next {
    background: var(--bg_color-next-gradient) !important;
    width: 75px;
    height: 100%;
    top: 3%;
    right: 0;
    opacity: 0;
  }
  .swiper-button-prev {
    background: var(--bg_color-prev-gradient) !important;
    width: 75px;
    height: 100%;
    top: 3%;
    left: 0;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  width: 100%;

  &:hover {
    ${ViewButton} {
      opacity: 1 !important;
    }
    ${StyledSwiper} {
      .swiper-button-next {
        opacity: 1;
      }
    }
  }
`;
const CardImage = styled(ImageView)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
const ArrowLeftIcon = styled(ChevronLeftIcon)`
  transition: all ease-in-out 0.5s;
  color: var(--text-color900);
`;

const ArrowRightIcon = styled(ChevronRightIcon)`
  transition: all ease-in-out 0.5s;
  color: var(--text-color900);
`;

const HoverCard = styled.div`
  display: none;
  width: 20rem !important;
  height: 24rem !important;
  transform: translate(116.769px, 1158.63px);
  transform-origin: left center;
  opacity: 0;
  orphans: 10;
  position: absolute;
  left: -35px;
  z-index: 8 !important;
  animation: hoveranimation 0.2s ease-in forwards;
  top: -45px;

  @keyframes hoveranimation {
    0% {
      transform: scale3d(0.8, 0.8, 1);
    }
    100% {
      opacity: 1;
      transform: scaleX(0.9) scaleY(0.9);
    }
  }
`;
const Card = styled.div`
  position: relative;
  width: 100% !important;
  height: 10rem !important;
  cursor: pointer;
  &:hover {
    ${HoverCard} {
      display: block;
    }
  }
`;
const HoverContent = styled.div`
  background: var(--bg_color800);
  border-radius: 8px;
  box-shadow: var(--box-shadow900);
  height: 100%;
  margin: 0;

  position: relative;
  /* overflow: hidden; */
  padding: 0;
  width: 100%;
`;
const Hoverimg = styled(ImageView)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 6px;
`;
const HovercardTitleImg = styled(ImageView)`
  position: absolute;
  top: 65px;
  left: 10px;
  width: 7rem;
  height: 4rem;
`;
const LanguageWrapper = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: transparent;
  color: var(--white_color);
  font-size: 14px;
  letter-spacing: 0.2px;
  font-weight: 700;
  border: none;
  outline: none;
  top: 10px;
  left: 10px;
  cursor: pointer;
  font-family: var(--FONT-FAMILY);
  text-shadow: var(--text-shadow);
`;
const StyleddownArrow = styled(KeyboardArrowDownIcon)`
  width: 27px;
  height: 19px;
  color: var(--white_color);
`;
const StyleddPlay = styled(PlayArrowIcon)`
  width: 27px;
  height: 19px;

  color: var(--bg_color1000);
`;
const StyleddPlus = styled(AddIcon)`
  width: 25px;
  height: 17px;
  color: var(--white_color);
`;
const StyledCircle = styled(CircleIcon)`
  width: 5px;
  height: 5px;
  color: var(--tw-shadow);
`;
const ImgOverlay = styled.div`
  width: 100%;
  background: var(--overlay-color);
  position: absolute;
  top: 110px;
  height: 6rem;
`;
const BottomContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  top: 210px;
  position: absolute;
`;
const WatchWrapper = styled.div`
  display: flex;
  padding-left: 0.2rem;
`;
const WatchNowBUtton = styled.button`
  font-family: var(--FONT-FAMILY);
  background-color: var(--white_color);
  font-size: 14px;
  color: var(--bg_color1000);
  font-weight: 700;
  width: 15.2rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  padding: 0.9rem 2.3rem !important;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`;
const WatchListButton = styled.button`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 0.7rem;
  margin-left: 0.8rem;
  background: var(--bg_color600);
  border: none;
  outline: none;
  cursor: pointer;
`;
const YearDetailsWrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;
  gap: 9px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const Text = styled.p`
  font-family: var(--FONT-FAMILY);
  color: var(--white_color);
  font-size: 14px;
  font-weight: 600;
`;
