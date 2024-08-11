import styled from "styled-components";
import ImageView from "./Image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import { useRouter, usePathname } from "next/navigation";

function Card({ release }) {
  const pathname = usePathname();
  const router = useRouter();
  const handleCardClick = ({ release, e }) => {
    e.preventDefault();
    const newPath =
      pathname === "/" || pathname.includes("browse")
        ? `/tv/play?relaseTitle=${release.title}&releaseId=${release._id}`
        : pathname.includes("/play")
        ? `${pathname}?relaseTitle=${release.title}&releaseId=${release._id}`
        : `${pathname}/play?relaseTitle=${release.title}&releaseId=${release._id}`;
    router.replace(newPath);
  };

  return (
    <CardContainer>
      <CardImage
        src={release.img}
        alt={release?.title}
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
                <WatchNowBUtton
                  onClick={(e) => {
                    handleCardClick({ release, e });
                  }}
                >
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
    </CardContainer>
  );
}

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  row-gap: 2rem;
  margin-top: 1rem;
  width: 100%;
`;
const CardImage = styled(ImageView)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;
const HoverCard = styled.div`
  display: none;
  width: 350px !important;
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
const CardContainer = styled.div`
  position: relative;
  width: 11.7rem;
  height: 15.2rem;
  cursor: pointer;
  transition: transform 0.7s ease-in-out;
  &:hover {
    ${HoverCard} {
      display: block;
    }
  }
  @media (max-width: 600px) {
    width: 8rem !important;
    height: 10rem !important;
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
  padding: 0.2rem;
  width: 100%;
`;
const WatchNowBUtton = styled.button`
  font-family: var(--FONT-FAMILY);
  background-color: var(--white_color);
  font-size: 14px;
  color: var(--bg_color1000);
  font-weight: 700;
  width: 80%;
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
  width: 20%;
`;
const YearDetailsWrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;
  gap: 1px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 4px;
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
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Replace 3 with the number of lines you want to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 90%;
`;
