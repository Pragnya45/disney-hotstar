import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ImageView from "@/app/Components/Image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DoneIcon from "@mui/icons-material/Done";

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
        {/* <CreatableSelect options={langOptions} /> */}
      </HeaderWrapper>
    </Wrapper>
  );
}

export default Subscribe;
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
