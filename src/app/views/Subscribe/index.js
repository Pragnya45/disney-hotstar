import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ImageView from "@/app/Components/Image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DoneIcon from "@mui/icons-material/Done";
import { Overlay } from "antd/es/popconfirm/PurePanel";

const logo = "/assets/icons/logo-d-plus.svg";

function Subscribe() {
  const [opendropdown, setOpendropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const menuRef = useRef(null);
  const toggleDropdown = () => {
    setOpendropdown(!opendropdown);
  };
  const languageOptions = [
    {
      language: "English",
    },
    {
      language: "Hindi",
    },
    {
      language: "Telugu",
    },
    {
      language: "Tamil",
    },
  ];
  const imageList = [
    {
      image: "/assets/images/subscribe-1.webp",
    },
    {
      image: "/assets/images/subscribe-2.webp",
    },
    {
      image: "/assets/images/subscribe-3.webp",
    },
    {
      image: "/assets/images/subscribe-4.webp",
    },
    {
      image: "/assets/images/subscribe-5.webp",
    },
    {
      image: "/assets/images/subscribe-1.webp",
    },
    {
      image: "/assets/images/subscribe-2.webp",
    },
    {
      image: "/assets/images/subscribe-3.webp",
    },
    {
      image: "/assets/images/subscribe-4.webp",
    },
    {
      image: "/assets/images/subscribe-5.webp",
    },
    {
      image: "/assets/images/subscribe-1.webp",
    },
    {
      image: "/assets/images/subscribe-2.webp",
    },
    {
      image: "/assets/images/subscribe-3.webp",
    },
    {
      image: "/assets/images/subscribe-4.webp",
    },
    {
      image: "/assets/images/subscribe-5.webp",
    },
    {
      image: "/assets/images/subscribe-1.webp",
    },
    {
      image: "/assets/images/subscribe-2.webp",
    },
    {
      image: "/assets/images/subscribe-3.webp",
    },
    {
      image: "/assets/images/subscribe-4.webp",
    },
    {
      image: "/assets/images/subscribe-5.webp",
    },
    {
      image: "/assets/images/subscribe-1.webp",
    },
    {
      image: "/assets/images/subscribe-2.webp",
    },
    {
      image: "/assets/images/subscribe-3.webp",
    },
    {
      image: "/assets/images/subscribe-4.webp",
    },
    {
      image: "/assets/images/subscribe-5.webp",
    },
    {
      image: "/assets/images/subscribe-1.webp",
    },
    {
      image: "/assets/images/subscribe-2.webp",
    },
    {
      image: "/assets/images/subscribe-3.webp",
    },
    {
      image: "/assets/images/subscribe-4.webp",
    },
    {
      image: "/assets/images/subscribe-5.webp",
    },
    {
      image: "/assets/images/subscribe-1.webp",
    },
    {
      image: "/assets/images/subscribe-2.webp",
    },
    {
      image: "/assets/images/subscribe-3.webp",
    },
    {
      image: "/assets/images/subscribe-4.webp",
    },
    {
      image: "/assets/images/subscribe-5.webp",
    },
  ];
  const handleMenu = (e) => {
    e.stopPropagation();
    if (
      menuRef.current &&
      opendropdown &&
      !menuRef.current.contains(e.target)
    ) {
      setOpendropdown(false);
    }
  };
  if (typeof window !== "undefined") {
    window && window.addEventListener("mousedown", handleMenu);
  }
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setOpendropdown(false);
  };
  return (
    <Wrapper>
      <HeaderWrapper>
        <LogoWrapper>
          <Close />
          <Image src={logo} alt="disney-logo" width={81} height={70} />
        </LogoWrapper>
        <DropdownWrapper>
          <LanguageDropdown onClick={() => toggleDropdown()}>
            {selectedLanguage}
            <Arrowdown />
          </LanguageDropdown>
          {opendropdown && (
            <OptionMenu ref={menuRef}>
              <DisplayLanguage onClick={() => toggleDropdown()}>
                {selectedLanguage} <Arrowup />
              </DisplayLanguage>
              <LanguageOptions>
                {languageOptions.map((option, index) => (
                  <Option
                    key={index}
                    onClick={() => handleLanguageSelect(option.language)}
                    isSelected={option.language === selectedLanguage}
                  >
                    <Select isSelected={option.language === selectedLanguage} />
                    {option.language}
                  </Option>
                ))}
              </LanguageOptions>
            </OptionMenu>
          )}
        </DropdownWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <LeftContent>
          <OverlayBg></OverlayBg>
          <BgAnimation>
            <ImageContainer>
              {imageList.map((item, index) => (
                <SubscribeImage
                  key={index}
                  src={item.image}
                  alt="subscribe"
                  width={120}
                  height={160}
                />
              ))}
            </ImageContainer>
          </BgAnimation>
          <SubscribeTextContent>
            <Title>Subscribe now and start streaming</Title>
            <Instruction>
              You will be able to watch only on Mobile app
            </Instruction>
          </SubscribeTextContent>
        </LeftContent>
        {/* <RightContent>
          <Table>
            <col
              style={{
                width: "30%",
              }}
            />
            <col
              style={{
                width: "20%",
                backgroundAttachment: "fixed",
                background: "var(--linear-gradient-color900)",
              }}
            />
            <col
              style={{
                width: "20%",
              }}
            />
            <col
              style={{
                width: "20%",
              }}
            />

            <TableHeader>
              <TableRow>
                <Tablehead></Tablehead>
                <Tablehead>
                  <Heading>Mobile</Heading>
                </Tablehead>
                <Tablehead>
                  <Heading>Super</Heading>
                </Tablehead>
                <Tablehead>
                  <Heading>Premium</Heading>
                </Tablehead>
              </TableRow>
            </TableHeader>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </RightContent> */}
      </ContentWrapper>
    </Wrapper>
  );
}

