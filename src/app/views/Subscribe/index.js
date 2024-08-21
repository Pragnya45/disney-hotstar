"use client";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ImageView from "@/app/Components/Image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DoneIcon from "@mui/icons-material/Done";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import useQueryApi from "@/app/Hooks/useQueryApi";
import { urlObj } from "@/app/utils/url";
import Progress from "@/app/Components/Progress";

const logo = "/assets/icons/logo-d-plus.svg";

function Subscribe() {
  const [opendropdown, setOpendropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedPlan, setSelectedPlan] = useState("Quarterly");
  const [selectedType, setSelectedType] = useState("Mobile");
  const searchParams = useSearchParams();
  const contentId = searchParams.get("contentId");
  const { data: videoData, refetch } = useQueryApi({
    url: `${urlObj.video}/${contentId}`,
    queryKey: `subscribedata`,
  });
  console.log(videoData);
  const menuRef = useRef(null);
  const router = useRouter();
  const toggleDropdown = () => {
    setOpendropdown(!opendropdown);
  };
  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    if (plan === "Monthly") {
      setSelectedType("Premium");
    }
  };
  const handleTypeChange = (type) => {
    setSelectedType(type);
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
  const tableData = [
    {
      content: "All content",
      subcontent: "Movies, Live sports, TV, Specials",
      mblIcon: true,
      superIcon: true,
      premiumIcon: true,
      mblcontent: "",
      mblsubcontent: "",
      supercontent: "",
      supersubcontent: "",
      premiumcontent: "",
      premiumsubcontent: "",
    },
    {
      content: "Watch on TV or Laptop",
      subcontent: "",
      mblIcon: false,
      superIcon: true,
      premiumIcon: true,
      mblcontent: "",
      mblsubcontent: "",
      supercontent: "",
      supersubcontent: "",
      premiumcontent: "",
      premiumsubcontent: "",
    },
    {
      content: "Ads free movies and shows (except sports)",
      subcontent: "",
      mblIcon: false,
      superIcon: false,
      premiumIcon: true,
      mblcontent: "",
      mblsubcontent: "",
      supercontent: "",
      supersubcontent: "",
      premiumcontent: "",
      premiumsubcontent: "",
    },
    {
      content: "Number of devices that can be logged in",
      subcontent: "",
      mblIcon: false,
      superIcon: false,
      premiumIcon: false,
      mblcontent: "1",
      mblsubcontent: "",
      supercontent: "2",
      supersubcontent: "",
      premiumcontent: "4",
      premiumsubcontent: "",
    },
    {
      content: "Max video quality",
      subcontent: "",
      mblIcon: false,
      superIcon: false,
      premiumIcon: false,
      mblcontent: "HD",
      mblsubcontent: "720",
      supercontent: "FULL HD",
      supersubcontent: "1080P",
      premiumcontent: "4K",
      premiumsubcontent: "2160P",
    },
    {
      content: "Max audio quality",
      subcontent: "Atmos available on select titles only",
      mblIcon: false,
      superIcon: false,
      premiumIcon: false,
      mblcontent: "Stereo",
      mblsubcontent: "",
      supercontent: "Dolby Atmos",
      supersubcontent: "",
      premiumcontent: "Dolby Atmos",
      premiumsubcontent: "",
    },
  ];
  const planOptions = [
    {
      type: "Mobile",
      quarterly: "149",
      monthly: null,
      yearly: "499",
    },
    {
      type: "Super",
      quarterly: "299",
      quarterlyTime: "/3Month",
      monthly: null,
      yearly: "899",
    },
    {
      type: "Premium",
      quarterly: "499",
      monthly: "299",
      yearly: "1499",
    },
  ];
  const planButtons = ["Quarterly", "Yearly", "Monthly"];
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
      {contentId && videoData?.response ? (
        <>
          <HeaderWrapper>
            <LogoWrapper>
              <Close onClick={() => router.push("/my-page")} />
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
                        <Select
                          isSelected={option.language === selectedLanguage}
                        />
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
                {contentId ? (
                  <StyledImage
                    src={videoData?.response?.img}
                    alt="image"
                    height={250}
                    width={180}
                  />
                ) : null}
                <Title>Subscribe now and start streaming</Title>
                {selectedType === "Mobile" && (
                  <Instruction>
                    You will be able to watch only on Mobile app
                  </Instruction>
                )}
              </SubscribeTextContent>
            </LeftContent>
            <RightContent>
              <Table>
                <ColGroup>
                  <ContentColumn />
                  <MobileColumn selectedType={selectedType === "Mobile"} />
                  <SuperColumn selectedType={selectedType === "Super"} />
                  <PremiumColumn selectedType={selectedType === "Premium"} />
                </ColGroup>
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
                <TableBody>
                  {tableData.map((item, index) => (
                    <TableBodyrow key={index}>
                      <TableData>
                        <Content>{item.content}</Content>
                        <br />
                        <Subcontent>{item.subcontent}</Subcontent>
                      </TableData>
                      {item.mblcontent === "" ? (
                        item.mblIcon ? (
                          <TableData>
                            <Avalable />
                          </TableData>
                        ) : (
                          <TableData>
                            <NotAvailable />
                          </TableData>
                        )
                      ) : (
                        <TableData>
                          <RowContent>{item.mblcontent}</RowContent>
                          <br />
                          <RowsubContent>{item.mblsubcontent}</RowsubContent>
                        </TableData>
                      )}
                      {item.supercontent === "" ? (
                        item.superIcon ? (
                          <TableData>
                            <Avalable />
                          </TableData>
                        ) : (
                          <TableData>
                            <NotAvailable />
                          </TableData>
                        )
                      ) : (
                        <TableData>
                          <RowContent>{item.supercontent}</RowContent>
                          <br />
                          <RowsubContent>{item.supersubcontent}</RowsubContent>
                        </TableData>
                      )}
                      {item.premiumcontent === "" ? (
                        item.premiumIcon ? (
                          <TableData>
                            <Avalable />
                          </TableData>
                        ) : (
                          <TableData>
                            <NotAvailable />
                          </TableData>
                        )
                      ) : (
                        <TableData>
                          <RowContent>{item.premiumcontent}</RowContent>
                          <br />
                          <RowsubContent>
                            {item.premiumsubcontent}
                          </RowsubContent>
                        </TableData>
                      )}
                    </TableBodyrow>
                  ))}
                </TableBody>
              </Table>
              <ChoosePlan>
                {planButtons.map((button, index) => (
                  <PlanButton
                    selected={selectedPlan === button}
                    key={index}
                    onClick={() => handlePlanChange(button)}
                  >
                    {button}
                    {selectedPlan === button && (
                      <IconWrapper>
                        <Tick />
                      </IconWrapper>
                    )}
                  </PlanButton>
                ))}
              </ChoosePlan>
              <CustomPlan>
                {planOptions.map((option, index) => (
                  <PlanOption
                    key={index}
                    disabled={
                      selectedPlan === "Monthly"
                        ? option.monthly !== null
                          ? false
                          : true
                        : false
                    }
                    selectedoption={
                      selectedPlan === "Monthly"
                        ? option.monthly !== null
                          ? selectedType === option.type
                          : null
                        : selectedType === option.type
                    }
                    onClick={() => handleTypeChange(option.type)}
                  >
                    <TickIconWrapper
                      selectedoption={
                        selectedPlan === "Monthly"
                          ? option.monthly !== null
                            ? selectedType === option.type
                            : null
                          : selectedType === option.type
                      }
                    >
                      <Tick />
                    </TickIconWrapper>

                    <PlanType
                      selectedoption={
                        selectedPlan === "Monthly"
                          ? option.monthly !== null
                            ? selectedType === option.type
                            : null
                          : selectedType === option.type
                      }
                      disabledcolor={
                        selectedPlan === "Monthly" && option.monthly === null
                      }
                    >
                      {option.type}
                    </PlanType>
                    <Price>
                      <SuperScript>
                        {selectedPlan === "Monthly"
                          ? option.monthly !== null
                            ? "₹"
                            : null
                          : "₹"}
                      </SuperScript>
                      {selectedPlan === "Quarterly"
                        ? option.quarterly
                        : selectedPlan === "Monthly"
                        ? option.monthly
                        : selectedPlan === "Yearly"
                        ? option.yearly
                        : ""}
                      <Timeline>
                        {selectedPlan === "Quarterly"
                          ? "/3Months"
                          : selectedPlan === "Yearly"
                          ? "/Year"
                          : selectedPlan === "Monthly"
                          ? option.monthly !== null
                            ? "/Month"
                            : null
                          : ""}
                      </Timeline>
                    </Price>
                  </PlanOption>
                ))}
              </CustomPlan>
              <Continue>
                Continue with {selectedType}
                <Arrowleft />
              </Continue>
            </RightContent>
          </ContentWrapper>
        </>
      ) : (
        <ProgressWrapper>
          <Progress />
        </ProgressWrapper>
      )}
    </Wrapper>
  );
}

