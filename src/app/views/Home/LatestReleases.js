import React from "react";
import styled from "styled-components";
import ImageView from "../../Components/Image";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";

const hanumanImg = "/assets/images/hovercard-hanuman.webp";
const hanumanTitleImg = "/assets/images/hanuman-title.webp";

function LatestReleases() {
  const releases = [
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/echo-2.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/greatNorth.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/Luke.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/vaccinewar.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/misson.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/dance+.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/believe-in-magic-2.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/freelancer.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/12thfail.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/indian-cricket.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/parking.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/telugu-2.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
  ];
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
      <Heading>Latest Releases</Heading>
      <CardWrapper>
        <StyledSlider {...settings}>
          {releases.map((release, index) => (
            <Card key={index}>
              <CardImage
                src={release.img}
                alt={release.title}
                width={100}
                height={100}
              />
              <HoverCard>
                <HoverContent>
                  <Hoverimg
                    src={hanumanImg}
                    alt="hanuman"
                    width={200}
                    height={200}
                  />
                  <LanguageWrapper>
                    Hindi
                    <StyleddownArrow />
                  </LanguageWrapper>
                  <ImgOverlay> </ImgOverlay>I
                  <HovercardTitleImg
                    src={hanumanTitleImg}
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
                      <Text>2014</Text>
                      <StyledCircle />
                      <Text>3 Seasons</Text>
                      <StyledCircle />
                      <Text>7 Languages</Text>
                      <StyledCircle />
                      <Text>U/A 7+</Text>
                    </YearDetailsWrapper>
                    <Description>
                      Setting his mighty foot on Lanka, Hanuman <br /> unleashes
                      himself against Ravan. Watch the <br /> legendary hero and
                      the demon king go head to <br /> head in this ultimate
                      war.
                    </Description>
                  </BottomContentWrapper>
                </HoverContent>
              </HoverCard>
            </Card>
          ))}
        </StyledSlider>
      </CardWrapper>
    </Wrapper>
  );
}

export default LatestReleases;

const Wrapper = styled.div`
  display: flex;
  margin-left: 6rem;
  flex-direction: column;
`;
const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color900);
`;
const CardWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 1rem;
  &:hover {
    .slick-next {
      opacity: 1;
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
  position: relative;
  .slick-disabled {
    opacity: 0;
    pointer-events: none;
  }
  .slick-track {
    display: flex;
  }
  .slick-active {
    /* width: 205px !important; */
  }
  .slick-slide:active {
  }
  .slick-slide {
  }

  .slick-list {
    /* overflow: hidden; */
  }
  .slick-prev {
    padding: 0.1rem;
    width: 3rem;
    background: var(--bg_color-prev-gradient);
    z-index: 5;
    position: absolute;
    height: 100%;
  }
  .slick-next {
    right: 0;
    top: 0;
    padding: 0.1rem;
    background: var(--bg_color-next-gradient);
    width: 3rem;
    z-index: 5;
    height: 100%;
    opacity: 0;
    position: absolute;
  }
`;
const HoverCard = styled.div`
  display: none;
  width: 300px;
  height: 274px;
  transform: translate(116.769px, 1158.63px);
  transform-origin: left center;
  opacity: 0;
  orphans: 10;
  position: absolute;
  left: -35px;
  botoom: 2px;
  bottom: 7px;
  z-index: 7;
  animation: hoveranimation 0.2s ease-in forwards;

  @keyframes hoveranimation {
    0% {
      transform: scale3d(0.8, 0.8, 1);
    }
    100% {
      opacity: 1;
      transform: scaleX(1) scaleY(1.3);
    }
  }
`;
const Card = styled.div`
  position: relative;
  width: 12rem !important;
  height: 16rem !important;
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
  height: 8.5rem;
  border-radius: 6px;
`;
const HovercardTitleImg = styled(ImageView)`
  position: absolute;
  top: 65px;
  left: 10px;
  width: 8rem;
  height: 3rem;
`;
const LanguageWrapper = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: transparent;
  color: var(--white_color);
  font-size: 10px;
  letter-spacing: 0.2px;
  font-weight: 700;
  border: none;
  outline: none;
  top: 5px;
  left: 10px;
  cursor: pointer;
  font-family: var(--FONT-FAMILY);
  text-shadow: var(--text-shadow);
`;
const StyleddownArrow = styled(KeyboardArrowDownIcon)`
  width: 25px;
  height: 17px;
  color: var(--white_color);
`;
const StyleddPlay = styled(PlayArrowIcon)`
  width: 25px;
  height: 17px;

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
  top: 90px;
  height: 4rem;
`;
const BottomContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  top: 140px;
  position: absolute;
`;
const WatchWrapper = styled.div`
  display: flex;
  padding-left: 0.2rem;
`;
const WatchNowBUtton = styled.button`
  font-family: var(--FONT-FAMILY);
  background-color: var(--white_color);
  font-size: 12px;
  color: var(--bg_color1000);
  font-weight: 700;
  width: 14rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  padding: 0.5rem 2.3rem !important;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`;
const WatchListButton = styled.button`
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-left: 0.8rem;
  background: var(--bg_color600);
  border: none;
  outline: none;
  cursor: pointer;
`;
const YearDetailsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const Text = styled.p`
  font-family: var(--FONT-FAMILY);
  color: var(--white_color);
  font-size: 13px;
  font-weight: 600;
`;
const Description = styled.p`
  margin-top: 0.3rem;
  font-family: var(--FONT-FAMILY) !important;
  color: var(--text-color1000);
  font-size: 12px;
  font-weight: 400;
  text-align: start;
`;