export default Subscribe;
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg_color300);
  position: sticky;
  top: 0;
  z-index: 5;
  padding: 1.5rem 5rem 2rem 5rem;
  width: 100%;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Close = styled(CloseIcon)`
  color: var(--white_color);
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const Arrowdown = styled(KeyboardArrowDownIcon)`
  color: var(--white_color);
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const Arrowup = styled(KeyboardArrowUpIcon)`
  color: var(--white_color);
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const Select = styled(DoneIcon)`
  color: var(--text-color700);
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: ${(props) => (props.isSelected ? 1 : 0)};
`;
const Image = styled(ImageView)`
  object-fit: contain;
`;
const LanguageDropdown = styled.button`
  position: relative;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  font-family: var(--FONT-FAMILY);
  color: var(--white_color);
  background: var(--bg_color600);
  border: 1px solid var(--bg_color800);
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 0.4rem;
  min-width: 140px;
  height: 50px;
  cursor: pointer;
`;
const DropdownWrapper = styled.div`
  position: relative;
`;
const OptionMenu = styled.div`
  width: 140px;
  height: 12rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: start;
  padding: 0.5rem;
  background: var(--bg_color800);
  border: 1px solid var(--white_color);
  border-radius: 0.4rem;
  top: 0;
  z-index: 2;
  cursor: pointer;
`;

const DisplayLanguage = styled.button`
  font-size: 16px;
  font-weight: 700;
  font-family: var(--FONT-FAMILY);
  color: var(--white_color);
  display: flex;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
const LanguageOptions = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  gap: 1rem;
  margin-right: 1.5rem;
  cursor: pointer;
  /* width: 100%;
  justify-content: center;
  align-items: center; */
`;
const Option = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background: none;
  gap: 0.2rem;
  color: ${(props) =>
    props.isSelected ? "var(--white_color)" : "var(--text-color1000)"};
  font-size: 16px;
  font-family: var(--FONT-FAMILY);
  cursor: pointer;
`;
const ContentWrapper = styled.div`
  display: flex;
`;
const LeftContent = styled.div`
  overflow: hidden;
  position: relative;
  width: 40%;
  z-index: 1;
  height: 40rem;
`;
const OverlayBg = styled.div`
  background: var(--overlay-color-2);
  width: 100%;
  min-height: 100%;
`;
const BgAnimation = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  width: 99%;
  z-index: -2;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  animation: imagetransition 20s linear infinite alternate;
  @keyframes imagetransition {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
`;
const SubscribeImage = styled(ImageView)`
  object-fit: cover;
  border-radius: 4px;
  margin: 4px;
`;
const SubscribeTextContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  top: 0;
  padding-top: 1.5rem;
  margin-left: 5rem;
`;
const Title = styled.p`
  font-family: var(--FONT-FAMILY);
  color: var(--text-color900);
  font-size: 38px;
  font-weight: 700;
`;
const Instruction = styled.p`
  -webkit-line-clamp: 1;
  font-family: var(--FONT-FAMILY);
  color: var(--gold-color-2);
  font-size: 18px;
  font-weight: 500;
  margin-top: 1rem;
`;
const RightContent = styled.div`
  width: 60%;
  margin-left: 6%;
  margin-right: 2rem;
`;
const Table = styled.table`
  width: 100%;
`;
const Contentcolumn = styled.col`
  width: 30%;
`;
const Mobilecolumn = styled.col`
  width: 20%;
  background-attachment: fixed;
  background: var(--linear-gradient-color900);
`;
const Supercolumn = styled.col`
  width: 20%;
`;
const Premuimcolumn = styled.col`
  width: 20%;
`;
const TableHeader = styled.thead``;
const TableRow = styled.tr``;
const Tablehead = styled.thead`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  padding-top: 0.5rem;
`;
const Heading = styled.p`
  color: var(--text-color500);
  font-size: 18px;
  font-weight: 700;
  font-family: var(--FONT-FAMILY);
`;