export default Subscribe;

const ProgressWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(ImageView)`
  border-radius: 4px;
  border: 1px solid white;
  margin-bottom: 0.5rem;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--bg_color1000);
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
const Arrowleft = styled(KeyboardArrowRightIcon)`
  color: var(--text-color600);
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
const Avalable = styled(DoneIcon)`
  color: var(--text-color500);
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
`;
const Tick = styled(DoneIcon)`
  color: var(--white_color);
  width: 18px;
  height: 18px;
  text-align: center;
  cursor: pointer;
`;
const NotAvailable = styled(CloseIcon)`
  color: var(--text-color500);
  width: 30px;
  height: 30px;
  cursor: pointer;
  text-align: center;
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
  height: auto;
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
  margin-left: 9%;
  margin-right: 4.5rem;
`;
const Table = styled.table`
  width: 100%;
  height: fit-content;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;
const TableRow = styled.tr``;
const Heading = styled.p`
  color: var(--text-color500);
  font-size: 18px;
  font-weight: 700;
  font-family: var(--FONT-FAMILY);
`;
const Tablehead = styled.th`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  padding-top: 1rem;
  &:nth-child(2) {
    ${Heading} {
      color: var(--gold-color);
    }
  }
`;
const TableBodyrow = styled.tr``;
const TableBody = styled.tbody``;
const ColGroup = styled.colgroup``;
const MobileColumn = styled.col`
  background: ${(props) =>
    props.selectedType ? "var(--linear-gradient-color900)" : "none"};
  width: 12%;
