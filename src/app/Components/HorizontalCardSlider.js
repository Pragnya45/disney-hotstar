import React, { useState } from "react";
import styled from "styled-components";
import ImageView from "./Image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter, usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HorizontalCard({ title, data }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isFirstChild, setIsFirstChild] = useState(false);
  const [isLastChild, setIsLastChild] = useState(false);
  const handleCardClick = (release) => {
    console.log(release);
    if (pathname === "/") {
      router.push(`/tv/${release.title}/${release.id}`);
    } else {
      router.push(`${pathname}/${release.title}/${release.id}`);
    }
  };
  const handleHover = (index) => {
    setIsFirstChild(index === 0);
    setIsLastChild(index === data.length - 1);
  };
  const handleVideoEnd = (index) => {
    setIsFirstChild(index);
    setIsLastChild(index);
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
        >
          {data.map((release, index) => (
            <SwiperSlide key={index}>
              <ContentWrapper>
                <Card
                  onClick={() => handleCardClick(release)}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleVideoEnd(null)}
                >
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
                  {release?.hovercardData?.map((hoverData, index) => (
                    <HoverCard
                      key={index}
                      isFirstChild={isFirstChild}
                      isLastChild={isLastChild}
                    >
                      <HoverContent>
                        <Hoverimg
                          src={hoverData.coverpic}
                          alt="hanuman"
                          width={200}
                          height={200}
                        />
                        <HoverPlayWrapper>
                          <Play />
                          <Duration>5m</Duration>
                        </HoverPlayWrapper>
                        <BottomContentWrapper>
                          <Title>{release.title}</Title>
                          <Description>{hoverData.description}</Description>
                        </BottomContentWrapper>
                      </HoverContent>
                    </HoverCard>
                  ))}
                </Card>
                <TextContainer>
                  <Title>{release.title}</Title>
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
  bottom: 128px;
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
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

const Description = styled.p`
  font-family: var(--FONT-FAMILY) !important;
  color: var(--text-color1000);
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  margin-top: 1rem;
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
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: start;
  width: 16rem;
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
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: start;
  @media (max-width: 600px) {
    height: 11rem !important;
  }
  .swiper-slide {
    width: 16rem !important;
    top: 2rem;
    @media (max-width: 600px) {
      width: 10rem !important;
      top: 1rem;
      margin-right: 10px !important;
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
  z-index: -1 !important;
  @media (max-width: 600px) {
    border-radius: 3px;
  }
`;

const HoverCard = styled.div`
  display: none;
  width: 23rem;
  height: 20rem;
  transform: translate(116.769px, 1158.63px);
  transform-origin: left center;
  opacity: 0;
  orphans: 10;
  position: absolute;
  background: var(--bg_color800);
  box-shadow: var(--box-shadow900);
  left: ${(props) =>
    props.isFirstChild ? "0px" : props.isLastChild ? "-90px" : "-35px"};
  z-index: 8 !important;
  animation: hoveranimation 0.2s ease-in forwards;
  top: -35px;
  border-radius: 6px;
  z-index: 5 !important;

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
  width: 100%;
  height: 10rem;
  cursor: pointer;
  &:hover {
    ${HoverCard} {
      display: block;
    }
  }
  @media (max-width: 600px) {
    height: 6rem !important;
    &:hover {
      ${HoverCard} {
        display: none;
      }
    }
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
  height: fit-content;
`;
