import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Video from "@/app/Components/Video";
import ImageView from "@/app/Components/Image";
import CircleIcon from "@mui/icons-material/Circle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import { Tooltip } from "antd";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useParams } from "next/navigation";
import releases from "../utils/data";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCardSlider";

const arya = "/assets/videos/arya.mp4";
const aryaImg = "/assets/images/aarya.webp";
const aryaTitleImg = "/assets/images/aaryatitle.webp";

export default function Moviedetails() {
  const [showvideo, setShowvideo] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");
  const [muted, setMuted] = useState(true);
  const contentRef = useRef();
  const { id } = useParams();
  const details = releases.find((release) => release.id === id);
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
    setShowvideo(false); // Hide the video when it ends
    setTimeout(() => {
      setShowvideo(true); // Show the video again after a delay
    }, 3000); // Adjust the delay as needed
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

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const languages = [
    { label: "Hindi", original: true },
    { label: "Telugu" },
    { label: "Tamil" },
    { label: "Bengali" },
    { label: "Marathi" },
    { label: "Malayalam" },
    { label: "Kannada" },
  ];
  const cardData = [
    {
      title: "Pirates 34-31 Yoddhas",
      img: "/assets/images/pirates.webp",
      hovercardData: [
        {
          titleImg: "/assets/images/hanuman-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/hovercard-hanuman.webp",
          video: "",
          year: "2024",
          seasons: "3",
          totalLanguage: "7",
          ua: "7+",
          description:
            "Setting his mighty foot on Lanka, Hanuman  unleashes himself against Ravan. Watch the  legendary hero and the demon king go head to  head in this ultimate war.",
        },
      ],
    },
    {
      title: "Echo",
      img: "/assets/images/echo-2.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/echo-title.webp",
          language: "English",
          coverpic: "/assets/images/echo.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "4",
          ua: "16+",
          description:
            "Pursued by Fisk’s criminal empire, Maya journeys home where she confronts her own family and legacy.",
        },
      ],
    },
    {
      title: "Periloor premium league",
      img: "/assets/images/telugu-2.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/telugu-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/telugu.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "7",
          ua: "13+",
          description:
            "Following her childhood crush, Malavika comes to the Perilloor village. Much to her dismay, the kooky natives force her to fight in the panchayat elections.",
        },
      ],
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/Luke.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/luke-title.webp",
          language: "English",
          coverpic: "/assets/images/luke-2.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "1",
          ua: "13+",
          description:
            "Luke Nguyen circumnavigates south India, discovering the sounds, colours & cuisines of the region. He meets local chefs, who introduce him to Indian cuisine.",
        },
      ],
    },
    {
      title: "NEVER SAY NEVER",
      img: "/assets/images/never.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/never-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/never-2.webp",
          video: "",
          year: "2021",
          seasons: "1",
          totalLanguage: "4",
          ua: "13+",
          description:
            "Travel writer Jeff Jenkins criss-crosses the globe in search of unique ways to push beyond his comfort zone.",
        },
      ],
    },
    {
      title: "The Mission",
      img: "/assets/images/misson.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/mission-title.webp",
          language: "English",
          coverpic: "/assets/images/mission-2.webp",
          video: "",
          year: "2023",
          seasons: "1",
          totalLanguage: "4",
          ua: "16+",
          description:
            "John Chau, an American missionary is killed as he attempts to contact an Indigenous group, living in complete isolation, off the coast of India.",
        },
      ],
    },
    {
      title: "Dance+",
      img: "/assets/images/dance+.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/dance-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/dance-2.webp",
          video: "",
          year: "2024",
          seasons: "6",
          totalLanguage: "1",
          ua: "16+",
          description:
            "The hunt for India’s new dancing superstar is on! With high-end tech and innovative dance acts, emerging talents bring their A-game to bag the coveted title.",
        },
      ],
    },
    // {
    //   title: "Believe in Magic",
    //   img: "/assets/images/believe-in-magic-2.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/belive-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/believe-in-magic.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "1",
    //       totalLanguage: "1",
    //       ua: "5+",
    //       description:
    //         "They’re in it to win it! Alongside host Sahil Khattar, emerging cricket stars share their breakout stories whilst embracing the notion - ‘Believing Is Magic’.",
    //     },
    //   ],
    // },
    // {
    //   title: "The Freelancer",
    //   img: "/assets/images/freelancer.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/freelance-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/freelancer-2.webp",
    //       video: "",
    //       year: "2023",
    //       seasons: "1",
    //       totalLanguage: "7",
    //       ua: "16+",
    //       description:
    //         "A single misplaced word could mean death, and a new bride finds herself in such a situation in a conflict-ridden land. Who will save her?",
    //     },
    //   ],
    // },
    // {
    //   title: "12th Fail",
    //   img: "/assets/images/12thfail.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/12thFail-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/12thFail-2.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "1",
    //       totalLanguage: "1",
    //       ua: "5+",
    //       description:
    //         "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
    //     },
    //   ],
    // },
    // {
    //   title: "Indian Cricket Show",
    //   img: "/assets/images/indian-cricket.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/indian-cricket-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/indian-cricket-2.webp",
    //       video: "",
    //       year: "2023",
    //       seasons: "2",
    //       totalLanguage: "2",
    //       ua: "7+",
    //       description:
    //         "Along with Gaurav Kapur, legends Yuvraj Singh and Gautam Gambhir weigh in on Team India’s chances in the upcoming T20 World Cup. Join in the engaging debate!",
    //     },
    //   ],
    // },
    // {
    //   title: "Parking",
    //   img: "/assets/images/parking.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/parking-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/parking-2.webp",
    //       video: "",
    //       year: "2023",
    //       seasons: "1",
    //       totalLanguage: "5",
    //       ua: "16+",
    //       description:
    //         "A clash over a shared space transforms two men from diverse backgrounds into aggressors. Will ego triumph, or can shared intentions lead to resolution?",
    //     },
    //   ],
    // },
    // {
    //   title: "The Great North",
    //   img: "/assets/images/greatNorth.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/greate-north-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/great-north-2.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "4",
    //       totalLanguage: "1",
    //       ua: "13+",
    //       description:
    //         "SHOW ON BREAK. Follow the Alaskan adventures of the Tobin family, a single dad Beef tries to keep his kids close.",
    //     },
    //   ],
    // },
    // {
    //   title: "Falimy",
    //   img: "/assets/images/falimy.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/falimy-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/falimy-2.webp",
    //       video: "",
    //       year: "2023",
    //       seasons: "1",
    //       totalLanguage: "5",
    //       ua: "13+",
    //       description:
    //         "To fulfill the elderly patriarch's wish, a dissonant family embarks on a trip to Varanasi. Will this journey mend their bonds or deepen the fault lines?",
    //     },
    //   ],
    // },
  ];
  return (
    <Wrapper>
      <BannerWrapper>
        <BannerImage
          src={details?.hovercardData[0]?.coverpic}
          showvideo={showvideo}
          alt="bannerImg"
          width={200}
          height={200}
        />
        {showvideo && (
          <Player
            src={details?.hovercardData[0]?.video}
            controls={false}
            autoPlay
            playsInline
            onEnded={handleVideoEnd}
            muted={muted}
          >
            <source src={arya} type="video/mp4" />
          </Player>
        )}
        <ContentWrapper>
          <LeftContainer>
            <TitleImg
              src={details?.hovercardData[0]?.titleImg}
              width={200}
              height={200}
            />
            <YearDetailsWrapper>
              <Text>{details?.hovercardData[0]?.year}</Text>
              <StyledCircle />
              <Text>{details?.hovercardData[0]?.seasons} Seasons</Text>
              <StyledCircle />
              <Text>{details?.hovercardData[0]?.totalLanguage} Languages</Text>
              <StyledCircle />
              <AgeRestriction>
                U/A{details?.hovercardData[0]?.ua}
              </AgeRestriction>
            </YearDetailsWrapper>
            <Description>{details?.hovercardData[0]?.description}</Description>
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
                {languages.map((language, index) => (
                  <LanguageButton
                    key={index}
                    selected={selectedLanguage === language.label}
                    onClick={() => handleLanguageChange(language.label)}
                  >
                    {language.label}
                    {language.original && <Original>original</Original>}
                  </LanguageButton>
                ))}
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
          </RightContainer>
        </ContentWrapper>
      </BannerWrapper>
      <SliderCardWrapper>
        <SliderComponent title="More Like This" data={releases} />
        <HorizontalCard title="Thriller Shows" data={cardData} />
      </SliderCardWrapper>
    </Wrapper>
  );
}
const SliderCardWrapper = styled.div`
  padding-left: 6rem;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const BannerWrapper = styled.div`
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
  width: 50%;
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
  cursor: pointer;
  color: var(--white_color);
  font-size: 17px;
  font-weight: 600;
  border-radius: 20px;
  background-color: ${({ selected }) =>
    selected ? "var(--bg_color600)" : "transparent"};
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
  background-color: var(--white_color);
  font-size: 19px;
  color: var(--black_color);
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
  color: var(--black_color);
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: end;
  margin-top: auto;
`;
const SoundWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
