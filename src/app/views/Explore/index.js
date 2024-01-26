import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ImageView from "../../Components/Image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";

function Explore() {
  const [name, setName] = useState("");
  const data = [
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
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
    {
      title: "Believe in Magic",
      img: "/assets/images/believe-in-magic-2.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/belive-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/believe-in-magic.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "1",
          ua: "5+",
          description:
            "They’re in it to win it! Alongside host Sahil Khattar, emerging cricket stars share their breakout stories whilst embracing the notion - ‘Believing Is Magic’.",
        },
      ],
    },
    {
      title: "The Freelancer",
      img: "/assets/images/freelancer.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/freelance-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/freelancer-2.webp",
          video: "",
          year: "2023",
          seasons: "1",
          totalLanguage: "7",
          ua: "16+",
          description:
            "A single misplaced word could mean death, and a new bride finds herself in such a situation in a conflict-ridden land. Who will save her?",
        },
      ],
    },
    {
      title: "12th Fail",
      img: "/assets/images/12thfail.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/12thFail-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/12thFail-2.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "1",
          ua: "5+",
          description:
            "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
        },
      ],
    },
    {
      title: "Indian Cricket Show",
      img: "/assets/images/indian-cricket.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/indian-cricket-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/indian-cricket-2.webp",
          video: "",
          year: "2023",
          seasons: "2",
          totalLanguage: "2",
          ua: "7+",
          description:
            "Along with Gaurav Kapur, legends Yuvraj Singh and Gautam Gambhir weigh in on Team India’s chances in the upcoming T20 World Cup. Join in the engaging debate!",
        },
      ],
    },
    {
      title: "Parking",
      img: "/assets/images/parking.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/parking-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/parking-2.webp",
          video: "",
          year: "2023",
          seasons: "1",
          totalLanguage: "5",
          ua: "16+",
          description:
            "A clash over a shared space transforms two men from diverse backgrounds into aggressors. Will ego triumph, or can shared intentions lead to resolution?",
        },
      ],
    },
    {
      title: "The Great North",
      img: "/assets/images/greatNorth.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/greate-north-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/great-north-2.webp",
          video: "",
          year: "2024",
          seasons: "4",
          totalLanguage: "1",
          ua: "13+",
          description:
            "SHOW ON BREAK. Follow the Alaskan adventures of the Tobin family, a single dad Beef tries to keep his kids close.",
        },
      ],
    },
    {
      title: "Falimy",
      img: "/assets/images/falimy.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/falimy-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/falimy-2.webp",
          video: "",
          year: "2023",
          seasons: "1",
          totalLanguage: "5",
          ua: "13+",
          description:
            "To fulfill the elderly patriarch's wish, a dissonant family embarks on a trip to Varanasi. Will this journey mend their bonds or deepen the fault lines?",
        },
      ],
    },
  ];
  return (
    <Wrapper>
      <SearchbarContainer>
        <Search />
        <Feild
          type="text"
          placeholder="Movies, shows and more"
          value={name}
          autoComplete="off"
          id="searchbar"
          onChange={(e) => setName(e.target.value)}
        />
      </SearchbarContainer>
      <PopularSearch>
        <Heading>Popular Searches</Heading>
        <CardWrapper>
          {data.map((release, index) => (
            <Card key={index}>
              <CardImage
                src={release.img}
                alt={release.title}
                width={100}
                height={100}
              />
              {release?.hovercardData?.map((hoverData, index) => (
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
              ))}
            </Card>
          ))}
        </CardWrapper>
      </PopularSearch>
    </Wrapper>
  );
}

export default Explore;
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 6rem;
  padding-top: 4rem;
  padding-right: 8rem;
`;
const SearchbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 2rem;
  border-radius: 8px;
  width: 100%;
  height: 4rem;
  background-color: var(--bg_color700);
`;
const Search = styled(SearchIcon)`
  width: 40px;
  height: 40px;
  color: var(--text-color900);
`;
const Feild = styled.input`
  color: var(--text-color900);
  caret-color: var(--text-color700);
  background-color: transparent;
  font-size: 22px;
  height: 30px;
  padding: 20px 20px;
  border: none;
  outline: none;
  font-weight: 500;
  &::placeholder {
    color: var(--text-color1000);
  }
`;
const PopularSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color900);
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  row-gap: 2rem;
  margin-top: 1rem;
  width: 100%;
`;
const CardImage = styled(ImageView)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
const HoverCard = styled.div`
  display: none;
  width: 330px !important;
  height: 395px !important;
  transform: translate(116.769px, 1158.63px);
  transform-origin: left center;
  opacity: 0;
  orphans: 10;
  position: absolute;
  left: -35px;
  z-index: 8 !important;
  animation: hoveranimation 0.4s ease-in forwards;
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
  width: 11.1rem !important;
  height: 15.2rem !important;
  cursor: pointer;
  transition: transform 0.7s ease-in-out;
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
const Description = styled.p`
  margin-top: 0.7rem;
  font-family: var(--FONT-FAMILY) !important;
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 400;
  text-align: start;
`;
