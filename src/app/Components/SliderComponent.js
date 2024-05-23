"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ImageView from "./Image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import Video from "./Video";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter, usePathname } from "next/navigation";
import CircleIcon from "@mui/icons-material/Circle";
import { Tooltip } from "antd";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const freeImg = "/assets/images/free.webp";

export default function SliderComponent({ title, data, isSpan }) {
  const [showvideo, setShowvideo] = useState(false);
  const [muted, setMuted] = useState({});
  const [isFirstchild, setIsFirstchild] = useState(false);
  const [islastchild, setIslastchild] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const toggleMute = (index) => {
    setMuted((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const handleCardClick = ({ release, e }) => {
    e.preventDefault();
    const newPath =
      pathname === "/"
        ? `/tv/play?relaseTitle=${release.title}&releaseId=${release.id}`
        : pathname.includes("/play")
        ? `${pathname}?relaseTitle=${release.title}&releaseId=${release.id}`
        : `${pathname}/play?relaseTitle=${release.title}&releaseId=${release.id}`;
    router.push(newPath);
  };

  const handleHover = (index) => {
    setIsFirstchild(index === 0);
    setIslastchild(index === data.length - 1);

    setTimeout(() => {
      setShowvideo(true);
    }, 5000);
  };

  const handleVideoEnd = (index) => {
    setShowvideo(false);
    setIsFirstchild(index);
    setIslastchild(index);
  };
  return (
    <Wrapper>
      <HeaderWrapper onClick={() => router.push(`browse?type=${title}`)}>
        {isSpan ? (
          <Heading>
            <SpanImage src={freeImg} alt="free" width={30} height={30} />
            {title}
          </Heading>
        ) : (
          <Heading>{title}</Heading>
        )}
        <ViewButton>
          View all
          <SideArrow />
        </ViewButton>
      </HeaderWrapper>
      <CardWrapper>
        <StyledSwiper
          centeredSlides={false}
          slidesPerView={"auto"}
          slidesPerGroup={2}
          loop={false}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          loopfillgroupwithblank={false}
          breakpoints={{
            320: {
              spaceBetween: 10,
              loopfillgroupwithblank: false,
            },
          }}
          className="swiper-container"
        >
          {data.map((release, index) => (
            <SwiperSlide key={release.id}>
              <Card
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleVideoEnd(null)}
              >
                <CardImage
                  onClick={(e) => {
                    handleCardClick({ release, e });
                  }}
                  src={release.img}
                  alt={release?.title}
                  width={100}
                  height={100}
                />
                {release?.hovercardData?.map((hoverData, index) => (
                  <HoverCard
                    key={index}
                    isFirstchild={isFirstchild}
                    islastchild={islastchild}
                  >
                    <HoverContent>
                      {showvideo ? (
                        <PlayerWrapper>
                          <Player
                            src={hoverData.video}
                            controls={false}
                            autoPlay
                            playsInline
                            onEnded={handleVideoEnd}
                            muted={true}
                          />
                        </PlayerWrapper>
                      ) : (
                        <Hoverimg
                          src={hoverData.coverpic}
                          showvideo={showvideo}
                          alt="hanuman"
                          width={200}
                          height={200}
                        />
                      )}
                      <LanguageWrapper>
                        {hoverData.language}
                        <StyleddownArrow />
                      </LanguageWrapper>
                      <ImgOverlay> </ImgOverlay>
                      <SoundWrapper>
                        <HovercardTitleImg
                          src={hoverData.titleImg}
                          width={100}
                          height={100}
                          alt="hanuman-img"
                        />
                        {muted[index] ? (
                          <Tooltip title="Mute Trailer">
                            <Sound onClick={() => toggleMute(index)} />
                          </Tooltip>
                        ) : (
                          <Tooltip title="Unmute Trailer">
                            <Mute onClick={() => toggleMute(index)} />
                          </Tooltip>
                        )}
                      </SoundWrapper>
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
                ))}
              </Card>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </CardWrapper>
    </Wrapper>
  );
}

const SideArrow = styled(ChevronRightIcon)`
  width: 25px;
  height: 22px;
  color: var(--text-color1000);
`;
const ViewButton = styled.button`
  opacity: 1;
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
  padding-right: 1rem;
  display: none;
  &:hover {
    color: var(--white_color);
    ${SideArrow} {
      color: var(--white_color);
    }
  }
  @media (max-width: 600px) {
    font-size: 0px;
  }
`;

const StyledSwiper = styled(Swiper)`
  pointer-events: auto;
  height: 22rem;
  display: flex;
  width: auto;
  align-items: center;
  justify-content: start;
  @media (max-width: 600px) {
    height: 11rem !important;
  }
  .swiper-slide {
    width: 12rem !important;
    top: 2rem;
    @media (max-width: 600px) {
      width: 8rem !important;
      top: 0.5rem;
    }
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: var(--white_color);
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 600px) {
      display: none;
    }
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
    top: 6%;
    right: 0;
    opacity: 0;
    @media (max-width: 600px) {
      display: none;
    }
  }
  .swiper-button-prev {
    background: var(--bg_color-prev-gradient) !important;
    width: 75px;
    height: 100%;
    top: 8.7%;
    left: 0;
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-right: 1rem;
  &:hover {
    ${ViewButton} {
      display: flex;
    }
  }
  @media (max-width: 600px) {
    padding-right: 0rem;
  }
`;
const SpanImage = styled(ImageView)`
  width: 2.5rem;
  height: 1.8rem;
  object-fit: contain;
`;

const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color900);
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 600px) {
    font-size: 18px;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  @media (max-width: 600px) {
    border-radius: 2px;
  }
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
  left: ${(props) =>
    props.isFirstchild ? "0px" : props.islastchild ? "-90px" : "-35px"};

  /* left: -35px; */
  z-index: 8 !important;
  animation: hoveranimation 0.4s ease-in forwards;
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
  @media (max-width: 600px) {
    display: none;
  }
`;
const Card = styled.div`
  position: relative;
  width: 12rem !important;
  height: 16rem !important;
  cursor: pointer;
  transition: transform 0.7s ease-in-out;
  &:hover {
    ${HoverCard} {
      display: block;
      z-index: 8;
    }
  }
  @media (max-width: 600px) {
    width: 8rem !important;
    height: 10rem !important;
    &:hover {
      ${HoverCard} {
        display: none;
        z-index: 8;
      }
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
  padding: 0;
  width: 100%;
`;
const PlayerWrapper = styled.div`
  width: 100%;
  height: 12rem;
  position: absolute;
  top: 0;
  line-height: 0;
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
const Player = styled(Video)`
  width: 100%;
  object-fit: cover;
  line-height: 0;
  transition: opacity 0.3s ease-in 0.3s;
  border-radius: 6px;
  outline: none;
  height: 100%;
`;
const HovercardTitleImg = styled(ImageView)`
  width: 7rem;
  height: 4rem;
  object-fit: contain;
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
const Description = styled.p`
  margin-top: 0.7rem;
  font-family: var(--FONT-FAMILY) !important;
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 400;
  text-align: start;
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
`;
const SoundWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 125px;
  left: 10px;
  padding-right: 20px;
  align-items: end;
  justify-content: space-between;
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