`;
const ContentColumn = styled.col`
  width: 33%;
`;
const SuperColumn = styled.col`
  width: 12%;
  background: ${(props) =>
    props.selectedType ? "var(--linear-gradient-color900)" : "none"};
`;
const PremiumColumn = styled.col`
  width: 12%;
  background: ${(props) =>
    props.selectedType ? "var(--linear-gradient-color900)" : "none"};
`;
const RowContent = styled.span`
  color: var(--text-color500);
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;
const RowsubContent = styled.span`
  color: var(--text-color500);
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-top: 0.5rem;
`;

const TableData = styled.td`
  padding-top: 15px;
  padding-bottom: 10px;
  &:nth-child(2) {
    ${Avalable},${NotAvailable}, ${RowContent},${RowsubContent} {
      color: var(--white_color);
    }
  }
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    text-align: center;
  }
`;
const Content = styled.span`
  color: var(--text-color900);
  font-family: var(--FONT-FAMILY);
  font-size: 18px;
  font-weight: 400;
  text-align: start !important;
`;
const Subcontent = styled.span`
  color: var(--text-color500);
  font-family: var(--FONT-FAMILY);
  font-size: 16px;
  font-weight: 400;
  text-align: start !important;
  margin-top: 1rem;
`;

const ChoosePlan = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: fit-content;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1rem;
  background: var(--bg_color700);
`;
const PlanButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: ${(props) =>
    props.selected ? "var(--white_color)" : "var(--text-color500)"};
  font-weight: 600;
  display: flex;
  cursor: pointer;
`;
const IconWrapper = styled.div`
  border-radius: 50%;
  padding: 0.8rem;
  width: 2px;
  height: 2px;
  background: var(--linear-gradient-color800);
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CustomPlan = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  column-gap: 12px;
  margin-top: 1rem;
`;
const PlanOption = styled.button`
  border: 2px solid
    ${(props) =>
      props.selectedoption ? "var(--white_color)" : "var(--bg_color700)"};
  width: 100%;
  height: 100%;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
  background: none;
  outline: none;
  cursor: pointer;
`;
const TickIconWrapper = styled.div`
  background: var(--linear-gradient-color800);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: -3px;
  border: 4px solid var(--bg_color1000);
  place-items: center;
  display: ${(props) => (props.selectedoption ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
`;
const PlanType = styled.p`
  font-size: 20px;
  color: ${(props) =>
    props.selectedoption
      ? "var(--gold-color)"
      : props.disabledcolor
      ? "var(--text-color500)"
      : "var(--white_color)"};
  font-weight: 600;
  font-family: var(--FONT-FAMILY);
`;
const Price = styled.p`
  font-size: 30px;
  color: var(--white_color);
  font-weight: 600;
  margin-top: 0.5rem;
  font-family: var(--FONT-FAMILY);
`;
const SuperScript = styled.sup`
  font-size: 16px;
  font-weight: 600;
  font-family: var(--FONT-FAMILY);
`;
const Timeline = styled.span`
  font-size: 14px;
  font-style: 500;
  font-family: var(--FONT-FAMILY);
`;
const Continue = styled.button`
  border: none;
  background: var(--button-gradieent-color);
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 1.5rem;
  padding: 0.8rem 1rem;
  color: var(--text-color600);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transition-property: transform, background-color;
  &:hover {
    transform: scale(1.02);
  }
`;
