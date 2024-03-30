"use client";
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useParams, useRouter } from "next/navigation";
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
import { TbPlayerPauseFilled } from "react-icons/tb";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import PauseRoundedIcon from "@mui/icons-material/PauseRounded";

export default function WatchedDetailedView() {
  const { id } = useParams();
  const details = cardData.find((release) => release.id === id);
  const [showvideo, setShowvideo] = useState(false);
  const [showSoundslider, setShowSoundslider] = useState(false);
  const [showSnapImg, setShowSnapImg] = useState(false);
  const [videoduration, setVideoduration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [snapshotImage, setSnapshotImage] = useState("");
  const [volume, setVolume] = useState(50);
  const [selectedQuality, setSelectedQuality] = useState("Auto");
  const [selectedSubtitle, setSelectedSubtitle] = useState("Off");
  const [muted, setMuted] = useState(false);
  const [hoversecond, setHoversecond] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showPlaycontrol, setShowPlaycontrol] = useState(false);
  const [showForwardcontrol, setShowForwardcontrol] = useState(false);
  const [showBackwardcontrol, setShowBackwardcontrol] = useState(false);
  const [showcontrols, setShowcontrols] = useState(true);
  const videoRef = useRef(null);
  const secondvideoRef = useRef(null);
  const animationRef = useRef(null);
  const snapShotRef = useRef(null);
  const router = useRouter();

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
  const handleToggleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen); // Toggle the fullscreen state
  };
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
    const timer = setTimeout(() => {
      setShowcontrols(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (muted) {
      setVolume(0);
    } else {
      setVolume(50);
    }
  }, [muted]);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 50;
    }
  }, []);
  useEffect(() => {
    if (isPaused) {
      cancelAnimationFrame(animationRef.current);
    }
  }, [isPaused]);
  const togglePlayPause = async (control) => {
    const video = videoRef.current;
    if (video) {
      setShowPlaycontrol(true);
      setTimeout(() => {
        setShowPlaycontrol(false);
      }, 1000); // Hide controls after 1 second
      if (control === "play") {
        setIsPaused(false);
        video.play();
      } else {
        setIsPaused(true);
        video.pause();
      }
    }
  };
  const fastForward = () => {
    videoRef.current.currentTime += 10;
    setShowForwardcontrol(true);
    setTimeout(() => {
      setShowForwardcontrol(false);
    }, 1000);
  };

  const revert = () => {
    videoRef.current.currentTime -= 10;
    setShowBackwardcontrol(true);
    setTimeout(() => {
      setShowBackwardcontrol(false);
    }, 1000);
  };
  const handleChange = (value) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };
  const handleVolumeChange = (value) => {
    if (videoRef.current) {
      const newVolume = value / 100;
      videoRef.current.volume = newVolume;
      setVolume(value);
      if (value === 0) {
        setMuted(true);
      } else if (value >= 1) {
        setMuted(false);
      }
    }
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleVideoMetadata = () => {
    setVideoduration(videoRef.current.duration);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    animationRef.current = requestAnimationFrame(handleTimeUpdate);
  };
  const onSliderhover = (e) => {
    let hoverTime = (
      ((e.clientX - e.target.offsetLeft) / e.target.clientWidth) *
      videoduration
    ).toFixed(2);
    hoverTime = parseFloat(hoverTime);
    if (hoverTime < 0) {
      hoverTime = 0;
    }
    if (!isNaN(hoverTime) && isFinite(hoverTime)) {
      secondvideoRef.current.currentTime = hoverTime;
      shoot(secondvideoRef?.current);
      setHoversecond(formatTime(hoverTime));
      if (snapShotRef.current) {
        snapShotRef.current.style.left = e.clientX - 135 + "px";
      }
    }
  };
  const shoot = (video) => {
    let canvas = capture(video);
    setSnapshotImage(canvas.toDataURL());
  };
  const capture = (video) => {
    let w = video.videoWidth;
    let h = video.videoHeight;
    let canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    let ctx = canvas.getContext("2d");
    ctx?.drawImage(video, 0, 0, w, h);
    return canvas;
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
          onLoadedMetadata={handleVideoMetadata}
          onTimeUpdate={handleTimeUpdate}
          onClick={() => {
            isPaused ? togglePlayPause("play") : togglePlayPause("pause");
            setShowcontrols(true);
            setTimeout(() => {
              setShowcontrols(false);
            }, 5000);
          }}
          onMouseMove={() => {
            setShowcontrols(true);
            setTimeout(() => {
              setShowcontrols(false);
            }, 5000);
          }}
        >
          <source src={details?.hovercardData[0]?.video} type="video/mp4" />
        </Player>
      )}
      {showcontrols && (
        <HeaderWrapper>
          <TitleWrapper>
            <SideArrow color="#fff" onClick={() => router.back()} />
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
      )}

      <MidController>
        {showBackwardcontrol && (
          <ForwardButton showBackwardcontrol={showBackwardcontrol}>
            <StyledLeft
              size={40}
              color="#FFF"
              showBackwardcontrol={showBackwardcontrol}
            />
            10
          </ForwardButton>
        )}

        {showPlaycontrol && (
          <ControllerButton showPlaycontrol={showPlaycontrol}>
            {isPaused ? (
              <FaPlay
                size={40}
                color="#FFF"
                onClick={() => {
                  togglePlayPause("play");
                }}
              />
            ) : (
              <TbPlayerPauseFilled
                size={30}
                color="#FFF"
                onClick={() => {
                  togglePlayPause("pause");
                }}
              />
            )}
          </ControllerButton>
        )}
        {showForwardcontrol && (
          <ForwardButton showForwardcontrol={showForwardcontrol}>
            10
            <StyledRight
              size={35}
              color="#FFF"
              showForwardcontrol={showForwardcontrol}
            />
          </ForwardButton>
        )}
      </MidController>
      {showcontrols && (
        <ControllerWrapper
          onMouseMove={(e) => onSliderhover(e)}
          onMouseLeave={() => setSnapshotImage("")}
        >
          {showSnapImg && (
            <SnapShotContainer ref={snapShotRef}>
              <SnapshotImage
                src={snapshotImage}
                alt="snapshot"
                width={220}
                height={220}
              />
              <SnapshotDuration>{hoversecond}</SnapshotDuration>
            </SnapShotContainer>
          )}

          <SliderDurationWrapper
            onMouseEnter={() => setShowSnapImg(true)}
            onMouseLeave={() => setShowSnapImg(false)}
          >
            <CustomSlider
              tooltip={{
                formatter: null,
              }}
              min={0}
              max={videoduration}
              step={0.1} // Adjust the step size as needed
              value={currentTime}
              onChange={handleChange}
            />
            <SliderDuration>
              {formatTime(videoduration - currentTime)}
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
                    size={30}
                    color="#FFF"
                    onClick={() => {
                      togglePlayPause("play");
                    }}
                  />
                ) : (
                  <TbPlayerPauseFilled
                    size={30}
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
              <ControllerButton
                onMouseEnter={() => setShowSoundslider(true)}
                onMouseLeave={() =>
                  setTimeout(() => setShowSoundslider(false), 1000)
                }
              >
                {muted ? (
                  <Mute onClick={() => setMuted(!muted)} />
                ) : (
                  <Sound onClick={() => setMuted(!muted)} />
                )}
                {showSoundslider ? (
                  <SoundSlider
                    min={0}
                    max={100}
                    tooltip={{
                      formatter: null,
                    }}
                    value={volume}
                    onChange={handleVolumeChange}
                  />
                ) : null}
              </ControllerButton>
            </PlayController>
            <ControllerButton onClick={handleToggleFullscreen}>
              {isFullscreen ? (
                <CgMinimize size={22} color="#FFF" />
              ) : (
                <CgMaximize size={22} color="#FFF" />
              )}
            </ControllerButton>
          </Controller>
        </ControllerWrapper>
      )}

      <SecondPlayer
        src={details?.hovercardData[0]?.video}
        autoPlay
        playsInline
        muted={true}
        ref={secondvideoRef}
      >
        <source src={details?.hovercardData[0]?.video} type="video/mp4" />
      </SecondPlayer>
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
  cursor: pointer;
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
  position: relative;
  bottom: 180px;
  display: flex;
  width: 100%;
  padding: 2rem;
  padding-top: 2.5rem;
  flex-direction: column;
  gap: 1rem;
  z-index: 5;
