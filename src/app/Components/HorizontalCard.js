import React from "react";
import styled from "styled-components";
import ImageView from "./Image";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";

function HorizontalCard({ title, data }) {
  function PrevArrow(props) {
    const { className, onClick } = props;

    return <ArrowLeftIcon className={className} onClick={onClick} />;
  }

  function NextArrow(props) {
    const { className, onClick } = props;

    return <ArrowRightIcon className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Heading>{title}</Heading>

      <CardWrapper {...settings}>
        {data.map((release, index) => (
          <ContentWrapper key={index}>
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
        ))}
      </CardWrapper>
    </Wrapper>
  );
}

export default HorizontalCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Title = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color900);
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
const CardWrapper = styled(Slider)`
  display: flex;
  gap: 0.2rem;
  margin-top: 1rem;
  position: relative;
  align-items: center;
  .slick-disabled {
    opacity: 0;
    pointer-events: none;
  }
  .slick-slide {
    display: flex;
  }
  .slick-track {
    display: flex;
    gap: 0.5rem;
  }
  .slick-active {
    width: 16rem !important;
    height: 10rem;
  }
  .slick-slide:active {
  }
  .slick-slide {
  }

  .slick-list {
  }
  .slick-prev {
    padding: 0.1rem;
    width: 3rem;
    background: var(--bg_color-prev-gradient);
    z-index: 1;
    position: absolute;
    height: 100%;
  }
  .slick-next {
    right: 0;
    top: 0;
    padding: 0.1rem;
    background: var(--bg_color-next-gradient);
    width: 3rem;
    height: 100%;
    opacity: 0;
    position: absolute;
  }
  &:hover {
    .slick-next {
      opacity: 1;
    }
  }
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
    transform: scale(1.15) translateX(10px);
    width: 18rem !important;
    z-index: 2;
    top: -50px;
    background: var(--bg_color800);
    box-shadow: var(--box-shadow900);
    position: relative;
    ${Description} {
      display: block;
    }
  }
`;

const CardImage = styled(ImageView)`
  position: absolute;
  top: 0;
  left: 0;
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
const StyledSlider = styled(Slider)`
  width: 98%;
`;
const HoverCard = styled.div`
  display: none;
  width: 330px;
  height: 395px;
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
      transform: scaleX(1) scaleY(1);
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
