import React, { useState } from "react";
import styled from "styled-components";
import ImageView from "./Image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter, usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function WatchedSlider({ title, data, watchHistory }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isFirstchild, setIsFirstchild] = useState(false);
  const [islastchild, setIslastchild] = useState(false);

  const handleHover = (index) => {
    setIsFirstchild(index === 0);
    setIslastchild(index === data.length - 1);
  };

  const handleVideoEnd = (index) => {
    setIsFirstchild(index);
    setIslastchild(index);
  };

  const handleCardClick = (release) => {
    console.log(release);
    if (pathname === "/") {
      router.push(
        `/tv/watch/${release.title}/${release._id}${
          watchHistory ? `?watchHistory=true` : ""
        }`
      );
    } else {
      router.push(
        `${pathname}/watch/${release.title}/${release._id}${
          watchHistory ? `?watchHistory=true` : ""
        }`
      );
    }
  };
  return (
    <Wrapper>
      <HeaderWrapper onClick={() => router.push(`browse?type=${title}`)}>
        <Heading>{title}</Heading>
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
          className="swiper-container"
          breakpoints={{
            320: {
              spaceBetween: 10,
              loopfillgroupwithblank: false,
            },
          }}
        >
          {data?.map((release, index) => (
            <SwiperSlide key={index}>
              <ContentWrapper>
                <Card
                  onClick={() => handleCardClick(release)}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleVideoEnd(null)}
                >
                  <CardImage
                    src={release.img}
                    alt={release?.title}
                    width={100}
                    height={100}
                  />
                  <PlayWrapper>
                    <Play />
                  </PlayWrapper>
                  <TrackWrapper>
                    <Track>
                      <TrackThumb></TrackThumb>
                    </Track>
                  </TrackWrapper>
                  {release?.hovercardData?.map((hoverData, index) => (
                    <HoverCard
                      key={index}
                      isFirstchild={isFirstchild}
                      islastchild={islastchild}
                    >
                      <HoverContent>
                        <Close />
                        <Hoverimg
                          src={hoverData.coverpic}
                          alt="hanuman"
                          width={200}
                          height={200}
                        />
                        <HoverPlayWrapper>
                          <Play />
                        </HoverPlayWrapper>
                        <TrackWrapper style={{ bottom: "110px" }}>
                          <Track>
                            <TrackThumb></TrackThumb>
                          </Track>
                        </TrackWrapper>
                        <BottomContentWrapper>
                          <Title>{release.title}</Title>
                          <TimeLeft>{"24m left"}</TimeLeft>
                          <ViewMore>
                            View More details <ViewIcon />
                          </ViewMore>
                        </BottomContentWrapper>
                      </HoverContent>
                    </HoverCard>
                  ))}
                </Card>
                <TextContainer>
                  <Title>{release.title}</Title>
                  <TimeLeft>{"24m left"}</TimeLeft>
                </TextContainer>
              </ContentWrapper>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </CardWrapper>
    </Wrapper>
  );
}

export default WatchedSlider;

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
  @media (max-width: 600px) {
    font-size: 0px;
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
  @media (max-width: 600px) {
    font-size: 13px;
    font-weight: 500;
  }
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
const HoverPlayWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 112px;
  padding: 15px 10px;
  justify-content: space-between;
  align-items: center;
  background: var(--linear-gradient-color);
`;
const Play = styled(PlayArrowIcon)`
  width: 40px;
  height: 35px;
  color: var(--text-color900);
  border-radius: 6px;
  cursor: pointer;
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
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

const TimeLeft = styled.p`
  font-family: var(--FONT-FAMILY) !important;
  color: var(--text-color1000);
  font-size: 18px;
  font-weight: 500;
  text-align: start;
  margin-top: 0.5rem;
  transition: display 0.3s ease-in;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  -webkit-line-clamp: 1;
  @media (max-width: 600px) {
    font-size: 10px;
    margin-top: 0.2rem;
  }
`;
const ViewMore = styled.button`
  width: 100%;
  text-align: center;
  display: flex;
  background: none;
  align-items: center;
  justify-content: center;
  color: var(--white_color);
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  @media (max-width: 600px) {
    gap: 0;
  }
`;
const ContentWrapper = styled.div`
  display: flex !important;
  cursor: pointer;
  flex-direction: column;
  align-items: start;
  width: 16rem !important;
  z-index: 0;
  transform-origin: top;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 10rem !important;
    border-radius: 4px;
  }
`;

const StyledSwiper = styled(Swiper)`
  pointer-events: auto;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 0 !important;
  @media (max-width: 600px) {
    height: 11rem !important;
  }
  .swiper-slide {
    width: 16rem !important;
    top: 2rem;
    @media (max-width: 600px) {
      width: 10rem !important;
      top: 1rem;
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
    top: 3%;
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
    top: 3%;
    left: 0;
    @media (max-width: 600px) {
      display: none;
    }
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
  @media (max-width: 600px) {
    border-radius: 3px;
  }
`;

const HoverCard = styled.div`
  display: none;
  width: 23rem !important;
  height: 19rem !important;
  transform: translate(116.769px, 1158.63px);
  transform-origin: left center;
  opacity: 0;
  orphans: 10;
  position: absolute;
  background: var(--bg_color800);
  box-shadow: var(--box-shadow900);
  left: ${(props) =>
    props.isFirstchild ? "0px" : props.islastchild ? "-90px" : "-35px"};
  z-index: 8 !important;
  animation: hoveranimation 0.2s ease-in forwards;
  top: -35px;
  border-radius: 6px;

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
  width: 100% !important;
  height: 10rem !important;
  cursor: pointer;
  &:hover {
    ${HoverCard} {
      display: block;
    }
  }
  @media (max-width: 600px) {
    height: 6rem !important;
  }
`;
const HoverContent = styled.div`
  border-radius: 8px;
  height: 100%;
  margin: 0;
  position: relative;
  padding: 0;
  width: 100%;
`;
const Hoverimg = styled(ImageView)`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const BottomContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const TrackWrapper = styled.div`
  bottom: 0;
  height: 2px;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
  cursor: pointer;
`;
const Track = styled.div`
  width: 100%;
  overflow: hidden;
  background: var(--white_color900);
  border-radius: 10px;
`;
const TrackThumb = styled.div`
  height: 3px;
  transform-origin: left;
  transform: scaleX(0.9);
  background: var(--bg_color400);
`;
const ViewIcon = styled(ChevronRightIcon)`
  color: var(--white_color);
  width: 20px;
  height: 20px;
`;
const Close = styled(CloseIcon)`
  color: var(--white_color);
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
