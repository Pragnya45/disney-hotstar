import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "next/navigation";
import Video from "./Video";
import ImageView from "./Image";
import { cardData } from "../views/utils/data";

export default function WatchedDetailedView() {
  const { id } = useParams();
  const details = cardData.find((release) => release.id === id);
  const [showvideo, setShowvideo] = useState(false);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowvideo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleVideoEnd = () => {
    setShowvideo(false);
    setTimeout(() => {
      setShowvideo(true);
    }, 3000);
  };
  return (
    <Wrapper>
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
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
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
