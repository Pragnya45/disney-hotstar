import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import styled from "styled-components";
import ImageView from "./Image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function WatchListCard({ release }) {
  return (
    <ContentWrapper>
      <Card>
        <CardImage
          src={release.img}
          alt={release.title}
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
          <HoverCard key={index}>
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
  );
}

const ContentWrapper = styled.div`
  display: flex !important;
  cursor: pointer;
  flex-direction: column;
  align-items: start;
  width: 16rem !important;
  z-index: 0;
  transform-origin: top;
  border-radius: 10px;
`;
const CardImage = styled(ImageView)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 6px;
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
  left: -35px;
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
`;
const Card = styled.div`
  position: relative;
  width: 100%;
  height: 10rem !important;
  cursor: pointer;
  &:hover {
    ${HoverCard} {
      display: block;
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
const Title = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color900);
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
`;
