import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Video from "./Video";
import ImageView from "./Image";
import CircleIcon from "@mui/icons-material/Circle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const arya = "/assets/videos/arya.mp4";
const aryaImg = "/assets/images/aarya.webp";
const aryaTitleImg = "/assets/images/aaryatitle.webp";
function BannerMovie() {
  const [showvideo, setShowvideo] = useState(false);
  const [scrolling, setScrolling] = useState(false);
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
    setShowvideo(false);
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
  return (
    <Wrapper>
      <BannerImage
        src={aryaImg}
        showvideo={showvideo}
        alt="bannerImg"
        width={200}
        height={200}
      />
      {showvideo && (
        <Player
          src={arya}
          controls={false}
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src={arya} type="video/mp4" />
        </Player>
      )}
      <ContentWrapper>
        <LeftContainer>
          <TitleImg src={aryaTitleImg} width={200} height={200} />
          <YearDetailsWrapper>
            <Text>2024</Text>
            <StyledCircle />
            <Text>3 Seasons</Text>
            <StyledCircle />
            <Text>7 Languages</Text>
            <StyledCircle />
            <AgeRestriction>U/A 16+</AgeRestriction>
          </YearDetailsWrapper>
          <Description>
            PART 2 - ANTIM VAAR OUT. The Sherni is back again,
            <br /> and she is all set to end it all. Will she succeed?
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
        </LeftContainer>
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
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.3s ease-in 0.3s;
  border-radius: 4px;
`;

const BannerImage = styled(ImageView)`
  width: 100%;
  height: 100%;
  opacity: 1;
  opacity: ${(props) => (props.showvideo ? 0 : 1)};
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 2rem 4rem 2rem 6rem;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const TitleImg = styled(ImageView)`
  width: 15rem;
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
  position: absolute;
  top: 90%;
  left: 0;
`;

const ArrowRightIcon = styled(ChevronRightIcon)`
  transition: all ease-in-out 0.5s;
  color: var(--text-color900);
  position: absolute;
  right: 28%;
  top: 90%;
`;
const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 70%;
  overflow-x: scroll;
  position: relative;
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
const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 5;
`;
