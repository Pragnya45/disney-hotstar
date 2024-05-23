import { useEffect } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import ImageView from "@/app/Components/Image";
import Subscribe from "./Subscribe";
import ParentalControl from "./PerentalControl";
import Support from "./Support";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";
import { RiDownloadLine } from "react-icons/ri";
import { LiaLanguageSolid } from "react-icons/lia";

export default function CategoryPageList() {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const isWideScreen = screenWidth > 600;

  const categories = [
    {
      title: "Subscription & Devices",
      subtitle: "Manage Subscription & Devices",
      icon: <RiAccountCircleLine size={40} color="#e1e6f0" />,
    },
    {
      title: "Parental Controls",
      subtitle: "Parental Controls",
      icon: <MdLockOutline size={40} color="#e1e6f0" />,
    },
    {
      title: "Help & Support",
      subtitle: "Help Centre",
      icon: <MdOutlineHelpOutline size={40} color="#e1e6f0" />,
    },
  ];
  const Mblcategories = [
    {
      title: "Account Settings",
      subtitle: "Subscription Details & Device Manager",
      icon: <RiAccountCircleLine size={30} color="#e1e6f0" />,
      arrow: <FaAngleRight size={15} color="#707a94" />,
    },
    {
      title: "Downloads",
      subtitle: "Download quality,storage & more",
      icon: <RiDownloadLine size={30} color="#e1e6f0" />,
      arrow: <FaAngleDown size={15} color="#707a94" />,
    },
    {
      title: "App Language",
      subtitle: "English",
      icon: <LiaLanguageSolid size={30} color="#e1e6f0" />,
      arrow: <FaAngleRight size={15} color="#707a94" />,
    },
    {
      title: "Parental Controls",
      subtitle: "Parental Lock",
      icon: <MdLockOutline size={30} color="#e1e6f0" />,
      arrow: <FaAngleDown size={15} color="#707a94" />,
    },
    {
      title: "Help & Support",
      subtitle: "Help Centre",
      icon: <MdOutlineHelpOutline size={30} color="#e1e6f0" />,
      arrow: <FaAngleRight size={15} color="#707a94" />,
    },
  ];
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Wrapper>
      <CategoryWrapper>
        <HeadingWrapper>
          <StyledArrowLeft
            size={22}
            color="#e1e6f0"
            onClick={() => router.back()}
          />
          <Heading>Help & Settings</Heading>
        </HeadingWrapper>
        <CategoryListWrapper>
          {isWideScreen
            ? categories?.map((category, index) => (
                <Categories
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  selected={selectedIndex === index}
                >
                  {category?.icon}
                  <ContentWrapper
                    lastIndex={index === categories?.length - 1}
                    selected={selectedIndex === index}
                  >
                    <Content>
                      <Title>{category?.title}</Title>
                      <Subtitle>{category?.subtitle}</Subtitle>
                    </Content>
                    <StyledLeft
                      color={selectedIndex === index ? "#fff" : "#707a94"}
                      size={15}
                    />
                  </ContentWrapper>
                </Categories>
              ))
            : Mblcategories?.map((category, i) => (
                <Categories key={i}>
                  {category?.icon}
                  <ContentWrapper lastIndexMbl={i === category?.length - 1}>
                    <Content>
                      <Title>{category?.title}</Title>
                      <Subtitle>{category?.subtitle}</Subtitle>
                    </Content>
                    {category?.arrow}
                  </ContentWrapper>
                </Categories>
              ))}
        </CategoryListWrapper>
        <LogoutWrapper>
          <LogoutBtn>Log Out</LogoutBtn>
          <PrivacyWrapper>
            <Text>Privacy Policy</Text>
            <Dot>.</Dot>
            <Text>Subscriber Agreement</Text>
          </PrivacyWrapper>
          <Version>App Version 24.01.29.6</Version>
        </LogoutWrapper>
      </CategoryWrapper>
      <Divider></Divider>
      <SectionWrapper>
        {selectedIndex === 0 ? (
          <Subscribe />
        ) : selectedIndex === 1 ? (
          <ParentalControl />
        ) : selectedIndex === 2 ? (
          <Support />
        ) : (
          <Subscribe />
        )}
      </SectionWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
`;
const Divider = styled.div`
  height: 100%;
  width: 1px;
  margin-left: 2rem;
  background: var(--linear-gradient-color700);
  @media (max-width: 600px) {
    display: none;
  }
`;
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 4rem 1rem 1rem 2rem;
  width: 60%;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0rem;
    gap: 0rem;
  }
`;
const Heading = styled.h1`
  color: var(--text-color900);
  font-size: 30px;
  font-weight: 600;
  margin-left: 1rem;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
  @media (max-width: 600px) {
    padding: 1rem;
    height: auto;
    align-items: center;
    margin-top: 0rem;
    padding-top: 0;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selected ? "var(--bg_color100)" : "none"};
  border: 1px solid
    ${(props) => (props.selected ? "var(--border-color900)" : "none")};
  @media (max-width: 600px) {
    background-color: ${(props) => (props.selected ? "transparent" : "none")};
    border: none !important;
    gap: 1rem;
    padding: 0.5rem;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${(props) => (props.selected ? "none" : "1rem")};
  border-bottom: 1px solid
    ${(props) =>
      props.selected
        ? "none"
        : props?.lastIndex
        ? "none"
        : ` var(--bg_color700)`} !important;
  @media (max-width: 600px) {
    border-bottom: 1px solid
      ${(props) => (props.lastIndexMbl ? "none" : `var(--bg_color700)`)} !important;
  }
`;
const StyledLeft = styled(FaAngleRight)`
  margin-left: auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.p`
  color: var(--text-color900);
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 500;
  }
`;
const Subtitle = styled.p`
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 400;
  margin-top: 0.5rem;
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 400;
  }
`;
const LogoutBtn = styled.button`
  width: 100px;
  border-radius: 6px;
  background-color: var(--bg_color600);
  color: white;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  padding: 12px;
  margin-top: 4rem;
  margin-left: 2rem;
  cursor: pointer;
  @media (max-width: 600px) {
    background-color: transparent;
    font-size: 14px;
    margin-left: 0rem;
    margin-top: 2rem;
    color: var(--bg_color400);
  }
`;
const SectionWrapper = styled.div`
  width: 100%;
  @media (max-width: 600px) {
    display: none;
  }
`;
const HeadingWrapper = styled.div`
  display: flex;
  align-items: start;
  padding: 1rem;
  @media (max-width: 600px) {
    border-bottom: 1px solid var(--bg_color700);
  }
`;
const StyledArrowLeft = styled(FiArrowLeft)`
  display: none;
  @media (max-width: 600px) {
    display: block;
    cursor: pointer;
  }
`;
const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  @media (max-width: 600px) {
    align-items: center;
  }
`;
const PrivacyWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
  }
`;
const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--text-color1000);
`;
const Dot = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--bg_color700);
`;
const Version = styled.p`
  display: none;
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 400;
    color: var(--text-color1000);
    text-align: center;
  }
`;
