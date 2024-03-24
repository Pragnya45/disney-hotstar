"use client";
import React, { useState, useEffect, useRef } from "react";
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
import { Tooltip } from "antd";
import { MdDone } from "react-icons/md";
import { PiWarningBold } from "react-icons/pi";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { CgMaximize } from "react-icons/cg";
import { CgMinimize } from "react-icons/cg";
import { Slider } from "antd";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import PauseRoundedIcon from "@mui/icons-material/PauseRounded";

export default function WatchedDetailedView() {
  const { id } = useParams();
  const details = cardData.find((release) => release.id === id);
  const [showvideo, setShowvideo] = useState(false);
  const [showSoundslider, setShowSoundslider] = useState(false);
  const [showAudioMenu, setShowAudioMenu] = useState(false);
  const [videoduration, setVideoduration] = useState();
  const [videoProgress, setVideoProgress] = useState();
  const [selectedQuality, setSelectedQuality] = useState("Auto");
  const [selectedSubtitle, setSelectedSubtitle] = useState("Off");
  const [muted, setMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
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
  const handleSelectSubtitle = (option) => {
    setSelectedSubtitle(option);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowvideo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoduration(video.duration);
    }
  }, []);
  const togglePlayPause = async (control) => {
    const video = videoRef.current;
    console.log("called");
    console.log(video);
    if (control === "play") {
      setIsPaused(false);
      video.play();
    } else {
      setIsPaused(true);
      video.pause();
    }
  };
  const fastForward = () => {
    videoRef.current.currentTime += 10;
  };

  const revert = () => {
    videoRef.current.currentTime -= 10;
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
          autoPlay
          playsInline
          muted={muted}
          ref={videoRef}
        >
          <source src={details?.hovercardData[0]?.video} type="video/mp4" />
        </Player>
      )}
      <HeaderWrapper>
        <TitleWrapper>
          <SideArrow color="#fff" />
          {details?.title}
        </TitleWrapper>
        <SettingsWrapper>
          <DropdownWrapper>
            <QualityButton>
              <Play />
              Quality <SelectedQuality>{selectedQuality}</SelectedQuality>
            </QualityButton>
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
          </DropdownWrapper>
          <AudioButtonWrapper>
            <AudioButton>
              <PiChatCenteredTextBold size={22} color="#fff" />
              Audio & Subtitles
            </AudioButton>
            <QualityDropdown>
              <AudioWrapper>
                <AudioOptionWrapper>
                  <OptionHeading>Audio</OptionHeading>

                  {AudioData.map((option, index) => (
                    <QualityOption key={index}>
                      <MdDone size={15} color="#3586f0" />
                      {option.audio}
                    </QualityOption>
                  ))}
                </AudioOptionWrapper>
                <SubtitleWrapper>
                  <OptionHeading>Subtitle</OptionHeading>
                  {SubtitleData.map((option, index) => (
                    <QualityOption
                      key={index}
                      onClick={() => handleSelectSubtitle(option.subtitle)}
                    >
                      {selectedSubtitle === option.subtitle ? (
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
          </AudioButtonWrapper>
          <EpButton>
            <PiSkipForwardBold size={22} color="#fff" />
            Next Episode
          </EpButton>
        </SettingsWrapper>
      </HeaderWrapper>
      <ControllerWrapper>
        <SliderDurationWrapper>
          <CustomSlider
            tooltip={{
              formatter: null,
            }}
          />
          <SliderDuration>
            {Math.floor(videoduration / 60) +
              ":" +
              ("0" + Math.floor(videoduration % 60)).slice(-2)}
          </SliderDuration>
        </SliderDurationWrapper>
        <Controller>
          <PlayController>
            <ControllerButton onClick={() => revert()}>
              <FaAnglesLeft size={22} color="#FFF" />
              10
            </ControllerButton>
            <ControllerButton>
              {isPaused ? (
                <FaPlay
                  size={35}
                  color="#FFF"
                  onClick={() => {
                    togglePlayPause("play");
                  }}
                />
              ) : (
                <PauseRoundedIcon
                  style={{ fontSize: 50 }}
                  color="#FFF"
                  onClick={() => {
                    togglePlayPause("pause");
                  }}
                />
              )}
            </ControllerButton>
            <ControllerButton onClick={() => fastForward()}>
              10
              <FaAnglesRight size={22} color="#FFF" />
            </ControllerButton>
            <ControllerButton onMouseEnter={() => setShowSoundslider(true)}>
              {muted ? (
                <Mute onClick={() => setMuted(!muted)} />
              ) : (
                <Sound onClick={() => setMuted(!muted)} />
              )}
              {showSoundslider ? (
                <SoundSlider
                  tooltip={{
                    formatter: null,
                  }}
                />
              ) : null}
            </ControllerButton>
          </PlayController>
          <ControllerButton>
            <CgMaximize size={22} color="#FFF" />{" "}
            <CgMinimize size={22} color="#FFF" />
          </ControllerButton>
        </Controller>
      </ControllerWrapper>
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
const Player = styled.video`
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
  gap: 2rem;
`;
const QualityDropdown = styled.div`
  position: absolute;
  top: 30px;
  padding: 1rem;
  border-radius: 12px;
  background-color: var(--bg_color200);
  backdrop-filter: blur(10px);
  width: 13.5rem;
  height: fit-content;
  border-radius: 8px;
  display: none !important;
  flex-direction: column;
  gap: 1rem;
`;
const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: fit-content;
  &:hover {
    ${QualityDropdown} {
      display: flex !important;
    }
    transition-delay: 2s;
  }
`;
const AudioButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  outline: none;
  border: none;
  background: none;
  color: var(--white_color);
  font-weight: 700;
  font-size: 1rem;
  width: fit-content;
  &:hover {
    transform: scaleX(1.1);
  }
`;
const AudioButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: fit-content;
  &:hover {
    ${QualityDropdown} {
      display: flex !important;
    }
    transition-delay: 2s;
  }
`;
const AudioDropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: fit-content;
  &:hover {
    ${QualityDropdown} {
      display: flex !important;
    }
    transition-delay: 2s;
  }
`;

const QualityButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: fit-content;
  background: none;
  color: var(--white_color);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    transform: scaleX(1.1);
  }
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
  width: fit-content;
  &:hover {
    transform: scaleX(1.1);
  }
`;
const SelectedQuality = styled.span`
  color: var(--tw-shadow);
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
const ControllerWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  width: 100%;
  padding: 2rem;
  flex-direction: column;
`;
const Controller = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const PlayController = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
const ControllerButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.4rem;
  color: var(--white_color);
  z-index: 5;
  font-size: 1rem;
  font-weight: 600;
  width: fit-content;
`;
const CustomSlider = styled(Slider)`
  z-index: 5;
  width: 100%;
  &:hover {
    .ant-slider-rail {
      height: 8px !important;
    }
    .ant-slider-track {
      height: 8px !important;
    }
    .ant-slider-handle::after {
      box-shadow: 0 0 0 6px #ffffff !important;
    }
  }
  .ant-slider-rail {
    background-color: var(--white_color900) !important;
  }
  .ant-slider-track {
    background-color: var(--bg_color400) !important;
    &:hover {
      background-color: var(--bg_color400) !important;
    }
  }
  .ant-slider-handle::after {
    box-shadow: 0 0 0 2px #ffffff !important;
  }
`;
const SoundSlider = styled(Slider)`
  width: 8rem;
  z-index: 5;
  .ant-slider-rail {
    background-color: var(--white_color900) !important;
  }
  .ant-slider-track {
    background-color: var(--bg_color400) !important;
    &:hover {
      background-color: var(--bg_color400) !important;
    }
  }
  .ant-slider-handle::after {
    box-shadow: 0 0 0 2px #ffffff !important;
  }
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
const SliderDurationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  z-index: 5;
`;
const SliderDuration = styled.p`
  color: var(--white_color);
  font-size: 12px;
`;
