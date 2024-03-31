import styled from "styled-components";
import ImageView from "./Image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Sportscard({ release }) {
  return (
    <CardWrapper>
      <Card>
        <CardImage
          src={release.img}
          alt={release?.title}
          width={100}
          height={100}
        />
        <PlayWrapper>
          <Play />
          <Duration>5m</Duration>
        </PlayWrapper>
        {release?.hovercardData?.map((hoverData, index) => (
          <HoverCard key={index}>
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
    </CardWrapper>
  );
}
const CardWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
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
const CardImage = styled(ImageView)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;
const Card = styled.div`
  position: relative;
  width: 16rem !important;
  height: 10rem !important;
  cursor: pointer;
  &:hover {
    ${HoverCard} {
      display: block;
    }
  }
  @media (max-width: 600px) {
    height: 6rem !important;
    width: 10rem !important;
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
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
const Description = styled.p`
  font-family: var(--FONT-FAMILY) !important;
  color: var(--text-color1000);
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  margin-top: 1rem;
  transition: display 0.3s ease-in;
`;
