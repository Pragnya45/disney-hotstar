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

export default function CategoryPageList() {
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Wrapper>
      <CategoryWrapper>
        <Heading>Help & Settings</Heading>
        <CategoryListWrapper>
          {categories?.map((category, index) => (
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
          ))}
        </CategoryListWrapper>
        <LogoutBtn>Log Out</LogoutBtn>
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
  height: 43rem;
`;
const Divider = styled.div`
  height: 100%;
  width: 1px;
  margin-left: 2rem;
  background: var(--linear-gradient-color700);
`;
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 4rem 1rem 1rem 2rem;
`;
const Heading = styled.h1`
  color: var(--text-color900);
  font-size: 30px;
  font-weight: 600;
  margin-left: 1rem;
`;
const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Categories = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1rem;
  min-width: 30rem;
  width: 100%;
  gap: 1.5rem;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selected ? "var(--bg_color100)" : "none"};
  border: 1px solid
    ${(props) => (props.selected ? "var(--border-color900)" : "none")};
`;
const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: ${(props) => (props.selected ? "none" : "1rem")};
  border-bottom: 1px solid
    ${(props) =>
      props.selected
        ? "none"
        : props?.lastIndex
        ? "none"
        : ` var(--bg_color700)`};
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
`;
const Subtitle = styled.p`
  color: var(--text-color500);
  font-size: 14px;
  font-weight: 400;
  margin-top: 0.5rem;
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
`;
const SectionWrapper = styled.div``;