`;
const Controller = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 3.5rem;
`;
const PlayController = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
const MidController = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  cursor: pointer;
  position: absolute;
  height: 100%;
  justify-content: center;
  align-items: center;
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
  animation: ${(props) =>
    props.showPlaycontrol ? `fadeInOut 1s ease-out forwards` : "none"};
  @keyframes fadeInOut {
    0% {
      transform: scale(1.1);
      opacity: 1;
    }
    50% {
      transform: scale(1.3);
      opacity: 1;
    }
    75% {
      transform: scale(1.3);
      opacity: 0.7;
    }
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }
`;
const ForwardButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.4rem;
  color: var(--white_color);
  z-index: 5;
  font-size: 2rem;
  font-weight: 600;
  width: fit-content;
  margin-right: ${(props) => (props.showBackwardcontrol ? "30rem" : "0")};
  margin-left: ${(props) => (props.showForwardcontrol ? "30rem" : "0")};
`;
const SnapShotContainer = styled.div`
  width: 17rem;
  height: 10rem;
  position: absolute;
  bottom: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const SnapshotDuration = styled.p`
  color: var(--white_color);
  font-size: 16px;
  position: absolute;
  font-weight: 600;
  bottom: 15px;
`;

const SnapshotImage = styled(ImageView)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const SecondPlayer = styled.video`
  display: none;
`;
const StyledRight = styled(FaAnglesRight)`
  animation: ${(props) =>
    props.showForwardcontrol ? `slideAnimationRight 1s ease-out` : null};

  @keyframes slideAnimationRight {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(40px);
      translate: scale(1.6);
    }
    100% {
      transform: translateX(0);
      opacity: 0;
    }
  }
`;
const StyledLeft = styled(FaAnglesLeft)`
  animation: ${(props) =>
    props.showBackwardcontrol ? `slideAnimation 1s ease-out` : null};

  @keyframes slideAnimation {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-40px);
      translate: scale(1.6);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 0.5;
    }
  }
`;
