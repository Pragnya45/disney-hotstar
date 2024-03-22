import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Video from "./Video";
import ImageView from "./Image";
import CircleIcon from "@mui/icons-material/Circle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import { Tooltip } from "antd";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { releases } from "../views/utils/data";

const arya = "/assets/videos/arya.mp4";
const aryaImg = "/assets/images/aarya.webp";
const aryaTitleImg = "/assets/images/aaryatitle.webp";

function BannerMovie() {
  const [showvideo, setShowvideo] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [muted, setMuted] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const container = document.getElementById("Container");

    const handleScroll = () => {
      setScrolling(true);

      if (scrolling) {
        setScrolling(false);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrolling]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowvideo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleVideoEnd = () => {
    console.log("called");
    setShowvideo(false);
    setTimeout(() => {
      setShowvideo(true);
    }, 3000);
    if (currentVideoIndex < releases.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  const swiperRef = useRef();
  useEffect(() => {
    if (swiperRef.current && currentVideoIndex < 5) {
      swiperRef.current.swiper.autoplay.stop();
    }
  }, [currentVideoIndex]);
  return (
    <Wrapper>
      <BannerImage
        src={releases[currentVideoIndex]?.hovercardData[0]?.coverpic}
        showvideo={showvideo}
        alt="bannerImg"
        width={200}
        height={200}
      />
      {showvideo && (
        <Player
          src={releases[currentVideoIndex]?.hovercardData[0]?.video}
          controls={false}
          loop={false}
          autoPlay
          playsInline
          onEnded={() => handleVideoEnd()}
          muted={muted}
        />
      )}
      <ContentWrapper>
        <LeftContainer>
          <TitleImg
            src={releases[currentVideoIndex]?.hovercardData[0]?.titleImg}
            width={200}
            height={200}
          />
          <YearDetailsWrapper>
            <Text>{releases[currentVideoIndex]?.hovercardData[0]?.year}</Text>
            <StyledCircle />
            <Text>
              {releases[currentVideoIndex]?.hovercardData[0]?.seasons}Seasons
            </Text>
            <StyledCircle />
            <Text>
              {releases[currentVideoIndex]?.hovercardData[0]?.totalLanguage}
              Languages
            </Text>
            <StyledCircle />
            <AgeRestriction>
              U/A {releases[currentVideoIndex]?.hovercardData[0]?.ua}
            </AgeRestriction>
          </YearDetailsWrapper>
          <Description>
            {releases[currentVideoIndex]?.hovercardData[0]?.description}
          </Description>
          <YearDetailsWrapper>
            <Text>Drama</Text>
            <VerticalLine></VerticalLine>
            <Text>Thriller</Text>
            <VerticalLine></VerticalLine>
            <Text>Mystery</Text>
            <VerticalLine></VerticalLine>
            <Text>Crime</Text>
          </YearDetailsWrapper>
          <SliderWrapper>
            <Button onClick={scrollLeft}>
              <ArrowLeftIcon />
            </Button>
            <LanguageWrapper id="Container" ref={contentRef}>
              <LanguageButton>
                Hindi<Original>original</Original>
              </LanguageButton>
              <LanguageButton>Telugu</LanguageButton>
              <LanguageButton>Tamil</LanguageButton>
              <LanguageButton>Bengali</LanguageButton>
              <LanguageButton>Marathi</LanguageButton>
              <LanguageButton>Malayalam</LanguageButton>
              <LanguageButton>Kannada</LanguageButton>
            </LanguageWrapper>
            <Button onClick={scrollRight}>
              <ArrowRightIcon />
            </Button>
          </SliderWrapper>
          <WatchWrapper>
            <WatchNowButton>
              <StyleddPlay /> Watch Now
            </WatchNowButton>
            <Tooltip title="Watchlist">
              <WatchListButton>
                <StyleddPlus />
              </WatchListButton>
            </Tooltip>{" "}
          </WatchWrapper>
        </LeftContainer>
        <RightContainer>
          <SoundWrapper>
            {muted ? (
              <Tooltip title="Unmute Trailer">
                <Mute onClick={() => setMuted(!muted)} />{" "}
              </Tooltip>
            ) : (
              <Tooltip title="Mute Trailer">
                <Sound onClick={() => setMuted(!muted)} />
              </Tooltip>
            )}
          </SoundWrapper>
          <SwiperWrapper>
            <StyledSwiper
              centeredSlides={false}
              slidesPerView={"auto"}
              direction={"horizontal"}
              loop={false}
              spaceBetween={10}
              navigation={true}
              ref={swiperRef}
              autoplay={{
                delay: 100,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="swiper-container"
            >
              {releases?.map((release, index) => (
                <SwiperSlide key={release.id}>
                  <Card
                    onClick={() => setCurrentVideoIndex(index)}
                    selected={index === currentVideoIndex}
                  >
                    <CardImg
                      src={release.hovercardData[0]?.coverpic}
                      alt="image"
                      width={98}
                      height={30}
                    />
                  </Card>
                </SwiperSlide>
              ))}
            </StyledSwiper>
          </SwiperWrapper>
        </RightContainer>
      </ContentWrapper>
    </Wrapper>
  );
}

export default BannerMovie;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 88vh;
`;

const Player = styled(Video)`
  width: 100%;
  height: 88vh;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.3s ease-in 0.3s;
  border-radius: 4px;
`;

const BannerImage = styled(ImageView)`
  width: 100%;
  height: 100%;
  opacity: 1;
  object-fit: cover;
  opacity: ${(props) => (props.showvideo ? 0 : 1)};
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 2rem 4rem 2rem 6rem;
  width: 100%;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 45%;
`;
const TitleImg = styled(ImageView)`
  width: 15rem;
  object-fit: contain;
  height: 10rem;
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
  font-size: 17px;
  font-weight: 600;
`;
const AgeRestriction = styled.button`
  font-family: var(--FONT-FAMILY);
  color: var(--white_color);
  font-size: 17px;
  font-weight: 600;
  border-radius: 4px;
  background-color: var(--white_color900);
  outline: none;
  border: none;
  padding: 4px 8px;
`;
const StyledCircle = styled(CircleIcon)`
  width: 5px;
  height: 5px;
  color: var(--tw-shadow);
`;
const Description = styled.p`
  margin-top: 0.7rem;
  font-family: var(--FONT-FAMILY) !important;
  color: var(--white_color);
  font-size: 17px;
  font-weight: 400;
  text-align: start;
`;
const VerticalLine = styled.div`
  width: 2px;
  height: 15px;
  border-radius: 2px;
  background-color: var(--tw-shadow);
`;
const ArrowLeftIcon = styled(ChevronLeftIcon)`
  transition: all ease-in-out 0.5s;
  color: var(--text-color900);
  /* position: absolute;
  top: 90%;
  left: 0; */
`;

const ArrowRightIcon = styled(ChevronRightIcon)`
  transition: all ease-in-out 0.5s;
  color: var(--text-color900);
  /* position: absolute;
  right: 28%;
  top: 90%; */
`;
const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 70%;
  overflow-x: scroll;
  gap: 1rem;
  margin-top: 0.3rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const LanguageButton = styled.button`
  font-family: var(--FONT-FAMILY);
  color: var(--white_color);
  font-size: 17px;
  font-weight: 600;
  border-radius: 20px;
  background-color: var(--bg_color600);
  outline: none;
  border: none;
  padding: 8px 20px;
`;
const Original = styled.span`
  font-family: var(--FONT-FAMILY);
  color: var(--tw-shadow);
  margin-left: 3px;
  font-size: 17px;
  font-weight: 600;
`;
const SliderWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  max-width: 70%;
`;
const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 5;
`;
const WatchWrapper = styled.div`
  display: flex;
  padding-left: 0.2rem;
  margin-top: 1rem;
`;
const WatchNowButton = styled.button`
  font-family: var(--FONT-FAMILY);
  background-color: var(--white_color900);
  font-size: 19px;
  color: var(--white_color);
  font-weight: 700;
  width: 19rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  padding: 0.9rem 2.5rem !important;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  &:hover {
    background-color: var(--bg_color500);
  }
`;
const WatchListButton = styled.button`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 0.7rem;
  margin-left: 0.8rem;
  background: var(--white_color900);
  border: none;
  outline: none;
  cursor: pointer;
`;
const StyleddPlus = styled(AddIcon)`
  width: 32px;
  height: 25px;
  color: var(--white_color);
`;
const Mute = styled(VolumeOffIcon)`
  width: 32px;
  height: 25px;
  color: var(--white_color);
`;
const Sound = styled(VolumeUpIcon)`
  width: 32px;
  height: 25px;
  color: var(--white_color);
`;
const StyleddPlay = styled(PlayArrowIcon)`
  width: 32px;
  height: 25px;
  color: var(--white_color);
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  height: 100%;
  /* align-items: end; */
  margin-top: auto;
`;
const SoundWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Card = styled.div`
  width: 78px;
  height: 40px;
  opacity: ${(props) => (props.selected ? 1 : 0.7)};
  border: ${(props) => (props.selected ? "1px solid #fff" : "none")};
  border-radius: 5px;
  &:hover {
    transform: ${(props) => (props.selected ? `scale(1.2)` : "none")};
  }
`;
const CardImg = styled(ImageView)`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
const StyledSwiper = styled(Swiper)`
  pointer-events: auto;
  height: 100%;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  .swiper-slide {
    width: 80px !important;
    top: 0.5rem;
  }
  .swiper-slide-active {
    /* border: 1px solid #fff;
    border-radius: 5px; */
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: var(--white_color);
    font-size: 16px;
    font-weight: 700;
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
    cursor: pointer;
  }
  .swiper-button-next {
    background: var(--bg_color-next-gradient) !important;
    width: 50px;
    height: 80%;
    bottom: 40px;
    right: 0;
  }
  .swiper-button-prev {
    background: var(--bg_color-prev-gradient) !important;
    width: 50px;
    height: 80%;
    bottom: 40px;
    left: 0;
  }
`;
const SwiperWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  position: relative;
`;
