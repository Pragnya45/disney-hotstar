"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "next/navigation";
import Video from "./Video";
import ImageView from "./Image";
import { cardData } from "../views/utils/data";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import { PiSkipForwardBold } from "react-icons/pi";
import { BsChatSquareText } from "react-icons/bs";
import { PiChatCenteredTextBold } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import { PiWarningBold } from "react-icons/pi";

export default function WatchedDetailedView() {
  const { id } = useParams();
  const details = cardData.find((release) => release.id === id);
  const [showvideo, setShowvideo] = useState(false);
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [showAudioMenu, setShowAudioMenu] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState("Auto");
  const [muted, setMuted] = useState(true);
  const QualityData = [
    {
      quality: "Auto",
      subscribe: false,
    },
    {
      quality: "Full HD",
      subscribe: true,
    },
    {
      quality: "HD",
      subscribe: true,
    },
    {
      quality: "Data Saver",
      subscribe: false,
    },
  ];
  const AudioData = [
    {
      audio: "Hindi",
      original: true,
    },
  ];
  const SubtitleData = [
    {
      subtitle: "Off",
    },
    {
      subtitle: "English",
    },
  ];
  const handleSelectQuality = (option) => {
    setSelectedQuality(option);
  };
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
  console.log(details?.hovercardData[0]?.video);
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
      <HeaderWrapper>
        <TitleWrapper>
          <SideArrow color="#fff" />
          {details?.title}
        </TitleWrapper>
        <SettingsWrapper>
          <QualityButton
            onMouseOver={() => setShowQualityMenu(true)}
            onMouseLeave={() => setShowQualityMenu(false)}
          >
            <Play />
            Quality <SelectedQuality>{selectedQuality}</SelectedQuality>
            {showQualityMenu ? (
              <QualityDropdown>
                {QualityData.map((option, index) => (
                  <QualityOption
                    key={index}
                    onClick={() => handleSelectQuality(option.quality)}
                  >
                    {selectedQuality === option.quality ? (
                      <MdDone size={15} color="#3586f0" />
                    ) : (
                      <MdDone size={15} color="transparent" />
                    )}

                    {option.quality}
                    {option.subscribe ? <Subscribe>SUBSCRIBE</Subscribe> : null}
                  </QualityOption>
                ))}
                <Border></Border>
                <ReportButton>
                  {" "}
                  <PiWarningBold size={20} color="hsla(0, 0%, 100%, 0.6)" />
                  Report an issue
                </ReportButton>
              </QualityDropdown>
            ) : null}
          </QualityButton>
          <AudioButton onMouseOver={() => setShowAudioMenu(true)}>
            <PiChatCenteredTextBold size={22} color="#fff" />
            Audio & Subtitles
            {showAudioMenu ? (
              <QualityDropdown>
                <AudioWrapper>
                  <AudioOptionWrapper>
                    <OptionHeading>Audio</OptionHeading>

                    {AudioData.map((option, index) => (
                      <QualityOption
                        key={index}
                        onClick={() => handleSelectQuality(option.audio)}
                      >
                        {selectedQuality === option.audio ? (
                          <MdDone size={15} color="#3586f0" />
                        ) : (
                          <MdDone size={15} color="transparent" />
                        )}

                        {option.audio}
                      </QualityOption>
                    ))}
                  </AudioOptionWrapper>
                  <SubtitleWrapper>
                    <OptionHeading>Subtitle</OptionHeading>
                    {SubtitleData.map((option, index) => (
                      <QualityOption
                        key={index}
                        onClick={() => handleSelectQuality(option.subtitle)}
                      >
                        {selectedQuality === option.subtitle ? (
                          <MdDone size={15} color="#3586f0" />
                        ) : (
                          <MdDone size={15} color="transparent" />
                        )}

                        {option.subtitle}
                      </QualityOption>
                    ))}
                  </SubtitleWrapper>
                </AudioWrapper>
                <Border></Border>
                <ReportButton>
                  {" "}
                  <PiWarningBold size={20} color="hsla(0, 0%, 100%, 0.6)" />
                  Report an issue
                </ReportButton>
              </QualityDropdown>
            ) : null}
          </AudioButton>
          <EpButton>
            <PiSkipForwardBold size={22} color="#fff" />
            Next Episode
          </EpButton>
        </SettingsWrapper>
      </HeaderWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  overflow: hidden;
  max-width: 130em;
  width: 100%;
  height: 100vh;
  margin: auto;
  /* padding: 0rem 3rem 0 3rem; */
`;
const Player = styled(Video)`
  width: 90%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.3s ease-in 0.3s;
  border-radius: 4px;
  z-index: 1;
`;
const BannerImage = styled(ImageView)`
  width: 100%;
  height: 100%;
  opacity: 1;
  object-fit: cover;
  opacity: ${(props) => (props.showvideo ? 0 : 1)};
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 4rem 2rem 0rem 2rem;
  z-index: 2;
  left: 0;
  position: absolute;
`;
const TitleWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 2rem;
  outline: none;
  border: none;
  background: none;
  color: var(--white_color);
  font-weight: 700;
  font-size: 1.5rem;
`;

const SideArrow = styled(KeyboardBackspaceIcon)`
  width: 30px;
  height: 30px;
`;
const Play = styled(SmartDisplayOutlinedIcon)`
  width: 27px;
  height: 27px;
`;
const SubtitleIcon = styled(SubtitlesOutlinedIcon)`
  width: 30px;
  height: 30px;
`;
const SettingsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const QualityButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  outline: none;
  border: none;
  width: 12rem;
  background: none;
  color: var(--white_color);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  /* &:hover {
    transform: scale(1.02);
  } */
`;
const AudioButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  outline: none;
  border: none;
  background: none;
  color: var(--white_color);
  font-weight: 700;
  font-size: 1rem;
`;
const EpButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  outline: none;
  border: none;
  background: none;
  color: var(--white_color);
  font-weight: 500;
  font-size: 1rem;
`;
const SelectedQuality = styled.span`
  color: var(--tw-shadow);
`;
const QualityDropdown = styled.div`
  position: absolute;
  top: 100px;
  padding: 1rem;
  border-radius: 12px;
  background-color: var(--bg_color200);
  backdrop-filter: blur(10px);
  width: 13.5rem;
  height: fit-content;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const QualityOption = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  background: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: start;
  color: var(--tw-shadow);
  cursor: pointer;
  &:hover {
    color: var(--white_color);
  }
`;
const Subscribe = styled.span`
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #e09016, #ffcc75, #e09016);
  font-size: 12px;
  font-weight: 600;
  -webkit-background-clip: text;
`;
const Border = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 5px;
  background-color: var(--tw-shadow);
`;
const ReportButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 400;
  color: var(--tw-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const AudioWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;
const SubtitleWrapper = styled.div`
  justify-content: start;
  align-items: center;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const OptionHeading = styled.p`
  text-align: center;
  color: var(--tw-shadow);
`;
const AudioOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
